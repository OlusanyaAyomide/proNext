import React from 'react'
import {Chart as ChartJS,CategoryScale,LinearScale,PointElement,LineElement,Title,Tooltip,Legend,Filler} from 'chart.js';
import { Line } from 'react-chartjs-2'
import { chartConfig } from '../../util/chartconfig';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
);

export default function DashboardGraph() {
    const dataSets =[10,30,54,28,58,20,34,96,42,38,48,19,26,33,10]
    const data ={
        labels:dataSets.map((_,key)=>key+1),
        datasets:[
            {
                label:"Form",
                data:dataSets,
                borderColor:'#2be48b',
                lineTension:0,
                backgroundColor:"#e7f6e973"
            }
        ]

    }    

  return (
    <div className='card mt-6 max-w-[93vw] sm:max-w-[94vw] md:max-w-[95.5vw] lg:max-w-[calc(100vw-300px)]'>
        <h1 className="section-header">Form Analysis</h1>
        <div className="w-full overflow-hidden h-[300px] sm:h-[400px] xl:h-[300px]">
            <Line options={chartConfig} data={data}/>
        </div>

    </div>
  )
}
