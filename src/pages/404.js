import * as React from "react";
import { navigate, Link } from "gatsby";

export default function NotFoundPage() {
  return (
    <main className="container m-auto flex flex-col justify-center items-center h-screen">
      <h1 className="text-5xl">
        Oh shit{" "}
        <span role="img" aria-label="Poop emoji">
          💩
        </span>
        , you're lost
      </h1>
      <nav className="flex flex-col mt-6">
        <Link to="/">Go Home</Link>
        <button onClick={() => navigate(-1)}>Go back</button>
      </nav>
    </main>
  );
}
