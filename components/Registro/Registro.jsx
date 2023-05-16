import { TextField, Box, Button, Typography, Grid } from "@mui/material";

export default function Registro() {
  return (
    <>
      <Typography variant="h5" sx={{ textAlign: "center" }}>
        Registro
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          p: 2,
          border: "1px solid grey",
          borderRadius: 2
        }}
      >

        <Grid item xs={12}>
        <TextField label="Nombre" size="small" sx={{ m: 1 , width: "46%"}} />
        <TextField label="Apellidos" size="small" sx={{ m: 1, width: "46%" }} />
        </Grid>
        <Grid item xs={12}>
        <TextField label="Dirección" size="small" sx={{ m: 1, width: "46%"}} />
        <TextField label="Población" size="small" sx={{ m: 1, width: "46%"}} />
        </Grid>
        <TextField label="Email" size="small" sx={{ m: 1, width: "46%"}} />
        
        <Grid item xs={12}>
        <TextField label="Contraseña" type="password" size="small" sx={{ m: 1, width: "46%" }} />
        <TextField label="Repetir contraseña" type="password" size="small" sx={{ m: 1, width: "46%" }} />
        </Grid>
        <Button variant="contained" sx={{width: "100%", mt:1, mb:1}}>Registro</Button>
      </Box>
    </>
  );
}