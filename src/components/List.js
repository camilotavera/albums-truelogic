import React, { useEffect, useState } from "react";
import { ListItem } from "./ListItem";
import { getAlbums } from "../api/albums";

export const List = () => {
  const [list, setList] = useState([]);

  useEffect(async () => {
    const result = await getAlbums();
    setList(result.data);
  }, []);

  const ListComponent = () => {
    if (list) {
      return list.map((albumItem) => <ListItem album={albumItem} />);
    }
  };

  return (
    <div>
      <ul>
        <ListComponent />
      </ul>
    </div>
  );
};
