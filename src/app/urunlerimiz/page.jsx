import React from "react";
import styles from "./page.module.css";
import Link from "next/link";
import Image from "next/image";
import Tysso from "public/tysso.png"
import Sam4s from "public/sam4s.png"
const Urunlerimiz = () => {
  return <div className={styles.container}>
    <h1 className={styles.selectTitle}>Ürünlerimize Göz Atın</h1>
    <div className={styles.items}>
      <Link href="/" className={styles.item}>
        <Image src={Tysso} className={styles.img} fill={true}  alt="" />
        <span className={styles.title}>
          Dokunmatik Pos 
        </span>
      </Link>
      <Link href="/" className={styles.item}>
      <Image src={Sam4s} className={styles.img} fill={true}  alt="" />
        <span className={styles.title}>
          Termal Yazıcılar
        </span>
      </Link>
      <Link href="/" className={styles.item}>
        <span className={styles.title}>
          El Terminalleri
        </span>
      </Link>
      <Link href="/" className={styles.item}>
        <span className={styles.title}>
          Barkod Okuyucular
        </span>
      </Link>
      <Link href="/" className={styles.item}>
        <span className={styles.title}>
          Termal Kağıtlar
        </span>
      </Link>
    </div>
  </div>;
};

export default Urunlerimiz;
