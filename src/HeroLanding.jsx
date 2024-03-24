import React, { useEffect, useState } from "react";
import student1 from "./assets/student1.png";
import student2 from "./assets/student2.png";
import student3 from "./assets/student3.png";
import student4 from "./assets/student4.png";

const studentImgs = [student1, student2, student3, student4];

export default function HeroLanding() {
  const [index, setIndex] = useState(0);
  useEffect(() => {}, [index]);

  function changeBackground() {
    setIndex((prevIndex) => (prevIndex + 1) % studentImgs.length);
  }
  useEffect(() => {
    const intervalId = setInterval(changeBackground, 3200);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="block z-0 w-screen">
      <div className="backgrounds flex h-screen w-screen ">
        {studentImgs.map((studentImg, i) => (
          <img
            key={i}
            className={
              i == index ? `background-student display` : `background-student`
            }
            src={studentImg}
            alt="student image"
          />
        ))}
      </div>
    </div>
  );
}
