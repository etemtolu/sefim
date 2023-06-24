"use client";
import React from "react";
import styles from "./page.module.css";
import Tysso from "public/tysso.png";
import Image from "next/image";

const UrunCat = () => {
  return (
    <div className={styles.container}>
      <div>
        <h1>Urunlerimiz</h1>
      </div>
      <div className={styles.card}>
        <div className={styles.imgdiv}>
          <Image src={Tysso} alt="tysso" className={styles.img} />
        </div>
        <h2 className={styles.title}>
          TYSSO POP 950 Celeron/i3/i5 Dokunmatik Bilgisayar
        </h2>
        <p className={styles.desc}>
          ■ Intel® Core™ Celeron / i3 / i5 3320M, 2.6GHz
          <br />
          ■ 64GB SSD + DDRIII 4GB 1333MHz (MAX:16GB)
          <br />
          ■ (Opsiyonel : VFD & LCD Müşteri Göstergesi + Termal Yazıcı + Kart Okuyucu)
          <br />
          ■ Toza, Suya ve Darbeye Karşı Dayanıklı
          <br />
          ■ Performans POS
          <br />
          ■ FULL TRUE FLAT CAPASITIVE, MULTITOUCH SCREEN, IP 64 SERTİFİKALI
        </p>
      </div>
    </div>
  );
};

export default UrunCat;
