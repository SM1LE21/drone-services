import React from "react";

function SpriteIcon({ name, size }) {
  size = size || 24;

  const height = size;
  const width = size;
  return (
    <svg
      width={width}
      height={height}
      xmlns="http://www.w3.org/2000/svg"
    >
      <use href={`/sprite.svg#icon-${name}`}></use>
    </svg>
  );
}

export default SpriteIcon;
