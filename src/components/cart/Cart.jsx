import { CartContext } from '@store';
import { Modal } from '@ui';
import { formatNumber } from '@utils/helpers';
import { useContext } from 'react';
import CartItem from './CartItem';

const Cart = ({ active, onCloseModal }) => {
  const cartCtx = useContext(CartContext);

  const handleRemoveItem = id => {
    cartCtx.removeItem(id);
  };

  const formattedPrice = formatNumber(cartCtx.totalPrice, true);

  let content = (
    <ul className="mt-3 flex max-h-[50vh] flex-col gap-2 overflow-auto">
      {cartCtx.items.map(item => (
        <CartItem
          key={item.id}
          id={item.id}
          title={item.title}
          brand={item.brand}
          onRemoveItem={handleRemoveItem}
        />
      ))}
    </ul>
  );

  const isCartEmpty = cartCtx.items.length === 0;
  if (isCartEmpty)
    content = <p className="py-4 text-center">There's no items here.</p>;

  return (
    <Modal
      className="w-[300px] sm:w-[400px] md:w-[600px]"
      active={active}
      onBackdropClick={onCloseModal}
    >
      <div
        className="t-5 absolute right-4 inline-flex aspect-square w-4 cursor-pointer items-center justify-center overflow-hidden text-[2rem] text-red-500 hover:text-red-300"
        onClick={onCloseModal}
        data-element="close-cart-element"
      >
        &times;
      </div>

      <h2 className="text-center text-lg font-bold">Your cart</h2>

      {content}

      {!isCartEmpty && (
        <div className="mt-8 flex justify-between gap-4 border-t-2 border-t-blue-500 pt-4 text-lg font-bold">
          <p>
            {cartCtx.totalProducts}{' '}
            {`product${cartCtx.totalProducts === 1 ? '' : 's'}`}
          </p>
          <p>{formattedPrice}</p>
        </div>
      )}
    </Modal>
  );
};

export default Cart;
