import React from "react";
import "./Footer.css";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import ShuffleIcon from "@mui/icons-material/Shuffle";
import RepeatIcon from "@mui/icons-material/Repeat";
import { Grid, Slider } from "@material-ui/core";
import { PlaylistPlay } from "@material-ui/icons";
import VolumeDownIcon from "@mui/icons-material/VolumeDown";
import { useDataLayerValue } from "./DataLayer";

function Footer() {
  const [{ discover_weekly }, dispatch] = useDataLayerValue();
  return (
    <div className="footer">
      <div className="footer_left">
        <img
          className="footer_albumLogo"
          src={discover_weekly?.tracks.items[0].track.album.images[0].url}
          alt="album thumbnail"
        />
        <div className="footer_songInfo">
          <h4>{discover_weekly?.tracks.items[0].track.name}</h4>
          <p>
            {discover_weekly?.tracks.items[0].track.artists
              .map((artist) => artist.name)
              .join(", ")}
          </p>
        </div>
      </div>
      <div className="footer_center">
        <ShuffleIcon className="footer_green" />
        <SkipPreviousIcon className="footer_icon" />
        <PlayCircleOutlineIcon fontSize="large" className="footer_icon" />
        <SkipNextIcon className="footer_icon" />
        <RepeatIcon className="footer_green" />
      </div>
      <div className="footer_right">
        <Grid container spacing={2}>
          <Grid item>
            <PlaylistPlay />
          </Grid>
          <Grid item>
            <VolumeDownIcon />
          </Grid>
          <Grid item xs>
            <Slider />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default Footer;
