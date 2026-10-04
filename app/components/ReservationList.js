"use client";

import ReservationCard from "./ReservationCard";
import { deleteBooking } from "../_lib/actions";
import { useOptimistic, useTransition } from "react";
import { useRouter } from "next/navigation"; // 1. Import useRouter

function ReservationList({ bookings }) {
  const router = useRouter(); // 2. Initialize router
  const [isPending, startTransition] = useTransition();

  const [optimisticBookings, optimisticDelete] = useOptimistic(
    bookings,
    (currBookings, bookingId) => {
      return currBookings.filter((booking) => booking.id !== bookingId);
    },
  );

  function handleDelete(bookingId) {
    // 3. Wrap everything in startTransition so useOptimistic stays active safely
    startTransition(async () => {
      // Step A: Immediately hide it from the UI list
      optimisticDelete(bookingId);

      // Step B: Run the background Supabase deletion
      await deleteBooking(bookingId);

      // Step C: Force Next.js to fetch fresh Server Component data immediately
      router.refresh();
    });
  }

  return (
    <ul className="space-y-6">
      {optimisticBookings.map((booking) => (
        <ReservationCard
          booking={booking}
          onDelete={handleDelete}
          key={booking.id}
        />
      ))}
    </ul>
  );
}

export default ReservationList;
