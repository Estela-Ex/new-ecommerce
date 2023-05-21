import {
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import EuroIcon from "@mui/icons-material/Euro";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { useState, useEffect } from "react";

export default function DetailsInfantil() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    console.log("me renderizooooooooooooooo");
    async function functionFetch() {
      const response = await fetch(`http://localhost:8000/productos`);
      const results = await response.json();
      setProducts(results);
    }
    functionFetch();
  }, []);

  return (
    <Grid container sx={{ display: "flex" }}>
      {products?.map((data, item) => {
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
              <CardHeader key={item} title={data.nombredelproducto} />
              <CardMedia component="img" height="280" image={data.imagen} />
              <Typography variant="subtitle" color="primary"></Typography>
              <CardContent>
                <br />
                <Typography variant="body2" color="text.secondary">
                  {data.detallesdelproducto}
                </Typography>
                <br />
                {data.precio}
                <EuroIcon fontSize="8" />
                <button color="blue" borderRadius="2px">
                  Añadir al carrito
                  <ShoppingBasketIcon fontSize="18" sx={{ align: "right" }} />
                </button>
              </CardContent>
            </Card>
          </Grid>
        );
      })}
    </Grid>
  );
}
