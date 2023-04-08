import { Link, Outlet } from "react-router-dom";
import React from "react";

const Users = () => {
    return (
        <>
            <h1>Users Layout</h1>
            <p>
                <Link to="/">Main Page</Link>
            </p>
            <h1>User List Page</h1>
            <Outlet />
        </>
    );
};

export default Users;
