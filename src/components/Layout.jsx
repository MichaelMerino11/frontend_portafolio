import Header from "./Header";
import Footer from "./Footer";
import BackButton from "./BackButton";

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Header />
      <BackButton />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
