import { GlobalProvider } from "@/contexts/GlobalContext";
import { UserProvider } from "@/contexts/UserContext";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import type { AppProps } from "next/app";
import { ContactProvider } from "@/contexts/ContactContext";
import Loading from "@/components/Loading";
import Options from "@/components/Options";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <GlobalProvider>
      <UserProvider>
        <ContactProvider>
          <Component {...pageProps} />
          <ToastContainer />
          <Options />
          <Loading />
        </ContactProvider>
      </UserProvider>
    </GlobalProvider>
  );
}
