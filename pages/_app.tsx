import "../styles/globals.css";
import "../styles/header.css";
import "../styles/home.css";
import "../styles/login.css";
import type { AppProps } from "next/app";
import Layout from "../components/Layout";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}