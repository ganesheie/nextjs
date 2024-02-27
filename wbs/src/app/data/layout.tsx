import type { Metadata } from "next";
import { Inter } from "next/font/google";
import 'bootstrap/dist/css/bootstrap.css';
import "./globals.css";
import Header from "./components/Header";
import SideBar from "./components/SiteBar";
import Footer from "./components/Footer";
const inter = Inter({ subsets: ["latin"] });




const Layout = ({ children , userRole} ) => {
  console.log("userRole in layout : ", userRole );
  return (
    <html lang="en">
      <body>
        <div className="app-container">
          <SideBar userRole = {userRole} />
          <div className="content">
            <Header />
            {children}
            <Footer/>
          </div>
        </div>
      </body>
    </html>
  );
}
export default Layout;





  

  
