import React from "react";
import {} from "react-icons";
const CreateBlog = () => {
  return (
    <div
      className="w-[90vw] lg:w-[60vw] mx-auto mt-10 items-center p-5 rounded-lg border 
    "
    >
      <h1 className="text-2xl font-bold text-center">Create Blog</h1>
      <form action="" className="flex flex-col gap-5 mt-7">
        <label htmlFor="title" className="font-semibold text-lg">
          Title:{" "}
        </label>
        <input
          type="text"
          id=""
          name="title"
          className="px-3 py-2 rounded-md border-white border-2"
        />
        <label htmlFor="description" className="font-semibold text-lg">
          Description:{" "}
        </label>
        <textarea
          name="description"
          className="p-3 rounded-md border-white border-2"
          rows={8}
        />
        <button
          type="button"
          class="text-white  border rounded-md mx-auto px-6 hover:bg-white 
          hover:text-blue-900
          hover:scale-110 transition-all"
        >
          Post
        </button>
      </form>
    </div>
  );
};

export default CreateBlog;
