import React from "react";
import GraduationCap from "lucide-react";
import { usePathname } from "next/navigation";
import Link from "next/link";

interface SidebarItemProps {
  label: string;
  icon: any;
  href: string;
}

const SidebarItem: React.FC<SidebarItemProps> = ({ label, icon, href }) => {
  const router = usePathname();
  // const convertIcon=(symbol:SidebarItemProps)=>{
  //   const icon= symbol.icon as typeof
  // }
  return (
    <Link
      href={href}
      className="flex items-center p-2 hover:bg-gray-700 rounded cursor-pointer transition-colors"
    >
      <span className="mr-2">{icon}</span>
      <span className="text-md">{label}</span>
    </Link>
  );
};

export default SidebarItem;
