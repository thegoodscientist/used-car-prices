import { db } from '@/components/lib/firebase/config';
import { collection, getDocs, query, where } from 'firebase/firestore';

// import useSWR from "swr";

// type CarData = {
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
// }[];

export default async function fetchCars(parameters) {
  const carsRef = collection(db, 'used_cars');
  const q = query(
    carsRef,
    where('brand', '==', parameters.make),
    where('model', '==', parameters.model),
    where('ext_col', '==', parameters.color)
  ); //get collection with respect to if completed is true or not
  const querySnapshot = await getDocs(q);
  const carsList = querySnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
  // console.log('From Firestore', carsList);
  return carsList;
}

// export default function useFetchCars() {
//   const { data: cars, error } = useSWR(fetchCars);
//   return {
//     cars: cars || [],
//     isLoading: !error && !cars,
//     isError: error,
//   };
// }
