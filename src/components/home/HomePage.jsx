
"use client";

import { useState, useEffect } from "react";

import HeroSection from "./HeroSection";
import MenuSection from "@/components/menu/MenuSection";
import CartBar from "@/components/menu/CartBar";
import CartDrawer from "@/components/menu/CartDrawer";

import { sendWhatsAppOrder } from "@/lib/whatsapp";

export default function HomePage() {
  const [cart, setCart] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [tableNumber, setTableNumber] = useState(null);

  useEffect(() => {
  const params = new URLSearchParams(window.location.search);

  const table = params.get("table");

  if (/^T\d{2}$/.test(table || "")) {
    setTableNumber(table);
  } else {
    setTableNumber(null);
  }
}, []);

  // Add product to cart
  function addToCart(product) {
    setCart((currentCart) => {
      const existing = currentCart.find(
        (item) => item.id === product.id
      );

      if (existing) {
        return currentCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...currentCart, { ...product, quantity: 1 }];
    });
  }

  // Increase quantity
  function increaseQuantity(id) {
    setCart((currentCart) =>
      currentCart.map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  }

  // Decrease quantity
  function decreaseQuantity(id) {
    setCart((currentCart) =>
      currentCart
        .map((item) =>
          item.id === id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  }

  // Remove product
  function removeFromCart(id) {
    setCart((currentCart) =>
      currentCart.filter((item) => item.id !== id)
    );
  }

  // Send order to WhatsApp
  function placeOrder() {
    if (cart.length === 0) return;

    sendWhatsAppOrder(cart, tableNumber);
  }

  return (
    <main className="min-h-screen bg-[#07110E] text-[#F7F0E3]">

      <HeroSection />

      <MenuSection onAdd={addToCart} />

      <footer className="border-t border-white/10 px-5 py-9 text-center">
        <h2 className="font-serif text-xl tracking-[0.12em]">
          THE URBAN KITCHEN
        </h2>

        <p className="mt-2 text-[9px] uppercase tracking-[0.3em] text-[#D6B477]">
          Crafted for food lovers
        </p>

        {/* <p className="mt-5 text-[10px] text-white/30">
          © {new Date().getFullYear()} The Urban Kitchen
        </p> */}
      </footer>

      {/* Sticky cart bar */}
      <CartBar
        cart={cart}
        onOpen={() => setCartOpen(true)}
      />

      {/* Cart drawer */}
      {cartOpen && (
        <CartDrawer
          cart={cart}
          onClose={() => setCartOpen(false)}
          onIncrease={increaseQuantity}
          onDecrease={decreaseQuantity}
          onRemove={removeFromCart}
          onPlaceOrder={placeOrder}
        />
      )}

    </main>
  );
}
