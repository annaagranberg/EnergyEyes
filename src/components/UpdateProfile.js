import React, { useRef, useState, useEffect } from "react";
import { useAuth } from "../contexts/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import {
  CardContent,
  FormControl,
  FormGroup,
  ThemeProvider,
  Button,
  Alert,
  TextField,
  InputAdornment,
  Select,
  MenuItem,
  InputLabel,
  FormLabel,
  Stack,
  Box,
  Pagination,
} from "@mui/material";
import theme from "../contexts/Theme";
import Card from "@mui/material/Card";
import { Person, Password } from "@mui/icons-material";
import { db } from "../firebase";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

export default function UpdateProfile() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { currentUser, updateEmail, updatePassword, updateUser } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const [first, setFirst] = useState();
  const [last, setLast] = useState();
  const [area, setArea] = useState();
  const [people, setPeople] = useState("");
  const [profil, setProfil] = useState("");
  const [duschTid, setDuschTid] = useState("");
  const [duschAntal, setDuschAntal] = useState("");
  const [disk, setDisk] = useState(0);
  const [kok, setKok] = useState(0);
  const [tvatt, setTvatt] = useState(0);
  const [dagligt, setDagligt] = useState();
  const [veckovis, setVeckovis] = useState();

  useEffect(() => {
    const docRef = db.collection("user_collection").doc(currentUser.uid);
    docRef
      .get()
      .then((doc) => {
        if (doc.exists) {
          const data = doc.data();

          setFirst(data.name.firstname);
          setLast(data.name.lastname);
          setArea(data.boendeyta);
          setPeople(data.antalPersoner);
          setProfil(data.profiltyp);
          setDuschTid(data.duschparametrar.tid);
          setDuschAntal(data.duschparametrar.antal);
          setDisk(data.diskparametrar.antal);
          setKok(data.kokparametrar.antal);
          setTvatt(data.tvattparametrar.antal);
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

  const handlePeople = (event) => {
    setPeople(event.target.value);
  };
  const handleKokAntal = (event, value) => {
    setKok(value);
    console.log(value);
  };
  const handleDiskAntal = (event, value) => {
    setDisk(value);
  };
  const handleTvattAntal = (event, value) => {
    setTvatt(value);
  };

  function handleSubmit(e) {
    e.preventDefault();

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match");
    }

    const promises = [];
    setLoading(true);
    setError("");

    if (emailRef.current.value !== currentUser.email) {
      promises.push(updateEmail(emailRef.current.value));
    }

    if (passwordRef.current.value) {
      promises.push(updatePassword(passwordRef.current.value));
    }

    console.log(area);

    promises.push(
      updateUser(
        first,
        last,
        area,
        people,
        profil,
        duschAntal,
        duschTid,
        kok,
        disk,
        tvatt,
        dagligt,
        veckovis
      )
    );

    Promise.all(promises)
      .then(() => {
        navigate("/profile");
      })
      .catch(() => {
        setError("Failed to update account");
      })
      .finally(() => {
        setLoading(false);
      });
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <Button component={Link} to="/profile" sx={{ padding: 0, mt: 2 }}>
          <ArrowBackIosIcon />
        </Button>
        <Card sx={{ minWidth: 270, mt: "3vh", ml: 1, mr: 1 }} elevation={0}>
          <CardContent>
            <h2 className="text-center mb-4">Uppdatera profil</h2>
            {error && (
              <Alert sx={{ mb: 3 }} severity="error">
                {error}
              </Alert>
            )}

            <form onSubmit={handleSubmit}>
              <FormGroup id="email">
                <FormControl>
                  <TextField
                    variant="standard"
                    label="email"
                    type="email"
                    inputRef={emailRef}
                    autoComplete="username"
                    defaultValue={currentUser.email}
                    sx={{ mb: 3 }}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <Person />
                        </InputAdornment>
                      ),
                    }}
                  />
                </FormControl>
              </FormGroup>

              <FormGroup id="password">
                <FormControl />
                <TextField
                  variant="standard"
                  label="lösenord"
                  type="password"
                  inputRef={passwordRef}
                  autoComplete="new-password"
                  placeholder="******"
                  sx={{ mb: 3 }}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Password />
                      </InputAdornment>
                    ),
                  }}
                />
              </FormGroup>

              <FormGroup id="password-confirm">
                <TextField
                  variant="standard"
                  label="bekräfta lösenord"
                  type="password"
                  inputRef={passwordConfirmRef}
                  autoComplete="new-password"
                  placeholder="******"
                  sx={{ mb: 3 }}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Password />
                      </InputAdornment>
                    ),
                  }}
                />
              </FormGroup>

              <FormGroup id="name">
                <FormControl
                  sx={{
                    flexDirection: "row",
                    flexWrap: "wrap",
                    width: "100%",
                    justifyContent: "space-between",
                  }}
                >
                  <TextField
                    variant="standard"
                    label="Förnamn"
                    type="name"
                    placeholder={first}
                    onChange={(e) => setFirst(e.target.value)}
                    sx={{ mb: 3, maxWidth: "49%", minWidth: "140px" }}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <Person />
                        </InputAdornment>
                      ),
                    }}
                  />
                  <TextField
                    variant="standard"
                    label="Efternamn"
                    type="name"
                    placeholder={last}
                    onChange={(e) => setLast(e.target.value)}
                    sx={{ mb: 3, maxWidth: "49%", minWidth: "140px" }}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <Person />
                        </InputAdornment>
                      ),
                    }}
                  />
                </FormControl>
              </FormGroup>

              <FormGroup
                id="homesettings"
                sx={{
                  flexDirection: "row",
                  flexWrap: "wrap",
                  width: "100%",
                  justifyContent: "space-between",
                }}
              >
                <FormControl
                  fullWidth
                  sx={{ mb: 3, maxWidth: "49%", minWidth: "140px" }}
                  variant="standard"
                >
                  <InputLabel id="antalpersoner">Hushåll</InputLabel>
                  <Select
                    labelId="antalpersoner"
                    id="antalpersoner"
                    value={people}
                    label="Hushåll"
                    onChange={handlePeople}
                  >
                    <MenuItem value={1}>1 person</MenuItem>
                    <MenuItem value={2}>2 personer</MenuItem>
                    <MenuItem value={3}>3 personer</MenuItem>
                    <MenuItem value={4}>4 personer</MenuItem>
                    <MenuItem value={5}>övrigt antal</MenuItem>
                  </Select>
                </FormControl>
                <FormControl
                  variant="standard"
                  sx={{
                    mb: 3,
                    width: "49%",
                    maxWidth: "50%",
                    minWidth: "140px",
                  }}
                >
                  <TextField
                    variant="standard"
                    label="Area"
                    type="number"
                    placeholder={area + " kvm"}
                    onChange={(e) => setArea(e.target.value)}
                    InputProps={{
                      inputMode: "numeric",
                      startAdornment: (
                        <InputAdornment position="start"></InputAdornment>
                      ),
                      inputProps: { min: 10, max: 150 },
                    }}
                  />
                </FormControl>
              </FormGroup>
              <FormLabel sx={{ mb: 1 }}>Uppdatera dusch</FormLabel>
              <FormGroup id="name">
                <FormControl
                  sx={{
                    flexDirection: "row",
                    flexWrap: "wrap",
                    width: "100%",
                    justifyContent: "space-between",
                  }}
                >
                  <TextField
                    variant="standard"
                    label="Antal i veckan"
                    type="number"
                    placeholder={duschAntal}
                    onChange={(e) => setDuschAntal(e.target.value)}
                    sx={{ width: "49%", maxWidth: "100%", minWidth: "140px" }}
                    InputProps={{
                      inputMode: "numeric",
                      startAdornment: (
                        <InputAdornment position="start"></InputAdornment>
                      ),
                      inputProps: { min: 1, max: 15 },
                    }}
                  />

                  <TextField
                    variant="standard"
                    label="Tid per dusch"
                    type="number"
                    placeholder={duschTid}
                    onChange={(e) => setDuschTid(e.target.value)}
                    InputProps={{
                      inputMode: "numeric",
                      startAdornment: (
                        <InputAdornment position="start"></InputAdornment>
                      ),
                      inputProps: { min: 1, max: 60 },
                    }}
                    sx={{
                      mb: 3,
                      width: "49%",
                      maxWidth: "100%",
                      minWidth: "140px",
                    }}
                  />
                </FormControl>
              </FormGroup>

              <Box>
                <Stack>
                  <FormLabel sx={{ mb: 1 }}>Uppdatera matlagning:</FormLabel>
                  <Pagination
                    sx={{
                      ml: "auto",
                      mr: "auto",
                      mb: 3,
                      alignContent: "space-between",
                    }}
                    page={kok}
                    count={10}
                    siblingCount={0}
                    onChange={handleKokAntal}
                  />
                </Stack>
                <Stack>
                  <FormLabel sx={{ mb: 1 }}>Uppdatera diskning:</FormLabel>
                  <Pagination
                    sx={{
                      ml: "auto",
                      mr: "auto",
                      mb: 3,
                      alignContent: "space-between",
                    }}
                    page={disk}
                    count={10}
                    siblingCount={0}
                    onChange={handleDiskAntal}
                  />
                </Stack>
                <Stack>
                  <FormLabel sx={{ mb: 1 }}>Uppdatera tvättning:</FormLabel>
                  <Pagination
                    sx={{
                      ml: "auto",
                      mr: "auto",
                      mb: 3,
                      alignContent: "space-between",
                    }}
                    page={tvatt}
                    count={15}
                    siblingCount={0}
                    onChange={handleTvattAntal}
                  />
                </Stack>
              </Box>

              <FormLabel sx={{ mb: 1 }}>Energimål</FormLabel>
              <FormGroup id="goal">
                <FormControl
                  sx={{
                    flexDirection: "row",
                    flexWrap: "wrap",
                    width: "100%",
                    justifyContent: "space-between",
                  }}
                >
                  <TextField
                    variant="standard"
                    label="Dagligt mål"
                    type="number"
                    placeholder={dagligt + " kWh"}
                    onChange={(e) => setDagligt(e.target.value)}
                    sx={{ width: "49%", maxWidth: "100%", minWidth: "140px" }}
                    InputProps={{
                      inputProps: { min: 1, max: 40 },
                      startAdornment: (
                        <InputAdornment position="start"></InputAdornment>
                      ),
                    }}
                  />

                  <TextField
                    variant="standard"
                    label="Veckomål"
                    type="number"
                    placeholder={veckovis + " kWh"}
                    onChange={(e) => setVeckovis(e.target.value)}
                    InputProps={{
                      inputProps: { min: 5, max: 150 },
                      startAdornment: (
                        <InputAdornment position="start"></InputAdornment>
                      ),
                    }}
                    sx={{
                      mb: 3,
                      width: "49%",
                      maxWidth: "100%",
                      minWidth: "140px",
                    }}
                  />
                </FormControl>
              </FormGroup>

              <Button
                disabled={loading}
                variant="contained"
                type="submit"
                sx={{ width: "100%" }}
              >
                Updatera
              </Button>
            </form>
            <Button
              variant="contained"
              color="secondary"
              sx={{ width: "100%", mt: 2 }}
            >
              Radera konto
            </Button>
          </CardContent>
        </Card>
      </ThemeProvider>
    </>
  );
}
