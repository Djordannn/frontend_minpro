import Link from "next/link";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between py-5">
      <div>
        <h2 className="font-bold text-xl">Logo</h2>
      </div>
      <div>
        <ul className="flex gap-4 text-sm">
          <li>
            <Link href="#">Hotels</Link>
          </li>
          <li>
            <Link href="#">Flight</Link>
          </li>
          <li>
            <Link href="#">Trains</Link>
          </li>
          <li>
            <Link href="#">Cinemas</Link>
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
