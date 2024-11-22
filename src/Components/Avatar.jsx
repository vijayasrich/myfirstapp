import React from "react";
import img1 from "../assets/image1.avif";
import img2 from "../assets/image2.avif";
import img3 from "../assets/image3.avif";

function Avatar({ person, size }) {
  return (
    <>
      <p>{person.name}</p>
      <p>{person.imageId}</p>
      <img src={person.imageId} alt={person.name} height={size} width={size} />
    </>
  );
}

export default function Profile() {
  return (
    <>
      <Avatar person={{ name: "person 1", imageId: img1 }} size={150} />
      <Avatar person={{ name: "person 2", imageId: img2 }} size={150} />
      <Avatar person={{ name: "person 3", imageId: img3 }} size={150} />
    </>
  );
}