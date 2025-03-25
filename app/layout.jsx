import "@/assets/styles/globals.css";

export const metadata = {
  title: "Property Pulse",
  keywords: "Property, Real Estate, Buy, Sell, Rent, Property Pulse",
  description:
    "Property Pulse is a platform for buying, selling and renting properties",
};
const MainLayout = ({ children }) => {
  return (
    <html>
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
};

export default MainLayout;
