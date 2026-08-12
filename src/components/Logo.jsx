import React from 'react';
import { assetPath } from '../utils/assetPath.js';

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
        src={assetPath(dark ? 'footer-logo.png?v=2' : 'logo.png?v=2')}
        alt="DropXcorp Pvt. Ltd."
        className="main-logo"
        width={width}
      />
    </div>
  );
}

