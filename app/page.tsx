import Navbar from "@/components/navbar";
//import { auth } from "@clerk/nextjs/server";

const Home = async () => {
  //const { userId } = await auth();
  //if (!userId) {
  // redirect("/login");
  // }
  return <Navbar />;
};
export default Home;
