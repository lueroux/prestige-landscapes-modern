import Link from "next/link";

export default function NotFound() {
  return (
    <html lang="en-GB">
      <body className="antialiased min-h-screen flex items-center justify-center bg-[#f9fafb]">
        <div className="text-center px-6">
          <h1 className="text-[80px] font-bold text-[#c49835] leading-none">404</h1>
          <h2 className="text-2xl font-bold text-[#1a1a1a] mt-4">Page Not Found</h2>
          <p className="text-gray-500 mt-2 mb-8">
            Sorry, the page you&apos;re looking for doesn&apos;t exist.
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#c49835] text-white font-semibold rounded-full hover:bg-[#9e7929] transition-colors"
          >
            Back to Home
          </Link>
        </div>
      </body>
    </html>
  );
}
