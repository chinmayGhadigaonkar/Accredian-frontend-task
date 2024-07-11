import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const ReferalForm = () => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm();

  const addData = async (data) => {
    const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/referal`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const result = await res.json();
    const { success, message } = result;
    if (success) {
      toast.success(message);
      return message;
    } else {
      toast.error(message);
    }
  };

  const onSubmit = async (data) => {
    try {
      const msg = await addData(data);
      setValue("yourName", "");
      setValue("friendName", "");
      setValue("friendEmail", "");
      setValue("courseRefer", "");
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="relative mb-4">
          <label htmlFor="yname" className="leading-7 text-sm text-gray-600">
            Your Name
          </label>
          <input
            type="text"
            id="yname"
            {...register("yourName", {
              required: { value: true, message: "This field is required" },
            })}
            className="w-full bg-white rounded border border-gray-300 focus:border-primary focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
          <p className="text-sm text-red-500">{errors.yourName?.message}</p>
        </div>
        <div className="relative mb-4">
          <label htmlFor="fname" className="leading-7 text-sm text-gray-600">
            Friend Name
          </label>
          <input
            type="text"
            id="fname"
            {...register("friendName", {
              required: { value: true, message: "This field is required" },
            })}
            className="w-full bg-white rounded border border-gray-300 focus:border-primary focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
          <p className="text-sm text-red-500">{errors.friendName?.message}</p>
        </div>
        <div className="relative mb-4">
          <label htmlFor="email" className="leading-7 text-sm text-gray-600">
            Friend Email
          </label>
          <input
            type="email"
            id="email"
            {...register("friendEmail", {
              required: { value: true, message: "This field is required" },
            })}
            className="w-full bg-white rounded border border-gray-300 focus:border-primary focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
          <p className="text-sm text-red-500">{errors.friendEmail?.message}</p>
        </div>
        <div className="relative mb-4">
          <label htmlFor="crefer" className="leading-7 text-sm text-gray-600">
            Course You Refer
          </label>
          <input
            type="text"
            id="crefer"
            {...register("courseRefer", {
              required: { value: true, message: "This field is required" },
            })}
            className="w-full bg-white rounded border border-gray-300 focus:border-primary focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
          <p className="text-sm text-red-500">{errors.courseRefer?.message}</p>
        </div>
        <button
          type="submit"
          className={`text-white mt-2 ${
            isSubmitting ? "bg-primary/60" : "bg-primary"
          } border-0 py-2 px-6 focus:outline-none hover:bg-primary/60 rounded text-lg`}
          disabled={isSubmitting}
        >
          Send Referral
        </button>
      </form>
    </div>
  );
};

export default ReferalForm;
