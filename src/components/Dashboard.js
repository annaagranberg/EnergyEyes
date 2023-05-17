import React, { useState, useEffect } from "react";
import { useAuth } from "../contexts/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import {
  CardContent,
  Alert,
  Button,
  CardHeader,
  Avatar,
  ThemeProvider,
  Typography,
  ToggleButtonGroup,
  ToggleButton,
} from "@mui/material";
import Card from "@mui/material/Card";
//import { auth } from '../firebase'
import theme from "../contexts/Theme";
import Box from "@mui/material/Box";
import { db } from "../firebase";
import BottomBar from "./BottomBar";
import NaturePeopleIcon from "@mui/icons-material/NaturePeople";
import MoneyIcon from "@mui/icons-material/Money";
import SearchIcon from "@mui/icons-material/Search";
import Topbar from "./Topbar";
import ShowerIcon from "@mui/icons-material/Shower";
import WashIcon from "@mui/icons-material/Wash";
import LocalLaundryServiceIcon from "@mui/icons-material/LocalLaundryService";
import RestaurantIcon from "@mui/icons-material/Restaurant";

export default function Dashboard() {
  const [error, setError] = useState("");
  const { currentUser, logout, updateProfil } = useAuth();
  const navigate = useNavigate();

  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [people, setPeople] = useState("");
  const [area, setArea] = useState("");
  const [profil, setProfil] = useState("");
  const [dusch, setDusch] = useState([]);
  const [disk, setDisk] = useState("");
  const [kok, setKok] = useState("");
  const [tvatt, setTvatt] = useState("");

  function stringAvatar(name) {
    return {
      sx: {
        bgcolor: "#D9B44A",
        height: 90,
        width: 90,
        fontSize: 35,
      },
      children: `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`,
    };
  }

  const handleProfil = (event, newProfil) => {
    setProfil(newProfil);
    updateProfil(newProfil);
  };

  async function handleLogout() {
    setError("");

    try {
      await logout();
      navigate("/login");
    } catch {
      setError("Failed to logout");
    }
  }

  useEffect(() => {
    const docRef = db.collection("user_collection").doc(currentUser.uid);
    docRef
      .get()
      .then((doc) => {
        if (doc.exists) {
          const data = doc.data();

          setFname(data.name.firstname);
          setLname(data.name.lastname);
          setArea(data.boendeyta);
          setPeople(data.antalPersoner);
          setProfil(data.profiltyp);
          setDusch({
            antal: data.duschparametrar.antal,
            tid: data.duschparametrar.tid,
          });
          setDisk(data.diskparametrar.antal);
          setKok(data.kokparametrar.antal);
          setTvatt(data.tvattparametrar.antal);
        } else {
          console.log("No such document!");
        }
      })
      .catch((error) => {
        console.log("Error getting document:", error);
      });
  }, [currentUser.uid]);

  return (
    <>
      <Box
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: "10001 !important",
        }}
      >
        <Topbar sx={{ width: "100%" }} />
      </Box>

      <ThemeProvider theme={theme}>
        <Box
          component="div"
          sx={{ overflowX: "hidden", overflowY: "scroll", mb: 6 }}
        >
          <Card sx={{ minWidth: 270 }} elevation={0}>
            <CardContent>
              {error && <Alert varient="danger">{error}</Alert>}

              {/* <strong>Email:</strong> {currentUser.email} <br></br>
                    <strong>ID:</strong> {currentUser.uid} , backgroundColor: "#F0F4F4" */}

              {/* <Link to="/update-profile" className="btn btn-primary w-100 mt-3">Update profile</Link> */}
            </CardContent>
          </Card>

          <Card
            sx={{
              /*display: 'flex',*/ borderRadius: 0,
              backgroundColor: "#F0F4F4",
            }}
            elevation={0}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                width: "100%",
                overflowY: "scroll",
              }}
            >
              <CardHeader
                sx={{ height: "18vh", bgcolor: "#092A23" }}
              ></CardHeader>

              <CardContent sx={{ flex: "1 0 auto", padding: 0, mb: 1 }}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "flex-end",
                    justifyContent: "space-around",
                    width: "90%",
                    ml: "auto",
                    mr: "auto",
                    mt: -5,
                  }}
                >
                  <Avatar {...stringAvatar(fname + " " + lname)} />

                  <Link to="/update-profile" style={{ textDecoration: "none" }}>
                    <Button variant="contained" sx={{ borderRadius: 2 }}>
                      Uppdatera
                    </Button>
                  </Link>
                </Box>
              </CardContent>
            </Box>

            <Box
              sx={{ width: "90%", ml: "auto", mr: "auto" }}
              display="flex"
              flexDirection="column"
              alignItems="center"
            >
              <Box
                display="flex"
                flexDirection="row"
                justifyContent="space-between"
                sx={{ width: "95%", mb: 3 }}
              >
                <Card
                  variant="outlined"
                  sx={{
                    textAlign: "center",
                    boxShadow: "0px 0px 2px grey",
                    borderRadius: 3,
                    width: "30%",
                  }}
                >
                  <Typography variant="h6">
                    {fname}
                    <br />
                    {lname}
                  </Typography>
                </Card>
                <Card
                  justify="center"
                  variant="outlined"
                  component="div"
                  sx={{
                    boxShadow: "0px 0px 2px grey",
                    textAlign: "center",
                    borderRadius: 3,
                    width: "30%",
                  }}
                >
                  <Typography mt="15%" variant="h6">
                    {area} kvm
                  </Typography>
                </Card>
                <Card
                  variant="outlined"
                  sx={{
                    boxShadow: "0px 0px 2px grey",
                    textAlign: "center",
                    borderRadius: 3,
                    width: "30%",
                  }}
                >
                  <Typography mt="15%" variant="h6">
                    {people} i bostad
                  </Typography>
                </Card>
              </Box>

              <Box
                sx={{
                  width: "95%",
                  borderRadius: 3,
                  boxShadow: "0px 0px 2px grey",
                  backgroundColor: "#FFFF",
                }}
                flexWrap="wrap"
                flexDirection="row"
                display="flex"
                alignItems="center"
              >
                <Card
                  sx={{ textAlign: "left", width: "45%", m: 1 }}
                  elevation={0}
                >
                  <CardContent bgcolor="#ffff">
                    <Box sx={{ mb: 2 }}>
                      <Typography variant="h6" fontWeight="520">
                        <ShowerIcon color="secondary" /> {dusch["tid"]}
                      </Typography>
                      <Typography variant="h8">min per dusch</Typography>
                    </Box>
                    <Box>
                      <Typography variant="h6" fontWeight="520">
                        <WashIcon color="secondary" /> {disk}
                      </Typography>
                      <Typography variant="h8">per vecka</Typography>
                    </Box>
                  </CardContent>
                </Card>
                <Card
                  sx={{ textAlign: "left", width: "45%", m: 1 }}
                  elevation={0}
                >
                  <CardContent>
                    <Box sx={{ mb: 2 }}>
                      <Typography variant="h6" fontWeight="520">
                        <RestaurantIcon color="secondary" /> {kok}
                      </Typography>
                      <Typography variant="h8">per vecka</Typography>
                    </Box>
                    <Box>
                      <Typography variant="h6" fontWeight="520">
                        <LocalLaundryServiceIcon color="secondary" /> {tvatt}
                      </Typography>
                      <Typography variant="h8">per månad</Typography>
                    </Box>
                  </CardContent>
                </Card>
              </Box>
              <Box sx={{ width: "95%", backgroundColor: "#ffff", mt: 3 }}>
                <ToggleButtonGroup
                  value={profil}
                  exclusive
                  variant="standard"
                  onChange={handleProfil}
                  fullWidth
                  sx={{
                    justifyItems: "stretch",
                    boxShadow: "0px 0px 2px grey",
                  }}
                >
                  <ToggleButton value="Miljö">
                    <NaturePeopleIcon />
                    Miljö
                  </ToggleButton>
                  <ToggleButton value="Sparsam">
                    <MoneyIcon />
                    Sparsam
                  </ToggleButton>
                  <ToggleButton value="Nyfiken">
                    <SearchIcon />
                    Nyfiken
                  </ToggleButton>
                </ToggleButtonGroup>
              </Box>
            </Box>

            <div className="w-100 text-center mt-2">
              <Button
                variant="contained"
                onClick={handleLogout}
                sx={{ borderRadius: 2, pl: 5, pr: 5, mt: 2, mb: 3 }}
              >
                Logga ut
              </Button>
            </div>
          </Card>
        </Box>
        <Box sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}>
          <BottomBar sx={{ width: "100%" }} />
        </Box>
      </ThemeProvider>
    </>
  );
}
