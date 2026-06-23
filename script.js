document.addEventListener('DOMContentLoaded', ()=>{
  const btn = document.getElementById('counter-btn');
  const text = document.getElementById('counter-text');
  let count = 0;
  btn.addEventListener('click', ()=>{
    count += 1;
    text.textContent = `Has pulsado el botón ${count} veces.`;
  });
});
