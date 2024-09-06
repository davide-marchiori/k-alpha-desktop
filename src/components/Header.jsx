import Link from "next/link";
import Image from "next/image";

export function Header({ title }) {
  return (
    <header className="mb-8">
      <div className="container mx-auto">
        {/* Navbar */}
        <nav className="flex items-center justify-between p-4">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="../logo_small.png"
              alt="K-Alpha Logo"
              width={150}
              height={30}
            />
          </Link>
          <Link href="/usage-notes" className="text-blue-600 hover:underline">
            Usage Notes
          </Link>
        </nav>

        {/* Main Title */}
        <div className="border-t border-gray-200">
          <h1 className="text-2xl sm:text-3xl font-bold text-center py-4 my-8">
            {title}
          </h1>
        </div>
      </div>
    </header>
  );
}
