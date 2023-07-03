import { Head } from "$fresh/runtime.ts";
import FrontendMentorAttribution from "../components/FrontendMentorAttribution.tsx";
import MobileMenu from "../components/MobileMenu.tsx";
import IntroSectionWithDropdownNavigationIsland from "../islands/IntroSectionWithDropdownNavigationIsland.tsx";

export default function IntroSectionWithDropdownNavigation() {
  return (
    <>
      <Head>
        <link rel="stylesheet" href="/fonts/epilogue.css" />
        <title>Fresh App</title>
      </Head>
      <IntroSectionWithDropdownNavigationIsland />
      <FrontendMentorAttribution />
    </>
  );
}
