"use client";
import { SidebarContext } from "@/context/SidebarContext";
import {
  MoreVertical,
  ChevronLast,
  ChevronFirst,
} from "lucide-react";
import { useContext } from "react";
import Image from "next/image";
import MicIcon from "../assets/images/mic-icon.png";
import LanguageIcon from "../assets/images/langauge-icon.png";
import {useKindeBrowserClient} from "@kinde-oss/kinde-auth-nextjs";
import ProfilePic from "../assets/images/profile-pic.png";
import {LogoutLink} from "@kinde-oss/kinde-auth-nextjs/components";

export default function Sidebar({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const contextSidebar = useContext(SidebarContext);

  if (!contextSidebar) {
    return null;
  }

  const { expanded, setExpanded } = contextSidebar;

  const {user} = useKindeBrowserClient();

  return (
    <aside className="h-screen">
      <nav className="h-full flex flex-col bg-white border-r shadow-sm">
        <div className="p-4 pb-8 flex justify-between items-center gap-1">
          <div
            className={`overflow-hidden transition-all ${
              expanded ? "w-56" : "w-0"
            }`}
          >
            <div className="flex flex-row items-center justify-center">
              <Image
                src={LanguageIcon}
                height={45}
                width={45}
                alt="Language Icon"
              />
              <Image
                src={MicIcon}
                height={45}
                width={45}
                alt="MicIcon"
                className="-ml-2"
              />
              <p className="text-2xl font-bold bg-gradient-to-r from-fuchsia-500 to-blue-500 bg-clip-text text-transparent">
                Say It Right!
              </p>
            </div>
          </div>
          <button
            onClick={() => setExpanded(!expanded)}
            className="p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100"
          >
            {expanded ? <ChevronFirst /> : <ChevronLast />}
          </button>
        </div>

        <ul className="flex-1 px-3">{children}</ul>

        <div className="border-t flex p-3">
          <Image
            src={ProfilePic}
            alt="Logo"
            width={50}
            height={50}
            className="rounded-md"
          />
          <div
            className={`
              flex justify-between items-center
              overflow-hidden transition-all ${expanded ? "w-52 ml-3" : "w-0"}
          `}
          >
            <div className="leading-4">
              <h4 className="font-semibold">{user?.given_name + " " + user?.family_name}</h4>
              <span className="text-xs text-gray-600">{user?.email}</span>
            </div>
            <LogoutLink><MoreVertical size={20} /></LogoutLink>
          </div>
        </div>
      </nav>
    </aside>
  );
}

export function SidebarItem({ icon, text, active, alert }: any) {
  const contextSidebar = useContext(SidebarContext);

  if (!contextSidebar) {
    return null;
  }

  const { expanded, setExpanded,selected,setSelected } = contextSidebar;
  
  return (
    <li
      className={`
        relative flex items-center py-2 px-3 my-1
        font-medium rounded-md cursor-pointer
        transition-colors group text-lg
        ${
          selected==text
            ? "bg-gradient-to-tr from-blue-200 to-blue-100 text-blue-800"
            : "hover:bg-blue-50 text-gray-600"
        }
    `}
    onClick={()=>setSelected(text)}
    >
      {icon}
      <span
        className={`overflow-hidden transition-all ${
          expanded ? "w-52 ml-3" : "w-0"
        }`}
      >
        {text}
      </span>
      {alert && (
        <div
          className={`absolute right-2 w-2 h-2 rounded bg-blue-400 ${
            expanded ? "" : "top-2"
          }`}
        />
      )}

      {!expanded && (
        <div
          className={`
          absolute left-full rounded-md px-2 py-1 ml-6
          bg-blue-100 text-blue-800 text-md
          invisible opacity-20 -translate-x-3 transition-all
          group-hover:visible group-hover:opacity-100 group-hover:translate-x-0
      `}
        >
          {text}
        </div>
      )}
    </li>
  );
}
