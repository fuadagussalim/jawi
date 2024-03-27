import { Footer } from "../Footer";
import { Header } from "../Header";

export const Layout = ({ children, className = "" })=> {
    return (
        <main
            className={`main relative overflow-hidden ${
                className && className
            }`}
        >
          
            {children}
        
        </main>
    );
};
