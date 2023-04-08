import React from "react";
import { Link, useParams } from "react-router-dom";

const EditUserPage = () => {
    const { userId } = useParams();
    const newUserId = +userId + 1;

    return (
        <div>
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
