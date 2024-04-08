import Layout from '../layout/Layout'
import { Button } from '../ui/button'
import { _mockServices } from '../../util/constants'
import { AlertDialog, AlertDialogContent, AlertDialogTrigger,AlertDialogCancel,AlertDialogAction } from '../ui/alert-dialog'
import { Svgs } from '../../util/svgs'
import { Link } from 'react-router-dom'
export default function ServiceList() {
  return (
    <Layout>
        <div className="px-2 mt-5 mb-1 flex-center justify-between">
            <h3 className="section-header">Services</h3>
            <Link to={"/admin/services/add"}>
                <Button className='px-5'>Add Servcice</Button>
            </Link>
        </div>
        <div className="mt-6 flex-center flex-wrap">
        {_mockServices.map((item,key)=>(
                <div key={key} className='mb-5 sm:w-6/12 lg:w-4/12 sm:px-2 relative max-w-[380px]'>
                    <Link to={`/admin/services/${key+1}`} className='block w-full' key={key}>
                        <div key={key} className='relative w-full '>
                            <div className="mb-4  mx-auto max-w-[420px]">
                                <div className="aspect-[3/2] rounded-md overflow-hidden">
                                    <img src={item.image} className='h-full w-full object-contain'/>
                                </div>
                                <h1 className="mt-4  text-pro-blue text-base font-bold">{item.title}</h1>
                            </div>
                        </div>
                    </Link>
                    <AlertDialog>
                        <AlertDialogTrigger  className='absolute cursor-pointer top-0 right-1'>
                            <>
                                <Svgs.cancelSvg className='scale-50'/>
                            </> 
                        </AlertDialogTrigger>
                        <AlertDialogContent>
                            <h1 className="text-center font-semibold text-base">Are you sure you want to delete this service</h1>
                            <div className='mt-4 mb-6 flex justify-around'>
                              <AlertDialogCancel className='px-6'>Cancel</AlertDialogCancel>
                              <AlertDialogAction className='px-6'>Continue</AlertDialogAction>
                            </div>
                        </AlertDialogContent>
                    </AlertDialog>
                </div>


            ))}
        </div>
    </Layout>
  )
}
