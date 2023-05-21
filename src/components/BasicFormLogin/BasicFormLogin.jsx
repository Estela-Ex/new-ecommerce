import { BasicFormSchemaLogin } from "./BasicFormSchemaLogin";
import { initialValues } from "./formLogin";
import { useFormik } from "formik";
import { TextField, Box, Button, Typography, Checkbox } from "@mui/material";
import { Link } from "react-router-dom";

async function onSubmit(values, actions) {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  actions.resetForm();
}

export default function BasicFormLogin() {
  const {
    values,
    touched,
    errors,
    handleChange,
    handleBlur,
    handleSubmit,
    isSubmitting,
  } = useFormik({
    initialValues,
    validationSchema: BasicFormSchemaLogin,
    onSubmit,
  });
  return (
    <>
      <Typography variant="h5" sx={{ textAlign: "center" }}>
        Inicia Sesión
      </Typography>
      <form onSubmit={handleSubmit}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            p: 2,
            border: "1px solid grey",
            borderRadius: 2,
          }}
        >
          <TextField
            id="email"
            label="Enter your email"
            type="email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            size="small"
            sx={{ mb: 2 }}
            error={errors.email && touched.email}
            helperText={errors.email}
          />
          <TextField
            id="password"
            label="Enter your password"
            type="password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            size="small"
            sx={{ mb: 2 }}
            error={errors.password && touched.password}
            helperText={errors.password}
          />
          <span>
            Recordar contraseña <Checkbox defaultChecked />
          </span>
          <Button
            disabled={isSubmitting}
            type="submit"
            variant="contained"
            sx={{ mb: 2 }}
          >
            Login
          </Button>
        </Box>
      </form>
      <Link to={"/Registre"}>¿Aun sin cuenta?Registrate</Link>
      {/* <pre>{JSON.stringify({ values, errors }, null, 1)}</pre> */}
    </>
  );
}
