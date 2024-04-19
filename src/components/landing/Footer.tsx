import React from 'react'
import { _footerLogos, _homeNavMenu } from '../../util/constants'
import { Link } from 'react-scroll'
import Logo from '../util-component/Logo'
import { Svgs } from '../../util/svgs'
import ContactDialog from '../util-component/ContactDialog'

export default function Footer() {

  return (
    <div className='py-4 w-full text-white  overflow-hidden bg-[#28BC75] relative'>

        <h3 className="text-lg mt-8 font-bold mb-8 landing-pad">Our Partners</h3>
        {/* <div className="flex justify-around flex-wrap relative z-30 flex-center">
            {Array(4).fill(0).map((_,key)=>(
                <div key={key} className='w-6/12 max-sm:px-3  sm:w-3/12 mb-4'>
                    <img src={`partner${key+1}.png`} alt="" className='shrink-0 block max-w-[100px] mb-3 mr-1'/>
                </div>
            ))}
        </div> */}
        <div className="landing-pad relative z-30">
            <div className="flex-center  mt-5 max-xs:gap-y-1 max-xs:flex-wrap">
            {_homeNavMenu.map((item,key)=>(
                <Link to={item.id} smooth offset={-50} className='mr-5 text-pro-blue block mb-1 cursor-pointer relative before:-left-[10%] before:bottom-0 hover:before:bg-white before:w-0 before:absolute hover:text-white hover:before:w-[120%] before:h-[2px] before:transition-all before:duration-300 font-semibold' key={key}>{item.text}</Link>
            ))}
            </div>
            <div className="flex-center my-4 justify-between
            ">
                <Logo className='-ml-4 scale-110'/>
                <ContactDialog className='bg-transparent  border-white max-sm:scale-[80%]'/>
            </div>
            <div className="my-3 ml-auto flex flex-wrap max-w-[250px]">
                <span className='block mb-2 w-5/12 pr-2'>Email Addrss</span>
                <span className='block mb-2 w-7/12 pr-2 text-right'>pronext@gmail.com</span>
                <span className='block mb-2 w-5/12 pr-2'>Address</span>
                <span className='block mb-2 w-7/12 pr-2 text-right'>myadress at philipines</span>
                <span className='block mb-2 w-5/12 pr-2'>Phone No</span>
                <span className='block mb-2 w-7/12 pr-2 text-right'>0834567792</span>
            </div> 
           
        </div>
        <div className="z-20 relative bg-white h-[1px] w-full mt-3 mb-2"></div>
        <div className="flex-center landing-pad relative z-20 flex-col md:flex-row md:justify-between">
                <h3 className="max-md:mb-1 font-semibold text-[15px]">©Pronext Manpower Agency 2024. All Right Reserved</h3>
                <div className="flex-center">
                    <span className=''>Follow Us :</span>
                    <div className="pl-2 flex-center">
                        {_footerLogos.map((Item,key)=>(
                            <Item key={key} className="scale-[40%]"/>
                        ))}
                    </div>
                </div>
            </div>
        <div className="absolute h-72 w-72 rounded-full bg-[#48D08F] -bottom-10 z-10 -right-20"></div>
        
    </div>
  )
}
