import React from "react";
import Filter from "./Filter";

const products = [
    {
      id: 1,
      name: "Basic Tee 1",
      imageSrc:
        "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
      imageAlt: "Front of men's Basic Tee in black.",
      price: "$35", 
      category:"category 1"
    },
    {
      id: 2,
      name: "Basic Tee 2",
      imageSrc:
        "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
      imageAlt: "Front of men's Basic Tee in black.",
      price: "$35", 
      category:"category 2"
    },
    {
      id: 3,
      name: "Basic Tee 3",
      imageSrc:
        "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
      imageAlt: "Front of men's Basic Tee in black.",
      price: "$35", 
      category:"category 3"
    },
    {
      id: 4,
      name: "Basic Tee 3",
      imageSrc:
        "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
      imageAlt: "Front of men's Basic Tee in black.",
      price: "$35", 
      category:"category 4"
    },
    {
      id: 5,
      name: "Basic Tee 3",
      imageSrc:
        "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
      imageAlt: "Front of men's Basic Tee in black.",
      price: "$35", 
      category:"category 5"
    },
    {
      id: 6,
      name: "Basic Tee 3",
      imageSrc:
        "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
      imageAlt: "Front of men's Basic Tee in black.",
      price: "$35", 
      category:"category 6"
    },
   // This is demo data , actually it is coming from backend . This is for testing.
  ];
  

const Card = () => {
  return (
    <div className="bg-gray-50">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-darker-gray">
          Discover Our <span className="text-darker-gray-light">Products</span>
        </h2>
        <Filter />
        <div className="mt-6 grid grid-cols-1 bg-primary gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8 shadow-lg p-9 rounded-md">
          {products.map((product) => (
            <div
              key={product.id}
              className="group relative bg-slate-200 btnHover rounded-xl p-3"
            >
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h1 className="text-lg font-bold text-darker-gray">
                    <>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.name}
                    </>
                  </h1>
                  <p className="mt-1 text-md bg-darker-gray rounded-lg p-2 btnHover hover:bg-black text-gray-100">
                    Buy now
                  </p>
                </div>
                <p className="text-md font-medium text-gray-900">
                  {product.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
