export default function Button({ as = "button", href, variant = "primary", className = "", children, ...props }) {
  const classes = [
    "btn",
    variant === "primary" ? "btn-primary" : "btn-outline",
    className
  ].join(" ");

  if (as === "a" && href) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    );
  }
  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}


