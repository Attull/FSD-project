import React from 'react'
import { Link } from 'react-router-dom';

export const Header = () => {
    return (
        <div className="navbar">
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/addstudent">Add students</Link>
                </li>
            </ul>
        </div>
    )
}
