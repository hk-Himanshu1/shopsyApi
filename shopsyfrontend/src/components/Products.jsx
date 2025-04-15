import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { useCart } from "@/contexts/CartContext";
import { ShoppingCart } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { Star, ChevronDown, ChevronUp } from "lucide-react";

const products = [
    {
        id: 1,
        name: 'Product 1',
        price: 99.99,
        image: 'https://source.unsplash.com/300x300/?product',
    },
    {
        id: 2,
        name: 'Product 2',
        price: 89.99,
        image: 'https://source.unsplash.com/300x300/?product',
    },
    {
        id: 3,
        name: 'Product 3',
        price: 79.99,
        image: 'https://source.unsplash.com/300x300/?product',
    },
    {
        id: 4,
        name: 'Product 4',
        price: 69.99,
        image: 'https://source.unsplash.com/300x300/?product',
    },
    // Add more products as needed
];

const ProductCard = ({ product }) => {
    const { addToCart } = useCart();

    return (
        <Card className="overflow-hidden group">
            <CardHeader className="p-0">
                <div className="aspect-square relative">
                    <img
                        src={product.image}
                        alt={product.name}
                        className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
                    />
                </div>
            </CardHeader>
            <CardContent className="p-4">
                <CardTitle className="text-lg font-bold mb-2">{product.name}</CardTitle>
                <p className="text-primary font-semibold">${product.price.toFixed(2)}</p>
            </CardContent>
            <CardFooter className="flex gap-2">
                <Button className="flex-1" asChild>
                    <a href={`/product/${product.id}`}>View Details</a>
                </Button>
                <Button
                    variant="outline"
                    size="icon"
                    onClick={() => addToCart(product)}
                >
                    <ShoppingCart className="h-4 w-4" />
                </Button>
            </CardFooter>
        </Card>
    );
};

const ProductSkeleton = () => (
    <Card className="w-full">
        <CardContent className="p-0">
            <Skeleton className="h-48 w-full rounded-t-lg" />
            <div className="p-4">
                <Skeleton className="h-4 w-3/4 mb-2" />
                <Skeleton className="h-4 w-1/2" />
                <div className="flex justify-between items-center mt-4">
                    <Skeleton className="h-4 w-20" />
                    <Skeleton className="h-10 w-24" />
                </div>
            </div>
        </CardContent>
    </Card>
);

const Products = () => {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState("");
    const [sortBy, setSortBy] = useState("name");
    const [priceRange, setPriceRange] = useState([0, 1000]);
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [showFilters, setShowFilters] = useState(true);
    const { addToCart } = useCart();

    useEffect(() => {
        const timer = setTimeout(() => {
            const mockProducts = [
                {
                    id: 1,
                    name: "Premium Headphones",
                    description: "High-quality wireless headphones with noise cancellation",
                    price: 299.99,
                    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
                    category: "Electronics",
                    rating: 4.5,
                },
                {
                    id: 2,
                    name: "Smart Watch",
                    description: "Feature-rich smartwatch with health tracking",
                    price: 199.99,
                    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
                    category: "Electronics",
                    rating: 4.2,
                },
                {
                    id: 3,
                    name: "Wireless Earbuds",
                    description: "True wireless earbuds with long battery life",
                    price: 149.99,
                    image: "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb",
                    category: "Electronics",
                    rating: 4.7,
                },
                {
                    id: 4,
                    name: "Gaming Mouse",
                    description: "High-precision gaming mouse with RGB lighting",
                    price: 79.99,
                    image: "https://images.unsplash.com/photo-1527814050087-3793815479db",
                    category: "Gaming",
                    rating: 4.8,
                },
                {
                    id: 5,
                    name: "Mechanical Keyboard",
                    description: "RGB mechanical keyboard with custom switches",
                    price: 129.99,
                    image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3",
                    category: "Gaming",
                    rating: 4.6,
                },
                {
                    id: 6,
                    name: "Gaming Headset",
                    description: "7.1 surround sound gaming headset with mic",
                    price: 89.99,
                    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
                    category: "Gaming",
                    rating: 4.4,
                },
            ];
            setProducts(mockProducts);
            setIsLoading(false);
        }, 1000);
        return () => clearTimeout(timer);
    }, []);

    const categories = [...new Set(products.map((product) => product.category))];

    const filteredProducts = products
        .filter((product) =>
            product.name.toLowerCase().includes(searchTerm.toLowerCase())
        )
        .filter(
            (product) =>
                product.price >= priceRange[0] && product.price <= priceRange[1]
        )
        .filter(
            (product) =>
                selectedCategories.length === 0 ||
                selectedCategories.includes(product.category)
        )
        .sort((a, b) => {
            switch (sortBy) {
                case "price-asc":
                    return a.price - b.price;
                case "price-desc":
                    return b.price - a.price;
                case "rating":
                    return b.rating - a.rating;
                default:
                    return a.name.localeCompare(b.name);
            }
        });

    const handleAddToCart = (product) => {
        addToCart(product);
        toast.success(`${product.name} added to cart!`);
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="flex flex-col md:flex-row gap-8">
                {/* Main Content */}
                <div className="flex-1">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
                        <div className="w-full md:w-1/2">
                            <Input
                                type="text"
                                placeholder="Search products..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full"
                            />
                        </div>
                        <div className="flex gap-2 w-full md:w-auto">
                            <Button
                                variant="outline"
                                onClick={() => setSortBy("name")}
                                className={sortBy === "name" ? "bg-primary text-primary-foreground" : ""}
                            >
                                Name
                            </Button>
                            <Button
                                variant="outline"
                                onClick={() => setSortBy("price-asc")}
                                className={sortBy === "price-asc" ? "bg-primary text-primary-foreground" : ""}
                            >
                                Price: Low to High
                            </Button>
                            <Button
                                variant="outline"
                                onClick={() => setSortBy("price-desc")}
                                className={sortBy === "price-desc" ? "bg-primary text-primary-foreground" : ""}
                            >
                                Price: High to Low
                            </Button>
                            <Button
                                variant="outline"
                                onClick={() => setSortBy("rating")}
                                className={sortBy === "rating" ? "bg-primary text-primary-foreground" : ""}
                            >
                                Rating
                            </Button>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {isLoading
                            ? Array(6)
                                .fill(null)
                                .map((_, index) => <ProductSkeleton key={index} />)
                            : filteredProducts.map((product) => (
                                <Card key={product.id} className="overflow-hidden">
                                    <CardContent className="p-0">
                                        <div className="relative">
                                            <img
                                                src={product.image}
                                                alt={product.name}
                                                className="w-full h-48 object-cover"
                                            />
                                            <Badge className="absolute top-2 right-2 bg-primary">
                                                {product.category}
                                            </Badge>
                                        </div>
                                        <div className="p-4">
                                            <h3 className="text-lg font-semibold mb-1">
                                                {product.name}
                                            </h3>
                                            <p className="text-sm text-muted-foreground mb-2">
                                                {product.description}
                                            </p>
                                            <div className="flex items-center mb-2">
                                                <Star className="w-4 h-4 text-yellow-500 fill-yellow-500 mr-1" />
                                                <span className="text-sm">{product.rating}</span>
                                            </div>
                                            <div className="flex justify-between items-center">
                                                <span className="text-lg font-bold">
                                                    ${product.price.toFixed(2)}
                                                </span>
                                                <Button
                                                    onClick={() => handleAddToCart(product)}
                                                    className="flex items-center gap-2"
                                                >
                                                    <ShoppingCart className="w-4 h-4" />
                                                    Add to Cart
                                                </Button>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                    </div>
                </div>

                {/* Filters Sidebar */}
                <div className="w-full md:w-80">
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between">
                            <h3 className="text-lg font-semibold">Filters</h3>
                            <Button
                                variant="ghost"
                                size="icon"
                                onClick={() => setShowFilters(!showFilters)}
                            >
                                {showFilters ? (
                                    <ChevronUp className="h-4 w-4" />
                                ) : (
                                    <ChevronDown className="h-4 w-4" />
                                )}
                            </Button>
                        </CardHeader>
                        {showFilters && (
                            <CardContent className="space-y-6">
                                <div>
                                    <h4 className="font-medium mb-2">Price Range</h4>
                                    <Slider
                                        value={priceRange}
                                        onValueChange={setPriceRange}
                                        min={0}
                                        max={1000}
                                        step={10}
                                        className="my-4"
                                    />
                                    <div className="flex justify-between text-sm text-muted-foreground">
                                        <span>${priceRange[0]}</span>
                                        <span>${priceRange[1]}</span>
                                    </div>
                                </div>

                                <Separator />

                                <div>
                                    <h4 className="font-medium mb-2">Categories</h4>
                                    <div className="space-y-2">
                                        {categories.map((category) => (
                                            <div key={category} className="flex items-center space-x-2">
                                                <Checkbox
                                                    id={category}
                                                    checked={selectedCategories.includes(category)}
                                                    onCheckedChange={(checked) => {
                                                        if (checked) {
                                                            setSelectedCategories([...selectedCategories, category]);
                                                        } else {
                                                            setSelectedCategories(
                                                                selectedCategories.filter((c) => c !== category)
                                                            );
                                                        }
                                                    }}
                                                />
                                                <Label htmlFor={category}>{category}</Label>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </CardContent>
                        )}
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default Products;

