import React from "react";
import PageContent from "../components/PageContent";
import { useRouteError } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";

const ErrorPage = () => {
  const error = useRouteError();
  console.log(error);
  let title = "An Error occured!";
  let message = "Something went wrong";

  if (error.status === 500) {
    message = error.data?.message;
  }
  if (error.status === 404) {
    title = "Not Found";
    message = "Could not find resource";
  }
  return (
    <>
      <MainNavigation />
      <PageContent title={title}>
        <p>{message} </p>
      </PageContent>
    </>
  );
};

export default ErrorPage;
