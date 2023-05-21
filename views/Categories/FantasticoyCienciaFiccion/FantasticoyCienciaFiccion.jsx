import { Grid, Typography } from "@mui/material";
import Navmui from "../../../components/Navmui/Navmui";
import  Garantias  from "../../../components/Garantias/Garantias";
import  Privacidad  from "../../../components/Privacidad/Privacidad";
import  Newsletter  from "../../../components/Newsletter/Newsletter";
import DetailsFantastic from './DetailsFantastic/DetailsFantastic'

export default function FantasticoyCienciaFiccion() {
  return (
    <>
      <Grid container spacing={2} justifyContent="center" alignItems="center">
        <Grid item xl={12}>
          <Navmui />
        </Grid>
      </Grid>
      <Typography sx={{ p: 4, m: "3rem 0" }} align="center" variant="h4">
        Peliculas de cine Fantastico y Ciencia Ficcion
      </Typography>
      <DetailsFantastic />
      <Garantias />
      <footer>
        <Grid container sx={{ backgroundColor: "#394F65;" }}>
          <Grid item xs={6} sx={{ pl: 20, pt: 10, pb: 10 }}>
            <Privacidad />
          </Grid>
          <Grid item xs={6} sx={{ pl: 28, pt: 10, pb: 10 }}>
            <Newsletter />
          </Grid>
        </Grid>
      </footer>
    </>
  );
}
