import { FormEvent, useRef, useState } from "react";
import emailjs from "@emailjs/browser";

import "../../styles/contact.scss";
import { WhatsappLogo, X } from "phosphor-react";
import { Loading } from "../Loading";

export function Contact() {
  const form = useRef<HTMLFormElement | null>(null);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const sendEmail = (e: FormEvent) => {
    e.preventDefault();

    if (
      name.trim() === "" ||
      email.trim() === "" ||
      message.trim() === "" ||
      !form.current
    ) {
      setError("Preencha todos os campos!");
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
        (result) => {
          setName("");
          setEmail("");
          setMessage("");
          setSuccess("Mensagem enviada!");
          console.log(result.text);
        },
        (error) => {
          setError("Ocorreu um erro ao enviar a mensagem!");
          console.log(error.text);
        }
      )
      .finally(() => setLoading(false));
  };

  return (
    <section
      id="contact"
      className="contact"
      aria-label="Seção Contato"
      data-animate="animate"
    >
      <div className="container">
        <div
          className="section-title"
          aria-label="Título da Seção de Contato"
          data-animate="left"
        >
          <h2>Contato</h2>
        </div>
        <div className="content" data-animate="bottom">
          <form ref={form} onSubmit={(e) => sendEmail(e)}>
            <label>Nome *</label>
            <input
              type="text"
              name="user_name"
              onChange={(e) => setName(e.target.value)}
              value={name}
              placeholder="Digite seu nome"
              required
            />
            <label>E-mail *</label>
            <input
              type="email"
              name="user_email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              placeholder="Digite seu e-mail"
              required
            />
            <label>Mensagem *</label>
            <textarea
              name="message"
              onChange={(e) => setMessage(e.target.value)}
              value={message}
              placeholder="Digite a mensagem"
              maxLength={300}
              required
            />
            <button className="send-btn" type="submit">
              {loading ? <Loading /> : "Enviar"}
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
          <span className="option">ou</span>
          <a
            className="whatsapp-btn"
            href="https://wa.me/5531998226668"
            target="_blank"
          >
            <WhatsappLogo size={64} />
          </a>
        </div>
      </div>
    </section>
  );
}
