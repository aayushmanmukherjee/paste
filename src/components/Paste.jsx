import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import editIcon from "../assets/edit.png";
import deleteIcon from "../assets/delete.png";
import viewIcon from "../assets/view.png";
import { removeFromPaste, resetPaste } from "../redux/pasteslices";

const Paste = () => {
  const [searchValue, setSearchValue] = useState("");
  const allPastes = useSelector((state) => state.paste.pastes);
  const dispatch = useDispatch();

  const deleteAll = () => {
    dispatch(resetPaste());
  };

  const handleDelete = (paste) => {
    dispatch(removeFromPaste(paste));
  };

  let paste = allPastes.filter((i) =>
    i.title.toLowerCase().includes(searchValue.toLowerCase())
  );
  if (paste.length > 0) {
    return (
      <div className="mt-6 flex justify-center w-full">
        <div className="flex flex-col w-full items-center">
          <div className="mt-2 mb-16 flex flex-col items-center justify-center gap-4 w-full">
            <div className="flex justify-center items-center border rounded-md p-2  hover:bg-gray-700 hover:scale-110 transition-all duration-200">
              <button onClick={deleteAll} className="text-xl p-1 text-red-500">
                {" "}
                delete all pastes{" "}
              </button>
              <img
                src={deleteIcon}
                alt="delete-icon"
                className="w-8 h-8 rounded-full"
              />
            </div>
            <input
              type="text"
              placeholder="search pastes by title"
              value={searchValue}
              autoFocus
              className="focus:outline-none pl-3 py-5 border rounded-md bg-transparent w-[85%] text-xl"
              onChange={(e) => setSearchValue(e.target.value)}
            />
          </div>
          <div className="border rounded-lg flex flex-col gap-5 w-[85%] p-5">
            {paste.length > 0
              ? paste.map((i) => (
                  <button
                    className="border flex flex-col gap-5 justify-center items-start p-5 hover:bg-gray-900 transition-all duration-200 cursor-pointer"
                  >
                    <h2 className="text-2xl font-extrabold">
                      {i.title}
                    </h2>
                    <p className="text-gray-400">{i.content}</p>
                    <div className="flex gap-5">
                      {" "}
                      <Link to={`/?pasteid=${i._id}`}>
                        <img
                          src={editIcon}
                          alt="edit icon"
                          className="w-10 rounded-full hover:scale-125 hover:border transition-all duration-200"
                        />
                      </Link>
                      <Link to={`/paste/${i._id}`}>
                      {" "}
                      <img
                        src={viewIcon}
                        alt="view-icon"
                        className="w-10 rounded-full hover:scale-125 hover:border transition-all duration-200"
                      />
                    </Link>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleDelete(i);
                        }}
                      >
                        <img
                          src={deleteIcon}
                          alt="delete icon"
                          className="w-10 rounded-full hover:scale-125 hover:border transition-all duration-200"
                        />
                      </button>
                    </div>
                  </button>
                ))
              : ""}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="mt-6 flex justify-center w-full">
      <div className="flex flex-col w-full items-center">
        <div className="mt-2 mb-16 flex flex-col items-center justify-center gap-4 w-full">
          <div className="flex justify-center items-center border rounded-md p-2  hover:bg-gray-700 hover:scale-110 transition-all duration-200">
            <button onClick={deleteAll} className="text-xl p-1 text-red-500">
              {" "}
              delete all pastes{" "}
            </button>
            <img
              src={deleteIcon}
              alt="delete-icon"
              className="w-8 h-8 rounded-full"
            />
          </div>
          <input
            type="text"
            placeholder="search pastes by title"
            value={searchValue}
            autoFocus
            className="focus:outline-none pl-1 py-3 text-sm lg:pl-3 lg:py-5 lg:text-xl border rounded-md bg-transparent w-[85%] "
            onChange={(e) => setSearchValue(e.target.value)}
          />
        </div>
        <div className="border rounded-lg flex flex-col gap-5 w-[85%] p-5">
          {allPastes.length > 0
            ? allPastes.map((i) => (
                <button className="border flex flex-col gap-5 justify-center items-start p-5 hover:bg-gray-900 transition-all duration-200 cursor-pointer">
                  <h2 className="text-2xl font-extrabold">{i.title}</h2>
                  <p className="text-gray-400">{i.content}</p>
                  <div className="flex gap-5">
                    {" "}
                    <Link to={`/?pasteid=${i._id}`}>
                      <img
                        src={editIcon}
                        alt="edit icon"
                        className="w-10 rounded-full hover:scale-125 hover:border transition-all duration-200"
                      />
                    </Link>
                    <Link to={`/paste/${i._id}`}>
                      {" "}
                      <img
                        src={viewIcon}
                        alt="view-icon"
                        className="w-10 rounded-full hover:scale-125 hover:border transition-all duration-200"
                      />
                    </Link>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleDelete(i);
                      }}
                    >
                      <img
                        src={deleteIcon}
                        alt="delete icon"
                        className="w-10 rounded-full hover:scale-125 hover:border transition-all duration-200"
                      />
                    </button>
                  </div>
                </button>
              ))
            : ""}
        </div>
      </div>
    </div>
  );
};

export default Paste;
