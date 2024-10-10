import React from "react";

const Header = ({ name, phone, go, children }) => {
  console.log(go);
  return (
    <div>
      <h1>
        hello {name} and your contact number {phone} and Object list {go.name1}, {go.name2}, {go.name3}, {go.name4}
      </h1>
      console.log(go);
      {children}
    </div>
  );
};

export default Header;
