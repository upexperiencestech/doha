import React from "react";

type CheckedBoxProps = {
  className?: string;
  active?: boolean; // control tick visibility
  tickColor?: string; // color of the tick
};

export function CheckedBox({
  className = "",
  active = false,
  tickColor = "#7C0D48",
}: CheckedBoxProps) {
  return (
    <div
      className={`m-[4.5px] w-[27px] h-[27px] flex items-center justify-center ${className}`}
      style={{
        backgroundColor: "#FFFFFF", // ✅ always white background
        border: `3px solid ${tickColor}`, // optional border
      }}
      role="img"
      aria-label="Checked"
    >
      {active && (
        <svg
          className="block"
          width="16"
          height="10"
          viewBox="0 0 18 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          style={{ transform: "translateY(0.2px)" }}
        >
          <path
            d="M1.5 6.25L6.25 10.75L16.5 1.25"
            stroke={tickColor} // ✅ tick in your color
            strokeWidth="2.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}
    </div>
  );
}

export default CheckedBox;
