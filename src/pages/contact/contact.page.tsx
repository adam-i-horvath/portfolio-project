import emailjs from 'emailjs-com';
import './contact.page.css';

import Swal from 'sweetalert2';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';

export const Contact = () => {
  document.documentElement.style.setProperty('--animate-duration', '1s');

  const sendEmail = (e: any) => {
    let inputNameValue = (
      document.getElementById('inputName') as HTMLInputElement
    ).value;

    let inputEmailValue = (
      document.getElementById('inputEmail') as HTMLInputElement
    ).value;

    let inputMessageValue = (
      document.getElementById('inputMessage') as HTMLInputElement
    ).value;

    if (inputNameValue.length === 0) {
      Swal.fire({
        text: 'Name is required!',
        icon: 'warning',
        confirmButtonText: 'OK',
        confirmButtonColor: '#090909',
        backdrop: `rgba(0,0,0,0.8)`,
        background: '#ffffff',
      });
      e.preventDefault();
    } else if (inputEmailValue.length === 0) {
      Swal.fire({
        text: 'The correct e-mail address is required!',
        icon: 'warning',
        confirmButtonText: 'OK',
        confirmButtonColor: '#090909',
        backdrop: `rgba(0,0,0,0.8)`,
        background: '#ffffff',
      });
      e.preventDefault();
    } else if (inputMessageValue.length === 0) {
      Swal.fire({
        text: 'The message is required!',
        icon: 'warning',
        confirmButtonText: 'OK',
        confirmButtonColor: '#090909',
        backdrop: `rgba(0,0,0,0.8)`,
        background: '#ffffff',
      });
      e.preventDefault();
    } else {
      Swal.fire({
        title: 'Sucess!',
        text: 'Message sent successfully.',
        icon: 'success',
        confirmButtonText: 'OK',
        confirmButtonColor: '#090909',
        backdrop: `rgba(0,0,0,0.8)`,
        background: '#ffffff',
      });

      emailjs
        .sendForm(
          process.env.REACT_APP_SERVICE,
          process.env.REACT_APP_TEMPLATE,
          e.target,
          process.env.REACT_APP_USER
        )
        .then(
          (result) => {},
          (error) => {
            Swal.fire({
              text: 'An error occurred while sending the message.',
              icon: 'error',
              confirmButtonText: 'OK',
              confirmButtonColor: '#090909',
              backdrop: `rgba(0,0,0,0.8)`,
              background: '#ffffff',
            });
          }
        );
      e.preventDefault();
      e.target.reset();
    }
  };

  return (
    <div className="contact">
      <h1 className="contact__title animate__animated animate__zoomIn">
        Contact me
      </h1>
      <AnimationOnScroll animateIn="animate__headShake">
        <div className="contact__content ">
          <form
            className="contact__form animate__animated animate__backInLeft animate__delay-1.2s"
            onSubmit={sendEmail}
          >
            <div className="contact__name">
              <input
                type="text"
                name="from_name"
                className="contact__name__input"
                id="inputName"
                placeholder="Name"
              />
            </div>
            <div className="contact__email">
              <input
                type="email"
                name="reply_to"
                className="contact__email__input"
                id="inputEmail"
                placeholder="Email"
              />
            </div>
            <div className="contact__message">
              <textarea
                name="message"
                className="contact__message__textarea"
                id="inputMessage"
                placeholder="Message"
              />
            </div>
            <div className="contact__submit">
              <button type="submit" className="contact__sendbutton">
                <span>Send</span>
              </button>
            </div>
          </form>
          <div className="contact__info animate__animated animate__backInRight animate__delay-1.2s">
            <span>
              If you have any questions drop me a message. Straight shot to my
              inbox:
            </span>
            <span>
              <a href="mailto:horvathadamistvan@protonmail.com">
                <MdOutlineKeyboardArrowRight />
                Click here
              </a>
            </span>
          </div>
        </div>
      </AnimationOnScroll>
    </div>
  );
};

export default Contact;
