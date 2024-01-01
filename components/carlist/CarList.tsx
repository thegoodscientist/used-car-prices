import DisplayCars from './displayCars';

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
  // const [carData, setCarData] = useState([]);

  // useEffect(() => {
  //   async function fetchData() {
  //     const data = await fetchCars();
  //     setCarData(data);
  //   }

  //   fetchData();
  // }, []);

  return (
    <div className="w-full  text-xs sm:text-sm mx-auto flex flex-col flex-1 gap-3 sm:gap-5">
      <div className="flex items-center">
        <h1 className="text-3xl">Cars List</h1>
      </div>
      <DisplayCars />
    </div>
  );
}

export const GetServerSideProps = () => {};
