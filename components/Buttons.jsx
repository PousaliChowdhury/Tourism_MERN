import React from "react";
import Data from "./Data";
 
const Buttons = ({ filterItem, setItem, menuItems }) => {
  return (
    <>
      <div className="d-flex justify-content-center" style={{paddingLeft:'143px'}}>
        {menuItems.map((Val, id) => {
          return (
            <button
              className=" text-white p-1  mx-5 btn fw-bold" style={{background:'#0275d8'}}
              onClick={() => filterItem(Val)}
              key={id}
            >
              {Val}
            </button>
          );
        })}
        <button
          className=" text-white p-1 px-2 mx-5 btn fw-bold" style={{background:'#0275d8'}}
          onClick={() => setItem(Data)}
        >
          All
        </button>
       </div>
    </>
  );
};
 
export default Buttons;