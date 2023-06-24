"use client";
import React, { useEffect, useState } from "react";
import styles from "./page.module.css";
import useSWR from "swr";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import ImageComponent from "@/components/ImageComponent/ImageComponent";

const UrunEkle = () => {
  const [base64Image, setBase64Image] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const session = useSession();

  const router = useRouter();

  //NEW WAY TO FETCH DATA
  const fetcher = (...args) => fetch(...args).then((res) => res.json());

  const { data, mutate, error, isLoading } = useSWR(
    `/api/urun?username=${session?.data?.user.name}`,
    fetcher
  );

  if (session.status === "loading") {
    return <p>Loading...</p>;
  }

  if (session.status === "unauthenticated") {
    router?.push("/dashboard/login");
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const title = e.target[0].value;
    const desc = e.target[1].value;
    const img = e.target[2].files[0];
    const cat = e.target[3].value;
    const context = e.target[4].value;

    if (img) {
      if (img.type === "image/png") {
        const reader = new FileReader();
        reader.onloadend = async () => {
          const base64String = reader.result.split(";base64,")[1];
          setSelectedFile(base64String);

          try {
            await fetch("/api/urun", {
              method: "POST",
              body: JSON.stringify({
                title,
                desc,
                img: base64String,
                context,
                cat,
                username: session.data.user.name,
              }),
            });
            mutate();
            e.target.reset();
          } catch (err) {
            console.log(err);
          }
        };
        reader.readAsDataURL(img);
      } else {
        console.error("Geçersiz dosya formatı."); // Geçersiz dosya formatı hatası
      }
    } else {
      console.error("Resim seçilmedi."); // Resim seçilmedi hatası
    }
  };
  const handleDelete = async (id) => {
    try {
      await fetch(`/api/urun/${id}`, {
        method: "DELETE",
      });
      mutate();
    } catch (err) {
      console.log(err);
    }
  };

  if (session.status === "authenticated") {
    return (
      
      <div className={styles.container}>
        <div className={styles.posts}>
          {isLoading
            ? "loading"
            : data?.map((post) => (
                <div className={styles.post} key={post._id}>
                  <div className={styles.imgContainer}>
                    <ImageComponent className={styles.img} base64Image={post.img} />
                  </div>
                  <h2 className={styles.postTitle}>{post.title}</h2>
                  <span
                    className={styles.delete}
                    onClick={() => handleDelete(post._id)}
                  >
                    X
                  </span>
                </div>
              ))}
        </div>
        <form className={styles.new} onSubmit={handleSubmit}>
          <h1>Yeni Ürün Ekle</h1>
          <input type="text" placeholder="Title" className={styles.input} />
          <input type="text" placeholder="Desc" className={styles.input} />
          <input type="file" placeholder="Image" className={styles.input} />
          <select className={styles.select}>
            <option value="pospc">PosPc</option>
            <option value="yazici">Yazıcı</option>
            <option value="elterminali">El Terminali</option>
            <option value="barkod">Barkod Okuyucu</option>
            <option value="kagit">Termal Kağıt</option>
          </select>
          <textarea
            placeholder="Content"
            className={styles.textArea}
            cols="30"
            rows="10"
          ></textarea>
          <button className={styles.button}>Send</button>
        </form>
      </div>
    );
  }
};

export default UrunEkle;
