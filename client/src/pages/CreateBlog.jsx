import React from "react";

const CreateBlog = () => {
  return (
    <div
      className="w-[60vw] mx-auto mt-10 flex justify-center rounded-lg border
    "
    >
      <h1>Create Blog</h1>
      <form action="">
        <label htmlFor="title">Title: </label>
        <input type="text" id="" name="title" />
      </form>
    </div>
  );
};

export default CreateBlog;
