import React from 'react'
import { Link } from 'react-router-dom'

function Dashboard() {
    return (
        <div>
            <p>this is dashboard</p>
            <Link to="/products" className="underline">
                go to products
            </Link>
        </div>
    )
}

export default Dashboard
