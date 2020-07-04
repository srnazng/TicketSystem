import React from "react";
import REACTDOM from "react-dom";
import "./index.css";
import Home from "./Home.js"
import NameBox from "./NameBox";

var destination = document.querySelector("#container");

REACTDOM.render(
    <div>
        <NameBox hasName={false} />
    </div>,
    destination
);