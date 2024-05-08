import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaCloudUploadAlt, FaStar, FaTrash } from "react-icons/fa";

const ProductForm = ({
  productName,description,category,price,
  inventory,handleFileChange,availability,
  onFieldChange,onSubmit,images,
}) => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
     fetchCategory()
    }, [])
    
    function fetchCategory() {
        axios.get("/todos").then((res) => {
          setCategories(res.data);
        });
      }
      const handleDelete = (index) => {
        const newImages = [...images];
        newImages.splice(index, 1);
        onFieldChange("images", newImages);
      };
    
      const handlePin = (index) => {
        const newImages = [...images];
        const pinnedImage = newImages.splice(index, 1)[0];
        newImages.unshift(pinnedImage);
        onFieldChange("images", newImages);
      };
  return (
    <form className="w-full max-w-6xl mx-auto shadow-lg mb-4 pb-5 bg-gray-50 padding-x mt-6 " onSubmit={onSubmit}>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Product Name
        </label>
        <input
          className="shadow appearance-none border rounded-md w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="productName"
          type="text"
          placeholder="Enter product name"
          value={productName}
          onChange={(e) => onFieldChange("productName", e.target.value)}
         
        />
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="description"
        >
          Description
        </label>
        <textarea
          className="shadow appearance-none border rounded-md w-full py-3 px-3 h-36
           text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="description"
          placeholder="Enter product description"
          value={description}
          onChange={(e) => onFieldChange("description", e.target.value)}
          
        />
      </div>
      <div className="mb-4">
        <select
          className="shadow  border rounded-md w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="category"
          value={category}
          onChange={(e) => onFieldChange("category", e.target.value)}
          
        >
        <option value={""}>select category</option>
          {categories.map((item)=>(
            <option key={item._id} value={item.categories}>{item.categories}</option>
          ))}
          
        </select>
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="price"
        >
          Price
        </label>
        <input
          className="shadow appearance-none border rounded-md w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="price"
          type="number"
          placeholder="Enter product price"
          value={price}
          onChange={(e) => onFieldChange("price", e.target.value)}
          
        />
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="images"
        >
          Images
        </label>
        <div className="flex gap-6 items-center">
          <label className="relative">
            <input
              type="file"
              className="hidden"
              accept="image/*"
              multiple
              onChange={handleFileChange}
            />
            <div className="block text-xl px-3 rounded-xl py-4 border-2 max-w-sm btnHover text-white bg-sky-900 cursor-pointer">
              <span className="flex justify-center items-center gap-3">
                Add product
                <FaCloudUploadAlt size={32} />
              </span>
            </div>
          </label>
          <div className="flex flex-wrap">
            {images.map((image, index) => (
              <div key={index} className="relative h-32 w-32 m-2">
                <div className="bg-white rounded-md-lg overflow-hidden shadow-md aspect-w-1 aspect-h-1">
                  <img
                    className="w-32 h-32 object-cover"
                    src={image}
                    alt="image"
                  />
                </div>
                <div className="absolute bottom-0 right-0 flex gap-2 p-2">
                  <button
                    onClick={() => handlePin(index)}
                    className="bg-primary bg-opacity-40 p-2 rounded-full"
                  >
                    <FaStar />
                  </button>
                  <button
                    onClick={() => handleDelete(index)}
                    className="bg-primary bg-opacity-40 btnHover text-red-800 p-2 rounded-full"
                  >
                    <FaTrash size={14}/>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="inventory"
        >
          Inventory
        </label>
        <input
          className="shadow appearance-none border rounded-md w-full py-3 px-3
           text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="inventory"
          type="number"
          placeholder="Enter product inventory"
          value={inventory}
          onChange={(e) => onFieldChange("inventory", e.target.value)}
          
        />
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="availability"
        >
          Availability
        </label>
        <select
          className="shadow appearance-none border rounded-md w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="availability"
          value={availability}
          onChange={(e) => onFieldChange("availability", e.target.value)}
          
        >
          <option value="">Select availability</option>
          <option value="in-stock">In Stock</option>
          <option value="out-of-stock">Out of Stock</option>
        </select>
      </div>
      <div className="flex items-center justify-between">
        <button
          className="bg-darker-gray hover:bg-darker-gray-medium text-white font-bold py-3 px-4 rounded-md focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Add Product
        </button>
      </div>
    </form>
  );
};

export default ProductForm;
