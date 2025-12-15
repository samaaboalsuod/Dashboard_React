import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://leduuotudqzcbkrrgfzn.supabase.co'
const supabaseKey = 'sb_publishable_XRrHY__Yr_PGm5JLDvO9Dg_NZkG9gH3'
export const supabase = createClient(supabaseUrl, supabaseKey)