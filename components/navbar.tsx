"use client";

import {
  Bell,
  ChevronDown,
  DraftingCompass,
  Folder,
  Headset,
  House,
  Image,
  Images,
  Moon,
  Sun,
  Video,
  WandSparkles,
} from "lucide-react";
import { KreaLogo, PenWrite } from "./icons";
import { useTheme } from "@/hooks/use-theme";
import { useState } from "react";

const navItems = [
  {
    name: "Home",
    icon: House,
  },
  {
    name: "Image",
    icon: Image,
  },
  {
    name: "Video",
    icon: Video,
  },
  {
    name: "Enhancer",
    icon: WandSparkles,
  },
  {
    name: "Realtime",
    icon: PenWrite,
  },
  {
    name: "Edit",
    icon: DraftingCompass,
  },
  {
    name: "Assets",
    icon: Folder,
  },
];

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [navActive, setNavActive] = useState("Home");
  return (
    <nav className="flex items-center justify-between px-4 py-3">
      <div className="flex items-center gap-7">
        <KreaLogo className="w-7 h-7" />
        <div className="flex items-center gap-1">
          <span className="bg-gradient-to-br from-[#D299E6] from-10% via-[#8E9BEF] via-50% to-[#AFCAF9] to-100% rounded-full w-7 h-7"></span>
          <span>benevolentnimblebat</span>
          <ChevronDown />
        </div>
      </div>
      <div className="bg-gray-light py-2 px-3 rounded-xl">
        <ul className="flex items-center gap-8 *:cursor-pointer">
          {navItems.map(({ name, icon: Icon }) => (
            <li
              key={name}
              onClick={() => setNavActive(name)}
              className={
                navActive === name
                  ? "bg-white py-2 px-3 rounded-lg text-black"
                  : "text-black dark:text-white"
              }
            >
              <Icon className="w-5 h-5" />
            </li>
          ))}
        </ul>
      </div>
      <div className="flex gap-4 items-center">
        <div className="flex items-center gap-1 bg-gray-subtle py-2 px-3 rounded-lg text-sm">
          <Images className="w-5 h-5" />
          <span>Gallery</span>
        </div>
        <div className="flex items-center gap-1 bg-gray-subtle py-2 px-3 rounded-lg text-sm">
          <Headset className="w-5 h-5" />
          <span>Support</span>
        </div>
        <div className="bg-gray-subtle p-2 rounded-lg">
          <Bell className="w-5 h-5" />
        </div>
        <button
          className="bg-gray-subtle p-2 rounded-lg cursor-pointer *:w-5 *:h-5"
          onClick={toggleTheme}
        >
          {theme === "dark" ? <Sun /> : <Moon />}
        </button>
        <div className="bg-gradient-to-br from-[#D299E6] from-10% via-[#8E9BEF] via-50% to-[#AFCAF9] to-100% rounded-full w-10 h-10"></div>
      </div>
    </nav>
  );
}
