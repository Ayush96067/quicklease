import supabase, { supabaseUrl } from "./supabase";

export async function createProduct(newProduct) {
  const imageSrc = newProduct.imageSrc[0].name;

  const imageName = `${Math.random()}-${imageSrc}`.replaceAll("/", "");
  const imagePath = `${supabaseUrl}/storage/v1/object/public/product-images/${imageName}`;

  const { data, error } = await supabase
    .from("Products")
    .insert([{ ...newProduct, imageSrc: imagePath, Booked: false }]);

  if (error) {
    console.error(error);
    throw new Error(error.message);
  }

  const { error: storageError } = await supabase.storage
    .from("product-images")
    .upload(imageName, newProduct.imageSrc[0]);

  if (storageError) {
    console.error(storageError.message);
    throw new Error(storageError.message);
  }

  return data;
}

export async function editProduct(data) {
  console.log(data);
  const { column, value, id } = data;
  const { error } = await supabase
    .from("Products")
    .update({ [column]: value })
    .eq("id", id);

  if (error) throw new Error(error.message);
}

export async function getOrder(data) {
  const { column, value } = data.queryKey[1];

  let { data: Products, error } = await supabase
    .from("Products")
    .select("*")
    .eq([column], value);

  if (error) throw new Error(error.message);

  return Products;
}

export async function getAllOrders() {
  let { data, error } = await supabase.from("Products").select("*");
  if (error) throw new Error(error.message);
  return data;
}
