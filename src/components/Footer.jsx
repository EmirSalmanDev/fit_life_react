// import React from "react";
import "../styles/footer.css";
import "../../src/App.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="footer_column">
            <h4 className="footer_header">Fit Life Nedir?</h4>
            <p className="footer_text">
              Kilo vermek, kilo almak, kas yapmak ve yağ yakmak. Bunların
              hepsinin yolu doğru planlamadan geçer. Güzel bir vücuda sahip
              olmanız için ihtiyaç duyduğunuz bilgileri Fit Life'ta
              bulabilirsiniz.
            </p>
          </div>
          <div className="footer_column">
            <h4 className="footer_header">Bağlantılar</h4>
            <ul>
              <li>
                <a href="#">Hakkımızda</a>
              </li>
              <li>
                <a href="#">İletişim</a>
              </li>
              <li>
                <a href="#">Gizlilik Politikası</a>
              </li>
              <li>
                <a href="#">Kullanım Koşulları</a>
              </li>
            </ul>
          </div>
          <div className="footer_column">
            <h4 className="footer_header">Bizi Takip Et</h4>
            <div className="social_links">
              <div>
                <a href="#">
                  <FacebookIcon />
                </a>
                <a href="#">
                  <XIcon />
                </a>
              </div>
              <div>
                <a href="#">
                  <InstagramIcon />
                </a>
                <a href="#">
                  <LinkedInIcon />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright">
        <span>&copy; 2025 Fit Life | Her hakkı saklıdır.</span>
      </div>
    </div>
  );
};
