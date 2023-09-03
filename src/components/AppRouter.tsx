import Posts from "../pages/Posts.tsx";
import {Route, Routes} from "react-router-dom";
import {ReactNode} from "react";
import SearchPosts from "../pages/SearchPosts.tsx";
import Login from "../pages/Login.tsx";
import Post from "../pages/Post.tsx";
import User from "../pages/User.tsx";

type RouteType = {
    path: string;
    element: ReactNode;
}

const routes: RouteType[] = [
    {path: "/", element: <Posts/>},
    {path: "/search", element: <SearchPosts/>},
    {path: "/login", element: <Login/>},
    {path: "/posts/:id", element: <Post/>},
    {path: "/user", element: <User/>},
]

export default function AppRouter() {
    return (
        <Routes>
            {
                routes.map((route, i) => <Route key={i} path={route.path} element={route.element}/>)
            }
        </Routes>
    )
}
