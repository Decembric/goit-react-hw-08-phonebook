import { ErrorMessage, Field, Form, Formik } from "formik"
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import { login } from "../../redux/auth/operations";



const initialValues = {
  email: "",
  password: ""
}

const userSchema = Yup.object().shape({
  email: Yup.string()
    .min(3, "Too Short! Minimum 3 characters")
    .max(50, "Too Long! Maximum 50 characters")
    .required("Required"),
  password: Yup.string()
    .min(3, "Too Short! Minimum 3 characters")
    .max(50, "Too Long! Maximum 50 characters")
    .required("Required"),
  
});

const LoginPage = () => {
  const dispatch = useDispatch()
  const handleSubmitForm = (values, actions) => {
    console.log(values)
dispatch(login(values))
    actions.resetForm()
  }
  return (
       <Formik
      initialValues={initialValues}
      onSubmit={handleSubmitForm}
      validationSchema={userSchema}
    >
       <Form>
        <div>
          <label>Email</label>
          <br />
          <Field type="email" name="email" />
          <ErrorMessage name="email" />
        </div>
        <br />
        <div>
          <label>Password</label>
          <br />
          <Field type="password" name="password" />
          <ErrorMessage name="password" />
        </div>
        <br />
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  )
}

export default LoginPage