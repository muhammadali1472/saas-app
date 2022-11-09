import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import CopyComponent from "../components/CopyComponent";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>SaaS App</title>
        <meta
          name="description"
          content="Generate branding snippets for your product."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <CopyComponent />
    </div>
  );
};

export default Home;
