const Navbar = () => {
  return (
    <div className="flex items-center justify-between py-5">
      <div>
        <h2 className="font-bold text-xl">Logo</h2>
      </div>
      <div>
        <ul className="flex gap-4 text-sm">
          <li>
            <a href="#">Hotels</a>
          </li>
          <li>
            <a href="#">Flight</a>
          </li>
          <li>
            <a href="#">Trains</a>
          </li>
          <li>
            <a href="#">Cinemas</a>
          </li>
        </ul>
      </div>
      <div>
        <div className="flex gap-2 text-sm">
          <a href="#" className="bg-[#213555] py-1 px-4 rounded-sm text-white">
            Login
          </a>
          <a href="#" className=" py-1 px-4">
            Register
          </a>
        </div>
        <div className="hidden">
          <a href="#">Profile</a>
          <a href="#">Logout</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
