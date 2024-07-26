import ConnectDb from '@/app/db/Connect'
import Category from '@/app/models/Category';
import InsertCategoryForm from '../components/InsertCategoryForm';

const page = async () => {

    ConnectDb();
    let callingCat = await Category.find();

  return (
   <>
   <h1 className='text-3xl font-bold text-slate-600 px-5 pt-5'>Manage categories ({callingCat.length})</h1>
    <div className='flex p-5 gap-5'>
        <div className='w-2/3 border'>
        <table className='border w-full'>
            <thead>
                <tr>
                    <th className='border px-2'>Id</th>
                    <th className='border px-2'>CatTitle</th>
                    <th className='border px-2'>CatDescription</th>
                    <th className='border px-2'>Action</th>
                </tr>
            </thead>
            <tbody>
              {callingCat.map((cat,index) => (
                <tr key={index}>
                    <td className='border p-2 text-center'>{index+1}</td>
                    <td className='border p-2 text-center'>{cat.catTitle}</td>
                    <td className='border p-2 text-center'>{cat.catDesc}</td>
                    <td className='border p-2 text-center gap-2 flex'>
                        <button type='submit' className="bg-yellow-400 hover:bg-yellow-500 px-2 py-1 rounded-md">Edit</button>
                        <button type='submit' className="bg-red-500 hover:bg-red-600 px-2 py- rounded-md">Delete</button>
                    </td>
                </tr>
              ))}
            </tbody>
        </table>
        </div>
        <div className='w-1/3'>
            <div className="bg-slate-200 rounded-md shadow-lg border border-slate-200 p-2">
                <InsertCategoryForm/>
            </div>
        </div>
    </div>
   </>

  )
}

export default page