import PageMeta from "../components/PageMeta";
import Loader from "../components/Loader/Loader";
import Home from "../components/Home/Home";
import siteData from "../data/siteData";

export default function HomePage() {
  return (
    <>
      <PageMeta title={`${siteData.brand.name} | ${siteData.brand.tagline}`} />
      <Loader />
      <Home />
    </>
  );
}
