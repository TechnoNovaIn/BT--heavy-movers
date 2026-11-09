import { useParams, Navigate } from "react-router-dom";
import PageMeta from "../components/PageMeta";
import Navbar from "../components/Home/sections/Navbar";
import Footer from "../components/Home/sections/Footer";
import CareersDetail from "../components/Careers/CareersDetail";
import siteData from "../data/siteData";

/**
 * CareerRolePage — the dynamic /careers/:slug route.
 *
 * In the Next.js version this data was resolved at build time via
 * getStaticProps/getStaticPaths. Since siteData is just a static JS
 * object bundled with the app either way, here we simply look the role
 * up on the client from the URL param. If it isn't found, redirect back
 * to the careers list (equivalent of the old `notFound: true`).
 */
export default function CareerRolePage() {
  const { brand, nav, careers } = siteData;
  const { slug } = useParams();
  const role = careers.roles.find((item) => item.slug === slug);

  if (!role) {
    return <Navigate to="/careers" replace />;
  }

  return (
    <>
      <PageMeta title={`${role.title} — Careers | ${brand.name}`} description={role.summary} />
      <Navbar brand={brand} links={nav} basePath="/" />
      <CareersDetail careers={careers} role={role} />
      <Footer brand={brand} links={nav} basePath="/" />
    </>
  );
}
