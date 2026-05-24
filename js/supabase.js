const SUPABASE_URL = 'https://usyqwfkkjsixxngbxvfk.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVzeXF3ZmtranNpeHhuZ2J4dmZrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzk2Mjk1NzYsImV4cCI6MjA5NTIwNTU3Nn0.jdVxKMsrOEWEy2E9-3KNi3Do0uRYEf91JoZwqZgweoA';

const supabaseClient = supabase.createClient(
  SUPABASE_URL,
  SUPABASE_ANON_KEY
);
