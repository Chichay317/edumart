import Link from "next/link";
import Header from "../../components/header/Header";
import Slider from "../../components/slider/Slider";
import Footer from "../../components/footer/Footer";
import { useSelector } from "react-redux";
import HomePageIndex from "./home";

export default function Page() {
  const userInfo = useSelector((state: any) => state.shopper.userInfo);

  return (
    <>
      {!userInfo && <Slider />}
      {userInfo && <HomePageIndex />}
      <Footer />
    </>
  );
}
