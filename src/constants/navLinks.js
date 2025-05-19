import { FaRegUser } from "react-icons/fa6";
import { FiEdit } from "react-icons/fi";
import { IoHomeOutline } from "react-icons/io5";
import { LuPhoneCall } from "react-icons/lu";
import { TfiBag } from "react-icons/tfi";
export const navLinks = [
  {
    id: 1,
    title: "Home",
    link: "/#home ",
    icon:<IoHomeOutline/>
  },
  {
    id: 2,
    title: "About",
    link: "/#about",
    icon:<FaRegUser/>
  },
  {
    id: 3,
    title: "Profile",
    link: "/#profile",
    icon:<TfiBag/>
  },
  {
    id: 4,
    title: "Skill",
    link: "/#skill",
    icon:<FiEdit/>
  },
  {
    id: 5,
    title: "Contact",
    link: "/#contact",
    icon:<LuPhoneCall/>
  },
];
