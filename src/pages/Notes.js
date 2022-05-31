import { Grid } from "@mui/material";
import { Container } from "@mui/system";
import { useEffect, useState } from "react";
import NoteCard from "../components/NoteCard";

const GRAPH_QUERY = `
{
    launchesPast(limit: 10) {
      id
      mission_name
      launch_date_local
      launch_site {
        site_name_long
      }
      links {
        article_link
  
      }
   
      ships {
        image
      }
    }
  }
`;

const Notes = () => {
  const [graphData, setGraphData] = useState([]);

  useEffect(() => {
    fetch("https://api.spacex.land/graphql/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query: GRAPH_QUERY }),
    })
      .then((response) => response.json())
      .then((data) => setGraphData(data.data.launchesPast));
  }, []);

  return (
    <Container>
      <Grid container spacing={3}>
        {graphData.map((data) => (
          <Grid item key={data.id} xs={12} md={6} lg={4}>
            <NoteCard data={data} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Notes;
