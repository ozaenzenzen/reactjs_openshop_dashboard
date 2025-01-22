import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'
import Header from './Header'

function Layout() {
    return (
        <div className="bg-red-700">
            <div className=" fixed z-50">
                <Sidebar />
            </div>
            <div className="ms-60 w-[calc(100%-240)] bg-green-600">
                <div className="sticky top-0 z-50">
                    <Header />
                </div>
                <div className="p-4">{<Outlet />}</div>
            </div>
        </div>
    )
}

export default Layout
