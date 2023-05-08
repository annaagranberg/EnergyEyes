import { Box, ThemeProvider } from "@mui/material";
import React, { useEffect, useState } from "react";
import BottomBar from "./BottomBar";
import FactBox from "./FactBox";
import TypeBox from "./TypeBox";
import Topbar from "./Topbar";
import theme from "../contexts/Theme";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import { db } from "../firebase";
import { useAuth } from "../contexts/AuthContext";

const Getdb = () => {
  const { currentUser } = useAuth();
  const [dusch, setDusch] = useState([]);
  const [disk, setDisk] = useState();
  const [kok, setKok] = useState();
  const [tvatt, setTvatt] = useState();
  const [person, setPerson] = useState();
  const [profil, setProfil] = useState();
  const [area, setArea] = useState();

  useEffect(() => {
    const docRef = db.collection("user_collection").doc(currentUser.uid);
    docRef
      .get()
      .then((doc) => {
        if (doc.exists) {
          const data = doc.data();
          setPerson(data.antalPersoner);
          setDusch({
            antal: data.duschparametrar.antal,
            tid: data.duschparametrar.tid,
          });
          setDisk(data.diskparametrar.antal);
          setKok(data.kokparametrar.antal);
          setTvatt(data.tvattparametrar.antal);
          setProfil(data.profiltyp);
          setArea(data.boendeyta);
        } else {
          console.log("No such document!");
        }
      })
      .catch((error) => {
        console.log("Error getting document:", error);
      });
  }, [currentUser.uid]);

  const sum =
    (kok * 1.3 +
      disk * 2 +
      dusch["tid"] * dusch["antal"] * 0.3 * person +
      tvatt * (1 / 4) +
      area * 0.086 * 7) /
    (7 * person);

  return [sum, profil];
};

export default function Home() {
  const info = Getdb();
  const profil = info[1];
  const sum = info[0];

  console.log(sum);

  return (
    <>
      <ThemeProvider theme={theme}>
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

        <Box
          sx={{
            overflowX: "hidden",
            overflowY: "scroll",
            mt: "7vh",
            backgroundColor: "#F0F4F4",
          }}
        >
          <TypeBox value={sum} type={profil} />

          <Box
            sx={{
              flexDirection: "column",
              display: "flex",
              width: "95%",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            <Button
              component={Link}
              to="/update-profile"
              variant="contained"
              sx={{ mb: 3, borderRadius: 2 }}
            >
              Ändra Vanor
            </Button>
          </Box>

          <FactBox />
        </Box>

        <Box sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}>
          <BottomBar sx={{ width: "100%" }} />
        </Box>
      </ThemeProvider>
    </>
  );
}
