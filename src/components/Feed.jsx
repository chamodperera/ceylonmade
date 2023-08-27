import Card from "./Card";
import styles from "../styles/Feed.module.css";
const Feed = () => {
  return (
    <div className={styles.container}>
      <Card
        type="blog"
        title="Ancient Constructions"
        image="https://images.unsplash.com/photo-1588598198321-9735fd52455b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
        comments="10"
        shop="Nirmana"
      />
    </div>
  );
};

export default Feed;
