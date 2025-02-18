// import Link from "next/Link";

import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-gray-300">
      <main className="flex flex-col justify-center text-center max-w-7xl mx-auto h-dvh">
        <div className="flex flex-col gap-6 p-12 rounded-xl bg-black/90 w-4/5 sm:max-w-96 mx-auto text-white sm:text-2xl">
          <h2 className="text-4xl font-bold">Keis Computer <br /> Repair shop</h2>
          <address>
            897, Collage Gate <br />
            Mohakhali, Dhaka-1200
          </address>
          <p>Open daily: 9am-10pm</p>
          <Link href={'tele:0199887987'} className="hover:underline">
            +880199897686876
          </Link>
        </div>
      </main>
    </div>
  );
}
