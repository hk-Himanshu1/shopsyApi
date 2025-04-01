import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = [
    "https://images.unsplash.com/photo-1481437156560-3205f6a55735?q=80&w=1790&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1534452203293-494d7ddbf7e0?q=80&w=1744&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?q=80&w=1740&auto=format&fit=crop",
];

const products = [
    {
        id: 1,
        name: "Luxury Bags",
        img: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=1635&auto=format&fit=crop",
    },
    {
        id: 2,
        name: "Smart Watch",
        img: "https://images.unsplash.com/photo-1627123424574-724758594e93?q=80&w=1587&auto=format&fit=crop",
    },
    {
        id: 3,
        name: "Travel Bags",
        img: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=1587&auto=format&fit=crop",
    },
];

const topSeller = [
    {
        id: 1,
        name: "Xespa red",
        img: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=1635&auto=format&fit=crop",
        Rate: "$129",
    },
    {
        id: 2,
        name: "Green Lush",
        img: "https://images.unsplash.com/photo-1547949003-9792a18a2601?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        Rate: "$149",
    },
    {
        id: 3,
        name: "Baggi Brown",
        img: "https://images.unsplash.com/photo-1598532163257-ae3c6b2524b6?q=80&w=1663&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        Rate: "$189",
    },
    {
        id: 4,
        name: "Swift Grey",
        img: "https://images.unsplash.com/photo-1559563458-527698bf5295?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGJhZ3N8ZW58MHx8MHx8fDA%3D",
        Rate: "$189",
    },
    {
        id: 5,
        name: "Pungent Pink",
        img: "https://images.unsplash.com/photo-1622560480654-d96214fdc887?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGJhZ3N8ZW58MHx8MHx8fDA%3D",
        Rate: "$119",
    },
    {
        id: 6,
        name: "Sassy swift",
        img: "https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGJhZ3N8ZW58MHx8MHx8fDA%3D",
        Rate: "$189",
    },
    {
        id: 7,
        name: "Bold thaw",
        img: "https://images.unsplash.com/photo-1605733513597-a8f8341084e6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGJhZ3N8ZW58MHx8MHx8fDA%3D",
        Rate:"$89",
    },
];

// Reusable ProductCard Component
const ProductCard = ({ id, name, img }) => (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <img src={img} alt={name} className="w-full h-60 object-cover" />
        <div className="p-4 text-center">
            <h3 className="text-lg font-bold mb-5">{name}</h3>
            <a href={`/product/${id}`} className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded">
                Explore Products
            </a>
        </div>
    </div>
);

const TopProductCard = ({ id, name, img, Rate }) => (
    <a href={`/product/${id}`} className="block transform transition-transform hover:scale-105">
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <img src={img} alt={name} className="w-full h-60 object-cover" />
            <div className="p-4 text-center">
                <h3 className="text-lg font-bold font-sans mb-2">{name}</h3>
                <div className="flex justify-center items-center mb-2">
                    <span className="text-yellow-500">&#9733;</span>
                    <span className="text-yellow-500">&#9733;</span>
                    <span className="text-yellow-500">&#9733;</span>
                    <span className="text-yellow-500">&#9733;</span>
                    <span className="text-gray-300">&#9733;</span>
                </div>
                <h2 className="text-lg font-bold font-sans text-indigo-600">{Rate}</h2>
            </div>
        </div>
    </a>
);


const Home = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const scrollRef = useRef(null);

    const handleNext = () => setCurrentIndex((prev) => (prev + 1) % images.length);
    const handlePrev = () => setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);

    const scroll = (direction) => {
        if (scrollRef.current) {
            const { scrollLeft, clientWidth } = scrollRef.current;
            const scrollAmount = clientWidth * 0.8;
            scrollRef.current.scrollTo({
                left: direction === "left" ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
                behavior: "smooth",
            });
        }
    };

    useEffect(() => {
        const interval = setInterval(handleNext, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="mx-auto">
            {/* Hero Section with Carousel */}
            <section className="relative bg-gray-800 text-white">
                <div className="relative overflow-hidden h-96 group">
                    <AnimatePresence>
                        <motion.img
                            key={currentIndex}
                            src={images[currentIndex]}
                            alt={`Slide ${currentIndex + 1}`}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.5, ease: "easeInOut" }}
                            className="absolute inset-0 w-full h-full object-cover"
                        />
                    </AnimatePresence>
                    <button
                        onClick={handlePrev}
                        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                        <ChevronLeft className="w-6 h-6" />
                    </button>
                    <button
                        onClick={handleNext}
                        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                        <ChevronRight className="w-6 h-6" />
                    </button>
                </div>
            </section>

            {/* Featured Products */}
            <section className="py-10">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold">Featured Products</h2>
                    <p className="text-xl text-gray-600">Check out our latest and greatest products</p>
                </div>
                <div className="grid grid-cols-1 p-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
                    {products.map((product) => (
                        <ProductCard key={product.id} {...product} />
                    ))}
                </div>
            </section>

            {/* Our Top Sellers */}
            <section className="py-20 bg-gray-100 relative">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-gray-800">Our Top Sellers</h2>
                    <p className="text-xl text-gray-600">Check out our latest and greatest products</p>
                </div>

                <div className="relative mx-auto">
                    <button
                        onClick={() => scroll("left")}
                        className="absolute left-0 top-1/2 -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full shadow-md z-10"
                    >
                        <ChevronLeft size={20} />
                    </button>

                    <div
                        ref={scrollRef}
                        className="flex space-x-6 overflow-x-auto scroll-smooth scrollbar-hide p-4"
                    >
                        {topSeller.map((product) => (
                            <div key={product.id} className="min-w-[250px]">
                                <TopProductCard {...product} />
                            </div>
                        ))}
                    </div>

                    <button
                        onClick={() => scroll("right")}
                        className="absolute right-0 top-1/2 -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full shadow-md z-10"
                    >
                        <ChevronRight size={20} />
                    </button>
                </div>
            </section>

            <section className="py-10">
                <div className="grid grid-cols-2 gap-4 p-6">
                    {/* Women */}
                    <div className="p-6 flex items-center justify-center">
                        <div className="relative bg-white shadow-md rounded-lg overflow-hidden group">
                            <img
                                src="https://images.unsplash.com/photo-1607748862156-7c548e7e98f4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d29tZW58ZW58MHx8MHx8fDA%3D"
                                className="w-full object-cover pointer-events-none"
                            />
                            <div className="absolute inset-0 bg-purple-600 bg-opacity-0 group-hover:bg-opacity-50 transition duration-300 flex items-center justify-center z-10">
                                <span className="text-2xl font-bold text-white">Women</span>
                            </div>
                        </div>
                    </div>

                    {/* Men */}
                    <div className="p-6 flex items-center justify-center">
                        <div className="relative bg-white shadow-md rounded-lg overflow-hidden group">
                            <img
                                src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bWVufGVufDB8fDB8fHww"
                                className="w-full object-cover pointer-events-none"
                            />
                            <div className="absolute inset-0 bg-blue-600 bg-opacity-50 group-hover:bg-opacity-50 transition duration-300 flex items-center justify-center z-10">
                                <span className="text-2xl font-bold text-white">Men</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default Home;


