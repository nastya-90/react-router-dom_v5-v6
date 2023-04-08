import { Route, Switch, useParams } from "react-router-dom";
import React from "react";
import UserslistPage from "./usersListPage";
import EditUserPage from "./editUserPage";

const Users = () => {
    const params = useParams();
    console.log("params", params);
    return (
        <Switch>
            <Route path="/users/:userId?/:profile?" component={UserslistPage} />
            <Route path="/users/:userId?/:edit?" component={EditUserPage} />
        </Switch>
    );
};

export default Users;
