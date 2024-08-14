import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

//component
import Social from "@/components/Social";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between 
        xl:pt-8 xl:pb-24">
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Software Developer & UI/UX Designer</span>
            <h1 className="h1 mb-5">
              Hello Im <br /><span className="text-yellow-600">Heru Lukis Setiyawan</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              I am a junior web developer and UI/UX designer who is 
              still studying at a major university in Banyuwangi.
            </p>
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button 
                variant="outline"
                size="lg"
                className="uppercase flex items-center gap-2"
              >
                <span>Download CV</span>
                <FiDownload className="text-xl"/>
              </Button>
              <div className="mb-8 xl:mb-0">
                <Social 
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-white rounded-full flex justify-center 
                  items-center text-center text-base hover:bg-yellow-600 
                  hover:text-primary hover:transition-all hover:border-yellow-600 duration-500"
                />
              </div>
            </div>
          </div>
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
}

export default Home