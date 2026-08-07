export default function Logo({
  dark = false,
  className = "",
  width = 300,
}) {
  return (
    <div
      className={`logo-wrapper ${
        dark ? "footer-logo" : "navbar-logo"
      } ${className}`}
    >
      <img
        src={dark ? "/footer-logo.png" : "/logo.png"}
        alt="DropXcorp Pvt. Ltd."
        className="main-logo"
        width={width}
      />
    </div>
  );
}