import Link from "next/link";

export default function Custom404() {
  return (
    <div className=" py-12 pt-24   min-h-[calc(100vh-90px)] flex flex-col items-center justify-center text-center container">
      <h1 className="heading text-4xl md:text-5xl font-bold text-red-600 py-6">
        Oops! 404 - Page Not Found
      </h1>
      <p className="text-lg md:text-xl text-gray-600 mb-6">
        Sorry, the page you are looking for does bit exist. It might have been
        moved or deleted.
      </p>
      <Link
        href="/"
        className="text-black hover:text-green text-xl font-semibold hover:text-green transition duration-300"
      >
        Go back to the homepage
      </Link>
    </div>
  );
}
