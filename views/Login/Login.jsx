import Buscador from "../../components/Buscador/Buscador";
import Carrito from "../../components/Carrito/Carrito";
import Garantias from "../../components/Garantias/Garantias";
import Logo from "../../components/Logo/Logo";
import Nav from "../../components/Nav/Nav";
import Newsletter from "../../components/Newsletter/Newsletter";
import Privacidad from "../../components/Privacidad/Privacidad";
import Registro from "../../components/Registro/Registro";
import Sesion from "../../components/Sesion/sesion";
import {Grid} from "@mui/material";

export default function Login() {
  return (
    <>
      
      <Grid container spacing={2} justifyContent="center" alignItems="center">
        <Grid item xl={2}>
          <Logo size={48} color={"pink"} sx={2} />
        </Grid>
        <Grid item xl={8}>
          <Buscador size={16} sx={8} />
        </Grid>
        <Grid item xl={2}>
          <Grid container justifyContent="center">
            <Carrito size={16} numero={"99+"} sx={2} />
          </Grid>
        </Grid>
        <Grid item xl={12}>
          <Nav />
        </Grid>
      </Grid>
      
      <Grid container spacing={2} p={5} ml={8}>
      <Grid  item xs={5} p={5}>
      <Sesion/>
      </Grid>

      
      <Grid  item xs={5}>
      <Registro/>
      </Grid>
      </Grid>

      <Garantias size={48} color={"pink"} />
      <footer>
        <Grid container sx={{backgroundColor: "#aedab1;"}}>
          <Grid item xs={6} sx={{  pl:20, pt: 10, pb:10}}>
            <Privacidad size={28} />
          </Grid>
          <Grid item xs={6} sx={{ pl:28, pt: 10, pb:10 }}>
            <Newsletter size={52} color={"black"} />
          </Grid>
        </Grid>
      </footer>

    </>
  );
}
