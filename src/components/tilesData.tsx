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
  { label: "residents", icon: <ResidentsIcon />, path: "/residents" },
  { label: "noticeboard", icon: <NoticeboardIcon />, path: "/noticeboard" },
  { label: "bill", icon: <BillIcon />, path: "/bills" },
  { label: "helpdesk", icon: <HelpdeskIcon />, path: "/helpdesk" },
  { label: "emergency", icon: <EmergencyIcon />, path: "/emergency" },
  { label: "profile", icon: <ProfileIcon />, path: "/profile" },
  { label: "maintenance", icon: <MaintenanceIcon />, path: "/maintenance" },
];
