"use client";

import { Button } from "flowbite-react";
import { Field, Form, Formik } from "formik";
import { FunctionComponent, useEffect, useState, useRef } from "react";

interface MyFormValues {
  make: string;
  model: string;
  year: string;
  color: string;
}

const CarQueryForm: React.FC<{}> = () => {
  const initialValues: MyFormValues = {
    make: "",
    model: "",
    year: "",
    color: "",
  };
  return (
    <div className="max-container my-5 md:my-0 p-0 md:p-20">
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
            className="w-full flex flex-col items-start justify-center"
          >
            <label htmlFor="title">Make</label>
            <Field
              id="make"
              name="make"
              placeholder="Toyota"
              className="flex align-center justify-center placeholder-gray-400 text-gray-700 text-sm w-full md:w-1/2 xl:w-1/4 h-10 pl-5 mb-4"
            />
            {/* {errors.make && touched.make && errors.make} */}
            <label htmlFor="postalCode">Postal Code</label>
            <Field
              id="postalCode"
              name="postalCode"
              placeholder="K2K 1G0"
              className="flex align-center justify-center placeholder-gray-400 text-gray-700 text-sm w-full md:w-1/2 xl:w-1/4 h-10 pl-5 mb-4"
            />
            {/* {errors.postalCode && touched.postalCode && errors.postalCode} */}
            <label htmlFor="date">Date</label>
            <Field
              type="date"
              name="date"
              id="date"
              className="flex align-center justify-center placeholder-gray-400 text-gray-700 text-sm w-full md:w-1/2 xl:w-1/4 h-10 pl-5 mb-4"
            />
            {/* {errors.date && touched.date && errors.date} */}

            <button
              type="button"
              className="font-mono text-gray-900 bg-gradient-to-r from-green-400 via-yellow-300 to-red-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-bold rounded-sm text-lg px-9 py-2.5 text-center"
            >
              Search
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
export default CarQueryForm;
