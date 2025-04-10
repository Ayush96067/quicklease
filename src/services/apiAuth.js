import supabase, { supabaseUrl } from "./supabase";

export async function signup(user) {
  const {
    fullname,
    phone,
    address,
    dob,
    email,
    aadhar,
    imageSrc,
    password,
    pincode,
  } = user;

  const imageName = `${Math.random()}-${imageSrc[0].name}`.replaceAll("/", "");
  const aadharName = `${Math.random()}-${aadhar[0].name}`.replaceAll("/", "");

  const imagePath = `${supabaseUrl}/storage/v1/object/public/avatar/${imageName}`;

  const aadharPath = `${supabaseUrl}/storage/v1/object/public/aadhar/${aadharName}`;

  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        fullname,
        phone,
        address,
        dob,
        imagePath,
        aadharPath,
        pincode,
      },
    },
  });

  if (error) throw new Error(error.message);

  const { error: storageError } = await supabase.storage
    .from("avatar")
    .upload(imageName, imageSrc[0]);

  if (storageError) throw new Error(storageError.message);

  const { error: storageError2 } = await supabase.storage
    .from("aadhar")
    .upload(aadharName, aadhar[0]);

  if (storageError2) throw new Error(storageError2.message);

  return data;
}

export async function login({ email, password }) {
  let { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) throw new Error(error.message);

  return data;
}

export async function getCurrentUser() {
  const { data: session } = await supabase.auth.getSession();
  if (!session.session) return null;

  const { data, error } = await supabase.auth.getUser();

  if (error) throw new Error(error.message);

  return data?.user;
}

export async function logout() {
  const { error } = await supabase.auth.signOut();
  if (error) throw new Error(error.message);
}
