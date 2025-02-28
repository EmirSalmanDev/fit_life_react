import CalculatorCard from "../CalculatorCard";
import { Outlet } from "react-router-dom";
import CalorieCalcImage from "../../assets/kcal_white.png";
import BmiCalcImage from "../../assets/bmi_take_2.png";
import RmCalcImage from "../../assets/rm_white.png";
import "../../styles/home.css";
import "../../styles/calculatorPage.css";

function Calculator() {
  return (
    <div>
      <div className="calculator_page_banner">
        <div className="banner_text">
          <h1 className="banner_header">Hesaplama</h1>
          <p className="banner_desc">
            Hedeflerine ulaşmak için verilerini bilmek ve doğru analiz etmek çok
            önemli!
          </p>
          <p className="banner_desc">
            Bu sayfadaki hesaplayıcılar sayesinde antrenman ve beslenme
            planlarını bilimsel temellere dayanarak optimize edebilirsin.
          </p>
          <p className="banner_desc">
            Doğru verilerle hareket etmek, hem ilerlemeni hızlandırır hem de
            sakatlık riskini azaltır, bu yüzden kendi seviyene uygun
            hesaplamalar yaparak bilinçli antrenman yapmaya başla!
          </p>
        </div>
      </div>
      <div className="calculator_cards">
        <div className="container">
          <div className="row">
            <h1 className="calculator_cards_header">Hesaplayıcılarımız</h1>

            <div className="cards">
              <CalculatorCard
                image={CalorieCalcImage}
                header="Kalori Hesaplayıcı"
                description="Günlük kalori ihtiyacını kolayca hesapla"
                path="calorie"
                scroll_id="get_calorie"
              />

              <CalculatorCard
                image={BmiCalcImage}
                header="VKİ Hesaplayıcı"
                description="Vücut kitle indeksini kolayca hesapla"
                path="bmi"
                scroll_id="get_bmi"
              />

              <CalculatorCard
                image={RmCalcImage}
                header="Set Ağırlığı Hesaplayıcı"
                description="Kaldırabileceğin maksimum ağırlığı öğren"
                path="rm"
                scroll_id="get_rm"
              />
            </div>
          </div>
        </div>
      </div>

      <Outlet />
    </div>
  );
}

export default Calculator;
