import styles from "../styles/Card.module.css";
import {
  ShootingStar,
  ChatTeardrop,
  BookmarkSimple,
} from "@phosphor-icons/react";

const Card = ({ type, title, image, price, stars, comments, isBlog, shop }) => {
  return (
    <div className={styles.container} style={{ backgroundImage: image }}>
      {type === "item" ? (
        <>
          <span className={styles.price}>{price}</span>
          <span className={styles.title}>{title}</span>
          <div className={styles.info}>
            <span>
              <ShootingStar size={32} color="#006b6c" weight="duotone" />
              <span>{stars}</span>
            </span>
            <span>
              <ChatTeardrop size={32} color="#006b6c" weight="duotone" />
              <span>{comments}</span>
            </span>
            <span>
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
            <span>
              <ChatTeardrop size={32} color="#006b6c" weight="duotone" />
              <span>{comments}</span>
            </span>
            <span>
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
