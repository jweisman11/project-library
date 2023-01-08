import { Typography } from "@mui/material";
import MaterialTable from "material-table";
import React, { useState, useEffect } from "react";

function Dashboard() {
  const [data, setData] = useState([]);

  const getData = () => {
    fetch("data.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (myJson) {
        setData(myJson);
      });
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <React.Fragment>
      <div style={{ maxWidth: "90%" }}>
        <MaterialTable
          columns={[
            { title: "Project Title", field: "name" },
            { title: "Acronym or Nickname", field: "acronym" },
            { title: "Project Family", field: "family" },
            { title: "Start Date", field: "startDate" },
          ]}
          data={data.map((item) => ({
            name: item.project_info.name,
            acronym: item.project_info.acronym,
            family: item.project_info.category,
            startDate: item.project_info.start_date,
          }))}
          title="Projects"
        />
      </div>
    </React.Fragment>
  );
}

export default Dashboard;
