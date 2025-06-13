import { ROLE_SP_ADMIN, ROLE_SP_USER } from "@/src/constant";
import {
  User,
  Users,
  ClipboardPenLine,
  ReceiptIndianRupee,
  MessageCircleQuestion,
  ShieldAlert,
  BrushCleaning,
} from "lucide-react";

export const menus = [
  {
    label: "profile",
    icon: <User size={40} />,
    path: "/profile",
    gradient: "from-sky-200 to-blue-300", // clean sky blue
    roles: [ROLE_SP_ADMIN, ROLE_SP_USER],
  },
  {
    label: "residents",
    icon: <Users size={40} />,
    path: "/residents",
    gradient: "from-rose-200 to-pink-300", // soft pink
    roles: [ROLE_SP_ADMIN],
  },
  {
    label: "noticeboard",
    icon: <ClipboardPenLine size={40} />,
    path: "/noticeboard",
    gradient: "from-violet-200 to-indigo-300", // calm purple
    roles: [ROLE_SP_ADMIN, ROLE_SP_USER],
  },
  {
    label: "bills",
    icon: <ReceiptIndianRupee size={40} />,
    path: "/bills",
    gradient: "from-emerald-200 to-cyan-300", // fresh green-blue
    roles: [ROLE_SP_ADMIN, ROLE_SP_USER],
  },
  {
    label: "helpdesk",
    icon: <MessageCircleQuestion size={40} />,
    path: "/helpdesk",
    gradient: "from-amber-200 to-yellow-300", // warm yellow
    roles: [ROLE_SP_ADMIN, ROLE_SP_USER],
  },
  {
    label: "emergency",
    icon: <ShieldAlert size={40} />,
    path: "/emergency",
    gradient: "from-red-200 to-rose-300", // emergency red but soft
    roles: [ROLE_SP_ADMIN, ROLE_SP_USER],
  },

  {
    label: "maintenance",
    icon: <BrushCleaning size={40} />,
    path: "/maintenance",
    gradient: "from-teal-200 to-indigo-300", // neutral blue-green
    roles: [ROLE_SP_ADMIN, ROLE_SP_USER],
  },
];
