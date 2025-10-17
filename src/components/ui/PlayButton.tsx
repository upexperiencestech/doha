import React from "react";

type PlayButtonProps = {
  color?: string;
};

export function PlayButton({ color = "#7C0D48" }: PlayButtonProps) {
  return (
    <div
      className="flex items-center justify-center"
      style={{
        width: "36px",
        height: "36px",
      }}
    >
      <div
        style={{
          width: 0,
          height: 0,
          borderTop: `${18.54 / 2}px solid transparent`,   // 9.27px
          borderBottom: `${18.54 / 2}px solid transparent`, // 9.27px
          borderLeft: `15.22px solid ${color}`,            // 15.22px
        }}
      />
    </div>
  );
}

export default PlayButton;
