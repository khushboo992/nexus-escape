import CabinCard from "@/app/components/CabinCard";
import { getCabins } from "../_lib/data-service";
import { Suspense } from "react";
import CabinList from "../components/CabinList";
import Spinner from "../components/Spinner";
import Filter from "../components/Filter"; // Added missing import
import ReservationReminder from "../components/ReservationReminder";

export const revalidate = 15;

export const metadata = {
  title: {
    template: "%s | The Wild Oasis",
    default: "Cabins | The Wild Oasis",
  },
  description:
    "Luxurious cabin hotel in the heart of nature. Book your stay now and experience the ultimate escape from the city.",
};

// Next.js 15 requires searchParams to be an async Promise
export default async function Page({ searchParams }) {
  const resolvedSearchParams = await searchParams; // Await searchParams here
  const filter = resolvedSearchParams?.capacity ?? "all";

  return (
    <div>
      <h1 className="text-4xl mb-5 text-accent-400 font-medium">
        Our Luxury Cabins
      </h1>
      <p className="text-primary-200 text-lg mb-10">
        Cozy yet luxurious cabins, located right in the heart of the Italian
        Dolomites. Imagine waking up to beautiful mountain views, spending your
        days exploring the dark forests around, or just relaxing in your private
        hot tub under the stars. Enjoy nature's beauty in your own little home
        away from home. The perfect spot for a peaceful, calm vacation. Welcome
        to paradise.
      </p>
      <div className="flex justify-end mb-8">
        <Filter />
      </div>
      {/* Passing the filter key resets the Suspense boundary state upon filter switches */}
      <Suspense fallback={<Spinner />} key={filter}>
        <CabinList filter={filter} />
        <ReservationReminder />
      </Suspense>
    </div>
  );
}
