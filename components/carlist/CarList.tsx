import DisplayCars from './displayCars';
import Link from 'next/link';
import { Button } from 'flowbite-react';

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

export default function UserDashboard() {
  return (
    <div className="w-full text-xs sm:text-sm mx-auto flex flex-col flex-1 gap-3 sm:gap-5">
      <div className="flex justify-center items-center">
        <div className="flex items-center my-10">
          <h1 className="text-4xl font-extrabold">Cars List</h1>
        </div>
      </div>
      <DisplayCars />
      <div className="m-8 flex justify-center items-center">
        <Link href="/">
          <Button
            type="submit"
            className="text-gray-900 bg-tertiary font-bold rounded-sm text-md px-9 py-2.5 text-center"
          >
            Back to Homepage
          </Button>
        </Link>
      </div>
    </div>
  );
}

export const GetServerSideProps = () => {};
