'use client';
import React, { useEffect, useState } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import fetchCars from '@/components/carlist/fetchCars';

type CarData = {
  make: string;
  color: string;
  model: string;
}[];

export default function DisplayCarsComponent() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams.toString());
  const [carsList, setCarsList] = useState([]);

  const make = searchParams.get('make');
  const model = searchParams.get('model');
  const color = searchParams.get('color');

  // const url = `${pathname}?${searchParams}`;
  // console.log(url);
  // console.log('Make in dsiplay: ', make);
  useEffect(() => {
    // Only fetch data if search parameters are available
    if (make && model && color) {
      const parameters = {
        make: make,
        model: model, // replace with the actual model value
        color: color,
      };
      console.log('Parameters inside if condition:', parameters);
      fetchCars(parameters)
        .then((data) => setCarsList(data))
        .catch((error) => console.error('Error fetching cars:', error));
    }
  }, [make, model, color]);

  return (
    <section>
      <div className="mx-2 relative overflow-x-auto">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Brand
              </th>
              <th scope="col" className="px-6 py-3">
                Accident
              </th>
              <th scope="col" className="px-6 py-3">
                Clean Title
              </th>
              <th scope="col" className="px-6 py-3">
                Engine
              </th>
              <th scope="col" className="px-6 py-3">
                Exterior Color
              </th>
              <th scope="col" className="px-6 py-3">
                Fuel Type
              </th>
              <th scope="col" className="px-6 py-3">
                Interior Color
              </th>
              <th scope="col" className="px-6 py-3">
                Mileage
              </th>
              <th scope="col" className="px-6 py-3">
                Model
              </th>
              <th scope="col" className="px-6 py-3">
                Year
              </th>
              <th scope="col" className="px-6 py-3">
                Price
              </th>
              <th scope="col" className="px-6 py-3">
                Transmission
              </th>
            </tr>
          </thead>
          <tbody>
            {carsList.map((content) => (
              <tr
                key={content.id}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
              >
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {content.brand}
                </th>
                <td className="px-6 py-4">{content.accident}</td>
                <td className="px-6 py-4">{content.clean_title}</td>
                <td className="px-6 py-4">{content.engine}</td>
                <td className="px-6 py-4">{content.ext_col}</td>
                <td className="px-6 py-4">{content.fuel_type}</td>
                <td className="px-6 py-4">{content.int_col}</td>
                <td className="px-6 py-4">{content.milage}</td>
                <td className="px-6 py-4">{content.model}</td>
                <td className="px-6 py-4">{content.model_year}</td>
                <td className="px-6 py-4">{content.price}</td>
                <td className="px-6 py-4">{content.transmission}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
