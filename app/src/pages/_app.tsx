import { GlobalProvider } from "@/contexts/GlobalContext";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <GlobalProvider>
      <Component {...pageProps} />
      <ToastContainer />
    </GlobalProvider>
  );
}
