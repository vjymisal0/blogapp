import { useEffect, useState } from "react";
import { AiFillDelete } from "react-icons/ai";
import { MdOutlineEdit } from "react-icons/md";
import Swal from "sweetalert2";
const Home = () => {
  const [posts, setPosts] = useState([]);
  const [editPost, setEditPost] = useState(false);
  const [selectedPost, setSelectedPost] = useState({});
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const getPosts = async () => {
    const response = await fetch("http://localhost:3000/get-blogs");
    const data = await response.json();

    setPosts(data);
  };
  useEffect(() => {
    getPosts();
  }, [posts]);

  const deletePost = async (id) => {
    const response = await fetch("http://localhost:3000/delete-blog/" + id, {
      method: "DELETE",
    });
    if (response.status === 200) {
      Swal.fire({
        title: "Success",
        text: "Blog has been deleted successfully",
        icon: "success",
      });
    } else {
      Swal.fire({
        title: "Failed",
        text: "Failed to delete blog",
        icon: "error",
      });
    }
    const data = await response.json();
    console.log(data);
  };
  const updatePost = async (id) => {
    const response = await fetch(`http://localhost:3000/update-blog/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, description }),
    });
    if (response.status === 200) {
      Swal.fire({
        title: "Success",
        text: "Blog has been updated successfully",
        icon: "success",
      });
    } else {
      Swal.fire({
        title: "Failed",
        text: "Failed to update blog",
        icon: "error",
      });
    }
  };
  // console.log(title, description);

  return (
    <div className="my-10">
      {posts.map((post) => {
        return (
          <div
            className="w-[40vw] mx-auto border p-4  rounded-md m-5"
            key={post._id}
          >
            <div className="flex justify-end gap-3 text-3xl ">
              <AiFillDelete
                cursor="pointer"
                className="text-gray-400  hover:scale-110 transition-all hover:text-red-400"
                onClick={() => deletePost(post._id)}
              />
              <MdOutlineEdit
                className={`${
                  selectedPost === post._id && editPost
                    ? "text-red-400 scale-110"
                    : "text-gray-400"
                } hover:scale-110 transition-all hover:text-red-400`}
                cursor="pointer"
                onClick={() => {
                  setEditPost(!editPost);
                  setSelectedPost(post._id);
                }}
              />
            </div>
            <h2
              className="text-xl font-bold text-justify  my-1 "
              contentEditable={editPost}
              onInput={(e) => {
                setTitle(e.target.innerText);
              }}
            >
              {post.title}
            </h2>
            <h3
              className="font-semibold text-sm text-justify m-3 "
              contentEditable={editPost}
              onInput={(e) => {
                setDescription(e.target.innerText);
              }}
            >
              {post.description}
            </h3>
            <button
              className={`${
                selectedPost === post._id && editPost ? "block" : "hidden"
              }
               text-white  border rounded-md mx-auto px-6 hover:bg-white 
          hover:text-blue-900
          hover:scale-110 transition-all`}
              onClick={() => {
                updatePost(post._id);
              }}
            >
              Save
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Home;
