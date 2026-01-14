import { createClient } from '@supabase/supabase-js';


// Initialize database client
const supabaseUrl = 'https://tqxvrxpacrdgoapjhqmv.databasepad.com';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6Ijg0ZGNjN2YzLWRjZGMtNDJjYS1iOWU5LTlkMWUwNjkxZTFiMCJ9.eyJwcm9qZWN0SWQiOiJ0cXh2cnhwYWNyZGdvYXBqaHFtdiIsInJvbGUiOiJhbm9uIiwiaWF0IjoxNzY4MzEyMjk4LCJleHAiOjIwODM2NzIyOTgsImlzcyI6ImZhbW91cy5kYXRhYmFzZXBhZCIsImF1ZCI6ImZhbW91cy5jbGllbnRzIn0.M5aLWAjzhQBGcmJDWZyEGa9ZJIVWGRqFxgJRRn68cRg';
const supabase = createClient(supabaseUrl, supabaseKey);


export { supabase };