import Newsletter from "../../components/Newsletter/Newsletter";
import Privacidad from "../../components/Privacidad/Privacidad";
import Logo from "../../components/Logo/Logo";
import Carrito from "../../components/Carrito/Carrito";
import Buscador from "../../components/Buscador/Buscador";
import Cards from "../../components/Cards/Cards";
import UncontrolledExample from "../../components/Carousel/Carousel";
import Nav from "../../components/Nav/Nav";
import Garantias from "../../components/Garantias/Garantias";
import { Grid } from "@mui/material";


const carouselImagenes = [
  {
    Nombre: "gato1",
    imagen: "../src/assets/gato1.jpg",
  },
  {
    Nombre: "gato2",
    imagen: "../src/assets/gato2.jpg",
  },
  {
    Nombre: "gato3",
    imagen: "../src/assets/gato3.jpg",
  },
];

const productList = [
  {
    image: "../src/assets/metro.jpg",
    title: "Metro",
    price: "5.99",
    details:
      "La mayor selección de Metros, de diferentes texturas, diferentes colores y diferentes tamaños.",
  },
  {
    image: "../src/assets/hilos.jpg",
    title: "Hilos de coser",
    price: "4.00",
    details:
      "Una gran variedad de hilos para aquellas costuras que tengas pendiente.",
  },
  {
    image: "../src/assets/pasadorestela.jpg",
    title: "Pasadores de tela",
    price: "7.50",
    details: "Algo indispensable y que nunca nos puede faltar.",
  },
  {
    image: "../src/assets/hiloscrochet.jpg",
    title: "Hilos de crochet",
    price: "8.99",
    details: "Con esta selección podrás hacer tus mejores costuras.",
  },
];

export default function Home() {
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
      <Grid container spacing={4}>
        <Cards />
      </Grid>
      <Garantias size={48} color={"pink"} />
      <footer>
        <Grid container sx={{ backgroundColor: "#aedab1;" }}>
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