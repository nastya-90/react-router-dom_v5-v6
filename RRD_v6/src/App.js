import { Link, Navigate, Route, Routes } from "react-router-dom";
import Home from "./home";
import Users from "./users";
import UserslistPage from "./usersListPage";
import EditUserPage from "./editUserPage";
import UserPage from "./userPage";

function App() {
    return (
        <div>
            <h1>App Layout</h1>
            <p>
                <Link to="/users">Users List Page</Link>
            </p>
            <Routes>
                <Route index element={<Home />} />
                <Route path="users" element={<Users />}>
                    <Route index element={<UserslistPage />} />
                    <Route path=":userId">
                        <Route path="profile" element={<UserPage />} />
                        <Route path="edit" element={<EditUserPage />} />
                    </Route>
                </Route>
                <Route path="*" element={<Navigate to={"/"} />} />
            </Routes>
        </div>
    );
}

export default App;
