import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Expenditure Chart',
      },
    },
  };

  var data = [
      {day: 1, value: 10},
      {day: 2, value: 20},
      {day: 3, value: 30},
      {day: 4, value: 40},
      {day: 5, value: 50},
      {day: 6, value: 60},
      {day: 7, value: 70},
      {day: 8, value: 80},
      {day: 9, value: 90},
      {day: 10, value: 100},
      {day: 11, value: 110},
      {day: 12, value: 120},
      {day: 13, value: 130},
      {day: 14, value: 140},
      {day: 15, value: 150},
      {day: 16, value: 160},
      {day: 17, value: 170},
      {day: 18, value: 180},
      {day: 19, value: 190},
      {day: 20, value: 200},
      {day: 21, value: 210},
      {day: 22, value: 220},
      {day: 23, value: 230},
      {day: 24, value: 240},
      {day: 25, value: 250},
      {day: 26, value: 260},
      {day: 27, value: 270},
      {day: 28, value: 280},
      {day: 29, value: 290},
      {day: 30, value: 300},
      {day: 31, value: 310}
  ]
 export const dataobj = {
    labels: data.map((item) => item.day),
                    datasets: [{
                        label: 'Expenditure',
                        data: data.map((item) => item.value),
                    }]
                }   





const ChartExpend = () => {
    
   
    return (
        <>
        <Bar options={options} data={dataobj} />
        </>
    );
    }


    export default ChartExpend;