
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import { fetchAddContact } from "../../redux/contacts/operations";





const initialValues = { user: "", number: "" };

const userSchema = Yup.object().shape({
  user: Yup.string()
    .min(3, "Too Short! Minimum 3 characters")
    .max(50, "Too Long! Maximum 50 characters")
    .required("Required"),
  number: Yup.string()
    .min(3, "Too Short! Minimum 3 characters")
    .max(50, "Too Long! Maximum 50 characters")
    .required("Required"),
});

const ContactForm = () => {
  const dispatch = useDispatch();
  const handleSubmitForm = (values, action) => {
    dispatch(fetchAddContact({  ...values,
      name: values.user, number: values.number
    }))
    action.resetForm()
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmitForm}
      validationSchema={userSchema}
    >
      <Form>
        <div>
          <label>Name</label>
          <br />
          <Field type="text" name="user" />
          <ErrorMessage name="user" />
        </div>
        <br />
        <div>
          <label>Number</label>
          <br />
          <Field type="text" name="number" />
          <ErrorMessage name="number" />
        </div>
        <br />
        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
};

export default ContactForm;