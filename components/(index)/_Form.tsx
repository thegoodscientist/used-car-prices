"use client";

import { Button } from "flowbite-react";
import { Field, Form, Formik } from "formik";
import { FunctionComponent, useEffect, useState, useRef } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { colors } from "@/listOfCarColors";
import Link from "next/link";
interface MyFormValues {
  make: string;
  model: string;
  year: string;
  color: string;
}

// const renderYearContent = (year) => {
//   const tooltipText = `Tooltip for year: ${year}`;
//   return <span title={tooltipText}>{year}</span>;
// };
const CarQueryForm: React.FC<{}> = () => {
  const initialValues: MyFormValues = {
    make: "",
    model: "",
    year: "",
    color: "",
  };
  const [startDate, setStartDate] = useState(new Date());
  return (
    <div className="my-5 p-5 md:p-20">
      <Formik
        initialValues={initialValues}
        // validate={(values) => {
        //   const errors = {}
        //   if (!values.email) {
        //     errors.email = 'Required'
        //   } else if (
        //     !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        //   ) {
        //     errors.email = 'Invalid email address'
        //   }
        //   return errors
        // }}
        onSubmit={(values, actions) => {
          console.log({ values, actions });
          alert(JSON.stringify(values, null, 2));
          actions.setSubmitting(false);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          /* and other goodies */
        }) => (
          <Form
            onSubmit={handleSubmit}
            className="w-full flex flex-col items-center justify-center"
          >
            <label htmlFor="make">Make</label>
            <Field
              id="make"
              name="make"
              placeholder="Toyota"
              className="flex align-center justify-center placeholder-gray-400 text-gray-700 text-sm w-full md:w-1/2 xl:w-1/4 h-10 pl-5 mb-4"
            />
            {/* {errors.make && touched.make && errors.make} */}
            <label htmlFor="model">Model</label>
            <Field
              id="model"
              name="model"
              placeholder="Corolla"
              className="flex align-center justify-center placeholder-gray-400 text-gray-700 text-sm w-full md:w-1/2 xl:w-1/4 h-10 pl-5 mb-4"
            />
            {/* {errors.model && touched.model && errors.model} */}
            <label htmlFor="date">Year</label>
            {/* <Field
              type="date"
              name="date"
              id="date"
              className="flex align-center justify-center placeholder-gray-400 text-gray-700 text-sm w-full md:w-1/2 xl:w-1/4 h-10 pl-5 mb-4"
            /> */}
            <DatePicker
              selected={startDate}
              onChange={(year) => setStartDate(year)}
              showYearPicker
              dateFormat="yyyy"
              className="flex align-center justify-center placeholder-gray-400 text-gray-700 text-sm w-full text-center h-10 mb-4"
            />
            {/* {errors.date && touched.date && errors.date} */}
            <label htmlFor="color">Color</label>
            <Field
              id="color"
              as="select"
              name="color"
              className="flex align-center justify-center placeholder-gray-400 text-gray-700 text-sm w-full md:w-1/2 xl:w-1/4 h-10 pl-5 mb-4"
            >
              {colors.map((color) => (
                <option key={color.id} value={color.color}>
                  {color.color}
                </option>
              ))}
            </Field>
            {/* {errors.model && touched.model && errors.model} */}
            <Link href="#">
              <Button
                type="button"
                className="text-gray-900 bg-gradient-to-r from-green-400 via-yellow-300 to-red-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-bold rounded-sm text-md px-9 py-2.5 text-center"
              >
                Search
              </Button>
            </Link>
          </Form>
        )}
      </Formik>
    </div>
  );
};
export default CarQueryForm;
