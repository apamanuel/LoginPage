import LoginForm from "../../components/LoginForm/LoginForm";
import logo from "../../assets/logo.png";
import style from "./Login.module.css";

const Login = () => {
  return (
    <div className={style.container}>
      <img src={logo} alt="logo" className={style.logo} />
      <LoginForm />
    </div>
  );
};

export default Login;
