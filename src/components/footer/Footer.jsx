import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";
import Link from "next/link";
const Footer = () => {
  return (
    <div className={styles.container}>
      <div>©2023 Şefim. Her hakkı saklıdır.</div>
      <div>0212 294 22 95</div>
      <div>Etem Tolu</div>
      <div>
        <div className={styles.social}>
          <Image
            src="/1.png"
            width={15}
            height={15}
            className={styles.icon}
            alt="Etemtolu"
          />
          <Image
            src="/2.png"
            width={15}
            height={15}
            className={styles.icon}
            alt="Etemtolu"
          />
          <Image
            src="/3.png"
            width={15}
            height={15}
            className={styles.icon}
            alt="Etemtolu"
          />
          <Image
            src="/4.png"
            width={15}
            height={15}
            className={styles.icon}
            alt="Etemtolu"
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
