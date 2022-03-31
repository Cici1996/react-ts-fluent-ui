import { User } from 'oidc-client-ts'
import React, { lazy, Suspense, useEffect } from 'react'
import { useAuth } from 'react-oidc-context'
import { Route, Routes, useNavigate } from 'react-router-dom'
import { Callback, Layout } from '../pages'
import { signinRedirect, userManager } from '../utils'

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
    
    const auth = useAuth();
    const navigate = useNavigate();
    useEffect(() => {
        userManager.getUser().then((user: User | null) => {
            if (user == null) signinRedirect()
        })
    }, [])

    return (
        <Routes>
            <Route path="/" element={auth.isAuthenticated ? <Layout /> : <div>Loading....</div>}>
                <Route path="/home" element={<SuspanseFallBack children={<Home />} />} />
                <Route path="/engagement" element={<SuspanseFallBack children={<Engagement />} />} />
                <Route path="/engagement/new" element={<SuspanseFallBack children={<EngagementForm />} />} />
            </Route>
            <Route path="/signin-oidc" element={<Callback />} />
            <Route path="/signout-oidc" element={<div>Sign Out Call Back</div>} />
            <Route path="/welcome" element={<SuspanseFallBack children={<Welcome />} />} />
        </Routes>
    )
}