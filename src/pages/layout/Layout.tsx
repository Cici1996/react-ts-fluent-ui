import React from 'react'
import { Outlet } from 'react-router-dom'
import { Sidebar, Topbar } from '../../components'
import "./layout.css"

const Layout: React.FC = () => {
    return (
        <div className="app">
            <Topbar />
            <div className="app-body">
                <Sidebar />
                <section className="app-content" style={{ flex: 5 }}>
                    <Outlet />
                </section>
            </div>
            <div className="app-footer">
                &nbsp;
            </div>
        </div>
    )
}

export default Layout