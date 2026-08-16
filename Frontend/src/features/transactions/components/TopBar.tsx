import { Ic } from "./Icon";

export function Topbar({ count }: { count: number }) {
  return (
    <header className="topbar">
      <div className="topbar__left">
        <span className="topbar__title">Transactions</span>
        <span className="topbar__divider" />
        <span className="topbar__subtitle">{count} records</span>
      </div>
      <div className="topbar__right">
        <div className="topbar__search-wrap">
          <span className="topbar__search-icon">
            <Ic
              paths={["M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"]}
              size={14}
            />
          </span>
          <input
            className="topbar__search-input"
            placeholder="Search anything…"
          />
        </div>
        <button className="topbar__icon-btn">
          <Ic
            paths={[
              "M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9",
            ]}
            size={16}
          />
          <span className="topbar__notif-dot" />
        </button>
        <button className="topbar__icon-btn">
          <Ic
            paths={[
              "M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z",
            ]}
            size={16}
          />
        </button>
        <button className="topbar__avatar-btn">
          <div className="topbar__avatar-circle">
            <span>AK</span>
          </div>
          <span className="topbar__avatar-name">Alex Kim</span>
          <Ic paths={["M19 9l-7 7-7-7"]} size={12} color="#9ba3af" />
        </button>
      </div>
    </header>
  );
}
