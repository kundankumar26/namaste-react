import { useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  return (
    <>
        <div>Not found</div>
        <p>{error.status + ': ' + error.statusText}</p>
    </>
  );
};

export default Error;
