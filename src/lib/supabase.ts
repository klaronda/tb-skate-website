import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://qsixicpenosvnhbohxoc.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFzaXhpY3Blbm9zdm5oYm9oeG9jIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzU4OTIyOTUsImV4cCI6MjA1MTQ2ODI5NX0.2e8Q8Q8Q8Q8Q8Q8Q8Q8Q8Q8Q8Q8Q8Q8Q8Q8Q8Q8Q8'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)









