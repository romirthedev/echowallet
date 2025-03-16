import { createClient } from '@supabase/supabase-js';

// Hardcoded Supabase URL and ANON Key
const supabaseUrl = 'https://vzvogrgufnkcjsobczpn.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ6dm9ncmd1Zm5rY2pzb2JjenBuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDIxMDYyMDcsImV4cCI6MjA1NzY4MjIwN30.zRDhCkh3xdT6g6o_hWBdKtn7XXU-a4-hmY60b_6h1RQ';

// Create and export the Supabase client
export const supabase = createClient(supabaseUrl, supabaseKey);
