// import { useState } from "react";
import { userSchema } from './validation';
import { Formik, /*useFormik,*/ Form, Field } from 'formik';
import { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

// Initial Values for Formik
const initialValues = {
  email: '',
};

// Hot-toast API
const notify = () =>
  toast.error('Invalid email.', {
    duration: 2000,
  });

export default function News() {
  // const [value, setValue] = useState("email@company.com");

  // const handleClick = () => {
  //   alert(value)
  // }

  // Yup validation
  // const validate = async (event) => {
  //   event.preventDefault();
  //   let userData = event.target.value;
  //   const isValid = await userSchema.isValid(userData);
  //   console.log(isValid);
  //   console.log(userData);
  // };

  // Formik form Handling

  // const { values, handleBlur, handleChange, handleSubmit, errors } = useFormik({
  //   initialValues: initialValues,
  //   validationSchema: userSchema,
  //   onSubmit: (values) => {
  //     console.log(values);
  //   },
  // });
  const navigate = useNavigate();
  const newNotify = (e) => {
    e.preventDefault();
    navigate('/success');
  };

  const [email, setEmail] = useState('');

  console.log(email);

  const handleChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <main>
      <div className='container'>
        <div className='message'>
          <h1 className='signin--heading'>Stay updated</h1>
          <p>Join 60,000+ product managers receiving monthly updates on:</p>
          <ul className='list'>
            <li>Product discovery and building what matters</li>
            <li>Measuring to ensure updates are a success</li>
            <li>And much more!</li>
          </ul>
          <Formik
            initialValues={initialValues}
            validationSchema={userSchema}
          >
            {({ errors }) => (
              <Form
                onChange={handleChange}
                onSubmit={handleSubmit}
              >
                <span>
                  <label
                    htmlFor='exampleInputEmail'
                    aria-describedby='emailHelp'
                  >
                    Email address
                  </label>
                  {errors.email && (
                    <small className='text-danger'>{errors.email}</small>
                  )}
                </span>
                {}
                <Field
                  id='email'
                  name='email'
                  value={email}
                  type='text'
                  className={`form-control ${errors.email && 'is-invalid'}`}
                  placeholder='email@company.com'
                />
                <a href='/success'>
                  <button
                    onClick={errors.email ? notify : newNotify}
                    type='submit'
                    className='btn btn-dark'
                  >
                    Subscribe to monthly newsletter
                  </button>
                </a>
                <Toaster />
              </Form>
            )}
          </Formik>
        </div>
        <img
          className='illustration--image'
          src='./src/assets/images/illustration-sign-up-desktop.svg'
          alt=''
        />
      </div>
      <div className='attribution'>
        Challenge by{' '}
        <a
          href='https://www.frontendmentor.io?ref=challenge'
          target='_blank'
        >
          Frontend Mentor
        </a>
        . Coded by <a href='#'>Stephen</a>.
      </div>
    </main>
  );
}
