import "../styles/form.css";

function ContactForm() {
  return (
    <div className="contact_form">
      <h2>Bize Ulaşın</h2>
      <form
        onSubmit={(e) => {
          const form = e.target;
          if (form.checkValidity()) {
            e.preventDefault();
            form.reset();
          }
        }}
      >
        <div className="name">
          <div className="input_group">
            <label>İsim</label>
            <input type="text" required />
          </div>
          <div className="input_group">
            <label>Soyisim</label>
            <input type="text" required />
          </div>
        </div>
        <div className="input_group">
          <label>Email</label>
          <input type="email" required />
        </div>
        <div className="input_group">
          <label>Mesajınız</label>
          <textarea rows="5"></textarea>
        </div>
        <button type="submit" className="btn form_btn">
          Gönder
        </button>
      </form>
    </div>
  );
}

export default ContactForm;
