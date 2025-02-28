import "../styles/calorieCalc.css";
import "../styles/rmCalc.css";
import { useState } from "react";

function RmCalc() {
  const [lift, setLift] = useState(0);
  const [rep, setRep] = useState(0);
  const rm = lift * (1 + rep / 30);
  const twoRm = rm * 0.95;
  const threeRm = rm * 0.93;
  const fiveRm = rm * 0.87;
  const tenRm = rm * 0.75;

  return (
    <div className="calc_container" id="get_rm">
      <div className="calculator">
        <h2 className="calculator_header rm_main_header">
          1RM - Maksimum Ağırlık ve Çalışma Seti Hesaplayıcı
        </h2>

        <div className="calc_skeleton">
          <div className="calc_base rm_base">
            <div className="rm_container">
              <div className="age_container">
                <label>Kaldırılan Ağırlık</label>
                <input
                  type="number"
                  onChange={(e) => setLift(e.target.value)}
                  onInput={(e) => {
                    if (e.target.value < 0) e.target.value = 1;
                    if (e.target.value > 2000) e.target.value = 2000;
                  }}
                  className="age_input"
                  min={0}
                  max={2000}
                />
              </div>
              <p className="liner_red">
                Kaldırdığınız ağırlığı girin. Ağırlık birimi sonuçta herhangi
                bir değişiklik yapmaz.
              </p>
            </div>

            <div className="rm_container">
              <div className="age_container">
                <label>Yapılan Tekrar Sayısı</label>
                <input
                  type="number"
                  onChange={(e) => setRep(e.target.value)}
                  onInput={(e) => {
                    if (e.target.value < 0) e.target.value = 1;
                    if (e.target.value > 100) e.target.value = 100;
                  }}
                  className="age_input"
                  min={0}
                  max={100}
                />
              </div>
              <p>
                Kaldırdığınız ağırlığı girin. Ağırlık birimi sonuçta herhangi
                bir değişiklik yapmaz.
              </p>
            </div>
          </div>

          <div className="report">
            <h2>Rapor</h2>

            <div className="rm_report_output">
              <h3 className="rm_header">1RM sonucu</h3>
              <span className="rm_value"> {rm.toFixed(2)}</span>
              <p className="liner">1 tekrardaki tahmini performansınız.</p>

              <div className="ideal_weights">
                <div className="ideal_weight">
                  <p>2RM</p>
                  <span className="rm_secondary_output">
                    {twoRm.toFixed(2)}
                  </span>
                </div>

                <div className="ideal_weight">
                  <p>3RM</p>
                  <span className="rm_secondary_output">
                    {threeRm.toFixed(2)}
                  </span>
                </div>

                <div className="ideal_weight">
                  <p>5RM</p>
                  <span className="rm_secondary_output">
                    {fiveRm.toFixed(2)}
                  </span>
                </div>

                <div className="ideal_weight">
                  <p>10RM</p>
                  <span className="rm_secondary_output">
                    {tenRm.toFixed(2)}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RmCalc;
