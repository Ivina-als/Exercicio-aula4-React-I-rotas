import "../../App.css";
import AnchorDefault from "../../components/Anchor/index";
import ButtonDefault from "../../components/Button/index";
import InputLogin from "../../components/Input/index";
import Title from "../../components/Title/index";
import { useNavigate } from "react-router-dom";
// para redirecionar a página com o clique do botão, precisa importar essa função do RRDOM

function Login() {
  const navigate = useNavigate();
  function goHome() {
    navigate("/home");
  }
  return (
    <div className="App">
      <section className="App-section">
        <div className="div-login">
          <Title id="title-login" title="Login" />
          <InputLogin type="text" label="Usuário" />
          <InputLogin type="password" label="Senha" />
          <ButtonDefault name="Entrar" redirection={goHome} />
          <AnchorDefault
            href="https://www.google.com/"
            name="Esqueceu sua senha?"
          />
        </div>
      </section>
    </div>
  );
}

export default Login;
