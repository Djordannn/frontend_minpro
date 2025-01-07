import Image from "next/image";
import HeroCarousel from "./component/heroCarousel";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import football from "../public/img/football.jpg";
import workshop from "../public/img/workshop.jpg";
import music from "../public/img/music.jpg";
import cfd from "../public/img/carfreeday.jpg";

const Home = () => {
  const cardData = [
    {
      title: "Dream league",
      description: "Watch your favorite club",
      img: football,
      category: "Sport",
    },
    {
      title: "Green lifes",
      description: "Get your experience for your dreams",
      img: workshop,
      category: "Workshop",
    },
    {
      title: "The biggest concert ",
      description: "Find your favorite concert and enjoy",
      img: music,
      category: "Music",
    },
    {
      title: "Enjoy in your weekend",
      description: "Come with your family for have fun",
      img: cfd,
      category: "CFD Event",
    },
  ];

  return (
    <div>
      <HeroCarousel />
      <div className="mt-2 text-2xl font-medium lg:mt-5">
        <h2 className="lg:text-wxl text-lg">Recommended for you</h2>
      </div>
      <div className="grid grid-cols-2 gap-4 py-[12px] lg:grid-cols-3 lg:py-[24px]">
        {cardData.map((value) => (
          <Card key={value.title} className="rounded-none">
            <CardHeader className="p-0 md:mb-6">
              <Image
                src={value.img}
                alt="img"
                className="h-[170px] object-cover md:h-[200px]"
              />
            </CardHeader>
            <CardContent className="p-3 md:p-6">
              <CardTitle className="text-md font-medium">
                {value.title}
              </CardTitle>
              <CardDescription className="text-sm">
                {value.description}
              </CardDescription>
            </CardContent>
            <CardFooter className="-mt-3 p-3 md:p-6">
              <CardDescription>{value.category}</CardDescription>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Home;
