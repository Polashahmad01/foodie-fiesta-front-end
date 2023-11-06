import Link from "next/link";

export default function RootHeader() {
  return (
    <div className="flex justify-between items-center px-16 py-3 bg-[#F9FAFB] border-b">
      <h1 className="text-2xl font-bold pl-2">
        <Link
          href="/"
          className="opacity-50"
        >
          Fiesta
        </Link>
      </h1>
      <ul className="flex gap-8 pr-2">
        <li>
          <Link
            href="/signin"
          >
            SignIn
          </Link>
        </li>
        <li>
          <Link
            href="/signup"
          >
            SignUp
          </Link>
        </li>
      </ul>
    </div>
  )
}
