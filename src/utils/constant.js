import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faPlus, faThLarge } from "@fortawesome/free-solid-svg-icons";

export const formMenu = [];
export const homeMenu = [
  {
    title: "Dashboard",
    path: "/",
    icon: faThLarge,
    isActive: true,
  },
  {
    title: "Create Form",
    path: "/create-new-form",
    icon: faPlus,
    isActive: false,
  },
  {
    title: "Draft",
    path: "/draft",
    icon: faEnvelope,
    isActive: false,
  },
];
