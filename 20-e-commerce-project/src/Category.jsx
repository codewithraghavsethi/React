import React from "react";

export default function Category({ fin }){
  
  let cat = fin.map((v,i) => {
    return (
      <li key={i} className="bg-gray-300 cursor-pointer p-[7px] text-[20px] font-serif font-semibold w-60 mb-2"> {v} </li>
    );
  });

  return (
    <div>
      <h3 className="text-[25px] font-[500] p-[10px]">Product Category</h3>
      <ul>{cat}</ul>
    </div>
  );
};


