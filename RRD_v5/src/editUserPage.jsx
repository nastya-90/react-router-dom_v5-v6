import React from "react";
import { Link, useParams } from "react-router-dom";

const EditUserPage = () => {
    const { userId } = useParams();
    const newUserId = +userId + 1;

    return (
        <div>
            <h1>Users Layout</h1>
            <p>
                <Link to="/">Main Page</Link>
            </p>
            <h1>User List Page</h1>

            <ul>
                <li>
                    <Link to={`/users/${userId}/profile`}>
                        User Profile Page
                    </Link>
                </li>
                <li>
                    <Link to={`/users/${newUserId}/profile`}>Another User</Link>
                </li>
                <li>
                    <Link to="/users">Users List Page</Link>
                </li>
            </ul>
        </div>
    );
};

export default EditUserPage;
