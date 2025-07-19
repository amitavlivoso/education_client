import { useState } from "react";
import {
  FaChevronDown,
  FaChevronRight,
  FaClinicMedical,
  FaUsers,
  FaChartBar,
  FaBook,
  FaFileAlt,
  FaShieldAlt,
  FaUserPlus,
  FaTachometerAlt,
  FaTimes,
  FaCloudUploadAlt,
  FaClipboardList,
  FaClock,
  FaLayerGroup,
  FaSearch,
  FaBell,
  FaBellSlash,
  FaCog,
  FaUserShield,
} from "react-icons/fa";

const sidebarItems = [
  {
    label: "Dashboard",
    icon: <FaTachometerAlt />,
    link: "/admin/dashboard",
  },
  {
    label: "User Management",
    icon: <FaUsers />,
    children: [
      {
        label: "All Users",
        link: "/admin/users",
        icon: <FaUserPlus />,
      },
      {
        label: "Add User",
        link: "/admin/users/add",
        icon: <FaUserPlus />,
      },
      {
        label: "Deactivated Users",
        link: "/admin/users/deactivated",
        icon: <FaShieldAlt />,
      },
    ],
  },
  {
    label: "Content Management",
    icon: <FaFileAlt />,
    children: [
      {
        label: "Study Materials",
        link: "/admin/content/materials",
        icon: <FaBook />,
      },
      {
        label: "Upload New Material",
        link: "/admin/content/upload",
        icon: <FaCloudUploadAlt />,
      },
      {
        label: "Pending Approvals",
        link: "/admin/content/approvals",
        icon: <FaClipboardList />,
      },
      {
        label: "Removed Content",
        link: "/admin/content/removed",
        icon: <FaClock />,
      },
    ],
  },
  {
    label: "Exam Management",
    icon: <FaChartBar />,
    children: [
      {
        label: "Create Exam",
        link: "/admin/exams/create",
        icon: <FaLayerGroup />,
      },
      {
        label: "All Exams",
        link: "/admin/exams",
        icon: <FaFileAlt />,
      },
      {
        label: "Question Bank",
        link: "/admin/exams/questions",
        icon: <FaBook />,
      },
      {
        label: "Plagiarism Reports",
        link: "/admin/exams/plagiarism",
        icon: <FaSearch />,
      },
    ],
  },
  {
    label: "Performance Reports",
    icon: <FaChartBar />,
    children: [
      {
        label: "Student Reports",
        link: "/admin/reports/students",
        icon: <FaChartBar />,
      },
      {
        label: "Teacher Analytics",
        link: "/admin/reports/teachers",
        icon: <FaChartBar />,
      },
      {
        label: "Exam Statistics",
        link: "/admin/reports/exams",
        icon: <FaChartBar />,
      },
    ],
  },
  {
    label: "Parental Notifications",
    icon: <FaBell />,
    children: [
      {
        label: "Recent Notifications",
        link: "/admin/notifications/logs",
        icon: <FaBellSlash />,
      },
      {
        label: "Configure Templates",
        link: "/admin/notifications/templates",
        icon: <FaClipboardList />,
      },
    ],
  },
  {
    label: "System Settings",
    icon: <FaCog />,
    children: [
      {
        label: "Role Management",
        link: "/admin/settings/roles",
        icon: <FaUsers />,
      },
      {
        label: "Security Settings",
        link: "/admin/settings/security",
        icon: <FaUserShield />,
      },
      {
        label: "Notification Settings",
        link: "/admin/settings/notifications",
        icon: <FaBellSlash />,
      },
      {
        label: "Audit Logs",
        link: "/admin/settings/logs",
        icon: <FaClipboardList />,
      },
    ],
  },
];

export default function AdminSidebar({ onClose }) {
  const [openMenus, setOpenMenus] = useState({});

  const toggleMenu = (label) => {
    setOpenMenus((prev) => ({ ...prev, [label]: !prev[label] }));
  };

  return (
    <aside className="w-64 h-screen bg-white shadow-xl flex flex-col relative border-r">
      {/* Top Brand Header */}
      <div className="flex items-center justify-between p-5 bg-blue-100 border-b">
        <div className="flex items-center">
          <FaClinicMedical className="text-blue-600 text-xl mr-2" />
          <span className="text-xl font-bold text-blue-800">EduAdmin</span>
        </div>
        {onClose && (
          <button
            onClick={onClose}
            className="md:hidden text-gray-600 hover:text-blue-600"
          >
            <FaTimes />
          </button>
        )}
      </div>

      <nav className="flex-1 overflow-y-auto py-4 px-2 space-y-1">
        {sidebarItems.map((item) => (
          <SidebarItem
            key={item.label}
            item={item}
            openMenus={openMenus}
            toggleMenu={toggleMenu}
            level={0}
          />
        ))}
      </nav>
    </aside>
  );
}

function SidebarItem({ item, openMenus, toggleMenu, level }) {
  const hasChildren = item.children && item.children.length > 0;
  const isOpen = openMenus[item.label];
  const paddingLeft = `${level * 16 + 12}px`;

  return (
    <div>
      {!hasChildren ? (
        <a
          href={item.link}
          className="flex items-center gap-3 px-3 py-2 text-gray-700 hover:bg-blue-50 rounded-md transition-all duration-150"
          style={{ paddingLeft }}
        >
          <span className="text-base">{item.icon}</span>
          <span>{item.label}</span>
        </a>
      ) : (
        <>
          <button
            onClick={() => toggleMenu(item.label)}
            className="flex items-center gap-3 w-full text-left px-3 py-2 text-gray-700 hover:bg-blue-100 rounded-md transition-all duration-150"
            style={{ paddingLeft }}
          >
            <span className="text-base">{item.icon}</span>
            <span>{item.label}</span>
            <span className="ml-auto">
              {isOpen ? <FaChevronDown /> : <FaChevronRight />}
            </span>
          </button>
          <div
            className={`ml-2 overflow-hidden transition-all duration-300 ease-in-out ${
              isOpen ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            {item.children.map((child) => (
              <SidebarItem
                key={child.label}
                item={child}
                openMenus={openMenus}
                toggleMenu={toggleMenu}
                level={level + 1}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
