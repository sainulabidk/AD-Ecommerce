import axios from "axios";
import React, { useState } from "react";
import { Zoom, toast } from "react-toastify";
import ProductForm from "../components/ProductForm";

export default function AddProducts() {
  const [productFields, setProductFields] = useState({
    productName: "",
    description: "",
    category: "",
    price: "",
    images: [],
    inventory: "",
    availability: "",
  });

  const handleFieldChange = (fieldName, value) => {
    setProductFields({
      ...productFields,
      [fieldName]: value,
    });
    console.log(productFields);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission using productFields state
  };

  const handleFileChange = async (e) => {
    const files = e.target.files;
    const data = new FormData();
    for (let i = 0; i < files.length; i++) {
      data.append("photos", files[i]);
    }

    try {
      const uploadPromise = axios.post("/upload", data, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      toast.promise(
        uploadPromise,
        {
          pending: "Uploading images...",
          success: "Images uploaded successfully!",
          error: "Upload failed. Please try again later.",
        },
        { position: "top-center", theme: "dark", transition: Zoom }
      );
      const response = await uploadPromise;
      handleFieldChange("images", response.data);
    } catch (error) {
      console.error("Error:", error.message);
    }
  };

  return (
    <>
     <h2 className="text-center text-darker-gray  my-3 text-4xl font-medium "> Add Products</h2>
      <ProductForm
        productName={productFields.productName}
        description={productFields.description}
        category={productFields.category}
        price={productFields.price}
        inventory={productFields.inventory}
        availability={productFields.availability}
        images={productFields.images}
        onFieldChange={handleFieldChange}
        onSubmit={handleSubmit}
        handleFileChange={handleFileChange}
      />
    </>
  );
}
