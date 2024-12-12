////jsx //////
import React from "react";
import ReactDOM from "react-dom";

ReactDOM.render(
  <div>
    <h1>Hello World</h1>
    <p>This is a paragraph</p>
  </div>,
  document.getElementById("root")
);
/////////jsx practice///////////
import React from "react";
import ReactDom from "react-dom";

ReactDom.render(
  <div>
    <h1 className="heading">MY Favourite Foods</h1>
    <ul>
      <li>Bacon</li>
      <li>Noodles</li>
      <li>jamon</li>
    </ul>
  </div>,
  document.getElementById("root")
);

/////////////js expressions in jsx and es6 template literals ///////////////
import React from "react";
import ReactDom from "react-dom";

const fname = "Shoaib";
const lname = "khan";
const num = 5 * 2 + 1;

ReactDom.render(
  <div>
    <h1>
      Hello {fname} {lname}!
    </h1>
    <p>My lucky number is {num}</p>
  </div>,
  document.getElementById("root")
);
///////////Practice///////////////////////
import React from "react";
import ReactDOM from "react-dom";

const name = "Shoaib";
const currentDate = new Date();
const year = currentDate.getFullYear();

ReactDOM.render(
  <div>
    <p>Created By {name}</p>
    <p>Copyright {year}</p>
  </div>,
  document.getElementById("root")
);

///////////////Style  Attributes and styleing////////////////////////
import React from "react";
import ReactDOM from "react-dom";
const img = "https://picsum.photos/200";
ReactDOM.render(
  <div>
    <h1 className="heading" contentEditable="true" spellCheck="true">
      My Favourite Foods
    </h1>
    <img src={img} />
    <ul>
      <li>Bacon</li>
      <li>Jamon</li>
      <li>Noodles</li>
    </ul>
    <img
      className="food-img
    "
      src="https://www.bing.com/ck/a?!&&p=568da9cc00d2aa3d56159f722248a99b96b5591ddfe02eb9b7fdb1cacbc7f32bJmltdHM9MTczMzc4ODgwMA&ptn=3&ver=2&hsh=4&fclid=2cf48ae0-8fb7-6f59-0423-9e318e1a6e72&u=a1L2ltYWdlcy9zZWFyY2g_cT1qYW0lYzMlYjNuJmNibj1Lbm93bGVkZ2VDYXJkJnN0aWQ9ZTdlZjdhYjAtNThjYi0xMWRjLTJlODMtNTBjZjFmZTQ1Y2QxJnRoaWQ9T1NLLkhFUk9lU2JZbDJoTmJDOUZUbEo2MVVqTmpuVEVjR2N4R0N2cXQ3WHFpdkk4RGJVJkZPUk09S0NISU1N&ntb=1
    "
      alt=""
    />
    <img
      className="food-img"
      src="https://www.bing.com/ck/a?!&&p=9f30b753156117b27beb9a57f7e174f17bd132f92e799d426ae5735602ad8afbJmltdHM9MTczMzc4ODgwMA&ptn=3&ver=2&hsh=4&fclid=2cf48ae0-8fb7-6f59-0423-9e318e1a6e72&u=a1L2ltYWdlcy9zZWFyY2g_cT1ub29kbGUraGlzdG9yeSZpZD1DQTRFMUJGMTc5RkI2QjUyQ0VFQTA1OTg4MTU5RTQ5RTEyQTBBNTAw&ntb=1"
      alt=""
    />{" "}
    */}
  </div>,
  document.getElementById("root")
);
//////////inline stlying/////////////////////////

import React from "react";
import ReactDOM from "react-dom";

const customStyle = {
  color: "red",
  fontSize: "20px",
  border: "1px solid black",
};

customStyle.color = "blue";

ReactDOM.render(
  <h1 style={customStyle}>Hello World</h1>,
  document.getElementById("root")
);
//////////Practice/////////////
import React from "react";
import ReactDOM from "react-dom";
import "./../public/styles.css";

const date = new Date(2024, 11, 12, 19);
const currentTime = date.getHours();

let greeting;

const customStyle = {
  color: "",
};

if (currentTime < 12) {
  greeting = "Good Morning";
  customStyle.color = "red";
} else if (currentTime < 18) {
  greeting = "Good Afternoon";
  customStyle.color = "green";
} else {
  greeting = "Good Night";
  customStyle.color = "blue";
}

ReactDOM.render(
  <h1 className="heading" style={customStyle}>
    {greeting}
  </h1>,
  document.getElementById("root")
);

//Create a React app from scratch.
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.

//////////React Componenets///////////////
import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

ReactDOM.render(<App />, document.getElementById("root"));
/////////react compomtrs practise////////////////
import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import "./../public/styles.css";

ReactDOM.render(<App />, document.getElementById("root"));
//////import,export,modules////////////////
import React from "react";
import ReactDOM from "react-dom";
import pi, { doublePi, triplePi } from "./math";

ReactDOM.render(
  <ul>
    <li>{pi}</li>
    <li>{doublePi()}</li>
    <li>{triplePi()}</li>
  </ul>,
  document.getElementById("root")
);
////////////////practise///////////////////
import React from "react";
import ReactDOM from "react-dom";
import { add, subtract, mulitply, divide } from "./math";

ReactDOM.render(
  <ul>
    <li>{add(1, 2)}</li>
    <li>{mulitply(2, 3)}</li>
    <li>{subtract(4, 2)}</li>
    <li>{divide(4, 2)}</li>
  </ul>,

  document.getElementById("root")
);
