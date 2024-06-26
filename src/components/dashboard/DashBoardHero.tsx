import React from 'react'
import { _dashboardStats } from '../../util/constants'
import { useDashBoardData } from '../../hooks/useDashboardData'
import Loader from '../util-component/Loader'

export default function DashBoardHero() {
    const {formData} = useDashBoardData()
    const dataArray = formData?[formData.totalform,formData.totalcontactus,formData.totalfindjob,formData.totalhiretalent]:null
  return (
    <div className='mt-2'>
        <h3 className="text-pro-blue my-5 font-bold text-xl mb-3 sm:text-[22px]">Dashboard</h3>
        <div className='flex-center flex-wrap'>
            {_dashboardStats.map((item,key)=>(
                <div key={key} className={`w-full xs:w-6/12 mb-4 md:w-3/12 px-2 ${key===0?"md:pl-0":""}`}>
                    <div className='rounded-lg bg-white xs:min-h-[158px] sm:min-h-fit border shadow-md hover:shadow-lg p-2'>
                        <div className="flex-center justify-between mb-3">
                            <span>{item.title}</span>
                            <div className={`${item.bg} h-10 rounded-full w-10 grid place-items-center shrink-0`}>
                                <item.logo/>
                            </div>
                        </div>
                        {/* <Loader/> */}
                        {dataArray?
                             <h3 className='text-2xl font-bold mb-3'>{dataArray[key]}</h3>
                            :<Loader className='border-pro-blue border-r-transparent ml-0 mb-4 h-7 w-7 duration-1000'/>
                        }
                        {/* <h3 className='text-2xl font-bold mb-3'>{item.count}</h3> */}
                        <h3 className="mt-3 mb-1">{item.baseText}</h3>
                    </div>
                </div>
            ))}
        </div>
  
    </div>
  )
}
