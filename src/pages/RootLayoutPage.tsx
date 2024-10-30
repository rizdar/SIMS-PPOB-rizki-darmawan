import { Outlet } from "react-router-dom";
import Navbar from "../components/navigation/Navbar";

export default function RootLayoutPage() {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
    </>
  );
}

// <Box paddingX={10}>
//   <Navbar />
//   <ProfileBanner />
//   <Services />
//   <SliderBanner />
// </Box>
