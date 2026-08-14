import { Bell, ChevronDown, Search } from "lucide-react";
import { useState } from "react";
import type { UserDetails } from "../../auth/auth.types";

export default function TopNav({ user }: { user: UserDetails | null }) {
  const [showUserMenu, setShowUserMenu] = useState(false);

  return (
    <header className="fp-topnav">
      <div className="fp-topnav-search">
        <span className="fp-topnav-search-icon">
          <Search size={15} />
        </span>
        <input
          type="text"
          placeholder="Search transactions, accounts…"
          className="fp-topnav-search-input"
        />
        <span className="fp-topnav-search-kbd">⌘K</span>
      </div>

      <div className="fp-topnav-right">
        <button className="fp-topnav-icon-btn">
          <Bell size={16} />
          <span className="fp-notif-dot" />
        </button>

        <div className="fp-topnav-divider" />

        <div className="fp-profile-btn-wrapper">
          <button
            className="fp-topnav-profile-btn"
            onClick={() => setShowUserMenu(!showUserMenu)}
          >
            <div className="fp-topnav-avatar">
              {user?.name.slice(0, 2).toUpperCase()}
            </div>
            <div className="fp-topnav-user-info">
              <p className="fp-topnav-user-name">{user?.name}</p>
              <p className="fp-topnav-user-plan">Personal Plan</p>
            </div>
            <span className="fp-topnav-chevron">
              <ChevronDown size={14} />
            </span>
          </button>

          {showUserMenu && (
            <>
              <div
                className="fp-topnav-overlay"
                onClick={() => setShowUserMenu(false)}
              />
              <div className="fp-topnav-dropdown">
                <div className="fp-dropdown-header">
                  <p className="fp-dropdown-header-name">{user?.name}</p>
                  <p className="fp-dropdown-header-email">{user?.email}</p>
                </div>
                {[
                  "Profile",
                  "Account Settings",
                  "Billing",
                  "Notifications",
                ].map((item) => (
                  <button key={item} className="fp-dropdown-item">
                    {item}
                  </button>
                ))}
                <div className="fp-dropdown-danger-zone">
                  <button className="fp-dropdown-item fp-dropdown-item--danger">
                    Sign out
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
