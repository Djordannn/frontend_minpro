import React from "react";
import { useState, useEffect } from "react";
import { Suspense } from "react";
import { Progress } from "@/components/ui/progress";
const Loading = () => {
  const [progress, setProgress] = useState(13);

  useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 2000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <section>
      <Suspense fallback={<p>Loading...</p>}>
        <Progress value={progress} className="w-[60%]" />
      </Suspense>
    </section>
  );
};

export default Loading;
