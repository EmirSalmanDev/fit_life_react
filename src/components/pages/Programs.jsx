import "../../styles/programs.css";
import "../../styles/calculatorPage.css";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const Programs = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      window.scrollTo({ top: 0, behavior: "instant" });

      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  }, [hash]);
  return (
    <div className="programs_page">
      <div className="programs_page_banner">
        <div className="banner_text">
          <h1 className="banner_header">Antrenman Programları</h1>
          <p className="banner_desc">
            Spor yolculuğuna yeni başlıyor ya da mevcut seviyeni ilerletmek
            istiyor olabilirsin. Burada yer alan antrenman programları, seni
            hedeflerine ulaştırmak için özenle hazırlandı.
          </p>
          <p className="banner_desc">
            Bilimsel temellere dayanan ve uzun vadeli sürdürülebilirliği
            amaçlayan bu programlar, her seviyeden sporcunun ihtiyaçlarını
            karşılayacak şekilde tasarlandı.
          </p>
        </div>
      </div>

      <div className="programs">
        <div className="program" id="fiveByFive">
          <div className="container">
            <h2>5x5 Fitness Antrenman Programı</h2>
            <p>
              5x5 antrenman programı, ağırlık antrenmanına bilimsel bir yaklaşım
              getirerek hem başlangıç seviyesindeki sporcuların hem de ileri
              düzey sporcuların <i>maksimum kuvvet</i> kazanmasını sağlayan
              etkili bir sistemdir. Programın temel mantığı, büyük kas
              gruplarına odaklanarak bileşik hareketlerle en yüksek verimi almak
              üzerine kuruludur.
            </p>
            <p>
              Bu program, en hızlı kas yapma, yağ yakma ve vücut geliştirme
              sonuçlarını sunduğu için son yıllarda Türkiye’de en çok uygulanan
              programlardan biri haline gelmiştir. Özellikle Ağırsağlam gibi
              spor odaklı topluluklar tarafından önerilmesi, programın
              yaygınlaşmasını hızlandırmış ve yüz binden fazla sporcunun bu
              sistemi uygulamasına öncülük etmiştir. Bugüne kadar programı
              deneyen birçok sporcu, sandıklarından çok daha hızlı ve etkili
              sonuçlar aldıklarını belirterek sosyal medya platformlarında
              deneyimlerini paylaşmaktadır.
            </p>
            <table style={{ width: "100%" }} className="program_table">
              <thead>
                <tr>
                  <th>Birinci Gün (Pazartesi)</th>
                  <th>İkinci Gün (Çarşamba)</th>
                  <th>Üçüncü Gün (Cuma)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Squat 5x5</td>
                  <td>Squat 5x5</td>
                  <td>Squat 5x5</td>
                </tr>
                <tr>
                  <td>Bench Press 5x5</td>
                  <td>Overhead Press 5x5</td>
                  <td>Bench Press 5x5</td>
                </tr>
                <tr>
                  <td>Ağırlıklı Barfiks 5x5</td>
                  <td>Deadlift 1x5</td>
                  <td>Bentover Row 5x5</td>
                </tr>
                <tr>
                  <td></td>
                  <td>Ağırlıklı Dips 5x5</td>
                  <td></td>
                </tr>
              </tbody>
            </table>

            <h3>Egzersiz Seçimi ve Asistanlar</h3>
            <p>
              Mümkün olduğu kadar programın öğrencisi olmaya çalışın. Ancak:
            </p>
            <ol>
              <li>
                Squat yapmanız <i>mümkün değilse</i> Leg Press,
              </li>
              <li>Bench Press yapmanız mümkün değilse Dumbell Press,</li>
              <li>Ağırlıklı Barfiks mümkün değilse Lat Pulldown,</li>
              <li>
                Ağırlıklı Dips mümkün değilse Close Grip Bench Press
                yapabilirsiniz.
              </li>
            </ol>

            <h3>Nasıl Uygulanır?</h3>
            <ul>
              <li>
                Program haftada 3 gün, aralarda en az birer gün dinlenme ile
                uygulanmalı.
              </li>
              <li>
                5x5, 5 set 5 tekrar anlamına geliyor. 1x5 ise 1 set, 5 tekrar
                anlamına geliyor.
              </li>
              <li>
                Bu setler çalışma setleri, bunlardan önce normalden daha hafif
                ağırlıklarla 1-2 ısınma seti yapmalısınız. Antrenmanın en
                başında da genel bir ısınma yapmalısınız, bu da bu sayfanın alt
                kısmında egzersizlerle beraber bulunuyor.
              </li>
              <li>
                Setler arasında kendinizi hazır hissedene kadar (1 - 5 dakikaya
                kadar) dinlenebilirsiniz.
              </li>
              <li>
                Deadliftin sadece 1 set olması, sinir sistemini zorlayıcı bir
                egzersiz olmasından dolayıdır. 1 seti dahi efektiftir ve
                Deadliftin amaçlarını gerçekleştirir.
              </li>
            </ul>

            <h3>5x5 Güvenli Mi?</h3>
            <p>
              5x5 size makinelerden daha zor gibi gelebilir, fakat önemli olan
              temel egzersizleri serbest ağırlıklarla verimli şekilde öğrenerek
              spora başlamaktır.
            </p>
            <p>
              Eğer uzun süre bu egzersizleri güvenlik sebebiyle ertelediyseniz,
              hala birçok donanımdan eksiksiniz demektir. Dolayısıyla hala yeni
              başlamış sayılırsınız. Makineler bize öğretmez, yalnızca
              hatalarımızı yokmuş gibi gösterir. Bu da daha tehlikelidir.
            </p>

            <h3>Programda İlerleme ve Overload</h3>
            <ul>
              <li>
                <i>Programa başlayacağınız ağırlık</i> ilgili egzersiz için 12
                tekrar yapabildiğiniz, 5 tekrar için nispeten hafif bir ağırlık
                olmalı. Bu uzun vadede daha iyi ilerlemek için önemli.
              </li>
              <li>
                <i>Programın ilerleme şartı:</i> her egzersizde bir sonraki gün
                2,5 kg ekleyerek uygulanması gerekiyor. Örneğin Pazartesi günü
                Squat’ı 50 kg ile eksiksiz ve doğru formda uyguladıysanız,
                Çarşamba günü 52,5 kg ile uygulamalısınız.
              </li>
              <li>
                Diğerlerinden farklı olarak Deadliftte artış 2,5 kg değil, 5 kg
                olmalıdır. Yani eğer eksiksiz ve doğru formda tamamlandı ise,
                bir sonraki hafta 5 kg artırılmalıdır.
              </li>
              <li>
                Eğer salonunuzda haltere eklenecek 1,25 kg lik plaka yoksa
                (toplamda 2,5 kg artırmak için); satın almaya çalışın, ya da en
                küçük hangi plaka varsa onu ekleyin (örneğin toplamda 5 kg
                artırın).
              </li>
            </ul>

            <p className="annotation">
              Ağırlık 3 defa üst üste artmıyorsa, ilgili egzersiz için ağırlığı
              birazcık azaltın. Örneğin Squat’ta 3 antrenman üst üste 80 kg de
              takıldıysanız ve artırmak için gerekenleri sağlayamıyorsanız; 70
              kg’ye düşürüp tekrar artışa devam edin. Normal şekilde ilerleyen
              egzersizlerde aynen devam edin.
            </p>

            <h3>5x5 Ne Zaman Bırakılmalı?</h3>
            <p>
              5x5 bir süre sonra çok zor bir program haline gelecek.
              Ağırlıklarınız artık haftada 2-3 kere artmayacak.
            </p>
            <p>
              Ağırlık artışı ile progressive overload’ın devam etmesi için daha
              farklı bir programlama gerekecek. Güçsüz yanlarınız kendini
              gösterecek. Örnek olarak Bench pressinizi arttırmak için arka
              kolunuzu güçlendirmeniz, Squatınızı arttırmak için kalçanızı
              güçlendirmeniz gerekecek.
            </p>
          </div>
        </div>

        <div className="program" id="ppl">
          <div className="container">
            <h2>Push Pull Legs Antrenman Programı</h2>
            <p>
              Push Pull Legs antrenman programı, kas gruplarını hareket
              kalıplarına göre düzenli bir şekilde bölümlendirerek vücudunuzu en
              verimli biçimde çalıştırmayı amaçlayan popüler bir sistemdir.
              Özellikle <i>kas kütlesi kazanmak</i> ve genel vücut gücünü
              artırmak isteyen sporcular arasında son yıllarda yaygınlaşmıştır.
              Tıpkı 5x5 gibi PPL de temel bileşik egzersizlere odaklanır, ancak
              program yapısı sayesinde farklı kas gruplarını ayrı günlerde hedef
              alarak daha fazla hacim ve yoğunluk sunar.
            </p>

            <table style={{ width: "100%" }} className="program_table">
              <thead>
                <tr>
                  <th>Birinci Gün (A)</th>
                  <th>İkinci Gün (B)</th>
                  <th>Üçüncü Gün (C)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Bench Press 4x6-8</td>
                  <td>Lat Pulldown 4x8-10</td>
                  <td>Squat 4x8-10</td>
                </tr>
                <tr>
                  <td>Incline Dumbell Press 3x6-8</td>
                  <td>Barbell Row 4x8-10</td>
                  <td>Leg Press 3x8-10</td>
                </tr>
                <tr>
                  <td>Cable Cross 3x12-15</td>
                  <td>Cable Row 3x12-15</td>
                  <td>Leg Curl 4x12-15</td>
                </tr>
                <tr>
                  <td>Overhead Press 4x8-10</td>
                  <td>Rope Pullover 3x12-15</td>
                  <td>Calf Raise 4x12-15</td>
                </tr>
                <tr>
                  <td>Lateral Raise 4x12-15</td>
                  <td>Barbell Curl 4x8-10</td>
                  <td></td>
                </tr>
                <tr>
                  <td>Rear Delt 3x-12-15</td>
                  <td>Dumbell Curl 4x8-10</td>
                  <td></td>
                </tr>
                <tr>
                  <td>Triceps Pushdown 4x8-10</td>
                  <td></td>
                  <td></td>
                </tr>
              </tbody>
            </table>

            <h3>Nasıl Uygulanır?</h3>
            <ul>
              <li>
                Programı <i>Push-Pull-Legs-Rest</i> döngüsünde
                kullanabilirsiniz.
              </li>
              <li>
                Setler arasında 1-2 dakika dinlenmek, kasların kısmen
                toparlanması için yeterlidir. Daha ağır bileşik hareketlerde
                (örneğin Squat, Deadlift) 2-3 dakika dinlenebilirsin.
              </li>
              <li>
                Özellikle bileşik egzersizlerde sakatlık riskini azaltmak için
                1-2 hafif ısınma seti yapmayı ihmal etme.
              </li>
              <li>
                Setler arasında kendinizi hazır hissedene kadar (1 - 5 dakikaya
                kadar) dinlenebilirsiniz.
              </li>
              <li>
                Deadliftin sadece 1 set olması, sinir sistemini zorlayıcı bir
                egzersiz olmasından dolayıdır. 1 seti dahi efektiftir ve
                Deadliftin amaçlarını gerçekleştirir.
              </li>
            </ul>

            <h3>Egzersiz Seçimi ve Asistanlar</h3>
            <ol>
              <li>
                Squat yapmanız <i>mümkün değilse</i> Leg Press,
              </li>
              <li>Bench Press yapmanız mümkün değilse Dumbell Press,</li>
              <li>Overhead Press mümkün değilse Makine Press,</li>
              <li>Barbell Row mümkün değilse Makine Row,</li>
              <li>Lat Pulldown mümkün değilse Barfiks yapabilirsiniz.</li>
            </ol>

            <h3>Programda İlerleme ve Overload</h3>
            <ul>
              <li>
                Kaldırdığın ağırlığı her hafta veya iki haftada bir küçük
                miktarlarda artırmaya çalış. Örneğin 2,5 kg’lık eklemeler
                yaparak ilerleyebilirsin.
              </li>
              <li>
                Tekrar veya Set Artışı: Ağırlığı artıramadığın durumlarda aynı
                ağırlıkla tekrar veya set sayısını yükseltip sonrasında tekrar
                ağırlık eklemeyi deneyebilirsin.
              </li>
            </ul>

            <p className="annotation">
              Form bozulmadan ağırlık artırmak çok önemlidir. Eğer formun
              bozuluyorsa, önce egzersizi doğru teknikle uyguladığından emin ol.
              Doğru form seni sakatlıktan koruyan en önemli faktördür.
            </p>

            <h3>PPL’de Başarı İçin Kritik Faktörler</h3>
            <p>
              <i>Beslenme</i> başarıya giden adımlarda en önemlilerindendir. Kas
              gelişimi için vücut ağırlığının her bir kilosu başına günlük
              1.6-2.2 gram protein alman önerilir. Ağır antrenmanlar için
              enerjiyi karbonhidratlardan, hormon ve hücre sağlığı için gerekli
              besinleri yağlardan sağlaman gerekir.
            </p>
            <p>
              <i>Uyku ve dinlenme</i> olmadan kas gelişimi olmaz. Kaslar
              antrenman sırasında değil, dinlenme ve uyku esnasında gelişir.
              Günde 7-9 saat kaliteli uyku almaya çalış. Vücudunun toparlanması
              için antrenmansız günler önemlidir. Kaslar ve sinir sistemi bu
              dönemde yenilenir.
            </p>

            <p>
              Bu programı spor hayatınız boyunca değiştirmeden
              uygulayabilirsiniz.
            </p>
          </div>
        </div>

        <div className="program" id="fullBody">
          <div className="container">
            <h2>Full Body Antrenman Programı</h2>
            <p>
              Full Body antrenman programı, her antrenman seansında tüm vücut
              kas gruplarını çalıştırarak <i>kuvvet ve kas kütlesi</i>{" "}
              gelişimini destekleyen popüler bir sistemdir. Özellikle spora yeni
              başlayanlar veya sınırlı vakti olan kişiler için ideal olan bu
              program, temel bileşik egzersizlere odaklanarak etkili ve pratik
              bir çözüm sunar. 5x5 ve Push Pull Legs (PPL) gibi sistemlerden
              farklı olarak, Full Body’de tüm kas grupları tek bir seansta hedef
              alınır.
            </p>
            <table style={{ width: "100%" }} className="program_table">
              <thead>
                <tr>
                  <th>Birinci Gün (Pazartesi)</th>
                  <th>İkinci Gün (Çarşamba)</th>
                  <th>Üçüncü Gün (Cuma)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Squat 4x6</td>
                  <td>Deadlift 3x5</td>
                  <td>Front Squat 3x8</td>
                </tr>
                <tr>
                  <td>Bench Press 4x6</td>
                  <td>Barfiks 4x8</td>
                  <td>Dips 4x8 </td>
                </tr>
                <tr>
                  <td>Bent Over Row 4x8 </td>
                  <td>Dumbbell Shoulder Press 3x10</td>
                  <td>Barbell Row 4x10</td>
                </tr>
                <tr>
                  <td>Romanian Deadlift 3x10</td>
                  <td>Walking Lunges 3x12</td>
                  <td>Bulgarian Split Squat 3x10</td>
                </tr>
                <tr>
                  <td>Hanging Leg Raise 3x12</td>
                  <td>Plank 3x30sn</td>
                  <td>Hanging Knee Tucks 3x15</td>
                </tr>
              </tbody>
            </table>
            <p>
              Squat, Bench Press, Deadlift, Overhead Press ve Row gibi birden
              fazla kas grubunu aynı anda çalıştıran egzersizler, Full Body’nin
              omurgasını oluşturur. İleri seviye programlara geçmeden önce genel
              vücut kuvvetini arttırıp, hareket mekanizmalarını kavramak çok
              önemlidir.
            </p>

            <h3>Nasıl Uygulanır?</h3>
            <ul>
              <li>
                {" "}
                Genellikle 3-4 set x 8-12 tekrar aralığı, kas hipertrofisi için
                uygundur. Yeni başlayanlar daha düşük set/tekrar sayısıyla
                başlayıp zamanla artırabilir.
              </li>
              <li>
                Özellikle bileşik egzersizlerde sakatlık riskini azaltmak için
                1-2 hafif ısınma seti yapmayı ihmal etme.
              </li>
              <li>
                Büyük kas gruplarını hedefleyen hareketlerde 2-3 dakika, daha
                küçük kas gruplarını veya izolasyon hareketlerini hedefleyen
                egzersizlerde 1-2 dakika dinlenebilirsin.
              </li>
            </ul>

            <h3>Egzersiz Seçimi ve Asistanlar</h3>
            <p>
              Bu programda egzersizleri değiştirmeden uygulamanız tavsiye
              edilir. Ancak imkanlarınız el vermiyor ise:
            </p>
            <ol>
              <li>
                Squat yapmanız <i>mümkün değilse</i> Leg Press,
              </li>
              <li>Bench Press yapmanız mümkün değilse Dumbell Press,</li>
              <li>Barfiks mümkün değilse Lat Pulldown,</li>
              <li>
                Dips mümkün değilse Close Grip Bench Press yapabilirsiniz.
              </li>
            </ol>

            <h3>Programda İlerleme ve Overload</h3>
            <ul>
              <li>
                Her antrenmanda veya haftada bir kez, kaldırdığın ağırlığı küçük
                artışlarla (2,5 kg gibi) yükseltmeye çalış. Ağırlığı
                artıramadığın dönemlerde, aynı ağırlıkla birkaç tekrar veya bir
                set daha eklemeyi deneyebilirsin.
              </li>
              <li>
                Üç antrenman üst üste aynı ağırlıkta takılıp form bozuluyorsa,{" "}
                <i>plato</i> durumundan kurtulmak için bir miktar geri çekilip
                (örneğin %10 azaltarak) tekrar ilerlemeye başla.
              </li>
            </ul>

            <p className="annotation">
              Yorulmak ve terlemek iyi bir antrenman anlamına gelmez, haftadan
              haftaya güçlenmek, daha ağır kaldırmak veya daha çok tekrar
              yapabilmek gelir.
            </p>

            <h3>Ne Zaman Farklı Bir Programa Geçmelisin?</h3>
            <p>
              Full Body, özellikle başlangıç seviye sporcular için en ideal
              programlardan biridir. Ancak zamanla:
            </p>
            <ul>
              <li>
                Haftada 3 günü yetersiz bulup daha fazla antrenman yapmak
                isteyebilirsin.
              </li>
              <li>
                Bench Press, Squat veya Deadlift gibi <i>temel hareketlerde</i>
                gelişimin durduğunda, daha spesifik (örneğin Upper/Lower veya
                Push Pull Legs) bölünmüş programlara geçerek farklı antrenman
                hacimleri deneyebilirsin.
              </li>
            </ul>

            <h3>Sonuç: Full Body ile Etkili ve Dengeli Gelişim</h3>
            <p>
              Full Body Antrenman Programı, her seferinde tüm vücut kas
              gruplarını çalıştırarak kuvvet ve kas kütlesi gelişimini
              hızlandırır. Özellikle spora yeni başlayanlar veya haftada sınırlı
              vakti olanlar için mükemmel bir seçimdir. Temel bileşik
              egzersizler, progressive overload ve düzenli beslenme-dinlenme ile
              desteklendiğinde kısa sürede gözle görülür sonuçlar elde
              edebilirsin.
            </p>
            <p>
              Unutma, hangi programı uygularsan uygula, istikrar ve doğru teknik
              başarının anahtarıdır. Full Body rutini ile güçlü bir temel
              oluşturduktan sonra, daha ileri seviyede farklı programlara
              geçerek ilerlemeni sürdürebilirsin. Şimdiden iyi antrenmanlar!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
