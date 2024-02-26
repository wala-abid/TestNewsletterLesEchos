"use client";
import React from "react";
import { Layout } from "antd";
import Image from "next/image";
import UserAvatar from "./UserAvatar";

const Navbar: React.FC = () => {
  const { Header } = Layout;
  return (
    <Header className="header-bg fixed-top">
      <div className="container-fluid d-flex justify-content-between">
        <div className="my-auto">
          <h1>TodoList</h1>
        </div>

        <div>
          <UserAvatar />
        </div>
      </div>
    </Header>
  );
};

export default Navbar;
