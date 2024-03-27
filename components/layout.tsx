
import Alert from "./alert";
// import Footer from "./footer";
import Meta from "./meta";
import  Footer from "../components/footer";
// import { Header} from "../components/Header/Header"
import {Header} from "./Header/Header"
import { motion } from "framer-motion";

export default function Layout({preview, className = "", children } ) {
  return (
    <>
      <Meta />
     
        {/* <Alert
         preview={preview}
          /> */}
           <Header />
        <main
          className={`main relative overflow-hidden  ${
              className && className
          }`}
          >
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

          {children}
  </motion.div>
       
    
      </main>
    
      <Footer/>

    
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
