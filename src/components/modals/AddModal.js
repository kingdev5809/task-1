import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "../style.css";
import { Formik } from "formik";
import { useDispatch } from "react-redux";
import { userCreated } from "../../Redux/userSlice";

function AddModal(props) {
  const { visibleModal, setVisibleModal } = props;
 

  const dispatch = useDispatch();
  return (
    <div>
      <Formik
        initialValues={{
          email: "",
          password: "",
          name: "",
          gender: "",
          brith: "",
          id: uuidv4(),
        }}
        validate={(values) => {
          const errors = {};
          if (!values.email) {
            errors.email = "Required";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "Invalid email address";
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          dispatch(userCreated(values));
          setVisibleModal("d-none");
          setSubmitting(false);
          resetForm({
            values: "",
          });
        }}
      >
        {({
          values,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          setValues,
        }) => (
          <div className={visibleModal}>
            <div
              onClick={() => setVisibleModal("d-none")}
              className="w-screen"
            ></div>
            <div className="modalWindows delete-modal">
              <div className="modal-inner">
                <div className="modal-title">
                  <h1>Add User</h1>
                  <span
                    onClick={() => setVisibleModal("d-none")}
                    className="closeModal"
                  >
                    X
                  </span>
                </div>

                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Name</label>
                    <input
                      type="name"
                      name="name"
                      className="form-control"
                      id="exampleInputName"
                      aria-describedby="emailHelp"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.name}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input
                      type="email"
                      name="email"
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input
                      type="password"
                      name="password"
                      className="form-control"
                      id="exampleInputPassword1"
                      value={values.password}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleFormControlSelect1">
                      Select your gender
                    </label>
                    <select
                      className="form-control"
                      id="exampleFormControlSelect1"
                      name="gender"
                      value={values.gender}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    >
                      <option value=""></option>
                      <option name="male" value="male">
                        Male
                      </option>
                      <option name="famale" value="famale">
                        Famale
                      </option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Data brith</label>
                    <input
                      type="date"
                      name="brith"
                      className="form-control"
                      id="exampleInputbrith1"
                      value={values.brith}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  </div>

                  <div className="d-flex justify-content-between">
                    <button
                      type="submit"
                      className="btn btn-danger "
                      onClick={() =>
                        setValues({
                          email: "",
                          password: "",
                          name: "",
                          gender: "",
                          brith: "",
                          id: uuidv4(),
                        })
                      }
                    >
                      Reset
                    </button>
                    <button
                      type="submit"
                      className="btn btn-primary"
                      disabled={isSubmitting}
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        )}
      </Formik>
    </div>
  );
}

export default AddModal;
