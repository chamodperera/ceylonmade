import styles from "../styles/SellerProfile.module.css";
import { SignOut, Swap } from "@phosphor-icons/react";

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
          <span>Go to marketplace</span>
          <button>
            <div className={styles.profileImage1}>
              <img
                src="https://images.unsplash.com/photo-1619551734325-81aaf323686c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1949&q=80"
                alt="shop_logo"
              />
            </div>
            <span>Shop Name</span>
          </button>
        </div>
      </div>

      <div className={styles.statSection}></div>

      <div className={styles.orderSection}></div>
    </div>
  );
};

export default SellerProfile;
