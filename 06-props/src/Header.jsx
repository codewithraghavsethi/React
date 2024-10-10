import React from "react";

function Header({Pinfo, email, phone}) {

    // console.log(props.headerInfo); Not Call for Object Name 
    console.log(Pinfo); // You can call only props name what ever you give like Pinfo
    console.log(Pinfo.name1);
    console.log(Pinfo.name2);
    console.log(Pinfo.name3);
    console.log(Pinfo.name4);

  return (
    <div>
      <h1>
        Hi Raghav Sethi How are you? This is your Email Address {email} and your contact Number {phone} Thank you for Coming Nice to meet
        you.
        Name:- {Pinfo.name6}
      </h1>
    </div>
  );
}

export default Header;
