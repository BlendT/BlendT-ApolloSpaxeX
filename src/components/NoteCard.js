import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

const NoteCard = ({ data }) => {
//   console.log(data.ships[0].image);
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://i.imgur.com/MtEgYbY.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {data.mission_name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {data.launch_date_local}
          </Typography>
          <Typography variant="body3" color="text.secondary">
            {data.launch_site.site_name_long}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default NoteCard;
