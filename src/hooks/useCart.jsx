import { useMemo, useState, useContext, createContext, useEffect } from 'react';
import { BakeryProducts } from '../Assets/bakery';

const CartContext = createContext();

const PRODUCT_MAX_QUANTITY = 6;

export const FEES = 6.95; // in percentage

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [isFirstRender, setIsFirstRender] = useState(true);
  const [orderNumber, setOrderNumber] = useState(32513);

  useEffect(() => {
    if (!isFirstRender) {
      return;
    }
    setOrderNumber((prev) => prev + Math.floor(Math.random() * 10));
    setIsFirstRender(false);
  }, [isFirstRender]);

  function checkHasProductInCart(id) {
    return cart.find((item) => item.productId === id);
  }

  function increaseProductQuantityByOne(id) {
    const updatedCart = cart.map((product) => {
      if (product.productId === id) {
        if (product.quantity === PRODUCT_MAX_QUANTITY) {
          return product;
        }

        const quantity = product.quantity + 1;
        const totalPrice = product.unityPrice * quantity;
        return {
          ...product,
          quantity,
          totalPrice,
        };
      }
      return product;
    });

    setCart(updatedCart);
  }

  function addItemToCart(id) {
    const product = checkHasProductInCart(id);
    if (product) {
      return increaseProductQuantityByOne(id);
    }

    const productPrice = BakeryProducts.find((product) => product.id === id)?.price;

    setCart((prev) => [
      ...prev,
      {
        id: `item-${id}`,
        quantity: 1,
        productId: id,
        unityPrice: productPrice || 0,
        totalPrice: productPrice || 0,
      },
    ]);
  }

  function removeItemFromCart(id) {
    const updatedCart = cart.filter((item) => item.productId !== id);
    setCart(updatedCart);
  }

  function decreaseProductQuantityByOne(id) {
    const updatedCart = cart.map((product) => {
      if (product.productId === id) {
        if (product.quantity === 1) {
          return product;
        }

        const quantity = product.quantity - 1;
        const totalPrice = product.unityPrice * quantity;

        return {
          ...product,
          quantity,
          totalPrice,
        };
      }

      return product;
    });

    setCart(updatedCart);
  }

  function resetCart() {
    setCart([]);
  }

  const subTotal = useMemo(() => {
    return cart.reduce((acc, curr) => acc + curr.totalPrice, 0);
  }, [cart]);

  const totalFees = subTotal * (FEES / 100);
  const totalOrder = subTotal + totalFees;

  return (
    <CartContext.Provider
      value={{
        cart,
        orderNumber,
        subTotal,
        totalFees,
        totalOrder,
        resetCart,
        addItemToCart,
        removeItemFromCart,
        increaseProductQuantityByOne,
        decreaseProductQuantityByOne,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
