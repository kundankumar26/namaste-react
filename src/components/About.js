import { Outlet } from "react-router-dom";
import UserContext from "../utils/userContext";

const About = () => {
  return (
    <>
      <div>About us page</div>
      <p>This is about us page</p>
      <Outlet/>

      <UserContext.Consumer>
        {({user}) => (
          <span className='font-medium text-sm'>
            {user.name}- {user.email}
          </span>
        )}
      </UserContext.Consumer>
    </>
  );
};

export default About;
