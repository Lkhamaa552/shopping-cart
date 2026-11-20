import { useState } from 'react';
import ProductList from './ProductList';
import CartPanel from './CartPanel';

// ShoppingCart owns the cart state and passes it down (lifting state up)
function ShoppingCart({ products }) {
  // State: array of cart items { id, name, price, image, qty }
  const [cart, setCart] = useState([]);

  function addToCart(product) {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        // Already in the cart: make a new array with qty + 1
        return prev.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        );
      }
      // New item: copy the old array and add it at the end
      return [...prev, { ...product, qty: 1 }];
    });
  }

  function increase(id) {
    setCart((prev) =>
      prev.map((item) => (item.id === id ? { ...item, qty: item.qty + 1 } : item))
    );
  }

  function decrease(id) {
    setCart((prev) =>
      prev
        .map((item) => (item.id === id ? { ...item, qty: item.qty - 1 } : item))
        .filter((item) => item.qty > 0) // quantity 0 removes the item
    );
  }

  function removeFromCart(id) {
    setCart((prev) => prev.filter((item) => item.id !== id));
  }

  function clearCart() {
    setCart([]);
  }

  return (
    <div className="shop">
      <ProductList products={products} cart={cart} onAdd={addToCart} />
      <CartPanel
        cart={cart}
        onIncrease={increase}
        onDecrease={decrease}
        onRemove={removeFromCart}
        onClear={clearCart}
      />
    </div>
  );
}

export default ShoppingCart;