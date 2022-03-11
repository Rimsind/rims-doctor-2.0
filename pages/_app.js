import MainLayout from "components/layout/MainLayout";
// import "../public/assets/css/feathericon.min.css";
// import "../public/assets/plugins/morris/morris.css";
import "../public/assets/css/style.css";
import "../public/assets/css/bootstrap.min.css";
import "../public/assets/css/style2.css";
import "../public/assets/css/style3.css";
import GlobalProvider from "context";

export default function MyApp({ Component, pageProps }) {
  const getLayout =
    Component.getLayout ||
    ((page) => (
      <GlobalProvider>
        <MainLayout>{page}</MainLayout>
      </GlobalProvider>
    ));

  return getLayout(
    <GlobalProvider>
      <Component {...pageProps} />
    </GlobalProvider>
  );
}
