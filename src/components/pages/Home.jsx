// import React from "react";
import "../../styles/home.css";
import "../../styles/programs.css";
import GymCat from "../../assets/GymCat.jpg";
import { useNavigate } from "react-router-dom";
import Card from "../Card";
import StrengthProgram from "../../assets/Strength.jpeg";
import PplProgram from "../../assets/Hypertrophy.jpeg";
import BeginnerProgram from "../../assets/FullBody.jpeg";
import StarFull from "@mui/icons-material/Star";
import StarEmpty from "@mui/icons-material/StarBorder";
import StarHalf from "@mui/icons-material/StarHalf";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="main_page">
      <div className="banner">
        <div className="text_container">
          <h2 className="context_header">Yeni Programına Başla!</h2>
          <p className="context_text">
            İster spora yeni başlıyor ol, ister performansını bir üst seviyeye
            çıkarmayı hedefle, sana yol gösterecek antrenman programlarıyla
            karşındayız.
          </p>
          <button className="btn" onClick={() => navigate("/programs")}>
            Hemen Başla
          </button>
        </div>

        <div className="image_container">
          <img src={GymCat} alt="" />
        </div>
      </div>

      <div className="program_cards">
        <div className="container">
          <div className="row">
            <h1 className="program_cards_header">Programlarımız</h1>

            <div className="cards">
              <Card
                image={StrengthProgram}
                header="5x5"
                dis_price="12.99$"
                price="17.99$"
                iconOne={<StarFull />}
                iconTwo={<StarHalf />}
                iconThree={<StarEmpty />}
                description="Başlangıç ve orta seviye sporcular için ideal program."
                id="fiveByFive"
              />
              <Card
                image={PplProgram}
                header="PPL"
                dis_price="12.99$"
                price="17.99$"
                iconOne={<StarFull />}
                iconTwo={<StarFull />}
                iconThree={<StarEmpty />}
                description="Orta ve ileri sporcular için hipertrofi programı."
                id="ppl"
              />
              <Card
                image={BeginnerProgram}
                header="Full Body"
                dis_price="12.99$"
                price="17.99$"
                iconOne={<StarEmpty />}
                iconTwo={<StarEmpty />}
                iconThree={<StarEmpty />}
                description="Spora yeni başlayanlar için tüm vücut programı."
                id="fullBody"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="filler_text program">
        <div className="container">
          <h2>Hoş Geldiniz!</h2>
          <p>
            Sağlıklı bir yaşam tarzına adım atmak veya mevcut seviyeni bir üst
            noktaya taşımak için doğru yerdesin! <i>Fit Life</i>, sana en uygun
            antrenman programlarını sunarak gelişimini en verimli şekilde
            destekler.
          </p>
          <p>
            İster güçlenmek, ister kas kütleni artırmak ya da sadece daha aktif
            bir yaşam sürmek iste, burada ihtiyacına yönelik çözümler
            bulacaksın. Kendi seviyene ve hedeflerine uygun antrenman
            programlarını seçerek en etkili şekilde ilerleyebilir, gelişimini
            bilimsel verilerle takip edebilirsin. Unutma, sürdürülebilir bir
            antrenman ve doğru stratejilerle her geçen gün daha iyi olacaksın!
          </p>

          <h3>Neden Bizimle Çalışmalısın?</h3>
          <ol>
            <li>
              <span className="highlight">Bilimsel Temelli Programlar</span> –
              Antrenman planlarımız spor bilimine dayalıdır ve maksimum verim
              alman için hazırlanmıştır.
            </li>
            <li>
              <span className="highlight">Kişiselleştirilmiş Yaklaşım</span> –
              Yeni başlayanlardan profesyonellere kadar herkes için uygun
              seçenekler bulunur.
            </li>
            <li>
              <span className="highlight">Etkili Hesaplayıcılar</span> – 1RM
              hesaplayıcı, kalori ihtiyacı belirleyici gibi araçlarımız
              sayesinde ilerlemeni en iyi şekilde planlayabilirsin.
            </li>
            <li>
              <span className="highlight">Motivasyon ve Takip</span> – Sürecin
              boyunca sana rehberlik eden araçlarla gelişimini izleyebilir,
              motivasyonunu kaybetmeden ilerleyebilirsin.
            </li>
          </ol>

          <h3>Danışmanlık Süreci</h3>
          <p>
            Unutma, sürdürülebilir gelişim için sadece çalışmak yetmez; doğru
            stratejilerle ilerlemek gerekir. Hedeflerine ulaşmak için{" "}
            <i>en iyi rehberliği</i> burada bulacaksın! Başarıya giden yolda
            yalnız değilsin. Kişisel antrenman programlarından beslenme
            önerilerine kadar her aşamada sana destek oluyoruz. Danışmanlık
            sürecimiz, ihtiyaçlarına göre özel olarak şekillendirilir ve
            ilerlemeni en verimli şekilde takip etmeni sağlar.
          </p>

          <h3>Gelişimini Nasıl Takip Edebilirsin?</h3>
          <ul>
            <li>
              <span className="highlight">
                1RM (Maksimum Ağırlık) Hesaplayıcı
              </span>{" "}
              – Çalışma setlerini en iyi şekilde belirleyerek doğru yüklemeler
              yapmanı sağlar.
            </li>
            <li>
              <span className="highlight">Kalori İhtiyacı Hesaplayıcı</span> –
              Günlük enerji ihtiyacını ve beslenme planını oluşturmanda yardımcı
              olur.
            </li>
            <li>
              <span className="highlight">Antrenman Takip Sistemi</span> –
              Programlarını düzenli olarak takip ederek gelişimini
              görselleştirmeni ve eksiklerini fark etmeni sağlar.
            </li>
          </ul>

          <p>
            Antrenman sürecinde gelişimini takip etmek, motivasyonunu artırmanın
            ve hedeflerine ulaşmanın en etkili yollarından biridir. Güç
            artışını, kas kütlesindeki değişimi veya kondisyon seviyeni ölçmek
            için belirli aralıklarla testler yapabilir ve istatistiklerini kayıt
            altına alabilirsin. Bu sayede hangi antrenmanların senin için daha
            verimli olduğunu anlayabilir ve programında gerekli ayarlamaları
            yapabilirsin.
          </p>

          <p className="annotation">
            Unutma! En iyi sonuçları almak için tutarlı olmalısın. Haftada en az
            3-4 gün düzenli antrenman yaparak ve dengeli beslenerek hedeflerine
            daha hızlı ulaşabilirsin.
          </p>

          <p>
            Ayrıca, yalnızca fiziksel değişimleri değil, performansını da
            değerlendirmek önemlidir. Setler ve tekrarlar sırasında nasıl
            hissettiğin, toparlanma süren ve günlük enerjin gibi faktörler de
            gelişiminin önemli göstergeleridir. Sürecini detaylı bir şekilde
            analiz ettiğinde, uzun vadede çok daha iyi sonuçlar elde
            edebilirsin.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
