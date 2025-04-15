import { Routes, Route, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faShoppingCart, faSearch } from '@fortawesome/free-solid-svg-icons';
import Home from "./components/Home"; // Import the Home component from the components folder
import Products from "./components/Products"; // Import the Products component from the components folder
import Breadcrumbs from "./components/shared/Breadcrumbs"; // Uncomment the Breadcrumbs import
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useTheme } from "@/components/theme-provider";
import { Moon, Sun } from "lucide-react";

function Cart() {
    return <h1>Cart Page</h1>;
}

function Contact() {
    return <h1>Contact Us Page</h1>;
}

function NotFound() {
    return <h1>404 - Not Found</h1>;
}

function App() {
    const { theme, setTheme } = useTheme();

    return (
        <div className="flex flex-col min-h-screen">
            {/* Navbar added here */}
            <nav className="border-b">
                <div className="mx-auto px-2 sm:px-6 lg:px-8">
                    <div className="relative flex h-16 items-center justify-between">
                        {/* Brand Name */}
                        <div className="flex items-center">
                            <h2 className="text-2xl font-bold">Avant Noir</h2>
                        </div>
                        {/* Search Bar */}
                        <div className="flex-1 mx-4 max-w-md">
                            <div className="relative">
                                <Input
                                    type="text"
                                    placeholder="Search..."
                                    className="w-full"
                                />
                                <Button 
                                    variant="ghost"
                                    size="icon"
                                    className="absolute right-0 top-0 h-full"
                                >
                                    <FontAwesomeIcon icon={faSearch} />
                                </Button>
                            </div>
                        </div>
                        {/* Navigation Links and Icons */}
                        <div className="flex items-center space-x-4">
                            <div className="hidden sm:block">
                                <div className="flex space-x-4">
                                    <Button variant="ghost" asChild>
                                        <Link to="/">Home</Link>
                                    </Button>
                                    <Button variant="ghost" asChild>
                                        <Link to="/products">Products</Link>
                                    </Button>
                                    <Button variant="ghost" asChild>
                                        <Link to="/contact">Contact Us</Link>
                                    </Button>
                                </div>
                            </div>
                            <Button
                                variant="ghost"
                                size="icon"
                                onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                            >
                                <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                                <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                                <span className="sr-only">Toggle theme</span>
                            </Button>
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                                        <Avatar>
                                            <AvatarImage src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="User" />
                                            <AvatarFallback>UN</AvatarFallback>
                                        </Avatar>
                                    </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end">
                                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuItem>Profile</DropdownMenuItem>
                                    <DropdownMenuItem>Settings</DropdownMenuItem>
                                    <DropdownMenuItem>Logout</DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                            <Button variant="ghost" size="icon">
                                <FontAwesomeIcon icon={faBell} className="h-6 w-6" />
                            </Button>
                            <Button variant="ghost" size="icon" asChild>
                                <Link to="/cart">
                                    <FontAwesomeIcon icon={faShoppingCart} className="h-6 w-6" />
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>
                <div className="sm:hidden" id="mobile-menu">
                    <div className="space-y-1 px-2 pt-2 pb-3">
                        <Button variant="ghost" className="w-full justify-start" asChild>
                            <Link to="/">Home</Link>
                        </Button>
                        <Button variant="ghost" className="w-full justify-start" asChild>
                            <Link to="/products">Products</Link>
                        </Button>
                        <Button variant="ghost" className="w-full justify-start" asChild>
                            <Link to="/cart">Cart</Link>
                        </Button>
                        <Button variant="ghost" className="w-full justify-start" asChild>
                            <Link to="/contact">Contact Us</Link>
                        </Button>
                    </div>
                </div>
            </nav>
            <Breadcrumbs /> {/* Uncomment the Breadcrumbs component */}
            <main className="flex-grow">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/products" element={<Products />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </main>
            <footer className="border-t py-4">
                <div className="container mx-auto px-4">
                    <div className="flex justify-center items-center">
                        <div className="text-center">
                            <h5 className="font-bold">Avant Noir</h5>
                            <p className="text-sm">© 2025 Avant Noir. All rights reserved.</p>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default App;

