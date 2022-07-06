import { faker } from '@faker-js/faker';
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
import { Logo } from '../assets/Logo';


ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'Chart.js Bar Chart',
    },
  },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'Dataset 2',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};


export function Dashboard(){
    return(
        <div className="min-h-screen min-w-screen  border-gray-100">
          <header className='min-w-screen h-20 bg-gray-200'></header>
            <div className='grid grid-cols-3 gap-3 w-300  p-6'>
                <div className='p-6 bg-white'><Bar options={options} data={data} /></div>
                <div className='p-6 bg-white'><Bar options={options} data={data} /></div>
                <div className='p-6 bg-white'><Bar options={options} data={data} /></div>
            </div>
            <div className='p-6'>
              <header className='p-3 bg-white border-b border-gray-200 font-bold text-[12px]'>CLIENT SERVICES</header>
              <table className="min-w-full p-6 bg-white text-center">
                  <thead>
                    <th>#</th>
                    <th className='text-left'>Client</th>
                    <th>Module</th>
                    <th>Service</th>
                    <th>Status</th>
                  </thead>
                  <tbody>
                    <tr>
                      <td>#9998</td>
                      <td className='flex '>
                        <Logo className={'w-12'} />
                        <div className='flex flex-col text-left p-3'>
                          <samp className='text-sm'>CredModelo</samp>
                          <samp className='text-sm'>Cooperativa de Modelo</samp>
                        </div>
                      </td>
                      <td>IBANK</td>
                      <td>TED</td>
                      <td>Ativo</td>
                    </tr>
                    <tr>
                      <td>#9998</td>
                      <td className='flex '>
                        <Logo className={'w-12'} />
                        <div className='flex flex-col text-left p-3'>
                          <samp className='text-sm'>CredModelo</samp>
                          <samp className='text-sm'>Cooperativa de Modelo</samp>
                        </div>
                      </td>
                      <td>IBANK</td>
                      <td>TED</td>
                      <td>Ativo</td>
                    </tr>
                    <tr>
                      <td>#9998</td>
                      <td className='flex '>
                        <Logo className={'w-12'} />
                        <div className='flex flex-col text-left p-3'>
                          <samp className='text-sm'>CredModelo</samp>
                          <samp className='text-sm'>Cooperativa de Modelo</samp>
                        </div>
                      </td>
                      <td>IBANK</td>
                      <td>TED</td>
                      <td>Ativo</td>
                    </tr>
                    <tr>
                      <td>#9998</td>
                      <td className='flex '>
                        <Logo className={'w-12'} />
                        <div className='flex flex-col text-left p-3'>
                          <samp className='text-sm'>CredModelo</samp>
                          <samp className='text-sm'>Cooperativa de Modelo</samp>
                        </div>
                      </td>
                      <td>IBANK</td>
                      <td>TED</td>
                      <td>Ativo</td>
                    </tr>
                  </tbody>
              </table>
            </div>
        </div>
    )
}