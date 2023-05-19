
import Garantias from "../../components/Garantias/Garantias";
import Newsletter from "../../components/Newsletter/Newsletter";
import Privacidad from "../../components/Privacidad/Privacidad";
import { Grid} from "@mui/material";
import Navmui from "../../components/Navmui/Navmui";
import BasicFormLogin from "../../src/components/BasicFormLogin/BasicFormLogin";
import BasicFormRegistro from '../../src/components/BasicFormRegistro/BasicFormRegistro'

export default function Login() {
  return (
    <>
      <header>
        <Navmui />
      </header>
      <Grid container spacing={2} p={5} ml={8}>
        <Grid item xs={5} p={5}>
          <BasicFormLogin />
        </Grid>
        <Grid item xs={5}>
          <BasicFormRegistro />
        </Grid>
      </Grid>
      <Garantias size={48} color={"pink"} />
      <footer>
        <Grid container sx={{ backgroundColor: "#1C4E81;" }}>
          <Grid item xs={6} sx={{ pl: 20, pt: 10, pb: 10 }}>
            <Privacidad size={28} />
          </Grid>
          <Grid item xs={6} sx={{ pl: 28, pt: 10, pb: 10 }}>
            <Newsletter size={52} color={"black"} />
          </Grid>
        </Grid>
      </footer>
    </>
  );
}
