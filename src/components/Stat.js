import React, { useState, useEffect } from "react";
import { Box } from "@mui/material";
import BottomBar from "./BottomBar";
import Topbar from "./Topbar";
import Progressbar from "./ProgressBar";
import PriceBox from "./PriceBox";
import PieBox from "./PieBox";
import WeekBox from "./WeekBox";
import { useAuth } from "../contexts/AuthContext";
import { db } from "../firebase";
import NewData from "./NewData";

export default function Stat() {
  const [dagligt, setDagligt] = useState("0");
  const [veckovis, setVeckovis] = useState("0");
  const { currentUser } = useAuth();

  const dayArray = NewData();
  console.log(dayArray);

  useEffect(() => {
    const docRef = db.collection("user_collection").doc(currentUser.uid);
    docRef
      .get()
      .then((doc) => {
        if (doc.exists) {
          const data = doc.data();
          setDagligt(data.mål.dagligt);
          setVeckovis(data.mål.veckovis);
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
          zIndex: 10001,
        }}
      >
        <Topbar />
      </Box>

      <Box
        component="div"
        sx={{
          overflowX: "hidden",
          overflowY: "hidden",
          mb: 6,
          mt: 7,
          backgroundColor: "#F0F4F4",
          position: "relative",
          minHeight: "calc(100vh - 112px)",
          paddingTop: "12px",
        }}
      >
        <Box sx={{ mb: 2 }}>
          <PriceBox />
        </Box>

        <Box
          sx={{
            display: "flex",
            mt: 2,
            mb: 2,
            width: "100%",
            flexDirection: "row",
            justifyContent: "space-around",
            alignItems: "center",
            zIndex: 0,
            height: "100%",
          }}
        >
          <Box
            sx={{
              display: "flex",
              width: "60%",
              flexDirection: "column",
              justifyContent: "space-around",
              alignItems: "center",
              zIndex: 0,
              flex: 1,
            }}
          >
            <PieBox sx={{ height: "flex", mb: 2 }} />
            <WeekBox sx={{ height: "flex" }} />
          </Box>

          <Box
            sx={{
              display: "flex",
              width: "40%",
              flexDirection: "row",
              justifyContent: "space-around",
              alignItems: "center",
              zIndex: 0,
            }}
          >
            <Progressbar
              spendingAmount={4}
              total={dagligt * 1.6}
              goalAmount={dagligt}
              timeUnit="dag"
            />
            <Progressbar
              spendingAmount={30}
              total={veckovis * 1.6}
              goalAmount={veckovis}
              timeUnit="vecka"
            />
          </Box>
        </Box>

        <Box sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}>
          <BottomBar sx={{ width: "100%", zIndex: 10 }} />
        </Box>
      </Box>
    </>
  );
}
