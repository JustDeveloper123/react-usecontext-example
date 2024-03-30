import { CartContext } from '@store';
import { formatNumber } from '@utils/helpers';
import { useContext } from 'react';

const ProductItem = ({ data }) => {
  const cartCtx = useContext(CartContext);

  const isItemInCart = cartCtx.items.find(item => item.id === data.id);

  const handleAddToCart = () => {
    cartCtx.addItem(data);
  };

  const formattedCategory = data.category[0]
    .toUpperCase()
    .concat(data.category.slice(1));
  const categoryColor = 'bg-red-500 text-white';

  let formattedDescription = [...data.description].slice(0, 70).join('');
  formattedDescription.length > 69 && (formattedDescription += '...');

  const formattedPrice = formatNumber(data.price, true);

  return (
    <a
      href="##"
      className="group relative overflow-hidden bg-blue-100 transition hover:bg-blue-200/75"
    >
      <p
        className={`absolute top-6 z-30 rounded-r-full py-0.5 pl-2 pr-3 transition duration-200 group-hover:-translate-x-full group-hover:opacity-40 ${categoryColor}`}
      >
        {formattedCategory}
      </p>
      <div className="relative h-40 overflow-hidden">
        <img
          className="absolute z-10 scale-125 blur-lg transition duration-300 group-hover:scale-[2]"
          src={data.thumbnail}
          alt=""
        />
        <img
          className="relative z-20 m-auto h-full"
          src={data.thumbnail}
          alt={data.title}
        />
      </div>
      <div className="flex h-56 flex-col px-4 pb-4 pt-2">
        <h3 className="font-bold">{data.title}</h3>
        <p className="-mt-1 text-gray-700">{data.brand}</p>
        <p className="mb-auto mt-1 text-ellipsis text-lg leading-tight">
          {formattedDescription}
        </p>
        <p className="text-xl font-bold">{formattedPrice}</p>
        <button className="relative mt-2 p-[3px]" onClick={handleAddToCart}>
          <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-500" />
          <div
            className={`group relative rounded-[6px] px-8 py-2 text-white transition duration-200 hover:bg-transparent ${isItemInCart ? 'bg-transparent' : 'bg-black'}`}
          >
            {isItemInCart ? 'Added to cart' : 'Add to cart'}
          </div>
        </button>
      </div>
    </a>
  );
};

export default ProductItem;
