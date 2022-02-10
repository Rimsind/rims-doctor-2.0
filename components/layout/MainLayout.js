import Head from "next/head";
import Script from "next/script";
import { DoctorNavbar, Footer } from "components/common";

const MainLayout = ({ children }) => {
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css"
        />
      </Head>
      <Script src="/assets/js/bootstrap.bundle.min.js"></Script>
      <Script src="/assets/js/sliding.min.js"></Script>
      <Script src="/assets/js/mediasliding.min.js"></Script>
      {/* <Script src="/assets/js/tab.js"></Script> */}
      <div className="main-wrapper" id="main-wrapper">
        <DoctorNavbar />
        <main>{children}</main>
        <Footer />
      </div>
    </>
  );
};

export default MainLayout;
