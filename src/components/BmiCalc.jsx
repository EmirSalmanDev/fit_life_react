import { useState, useEffect } from "react";
import "../styles/calorieCalc.css";
import "../styles/bmiCalc.css";
import CalculatorBase from "./CalculatorBase";

function BmiCalc() {
  const [age, setAge] = useState(20);
  const [gender, setGender] = useState("male");
  const [weight, setWeight] = useState(70);
  const [height, setHeight] = useState(175);
  const [activity, setActivity] = useState(1.2);
  const [bmr, setBmr] = useState(null);
  const [calories, setCalories] = useState(null);

  const bmi = weight / ((height / 100) * (height / 100));
  const idealWeightLow = 18.5 * ((height / 100) * (height / 100));
  const idealWeightHigh = 24.9 * ((height / 100) * (height / 100));

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
    <div className="calc_container" id="get_bmi">
      <div className="calculator">
        <h2 className="calculator_header">Vücut Kitle Endeksi Hesaplayıcı</h2>

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
          </div>

          <div className="report">
            <h2>Rapor</h2>

            <div className="bmi_report_output">
              <h3 className="bmi_header">VKİ</h3>
              <span className="bmi_value">{bmi.toFixed(2)} kg/m²</span>

              <ul className="bmi_list">
                <li className="bmi_item">18,5'den az: Zayıf</li>
                <li className="bmi_item">18,5 - 24,9: İdeal</li>
                <li className="bmi_item">25 - 29,9: Kilolu</li>
                <li className="bmi_item">30'dan fazla: Obez</li>
              </ul>
              <p className="liner">
                Vücut Kitle İndeksi, vücut yağ oranını doğrudan ölçmez; sadece
                kilo ve boy oranına dayanır. Kas kütlesi veya kemik yoğunluğu
                yüksek olan bireylerde VKİ yüksek çıkabilir, ancak bu kişinin
                aslında sağlıklı bir vücut kompozisyonuna sahip olmasını
                engellemez. Ayrıca, aynı VKİ değerine sahip iki kişinin vücut
                yağ oranları farklı olabilir, bu da VKİ'nin bireysel sağlık
                durumu hakkında her zaman doğru bir ölçüt olmadığını gösterir.
              </p>

              <div className="ideal_weights">
                <div className="ideal_weight">
                  <p>İdeal Kilo Alt Sınır: </p>
                  <span>{idealWeightLow.toFixed(2)}</span>
                </div>
                <div className="ideal_weight">
                  <p>İdeal Kilo Üst Sınır: </p>
                  <span>{idealWeightHigh.toFixed(2)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BmiCalc;
