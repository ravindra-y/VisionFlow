import React from "react";
import { FloatingDock } from "./floating-dock";
import {
  IconHome,
  IconMapPin,
  IconStar,
  IconAdjustments,
  IconBrandGithub,
  IconBrandTwitter,
} from "@tabler/icons-react";
import { Link } from "react-router-dom";

export function FloatingDockDemo() {
  const links = [
    {
      title: "Dashboard",
      icon: (
        <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/dashboard",
    },
    {
      title: "Locations",
      icon: (
        <IconMapPin className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/locations",
    },
    {
      title: "Recommendations",
      icon: (
        <IconStar className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/recommendations",
    },
    {
      title: "Settings",
      icon: (
        <IconAdjustments className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: "Twitter",
      icon: (
        <IconBrandTwitter className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://twitter.com",
    },
    {
      title: "GitHub",
      icon: (
        <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://github.com",
    },
  ];

  return (
    <div className="flex items-center justify-center fixed bottom-10 left-1/2 transform -translate-x-1/2 z-50">
      <FloatingDock mobileClassName="translate-y-20" items={links} />
    </div>
  );
}

export default FloatingDockDemo;
