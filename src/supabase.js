import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://qfmwnewyxjendgndidqf.supabase.co'; // Replace with your Supabase API URL
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFmbXduZXd5eGplbmRnbmRpZHFmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzM4MzYyNTMsImV4cCI6MjA0OTQxMjI1M30.h-WqE4s8_Lu9f0uOwac8DL4YxRVBbhpIF_xe3cmMh4w'; // Replace with your Supabase anon key

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
