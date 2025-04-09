import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://gesdfxobzesdfmeaonhm.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imdlc2RmeG9iemVzZGZtZWFvbmhtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzkzNTI3NzksImV4cCI6MjA1NDkyODc3OX0.Fe6qHib-VVuAKd3nKfsQHiBPyvAsVQYtkU7rJ7RoYsA";

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
