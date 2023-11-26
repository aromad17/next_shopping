import Seo from "@/components/Seo";
import Slide from "@/components/main/Slide";
import Weekly from "@/components/main/Weekly";
import NewOne from "@/components/main/NewOne";
import Business from "@/components/main/Business";
import Style from "@/components/main/Style";
import Lookbook from "@/components/main/Lookbook";

export default function Home() {
  return (
    <>
      <Seo title="HOME"></Seo>
      <div className="wrap">
        <Slide />
        <Weekly />
        <NewOne />
        <Business />
        <Style />
        <Lookbook />
      </div>
    </>
  );
}
