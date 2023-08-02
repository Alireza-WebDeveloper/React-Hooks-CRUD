import React from 'react';
import AddProduct from '../../Components/Form/AddProduct';
import useAsyncGetData from '../../Hook/useAsyncGetData';
import useAsyncPostData from '../../Hook/useAsyncPostData';

// Types
type ProductType = {
  title: string;
  id: number;
  description: string;
};

const HomePage: React.FC = () => {
  // UseAsyncGetData
  const { data, loading, error, setData } = useAsyncGetData<ProductType[]>({
    api_url: 'http://localhost:5007',
    path: 'product',
  });
  // UseAsyncPostData
  const { asyncPostData } = useAsyncPostData<ProductType[]>({
    setData: setData,
  });
  // Form Submit
  const handleAddProduct = async ({
    title,
    description,
  }: Partial<ProductType>): Promise<void> => {
    await asyncPostData({
      api_url: 'http://localhost:5007',
      path: 'product',
      data: { title, description },
    });
  };

  if (loading) return <>loading...</>;
  if (error) return <>error</>;

  return (
    <section className="flex flex-col gap-4 m-3 mx-auto container">
      <AddProduct handleAddProduct={handleAddProduct} />
      <div className="flex flex-col gap-3">
        {data?.map((product) => (
          <section
            key={product.id}
            className="p-5 rounded-lg bg-gray-200 capitalize"
          >
            {product.id}.{' '}
            <span className="text-purple-500">{product.title}</span> -{' '}
            {product.description}
          </section>
        ))}
      </div>
    </section>
  );
};

export default HomePage;
