import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Link from "next/link";
import ImageComponent from "@/components/ImageComponent/ImageComponent";

async function getCozums() {
  const res = await fetch("http://localhost:3000/api/cozum", {
    cache: "no-store",
  });
  console.log("Apiye İstek Atıldı");
  if (!res.ok) {
    throw new Error(res.statusText);
  }
  return res.json();
}

const CozumPage = async () => {
  const data = await getCozums();
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Çözümlerimiz</h1>
      {data.map((item) => (
        <div className={styles.item} key={item.id}>
          <h2 className={styles.itemTitle}>{item.title}</h2>
          <div className={styles.items}>
            <Link href="/" className={styles.items}>
              <p className={styles.itemDesc}>{item.desc}</p>
              <ImageComponent base64Image={item.img} />
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CozumPage;
