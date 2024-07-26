"use client"
import { handleSubmit } from '@/app/Action';
import {toast} from 'react-hot-toast';
import {z} from 'zod';
const InsertCategoryForm = () => {
    let category = z.object({
        catTitle: z.string().min(1, {message:"Required"}),
        catDesc: z.string().max(1, {message:"maximum 10 characters only"})
    })
    let clientAction = async(formData) => {
       
        let records = {
            catTitle : formData.get("catTitle"),
            catDesc : formData.get("catDesc"),
        }
        let data = category.safeParse(records);

        if(!data.success){
            data.error.issues.forEach((issue) => {
            toast.error(issue.path[0] + ":" + issue.message)
            });
            
            return;
        }
         await handleSubmit(formData)
    }
  return (
    <form action={clientAction} method='Post'>
                    <div className="mb-3 flex flex-col">
                        <label htmlFor="catTitle">Category Title</label>
                        <input type="text" id='catTitle' name='catTitle' className='border px-3 py-2' />
                    </div>
                    <div className="mb-3 flex flex-col">
                        <label htmlFor="catDesc">Category Description</label>
                        <textarea rows={5} type="text" id='catDesc' name='catDesc' className='border px-3 py-2' />
                    </div>
                    <div className="mb-3 flex flex-col">
                        <button type="submit" className='bg-yellow-500 hover:bg-yellow-600 rounded-md px-3 py-2'>Create Category</button>
                    </div>
                </form>
)
}

export default InsertCategoryForm