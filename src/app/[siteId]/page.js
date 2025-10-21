// This is a Server Component responsible for fetching data.
import { allSiteData } from "../../data/allSiteData"; // This path is correct as it goes up to src, then down to data.
import MainPage from "../MainPage"; 
import { notFound } from "next/navigation";

// This function receives the 'siteId' from the URL parameters
export default function Page({ params }) {
  const { siteId } = params;

  // Find the corresponding site data from our centralized 'database'
  const siteData = allSiteData[siteId];

  // If no data is found for the given siteId, display a 404 error page
  if (!siteData) {
    notFound();
  }

  // If data is found, pass it as a prop to our reusable MainPage client component
  return <MainPage siteData={siteData} />;
}

// OPTIONAL BUT RECOMMENDED:
// This function tells Next.js which siteIds exist at build time,
// allowing it to pre-render these pages for better performance (Static Site Generation).
export async function generateStaticParams() {
  const siteIds = Object.keys(allSiteData);

  return siteIds.map((id) => ({
    siteId: id,
  }));
}
