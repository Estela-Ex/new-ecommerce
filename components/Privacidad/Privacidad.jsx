import { Grid, List, ListItem, ListItemText, Typography } from "@mui/material";
import AdbIcon from "@mui/icons-material/Adb";
export default function Privacidad({ size, color }) {
  return (
    <>
      <Grid container sx={{ m: 2 }}>
      <AdbIcon  fontSize="large" sx={{color:"#568203"}}/>
        <Typography variant="h5" sx={{ textAlign: "center" }}>
          Las Cositas de Mibel
        </Typography>
      </Grid>
      <Grid container>
        <Grid item>
          <List
            sx={{
              width: "100%",
              maxWidth: 360,
              position: "relative",
              overflow: "auto",
              maxHeight: 300,
              "& ul": { padding: 0 },
            }}
            subheader={<li />}
          >
            <ListItem>
              <ListItemText primary={"Centro de ayuda"} />
            </ListItem>
            <ListItem>
              <ListItemText primary={"Servicio al consumidor"} />
            </ListItem>
            <ListItem>
              <ListItemText primary={"Escríbenos"} />
            </ListItem>
            <ListItem>
              <ListItemText primary={"Servicio telefónico"} />
            </ListItem>
          </List>
        </Grid>
        <Grid item>
          <List
            sx={{
              width: "100%",
              maxWidth: 360,
              position: "relative",
              overflow: "auto",
              maxHeight: 300,
              "& ul": { padding: 0 },
            }}
            subheader={<li />}
          >
            <ListItem>
              <ListItemText primary={"Política de privacidad"} />
            </ListItem>
            <ListItem>
              <ListItemText primary={"Condiciones de compra"} />
            </ListItem>
            <ListItem>
              <ListItemText primary={"Opiniones de clientes"} />
            </ListItem>
            <ListItem>
              <ListItemText primary={"Aviso de privacidad y cookies"} />
            </ListItem>
          </List>
        </Grid>
      </Grid>
    </>
  );
}
