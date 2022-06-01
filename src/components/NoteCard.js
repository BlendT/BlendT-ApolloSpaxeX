import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { Link } from "react-router-dom";

const NoteCard = ({ data }) => {
  const [img, setImg] = useState("");
  const [link, setLink] = useState("");

  useEffect(() => {
    const object = data.ships[0];

    for (const key in object) {
      if (key === "image") {
        let value = object[key];
        setImg(value);
      }
    }
  }, [data.ships]);

  useEffect(() => {
    console.log("clicked", data.id);

    const links = [
      {
        to: "/starlink15",
        id: 109,
      },
      {
        to: "/sentinel",
        id: 108,
      },
      {
        to: "/crew",
        id: 107,
      },
      {
        to: "/gps",
        id: 106,
      },
      {
        to: "/starlink14",
        id: 105,
      },
      {
        to: "/starlink13",
        id: 104,
      },
      {
        to: "/starlink12",
        id: 103,
      },
      {
        to: "/starlink11",
        id: 102,
      },
      {
        to: "/saocom",
        id: 101,
      },
      {
        to: "/starlink10",
        id: 100,
      },
    ];

    links.filter((item) => {
      if (item.id == data.id) {
        console.log("item", item.id === data.id);
        setLink(item.to);
      }
      return item.to;
    });
    // console.log(link);
  }, [data.id, link]);

  return (
    <Link to={link} style={{ textDecoration: "none" }}>
      <Card sx={{ maxWidth: 345 }} style={{ height: "266px" }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            src={img}
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
    </Link>
  );
};

export default NoteCard;
