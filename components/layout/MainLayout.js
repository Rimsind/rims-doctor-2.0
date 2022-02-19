import Head from "next/head";
import Script from "next/script";
import { DoctorNavbar, Footer } from "components/common";
import { useAuth } from "context";
import useSWR from "swr";
import { apiUrl } from "config/api";
import { parseCookies } from "nookies";
import { useEffect, useState } from "react";

const MainLayout = ({ children }) => {
  const [token, setToken] = useState(null);
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const { token, user } = parseCookies();
    if (token && user) {
      setToken(token);
      const userData = JSON.parse(user);
      setCurrentUser(userData);
    }
  }, []);

  const { data, loading, error } = useSWR(
    `${apiUrl}/doctors/${currentUser?.profileId}`,
    async (url) => {
      const res = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const result = res.data;
      return result;
    }
  );

  if (!data) {
    return (
      <div>
        <h2>loading...</h2>
      </div>
    );
  }
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css"
        />
      </Head>
      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
        crossOrigin="anonymous"
      ></Script>
      <Script src="/assets/js/mediasliding.min.js"></Script>
      <div className="main-wrapper" id="main-wrapper">
        <DoctorNavbar />
        <main>{children}</main>
        <Footer />
      </div>
    </>
  );
};

export default MainLayout;
