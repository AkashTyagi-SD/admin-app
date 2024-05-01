import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1>Welcome to Contact management app</h1>
      <div className="w-2/5 flex justify-between">
        <Link href="/login" className="hover:text-red-500">
          Login
        </Link>
        <h2>Or</h2>
        <Link href="/sign-up" className="hover:text-red-500">
          Sign Up
        </Link>
      </div>
    </main>
  );
}
