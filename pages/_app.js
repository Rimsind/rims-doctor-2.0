import MainLayout from "components/layout/MainLayout";
import "../public/assets/css/feathericon.min.css";
import "../public/assets/plugins/morris/morris.css";
import "../public/assets/css/style.css";
import "../public/assets/css/bootstrap.min.css";

function MyApp({ Component, pageProps }) {
  return (
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>
  );
}

export default MyApp;
