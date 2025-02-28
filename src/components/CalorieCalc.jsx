import { useState, useEffect } from "react";
import "../styles/calorieCalc.css";
import CalculatorBase from "./CalculatorBase";
import Dropdown from "./Dropdown";

function CalorieCalc() {
  const [age, setAge] = useState(20);
  const [gender, setGender] = useState("male");
  const [weight, setWeight] = useState(70);
  const [height, setHeight] = useState(175);
  const [activity, setActivity] = useState(1.2);
  const [bmr, setBmr] = useState(null);
  const [calories, setCalories] = useState(null);

  useEffect(() => {
    if (age && weight && height) {
      const newBmr =
        gender === "male"
          ? 10 * weight + 6.25 * height - 5 * age + 5
          : 10 * weight + 6.25 * height - 5 * age - 161;

      setBmr(newBmr);
      setCalories(newBmr * activity);
    } else {
      setCalories(null);
    }
  }, [age, gender, weight, height, activity]);

  return (
    <div className="calc_container" id="get_calorie">
      <div className="calculator">
        <h2 className="calculator_header">Kalori İhtiyacı Hesaplayıcı</h2>

        <div className="calc_skeleton">
          <div className="calc_base">
            <CalculatorBase
              gender={gender}
              setGender={setGender}
              weight={weight}
              setWeight={setWeight}
              height={height}
              setHeight={setHeight}
            />
            <div className="age_container">
              <label>Yaşınızı Giriniz</label>
              <input
                type="number"
                onChange={(e) => setAge(e.target.value)}
                onInput={(e) => {
                  if (e.target.value < 0) e.target.value = 1;
                  if (e.target.value > 120) e.target.value = 120;
                }}
                className="age_input"
                min={0}
                max={120}
              />
            </div>

            <div className="select_dropdown">
              <Dropdown setActivity={setActivity} />
            </div>
          </div>

          <div className="report">
            <h2>Rapor</h2>

            <div className="report_output">
              <h3>Bazal Metabolizma Hızı (BMR)</h3>
              <span>{Math.round(bmr)} kcal / day</span>
              <p>
                %100 dinlenme halinde gereken günlük kalori miktarı.{" "}
                <b>
                  Hiçbir zaman bu miktarın altında beslenmeyi
                  hedeflememelisiniz.
                </b>{" "}
                Bu hızlı yağ yakmaz, hızlı hasta eder!
              </p>
            </div>

            <div className="report_output">
              <h3>Günlük toplam kalori ihtiyacınız (TDEE)</h3>
              <span>{Math.round(calories)} kcal / day</span>
              <p>
                Günlük toplam kalori ihtiyacınız.{" "}
                <b>
                  Ortalamada bu miktarda kalori alırsanız, bu aktivite
                  değişmediği sürece vücut ağırlığınız sabit seyreder.
                </b>{" "}
                Ancak toplam kütle sabit olsa da, ağırlık çalışırsanız kas
                kazanıp yağ kaybedebilirsiniz.
              </p>
            </div>

            <div className="report_output">
              <h3>Kilo vermek için almanız gereken kalori</h3>
              <span>{Math.round(calories - 250)} kcal / day</span>
              <p>
                <b>Sağlıklı ve sürdürülebilir bir şekilde kilo vermek için </b>{" "}
                bu miktarda kalori alarak yağ kaybederken, kas kaybını en aza
                indirebilirsiniz.
              </p>
            </div>

            <div className="report_output">
              <h3>Kütle kazanmak için almanız gereken kalori</h3>
              <span>{Math.round(calories + 250)} kcal / day</span>
              <p>
                <b>Kas kütlenizi artırmak için bu miktarda kalori alarak</b>{" "}
                vücudunuza büyüme için yeterli enerjiyi sağlayabilirsiniz.
                Dengeli beslenme ve düzenli antrenman ile yağlanmadan kas
                kazanabilirsiniz.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CalorieCalc;
