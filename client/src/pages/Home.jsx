import { useEffect, useState } from "react";
import { AiFillDelete } from "react-icons/ai";
import { MdOutlineEdit } from "react-icons/md";
const Home = () => {
  const [posts, setPosts] = useState([]);
  const getPosts = async () => {
    const response = await fetch("http://localhost:5000/get-blogs");
    const data = await response.json();
    setPosts(data);
  };
  return (
    <div className="mt-10">
      <div className="w-[40vw] mx-auto border p-4  rounded-md">
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
          Why learn React?
        </h2>
        <h3 className="font-semibold text-sm text-justify m-3">
          React is a JavaScript library for building user interfaces. It is
          maintained by Facebook and a community of individual developers and
          companies. React can be used as a base in the development of
          single-page or mobile applications. However, React is only concerned
          with state management and rendering that state to the DOM, so creating
          React applications usually requires the use of additional libraries
          for routing, as well as certain client-side functionality.
        </h3>
      </div>
    </div>
  );
};

export default Home;
