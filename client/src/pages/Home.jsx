import React from "react";
import { AiFillDelete } from "react-icons/ai";
import { MdOutlineEdit } from "react-icons/md";
const Home = () => {
  return (
    <div className="mt-10">
      <div className="w-[40vw] border-2">
        <div>
          <AiFillDelete cursor="pointer" />
          <MdOutlineEdit cursor="pointer" />
        </div>
      </div>
    </div>
  );
};

export default Home;
