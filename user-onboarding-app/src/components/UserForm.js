import React, {useState, useEffect} from 'react';
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
// UsersRendered users={users}

function UserForm({values, errors, touched, status}) {

  const [users, setUsers] = useState([]);

  useEffect(() => {

    status && setUsers(users => [...users, status]);
  }, [status]);

  return(
    <div className="form-field">
      <Form>
        {/* NAME */}
        <label>
          Full Name:
          <Field
            type="text"
            name="name"
            placeholder="Enter Name"
          />
          {touched.name && errors.name && (
            <p>{errors.name}</p>
          )}
        </label>
        {/* EMAIL */}
        <label>
          Email Address:
          <Field
            type="email"
            id="email"
            name="email"
            placeholder="Enter Email"
          />
        </label>
        {/* PASSWORD */}
        <label>
          Password:
          <Field
            type="password"
            name="password"
            placeholder="Enter Password"
          />
        </label>
        {/* TERMS OF SERV. CHECKBOX */}
        <label>
          Agree to Terms of Service:
          <Field
            type="checkbox"
            name="terms"
          />
        </label>
        {/* SUBMIT BUTTON */}
        <button type="submit">SUBMIT</button>
      </Form>
      {users.map(user => {
        return(
          <ul key={user.id}>
            <li>Name: {user.name}</li>
            <li>Email: {user.email}</li>
          </ul>
        );
      })}
    </div>
  );
};

const FormikUserForm = withFormik({
  mapPropsToValues(props) {
    return {
      name: props.name || '',
      email: props.email || '',
      password: props.password || ''
    }
  },

  handleSubmit(values, { setStatus, resetForm }) {
    console.log("submitting", values);
    axios
      .post("https://reqres.in/api/users/", values)
      .then(res => {
        console.log("success", res);
        setStatus(res.data);
        resetForm();
      })
      .catch(err => console.log(err.response));
  },

  validationSchema: Yup.object().shape({
    name: Yup.string().required(),
    email: Yup.string().required()
  })
})(UserForm);

export default FormikUserForm;
