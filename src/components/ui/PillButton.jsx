import { Link } from "react-router-dom";
import { cn } from "../../utils/cn";

const variants = {
  primary:
    "bg-brand-700 text-white shadow-[0_2px_12px_rgba(3,105,161,0.25)] hover:bg-brand-800 hover:shadow-[0_4px_20px_rgba(3,105,161,0.35)]",
  outline:
    "border border-[var(--border)] bg-white text-[var(--text-secondary)] hover:border-brand-400 hover:bg-brand-50 hover:text-brand-800",
  ghost:
    "text-[var(--text-muted)] hover:bg-slate-100 hover:text-brand-800",
  navActive: "bg-brand-700 text-white shadow-sm",
  nav: "text-[var(--text-secondary)] hover:bg-slate-100 hover:text-brand-800",
};

export function PillButton({ to, href, children, variant = "primary", className, onClick, ...props }) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-200 active:scale-[0.97]",
    variants[variant],
    className
  );

  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button type="button" className={classes} onClick={onClick} {...props}>
      {children}
    </button>
  );
}
