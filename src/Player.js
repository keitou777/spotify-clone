import React from "react";
import "./Player.css";
import Sidebar from "./Sidebar";
import Body from "./Body";
import Footer from "./Footer";
import { useDataLayerValue } from "./DataLayer";

function Player({ spotify }) {
  const [{ playlists }, dispatch] = useDataLayerValue();
  return (
    <div className="player">
      <div className="player_body">
        <Sidebar />
        <Body playlists={playlists} />
      </div>

      <Footer />
    </div>
  );
}

export default Player;
