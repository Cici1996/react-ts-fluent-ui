import React, { lazy, Suspense } from 'react'
import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import { Callback, Layout } from '../pages'
import { userManagerConfig } from '../utils'

interface SuspanseFallBackProps {
    children: JSX.Element | JSX.Element[]
}

const SuspanseFallBack: React.FC<SuspanseFallBackProps> = ({ children }) => {
    return (
        <Suspense fallback={<>...</>}>
            {children}
        </Suspense>
    );
}

const Engagement = lazy(() => import("../pages/engagement/Engagement"));
const EngagementForm = lazy(() => import("../pages/engagementForm/EngagementForm"));
const Home = lazy(() => import("../pages/home/Home"));
const Welcome = lazy(() => import("../pages/welcome/Welcome"));

export const MainRouter: React.FC = () => {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route path="/" element={<SuspanseFallBack children={<RequireAuth><Home /></RequireAuth>} />} />
                <Route path="/home" element={<SuspanseFallBack children={<RequireAuth><Home /></RequireAuth>} />} />
                <Route path="/engagement" element={<SuspanseFallBack children={<Engagement />} />} />
                <Route path="/engagement/new" element={<SuspanseFallBack children={<EngagementForm />} />} />
            </Route>
            <Route path="/signin-oidc" element={<Callback isCallbackLogout={false} />} />
            <Route path="/signout-oidc" element={<Callback isCallbackLogout={true} />} />
            <Route path="/welcome" element={<SuspanseFallBack children={<Welcome />} />} />
        </Routes>
    )
}

const RequireAuth = ({ children }: { children: JSX.Element }) => {
    let location = useLocation();

    const storageAuthKey = `oidc.user:${userManagerConfig.authority}:${userManagerConfig.client_id}`
    const item = sessionStorage.getItem(storageAuthKey)
    if (!item) {
        return <Navigate to="/welcome" state={{ from: location }} replace />;
    }

    return children;
}