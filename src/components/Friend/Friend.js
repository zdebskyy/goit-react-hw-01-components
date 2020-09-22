import React from "react";
import styles from "./Friend.module.css";

export default function Friend({ avatar, name, isOnline }) {
  const friendStatus = isOnline ? styles.online : styles.offline;

  return (
    <>
      <span className={friendStatus}></span>
      <img className={styles.avatar} src={avatar} alt={name} width="48" />
      <p className={styles.name}>{name}</p>
    </>
  );
}
