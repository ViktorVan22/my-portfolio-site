import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <>
      <div className="navbar">导航栏</div>
      <div className="homepage-container">
        <header className="homepage-header">
          <h1>Viktor Zhao</h1>
        </header>
        <main className="homepage-main">
          <p>
            Hey, I am Viktor Zhao, a junior-level front-end engineer with less
            than a year work experience. Working hard towards becoming a
            fullstack engineer and a open sourceror.
          </p>
          <p>I have a bachelor degree on economics, majored in finance. </p>
          <p>
            Outside of programming, I enjoy playing badminton and traveling.{" "}
          </p>
          <p>
            Find me on{" "}
            <a href="https://github.com/ViktorVan22" target="_blank">
              <b>Github</b>
            </a>
          </p>
          <p>
            Mail me at&ensp;
            <a href="mailto:hello@viktorzhao.me">hello@viktorzhao.me</a>
          </p>
          <p>
            If you like my works, consider sponsoring me ...(some kind of
            sponsoring website, not yet)
          </p>
        </main>
        <footer className="homepage-footer">备案信息</footer>
      </div>
    </>
  );
};

export default Home;
