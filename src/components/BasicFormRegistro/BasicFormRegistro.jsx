import { TextField, Box, Button, Typography, Grid, Checkbox } from "@mui/material";
import { useFormik } from "formik";
import { BasicFormSchemaRegistro } from '../BasicFormRegistro/BasicFormSchemaRegistro';
import { initialValues } from "../BasicFormRegistro/formRegistro";

async function onSubmit(values, actions) {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  actions.resetForm();
}

export default function BasicFormRegistro() {
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
    validationSchema: BasicFormSchemaRegistro,
    onSubmit
  })
  return (
    <>
      <Typography variant="h5" sx={{ textAlign: "center" }}>
        Registro
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
          <Grid item xs={12}>
            <TextField
              id="firstname"
              label="firstname"
              type="firstname"
              placeholder="Enter your fistname"
              value={values.firstname}
              onChange={handleChange}
              onBlur={handleBlur}
              size="small"
              sx={{ mb: 2, m: 1.2, width: "47%" }}
              error={errors.firstname && touched.firstname}
              helperText={errors.firstname}
            />
            <TextField
              id="lastname"
              label="lastname"
              type="lastname"
              placeholder="Enter your lastname"
              value={values.lastname}
              onChange={handleChange}
              onBlur={handleBlur}
              size="small"
              sx={{ mb: 2, m: 1.2, width: "47%" }}
              error={errors.lastname && touched.lastname}
              helperText={errors.lastname}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="addres"
              label="addres"
              type="addres"
              placeholder="Enter your addres"
              value={values.addres}
              onChange={handleChange}
              onBlur={handleBlur}
              size="small"
              sx={{ mb: 2, m: 1.2, width: "47%" }}
              error={errors.addres && touched.addres}
              helperText={errors.addres}
            />
            <TextField
              id="city"
              label="city"
              type="city"
              placeholder="Enter your city"
              value={values.city}
              onChange={handleChange}
              onBlur={handleBlur}
              size="small"
              sx={{ mb: 2, m: 1.2, width: "47%" }}
              error={errors.city && touched.city}
              helperText={errors.city}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="postalCode"
              label="postalCode"
              type="postalCode"
              placeholder="Enter your postalCode"
              value={values.postalCode}
              onChange={handleChange}
              onBlur={handleBlur}
              size="small"
              sx={{ mb: 2, m: 1.2, width: "47%" }}
              error={errors.postalCode && touched.postalCode}
              helperText={errors.postalCode}
            />
            <TextField
              id="email"
              label="email"
              type="email"
              placeholder="Enter your email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              size="small"
              sx={{ mb: 2, m: 1.2, width: "47%" }}
              error={errors.email && touched.email}
              helperText={errors.email}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="password"
              label="password"
              type="password"
              placeholder="Enter your password"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              size="small"
              sx={{ mb: 2, m: 1.2, width: "47%" }}
              error={errors.password && touched.password}
              helperText={errors.password}
            />
            <TextField
              id="passwordRepeat"
              label="passwordRepeat"
              type="password"
              placeholder="Repeat your password"
              value={values.passwordRepeat}
              onChange={handleChange}
              onBlur={handleBlur}
              size="small"
              sx={{ mb: 2, m: 1.2, width: "47%" }}
              error={errors.passwordRepeat && touched.passwordRepeat}
              helperText={errors.passwordRepeat}
            />
          </Grid>
          <span>
            Recordar contraseña <Checkbox defaultChecked />
          </span>
          <Button
            disabled={isSubmitting}
            type="submit"
            variant="contained"
            sx={{ mb: 2 }}
          >
            Register
          </Button>
        </Box>
      </form>
      {/* <pre>{JSON.stringify({ values, errors }, null, 1)}</pre> */}
    </>
  );
}