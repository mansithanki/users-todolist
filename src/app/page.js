import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-200">
      <h1 className="text-4xl font-bold mb-4">Welcome to Mansi's Page!</h1>
      <div className="flex flex-col items-center space-y-4">
        <Link href="/userslist" className="text-blue-500 hover:underline">
          Click here to check out Users Page
        </Link>
        <Link href="/todo" className="text-blue-500 hover:underline">
          Click here to check out Todo Form
        </Link>
      </div>
    </div>
  );
}
