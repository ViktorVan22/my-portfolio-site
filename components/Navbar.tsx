import React, { useEffect, useState } from "react";
import styles from "../styles/Navbar.module.css";

function Navbar() {
  const [darkMode, setDarkMode] = useState(false);
  const [hide, setHide] = useState(false);
  const [toggleMenu, setToggleMenu] = useState(false);

  useEffect(() => {
    // 每次刷新回到页面顶部，而不是在上一次的滚动位置
    if (history.scrollRestoration) {
      history.scrollRestoration = "manual";
    }
  }, []);

  useEffect(() => {
    const hideNavMenu = () => {
      if (window.scrollY > 100) {
        setHide(true);
      } else {
        setHide(false);
      }
    };
    window.addEventListener("scroll", hideNavMenu);
    return () => window.removeEventListener("scroll", hideNavMenu);
  }, [hide, setHide]);

  const switchMode = () => {
    setDarkMode(!darkMode);
  };

  const locateTo = (url: string) => {
    window.open(url);
  };

  return (
    <nav className={styles.nav}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <a href="/" id={styles.home}>
            Viktor
          </a>
        </div>
        <div className={styles.nav_menu}>
          {hide ? (
            <></>
          ) : (
            <>
              <li className={styles.nav_option}>Blog</li>
              <li className={styles.nav_option}>Projects</li>
              <li className={styles.nav_option}>Resume</li>
              <li className={styles.nav_option}>
                <i
                  className={"iconfont icon-github " + styles.icon}
                  onClick={() => locateTo("https://github.com/ViktorVan22")}
                ></i>
              </li>
              <li className={styles.nav_option} onClick={switchMode}>
                {darkMode ? (
                  <i className="iconfont icon-moon"></i>
                ) : (
                  <i className="iconfont icon-sun"></i>
                )}
              </li>
            </>
          )}
        </div>
        <div
          className={styles.nav_menu_icon}
          onClick={() => {
            setToggleMenu(!toggleMenu);
          }}
        >
          <i className="iconfont icon-menu"></i>
          {toggleMenu && (
            <div className={styles.toggle_menu_container}>
              <div className={styles.toggle_menu_links}>
                <li className={styles.nav_menu_option}>Blog</li>
                <li className={styles.nav_menu_option}>Projects</li>
                <li className={styles.nav_menu_option}>Resume</li>
                <li className={styles.nav_menu_option}>
                  <i
                    className={"iconfont icon-github " + styles.icon}
                    onClick={() => locateTo("https://github.com/ViktorVan22")}
                  ></i>
                </li>
                <li className={styles.nav_menu_option} onClick={switchMode}>
                  {darkMode ? (
                    <i className="iconfont icon-moon"></i>
                  ) : (
                    <i className="iconfont icon-sun"></i>
                  )}
                </li>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
