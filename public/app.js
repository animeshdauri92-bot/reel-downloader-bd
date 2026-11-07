const input=document.getElementById('url'), result=document.getElementById('result'), go=document.getElementById('go');
document.getElementById('paste').addEventListener('click',async()=>{try{input.value=await navigator.clipboard.readText()}catch{result.textContent='ব্রাউজারে Paste অনুমতি দিন অথবা Ctrl+V চাপুন।'}});
go.addEventListener('click',async()=>{
 const url=input.value.trim(); result.textContent='লিংক যাচাই হচ্ছে…'; go.disabled=true;
 try{
  const r=await fetch('/api/check',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({url})});
  const data=await r.json();
  if(!r.ok) throw new Error(data.error||'যাচাই করা যায়নি।');
  result.innerHTML='';
  const msg=document.createElement('p');msg.textContent=data.message+' ';
  const a=document.createElement('a');a.href=data.downloadUrl;a.textContent='ভিডিও খুলুন / সংরক্ষণ করুন';a.target='_blank';a.rel='noopener noreferrer';
  msg.appendChild(a);result.appendChild(msg);
 }catch(e){result.textContent=e.message}
 finally{go.disabled=false}
});
