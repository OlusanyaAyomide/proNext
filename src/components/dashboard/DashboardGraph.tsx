import React from 'react'
import {Chart as ChartJS,CategoryScale,LinearScale,PointElement,LineElement,Title,Tooltip,Legend,Filler} from 'chart.js';
import { Line } from 'react-chartjs-2'
import { chartConfig } from '../../util/chartconfig';
import { useDashBoardData } from '../../hooks/useDashboardData';
import { last2WeeeksAgo } from '../lib/utils';
import FullLoader from '../util-component/FullLoader';

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
    const {dataArray,isLoading} = useDashBoardData()
    console.log(dataArray)
    const dataSets =dataArray ? dataArray:[]
    const data ={
        labels:last2WeeeksAgo(),
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
            {dataArray?.length ?<Line options={chartConfig} data={data}/>:null}
            <FullLoader isLoading={isLoading}/>
        </div>

    </div>
  )
}
