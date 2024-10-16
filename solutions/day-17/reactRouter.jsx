import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Link, NavLink, Outlet, useParams } from "react-router-dom";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage />,
        errorElement: <NotFoundPage />,
    },
    {
        path: "/profiles",
        element: <ProfilesPage />,
        children: [
            {
                path: "/profiles/:profileId",
                element: <ProfilePage />,
            },
        ],
    },
]);

const HomePage = () => (
    <div className="home-page">
        <h1>HOME PAGE</h1>
    </div>
);

const NotFoundPage = () => (
    <div>
        404 Not Found
        <Link to="/">Home</Link>
    </div>
)

/*
? Navigating back to the home page with an anchor (<a>) tag refreshes the entire
? application, whereas navigating back with the built-in 'Link' component performs
? client-side routing and doesn't involve re-rendering the entire page.
*/

const ProfilesPage = () => {
    const profiles = [1, 2, 3, 4, 5];

    return (
        <div className="profiles-page">
            {profiles.map((profile) => (
                <NavLink key={profile} to={`/profiles/${profile}`}
                    className={({ isActive }) => {
                    return isActive ? "text-active" : ""
                }}
                >
                    Profile {profile}
                </NavLink>
            ))}
            <Outlet />
        </div>
    )
}

const ProfilePage = () => {
    const params = useParams();
    
    return (
        <div>
            <h1>Profile Page {params.profileId}</h1>
        </div>
    )
}

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
