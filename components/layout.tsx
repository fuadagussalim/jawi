import { useRouter } from "next/router";

import Alert from "./alert";
// import Footer from "./footer";
import Meta from "./meta";
import Footer from "../components/footer";
// import { Header} from "../components/Header/Header"
import { Header } from "./Header/Header";
import { motion } from "framer-motion";
import { SpeedInsights } from "@vercel/speed-insights/next";

export default function Layout({ preview, className = "", children }) {
  const router = useRouter();

  // Check if the current route matches the desired patterns
  const isHideOnRoutes =
    router.pathname.startsWith("/posts/") ||
    router.pathname.startsWith("/gallery") ||
    router.pathname.startsWith("/portofolio/");

  return (
    <>
      <Meta />

      {/* <Alert
         preview={preview}
          /> */}
      <Header />
      <main
        className={`main relative scroll-smooth  ${
          className && className
        }`}
      >
        {/* <motion.div
    initial={{ x: 300, opacity: 0 }}
    animate={{ x: 0, opacity: 1 }}
    exit={{ x: 300, opacity: 0 }}
    transition={{
      type: "spring",
      stiffness: 260,
      damping: 20,
    }}
  > */}
        {/* <div className="h-[80px] md:hidden">

    </div> */}
        {/* 
{!isHideOnRoutes && (
          <motion.div
            initial={{ x: 300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 300, opacity: 0 }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20,
            }}
          >
            <div className="h-[80px] md:hidden"></div>
          </motion.div>
        )} */}
        <div className="h-[80px] md:hidden"></div>
        
    
        {children}
        {/* </motion.div> */}
      </main>

      <Footer />
    </>
  );
}

// import Alert from "./alert";
// // import Footer from "./footer";
// import Meta from "./meta";
// import { Footer } from "../components/Footer/Footer";
// import { Header } from "../components/Header/Header";

// export const Layout = ({ children, className = "" })=> {
//   return (
//       <main
//           className={`main relative overflow-hidden ${
//               className && className
//           }`}
//       >
//           <Header />
//           {children}
//           <Footer />
//       </main>
//   );
// };
