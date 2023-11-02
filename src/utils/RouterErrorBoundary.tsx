import { Link, useRouteError } from 'react-router-dom';

export const Fallback = () => {
  return <p>Performing initial data load</p>;
};

export const RootErrorBoundary = () => {
  const error = useRouteError() as Error;

  return (
    <div className="flex flex-col items-center justify-center gap-5">
      <p>Oh no, something went wrong</p>
      <pre>{error.message}</pre>
      <Link to="/">Go to home</Link>
    </div>
  );
};
