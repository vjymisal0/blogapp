import React from "react";
import { AiFillDelete } from "react-icons/ai";
import { MdOutlineEdit } from "react-icons/md";
const Home = () => {
  return (
    <div className="mt-10">
      <div className="w-[40vw] mx-auto border-2 ">
        <div className="flex justify-end text-lg gap-10 my-2 m-3">
          <AiFillDelete
            cursor="pointer"
            className="text-gray-400 hover:text-red-400"
          />
          <MdOutlineEdit
            className="text-gray-400 hover:text-red-400"
            cursor="pointer"
          />
        </div>
        <h2 className="text-lg font-bold ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </h2>
        <h3>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia sit
          molestiae eos excepturi in numquam officiis dolorem reprehenderit
          accusamus hic quos voluptate error architecto, deserunt fuga dicta
          exercitationem itaque consequatur praesentium suscipit ullam tempore
          necessitatibus optio sapiente! A, eius voluptatem?
        </h3>
      </div>
    </div>
  );
};

export default Home;
