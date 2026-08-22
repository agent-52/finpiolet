import { Link } from "react-router-dom";
import HeroDashboard from "./HeroDashboard";

export default function Hero() {
  return (
    <section
      style={{
        padding: "88px 24px 72px",
        textAlign: "center",
        background: "#fff",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        {/* Eyebrow */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            background: "var(--accent-light)",
            border: "1px solid var(--accent-border)",
            borderRadius: 20,
            padding: "5px 14px",
            marginBottom: 28,
          }}
        >
          <div
            style={{
              width: 6,
              height: 6,
              borderRadius: "50%",
              background: "var(--accent)",
            }}
          />
          <span
            style={{
              fontSize: 12,
              fontWeight: 600,
              color: "var(--accent)",
              letterSpacing: "0.04em",
            }}
          >
            Personal Finance Platform
          </span>
        </div>

        {/* Headline */}
        <h1
          style={{
            fontSize: "clamp(40px, 7vw, 72px)",
            fontWeight: 500,
            fontFamily: "'Manrope', sans-serif",
            color: "var(--fg)",
            letterSpacing: "-0.045em",
            lineHeight: 1.05,
            marginBottom: 24,
            maxWidth: 800,
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          Take Control of{" "}
          <span style={{ color: "var(--accent)" }}>Your Money.</span>
        </h1>

        {/* Supporting headline */}
        <p
          style={{
            fontSize: "clamp(16px, 2.5vw, 20px)",
            color: "var(--fg-secondary)",
            lineHeight: 1.55,
            maxWidth: 620,
            margin: "0 auto 16px",
            fontWeight: 400,
          }}
        >
          Track your spending, plan your budget, reach your goals, and
          understand your finances — all in one place.
        </p>

        <p
          style={{
            fontSize: 15,
            color: "var(--fg-muted)",
            lineHeight: 1.6,
            maxWidth: 560,
            margin: "0 auto 40px",
          }}
        >
          FinPilot gives you a complete view of your finances with powerful
          analytics and personalized AI insights that help you make better
          financial decisions.
        </p>

        {/* CTAs */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 14,
            flexWrap: "wrap",
            marginBottom: 24,
          }}
        >
          <Link
            to={"/signin"}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              background: "var(--accent)",
              color: "#fff",
              textDecoration: "none",
              padding: "13px 28px",
              borderRadius: 10,
              fontWeight: 600,
              fontSize: 15,
              transition: "background 0.15s, transform 0.1s, box-shadow 0.15s",
              boxShadow: "0 4px 14px rgba(26,92,56,0.2)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "var(--accent-hover)";
              e.currentTarget.style.transform = "translateY(-1px)";
              e.currentTarget.style.boxShadow = "0 6px 20px rgba(26,92,56,0.3)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "var(--accent)";
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 4px 14px rgba(26,92,56,0.2)";
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
          <a
            href="#features"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              background: "#fff",
              color: "var(--fg)",
              textDecoration: "none",
              padding: "13px 28px",
              borderRadius: 10,
              fontWeight: 600,
              fontSize: 15,
              border: "1px solid var(--border-strong)",
              transition: "border-color 0.15s, transform 0.1s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "var(--fg-muted)";
              e.currentTarget.style.transform = "translateY(-1px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "var(--border-strong)";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            Explore Features
          </a>
        </div>

        {/* Trust statement */}
        <p
          style={{
            fontSize: 13,
            color: "var(--fg-muted)",
            marginBottom: 64,
          }}
        >
          No complicated spreadsheets. No scattered finance apps. Just one clear
          view of your money.
        </p>

        {/* Dashboard mockup */}
        <HeroDashboard />
      </div>
    </section>
  );
}
