import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import UserProfile from "./UserProfile";
import PostList from "./PostList";

function User() {
    const { path } = useRouteMatch();

    return (
        <Switch>
            <Route path={`${path}/posts`}>
                <PostList />
            </Route>
            <Route path={path}>
                <UserProfile />
            </Route>
        </Switch>
    )
}

export default User;