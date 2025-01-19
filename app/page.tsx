import HeroSlide from "@/components/HeroSlide";
import heroMain from "../public/images/hero-main.jpg";

export default function HomePage() {
  return (
    <div>
      <HeroSlide
        url={heroMain.src}
        header="We just know how"
        subHeader="DOWNLOAD MEDIAKIT"
      />
    </div>
  );
}
