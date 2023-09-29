import { Link } from "@remix-run/react";

export default function Route() {
  return (
    <div>
      <h1>Page</h1>
      <Link to="/page">Go to page</Link>
      <Link to="/">Go to index</Link>
    </div>
  );
}
