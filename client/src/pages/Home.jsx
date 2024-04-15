import { useEffect, useState } from "react";
import { AiFillDelete } from "react-icons/ai";
import { MdOutlineEdit } from "react-icons/md";
const Home = () => {
  const [posts, setPosts] = useState([]);
  const getPosts = async () => {
    const response = await fetch("http://localhost:3000/get-blogs");
    const data = await response.json();
    setPosts(data);
  };
  useEffect(() => {
    getPosts();
  }, [posts]);

  return (
    <div className="mt-10">
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
              />
              <MdOutlineEdit
                className="text-gray-400 hover:scale-110 transition-all hover:text-red-400"
                cursor="pointer"
              />
            </div>
            <h2 className="text-xl font-bold text-justify  my-2">
              {post.title}
            </h2>
            <h3 className="font-semibold text-sm text-justify m-3">
              {post.description}
            </h3>
          </div>
        );
      })}
    </div>
  );
};

export default Home;
