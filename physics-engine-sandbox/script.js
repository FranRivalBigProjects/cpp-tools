const res=document.getElementById('res');
function run(){
let txt=document.getElementById('input').value.toLowerCase();
let out='Analysis:\n';
if(txt.includes('template')) out+='- Template usage detected\n';
if(txt.includes('unique_ptr')||txt.includes('shared_ptr')) out+='- Smart pointer usage\n';
if(txt.includes('thread')) out+='- Multithreading context\n';
if(txt.includes('mutex')) out+='- Possible contention\n';
if(txt.includes('vector')||txt.includes('list')) out+='- STL container usage\n';
out+='- Analyze performance, memory, and compile-time behavior\n';
res.innerText=out;
}