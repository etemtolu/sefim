import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "./page.module.css";
import Restaurant from "public/restaurant.png";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>İşletmeleriniz için en iyi çözümler</h1>
        <p className={styles.desc}>
          Çözüm odaklı çalışan ekiplerimizle birlikte sizlere objektif olarak ihtiyaçlarınız doğrultusunda en iyi çözümleri sunuyoruz.
        </p>
      </div>
      <div className={styles.item}>
        <Image src={Restaurant} alt="" className={styles.img} />
      </div>
    </div>
  );
}
