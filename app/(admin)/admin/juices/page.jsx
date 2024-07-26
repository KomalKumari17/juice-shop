import ConnectDb from '@/app/db/Connect'
import Juice from '@/app/models/Juice';
import Image from 'next/image';
import Link from 'next/link';

const page = async () => {

    ConnectDb();
    let callingJuice = await Juice.find().populate("category");

  return (
   <div className='w-full p-5'>
   <div className="flex justify-between px-6">
   <h1 className='text-3xl font-bold text-slate-600 '>Manage categories ({callingJuice.length})</h1>
   <Link href="/admin/juices/insert" className='bg-yellow-500 hover:bg-yellow-600 py-2 px-2 rounded-md text-white'>Insert Juice</Link>
   </div>
    <div className='flex p-5 gap-5'>
        <div className='w-full border'>
        <table className='border w-full'>
            <thead>
                <tr>
                    <th className='border px-2'>Id</th>
                    <th className='border px-2'>Title</th>
                    <th className='border px-2'>Price</th>
                    <th className='border px-2'>Category</th>
                    <th className='border px-2'>Cover_Image</th>
                    <th className='border px-2'>Action</th>
                </tr>
            </thead>
            <tbody>
              {callingJuice.map((juice,index) => (
                <tr key={index}>
                    <td className='border p-2 text-center'>{index+1}</td>
                    <td className='border p-2 text-center'>{juice.title}</td>
                    <td className='border p-2 text-center'>{juice.price}</td>
                    <td className='border p-2 text-center capitalize'>{juice.category.catTitle}</td>
                    <td className='border text-center'>
                      <Image src={`/Images/${juice.cover_image}`} width={80} height={80}/>
                    </td>
                    <td className='border p-2 text-center'>
                        
                    </td>
                </tr>
              ))}
            </tbody>
        </table>
        </div>
       
    </div>
   </div>

  )
}

export default page