import town from "../../../public/img/town.jpg";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import imgCard from "../../../public/img/imgcard.jpg";
import { FaArrowRight } from "react-icons/fa";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Dashboard = () => {
  return (
    <div>
      <div className="main-dashboard h-[60vh] mx-4 rounded-lg">
        <div className="p-[5rem] ">
          <h2 className="text-7xl text-white">
            Book Your Tickets Now
            <br /> Adventure Awaits!
          </h2>
          <p className="text-white mt-3">
            Book tickets quickly and easily, and get ready for your exciting
            trip.
          </p>
          <Button className="bg-white text-black py-4 px-8 mt-8">
            Book now
          </Button>
        </div>
      </div>
      {/* Card */}
      <div className="py-[54px] px-[5rem]">
        <div className="text-center mb-[2rem]">
          <h2 className="text-5xl">Top values for you</h2>
          <p className="mt-4 text-[#bcbcbc]">
            Try variety of benefits when using our service
          </p>
        </div>
        <div className="grid grid-cols-4 gap-6">
          <Card className="h-[370px]">
            <CardHeader className="p-0">
              <Image
                src={imgCard}
                className="w-full object-cover h-[280px] rounded-[4%]"
              ></Image>
            </CardHeader>
            <CardContent className="p-3 mt-4 flex justify-between items-center">
              <div>
                <CardTitle>Alone with nature</CardTitle>
                <p className="text-lg">
                  $100 / <span className="text-sm">person</span>
                </p>
              </div>
              <div className="bg-black p-3 rounded-full">
                <a href="#" className="text-white">
                  <FaArrowRight />
                </a>
              </div>
            </CardContent>
          </Card>
          <Card className="h-[370px]">
            <CardHeader className="p-0">
              <Image
                src={imgCard}
                className="w-full object-cover h-[280px] rounded-[4%]"
              ></Image>
            </CardHeader>
            <CardContent className="p-3 mt-4 flex justify-between items-center">
              <div>
                <CardTitle>Alone with nature</CardTitle>
                <p className="text-lg">
                  $100 / <span className="text-sm">person</span>
                </p>
              </div>
              <div className="bg-black p-3 rounded-full">
                <a href="#" className="text-white">
                  <FaArrowRight />
                </a>
              </div>
            </CardContent>
          </Card>
          <Card className="h-[370px]">
            <CardHeader className="p-0">
              <Image
                src={imgCard}
                className="w-full object-cover h-[280px] rounded-[4%]"
              ></Image>
            </CardHeader>
            <CardContent className="p-3 mt-4 flex justify-between items-center">
              <div>
                <CardTitle>Alone with nature</CardTitle>
                <p className="text-lg">
                  $100 / <span className="text-sm">person</span>
                </p>
              </div>
              <div className="bg-black p-3 rounded-full">
                <a href="#" className="text-white">
                  <FaArrowRight />
                </a>
              </div>
            </CardContent>
          </Card>
          <Card className="h-[370px]">
            <CardHeader className="p-0">
              <Image
                src={imgCard}
                className="w-full object-cover h-[280px] rounded-[4%]"
              ></Image>
            </CardHeader>
            <CardContent className="p-3 mt-4 flex justify-between items-center">
              <div>
                <CardTitle>Alone with nature</CardTitle>
                <p className="text-lg">
                  $100 / <span className="text-sm">person</span>
                </p>
              </div>
              <div className="bg-black p-3 rounded-full">
                <a href="#" className="text-white">
                  <FaArrowRight />
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
        <div className="text-center mt-[4rem]">
          <a href="#" className="border-2 border-black py-4 px-12 rounded-lg">
            See all
          </a>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
