import { Grid, Typography } from "@mui/material";
import Garantias from "../../components/Garantias/Garantias";
import Navmui from "../../components/Navmui/Navmui";
import Newsletter from "../../components/Newsletter/Newsletter";
import Privacidad from "../../components/Privacidad/Privacidad";
import DetailsCategories from "./DetailsCategories/DetailsCategories";
import FantasticoyCienciaFiccion from "./FantasticoyCienciaficcion/FantasticoyCienciaFiccion";

export default function Categories() {
  return (
    <>
      <Grid container spacing={2} justifyContent="center" alignItems="center">
        <Grid item xl={12}>
          <Navmui />
        </Grid>
      </Grid>
      <Typography sx={{ p: 4,m:"3rem 0" }} align="center" variant="h4">
        Todas tus peliculas en blue-Ray
      </Typography>
      <DetailsCategories />
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
