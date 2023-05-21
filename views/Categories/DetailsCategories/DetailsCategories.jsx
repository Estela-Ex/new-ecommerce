import { Grid } from "@mui/material";

export default function DetailsCategories() {
  return (
    <Grid container sx={{ rowGap: 8, p: 2, m: "4rem 0" }}>
      <Grid
        item
        xs={12}
        sx={{
          height: "5rem",
          display: "flex",
          justifyContent: "center",
          columnGap: "4rem",
          ">button": { height: "5rem", p: "0.3rem 0.8rem", width: "12rem" },
        }}
      >
        <button
          onClick={() => (window.location.href = "/FantasticoyCienciaFiccion")}
        >
          Fantastico y Ciencia Ficcion
        </button>
        <button onClick={() => (window.location.href = "/AccionyAventuras")}>
          Accion y Aventuras
        </button>
        <button onClick={() => (window.location.href = "/SeriesTv")}>
          Series Tv
        </button>
        <button onClick={() => (window.location.href = "/Drama")}>Drama</button>
      </Grid>
      <Grid
        item
        xs={12}
        sx={{
          height: "5rem",
          display: "flex",
          justifyContent: "center",
          columnGap: "4rem",
          ">button": { height: "5rem", p: "0.3rem 0.8rem", width: "12rem" },
        }}
      >
        <button onClick={() => (window.location.href = "/Anime")}>Anime</button>
        <button onClick={() => (window.location.href = "/Terror")}>
          Terror
        </button>
        <button onClick={() => (window.location.href = "/Infantil")}>
          Infantil
        </button>
        <button
        onClick={() => (window.location.href = "/Comedia")}>
         Comedia
        </button>
      </Grid>
    </Grid>
  );
}
