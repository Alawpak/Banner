import womanPhone from './assets/gettyimages-960352762-170667a.jpg'
import apple from './assets/apple.png'
import google from './assets/google.png'
import qr from './assets/qr.png'
import './App.css'
import Button from '@mui/material/Button';
import { Box, Container, Grid, ListItem, Typography, useMediaQuery, useTheme} from '@mui/material';
import { CSSProperties } from '@mui/styled-engine'


function App() {
  const theme = useTheme();
  const matches = useMediaQuery('(max-width:727.5px)');

  const imagesStoreButton: string[] = [apple, google];
  
  const styleQrHorizontal = {
    position: "relative",
    border: "1px solid #d1d1d1",
    borderRadius: "4px",
    borderLeft: "5px solid #424242",
    '&:after': {
      content: '""',
      position: "absolute",
      left: "-0.7em",
      top: "2.15em",
      borderRight: "7px solid #424242",
      borderTop: "7px solid transparent",
      borderBottom: "7px solid transparent",
    }
  }

const styleQrVertical = {
  position: "relative",
  border: "1px solid #d1d1d1",
  borderTop: "5px solid #424242",
  borderRadius: "4px",
  '&:after': {
    content: '""',
    position: "absolute",
    left: "2em",
    top: "-0.65em",
    borderLeft: "7px solid transparent",
    borderRight: "7px solid transparent",
    borderBottom: "7px solid #424242",
  }
}

  return (
    <footer>
      <Box sx={{
        maxWidth: "61.8em",
        boxShadow : "0 0 6px 0 rgba(0, 0, 0, 0.16)",
        backgroundColor: "fff",
        borderBottom: "5px solid",
        borderImage: "linear-gradient(to bottom, #3acfd5 0%, #3a4ed5 100%) 1",
      }}>
        <Container disableGutters = {true}> 
          <Grid container
            columnSpacing={2}
            direction="row">

            <Grid item xs = {12} sm = {3} md = {3}> 
              <img src={womanPhone} height={"100%"} width={"100%"}/>
            </Grid>
            
            <Grid item xs = {10} sm = {3} md = {3} sx = {{
                  paddingTop: {
                    xs: 4,
                    sm: 6
                  },
                  paddingBottom: {
                    xs: 2,
                    sm: 5
                  }
                }}> 
              
              <Typography gutterBottom
                sx = {{color: "#333", fontSize: "18px", fontWeight: "bold", 
                fontFamily: "NotoSans", lineHeight: "1", paddingRight:{
                  xs: "3em",
                  sm: "1em"
                }  }}>
                           
                  Descarga nuestra app, Mi MetLife
              </Typography>
              
              <Typography variant="body2"
                sx = {{color: "#333", fontSize: "15px", fontWeight: "normal", 
                fontFamily: "NotoSans", lineHeight: "1"}}>

                  Tu protecci&oacute;n a un click de distancia
              </Typography>
            </Grid>

            <Grid container xs = {12} sm = {6} md = {5} item>
              <Grid
                container
                direction="row"
                justifyContent="flex-start"
                alignItems="center"
                sx = {{paddingBottom: {
                  xs: "1em",
                  sm: "0em",
                }}}
              >
                {imagesStoreButton.map(image => (

                  <Grid key = {image}
                    item 
                    container 
                    direction="row"
                    justifyContent="space-evenly" 
                    alignItems="center" sm = {6} xs = {6}
                    sx={{ flexDirection: { xs: "column", sm: "row", md: "row", lg: "row"}}} 
                    >

                    <Grid item> 

                      <Button sx = {{padding: "0"}}> <img src={image} width = "80em"/> </Button> 
                    </Grid>
                    
                    {matches == true?(
                      <Grid item
                      margin={1}
                      sx = {styleQrVertical}>

                      <img src={qr} width = "60em" style={{ padding: "0.5em"}}/> 
                    </Grid>
                    ) :(
                      <Grid item
                      margin={1}
                      sx = {styleQrHorizontal}>

                      <img src={qr} width = "60em" style={{ padding: "0.5em"}}/> 
                    </Grid>
                    )}
                  </Grid>
                ))}

              </Grid>

            </Grid>

          </Grid>
        </Container>
      </Box>

    </footer>
  )
}

export default App
