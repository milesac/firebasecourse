// Go back and add notes to all code detailing what it does and why it is needed, research react hooks, debounce
import "@/styles/globals.css";
import Navbar from '../components/Navbar';
import { Toaster } from "react-hot-toast";
import { UserContext } from "../lib/context";
import { useUserData } from "../lib/hooks";

function MyApp({ Component, pageProps }) {

  const {user, username} = useUserData();

  return (
    <UserContext.Provider value={{ user, username }}>
      <Navbar />
      <Component {...pageProps} />
      <Toaster/>
    </UserContext.Provider>
  );
}

export default MyApp;

