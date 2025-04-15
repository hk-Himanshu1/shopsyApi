import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

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
        name: "Wallets",
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
        img: "https://images.unsplash.com/photo-1547949003-9792a18a2601?q=80&w=1740&auto=format&fit=crop",
        Rate: "$149",
    },
    {
        id: 3,
        name: "Baggi Brown",
        img: "https://images.unsplash.com/photo-1598532163257-ae3c6b2524b6?q=80&w=1663&auto=format&fit=crop",
        Rate: "$189",
    },
    {
        id: 4,
        name: "Swift Grey",
        img: "https://images.unsplash.com/photo-1559563458-527698bf5295?w=500&auto=format&fit=crop",
        Rate: "$189",
    },
    {
        id: 5,
        name: "Pungent Pink",
        img: "https://images.unsplash.com/photo-1622560480654-d96214fdc887?w=500&auto=format&fit=crop",
        Rate: "$119",
    },
    {
        id: 6,
        name: "Sassy swift",
        img: "https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?w=500&auto=format&fit=crop",
        Rate: "$189",
    },
    {
        id: 7,
        name: "Bold thaw",
        img: "https://images.unsplash.com/photo-1605733513597-a8f8341084e6?w=500&auto=format&fit=crop",
        Rate: "$89",
    },
];

const testimonials = [
    {
        id: 1,
        name: "John Doe",
        text: "This is the best shopping experience I've ever had! The products are top-notch and the service is excellent.",
        img: "https://randomuser.me/api/portraits/men/1.jpg",
    },
    {
        id: 2,
        name: "Jane Smith",
        text: "I love the variety of products available. The quality is amazing and the prices are unbeatable.",
        img: "https://randomuser.me/api/portraits/women/2.jpg",
    },
    {
        id: 3,
        name: "Michael Johnson",
        text: "Fast shipping and great customer service. I will definitely be shopping here again!",
        img: "https://randomuser.me/api/portraits/men/3.jpg",
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
    <Card className="transform transition-all duration-300 hover:scale-105 py-0 rounded-t-md">
        <CardHeader className="p-0">
            <div className="relative">
                <img
                    src={img}
                    alt={name}
                    className="w-full h-64 object-cover transition-transform duration-300 hover:scale-110 rounded-t-md"
                />
                <span className="absolute top-2 right-2 bg-primary text-primary-foreground text-xs font-semibold px-2 py-1 rounded-full">
                    Top Rated
                </span>
            </div>
        </CardHeader>
        <CardContent className="p-5">
            <div className="flex gap-5">
                <CardTitle className="text-xl mb-3 truncate">{name}</CardTitle>
                <div className="flex justify-center items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                        <span key={i} className={i < 4 ? "text-yellow-400" : "text-gray-300"}>★</span>
                    ))}
                </div>
            </div>
            <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-primary">{Rate}</h2>
                <Button>
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    Buy Now
                </Button>
            </div>
        </CardContent>
    </Card>
);

const TestimonialCard = ({ name, text, img }) => (
    <Card className="text-center">
        <CardContent className="pt-6">
            <Avatar className="w-16 h-16 mx-auto mb-4">
                <AvatarImage src={img} alt={name} />
                <AvatarFallback>{name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
            </Avatar>
            <p className="text-gray-600 mb-4">{text}</p>
            <CardTitle>{name}</CardTitle>
        </CardContent>
    </Card>
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
                    <Button
                        variant="ghost"
                        size="icon"
                        onClick={handlePrev}
                        className="absolute top-1/2 left-4 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                        <ChevronLeft className="w-6 h-6" />
                    </Button>
                    <Button
                        variant="ghost"
                        size="icon"
                        onClick={handleNext}
                        className="absolute top-1/2 right-4 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                        <ChevronRight className="w-6 h-6" />
                    </Button>
                </div>
            </section>

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

            <section className="py-20 bg-gray-100 relative">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-gray-800">Our Top Sellers</h2>
                    <p className="text-xl text-gray-600">Check out our latest and greatest products</p>
                </div>

                <div className="relative mx-auto">
                    <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => scroll("left")}
                        className="absolute left-0 top-1/2 -translate-y-1/2 z-10"
                    >
                        <ChevronLeft className="w-6 h-6" />
                    </Button>

                    <div ref={scrollRef} className="flex space-x-6 overflow-x-auto scroll-smooth scrollbar-hide p-4">
                        {topSeller.map((product) => (
                            <div key={product.id} className="min-w-[250px]">
                                <TopProductCard {...product} />
                            </div>
                        ))}
                    </div>

                    <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => scroll("right")}
                        className="absolute right-0 top-1/2 -translate-y-1/2 z-10"
                    >
                        <ChevronRight className="w-6 h-6" />
                    </Button>
                </div>
            </section>

            <section className="py-16">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold">What Our Customers Say</h2>
                    <p className="text-xl text-gray-600">Testimonials from our valued customers</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
                    {testimonials.map((testimonial) => (
                        <TestimonialCard key={testimonial.id} {...testimonial} />
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Home;


