import React from "react";
import styles from "../styles/Contact.module.scss";

const Contact = () => {
  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.container}>
        <h2>Contacto</h2>
        <form>
          <div className={styles.formGroup}>
            <label htmlFor="name">Nombre</label>
            <input type="text" id="name" placeholder="Tu nombre" />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Tu email" />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="message">Mensaje</label>
            <textarea id="message" placeholder="Tu mensaje"></textarea>
          </div>
          <button type="submit">Enviar Mensaje</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
