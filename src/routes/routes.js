import React, { lazy } from 'react';
import { Route, Routes } from 'react-router-dom'

const Dashboard = lazy(() => import('../pages/dashboard/dashboard'));
// const Footer = lazy(() => import('../pages/dashboard/dashboard'));

const AppRoutes = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Dashboard />} />
                {/* <Route path="/kanban" element={<Footer />} /> */}
                {/* <Route path="/user" element={<A />} /> */}
            </Routes>
        </>
    )
}

export default AppRoutes