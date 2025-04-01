import React from 'react';

const products = [
    {
        id: 1,
        name: 'Product 1',
        price: '$99.99',
        image: 'https://source.unsplash.com/300x300/?product',
    },
    {
        id: 2,
        name: 'Product 2',
        price: '$89.99',
        image: 'https://source.unsplash.com/300x300/?product',
    },
    {
        id: 3,
        name: 'Product 3',
        price: '$79.99',
        image: 'https://source.unsplash.com/300x300/?product',
    },
    {
        id: 4,
        name: 'Product 4',
        price: '$69.99',
        image: 'https://source.unsplash.com/300x300/?product',
    },
    // Add more products as needed
];

const Products = () => {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-4xl font-bold text-center mb-8">Products</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {products.map((product) => (
                    <div key={product.id} className="bg-white shadow-md rounded-lg overflow-hidden">
                        <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
                        <div className="p-4">
                            <h3 className="text-lg font-bold mb-2">{product.name}</h3>
                            <p className="text-gray-600 mb-4">{product.price}</p>
                            <a href={`/product/${product.id}`} className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded">
                                View Details
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Products;

