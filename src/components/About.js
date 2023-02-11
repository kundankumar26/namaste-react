import { Outlet } from "react-router-dom";

const About = () => {
  return (
    <>
      <div>About us page</div>
      <p>This is about us page</p>
      <Outlet/>
    </>
  );
};

export default About;
