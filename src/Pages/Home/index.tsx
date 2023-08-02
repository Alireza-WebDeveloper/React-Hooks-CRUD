import AddProduct from '../../Components/Form/AddProduct';
import useAsyncGetData from '../../Hook/useAsyncGetData';
import useAsyncPostData from '../../Hook/useAsyncPostData';

// Type Product
type ProductTypeObj = {
  title: string;
  id: number;
  description: string;
};
type ProductTypeRes = ProductTypeObj[];

const HomePage = () => {
  // useAsyncGetData
  const { data, loading, error, setData } = useAsyncGetData<ProductTypeRes>({
    api_url: 'http://localhost:5007',
    path: 'product',
  });
  // useAsyncPostData
  const { asyncPostData } = useAsyncPostData<any>({ setData: setData });
  // Handle Add Product
  const handleAddProduct = async ({
    title,
    description,
  }: Partial<ProductTypeObj>): Promise<void> => {
    await asyncPostData<Partial<ProductTypeObj>>({
      api_url: 'http://localhost:5007',
      path: 'product',
      data: { title, description },
    });
  };
  // Return JSX
  if (loading) return <>loading...</>;
  if (!loading && error) return <>error</>;
  return (
    <section className="flex flex-col gap-4 m-3 mx-auto container ">
      {/* Search Form */}
      <AddProduct handleAddProduct={handleAddProduct} />
      {/* Data Render */}
      <div className="flex flex-col gap-3 ">
        {data?.map((dt) => {
          return (
            <section
              key={dt.id}
              className="p-5 rounded-lg bg-gray-200 capitalize"
            >
              {dt.id} . <span className="text-purple-500">{dt.title}</span>-
              {dt.description}
            </section>
          );
        })}
      </div>
    </section>
  );
};

export default HomePage;
