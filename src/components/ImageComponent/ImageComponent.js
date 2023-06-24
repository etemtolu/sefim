import React from "react";
import styles from "./image.module.css";
const ImageComponent = ({ base64Image }) => {
  return (
    <img
      className={styles.img}
      src={`data:image/png;base64, ${base64Image}`}
      alt="Görüntü"
    />
  );
};

export default ImageComponent;
