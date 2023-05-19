import {
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Typography,
  Grid,
} from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import EuroIcon from "@mui/icons-material/Euro";
import Catalogo from "../Catalogo/Catalogo";
import LogoutIcon from "@mui/icons-material/Logout";
import { useState, useEffect } from "react";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
let stars = [
  "Estrella 1",
  "Estrella 2",
  "Estrella 3",
  "Estrella 4",
  "Estrella 5",
];

export default function Cards({ nombre, detalles, material, precio }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    console.log("Me renderizo!!!");
    fetch("http://localhost:8000/productos")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  products.map((product, index) => {
    <li key={index}>{product}</li>;
  }),
    console.log(products);
  return (
    <>
      {products.map((productos, i) => {
        return (
          <Grid item xs={3}>
            <Card
              sx={{
                maxWidth: 345,
                p: 4,
                m: 4,
                border: "1px solid",
                borderRadius: "20px",
                borderStyle: "groove;",
              }}
            >
              <CardHeader key={i} title={productos.nombredelproducto} />
              <CardMedia
                component="img"
                height="280"
                image={productos.imagen}
              />
              <Typography variant="subtitle" color="primary"></Typography>
              <CardContent>
                <br />
                <Typography variant="body2" color="text.secondary">
                  {productos.detallesdelproducto}
                </Typography>
                {productos.precio}
                <EuroIcon fontSize="8" />
                <ShoppingBasketIcon fontSize="18" sx={{align:"right"}} />
              </CardContent>
              {/* <StarIcon />
              <StarIcon />
              <StarIcon /> */}
            </Card>
          </Grid>
        );
      })}
    </>
  );
}
