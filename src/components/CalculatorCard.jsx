import { useNavigate } from "react-router-dom";

function CalculatorCard(props) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/calculators/${props.path}`);

    setTimeout(() => {
      const element = document.getElementById(props.scroll_id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  return (
    <div className="card">
      <img src={props.image} alt="program image" className="calculator_card" />
      <div className="context">
        <div className="card_header">{props.header}</div>
        <div className="card_text">{props.description}</div>
        <button className="btn card_btn" onClick={handleClick}>
          Hesaplayıcıyı Getir
        </button>
      </div>
    </div>
  );
}

export default CalculatorCard;
