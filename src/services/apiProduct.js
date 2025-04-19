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

export async function editProductColumn(data) {
  console.log(data);
  const { column, value, id } = data;
  const { error } = await supabase
    .from("Products")
    .update({ [column]: value })
    .eq("id", id);

  if (error) throw new Error(error.message);
}

export async function getAllOrders() {
  let { data, error } = await supabase.from("Products").select("*");
  if (error) throw new Error(error.message);
  return data;
}

export async function editProduct(newProduct, id) {
  console.log(newProduct.imageSrc, id);
  // https://gesdfxobzesdfmeaonhm.supabase.co/storage/v1/object/public/product-images//0.862307553186588-img12.png

  const imageSrc = newProduct.imageSrc[0].name;

  const imageName = `${Math.random()}-${imageSrc}`.replaceAll("/", "");
  const imagePath = `${supabaseUrl}/storage/v1/object/public/product-images/${imageName}`;

  const { data, error } = await supabase
    .from("Products")
    .update([{ ...newProduct, imageSrc: imagePath }])
    .eq("id", id);

  if (error) {
    console.error(error);
    throw new Error(error.message);
  }

  const { error: storageError } = await supabase.storage
    .from("product-images")
    .upload(imageName, newProduct.imageSrc[0]);

  if (storageError) {
    await supabase.from("cabins").delete().eq("id", data.id);
    console.error(storageError.message);
    throw new Error(storageError.message);
  }

  return data;
}

export async function Booking(bookings) {
  const { product_id } = bookings;

  editProductColumn({ column: "Booked", value: true, id: product_id });

  const { data, error } = await supabase
    .from("Booking")
    .insert({ ...bookings });

  if (error) throw new Error(error.message);

  return data;
}

export async function getOrderHistory(data) {
  const { column, value } = data.queryKey[1];
  let { data: Booking, error } = await supabase
    .from("Booking")
    .select("*")
    .eq([column], value);

  if (error) {
    console.error(error.message);
    throw new Error(error.message);
  }

  return Booking;
}

export async function getOrder(data) {
  console.log(data);

  const { column, value } = data.queryKey[1];

  let { data: Products, error } = await supabase
    .from("Products")
    .select("*")
    .eq([column], value);

  if (error) throw new Error(error.message);

  return Products;
}
