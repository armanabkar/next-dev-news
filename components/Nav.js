import Link from "next/link";
import navStyles from "../styles/Nav.module.css";
import { useRouter } from "next/router";

const Nav = () => {
  const router = useRouter();

  return (
    <nav className={navStyles.nav}>
      <ul>
        <li className={router.pathname == "/" ? navStyles.active : ""}>
          <Link href="/">Home</Link>
        </li>
        <li className={router.pathname == "/about" ? navStyles.active : ""}>
          <Link href="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
