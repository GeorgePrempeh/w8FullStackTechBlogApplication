// Simple front-end logic for demo purposes
async function fetchCategories() {
  const res = await fetch('/api/categories');
  const categories = await res.json();
  const catDiv = document.getElementById('categories');
  catDiv.innerHTML = '<h2>Categories</h2>' + categories.map(c => `<button onclick="fetchPosts(${c.id})">${c.name}</button>`).join(' ');
}

async function fetchPosts(categoryId) {
  let url = '/api/posts';
  if (categoryId) url += `?category=${categoryId}`;
  const res = await fetch(url);
  const posts = await res.json();
  const postsDiv = document.getElementById('posts');
  postsDiv.innerHTML = '<h2>Posts</h2>' + posts.map(p => `<div><h3>${p.title}</h3><p>${p.content}</p></div>`).join('');
}

fetchCategories();
fetchPosts();

// Auth logic
const registerForm = document.getElementById('registerForm');
registerForm.onsubmit = async (e) => {
  e.preventDefault();
  const data = Object.fromEntries(new FormData(registerForm));
  const res = await fetch('/api/auth/register', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  });
  alert((await res.json()).message);
};

const loginForm = document.getElementById('loginForm');
loginForm.onsubmit = async (e) => {
  e.preventDefault();
  const data = Object.fromEntries(new FormData(loginForm));
  const res = await fetch('/api/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  });
  alert((await res.json()).message);
};

document.getElementById('logoutBtn').onclick = async () => {
  const res = await fetch('/api/auth/logout', { method: 'POST' });
  alert((await res.json()).message);
};
