"use client";
import Link from "next/link";
import { callAPI } from "../config/axios";
import { useRouter } from "next/navigation";

const Navbar = () => {
  // const route = useRouter();
  // const keepLogin = async () => {
  //   try {
  //     const token = localStorage.getItem("kroco");
  //     if (token) {
  //       const res = await callAPI.get("/user/keep-login", {
  //         headers: { Authorization: `Bearer ${token}` },
  //       });
  //     }

  //     localStorage.setItem("kroco", resizeBy.data.token);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  return (
    <div className="flex items-center justify-between py-5 px-4">
      <div>
        <a href="#" className="font-bold text-xl">
          Logo
        </a>
      </div>
      <div>
        <ul className="flex gap-4 text-sm">
          <li>
            <Link href="#">About Us</Link>
          </li>
          <li>
            <Link href="#">Tickets</Link>
          </li>
          <li>
            <Link href="#">Events</Link>
          </li>
          <li>
            <Link href="#">Service</Link>
          </li>
        </ul>
      </div>
      <div>
        <div className="flex gap-2 text-sm">
          <Link
            href="/login"
            className="bg-[#213555] py-1 px-4 rounded-sm text-white"
          >
            Login
          </Link>
          <Link href="/register" className=" py-1 px-4">
            Register
          </Link>
        </div>
        <div className="hidden">
          <Link href="#">Profile</Link>
          <Link href="#">Logout</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
