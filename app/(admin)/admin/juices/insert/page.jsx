import { juice_handleSubmit } from '@/app/Action';
import ConnectDb from '@/app/db/Connect'
import Category from '@/app/models/Category';
import Link from 'next/link';
import InsertJuiceForm from '../../components/InsertJuiceForm';

const page = async () => {
    ConnectDb();
    let callingCat = await Category.find();
    
  return (
    <>
    <div className='w-2/3 p-10'>
    <div className="flex justify-between py-3">
        <h1 className='text-3xl text-slate-600 font-bold'>Insert Juice Data</h1>
        <Link href="/admin/juices" className='bg-yellow-500 hover:bg-yellow-600 py-2 px-2 rounded-md text-white'>Go Back</Link>
    </div>
    <div className="bg-slate-200 rounded-md shadow-lg border border-slate-200 p-2">
       <InsertJuiceForm callingCat={callingCat}/>
    </div>
</div>
    
    </>
  )
}

export default page