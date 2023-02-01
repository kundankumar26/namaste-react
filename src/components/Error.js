import { useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <>
        <div>Not found</div>
        <p>{error.status + ': ' + error.statusText}</p>
    </>
  );
};

export default Error;
