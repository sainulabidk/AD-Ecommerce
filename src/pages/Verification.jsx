import axios from "axios";
import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

const Verification = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const {data} = await axios.post("/verify-email", { _id: id });
      if(data){
        toast.success("Email Verified now please Login!!",{position:"top-center"})
        navigate('/sign-in')
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className=" padding h-screen overflow-hidden flex justify-center items-center flex-col">
      <h1 className="sm:text-6xl text-4xl text-darker-gray p-9">Please Verify Your Email</h1>

      <button
        onClick={handleSubmit}
        type="submit"
        className="px-2 py-2 bg-darker-blue btnHover text-white rounded"
      >
        Click here to verify your email
      </button>
    </div>
  );
};

export default Verification;
