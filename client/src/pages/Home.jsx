import React from "react";
import { AiFillDelete } from "react-icons/ai";
import { MdOutlineEdit } from "react-icons/md";
const Home = () => {
  return (
    <div className="mt-10">
      <div className="w-[40vw] mx-auto border p-4  rounded-md">
        <div className="flex justify-end text-lg gap-3">
          <AiFillDelete
            cursor="pointer"
            className="text-gray-400 hover:text-red-400"
          />
          <MdOutlineEdit
            className="text-gray-400 hover:text-red-400"
            cursor="pointer"
          />
        </div>
        <h2 className="text-lg font-bold text-justify ">Why learn React?</h2>
        <h3 className="font-semibold text-stone-100 text-justify">
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
