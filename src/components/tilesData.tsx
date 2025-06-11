import {
  ResidentsIcon,
  NoticeboardIcon,
  BillIcon,
  HelpdeskIcon,
  EmergencyIcon,
  ProfileIcon,
  MaintenanceIcon,
} from "../components/icons";

export const tiles = [
  {
    label: "residents",
    icon: <ResidentsIcon />,
    path: "/residents",
    gradient: "from-rose-200 to-pink-300", // soft pink
  },
  {
    label: "noticeboard",
    icon: <NoticeboardIcon />,
    path: "/noticeboard",
    gradient: "from-violet-200 to-indigo-300", // calm purple
  },
  {
    label: "bills",
    icon: <BillIcon />,
    path: "/bills",
    gradient: "from-emerald-200 to-cyan-300", // fresh green-blue
  },
  {
    label: "helpdesk",
    icon: <HelpdeskIcon />,
    path: "/helpdesk",
    gradient: "from-amber-200 to-yellow-300", // warm yellow
  },
  {
    label: "emergency",
    icon: <EmergencyIcon />,
    path: "/emergency",
    gradient: "from-red-200 to-rose-300", // emergency red but soft
  },
  {
    label: "profile",
    icon: <ProfileIcon />,
    path: "/profile",
    gradient: "from-sky-200 to-blue-300", // clean sky blue
  },
  {
    label: "maintenance",
    icon: <MaintenanceIcon />,
    path: "/maintenance",
    gradient: "from-teal-200 to-indigo-300", // neutral blue-green
  },
];
