import React from "react";
import SidebarItem from "./SidebarItem";
import { FaGraduationCap } from "react-icons/fa6";
import { BsFillPersonLinesFill } from "react-icons/bs";

const Sidebar: React.FC = () => {
  return (
    <div className="w-[12vw] h-screen bg-gray-800 text-white p-4 border-r-2 border-gray-600 ">
      <SidebarItem label="Home" icon="🏠" href="/home" />
      <SidebarItem label="Dashboard" icon="📊" href="/dashboard" />
      <SidebarItem label="Settings" icon="⚙️" href="/settings" />
      <SidebarItem label="Profile" icon="👤" href="/profile" />
      <SidebarItem label="Messages" icon="📩" href="/messages" />
      <SidebarItem
        label="Teachers"
        icon={<FaGraduationCap size={"18px"} />}
        href="/teachers"
      />
      <SidebarItem
        label="Students"
        icon={<BsFillPersonLinesFill size={"18px"} />}
        href="/students"
      />
    </div>
  );
};

export default Sidebar;
