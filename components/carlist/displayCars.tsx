'use client';
import React, { useEffect, useState } from 'react';
import type { NextApiRequest, NextApiResponse } from 'next';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import fetchCars from '@/components/carlist/fetchCars';

type CarData = {
  make: string;
  color: string;
  model: string;
}[];

// export default async function DisplayCarsComponent() {
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
      <div className="">
        <>
          <table className="table-dark">
            <thead>
              <tr>
                <th>Accident</th>
                <th>Brand</th>
                <th>Clean Title</th>
                <th>Engine</th>
                <th>Exterior Color</th>
                <th>Fuel Type</th>
                <th>Interior Color</th>
                <th>Mileage</th>
                <th>Model</th>
                <th>Year</th>
                <th>Price</th>
                <th>Transmission</th>
              </tr>
            </thead>
            <tbody>
              {carsList.map((content) => (
                <tr key={content.id}>
                  <td>{content.accident}</td>
                  <td>{content.brand}</td>
                  <td>{content.clean_title}</td>
                  <td>{content.engine}</td>
                  <td>{content.ext_col}</td>
                  <td>{content.fuel_type}</td>
                  <td>{content.int_col}</td>
                  <td>{content.milage}</td>
                  <td>{content.model}</td>
                  <td>{content.model_year}</td>
                  <td>{content.price}</td>
                  <td>{content.transmission}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      </div>
    </section>
  );
}
