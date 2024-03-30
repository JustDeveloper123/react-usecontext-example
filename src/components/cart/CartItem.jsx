const CartItem = ({ id, title, brand, onRemoveItem }) => {
  return (
    <li className="flex justify-between gap-2 border border-blue-500 px-2 py-3 odd:bg-blue-50 even:bg-blue-100">
      <div>
        <p>
          <a className="font-bold hover:underline" href="##">
            {title}
          </a>
        </p>
        <p className="text-gray-700">{brand}</p>
      </div>
      <div className="self-center">
        <button
          className="rounded-lg bg-red-500 px-4 py-2 text-white ring-black transition hover:brightness-125 focus:ring-1"
          type="button"
          onClick={() => onRemoveItem(id)}
        >
          Remove
        </button>
      </div>
    </li>
  );
};

export default CartItem;
