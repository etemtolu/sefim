"use client";
import Link from "next/link";
import React from "react";
import styles from "./navbar.module.css";
import Image from "next/image";
import logo from "public/logo_yesil.png";
import {signOut, signIn, useSession } from "next-auth/react";
const links = [
  {
    id: 1,
    title: "Ana Sayfa",
    url: "/",
  },
  {
    id: 2,
    title: "Çözümlerimiz",
    url: "/cozumlerimiz",
  },
  {
    id: 3,
    title: "Ürünlerimiz",
    url: "/urunlerimiz",
  },
  {
    id: 4,
    title: "Hakkımızda",
    url: "/hakkimizda",
  },
  {
    id: 5,
    title: "İletişim",
    url: "/iletisim",
  },
  {
    id: 6,
    title: "Dashboard",
    url: "/dashboard",
  },
];

const Navbar = () => {
  const session = useSession();
  return (
    <div className={styles.container}>
      <div className={styles.logodiv}>
        <Link href="/">
          <Image src={logo} alt="" className={styles.img} />
        </Link>
        <Link href="/" className={styles.logo}>
          şefim
        </Link>
      </div>
      <div className={styles.links}>
        {links.map((link) => (
          <Link key={link.id} href={link.url} className={styles.link}>
            {link.title}
          </Link>
        ))}
        {session.status === "authenticated" && (
          <button
            onClick={() => {
              signOut();
            }}
            className={styles.logout}
          >
            Logout
          </button>
        )}{session.status === "unauthenticated" && (
          <button
          onClick={() => {
            signIn();
            <Link href="/dashboard/login" />;
          }}
          className={styles.login}
        >
          Login
        </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
