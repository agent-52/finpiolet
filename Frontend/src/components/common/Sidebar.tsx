import { useNavigate } from "react-router-dom";

export const Sidebar = () => {
  const navigate = useNavigate();
  return (
    <nav>
      <SidebarCard
        name="Dashboard"
        img=""
        onClickFn={(e) => {
          navigate("/dashboard");
        }}
      />
      <SidebarCard
        name="Transactions"
        img=""
        onClickFn={(e) => {
          navigate("/transactions");
        }}
      />
      <SidebarCard
        name="Budgets"
        img=""
        onClickFn={(e) => {
          navigate("/budgets");
        }}
      />
      <SidebarCard
        name="Goals"
        img=""
        onClickFn={(e) => {
          navigate("/goals");
        }}
      />
      <SidebarCard
        name="Analytics"
        img=""
        onClickFn={(e) => {
          navigate("/analytics");
        }}
      />
      <SidebarCard
        name="Saving Planner"
        img=""
        onClickFn={(e) => {
          navigate("/saving-planner");
        }}
      />
      <SidebarCard
        name="Categories"
        img=""
        onClickFn={(e) => {
          navigate("/categories");
        }}
      />
    </nav>
  );
};

const SidebarCard = ({
  name,
  img,
  onClickFn,
}: {
  name: string;
  img: string;
  onClickFn?: (e: React.MouseEvent<HTMLDivElement>) => void;
}) => {
  return (
    <div onClick={onClickFn}>
      <div>
        <img src={img} alt="" />
      </div>
      <div>{name}</div>
    </div>
  );
};

// const Sidebar = ({
//   isCollapsed,
//   setIsCollapsed,
// }: {
//   isCollapsed: boolean;
//   setIsCollapsed: (v: boolean) => void;
// }) => {
//   const navItems = [
//     { icon: <LayoutDashboard size={20} />, label: "Dashboard" },
//     { icon: <ArrowRightLeft size={20} />, label: "Transactions" },
//     { icon: <PieChart size={20} />, label: "Budgets" },
//     { icon: <Target size={20} />, label: "Goals", active: true },
//     { icon: <BarChart2 size={20} />, label: "Analytics" },
//     { icon: <Bot size={20} />, label: "AI Assistant" },
//     { icon: <Calendar size={20} />, label: "Saving Planner" },
//     { icon: <Tags size={20} />, label: "Categories" },
//     { icon: <User size={20} />, label: "Profile" },
//   ];

//   return (
//     <div className={`sidebar ${isCollapsed ? "collapsed" : ""}`}>
//       <div className="sidebar-header">
//         <ShieldAlert className="logo-icon" size={28} />
//         {!isCollapsed && <span>FinPilot</span>}
//       </div>
//       <div className="sidebar-nav">
//         {navItems.map((item, idx) => (
//           <div
//             key={idx}
//             className={`nav-item ${item.active ? "active" : ""}`}
//             title={isCollapsed ? item.label : ""}
//           >
//             {item.icon}
//             {!isCollapsed && <span>{item.label}</span>}
//           </div>
//         ))}
//       </div>
//       <div className="sidebar-footer">
//         <button
//           className="collapse-btn"
//           onClick={() => setIsCollapsed(!isCollapsed)}
//         >
//           {isCollapsed ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
//           {!isCollapsed && <span>Collapse</span>}
//         </button>
//       </div>
//     </div>
//   );
// };
