import Link from "next/link";
import React from "react";

function Buttons() {
  return (
    <div className="flex items-center justify-around p-6">
      <Link href="/" className="cairo_semibold_title flex space-x-1">
        <p>icon</p>
        <h1 className="Havar">البابا</h1>
      </Link>

      <Link href="/" className="cairo_semibold_title flex space-x-1">
        <p>icon</p>
        <h1 className="Havar">الخريطة</h1>
      </Link>

      <Link href="/" className="cairo_semibold_title flex space-x-1">
        <p>icon</p>
        <h1 className="Havar">الماما</h1>
      </Link>
    </div>
  );
}

export default Buttons;
