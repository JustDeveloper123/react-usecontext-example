import { ProductItem } from '@components';
import { fetchFromAPI } from '@utils';
import { useEffect, useState } from 'react';

const ProductsList = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    fetchFromAPI('https://dummyjson.com/products?limit=10').then(data => {
      const products = data?.products || [];
      setItems(products);
      setIsLoading(false);
    });
  }, [fetchFromAPI]);

  let content = (
    <ul className="grid grid-cols-3 gap-x-4 gap-y-6 py-8">
      {items.map(item => (
        <ProductItem key={item.id} data={item} />
      ))}
    </ul>
  );

  if (isLoading) content = <p className="fetch-error">Loading products...</p>;
  if (!isLoading && !items.length)
    content = <p className="fetch-error">Items not found.</p>;

  return <div>{content}</div>;
};

export default ProductsList;
