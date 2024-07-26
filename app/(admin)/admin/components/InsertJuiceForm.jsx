"use client"
import { handleSubmitToInsertJuice } from "@/app/Action";
import toast from "react-hot-toast";
import { z } from "zod";


const InsertJuiceForm = ({callingCat}) => {

    let JuiceValidationSchema = z.object({
        title: z.string({
            required_error:"title is required",
            invalid_type_error:"title must be string"
        }),
        description: z.string(),
        price: z.number(),
        cover_image: z.string(),
        category: z.string(),

    })
   
    const InsertJuiceClientAction = async(formData) => {

        let records = {
            "title" : formData.get("title"),
            "description" : formData.get("description"),
            "price" : +formData.get("price"),
            "cover_image" : formData.get("cover_image").name,
            "category" : formData.get("category"),
        }
        let data = JuiceValidationSchema.safeParse(records);

        if(!data.success){
            data.error.issues.forEach((err) => {
                toast.error(err.path[0] + ":" + err.message)
                });
                return;

        }
        await handleSubmitToInsertJuice(formData);
    }
  return (
    <form action={InsertJuiceClientAction} method='Post'>
    <div className="mb-3 flex flex-col">
        <label htmlFor="title">Title</label>
        <input type="text" id='title' name='title' className='border px-3 py-2' />
    </div>
    <div className="mb-3 flex flex-col">
        <label htmlFor="description">Description</label>
        <input type="text" id='description' name='description' className='border px-3 py-2' />
    </div>
    <div className="mb-3 flex flex-col">
        <label htmlFor="price">Price</label>
        <input type="text" id='price' name='price' className='border px-3 py-2' />
    </div>
    <div className="mb-3 flex flex-col">
        <label htmlFor="category">Category</label>
        <select type="text" id='category' name='category' className='border px-3 py-2' >
                <option value="" selected disabled>Select Category</option>
            {callingCat.map((cat, i) => (<option value={cat._id} className='py-2 capitalize'>{cat.catTitle}</option>))    
            }
        </select>
    </div>
    <div className="mb-3 flex flex-col">
        <label htmlFor="cover_image">Image</label>
        <input type="file" id='cover_image' name='cover_image' className='border px-3 py-2' />
    </div>
    <div className="mb-3 flex flex-col">
        <button type="submit" className='bg-yellow-500 hover:bg-yellow-600 rounded-md px-3 py-2'>Add Juice</button>
    </div>
</form>
  )
}

export default InsertJuiceForm

