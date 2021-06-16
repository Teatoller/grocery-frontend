import { useContext } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../styles/Header.module.css";
import AuthContext from "../context/AuthContext";

export const Header = () => {
  const router = useRouter();
  const isHome = router.pathname === "/";

  const goBack = (event) => {
    event.preventDefault();
    router.back();
  };

  const { user } = useContext(AuthContext);

  return (
    <div className={styles.nav}>
      {!isHome && (
        <div className={styles.back}>
          <a href="#" onClick={goBack}>
            &lt; Back
          </a>
        </div>
      )}
      <div className={styles.title}>
        <Link href="/">
          <a>
            <h1>Fruits &amp; Veggies</h1>
          </a>
        </Link>
      </div>

      <div className={styles.auth}>
        {user ? (
          <Link href="/account">
            {/* <a>{user.email}</a> */}
            <img src="/image_avatar.png" alt={user.email} />
          </Link>
        ) : (
          <Link href="/login">
            <a>Log in</a>
          </Link>
        )}
      </div>
    </div>
  );
};
export default Header;
