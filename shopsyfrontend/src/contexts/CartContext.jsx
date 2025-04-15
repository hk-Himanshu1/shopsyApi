import React, { createContext, useContext, useState, useEffect } from 'react';
import { toast } from 'sonner';

const CartContext = createContext();

export function CartProvider({ children }) {
    const [cart, setCart] = useState([]);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        // Calculate total whenever cart changes
        const newTotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        setTotal(newTotal);
    }, [cart]);

    const addToCart = (product) => {
        setCart((currentCart) => {
            const existingItem = currentCart.find(item => item.id === product.id);
            
            if (existingItem) {
                return currentCart.map(item =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            }
            
            return [...currentCart, { ...product, quantity: 1 }];
        });

        toast.success(`${product.name} added to cart`);
    };

    const removeFromCart = (productId) => {
        setCart((currentCart) => currentCart.filter(item => item.id !== productId));
        toast.error('Item removed from cart');
    };

    const updateQuantity = (productId, quantity) => {
        if (quantity < 1) {
            removeFromCart(productId);
            return;
        }

        setCart((currentCart) =>
            currentCart.map(item =>
                item.id === productId
                    ? { ...item, quantity }
                    : item
            )
        );
    };

    const clearCart = () => {
        setCart([]);
        toast.info('Cart cleared');
    };

    return (
        <CartContext.Provider value={{
            cart,
            total,
            addToCart,
            removeFromCart,
            updateQuantity,
            clearCart
        }}>
            {children}
        </CartContext.Provider>
    );
}

export function useCart() {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
} 