import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";


ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

type ThisMonth = {
  day: number;
  income: number;
  expense: number;
};


const ChartExpend = () => {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
    
    },
  };
  
  const { data } = useQuery<ThisMonth[]>({
    queryKey: ["chartthismouth"],
    queryFn: async () => {
      const res = await axios.get("http://localhost:4000/ledgers/thismonth", {
        headers: {
          Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRpam8ubWVAaG90bWFpbC5jb20iLCJpYXQiOjE3MTQ1NzMzNTF9.5haaboIVOqH5Xr8t2QwFl0HXUdm6QDfsH3siQCYQ76k`,
        },
      });
      return res.data;
    },
  });
  const dataobj = {
    labels: data?.map((item) => item.day),
    datasets: [
      {
        label: "Expenditure",
        data: data?.map((item) => item.expense),
          backgroundColor: "rgba(255, 99, 132, 0.2)",
      },
      {
        label: "Income",
        data: data?.map((item) => item.income),
        backgroundColor: "rgba(54, 162, 235, 0.2)",
      },
    ],
  };
  return (
    <>
      <Bar options={options} data={dataobj} />
    </>
  );
};

export default ChartExpend;
