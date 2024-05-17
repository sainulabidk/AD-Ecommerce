import { useState, useEffect } from "react";
import { FaCartArrowDown } from "react-icons/fa";
import RelatedProducts from "../components/shared/RelatedProducts";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function SingleProductPage({ item }) {
  const { id } = useParams();
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [singleProduct, setSingleProduct] = useState(null);

  useEffect(() => {
    fetchProducts();
  }, [id]);

  const fetchProducts = async () => {
    try {
      const { data } = await axios.get(`/products/${id}`);
      setSingleProduct(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleImageClick = (index) => {
    setSelectedImageIndex(index);
  };

  const product = singleProduct || item;

  // Check if product is defined and has images
  if (!product || !product.images || product.images.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div className="bg-white pt-32">
      <div className="pt-6">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb">
          <ol
            role="list"
            className="mx-auto flex max-w-7xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8"
          >
            <li className="mr-2 text-sm font-medium text-gray-900">
              <a href="#" className="hover:text-indigo-600">
                {product?.category}
              </a>
            </li>
          </ol>
        </nav>

        {/* Product details and carousel */}
        <div className="mx-auto mt-6 max-w-7xl sm:px-6 lg:px-8 flex flex-col lg:flex-row">
          {/* Thumbnails */}
          <div className="mt-4 hidden sm:block md:flex justify-center mb-3 lg:flex-col w-full lg:w-1/6 relative space-y-2">
            {product.images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Thumbnail ${index + 1}`}
                onClick={() => handleImageClick(index)}
                className={`w-20 h-20 object-contain rounded-lg cursor-pointer ${
                  index === selectedImageIndex ? "border-2 border-indigo-600" : ""
                }`}
              />
            ))}
          </div>
          {/* Carousel */}
          <div className="w-full lg:w-1/2 relative">
            <div className="relative">
              <img
                src={product.images[selectedImageIndex]}
                alt={`Image ${selectedImageIndex + 1}`}
                className="w-full h-[300px] object-contain sm:h-[500px] rounded-lg shadow-lg sm:rounded-xl"
              />
              <div className="absolute inset-y-0 left-0 flex items-center">
                <button
                  onClick={() =>
                    handleImageClick(
                      (selectedImageIndex - 1 + product.images.length) % product.images.length
                    )
                  }
                  className="text-white hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-400 p-2 rounded-full bg-gray-800 bg-opacity-50"
                >
                  &lt;
                </button>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center">
                <button
                  onClick={() =>
                    handleImageClick(
                      (selectedImageIndex + 1) % product.images.length
                    )
                  }
                  className="text-white hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-400 p-2 rounded-full bg-gray-800 bg-opacity-50"
                >
                  &gt;
                </button>
              </div>
            </div>
          </div>
          {/* Product details */}
          <div className="w-full lg:w-2/3 px-4 lg:px-8 mt-6 lg:mt-0">
            <div>
              <h1 className="text-2xl font-bold tracking-tight text-darker-gray sm:text-4xl">
                {product.productName}
              </h1>
              
              <h2 className="text-xl mt-4 font-medium text-gray-900">Details</h2>
              <p className="mt-2 text-lg leading-7 text-balance text-gray-900">
                {product.description}
              </p>
              <p className="mt-4 text-3xl tracking-tight text-gray-900">
              ₹{product.price}
              </p>
              <form className="mt-6">
                <button
                  type="submit"
                  className="flex w-1/2 gap-1 items-center justify-center rounded-md border
                   border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white
                    hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                 <FaCartArrowDown size={28} /> Add to Cart
                </button>
              </form>
            </div>
            <div className="mt-10">
              
              <div className="mt-6">
                <h3 className="text-sm font-medium text-gray-900">
                  Highlights
                </h3>
                <ul className="mt-2 text-sm text-gray-600">
                  {product.highlights?.map((highlight, index) => (
                    <li key={index} className="mt-1">
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-6">
                <h3 className="text-sm font-medium text-gray-900">
                  Details
                </h3>
                <p className="text-sm text-gray-600">
                  {product.details}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <RelatedProducts product={product}/>
    </div>
  );
}
