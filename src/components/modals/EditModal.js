import React, { useEffect, useRef } from "react";
import "../style.css";
import { Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { userUpdated } from "../../Redux/userSlice";

function EditModal(props) {
  const { visibleModal, setVisibleModal, idx } = props;
  const dispatch = useDispatch();
  const ref = useRef();

  const initialvalue = useSelector((state) => state.users.updatedUser);

  useEffect(() => {
    ref.current.setValues(initialvalue);
  }, [initialvalue]);

  return (
    <div>
      <Formik
        initialValues={initialvalue}
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
        innerRef={ref}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          setVisibleModal("d-none");
          dispatch(userUpdated({ values, idx }));
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
                  <h1>Edit User</h1>
                  <span
                    onClick={() => setVisibleModal("d-none")}
                    className="closeModal"
                  >
                    X
                  </span>
                </div>

                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="exampleInputName2">Name</label>
                    <input
                      type="name"
                      name="name"
                      className="form-control"
                      id="exampleInputName2"
                      aria-describedby="emailHelp"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.name}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail2">Email address</label>
                    <input
                      type="email"
                      name="email"
                      className="form-control"
                      id="exampleInputEmail2"
                      aria-describedby="emailHelp"
                      value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputPassword2">Password</label>
                    <input
                      type="password"
                      name="password"
                      className="form-control"
                      id="exampleInputPassword2"
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
                      id="exampleFormControlSelect2"
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
                    <label htmlFor="exampleInputDate2">Data brith</label>
                    <input
                      type="date"
                      name="brith"
                      className="form-control"
                      id="exampleInputbrith2"
                      value={values.brith}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  </div>
                  <div className="d-flex justify-content-between">
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

export default EditModal;
