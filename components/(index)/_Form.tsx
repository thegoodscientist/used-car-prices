'use client';

import { Button } from 'flowbite-react';
import { Field, Form, Formik } from 'formik';
import { FunctionComponent, useEffect, useState, useRef } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { colors } from '@/listOfCarColors';
import Link from 'next/link';
import fetchCars from '@/hooks/fetchCars';
interface MyFormValues {
  make: string;
  model: string;
  year: string;
  color: string;
}

//Ref: https://gist.github.com/thypirate/e8aeaef75cf046882fb7c3b68d34db22
const DatepickerField = ({ field, form, ...props }) => (
  // OR const { setFieldValue } = form;
  // OR const { value, name } = field;
  <div>
    <DatePicker
      showYearPicker
      dateFormat="yyyy"
      className="flex align-center justify-center placeholder-gray-400 text-gray-700 text-sm w-full text-center h-10 mb-4"
      {...field}
      selected={field.value}
      onChange={(val) => form.setFieldValue(field.name, val)}
    />
  </div>
);

function validateMake(value) {
  let error;
  if (!value) {
    error = 'Required';
  } else if (!/^[a-zA-Z]+\-?[a-zA-Z]+$/.test(value)) {
    error = 'Invalid make name';
  }
  return error;
}

function validateModel(value) {
  let error;
  if (!value) {
    error = 'Required';
  } else if (!/[\w\s.]+$/.test(value)) {
    error = 'Invalid model name';
  }
  return error;
}

const CarQueryForm: React.FC<{}> = () => {
  const initialValues: MyFormValues = {
    make: '',
    model: '',
    year: '',
    color: 'Any',
  };
  //   const [data, setData] = useState([]);
  return (
    <div className="my-20 p-5 md:p-20">
      <Formik
        initialValues={initialValues}
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
              validate={validateMake}
              onChange={handleChange}
              value={values.make}
            />
            {errors.make && touched.make && (
              <div className="flex align-center justify-center text-red-700 text-md text-bold mb-4">
                {errors.make}
              </div>
            )}
            <label htmlFor="model">Model</label>
            <Field
              id="model"
              name="model"
              placeholder="Corolla"
              className="flex align-center justify-center placeholder-gray-400 text-gray-700 text-sm w-full md:w-1/2 xl:w-1/4 h-10 pl-5 mb-4"
              validate={validateModel}
              onChange={handleChange}
              value={values.model}
            />
            {errors.model && touched.model && (
              <div className="flex align-center justify-center text-red-700 text-md text-bold mb-4">
                {errors.model}
              </div>
            )}
            {/* {errors.model && touched.model && errors.model} */}
            <label htmlFor="date">Year</label>
            {/* <DatePicker
              selected={startDate}
              onChange={(year) => setStartDate(values.year, year)}
              value={values.year}
              showYearPicker
              dateFormat="yyyy"
              className="flex align-center justify-center placeholder-gray-400 text-gray-700 text-sm w-full text-center h-10 mb-4"
            /> */}
            <Field id="year" name="year" component={DatepickerField} />
            {/* {errors.date && touched.date && errors.date} */}
            <label htmlFor="color">Color</label>
            <Field
              id="color"
              as="select"
              name="color"
              className="flex align-center justify-center placeholder-gray-400 text-gray-700 text-sm w-full md:w-1/2 xl:w-1/4 h-10 pl-5 mb-4"
              onChange={handleChange}
              value={values.color}
            >
              {colors.map((color) => (
                <option key={color.id} value={color.color}>
                  {color.color}
                </option>
              ))}
            </Field>
            {/* {errors.model && touched.model && errors.model} */}
            {/* <Link href="/carlist"> */}
            <Link href="#">
              <Button
                type="button"
                onClick={() => fetchCars(values)}
                className="text-gray-900 bg-gradient-to-r from-green-400 via-yellow-300 to-red-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-bold rounded-sm text-md px-9 py-2.5 text-center"
              >
                Search
              </Button>
            </Link>
            {/* <button type="submit">Submit</button> */}
          </Form>
        )}
      </Formik>
    </div>
  );
};
export default CarQueryForm;
