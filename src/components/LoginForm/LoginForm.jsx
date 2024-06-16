import { useFormik } from "formik";
import { users } from "../../helpers/users";
import { useNavigate } from "react-router-dom";
import { UserAuthContext } from "../../context/UserAuthcontext";
import { useContext } from "react";
import style from "./LoginForm.module.css";
import user from "../../assets/user.png";
import lock from "../../assets/lock.png";

const LoginForm = () => {
  const [, setAuth] = useContext(UserAuthContext);
  const navigate = useNavigate();
  const validate = (values) => {
    const errors = {};
    const regexUserName = new RegExp(
      "^[A-Z0-9._%+-]+@[A-Z0-9.-]+\\.[A-Z]{2,4}$",
      "i"
    );
    const regexPassword = new RegExp(
      "^(?=.*[A-Za-z])(?=.*\\d)(?=.*[@$!%*#?&.+=<>:;])[A-Za-z\\d@$!%*#?&.+=<>:;]{4,}$"
    );

    if (!values.userName) {
      errors.userName = "Required";
    } else if (!regexUserName.test(values.userName)) {
      errors.userName = "Invalid USERNAME (user@email.com)";
    }

    if (!values.password) {
      errors.password = "Required";
    } else if (!regexPassword.test(values.password)) {
      errors.password = "Wrong combination";
    }

    return errors;
  };

  const formik = useFormik({
    initialValues: {
      userName: "",
      password: "",
    },
    validate,
    onSubmit: (values) => {
      const userFound = users.find((user) => {
        return (
          values.userName === user.userName && values.password === user.password
        );
      });

      if (userFound) {
        setAuth(true);
        navigate("/session");
      } else {
        alert("the provided password is wrong");
      }
    },
  });
  return (
    <form onSubmit={formik.handleSubmit} className={style.containerForm}>
      <div className={style.inputContainer}>
        <img src={user} alt="user" className={style.imgForm} />
        <input
          id="userName"
          name="userName"
          type="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.userName}
          placeholder="USERNAME"
          className={style.box}
        />
        <div className={style.errorsContainer}>
          {formik.touched.userName && formik.errors.userName ? (
            <div>{formik.errors.userName}</div>
          ) : null}
        </div>
      </div>

      <div className={style.inputContainer}>
        <img src={lock} alt="lock" className={style.imgForm} />
        <input
          id="password"
          name="password"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
          placeholder="PASSWORD"
          className={style.box}
        />
        <div className={style.errorsContainer}>
          {formik.touched.password && formik.errors.password ? (
            <div>{formik.errors.password}</div>
          ) : null}
        </div>
      </div>

      <button type="submit" className={style.submit}>
        LOGIN
      </button>

      <div className={style.forgotText}>
        <a>Forgot password?</a>
      </div>
    </form>
  );
};

export default LoginForm;
