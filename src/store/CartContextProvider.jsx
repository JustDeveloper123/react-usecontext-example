import { CartContext, CartContextReducer } from '@store';
import { useReducer } from 'react';

export const initialCartState = {
  items: [],
  totalProducts: 0,
  totalPrice: 0,
};

const CartContextProvider = ({ children }) => {
  const [cartState, dispatchCart] = useReducer(
    CartContextReducer,
    initialCartState,
  );

  const handleSetItems = items => {
    dispatchCart({
      type: 'SET_ITEMS',
      items,
    });
  };

  const handleAddItem = item => {
    dispatchCart({
      type: 'ADD_ITEM',
      item,
    });
  };

  const handleRemoveItem = id => {
    dispatchCart({
      type: 'REMOVE_ITEM',
      id,
    });
  };

  const ctxValue = {
    items: cartState.items,
    totalProducts: cartState.totalProducts,
    totalPrice: cartState.totalPrice,
    setItems: handleSetItems,
    addItem: handleAddItem,
    removeItem: handleRemoveItem,
  };

  return (
    <CartContext.Provider value={ctxValue}>{children}</CartContext.Provider>
  );
};

export default CartContextProvider;
