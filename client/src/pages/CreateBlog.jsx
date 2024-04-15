import React from "react";
import {} from "react-icons";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
const CreateBlog = () => {
  const navigate = useNavigate();
  const postData = async (e) => {
    e.preventDefault();
    const title = e.target.title.value;
    const description = e.target.description.value;
    const blog = { title, description };
    const response = await fetch("http://localhost:3000/post-blog", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(blog),
    });
    if (response.status === 200) {
      // alert("Blog posted successfully");
      // Notiflix.Notify.success("Blog posted successfully");
      Swal.fire({
        title: "Success",
        text: "Blog has been posted successfully",
        icon: "success",
      });
      e.target.title.value = "";
      e.target.description.value = "";
      navigate("/");
    } else if (response.status === 400) {
      // alert("Failed to post blog");
      // check if title or description is missing
      Swal.fire({
        title: "Failed",
        text: "Failed! title or description is missing",
        icon: "error",
      });
    }
  };

  return (
    <div
      className="w-[90vw] lg:w-[60vw] mx-auto mt-10 items-center p-5 rounded-lg border
    "
    >
      <h1 className="text-2xl font-bold text-center">Create Blog</h1>
      <form action="" className="flex flex-col gap-5 mt-7" onSubmit={postData}>
        <label htmlFor="title" className="font-semibold text-lg">
          Title:{" "}
        </label>
        <input
          type="text"
          placeholder="Enter your blog title here..."
          id=""
          name="title"
          className="px-3 py-2 rounded-md border-white border-2 bg-customBackground"
        />
        <label htmlFor="description" className="font-semibold text-lg">
          Description:{" "}
        </label>
        <textarea
          placeholder="Enter your blog description here..."
          name="description"
          className="p-3 rounded-md border-white border-2 bg-customBackground"
          rows={8}
        />
        <button
          type="submit"
          className="text-white  border rounded-md mx-auto px-6 hover:bg-white 
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
