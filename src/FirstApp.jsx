// import { Fragment } from "react"

const profile = {
  name: "Edwin",
  title: "Junior front End, Backend & UI/UX designer"
};


export const FirstApp = () => {
  return (
    <>
      <h2 style={{ fontSize: "50px", marginBottom: "0px" }}>
        Hola, soy <span>{profile.name}</span>
      </h2>
      <p>{profile.title}</p>
      <p>Esto es un texto simple</p>
    </>
  );
};











