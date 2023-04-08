import React from "react";
import { Link, useParams } from "react-router-dom";
import UserPage from "./userPage";

const UserslistPage = () => {
    const params = useParams();
    const { userId } = params;
    const users = [
        { id: 1, label: "user 1" },
        { id: 2, label: "user 2" },
        { id: 3, label: "user 3" },
        { id: 4, label: "user 4" },
        { id: 5, label: "user 5" },
    ];
    return userId ? (
        <UserPage />
    ) : (
        <>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>
                        <Link key={user.id} to={`${user.id}/profile`}>
                            {user.label}
                        </Link>
                    </li>
                ))}
            </ul>
        </>
    );
};

export default UserslistPage;
