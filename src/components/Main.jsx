import React from "react";
import Itemlist from "./Itemlist";
import { artistArray } from "../assets/database/artists";
import { songsArray } from "../assets/database/songs";

const Main = () => {
  return (
    <div className="main">
      {/* ItemList de cantor  */}
      <Itemlist title="Artistas" items={5} itemsArry={artistArray} />

      {/* ItemList de musica */}
      <Itemlist title="Músicas" items={10} itemsArry={songsArray} />
    </div>
  );
};

export default Main;
