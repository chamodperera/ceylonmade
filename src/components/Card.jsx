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
        <div className={styles.infoContainerItem}>
          <span className={styles.price}>{price}</span>
          <span className={styles.title}>{title}</span>
          <div className={styles.info}>
            <span className={styles.icons}>
              <ShootingStar size={28} color="#006b6c" weight="duotone" />
              <span>{stars}</span>
            </span>
            <span className={styles.icons}>
              <ChatTeardrop size={28} color="#006b6c" weight="duotone" />
              <span>{comments}</span>
            </span>
            <span className={styles.icons}>
              <BookmarkSimple size={28} color="#006b6c" weight="duotone" />
            </span>
            {isBlog && <span className={styles.blog}>Blog attached</span>}
          </div>
          <span className={styles.shop}>{shop}</span>
        </div>
      ) : (
        <div className={styles.infoContainerBlog}>
          <span className={styles.title}>{title}</span>
          <div className={styles.info}>
            <span className={styles.icons}>
              <ChatTeardrop size={28} color="#006b6c" weight="duotone" />
              <span>{comments}</span>
            </span>
            <span className={styles.icons}>
              <BookmarkSimple size={28} color="#006b6c" weight="duotone" />
            </span>
            <span className={styles.shop}>{shop}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Card;
