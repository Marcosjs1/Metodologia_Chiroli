import * as Yup from 'yup'

export const validationSchema = Yup.object(
    {
        nombre: Yup.string().min(3, "Minimo 3 caracteres").required("Campo requerido"),
        email: Yup.string().email('Correo invalido').required('Campo requerido'),
        password: Yup.string().min(5, 'Minimo 5 caracteres').max(15, "Maximo 15 caracteres").required('Campo requerido'),
        confirmarPassword: Yup.string().oneOf([Yup.ref('password'), undefined],'Las contraseñas no coinciden').required('Campo requerido')
    }
)