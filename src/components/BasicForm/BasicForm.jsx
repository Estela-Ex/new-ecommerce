import { BasicFormSchema } from ""


async function onSubmit(values, actions) {
    await new Promise((resolve) => setTimeout(resolve, 2000))
    actions.resetForm()
};

export default function BasicForm() {
    const {
        values,
        touched,
        errors,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting
    } = useFormik({
        initalValues,
        validationSchema: BasicFormSchema,
        onSubmit
    })
}