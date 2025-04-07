import "@/assets/styles/globals.css";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import AuthProvider from "@/hooks/AuthProvider";

export const metadata = {
  title: "Property Pulse",
  keywords: "Property, Real Estate, Buy, Sell, Rent, Property Pulse",
  description:
    "Property Pulse is a platform for buying, selling and renting properties",
};
const MainLayout = ({ children }) => {
  return (
    <AuthProvider>
      <html>
        <body>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </body>
      </html>
    </AuthProvider>
  );
};

export default MainLayout;
