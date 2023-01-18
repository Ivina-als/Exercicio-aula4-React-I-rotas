import "../../App.css";
import ButtonDefault from "../../components/Button";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  function clickAction() {
    return navigate("/");
  }

  return (
    <div className="App">
      <section className="App-section">
        <h1>Home</h1>
        <ButtonDefault
          divButton="button-home"
          redirection={clickAction}
          name="Voltar"
        />
      </section>
    </div>
  );
}
//h1 é onde tenho que apagar para componentizar
export default Home;
