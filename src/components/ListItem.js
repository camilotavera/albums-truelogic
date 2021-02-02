import React from "react";

export const ListItem = ({ album }) => {
  const { id, title, thumbnailUrl } = album;
  return (
    <li>
      <p>id: {id}</p>
      <p>title: {title}</p>
      <img src={thumbnailUrl} alt="album" />
    </li>
  );
};
