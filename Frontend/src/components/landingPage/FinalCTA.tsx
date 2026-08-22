import { Link } from "react-router-dom";

export default function FinalCTA() {
  return (
    <section style={{ padding: "96px 24px", background: "#fff" }}>
      <div style={{ maxWidth: 720, margin: "0 auto", textAlign: "center" }}>
        <div
          style={{
            background: "var(--fg)",
            borderRadius: 24,
            padding: "72px 56px",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Subtle background texture */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              backgroundImage:
                "radial-gradient(circle at 30% 30%, rgba(26,92,56,0.08) 0%, transparent 60%), radial-gradient(circle at 70% 70%, rgba(26,92,56,0.05) 0%, transparent 60%)",
              pointerEvents: "none",
            }}
          />

          <h2
            style={{
              fontSize: "clamp(28px, 4vw, 40px)",
              fontWeight: 600,
              color: "#fff",
              letterSpacing: "-0.04em",
              lineHeight: 1.1,
              marginBottom: 16,
              position: "relative",
            }}
          >
            Start understanding your money today.
          </h2>
          <p
            style={{
              fontSize: 16,
              color: "rgba(255,255,255,0.6)",
              lineHeight: 1.6,
              marginBottom: 40,
              maxWidth: 480,
              margin: "0 auto 40px",
              position: "relative",
            }}
          >
            Track your spending. Build better budgets. Reach your goals. Make
            smarter financial decisions.
          </p>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 14,
              flexWrap: "wrap",
              position: "relative",
            }}
          >
            <Link
              to={"/signup"}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                background: "#fff",
                color: "var(--fg)",
                textDecoration: "none",
                padding: "14px 32px",
                borderRadius: 10,
                fontWeight: 600,
                fontSize: 15,
                transition: "transform 0.1s, box-shadow 0.15s",
                boxShadow: "0 4px 14px rgba(0,0,0,0.2)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-1px)";
                e.currentTarget.style.boxShadow = "0 8px 24px rgba(0,0,0,0.25)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 4px 14px rgba(0,0,0,0.2)";
              }}
            >
              Get Started Free
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path
                  d="M3 8h10M9 4l4 4-4 4"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
            <Link
              to={"/signin"}
              style={{
                display: "inline-flex",
                alignItems: "center",
                textDecoration: "none",
                padding: "14px 28px",
                borderRadius: 10,
                fontWeight: 600,
                fontSize: 15,
                color: "rgba(255,255,255,0.85)",
                border: "1px solid rgba(255,255,255,0.2)",
                transition: "border-color 0.15s, color 0.15s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.5)";
                e.currentTarget.style.color = "#fff";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)";
                e.currentTarget.style.color = "rgba(255,255,255,0.85)";
              }}
            >
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
