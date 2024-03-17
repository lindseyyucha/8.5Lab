import { createClient } from "https://esm.sh/@supabase/supabase-js";

const supabaseUrl = 'https://hcqebjnptjgxiilhbajh.supabase.co';
const supabaseKey = 'YOUR_SUPABASE_KEY_HERE';
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