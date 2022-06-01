import React from "react";
import { useState, useEffect } from "react";

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
        video_link
      }
      rocket {
        rocket_name
        first_stage {
          cores {
            flight
            core {
              reuse_count
              status
            }
          }
        }
        second_stage {
          payloads {
            payload_type
            payload_mass_kg
            payload_mass_lbs
          }
        }
      }
      ships {
        name
        home_port
        image
      }
    }
  }
`;

const DataContext = React.createContext({
  graphData: [],
});

export const DataProvider = (props) => {
  const [graphData, setGraphData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch("https://api.spacex.land/graphql/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query: GRAPH_QUERY }),
      });

      const datajson = await data.json();
      setGraphData(datajson.data.launchesPast);
    };

    fetchData().catch(console.error);
  }, []);

  return (
    <DataContext.Provider
      value={{
        graphData: graphData,
      }}
    >
      {props.children}
    </DataContext.Provider>
  );
};

export default DataContext;
