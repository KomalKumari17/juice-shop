"use server"
import {join} from 'path'
import { writeFile } from 'fs/promises';
import { redirect } from "next/navigation";
import Category from "./models/Category";
import Juice from "./models/Juice";

// category form submit funtion
export const handleSubmit = async(formData) => {
    let catTitle = formData.get("catTitle");
    let catDesc = formData.get("catDesc");

    let record = {catTitle, catDesc};
    let Data = await Category.create(record);
    redirect("/admin/categories")
}

// Juice form submit funtion
export const handleSubmitToInsertJuice = async(formData) => {
    "use server"
    let title = formData.get("title");
    let price = formData.get("price");
    let description = formData.get("description");
    let category = formData.get("category");
    let cover_image = formData.get("cover_image");

    //image work
    let bytes = await cover_image.arrayBuffer();
    let buffer = Buffer.from(bytes)

    let path = join("./public", "Images", cover_image.name);

    await writeFile(path, buffer);

    let data = await Juice.create({title, description, price, cover_image: cover_image.name, category})
    redirect("/admin/juices")
}
