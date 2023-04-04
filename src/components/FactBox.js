
// with an image at the top
// import * as React from 'react';
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Typography from '@mui/material/Typography';
// import Facts from './Facts';
// import refreshIcon from '../images/refresh.svg';
// import cleanImg from "../images/clean.jpg";
// import Box from '@mui/material/Box';

// export default function ActionAreaCard() {
//   const [refreshKey, setRefreshKey] = React.useState(0);

//   function handleRefreshClick() {
//     setRefreshKey(prevKey => prevKey + 1);
//   }

//   return (
//     <Box sx={{width:'100%'}} flexDirection='column' display='flex' justifyContent='space-evenly' alignItems='center'>
//       <Card variant='outlined' sx={{border:'3px solid #ACD0C0', textAlign:'left', width:'95%', borderRadius:2, margin: 'auto' }}>
//         <CardMedia
//           component="img"
//           height="140"
//           image={cleanImg}
//           alt="energy"
//         />
//         <CardContent>
//           <Typography gutterBottom variant="h5" component="div">
//             Energy fact
//             <button onClick={handleRefreshClick} style={{ marginLeft: '10px', border: 'none', background: 'none', cursor: 'pointer' }}>
//               <img src={refreshIcon} alt="Refresh" />
//             </button>
//           </Typography>
//           <Typography variant="body2" color="text.secondary" style={{ height: '100px', overflow: 'hidden' }}>
//             <Facts key={refreshKey} />
//           </Typography>
//         </CardContent>
//       </Card>
//     </Box>
//   );
// }



// without an image at the top
import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Facts from './Facts';
import refreshIcon from '../images/refresh.svg';


export default function ActionAreaCard() {
  // useState hook from React to create a state variable called which can update the state
  const [refreshKey, setRefreshKey] = React.useState(0);

  // will refresh the refreshKey statement
  function handleRefreshClick() {
    setRefreshKey(prevKey => prevKey + 1);
  }

  // MUI component, the card will return the energy fact. CardContent will display "Energy fact" and a refresh button
  return (
    <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly', alignItems: 'center' }}>
      <Card variant='outlined' sx={{ border: '3px solid #ACD0C0', textAlign: 'left', width: '95%', borderRadius: 2 }}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Energy fact
            <button onClick={handleRefreshClick} style={{ marginLeft: '10px', border: 'none', background: 'none', cursor: 'pointer' }}>
              <img src={refreshIcon} alt="Refresh" />
            </button>
          </Typography>
          <Typography variant="body2" color="text.secondary" style={{ height: '100px', overflow: 'hidden' }}>
            <Facts key={refreshKey} />
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}

