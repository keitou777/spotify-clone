import React, { useEffect, useState } from "react";
import "./Body.css";
import Header from "./Header";
import { useDataLayerValue } from "./DataLayer";
import { Favorite, MoreHoriz, PlayCircleFilled } from "@material-ui/icons";
import SongRow from "./SongRow";

function Body({ spotify, playlists }) {
  const [{ discover_weekly }, dispatch] = useDataLayerValue();

  return (
    <div className="body">
      <Header spotify={spotify} />
      <div className="body_info">
        <img src={discover_weekly?.images[0].url} alt="" />
        <div className="body_infoText">
          <strong>PLAYLIST</strong>
          <h2>
            {discover_weekly?.name ? discover_weekly.name : "Playlist Title"}
          </h2>
          <p>
            {discover_weekly?.description
              ? discover_weekly.description
              : "Description..."}
          </p>
        </div>
      </div>
      <div className="body_songs body1">
        <div className="body_icons">
          <PlayCircleFilled className="body_shuffle" />
          <Favorite fontSize="large" />
          <MoreHoriz />
        </div>
        <div className="body_songlistHeading">
          <div className="body_songlistHeading_left">
            <p>TITLE</p>
          </div>
          <div className="body_songlistHeading_center">
            <p>ALBUM</p>
          </div>
          <div className="body_songlistHeading_right">
            <p>DURATION</p>
          </div>
        </div>
        <hr />
        {/* list of songs */}
        {discover_weekly?.tracks.items.map((item) => (
          <SongRow track={item.track} />
        ))}
      </div>
    </div>
  );
}

export default Body;
