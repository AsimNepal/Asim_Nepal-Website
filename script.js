const progress=document.querySelector('#progress');
const updateProgress=()=>{const available=document.documentElement.scrollHeight-innerHeight;progress.style.width=(available>0?scrollY/available*100:0)+'%'};
window.addEventListener('scroll',updateProgress,{passive:true});updateProgress();
const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target)}}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
const menu=document.querySelector('#menu'),nav=document.querySelector('#nav');menu.addEventListener('click',()=>{const open=nav.classList.toggle('open');menu.setAttribute('aria-expanded',String(open));menu.textContent=open?'×':'☰'});nav.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>{nav.classList.remove('open');menu.setAttribute('aria-expanded','false');menu.textContent='☰'}));
document.querySelector('#year').textContent=new Date().getFullYear();
if(!matchMedia('(prefers-reduced-motion: reduce)').matches){const hero=document.querySelector('.hero'),portrait=document.querySelector('.portrait-area');hero.addEventListener('pointermove',event=>{if(innerWidth<900)return;const bounds=hero.getBoundingClientRect();const x=(event.clientX-bounds.left)/bounds.width-.5,y=(event.clientY-bounds.top)/bounds.height-.5;portrait.style.transform=`translate(${x*14}px,${y*12}px)`});hero.addEventListener('pointerleave',()=>portrait.style.transform='')}
