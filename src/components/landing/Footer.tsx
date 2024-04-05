import React from 'react'
import { _homeNavMenu } from '../../util/constants'
import { Link } from 'react-scroll'
import Logo from '../util-component/Logo'
import { Svgs } from '../../util/svgs'

export default function Footer() {

  return (
    <div className='pt-10 pb-10 w-full overflow-hidden bg-[#caffd753] relative landing-pad'>
        <div className="mb-2 flex flex-col">
            <Logo className='-ml-2'/>
            <div className="flex-center">
                <Svgs.faceBookSvg className='scale-75 '/>
            </div>
        </div>
        <h3 className="text-lg mt-8 font-bold mb-8 md:pl-2">Our Partners</h3>
        <div className="flex justify-around flex-wrap relative z-30 flex-center">
            {Array(4).fill(0).map((_,key)=>(
                <div key={key} className='w-6/12 max-sm:px-3  sm:w-3/12 mb-4'>
                    <img src={`partner${key+1}.png`} alt="" className='shrink-0 block max-w-[100px] mb-3 mr-1'/>
                </div>
            ))}
        </div>
        <div className="flex-center relative z-30 mt-5 max-xs:gap-y-1 max-xs:flex-wrap w-fit mx-auto">
        {_homeNavMenu.map((item,key)=>(
            <Link to={item.id} smooth offset={-50} className='mr-5 text-pro-blue block mb-1 cursor-pointer relative before:-left-[10%] before:bottom-0 hover:before:bg-main before:w-0 before:absolute hover:text-main hover:before:w-[120%] before:h-[2px] before:transition-all before:duration-300 font-semibold' key={key}>{item.text}</Link>
        ))}
        </div>
        <div className="absolute h-[250px] w-[250px] rounded-full bg-[#beffc8] -bottom-[125px] z-20 -left-[125px]"></div>
        <div className="absolute h-[250px] w-[250px] rounded-full bg-[#beffc8] -bottom-[125px] z-20 -right-[125px]"></div>
    </div>
  )
}
