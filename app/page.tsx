import Navbar from "@/app/_components/navbar";
import SummaryCards from "./(home)/_components/summary-cards";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
//import { auth } from "@clerk/nextjs/server";

const Home = async () => {
  const { userId } = await auth();
  if (!userId) {
    redirect("/login");
  }
  return (
    <>
      <Navbar />
      <SummaryCards />
    </>
  );
};
export default Home;
