import { db } from "@/components/lib/firebase/config";
import { collection, getDocs, DocumentSnapshot } from "firebase/firestore";
// import useSWR from "swr";

// interface CarData {
//   id: string;
//   accident: string;
//   brand: string;
//   cleanTitle: boolean;
//   engine: string;
//   extCol: string;
//   fuelType: string;
//   intCol: string;
//   mileage: string;
//   model: string;
//   year: number;
//   price: string;
//   transmission: string;
// }

export default async function fetchCars() {
  const carsCollection = await getDocs(collection(db, "used_cars"));
  const carsData: any[] = [];
  try {
    carsCollection.forEach((doc) => {
      carsData.push({ id: doc.id, ...doc.data() });
      //   console.log("Car", car);
      //   carsData.push(car);
    });

    console.log("Cars array", carsData);
    return carsData;
  } catch (error) {
    console.error("Error fetching cars:", error);
    throw error;
  }
}

// export default function useFetchCars() {
//   const { data: cars, error } = useSWR(fetchCars);
//   return {
//     cars: cars || [],
//     isLoading: !error && !cars,
//     isError: error,
//   };
// }
