import React from "react";
import { Link, useLocation } from "react-router-dom";

function Breadcrumbs() {
    const location = useLocation();
    const pathnames = location.pathname.split("/").filter((x) => x);

    return (
        <nav aria-label="breadcrumb" className="bg-white-100 p-1 rounded">
            <ol className="flex list-none p-0">
                <li>
                    <Link to="/" className="text-blue-600 hover:text-blue-800">
                        Home
                    </Link>
                </li>
                {pathnames.map((value, index) => {
                    const to = `/${pathnames.slice(0, index + 1).join("/")}`;
                    return (
                        <li key={to} className="flex items-center">
                            <span className="mx-2 text-gray-500">/</span>
                            <Link to={to} className="text-blue-600 hover:text-blue-800">
                                {value}
                            </Link>
                        </li>
                    );
                })}
            </ol>
        </nav>
    );
}

export default Breadcrumbs;
