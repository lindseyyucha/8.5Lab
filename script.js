import { createClient } from "https://esm.sh/@supabase/supabase-js";

const supabaseUrl = 'https://hcqebjnptjgxiilhbajh.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhjcWViam5wdGpneGlpbGhiYWpoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTAyNzAxNzUsImV4cCI6MjAyNTg0NjE3NX0.a-bx7aMAkGA2QjRPa3zoObjV5EoQmnYZraMHlGFIN38';
const supabase = createClient(supabaseUrl, supabaseKey);

async function getBooks() {
  let { data: Books, error } = await supabase
    .from('Books')
    .select('*');

  let tableBody = document.getElementById('BooksBody');
  for (let book of Books) {
    let row = document.createElement('tr');
    row.innerHTML = `
      <td>${book.title}</td>
      <td>${book.author}</td>
      <td>${book.isbn}</td>
    `;
    tableBody.appendChild(row);
  }
}

getBooks();