import { initialCartState } from './CartContextProvider';

const findProductsTotal = products => {
  const totalProducts = products.length;
  const totalPrice = products.reduce((acc, product) => acc + product.price, 0);

  return { totalProducts, totalPrice };
};

const CartReducer = (prevState, action) => {
  switch (action.type) {
    case 'SET_ITEMS': {
      // action: type, items
      const { items } = action;

      return {
        items,
        ...findProductsTotal(items),
      };
    }

    case 'ADD_ITEM': {
      // action: type, item
      const updatedItems = Array.from(prevState.items);

      const isItemExisting = updatedItems.find(
        item => item.id === action.item.id,
      );

      if (!isItemExisting) updatedItems.push(action.item);

      return {
        items: updatedItems,
        ...findProductsTotal(updatedItems),
      };
    }

    case 'REMOVE_ITEM': {
      // action: type, id
      const { id } = action;
      let updatedItems = prevState.items;

      const isItemExisting = updatedItems.find(item => item.id === id);

      if (isItemExisting) {
        updatedItems = updatedItems.filter(item => item.id !== id);
      }

      return {
        items: updatedItems,
        ...findProductsTotal(updatedItems),
      };
    }
  }

  return initialCartState;
};

export default CartReducer;
