import React from "react";
import { Link, useParams } from "react-router-dom";
import EditUserPage from "./editUserPage";

const UserPage = () => {
    const params = useParams();
    const { userId, profile } = params;

    return profile === "edit" ? (
        <EditUserPage />
    ) : (
        <>
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
