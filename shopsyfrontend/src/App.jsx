import { Routes, Route, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faShoppingCart, faSearch } from '@fortawesome/free-solid-svg-icons';
import Home from "./components/Home"; // Import the Home component from the components folder
import Products from "./components/Products"; // Import the Products component from the components folder
import Breadcrumbs from "./components/shared/Breadcrumbs"; // Uncomment the Breadcrumbs import
import './App.css';

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
    return (
        <div className="flex flex-col min-h-screen">
            {/* Navbar added here */}
            <nav className="bg-gray-800">
                <div className="mx-auto px-2 sm:px-6 lg:px-8">
                    <div className="relative flex h-16 items-center justify-between">
                        {/* Brand Name */}
                        <div className="flex items-center">
                            <h2 style={{ fontFamily: "ui-monospace", color: "white", fontSize: "35px" }}>Avant Noir</h2>
                        </div>
                        {/* Search Bar */}
                        <div className="flex-1 mx-4 max-w-md">
                            <div className="relative">
                                <input
                                    type="text"
                                    placeholder="Search..."
                                    className="w-full px-4 py-2 rounded-l-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                />
                                <button className="absolute right-0 top-0 h-full px-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-r-md">
                                    <FontAwesomeIcon icon={faSearch} />
                                </button>
                            </div>
                        </div>
                        {/* Navigation Links and Icons */}
                        <div className="flex items-center space-x-4">
                            <div className="hidden sm:block">
                                <div className="flex space-x-4">
                                    <Link to="/" className="rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white" aria-current="page">Home</Link>
                                    <Link to="/products" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Products</Link>
                                    <Link to="/contact" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Contact Us</Link>
                                </div>
                            </div>
                            <button type="button" className="relative flex rounded-full bg-gray-800 text-sm focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 focus:outline-hidden" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
                                <span className="absolute -inset-1.5"></span>
                                <span className="sr-only">Open user menu</span>
                                <img className="size-8 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                            </button>
                            <button type="button" className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 focus:outline-none">
                                <span className="sr-only">View notifications</span>
                                <FontAwesomeIcon icon={faBell} className="h-6 w-6" />
                            </button>
                            <Link to="/cart" className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 focus:outline-none">
                                <span className="sr-only">View cart</span>
                                <FontAwesomeIcon icon={faShoppingCart} className="h-6 w-6" />
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="sm:hidden" id="mobile-menu">
                    <div className="space-y-1 px-2 pt-2 pb-3">
                        <Link to="/" className="block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white" aria-current="page">Home</Link>
                        <Link to="/products" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Products</Link>
                        <Link to="/cart" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Cart</Link>
                        <Link to="/contact" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Contact Us</Link>
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
            <footer className="bg-gray-800 text-white py-4">
                <div className="container mx-auto px-4">
                    <div className="flex justify-between items-center">
                        <div>
                            <h5 className="font-bold">Shopsy</h5>
                            <p className="text-sm">© 2025 Shopsy. All rights reserved.</p>
                        </div>
                        <div className="flex space-x-4">
                            <Link to="/" className="text-gray-400 hover:text-white">Home</Link>
                            <Link to="/products" className="text-gray-400 hover:text-white">Products</Link>
                            <Link to="/contact" className="text-gray-400 hover:text-white">Contact Us</Link>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default App;

