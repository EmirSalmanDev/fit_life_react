import MaleSymbol from "../assets/male.png";
import FemaleSymbol from "../assets/female.png";

function CalculatorBase({
  gender,
  setGender,
  weight,
  setWeight,
  height,
  setHeight,
}) {
  const valPercentWeight = ((weight - 30) / (200 - 30)) * 100;
  const valPercentHeight = ((height - 50) / (220 - 50)) * 100;
  return (
    <div>
      <div className="gender_container">
        <div
          className={`gender_box ${gender === "male" ? "selected" : ""}`}
          onClick={() => setGender("male")}
        >
          <div className="gender_symbol">
            <img src={MaleSymbol} alt="Erkek" className="img-fluid" />
          </div>
          <p>Male</p>
        </div>
        <div
          className={`gender_box ${gender === "female" ? "selected" : ""}`}
          onClick={() => setGender("female")}
        >
          <div className="gender_symbol">
            <img src={FemaleSymbol} alt="Kadın" className="img-fluid" />
          </div>
          <p>Female</p>
        </div>
      </div>

      <div className="slider_box">
        <div className="slider_label">
          <label>Kilonuzu giriniz</label>
          <div className="slider_info">{weight} kg</div>
        </div>

        <input
          type="range"
          min="30"
          max="200"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          className="slider"
          style={{
            background: `linear-gradient(to right, var(--red) ${valPercentWeight}%, #ccc ${valPercentWeight}%)`,
          }}
        />
        <div className="slider-range">
          <span>30 kg</span>
          <span>200 kg</span>
        </div>
      </div>

      <div className="slider_box">
        <div className="slider_label">
          <label>Boyunuzu giriniz</label>
          <div className="slider_info">{height} cm</div>
        </div>

        <input
          type="range"
          min="50"
          max="220"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
          className="slider"
          style={{
            background: `linear-gradient(to right, var(--red) ${valPercentHeight}%, #ccc ${valPercentHeight}%)`,
          }}
        />

        <div className="slider-range">
          <span>50 cm</span>
          <span>220 cm</span>
        </div>
      </div>
    </div>
  );
}

export default CalculatorBase;
