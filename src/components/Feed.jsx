import Card from "./Card";
import styles from "../styles/Feed.module.css";
const Feed = () => {
  return (
    <div className={styles.container}>
      <Card
        type="blog"
        title="Ancient Constructions"
        image=""
        comments="10"
        shop="Nirmana"
      />
    </div>
  );
};

export default Feed;
