import "../styles/card.css";
import "animate.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Card(props) {
  const [animated, setAnimated] = useState(true);

  useEffect(() => {
    setTimeout(() => setAnimated(false), 1000);
  }, []);

  return (
    <div
      className={`card ${
        animated ? "animate__animated animate__fadeInUp" : ""
      }`}
    >
      <img src={props.image} alt="program image" />
      <div className="context">
        <div className="card_header">{props.header}</div>
        <div className="card_price">
          {props.dis_price}
          <span>{props.price}$</span>
        </div>
        <div className="card_level">
          <span>Zorluk</span>
          {props.iconOne}
          {props.iconTwo}
          {props.iconThree}
        </div>
        <div className="card_text">{props.description}</div>
        <Link to={`/programs#${props.id}`}>
          <button className="btn card_btn">Programa Git</button>
        </Link>
      </div>
    </div>
  );
}

export default Card;
