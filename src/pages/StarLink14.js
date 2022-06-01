import { useContext } from "react";
import DataContext from "../store/DataContext";

import * as React from "react";
import { DataGridPro } from "@mui/x-data-grid-pro";

const getTreeDataPath = (row) => row.data;

export default function StarLink14() {
  const { graphData } = useContext(DataContext);

  const data = graphData[4];

  const rows = [
    {
      data: [data.mission_name],

      id: 0,
    },
    {
      data: [data.mission_name, ""],
      name_long: [data.launch_site.site_name_long],
      id: 1,
    },
    {
      data: [data.mission_name, "", ""],
      date: [data.launch_date_local],
      id: 2,
    },

    {
      data: [data.mission_name, "", "", ""],
      rocket: [data.rocket.rocket_name],
      id: 3,
    },

    {
      data: [data.mission_name, "", "", "", ""],
      stage: ["First Stage"],
      id: 4,
    },

    {
      data: [data.mission_name, "", "", "", "", ""],
      flight: [data.rocket.first_stage.cores[0].flight],
      id: 5,
    },
  ];

  const columns = [
    { field: "name_long", headerName: "Name", width: 200 },
    {
      field: "date",
      headerName: "Date",
      width: 300,
    },
    {
      field: "rocket",
      headerName: "Rocket Name",
      width: 300,
    },
    {
      field: "stage",
      headerName: "Stage",
      width: 300,
    },
    {
      field: "flight",
      headerName: "Flight",
      width: 200,
    },
  ];

  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGridPro
        treeData
        rows={rows}
        columns={columns}
        getTreeDataPath={getTreeDataPath}
      />
    </div>
  );
}
