import Image from "next/image";
import imgCard from "../../public/img/imgcard.jpg";
import { FaArrowRight } from "react-icons/fa";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
const Dashboard = () => {
  const data = [
    {
      title: "Ticket",
      price: 150000,
      img: imgCard,
    },
    {
      title: "Ticket",
      price: 150000,
      img: imgCard,
    },
    {
      title: "Ticket",
      price: 150000,
      img: imgCard,
    },
    {
      title: "Ticket",
      price: 150000,
      img: imgCard,
    },
    {
      title: "Ticket",
      price: 150000,
      img: imgCard,
    },
    {
      title: "Ticket",
      price: 150000,
      img: imgCard,
    },
    {
      title: "Ticket",
      price: 150000,
      img: imgCard,
    },
    {
      title: "Ticket",
      price: 150000,
      img: imgCard,
    },
  ];

  const newData = data.map((value, index) => {
    return (
      <Card className="h-[370px]" key={index}>
        <CardHeader className="p-0">
          <Image
            src={value.img}
            className="w-full object-cover h-[280px] rounded-[4%]"
            alt="img"
          ></Image>
        </CardHeader>
        <CardContent className="p-3 mt-4 flex justify-between items-center">
          <div>
            <CardTitle>{value.title}</CardTitle>
            <p className="text-lg">
              {value.price.toLocaleString("id", {
                style: "currency",
                currency: "IDR",
              })}
              / <span className="text-sm">person</span>
            </p>
          </div>
          <div className="bg-black p-3 rounded-full">
            <a href="#" className="text-white">
              <FaArrowRight />
            </a>
          </div>
        </CardContent>
      </Card>
    );
  });

  return (
    <div>
      <div></div>
    </div>
  );
};

export default Dashboard;
