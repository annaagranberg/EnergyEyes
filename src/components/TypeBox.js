import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Plant from "./Plant";
import Money from "./Money";
import Curious from "./Curious";
import HealthBar from "./HealthBar";

// Takes in two arguments, one number value and a type value

export default function TypeBox({ value, type }) {
  let Component;
  switch (type) {
    case "Miljö":
      Component = Plant;
      break;
    case "Sparsam":
      Component = Money;
      break;
    case "Nyfiken":
      Component = Curious;
      break;
    default:
      return <div />;
  }

  const { src, text, interval } = Component(value);

  return (
    <Box
      sx={{
        height: "400px",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
        alignItems: "center",
      }}
    >
      <Card
        variant="outlined"
        sx={{
          boxShadow: "0px 0px 2px grey",
          textAlign: "left",
          width: "95%",
          borderRadius: 2,
          p: 0.5,
          height: 350,
          backgroundColor: "#FEF5F0",
        }}
      >
        <CardMedia
          component="img"
          height="250"
          src={src}
          alt="flower"
          sx={{ objectFit: "contain" }}
        />
        <CardContent sx={{ p: 0.5, mt: 1 }}>
          <HealthBar value={interval} type={type} />

          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{ textAlign: "center", mt: "15px", fontFamily: "Barlow" }}
          >
            {text}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}

// import Box from "@mui/material/Box";
// import Card from "@mui/material/Card";
// import CardContent from "@mui/material/CardContent";
// import CardMedia from "@mui/material/CardMedia";
// import Typography from "@mui/material/Typography";
// import HealthBar from "./HealthBar";
// import Type from "./Type";

// //Takes in two arguments, one number value and a type value

// export default function TypeBox({ value, type }) {
//   console.log(type);
//   const { src, text, interval } = Type(value, type);

//   return (
//     <Box
//       sx={{
//         height: "400px",
//         width: "100%",
//         display: "flex",
//         flexDirection: "column",
//         justifyContent: "space-evenly",
//         alignItems: "center",
//       }}
//     >
//       <Card
//         variant="outlined"
//         sx={{
//           boxShadow: "0px 0px 2px grey",
//           textAlign: "left",
//           width: "95%",
//           borderRadius: 2,
//           p: 0.5,
//           height: 350,
//           backgroundColor: "#FEF5F0",
//         }}
//       >
//         <CardMedia
//           component="img"
//           height="250"
//           src={src}
//           alt="flower"
//           sx={{ objectFit: "contain" }}
//         />
//         <CardContent sx={{ p: 0.5, mt: 1 }}>
//           <HealthBar value={interval} type={type} />

//           <Typography
//             gutterBottom
//             variant="h5"
//             component="div"
//             sx={{ textAlign: "center", mt: "15px", fontFamily: "Barlow" }}
//           >
//             {text}
//           </Typography>
//         </CardContent>
//       </Card>
//     </Box>
//   );
// }
