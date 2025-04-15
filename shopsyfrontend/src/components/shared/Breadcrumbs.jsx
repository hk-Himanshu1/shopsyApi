import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

function Breadcrumbs() {
    const location = useLocation();
    const pathnames = location.pathname.split("/").filter((x) => x);

    return (
        <nav aria-label="breadcrumb" className="bg-background/95 px-2 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <ol className="flex items-center space-x-2">
                <li>
                    <Button variant="link" asChild className="p-0">
                        <Link to="/">Home</Link>
                    </Button>
                </li>
                {pathnames.map((value, index) => (
                    <li key={`${value}${index}`} className="flex items-center space-x-2">
                        <ChevronRight className="h-4 w-4" />
                        <Button variant="link" asChild className="p-0">
                            <Link to={`/${pathnames.slice(0, index + 1).join("/")}`}>
                                {value.charAt(0).toUpperCase() + value.slice(1)}
                            </Link>
                        </Button>
                    </li>
                ))}
            </ol>
        </nav>
    );
}

export default Breadcrumbs;
