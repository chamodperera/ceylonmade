import styles from "../styles/Card.module.css";
import {
  ShootingStar,
  ChatTeardrop,
  BookmarkSimple,
} from "@phosphor-icons/react";

const Card = ({ type, title, image, price, stars, comments, isBlog, shop }) => {
  return (
    <div
      className={styles.container}
      style={{
        backgroundImage: `linear-gradient(
          0deg,
          #fff 0%,
          #fff 15.42%,
          rgba(255, 255, 255, 0) 80%
        ),url(${image})`,
      }}
    >
      {type === "item" ? (
        <>
          <span className={styles.price}>{price}</span>
          <span className={styles.title}>{title}</span>
          <div className={styles.info}>
            <span className={styles.icons}>
              <ShootingStar size={32} color="#006b6c" weight="duotone" />
              <span>{stars}</span>
            </span>
            <span className={styles.icons}>
              <ChatTeardrop size={32} color="#006b6c" weight="duotone" />
              <span>{comments}</span>
            </span>
            <span className={styles.icons}>
              <BookmarkSimple size={32} color="#006b6c" weight="duotone" />
            </span>
            {isBlog && <span>Blog attached</span>}
          </div>
          <span>{shop}</span>
        </>
      ) : (
        <>
          <span className={styles.title}>{title}</span>
          <div className={styles.info}>
            <span className={styles.icons}>
              <ChatTeardrop size={32} color="#006b6c" weight="duotone" />
              <span>{comments}</span>
            </span>
            <span className={styles.icons}>
              <BookmarkSimple size={32} color="#006b6c" weight="duotone" />
            </span>
            <span>{shop}</span>
          </div>
        </>
      )}
    </div>
  );
};

export default Card;
