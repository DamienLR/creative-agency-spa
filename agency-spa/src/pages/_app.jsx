import "../styles/main.css";
import { Commissioner } from "next/font/google";

const commissioner = Commissioner({ subsets: ["latin"] });

export default function App({ Component, pageProps }) {
  return (
    <div className={commissioner.className}>
      <Component {...pageProps} />
    </div>
  );
}
