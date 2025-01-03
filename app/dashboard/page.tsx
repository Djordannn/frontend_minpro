import TypingAnimation from "@/components/ui/typing-animation";

const Dashboard = () => {
  return (
    <div className="p-5 flex items-center gap-4">
      <div className=" w-1/2">
        <TypingAnimation className="text-4xl font-medium">
          Your Pass to Everything Awesome!
        </TypingAnimation>
        <p className="mt-5 text-justify">
          Get an unforgettable experience with tickets to the best events of the
          year! From breathtaking music concerts, thrilling sporting events, to
          inspiring seminars and vibrant cultural festivals—it's all here for
          you. Be a part of moments filled with energy, laughter, and memories.
          Find, book, and enjoy your favorite events with ease. A world of
          entertainment, education, and creativity awaits—don't miss it!
        </p>
      </div>
      <div className="w-1/2 text-center">
        <p>page</p>
      </div>
    </div>
  );
};

export default Dashboard;
