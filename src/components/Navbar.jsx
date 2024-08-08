"use client";

import { MenuOutlined } from "@ant-design/icons";
import { Drawer, Menu } from "antd";
import React, { useState } from "react";
import '../app/style.css';
const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <div className="absolute w-full z-50">
        <div className="container mx-auto   text-white">
      <div className="flex items-center justify-between px-2 ">
        <MenuOutlined 
        className="lg:hidden md:hidden block"
        onClick={()=>{
            setOpenMenu(true)
        }} />
        <h3 className="font-bold text-4xl ">Ant<span className="text-blue-500">D</span></h3>
        <div className="lg:flex md:flex items-center justify-center hidden ">
          <AppMenu className="" />
        </div>
      </div>
      <Drawer
     
        open={openMenu}
        placement="left"
        onClose={() => {
          setOpenMenu(false);
        }}
      >
        <AppMenu className="lg:hidden" isinline />
      </Drawer>
    </div>
    </div>
  );
};
const AppMenu = ({ isinline = false }) => {
  return (
    <Menu
    className="border-none text-lg p-4 bg-transparent custom-menu "
      mode={isinline ? "inline" : "horizontal"}
      items={[
        {
          label: "Home",
          key: "Home",
        },
        {
          label: "About",
          key: "About",
        },
        {
          label: "contact Us",
          key: "contact Us",
        },
        {
          label: "services",
          key: "services",
        },
      ]}
    ></Menu>
  );
};
export default Navbar;
