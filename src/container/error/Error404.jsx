import { NavLink } from "react-router-dom";

function Error404() {
  return (
    <main className="grid min-h-full place-items-center bg- px-6 py-24 sm:py-32 lg:px-8">
      <div className="text-center">
        <p className="text-base font-semibold text-[#dadada]">404</p>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-[#dadada] sm:text-5xl">
          Page not found
        </h1>
        <p className="mt-6 text-base leading-7 text-[#dadada]">
          Sorry, we couldn’t find the page you’re looking for.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <NavLink
            to="/"
            className="rounded-md bg-[#e69d00] px-3.5 py-2.5 text-sm font-semibold text-black shadow-sm hover:bg-[#ffb20c] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-600"
          >
            Go back home
          </NavLink>
        </div>
      </div>
    </main>
  );
}

export default Error404;
