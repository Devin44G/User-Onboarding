import React, {useState} from 'react';
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import UsersRendered from './UsersRendered';
// UsersRendered users={users}

function UserForm({values, errors, touched, status}) {

  const [users, setUsers] = useState([]);

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
        </label>
        {/* EMAIL */}
        <label>
          Email Address:
          <Field
            type="email"
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
      <UsersRendered />
    </div>
  );
};

const FormikUserForm = withFormik({
  mapPropsToValues(props) {
    return {
      
    }
  }
})(UserForm);

export default FormikUserForm;
