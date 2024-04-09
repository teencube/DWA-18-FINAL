
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = "https://lbwjdoyxfumtqhpftsre.supabase.co";

const supabaseKey ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imxid2pkb3l4ZnVtdHFocGZ0c3JlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTIxNzc2MjMsImV4cCI6MjAyNzc1MzYyM30.tHq8RzXuPK2lNfQp2E-ZG3vTdzfeSnzaUNqxtz8vYVk"  ;

 const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase