import { FormEvent, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { WhatsappLogo, X } from "phosphor-react";
import { useTranslation } from "react-i18next";

import { Loading } from "../Loading";

import "../../styles/contact.scss";

export function Contact() {
  const { t } = useTranslation();
  const form = useRef<HTMLFormElement | null>(null);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const sendEmail = (e: FormEvent) => {
    e.preventDefault();

    if (!form.current) return;

    const isAnyEmptyInput =
      name.trim() === "" || email.trim() === "" || message.trim() === "";

    if (isAnyEmptyInput) {
      setError(t("contactForm.errorFiels"));
      return;
    }

    setLoading(true);

    emailjs
      .sendForm(
        "service_raimrgf",
        "template_qi8b2bx",
        form.current,
        "k-pOQCAg85h1Zsuv6"
      )
      .then(
        () => {
          setSuccess(t("contactForm.succes"));
          setName("");
          setEmail("");
          setMessage("");
        },
        (error) => {
          setError(t("contactForm.genericError"));
          console.log(error.text);
        }
      )
      .finally(() => setLoading(false));
  };

  return (
    <section id="contact" className="contact" aria-label="Seção Contato">
      <div className="container">
        <div className="blur-content" data-animate="bottom">
          <div
            className="section-title"
            aria-label="Título da Seção de Contato"
            data-animate="left"
          >
            <h2>{t("titles.contact")}</h2>
          </div>
          <div className="content" data-animate="bottom">
            <form ref={form} onSubmit={sendEmail}>
              <label>{t("contactForm.labels.name")}</label>
              <input
                type="text"
                name="user_name"
                onChange={(e) => setName(e.target.value)}
                value={name}
                placeholder={t("contactForm.placeholders.name")}
                required
              />
              <label>E-mail *</label>
              <input
                type="email"
                name="user_email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                placeholder={t("contactForm.placeholders.email")}
                required
              />
              <label>{t("contactForm.labels.message")}</label>
              <textarea
                name="message"
                onChange={(e) => setMessage(e.target.value)}
                value={message}
                placeholder={t("contactForm.placeholders.message")}
                maxLength={300}
                required
              />
              <button className="send-btn" type="submit">
                {loading ? <Loading /> : t("contactForm.button")}
              </button>
            </form>

            {error.length > 0 && (
              <div className="error">
                <p>{error}</p>
                <button onClick={() => setError("")}>
                  <X size={20} color="#e2555b" />
                </button>
              </div>
            )}
            {success.length > 0 && (
              <div className="success">
                <p>{success}</p>
                <button onClick={() => setSuccess("")}>
                  <X size={20} color="#4cbb17" />
                </button>
              </div>
            )}

            <span className="option">{t("contactOrLabel")}</span>

            <a
              className="whatsapp-btn"
              href="https://wa.me/5531998226668"
              target="_blank"
            >
              <WhatsappLogo size={64} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
