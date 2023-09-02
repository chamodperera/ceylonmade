import { accountSignOut } from "../services/gAuth";
import Card from "../components/Card";
import styles from "../styles/Feed.module.css";

export default function Feed() {
  const data = [
    {
      type: "item",
      title: "Cloth handbags",
      image:
        "https://images.unsplash.com/photo-1644899391380-2ed8402a2be4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGNsb3RoJTIwaGFuZGJhZ3N8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
      price: "Around $60",
      stars: "8.7/10",
      comments: "98",
      isBlog: true,
      shop: "AwesomeSHOP",
    },
    {
      type: "blog",
      title: "Ancient Constructions",
      image:
        "https://images.unsplash.com/photo-1588598198321-9735fd52455b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      comments: "10",
      shop: "Nirmana",
    },
    {
      type: "blog",
      title: "Ancient Constructions",
      image:
        "https://images.unsplash.com/photo-1588598198321-9735fd52455b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      comments: "10",
      shop: "Nirmana",
    },
  ];
  return (
    <>
      <button onClick={accountSignOut}>Sign out</button>
      <div className={styles.container}>
        {data.map((item, n) =>
          item.type === "item" ? (
            <Card
              type={item.type}
              title={item.title}
              image={item.image}
              price={item.price}
              comments={item.comments}
              isBlog={item.isBlog}
              shop={item.shop}
              key={n}
            />
          ) : (
            <Card
              type={item.type}
              title={item.title}
              image={item.image}
              comments={item.comments}
              shop={item.shop}
              key={n}
            />
          )
        )}
      </div>
    </>
  );
}
