"use client";

import HotelCard from "@/components/HotelCard";

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-50">
      
      {/* Search Bar */}
      <section className="border-b bg-white">
        <div className="mx-auto max-w-6xl px-4 py-4">
          <div className="flex gap-2">
            <input className="flex-1 rounded border px-3 py-2" placeholder="City" />
            <input type="date" className="rounded border px-3 py-2" />
            <input type="date" className="rounded border px-3 py-2" />
            <input className="w-24 rounded border px-3 py-2" placeholder="Guests" />
            <button className="rounded bg-black px-4 py-2 text-white">
              Search
            </button>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="mx-auto max-w-6xl px-4 py-6">
        <h2 className="mb-4 text-2xl font-semibold">
          Stays in Bangalore
        </h2>

        {/* THIS FIXES EVERYTHING */}
        <div className="grid grid-cols-1 gap-4">
          {hotels.map(hotel => (
            <HotelCard key={hotel.id} hotel={hotel} />
          ))}
        </div>
      </section>
    </main>
  );
}
