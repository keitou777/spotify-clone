import React from "react";
import "./SongRow.css";

function SongRow({ track = "test" }) {
  //   console.log(track);
  return (
    <div className="songRow">
      <div className="songRow_left">
        <img className="songRow_album" src={track.album.images[0].url} alt="" />
        <div className="songRow_info">
          <h1>{track.name}</h1>
          <p>{track.artists.map((artist) => artist.name).join(", ")}</p>
        </div>
      </div>
      <div className="songRow_center">
        <p>{track.album.name}</p>
      </div>
      <div className="songRow_right">
        <p>{Math.floor(track.duration_ms / 1000 / 60)} mins</p>
      </div>
    </div>
  );
}

export default SongRow;
