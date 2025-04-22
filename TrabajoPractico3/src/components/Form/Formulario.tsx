import { Field, Formik } from "formik";
import { validationSchema } from "../../schemas/formSchema";
import { Input } from "../Input/Input";
import { Form } from "formik";
import styles from "./Formulario.module.css"
import { Button } from "../Button/Button";
import Swal from "sweetalert2";

export const Formulario = () => {
    type InitialaValuesForm = {
        nombre: string,
        email: string,
        password: string,
        confirmarPassword: string;
        
    }
    
    const initialValues: InitialaValuesForm = {
        nombre: '',
        email: '',
        password: '',
        confirmarPassword: ''
    }
    const onSubmit = (values:InitialaValuesForm, {resetForm}: {resetForm: () => void}) => {
        console.log(values)

        Swal.fire({
            title: "Formulario Enviado",
            icon: "success",
            confirmButtonText: "OK"
        });
        resetForm()
    }


    return (
        <Formik
            initialValues = {initialValues}
            validationSchema = {validationSchema}
            onSubmit= {onSubmit}
        >
            
            {({errors, touched, isValid, dirty}) => (
                <div className={styles.containerPrincipal}>
                    
                    <Form className={styles.containerForm}>
                    <h2>Formulario manejo de errores</h2>
                        <Field
                            name="nombre"
                            type="text"
                            id="nombre"
                            as={Input}
                            label="Nombre"
                            error=<small style={{color:"red"}}>{errors.nombre && touched.nombre ? errors.nombre : undefined}</small>
                        />
                        <Field
                            name="email"
                            type="email"
                            id="email"
                            as={Input}
                            label="Email"
                            error=<small style={{color:"red"}}>{errors.email && touched.email ? errors.email : undefined}</small>
                        />
                        <Field
                            name="password"
                            type="password"
                            id="password"
                            as={Input}
                            label="Contraseña"
                            error=<small style={{color:"red"}}>{errors.password && touched.password ? errors.password : undefined}</small>
                        />
                        <Field
                            name="confirmarPassword"
                            type="password"
                            id="confirmarPassword"
                            as={Input}
                            label="Confirmar contraseña"
                            error=<small style={{color:"red"}}>{touched.confirmarPassword && errors.confirmarPassword ? errors.confirmarPassword : undefined}</small>
                        />
                    <Button disabled={!(isValid && dirty)} >Enviar</Button>
            </Form>
                </div>
            )}
            
        </Formik>
    )
}
