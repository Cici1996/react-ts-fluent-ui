import React, { lazy, Suspense, useEffect } from 'react'
import { useAuth } from 'react-oidc-context'
import { Route, Routes } from 'react-router-dom'
import { Callback, Layout } from '../pages'
import { userManager } from '../utils'

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

export const MainRouter: React.FC = () => {
    const auth = useAuth();
    useEffect(() => {
        userManager.getUser().then((user) => {
            console.log(auth.user)
            if (auth.user == null) userManager.signinRedirect()
        })
    }, [])
    return (
        <Routes>
            <Route path="/" element={auth.isAuthenticated ? <Layout /> : <div>Loading....</div>}>
                <Route path="/engagement" element={<SuspanseFallBack children={<Engagement />} />} />
                <Route path="/engagement/new" element={<SuspanseFallBack children={<EngagementForm />} />} />
            </Route>
            <Route path="/signin-oidc" element={<Callback />} />
        </Routes>
    )
}