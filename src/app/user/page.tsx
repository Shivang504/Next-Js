import React from 'react';

async function getProducts() {
  const res = await fetch('https://fakestoreapi.com/products');
  const data = await res.json();
  return data; // It's already an array
}

const Page = async () => {
  const products = await getProducts();

  return (
    <div>
      <h1>Products</h1>
      <ul>
        {products.map((product:any) => (
          <li key={product.id} className='text-[14px] text-gray-800'>{product.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Page;
