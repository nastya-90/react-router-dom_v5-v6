import React from "react";
import { Link, useParams } from "react-router-dom";
import EditUserPage from "./editUserPage";

const UserPage = () => {
    const params = useParams();
    const { userId, profile } = params;
    console.log("paramsUserPage", params);
    return profile === "edit" ? (
        <EditUserPage />
    ) : (
        <>
            <h1>Users Layout</h1>
            <p>
                <Link to="/">Main Page</Link>
            </p>
            <h1>User List Page</h1>
            <ul>
                <li>
                    <Link to="/users">Users List Page</Link>
                </li>
                <li>
                    <Link to={`/users/${userId}/edit`}>Edit this user</Link>
                </li>
            </ul>

            <p>{`userId:${userId}`}</p>
        </>
    );
};

export default UserPage;
