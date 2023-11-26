import React, { useState } from 'react'
import './signup.css'
import LOGO from '../../Assets/Images/logo.png'
import FB from '../../Assets/Images/FB.png'
import GOOGLE from '../../Assets/Images/IN.png'
import LINKEDIN from '../../Assets/Images/G+.png'
import { FaRegUser } from 'react-icons/fa'
import { MdOutlineMailOutline } from 'react-icons/md'
import { MdLockOutline } from 'react-icons/md'
import { BiShow } from 'react-icons/bi'
import { BiHide } from 'react-icons/bi'
import { validationSchema } from '../../Schemas/signupSchema'
import { useFormik } from 'formik'

export default function Signup() {
  const [showPassword, setShowPassword] = useState(false)

  //   yup validation and form submission

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values, { resetForm }) => {
      console.log('Auth data:', values)
      resetForm()
    },
  })

  //   show and hide password

  const handleShow = () => {
    setShowPassword(!showPassword)
  }

  return (
    <div className="signup-container">
      {/* left side */}

      <div className="signup-left-side">
        <div className="logo_section">
          <img src={LOGO} alt="logo" className="logo" />
          <h2>Diprella</h2>
        </div>

        <div className="left_panel_content">
          <h1>Welcome Back!</h1>
          <p>To keep connected with us please</p>
          <p>login with your own Info</p>
          <button>SIGN IN</button>
        </div>
      </div>

      {/* signup form section  */}

      <div className="signup-form-section">
        <h2 className="signup_form_header">Create Account</h2>

        <div className="signup_icons">
          <div>
            <img src={FB} alt="fb" />
          </div>
          <div>
            <img src={GOOGLE} alt="g+" />
          </div>
          <div>
            {' '}
            <img src={LINKEDIN} alt="in" />
          </div>
        </div>

        <p>or use your email for Registration</p>

        <div className="signup-form">
          <form onSubmit={formik.handleSubmit}>
            <div className="inputs">
              <div className="input-container">
                <div className="icon">
                  <FaRegUser size={13} />
                </div>
                <input
                  type="text"
                  placeholder="Name"
                  name="name"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.name}
                />
              </div>
              {formik.touched.name && formik.errors.name && (
                <div className="error-message">{formik.errors.name}</div>
              )}
              <div className="input-container">
                <div className="icon">
                  <MdOutlineMailOutline size={15} />
                </div>
                <input
                  type="email"
                  placeholder="Email"
                  name="email"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                />
              </div>
              {formik.touched.email && formik.errors.email && (
                <div className="error-message">{formik.errors.email}</div>
              )}

              <div className="input-container">
                <div className="icon">
                  <MdLockOutline size={15} />
                </div>
                <input
                  className="password"
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Password"
                  name="password"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.password}
                />
                {formik.values.password && (
                  <div className="icon" onClick={handleShow}>
                    {showPassword ? <BiHide size={15} /> : <BiShow size={15} />}
                  </div>
                )}
              </div>
              {formik.touched.password && formik.errors.password && (
                <div className="error-message">{formik.errors.password}</div>
              )}
            </div>

            <button
              type="submit"
              className="signup-submit-button"
              disabled={!formik.isValid || formik.isSubmitting}
            >
              SIGN UP
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
