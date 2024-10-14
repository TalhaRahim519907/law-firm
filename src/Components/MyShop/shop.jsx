import React from "react";

function shop() {
  const productData = [
    {
      src: "src/assets/Images/product-01.png",
      name: "Mug Adventure",
      price: "$22",
    },
    {
      src: "src/assets/Images/product-02.png",
      name: "Men Tshirt",
      price: "$22",
    },
    {
      src: "src/assets/Images/product-03.png",
      name: "Girl Tshirt",
      price: "$22",
    },
    {
      src: "src/assets/Images/product-04.png",
      name: "Print Watch",
      price: "$22",
    },
  ];
  return (
    <div>
      <div className="h-auto bg-gray-100 py-28">
        <div className="flex flex-col justify-center items-center text-center">
          <h2 className="text-5xl font-bold font-sans mb-4">My Shop</h2>
          <div className="w-24 h-0.5 bg-gray-400 mt-4 mb-20"></div>
        </div>
        <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-6 mx-4">
          {productData.map((product, index) => (
            <div key={index}>
              <img src={product.src} alt="" className="rounded-md" />
              <h1 className="font-sans font-bold text-2xl mt-5 text-gray-600">
                {product.name}
              </h1>
              <p className="mt-2 text-gray-500">{product.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default shop;
