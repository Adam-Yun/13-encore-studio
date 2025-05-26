import "./contact.css"

const Contact = () => {

  return ( 
    <div id="contact-tag" className="contact-container">
        <h2 className="contact-title">Contact Us!</h2>
        <ol className="contact-lists">
            <li className="contact-list">
              <i className="fa fa-instagram"></i>
            </li>

            <li className="contact-list">
              <i className="fa fa-facebook-square"></i>
            </li>
            <li className="contact-list">
              <i className="fa fa-whatsapp"></i>
            </li>
        </ol>
    </div>
  );
};

export default Contact;