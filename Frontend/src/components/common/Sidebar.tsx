import {
  ArrowLeftRight,
  BarChart2,
  ChevronRight,
  CreditCard,
  HelpCircle,
  LayoutDashboard,
  PiggyBank,
  Settings,
  Target,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

interface SidebarProps {
  activePage: string;
  onNavigate: (page: string) => void;
}

const NAV_ITEMS = [
  { icon: LayoutDashboard, label: "Dashboard", id: "dashboard" },
  { icon: ArrowLeftRight, label: "Transactions", id: "transactions" },
  { icon: PiggyBank, label: "Budgets", id: "budgets" },
  { icon: Target, label: "Goals", id: "goals" },
  { icon: CreditCard, label: "Categories", id: "category" },
  { icon: BarChart2, label: "Analytics", id: "analytics" },
];

const BOTTOM_NAV_ITEMS = [
  { icon: Settings, label: "Settings", id: "settings" },
  { icon: HelpCircle, label: "Help", id: "help" },
];

export function Sidebar({ activePage, onNavigate }: SidebarProps) {
  const navigate = useNavigate();
  return (
    <aside className="fp-sidebar">
      <div className="fp-sidebar-logo">
        <div className="fp-sidebar-logo-inner">
          <div className="fp-sidebar-logo-mark">FP</div>
          <span className="fp-sidebar-logo-name">FinPilot</span>
        </div>
      </div>

      <nav className="fp-sidebar-nav">
        <div className="fp-sidebar-nav-group">
          {NAV_ITEMS.map(({ icon: Icon, label, id }) => {
            const isActive = activePage === id;
            return (
              <button
                key={id}
                onClick={() => {
                  onNavigate(id);
                  navigate(`/${id}`);
                }}
                className={`fp-sidebar-nav-item${isActive ? " fp-sidebar-nav-item--active" : ""}`}
              >
                <span className="fp-sidebar-nav-icon">
                  <Icon size={16} />
                </span>
                <span className="fp-sidebar-nav-label">{label}</span>
                {isActive && (
                  <span className="fp-sidebar-nav-chevron">
                    <ChevronRight size={12} />
                  </span>
                )}
              </button>
            );
          })}
        </div>

        <div className="fp-sidebar-section">
          <span className="fp-sidebar-section-title">Workspace</span>
          <div className="fp-sidebar-nav-group">
            <button className="fp-sidebar-nav-item">
              <span className="fp-sidebar-ws-dot fp-sidebar-ws-dot--green">
                P
              </span>
              <span className="fp-sidebar-nav-label">Personal</span>
            </button>
            <button className="fp-sidebar-nav-item">
              <span className="fp-sidebar-ws-dot fp-sidebar-ws-dot--purple">
                J
              </span>
              <span className="fp-sidebar-nav-label">Joint</span>
            </button>
          </div>
        </div>
      </nav>

      <div className="fp-sidebar-bottom">
        <div className="fp-sidebar-bottom-group">
          {BOTTOM_NAV_ITEMS.map(({ icon: Icon, label, id }) => (
            <button key={id} className="fp-sidebar-nav-item">
              <span className="fp-sidebar-nav-icon">
                <Icon size={16} />
              </span>
              <span className="fp-sidebar-nav-label">{label}</span>
            </button>
          ))}
        </div>
      </div>
    </aside>
  );
}
