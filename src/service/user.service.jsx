import { addDoc, collection, getDocs } from "firebase/firestore";
import { db } from "../config/firebase";

export const createBooking = async (booking) => {
  const bookingRef = await addDoc(collection(db, "bookings"), booking);
  return bookingRef.id;
};
export const getPackages = async () => {
  const packages = [];
  const querySnapshot = await getDocs(collection(db, "packages"));
  querySnapshot.forEach((doc) => {
    packages.push(doc.data());
  });
  return packages;
};
