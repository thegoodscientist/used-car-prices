"use client";
import React, { useEffect, useState } from "react";
import fetchCars from "@/hooks/fetchCars";

interface CarData {
  id: string;
  accident: string;
  brand: string;
  cleanTitle: boolean;
  engine: string;
  extCol: string;
  fuelType: string;
  intCol: string;
  mileage: string;
  model: string;
  year: number;
  price: string;
  transmission: string;
}

export default function UserDashboard() {
  const [carData, setCarData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await fetchCars();
      setCarData(data);
    }

    fetchData();
  }, []);

  return (
    <div className="w-full  text-xs sm:text-sm mx-auto flex flex-col flex-1 gap-3 sm:gap-5">
      <div className="flex items-center">
        <h1 className="text-3xl">Cars List</h1>
      </div>
      <div className="current-courses">
        <>
          <table className="table-dark">
            <thead>
              <tr>
                <th>accident</th>
                <th>brand</th>
                <th>cleanTitle</th>
                <th>engine</th>
                <th>extCol</th>
                <th>fuelType</th>
                <th>intCol</th>
                <th>mileage</th>
                <th>model</th>
                <th>year</th>
                <th>price</th>
                <th>transmission</th>
              </tr>
            </thead>
            <tbody>
              {carData.map((content) => (
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
    </div>
  );
}

export const GetServerSideProps = () => {};
