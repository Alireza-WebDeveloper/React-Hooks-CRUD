import React, { useState } from 'react';

// Types
interface AddProductProps {
  handleAddProduct({
    title,
    description,
  }: {
    title: string;
    description: string;
  }): Promise<void>;
}

const AddProduct: React.FC<AddProductProps> = ({ handleAddProduct }) => {
  // States
  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  //   Form Submit
  const formSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleAddProduct({ title, description });
    setTimeout(() => {
      setTitle('');
      setDescription('');
    }, 200);
  };
  return (
    <form onSubmit={formSubmit}>
      <div className="relative flex gap-1   ">
        <input
          type="text"
          className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Title..."
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Description..."
          required
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button
          type="submit"
          className="text-white   right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 capitalize"
        >
          add
        </button>
      </div>
    </form>
  );
};

export default AddProduct;
