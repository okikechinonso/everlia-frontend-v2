import Head from "next/head";
import { ToastContainer } from "react-toastify";

//internal import
import Navbar from "@layout/navbar/Navbar";
import Footer from "@layout/footer/Footer";
import FooterTop from "@layout/footer/FooterTop";
import MobileFooter from "@layout/footer/MobileFooter";
import FeatureCard from "@component/feature-card/FeatureCard";

const Layout = ({ title, description, children }) => {
  return (
    <>
      <ToastContainer />
      <div className="font-sans">
        <Head>
          <title>
            {title
              ? `Everlia | ${title}`
              : "Everlia"}
          </title>
          {description && <meta name="description" content={description} />}
          <link ref="icon" href="/image.png" />
        </Head>
        <Navbar />
        <MobileFooter />
        <div className="bg-gray-50">{children}</div>
        <div className="w-full">
          <FooterTop />
          <div className="hidden relative lg:block mx-auto max-w-screen-2xl py-6 px-3 sm:px-10">
            <FeatureCard />
          </div>
          <hr className="hr-line"></hr>
          <div className="border-t border-gray-100 w-full">
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;
