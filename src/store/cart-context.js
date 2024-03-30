import { createContext } from 'react';

const cartContext = createContext({
  items: [],
  totalProducts: 0,
  totalPrice: 0,
  setItems(items) {},
  addItem(item) {},
  removeItem(id) {},
});

export default cartContext;
