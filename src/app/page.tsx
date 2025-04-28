'use client';

import { useRouter } from 'next/navigation';
// import custom from './custom.module.css';

export default function Home() {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 gap-4 p-8">
      <button
        onClick={() => router.push('/menu')}
        className="px-6 py-3 bg-gray-600 text-white rounded-lg  transition duration-300"
      >
        Go to Menu
      </button>

      <button
        onClick={() => router.push('/imageOptimization')}
        className="px-6 py-3 bg-gray-600 text-white rounded-lg transition duration-300"
      >
        Image Optimization
      </button>

      <button
        className="px-6 py-3 bg-gray-600 text-white rounded-lg  transition duration-300 cursor-pointer"
        onClick={() => router.push('/user')}
      >
        Users
      </button>

      {/* <p className={custom}>shivang</p> */}
    </div>
  );
}
