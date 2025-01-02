import Image from "next/image";
import imgCard from "../../../public/img/imgcard.jpg";
import { ArrowRight } from "lucide-react";

const AllPage = () => {
  const data = [
    { title: "Title 1", price: 150000, imgUrl: imgCard },
    { title: "Title 2", price: 150000, imgUrl: imgCard },
    { title: "Title 3", price: 150000, imgUrl: imgCard },
    { title: "Title 4", price: 150000, imgUrl: imgCard },
  ];

  return (
    <div className="p-5 grid grid-cols-4 gap-5">
      {data.map((value, index) => (
        <div className="card bg-[#eeee] w-[255px] rounded-xl" key={index}>
          <div className="card-header">
            <div className="w-[100%]">
              <Image
                src={value.imgUrl}
                className="h-[250px] w-full object-cover rounded-xl"
              />
            </div>
          </div>
          <div className="card-content p-4 flex items-center justify-between">
            <div>
              <h3 className="text-lg font-medium">{value.title}</h3>
              <p>
                {value.price.toLocaleString("id-ID", {
                  style: "currency",
                  currency: "IDR",
                })}
              </p>
            </div>
            <a href="#" className="p-3 bg-black text-white text-sm rounded-lg">
              <ArrowRight />
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AllPage;
