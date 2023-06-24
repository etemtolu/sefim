"use client";
import React from "react";
import styles from "./page.module.css";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const Dashboard = () => {
  const session = useSession();

  const router = useRouter();

  if (session.status === "loading") {
    return <p className={styles.loading}>Loading...</p>;
  }

  if (session.status === "unauthenticated") {
    router?.push("/dashboard/login");
  }


  if (session.status === "authenticated") {
    return (
      <div className={styles.container}>
        <h1>Yönetim Paneli</h1>
        <div className={styles.buttondiv}>
        <Link href="/dashboard/cozum"><button className={styles.button}>Çözüm Ekle</button></Link>
        <Link href="/dashboard/urun"><button className={styles.button}>Ürün Ekle</button></Link>
        </div>
      </div>
    );
  }
};

export default Dashboard;