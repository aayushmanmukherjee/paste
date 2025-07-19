import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useSearchParams } from "react-router-dom";
import { addToPaste, updatePaste } from "../redux/pasteslices";
import viewIcon from "../assets/view.png";

const Viewpaste = () => {
  const { id } = useParams();
  const allPastes = useSelector((state) => state.paste.pastes);

  const paste = allPastes.find((i) => i._id === id);
  if (!paste) {
    return (
      <div className="text-center mt-10 text-red-500 text-2xl">Paste not found.</div>
    );
  }

  return (
    <div>
      <div className="mt-10 flex flex-col">
        {" "}
        <div className="flex justify-center items-center">
          <h2 className="text-center p-5 text-4xl font-extrabold">
            View Mode{" "}
            
          </h2>
          <img
              src={viewIcon}
              alt="view icon"
              className="w-8 h-8 rounded-full"
            />{" "}
        </div>
        <div className="flex justify-center items-center gap-5">
          <input
            type="text"
            placeholder="enter title here..."
            value={paste.title}
            disabled
            className="bg-transparent border rounded-md text-lg font-semibold pl-5 py-3 w-[80%] focus:outline-none cursor-not-allowed"
          />
          {/* <button className='text-[large] p-3 bg-blue-700 border rounded-md hover:bg-blue-900 transition-all duration-200' onClick={createPaste}>
                {pasteid?"update paste":"create paste"}
            </button> */}
        </div>
        <div className="flex justify-center w-screen mt-10">
          <textarea
            name="content"
            placeholder="enter content here..."
            value={paste.content}
            rows={20}
            disabled
            className="bg-transparent w-[80%] border rounded-md focus:outline-none pl-5 py-3 cursor-not-allowed"
          ></textarea>
        </div>
      </div>
    </div>
  );
};

export default Viewpaste;
