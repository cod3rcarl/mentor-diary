import React from "react";
import {
  AiOutlineHome,
  AiOutlineForm,
  AiOutlineHistory,
  AiOutlineContacts,
} from "react-icons/ai";


export const SidebarData = [
  {
    title: "Home",
    path: "/",
    icon: <AiOutlineHome />,
    class: "nav-text",
  },
  {
    title: "Weekly Form",
    path: "/form",
    icon: <AiOutlineForm />,
    class: "nav-text",
  },
  {
    title: "Achievement History",
    path: "/history",
    icon: <AiOutlineHistory />,
    class: "nav-text",
  },
  {
    title: "Contact",
    path: "/contact",
    icon: <AiOutlineContacts />,
    class: "nav-text",
  },
  // {
  //   title: "Log Out",
  //   path: "/login",
  //   icon: <RiLogoutBoxLine />,
  //   class: "nav-text",
  // },
];
