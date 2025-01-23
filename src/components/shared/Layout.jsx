import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'
import Header from './Header'

function Layout() {
    return (
        <div className="flex flex-row bg-neutral-100 h-screen w-screen overflow-hidden">
            <div className="flex">
                <Sidebar />
            </div>
            <div className="overflow-y-scroll flex-1">
                <div className="sticky top-0 z-50">
                    <Header />
                </div>
                <div className="p-4">{<Outlet />}</div>
            </div>
        </div>
    )
}

export default Layout
