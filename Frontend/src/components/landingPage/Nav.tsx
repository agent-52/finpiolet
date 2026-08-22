import { useState } from "react";
import { Link } from "react-router-dom";

const links = [
  "Features",
  "Analytics",
  "AI Insights",
  "Smart Savings",
  "Goals",
];

export default function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        backgroundColor: "rgba(255,255,255,0.92)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        borderBottom: "1px solid var(--border)",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "0 24px",
          height: 60,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 32,
        }}
      >
        {/* Logo */}
        <a
          href="#"
          style={{
            display: "flex",
            alignItems: "center",
            gap: 9,
            textDecoration: "none",
            flexShrink: 0,
          }}
        >
          <div
            style={{
              width: 30,
              height: 30,
              backgroundColor: "var(--accent)",
              borderRadius: 8,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path
                d="M2.5 12L6 8.5L9 11L13.5 5"
                stroke="white"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <circle cx="13.5" cy="5" r="1.5" fill="white" />
            </svg>
          </div>
          <span
            style={{
              fontFamily: "'Manrope', sans-serif",
              fontWeight: 600,
              fontSize: 16,
              color: "var(--fg)",
              letterSpacing: "-0.03em",
            }}
          >
            FinPilot
          </span>
        </a>

        {/* Desktop nav */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 2,
            flex: 1,
            justifyContent: "center",
          }}
          className="hidden-mobile"
        >
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase().replace(" ", "-")}`}
              style={{
                padding: "6px 13px",
                fontSize: 13.5,
                fontWeight: 500,
                color: "var(--fg-secondary)",
                textDecoration: "none",
                borderRadius: 6,
                transition: "color 0.15s, background 0.15s",
                letterSpacing: "-0.01em",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "var(--fg)";
                e.currentTarget.style.background = "var(--bg)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "var(--fg-secondary)";
                e.currentTarget.style.background = "transparent";
              }}
            >
              {link}
            </a>
          ))}
        </div>

        {/* Right actions */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            flexShrink: 0,
          }}
        >
          <Link
            to={"/signin"}
            style={{
              fontSize: 13.5,
              fontWeight: 500,
              color: "var(--fg-secondary)",
              textDecoration: "none",
              padding: "6px 12px",
              borderRadius: 6,
              transition: "color 0.15s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "var(--fg)")}
            onMouseLeave={(e) =>
              (e.currentTarget.style.color = "var(--fg-secondary)")
            }
            className="hidden-mobile"
          >
            Sign In
          </Link>
          <Link
            to={"/signup"}
            style={{
              fontSize: 13.5,
              fontWeight: 600,
              color: "#fff",
              backgroundColor: "var(--accent)",
              textDecoration: "none",
              padding: "8px 18px",
              borderRadius: 7,
              transition: "background 0.15s, transform 0.1s",
              letterSpacing: "-0.01em",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "var(--accent-hover)";
              e.currentTarget.style.transform = "translateY(-1px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "var(--accent)";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            Get Started
          </Link>
          {/* Hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            style={{
              display: "none",
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: 4,
              color: "var(--fg)",
            }}
            className="show-mobile"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              {mobileOpen ? (
                <>
                  <line
                    x1="4"
                    y1="4"
                    x2="16"
                    y2="16"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  />
                  <line
                    x1="16"
                    y1="4"
                    x2="4"
                    y2="16"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  />
                </>
              ) : (
                <>
                  <line
                    x1="3"
                    y1="6"
                    x2="17"
                    y2="6"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  />
                  <line
                    x1="3"
                    y1="11"
                    x2="17"
                    y2="11"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  />
                  <line
                    x1="3"
                    y1="16"
                    x2="17"
                    y2="16"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          style={{
            borderTop: "1px solid var(--border)",
            padding: "10px 24px 18px",
            display: "flex",
            flexDirection: "column",
            gap: 2,
          }}
        >
          {[...links, "Sign In"].map((link) => (
            <a
              key={link}
              href="#"
              style={{
                padding: "9px 10px",
                fontSize: 14,
                fontWeight: 500,
                color: "var(--fg-secondary)",
                textDecoration: "none",
                borderRadius: 6,
              }}
              onClick={() => setMobileOpen(false)}
            >
              {link}
            </a>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: flex !important; }
        }
        @media (min-width: 769px) {
          .show-mobile { display: none !important; }
        }
      `}</style>
    </nav>
  );
}
