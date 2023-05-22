// without an image at the top
import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Facts from "./Facts";
import refreshIcon from "../images/refresh.svg";

export default function FactBox() {
  // useState hook from React to create a state variable called which can update the state
  const [refreshKey, setRefreshKey] = React.useState(0);

  // will refresh the refreshKey statement
  function handleRefreshClick() {
    setRefreshKey((prevKey) => prevKey + 1);
  }

  // MUI component, the card will return the energy fact. CardContent will display "Energy fact" and a refresh button
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
        alignItems: "center",
        mb: 10,
      }}
    >
      <Card
        variant="outlined"
        sx={{
          boxShadow: "0px 0px 2px grey",
          textAlign: "left",
          width: "95%",
          borderRadius: 2,
          mb: 5,
        }}
      >
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{ fontFamily: "Barlow" }}
          >
            Energifakta
            <button
              onClick={handleRefreshClick}
              style={{
                marginLeft: "10px",
                marginBottom: "2px",
                border: "none",
                background: "none",
                cursor: "pointer",
              }}
            >
              <img src={refreshIcon} alt="Refresh" />
            </button>
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            style={{ height: "100px", overflow: "hidden" }}
            sx={{ fontFamily: "Barlow" }}
          >
            <Facts key={refreshKey} />
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}
