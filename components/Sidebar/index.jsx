import React from "react";
import "./style.css";
import { AiFillHome } from "react-icons/ai";
import { AiOutlineBars } from "react-icons/ai";
import { AiFillCaretRight } from "react-icons/ai";
import { AiFillCaretDown } from "react-icons/ai";

const Sidebar = () => {
  const a=document.querySelector("muitenngang")
  a.addEventListener(click,()=>{
    
  })
  
  return (
    
  
    <div>
          <div className="sidebar-container">
      <ul>
        <li><AiOutlineBars className="binhan"/></li><hr />
        <li>
          <AiFillHome />
          <span>Home</span>

        </li>
        <li>
          <AiFillHome />
          <span>Home</span>
        </li>
        <li>
          <AiFillHome />
          <span>Home</span>
          <AiFillCaretRight  className="muitenngang"/>
          <AiFillCaretDown className="muitenxuong"/>
        </li>
        <li>
          <AiFillHome />
          <span>Home</span>
          <AiFillCaretRight  className="muitenngang"/>
          <AiFillCaretDown className="muitenxuong"/>
          </li>
          <div className="noidung">
            <ul>
              <li>binhan</li>
              <li>binhan</li>
            </ul>
          </div>
       
        <li>
          <AiFillHome />
          <span>Home</span>
          <AiFillCaretRight  className="muitenngang"/>
          <AiFillCaretDown className="muitenxuong"/>
        </li>
      </ul>
    </div>
    
    </div>


  );
};

export default Sidebar;