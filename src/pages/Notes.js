import React from "react";
import { Grid } from "@mui/material";
import { Container } from "@mui/system";
import { useContext } from "react";
import NoteCard from "../components/NoteCard";
import DataContext from "../store/DataContext";

const Notes = () => {
  const { graphData } = useContext(DataContext);

  return (
    <React.Fragment>
      <Container>
        <Grid container spacing={3} mt={2} mb={2}>
          {graphData.map((data) => (
            <Grid item key={data.id} xs={12} md={6} lg={4}>
              <NoteCard data={data} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </React.Fragment>
  );
};

export default Notes;
