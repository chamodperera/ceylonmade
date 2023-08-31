import styles from "../styles/SellerProfile.module.css";
import { SignOut, Swap, ChartLine, CaretRight } from "@phosphor-icons/react";

const SellerProfile = () => {
  return (
    <div className={styles.bg}>
      <div className={styles.topContainer}>
        <div className={styles.profileTag}>
          <div className={styles.profileImage}>
            <img
              src="https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              alt="seller_profile_pic"
            />
          </div>
          <div className={styles.profileInfo}>
            <span style={{ fontSize: "2em", lineHeight: "1em" }}>
              Customer's Name
            </span>
            <span>Buyer</span>
            <div className={styles.buttonSet1}>
              <button>
                <Swap size={24} color="#ffffff" weight="duotone" />
                Switch to Buyer
              </button>
              <button>
                <SignOut size={24} color="#ffffff" weight="duotone" />
                Sign Out
              </button>
            </div>
          </div>
        </div>
        <div className={styles.headingRight}>
          <span style={{ marginRight: "0.7em", fontWeight: 450 }}>
            Go to marketplace
          </span>
          <button>
            <div className={styles.profileImage1}>
              <img
                src="https://images.unsplash.com/photo-1619551734325-81aaf323686c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1949&q=80"
                alt="shop_logo"
              />
            </div>
            <span style={{ fontSize: "1.2em" }}>Shop Name </span>
          </button>
        </div>
      </div>

      <div className={styles.statSection}>
        <div className={styles.sHeading}>
          <span style={{ fontSize: "1.2em", fontWeight: 550 }}>
            Sales order summary
          </span>
          <span style={{ cursor: "pointer", color: "#006b6c" }}>
            <ChartLine size={28} color="#006b6c" weight="duotone" />
            View Statistics
          </span>
        </div>
        <div className={styles.info}>Statistics</div>
      </div>

      <div className={styles.orderSection}>
        <div className={styles.oHeading}>
          <span style={{ fontSize: "1.2em", fontWeight: 550 }}>
            Recent sales orders
          </span>
          <span style={{ color: "#006b6c", cursor: "pointer" }}>
            <CaretRight size={28} />
            View all orders
          </span>
        </div>
        <div className={styles.cardSection}>
          <span>Card 1</span>
          <span>Card 2</span>
          <span>Card 3</span>
        </div>
      </div>
    </div>
  );
};

export default SellerProfile;
