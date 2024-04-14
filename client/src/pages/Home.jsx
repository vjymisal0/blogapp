import React from "react";
import { AiFillDelete } from "react-icons/ai";
import { MdOutlineEdit } from "react-icons/md";
const Home = () => {
  return (
    <div className="mt-10">
      <div className="w-[40vw] mx-auto border-2">
        <div>
          <AiFillDelete cursor="pointer" />
          <MdOutlineEdit cursor="pointer" />
        </div>
        <h2>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque error
          laboriosam ipsam molestiae qui. Quae voluptate tempora repellat quo
          possimus, quasi ad error dolores obcaecati id! Quia nemo voluptate
          neque.
        </h2>
      </div>
    </div>
  );
};

export default Home;
