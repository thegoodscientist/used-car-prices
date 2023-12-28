import { db } from "@/components/lib/firebase/config";
import { collection, getDocs } from "firebase/firestore";
import useSWR from "swr";

const fetchCars = async () => {
  const carsCollection = collection(db, "used_cars");
  const carsSnapshot = await getDocs(carsCollection);
  const carsData: {
    id: string;
    accident: string;
    brand: string;
    cleanTitle: Boolean;
    engine: string;
    extCol: string;
    fuelType: string;
    intCol: string;
    mileage: string;
    model: string;
    year: number;
    price: string;
    transmission: string;
  }[] = [];
  carsSnapshot.forEach((doc) => {
    const car = { id: doc.id, ...doc.data() };

    carsData.push(car);
  });
  return carsData;
};

export default function useFetchCars() {
  const { data: cars, error } = useSWR(fetchCars);
  return {
    cars: cars || [],
    isLoading: !error && !cars,
    isError: error,
  };
}
