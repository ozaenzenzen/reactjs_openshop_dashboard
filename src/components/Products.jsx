import React from 'react'
import { Link } from 'react-router-dom'

function Products() {
    return (
        <div>
            this is product page{' '}
            <Link to="/" className="underline">
                go to dashboard
            </Link>
        </div>
    )
}

export default Products
