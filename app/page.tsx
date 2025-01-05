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
      <div className="text-2xl font-medium mt-5">
        <h2>Recommended for you</h2>
      </div>
      <div className="py-[24px] grid grid-cols-3 gap-4">
        {cardData.map((value) => (
          <Card key={value.title} className="rounded-none">
            <CardHeader className="p-0 mb-6">
              <Image
                src={value.img}
                alt="img"
                className="h-[200px] object-cover"
              />
            </CardHeader>
            <CardContent>
              <CardTitle>{value.title}</CardTitle>
              <CardDescription>{value.description}</CardDescription>
            </CardContent>
            <CardFooter>
              <CardDescription>{value.category}</CardDescription>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Home;
