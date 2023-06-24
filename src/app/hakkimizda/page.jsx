import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Otomation from "public/otomation.webp";
const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src={Otomation} alt="" className={styles.img} />
        <div className={styles.imgText}>
          <h1 className={styles.imgTitle}>
            Şefim Restoran Otomasyon Sistemleri
          </h1> 
          <h2 className={styles.imgDesc}>
            Avrupa toptan kalite ödüllü restoran otomasyon sistemleri
          </h2>
        </div>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.item}>
          <h1 className={styles.title}>Biz Kimiz?</h1>
          <p className={styles.desc}>
            2016 yılından bu yana yalnızca gıda firmaları için, Satış ve Merkezi
            Yönetim Çözümleri üretiyoruz. İlk günkü heyecanımız ve yıllardır
            hizmet vermekte olduğumuz kullanıcılarımızın geri bildirimleri ile,
            her geçen gün biraz daha uzmanlaşıyor her geçen gün işimizi daha çok
            seviyoruz.
          </p>
          <span className={styles.text}>
            Başarılı olmanın tek yolunun “müşteri memnuniyetinden” geçtiğini
            biliyor ve tüm iş süreçlerimizi bu ilke çerçevesinde
            yapılandırıyoruz.
          </span>
        </div>
        <div className={styles.item}>
          <h1 className={styles.title}>Neden Biz?</h1>
          <p className={styles.desc}>
            - Önce müşteri felsefesini benimsememiz. Sizin işletmenizi analiz
            ederek tüm ihtiyaçlarınıza çözüm sunabilmemiz.
            <br />
            <br />
            - Yazılım ve donanım ürünlerinizi bütünleşik olarak sunmamız.
            <br />
            <br />
            - İşletmenizi ÖKC, e-Fatura,e-Arşiv, e-Defter gibi tüm e-Devlet
            entegrasyonlarını otomatik olarak yapmamız.
            <br />
            <br />- Bu sektörde binlerce başarılı projemiz ve referansımız
            olması.
          </p>
        </div>
      </div>
      <div className={styles.bottomDiv}>
        <h1 className={styles.title}>Pozitif Referanslarımız</h1>
      </div>
    </div>
  );
};

export default About;
