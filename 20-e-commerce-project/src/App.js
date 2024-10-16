import "./App.css";
import Category from "./Category";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

function App() {
  let [fin, setFin] = useState([]);

  let getCategory = () => {
    axios
      // .get('https://dummyjson.com/products/categories')
      .get('https://dummyjson.com/products/category-list')
      .then((res) => res.data)
      .then((finalRes) => {
        // console.log(finalRes);
        setFin(finalRes);
      });
  };

  useEffect(() => {
    getCategory();
  }, []);

  return (
    <>
      <div className="py-[40px]">
        <div className="max-w-[1320px] mx-auto">
          <h1 className="text-center text-[40px] font-bold mb-[30px]">
            Our Products
          </h1>
          <div className="grid grid-cols-[30%_auto] gap-[20px]">
            <div>
              <Category fin={fin} />
            </div>
            <div>
              <div className="grid grid-cols-3 gap-20">
                <ProductsItem />
                <ProductsItem />
                <ProductsItem />
                <ProductsItem />
                <ProductsItem />
                <ProductsItem />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

function ProductsItem() {
  return (
    <div className="shadow-lg text-center pb-2">
      <img
        src="https://images-static.nykaa.com/creatives/393d3b1e-f813-41e4-a949-a5ea30e01d37/default.jpg?tr=cm-pad_resize,w-900"
        alt=""
      />
      <h4>I Phone</h4>
    </div>
  );
}
