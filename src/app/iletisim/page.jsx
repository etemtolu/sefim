import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Contact from "public/contact.png";
const Iletisim = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>İletişim</h1>
      <div className={styles.div}>
        <Image src={Contact} alt="" className={styles.img} />
        <form className={styles.form}>
          <input type="text" placeholder="Adınız" className={styles.input} />
          <input type="text" placeholder="İşletme İsmi" className={styles.input} />
          <input
            type="text"
            placeholder="Telefon Numaranız"
            className={styles.input}
          />
          <input
            type="email"
            placeholder="E-Posta Adresiniz"
            className={styles.input}
          />
          <textarea placeholder="Mesajınız" className={styles.textarea} />
          <button className={styles.button}>Gönder</button>
        </form>
      </div>
    </div>
  );
};

export default Iletisim;
