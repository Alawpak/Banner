import womanPhone from './assets/gettyimages-960352762-170667a.jpg'
import apple from './assets/apple.png'
import google from './assets/google.png'
import qr from './assets/qr.png'
import './App.css'
import Button from '@mui/material/Button';
import { Box, Container, Grid, ListItem, Typography, useMediaQuery, useTheme} from '@mui/material';


function App() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));

  const imagesStoreButton = [apple, google]; 

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
            <Grid item xs = {9.5} sm = {3} md = {3}> 
              <Typography gutterBottom marginTop={5} variant="subtitle1">
                Descarga nuestra app, Mi MetLife
              </Typography>
              <Typography variant="body2" marginBottom={3}>
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
                  md: "0em",
                  lg: "0em",
                }}}
              >
                <Grid item 
                container 
                direction="row"
                justifyContent="space-evenly" 
                alignItems="center" sm = {6} xs = {6}
                sx={{ flexDirection: { xs: "column", sm: "row", md: "row", lg: "row"}}} 
                >

                    {/**/}
                  <Grid item> <Button> <img src={apple} width = "80em"/> </Button> </Grid>
                  <Grid item sx = {{
                    padding: "0.5em",
                    border: "1px solid #d1d1d1",
                    borderRadius: "4px",
                    borderLeft: {
                      xs: "2px solid #d1d1d1",
                      sm: "5px solid #424242"
                    },
                    borderTop: {
                      xs: "5px solid #424242",
                      sm: "2px solid #d1d1d1"
                    }

                  }}> <img src={qr} width = "60em" /> </Grid>

                </Grid>
                
                <Grid item
                container 
                direction="row" 
                justifyContent="space-evenly" 
                alignItems="center" sm = {6} xs = {6}
                sx={{ flexDirection: { xs: "column", sm: "row", md: "row", lg: "row"}}} >

                  <Grid item> <Button> <img src={google} width = "80em"/> </Button> </Grid>
                  <Grid item sx = {{
                    padding: "0.5em",
                    border: "1px solid #d1d1d1",
                    borderRadius: "4px",
                    borderLeft: {
                      xs: "2px solid #d1d1d1",
                      sm: "5px solid #424242"
                    },
                    borderTop: {
                      xs: "5px solid #424242",
                      sm: "2px solid #d1d1d1"
                    }

                  }}> <img src={qr} width = "60em"/> </Grid>
                </Grid>

              </Grid>

            </Grid>

          </Grid>
        </Container>
      </Box>

    </footer>
  )
}

export default App
