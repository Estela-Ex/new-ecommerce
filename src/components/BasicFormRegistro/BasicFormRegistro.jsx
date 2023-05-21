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
        Register
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
              label="Enter your fistname"
              type="firstname"
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
              label="Enter your lastname"
              type="lastname"
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
              label="Enter your addres"
              type="addres"
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
              label="Enter your city"
              type="city"
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
              label="Enter your postal Code"
              type="postalCode"
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
              label="Enter your email"
              type="email"
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
              label="Enter your password"
              type="password"
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
              label="Repeat your password"
              type="password"
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