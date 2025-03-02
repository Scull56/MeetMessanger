"use client";

import { useState } from "react";
import {
  HomeIcon,
  MagnifyingGlassIcon,
  ChatBubbleLeftIcon,
  ArrowRightStartOnRectangleIcon,
  Bars3Icon,
} from "@heroicons/react/24/solid";
import Link from "next/link";
import styles from "./styles.module.scss";

const Sidebar = () => {
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <div
      className={`${
        styles.sidebar
      } flex flex-col h-screen bg-gray-800 text-white p-2 ${
        isExpanded ? "w-56" : "w-16"
      } transition-all duration-300`}
    >
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="p-2 mb-4 focus:outline-none"
      >
        <Bars3Icon className="h-6 w-6 text-white" />
      </button>
      <nav className="flex flex-col flex-grow space-y-4">
        <NavItem
          icon={HomeIcon}
          text="Главная"
          isExpanded={isExpanded}
          href="/"
        />
        <NavItem
          icon={MagnifyingGlassIcon}
          text="Поиск"
          isExpanded={isExpanded}
          href="search"
        />
        <NavItem
          icon={ChatBubbleLeftIcon}
          text="Чаты"
          isExpanded={isExpanded}
          href="chat"
        />
      </nav>
      <div className="mt-auto">
        <NavItem
          icon={ArrowRightStartOnRectangleIcon}
          text="Войти"
          isExpanded={isExpanded}
          href="login"
        />
      </div>
    </div>
  );
};

interface NavItemProps {
  icon: React.ElementType;
  text: string;
  isExpanded: boolean;
  href: string;
}

const NavItem = ({ icon: Icon, text, isExpanded, href }: NavItemProps) => {
  return (
    <Link href={href}>
      <div className="button flex items-center p-2 rounded-lg hover:bg-gray-700 cursor-pointer">
        <Icon className="h-6 w-6" />
        {isExpanded && <span className="ml-4 text-sm">{text}</span>}
      </div>
    </Link>
  );
};

export default Sidebar;
