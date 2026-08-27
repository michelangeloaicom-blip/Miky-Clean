// Miky Clean & Go - Script
const prices = [
["Bluza maneca lunga","Articole de imbracaminte Curatatorie",19.5,"Buc"],
["Bluza trening","Articole de imbracaminte Curatatorie",22,"Buc"],
["Camasa","Articole de imbracaminte Curatatorie",22,"Buc"],
["Camasa / Bluza (delicata/pietre/paiete)","Articole de imbracaminte Curatatorie",35,"Buc"],
["Camasa matase/pliuri/delicata","Articole de imbracaminte Curatatorie",35,"Buc"],
["Combinezon ski","Articole de imbracaminte Curatatorie",75,"Buc"],
["Corset","Articole de imbracaminte Curatatorie",35,"Buc"],
["Cravata/Fular/Esarfa matase","Articole de imbracaminte Curatatorie",24.9,"Buc"],
["Cravata/Fular/Esarfa/Caciula/Manusi","Articole de imbracaminte Curatatorie",16,"Buc"],
["Fusta lunga","Articole de imbracaminte Curatatorie",35,"Buc"],
["Fusta ocazie","Articole de imbracaminte Curatatorie",45,"Buc"],
["Fusta pliuri/delicata","Articole de imbracaminte Curatatorie",45,"Buc"],
["Fusta scurta","Articole de imbracaminte Curatatorie",25,"Buc"],
["Geaca blugi","Articole de imbracaminte Curatatorie",37,"Buc"],
["Geaca groasa/puf lunga","Articole de imbracaminte Curatatorie",75,"Buc"],
["Geaca groasa/puf scurta","Articole de imbracaminte Curatatorie",65,"Buc"],
["Geaca puf scurta/subțire","Articole de imbracaminte Curatatorie",45,"Buc"],
["Geaca ski","Articole de imbracaminte Curatatorie",55,"Buc"],
["Haina blana sintetica/scurta","Articole de imbracaminte Curatatorie",55,"Buc"],
["Hanorac","Articole de imbracaminte Curatatorie",27,"Buc"],
["Palton/Pardesiu lung","Articole de imbracaminte Curatatorie",68,"Buc"],
["Palton/Pardesiu/Balonzaid/scurt","Articole de imbracaminte Curatatorie",55,"Buc"],
["Pantalon delicat","Articole de imbracaminte Curatatorie",35,"Buc"],
["Pantalon lung/dunga","Articole de imbracaminte Curatatorie",27,"Buc"],
["Pantalon pijama","Articole de imbracaminte Curatatorie",15,"Buc"],
["Pantalon scurt","Articole de imbracaminte Curatatorie",17.5,"Buc"],
["Pantalon trening/blugi","Articole de imbracaminte Curatatorie",24.5,"Buc"],
["Pantalon/Bluza/Halat scurt medical","Articole de imbracaminte Curatatorie",23.9,"Buc"],
["Pantaloni ski","Articole de imbracaminte Curatatorie",45,"Buc"],
["Pulover","Articole de imbracaminte Curatatorie",25,"Buc"],
["Pulover (delicat/pietre/paiete)","Articole de imbracaminte Curatatorie",33,"Buc"],
["Roba magistrat/vesmant preotesc","Articole de imbracaminte Curatatorie",55,"Buc"],
["Rochie cu accesorii","Articole de imbracaminte Curatatorie",74.9,"Buc"],
["Rochie delicata fara accesorii MATASE","Articole de imbracaminte Curatatorie",55,"Buc"],
["Rochie lunga de ocazie (APLICATII)","Articole de imbracaminte Curatatorie",100,"Buc"],
["Rochie lunga de zi (simpla)","Articole de imbracaminte Curatatorie",50,"Buc"],
["Rochie Mireasa ampla","Articole de imbracaminte Curatatorie",500,"Buc"],
["Rochie Mireasa foarte mare + pete","Articole de imbracaminte Curatatorie",800,"Buc"],
["Rochie Mireasa simpla","Articole de imbracaminte Curatatorie",300,"Buc"],
["Rochie scurta de ocazie","Articole de imbracaminte Curatatorie",50,"Buc"],
["Rochie scurta de zi","Articole de imbracaminte Curatatorie",35,"Buc"],
["Rochie simpla/Sarafan/Salopeta Dama Simpla","Articole de imbracaminte Curatatorie",47,"Buc"],
["Sacou (delicat/pietre/paiete)","Articole de imbracaminte Curatatorie",42,"Buc"],
["Sacou barbatesc","Articole de imbracaminte Curatatorie",30,"Buc"],
["Sacou dama","Articole de imbracaminte Curatatorie",26,"Buc"],
["Salopeta de lucru","Articole de imbracaminte Curatatorie",28,"Buc"],
["Salopeta de ocazie","Articole de imbracaminte Curatatorie",59.9,"Buc"],
["Sapca/Palarie","Articole de imbracaminte Curatatorie",17.5,"Buc"],
["Scurta de stofa","Articole de imbracaminte Curatatorie",44,"Buc"],
["Tricou / Maiou (delicat/pietre/paiete)","Articole de imbracaminte Curatatorie",25.9,"Buc"],
["Tricou Polo","Articole de imbracaminte Curatatorie",17.5,"Buc"],
["Tricou simplu","Articole de imbracaminte Curatatorie",14,"Buc"],
["Vesta blana sintetica","Articole de imbracaminte Curatatorie",45,"Buc"],
["Vesta blana sintetica lunga","Articole de imbracaminte Curatatorie",60,"Buc"],
["Vesta blugi","Articole de imbracaminte Curatatorie",20,"Buc"],
["Vesta costum","Articole de imbracaminte Curatatorie",17.5,"Buc"],
["Vesta matlasata lunga","Articole de imbracaminte Curatatorie",47,"Buc"],
["Vesta matlasata scurta","Articole de imbracaminte Curatatorie",35,"Buc"],
["Vesta puf lunga","Articole de imbracaminte Curatatorie",55,"Buc"],
["Vesta puf scurta","Articole de imbracaminte Curatatorie",43,"Buc"],
["Voal mireasa mare","Articole de imbracaminte Curatatorie",50,"Buc"],
["Voal mireasa mic","Articole de imbracaminte Curatatorie",28,"Buc"],
["Abonament 10 kg","Abonamente Calcat",340,"Kg"],
["Abonament 15 kg","Abonamente Calcat",455,"Kg"],
["Abonament 20 kg","Abonamente Calcat",540,"Kg"],
["Abonament Bussiness (Camasi)","Abonamente Calcat",500,"Kg"],
["Bluza maneca lunga","Articole de imbracaminte Calcatorie",15,"Buc"],
["Bluza trening","Articole de imbracaminte Calcatorie",18,"Buc"],
["Camasa / Bluza","Articole de imbracaminte Calcatorie",18,"Buc"],
["Camasa / Bluza (delicata/pietre/paiete)","Articole de imbracaminte Calcatorie",25,"Buc"],
["Camasa matase","Articole de imbracaminte Calcatorie",25,"Buc"],
["Cravata/Fular/Esarfa matase","Articole de imbracaminte Calcatorie",18.5,"Buc"],
["Cravata/Fular/Esarfa/Caciula/Manusi","Articole de imbracaminte Calcatorie",10,"Buc"],
["Fusta lunga","Articole de imbracaminte Calcatorie",25,"Buc"],
["Fusta pliuri/delicata","Articole de imbracaminte Calcatorie",30,"Buc"],
["Fusta scurta","Articole de imbracaminte Calcatorie",18,"Buc"],
["Geaca blugi","Articole de imbracaminte Calcatorie",30,"Buc"],
["Hanorac","Articole de imbracaminte Calcatorie",22,"Buc"],
["Palton scurt/lung","Articole de imbracaminte Calcatorie",40,"Buc"],
["Pantalon delicat","Articole de imbracaminte Calcatorie",19.9,"Buc"],
["Pantalon lung","Articole de imbracaminte Calcatorie",23,"Buc"],
["Pantalon pijama","Articole de imbracaminte Calcatorie",10,"Buc"],
["Pantalon scurt","Articole de imbracaminte Calcatorie",13.5,"Buc"],
["Pantalon trening","Articole de imbracaminte Calcatorie",20,"Buc"],
["Pantalon/Bluza/Halat scurt medical","Articole de imbracaminte Calcatorie",20,"Buc"],
["Pulover","Articole de imbracaminte Calcatorie",20,"Buc"],
["Pulover (delicat/pietre/paiete)","Articole de imbracaminte Calcatorie",25,"Buc"],
["Roba magistrat/vesmant preotesc","Articole de imbracaminte Calcatorie",40,"Buc"],
["Rochie cu accesorii","Articole de imbracaminte Calcatorie",60,"Buc"],
["Rochie delicata fara accesorii","Articole de imbracaminte Calcatorie",48,"Buc"],
["Rochie lunga de ocazie (APLICATII)","Articole de imbracaminte Calcatorie",80,"Buc"],
["Rochie lunga de zi (simpla)","Articole de imbracaminte Calcatorie",40,"Buc"],
["Rochie Mireasa foarte mare","Articole de imbracaminte Calcatorie",500,"Buc"],
["Rochie Mireasa simpla","Articole de imbracaminte Calcatorie",250,"Buc"],
["Rochie scurta de ocazie","Articole de imbracaminte Calcatorie",40,"Buc"],
["Rochie simpla/Sarafan/Salopeta Dama Simpla","Articole de imbracaminte Calcatorie",40,"Buc"],
["Sacou (delicat/pietre/paiete)","Articole de imbracaminte Calcatorie",39,"Buc"],
["Sacou barbatesc","Articole de imbracaminte Calcatorie",25,"Buc"],
["Sacou dama","Articole de imbracaminte Calcatorie",22.5,"Buc"],
["Salopeta de lucru","Articole de imbracaminte Calcatorie",22,"Buc"],
["Salopeta de ocazie","Articole de imbracaminte Calcatorie",50,"Buc"],
["Sapca/Palarie","Articole de imbracaminte Calcatorie",5.9,"Buc"],
["Scurta de stofa","Articole de imbracaminte Calcatorie",35,"Buc"],
["Tricou / Maiou (delicat/pietre/paiete)","Articole de imbracaminte Calcatorie",20,"Buc"],
["Tricou Polo","Articole de imbracaminte Calcatorie",14.5,"Buc"],
["Tricou simplu","Articole de imbracaminte Calcatorie",12,"Buc"],
["Vesta Blugi","Articole de imbracaminte Calcatorie",15,"Buc"],
["Vesta costum","Articole de imbracaminte Calcatorie",12,"Buc"],
["Voal mireasa mare","Articole de imbracaminte Calcatorie",45,"Buc"],
["Voal mireasa mic","Articole de imbracaminte Calcatorie",25,"Buc"],
["CEARCEAF PAT / PROTECTIE SALTEA","Lenjerie si articole de casa Curatatorie",17,"Buc"],
["CEARCEAF PLIC","Lenjerie si articole de casa Curatatorie",19.5,"Buc"],
["Cerga de lana","Lenjerie si articole de casa Curatatorie",120,"Buc"],
["COVOR BLANA OAIE","Lenjerie si articole de casa Curatatorie",59.9,"Buc"],
["COVOR BLANA SINTETIC","Lenjerie si articole de casa Curatatorie",25,"Buc"],
["DRAPERII GROASE","Lenjerie si articole de casa Curatatorie",16.9,"m2"],
["DRAPERII SUBTIRI","Lenjerie si articole de casa Curatatorie",8.9,"m2"],
["FATA DE MASA + 12 PERSOANE (FILEU)","Lenjerie si articole de casa Curatatorie",39,"Buc"],
["FATA DE MASA MARE ( 8-10 PERSOANE )","Lenjerie si articole de casa Curatatorie",30,"Buc"],
["FATA DE MASA MICA ( 4-6 PERSOANE )","Lenjerie si articole de casa Curatatorie",27,"Buc"],
["FATA DE PERNA MARE","Lenjerie si articole de casa Curatatorie",9.5,"Buc"],
["FATA DE PERNA MEDIE","Lenjerie si articole de casa Curatatorie",8,"Buc"],
["HALAT DE BAIE / HALAT DE CASA","Lenjerie si articole de casa Curatatorie",27,"Buc"],
["HUSA CANAPEA 2 LOCURI","Lenjerie si articole de casa Curatatorie",47,"Buc"],
["HUSA CANAPEA 3 LOCURI / HUSA SALTEA","Lenjerie si articole de casa Curatatorie",57,"Buc"],
["HUSA FOTOLIU","Lenjerie si articole de casa Curatatorie",32,"Buc"],
["Husa saltea 1 persoana","Lenjerie si articole de casa Curatatorie",57,"Buc"],
["Husa saltea dubla","Lenjerie si articole de casa Curatatorie",84,"Buc"],
["HUSA SCAUN","Lenjerie si articole de casa Curatatorie",18,"Buc"],
["Husa Scaun exterior","Lenjerie si articole de casa Curatatorie",25,"Buc"],
["MANUSA BUCATAR","Lenjerie si articole de casa Curatatorie",8.9,"Buc"],
["NAPRON / SERVET","Lenjerie si articole de casa Curatatorie",8.9,"Buc"],
["PATURA / CUVERTURA MICA / PILOTA VARA","Lenjerie si articole de casa Curatatorie",50,"Buc"],
["PATURA dubla / CUVERTURA MARE / PILOTA IARNA","Lenjerie si articole de casa Curatatorie",65,"Buc"],
["Patura groasa","Lenjerie si articole de casa Curatatorie",75,"Buc"],
["PERDELE","Lenjerie si articole de casa Curatatorie",6.9,"m2"],
["PERNA PUF MARE","Lenjerie si articole de casa Curatatorie",47,"Buc"],
["PERNA PUF MEDIE","Lenjerie si articole de casa Curatatorie",38,"Buc"],
["PERNA SINTETICA MARE","Lenjerie si articole de casa Curatatorie",40,"Buc"],
["PERNA SINTETICA MEDIE","Lenjerie si articole de casa Curatatorie",35,"Buc"],
["PERNUTE DECOR / PERNUTE SCAUN","Lenjerie si articole de casa Curatatorie",15,"Buc"],
["PIJAMA","Lenjerie si articole de casa Curatatorie",25,"Buc"],
["Pilota 1 persoana","Lenjerie si articole de casa Curatatorie",50,"Buc"],
["Pilota dubla","Lenjerie si articole de casa Curatatorie",65,"Buc"],
["PILOTA PUF (1 pers)","Lenjerie si articole de casa Curatatorie",55,"Buc"],
["PILOTA PUF (2 pers)","Lenjerie si articole de casa Curatatorie",85,"Buc"],
["PLAPUMA","Lenjerie si articole de casa Curatatorie",150,"Buc"],
["PROSOP BUCATARIE","Lenjerie si articole de casa Curatatorie",7.5,"Buc"],
["PROSOP MARE","Lenjerie si articole de casa Curatatorie",15,"Buc"],
["PROSOP MEDIU","Lenjerie si articole de casa Curatatorie",12,"Buc"],
["PROSOP MIC","Lenjerie si articole de casa Curatatorie",10,"Buc"],
["SET BOTEZ","Lenjerie si articole de casa Curatatorie",50,"Buc"],
["SET COVORASE BAIE","Lenjerie si articole de casa Curatatorie",40,"Set"],
["SORT BUCATAR","Lenjerie si articole de casa Curatatorie",15,"Buc"],
["CEARCEAF PAT / PROTECTIE SALTEA","Lenjerie si articole de casa Calcatorie",15,"Buc"],
["CEARCEAF PLIC","Lenjerie si articole de casa Calcatorie",16,"Buc"],
["DRAPERII SUBTIRI CALCAT","Lenjerie si articole de casa Calcatorie",8,"m2"],
["FATA DE MASA + 12 PERSOANE (FILEU)","Lenjerie si articole de casa Calcatorie",26,"Buc"],
["FATA DE MASA MARE ( 8-10 PERSOANE )","Lenjerie si articole de casa Calcatorie",25,"Buc"],
["FATA DE MASA MICA ( 4-6 PERSOANE )","Lenjerie si articole de casa Calcatorie",23,"Buc"],
["FATA DE PERNA MARE","Lenjerie si articole de casa Calcatorie",7.9,"Buc"],
["FATA DE PERNA MEDIE","Lenjerie si articole de casa Calcatorie",6.9,"Buc"],
["FATA DE PERNA MICA","Lenjerie si articole de casa Calcatorie",5.9,"Buc"],
["HALAT DE BAIE / HALAT DE CASA","Lenjerie si articole de casa Calcatorie",11.9,"Buc"],
["MAIOU","Lenjerie si articole de casa Calcatorie",5,"Buc"],
["NAPRON / SERVET","Lenjerie si articole de casa Calcatorie",5.9,"Buc"],
["PANTALON PIJAMA","Lenjerie si articole de casa Calcatorie",7.9,"Buc"],
["PERDELE CALCAT","Lenjerie si articole de casa Calcatorie",6,"m2"],
["PIJAMA","Lenjerie si articole de casa Calcatorie",18,"Buc"],
["PROSOP MARE","Lenjerie si articole de casa Calcatorie",7.9,"Buc"],
["PROSOP MEDIU","Lenjerie si articole de casa Calcatorie",5.9,"Buc"],
["PROSOP MIC","Lenjerie si articole de casa Calcatorie",4.9,"Buc"],
["CARPETA","Diverse articole Curatatorie",20,"Buc"],
["CASCA MOTO / SKI","Diverse articole Curatatorie",31.9,"Buc"],
["Cort la kg ( spălat+uscat) (fără mucegai ) FĂRĂ GARANȚIE !","Diverse articole Curatatorie",20,"Kg"],
["GEANTA material textil mare","Diverse articole Curatatorie",34.9,"Buc"],
["GEANTA material textil mica / poseta","Diverse articole Curatatorie",19.9,"Buc"],
["JUCARIE PLUS MARE","Diverse articole Curatatorie",32.9,"Buc"],
["JUCARIE PLUS MEDIE","Diverse articole Curatatorie",32.9,"Buc"],
["JUCARIE PLUS MICA","Diverse articole Curatatorie",18.9,"Buc"],
["PERNA PENTRU BALANSOAR / SEZLONG","Diverse articole Curatatorie",25,"Buc"],
["PRELATA AUTO","Diverse articole Curatatorie",31.9,"Buc"],
["PRELATA MOTO / BICICLETA","Diverse articole Curatatorie",11.9,"Buc"],
["RUCSAC TEXTIL","Diverse articole Curatatorie",31.9,"Buc"],
["SAC DE DORMIT","Diverse articole Curatatorie",35,"Buc"],
["SCAUN AUTO COPIL","Diverse articole Curatatorie",39.9,"Set"],
["SET HUSE SCAUNE AUTO","Diverse articole Curatatorie",50,"Buc"],
["TROLLER MARE","Diverse articole Curatatorie",79.9,"Buc"],
["TROLLER MIC","Diverse articole Curatatorie",49.9,"Buc"],
["GEACA IMITATIE PIELE","Articole din piele Curatatorie",53,"Buc"],
["GEACA PIELE LUNGA","Articole din piele Curatatorie",96,"Buc"],
["GEACA PIELE MOTO","Articole din piele Curatatorie",49.9,"Buc"],
["GEACA PIELE SCURTA","Articole din piele Curatatorie",60,"Buc"],
["GEANTA PIELE MARE","Articole din piele Curatatorie",55,"Buc"],
["GEANTA PIELE MICA","Articole din piele Curatatorie",35,"Buc"],
["PANTALON PIELE / FUSTA PIELE","Articole din piele Curatatorie",49.9,"Buc"],
["PANTALON PIELE MOTO","Articole din piele Curatatorie",74.9,"Buc"],
["RUCSAC PIELE","Articole din piele Curatatorie",37.9,"Buc"],
["VESTA PIELE","Articole din piele Curatatorie",69.9,"Buc"],
["Fețe de masa între 100-200 kg (per colectare)","Horeca",12,"Kg"],
["Fețe de masa pana in 100 kg (per colectare)","Horeca",15,"Kg"],
["Fete de masa pana in 50 kg (per colectare)","Horeca",18,"Buc"],
["Fețe de masa peste 200kg (per colectare)","Horeca",9.5,"Kg"],
["Prosoape (Spălat, uscat, impachetat) la kg","Prețuri haine la KG",23,"Kg"],
["Spălat și Călcat la Kg","Prețuri haine la KG",55,"Kg"],
["Spalat/uscat la kg","Prețuri haine la KG",45,"Kg"],
["Albire","Extra",10,"Buc"],
["Apret","Extra",10,"Buc"],
["Cusut nasture","Extra",5,"Buc"],
["Cusut ruptura","Extra",10,"Buc"],
["Folie","Extra",1,"Buc"],
["Impermeabilizare","Extra",10,"Buc"],
["Sac","Extra",2,"Buc"],
["Adidasi/Ghete/Pantofi/Mocasini din piele intoarsa","Incaltaminte Curatatorie",90,"Buc"],
["Adidasi/Tenesi din piele sau vinyl","Incaltaminte Curatatorie",85,"Buc"],
["Boots/Clapari/Incaltaminte Moto","Incaltaminte Curatatorie",75.99,"Buc"],
["Cizme Lungi din piele sau piele intoarsa","Incaltaminte Curatatorie",90,"Buc"],
["Pantof sport textil plasa","Incaltaminte Curatatorie",59.99,"Buc"],
["Pantofi sport textil plasa (doar masina de spalat si atat)","Incaltaminte Curatatorie",29.9,"Buc"],
["Pantofi/Mocasini/Ghete/Bocanci/ Cizme scurte din piele","Incaltaminte Curatatorie",59.99,"Buc"],
["Sandale normale","Incaltaminte Curatatorie",39.9,"Buc"],
["Sandale talpa ortopedica","Incaltaminte Curatatorie",59.99,"Buc"],
["UGG","Incaltaminte Curatatorie",120,"Buc"],
["Vopsire bot + limba + finish lac lucios/mat","Reconditionari Incaltaminte VOPSIT",72.99,"Buc"],
["Vopsire cizme/ghete lungi + finish lac lucios/mat","Reconditionari Incaltaminte VOPSIT",239.99,"Buc"],
["Vopsire Geanta","Reconditionari Incaltaminte VOPSIT",239.99,"Buc"],
["Vopsire integrala (pantofi,adidasi,cizme/ghete scurte) + finish lac lucios/mat","Reconditionari Incaltaminte VOPSIT",203.99,"Buc"],
["Vopsire lateral talpa + finish lac lucios/mat","Reconditionari Incaltaminte VOPSIT",95.99,"Buc"],
["Vopsire partiala ambele laterale + finish lac lucios/mat","Reconditionari Incaltaminte VOPSIT",95.99,"Buc"],
["Vopsire UGG","Reconditionari Incaltaminte VOPSIT",249.99,"Buc"],
["Covor (adus la spalatorie)","Covoare",21,"m2"],
["Covor cu preluare si livrare","Covoare",23,"m2"],
["Covor de blana (sintetic)","Covoare",46,"m2"]
];

function getFilterKey(cat){
  const c = cat.toLowerCase();
  if(c.includes('abonamente')) return 'abonamente';
  if(c==='covoare') return 'covoare';
  if(c.includes('reconditionari') || c.includes('incaltaminte')) return 'incaltaminte';
  if(c.includes('piele') && !c.includes('incaltaminte')) return 'piele';
  if(c.includes('diverse')) return 'diverse';
  if(c==='extra') return 'extra';
  if(c.includes('horeca') || c.includes('preturi haine la kg')) return 'kg';
  if(c.includes('lenjerie')) return 'lenjerie';
  if(c.includes('calcatorie')) return 'calcatorie';
  if(c.includes('curatatorie')) return 'curatatorie';
  return 'toate';
}

const tbody = document.getElementById('pricesBody');
const countEl = document.getElementById('pricesCount');
const searchInput = document.getElementById('priceSearch');
let activeFilter = 'toate';

function render(){
  const q = (searchInput.value||'').toLowerCase().trim();
  const filtered = prices.filter(([name,cat])=>{
    const key = getFilterKey(cat);
    const matchFilter = activeFilter==='toate' || key===activeFilter;
    const matchSearch = !q || name.toLowerCase().includes(q) || cat.toLowerCase().includes(q);
    return matchFilter && matchSearch;
  });
  tbody.innerHTML = filtered.map(([name,cat,price,um])=>{
    const displayPrice = Number.isInteger(price) ? price : price.toFixed(2).replace('.',',');
    return `<tr><td>${name}</td><td><span class="cat-pill">${cat}</span></td><td>${displayPrice} RON</td><td>${um}</td></tr>`;
  }).join('') || `<tr><td colspan="4" style="text-align:center;padding:22px;color:#64748b">Niciun rezultat pentru căutarea ta. Sună-ne la <a href="tel:+40731679219" style="color:#0d9488;font-weight:700">+40 731 679 219</a></td></tr>`;
  countEl.textContent = filtered.length;
}

document.querySelectorAll('.filter-btn').forEach(btn=>{
  btn.addEventListener('click',()=>{
    document.querySelectorAll('.filter-btn').forEach(b=>b.classList.remove('active'));
    btn.classList.add('active');
    activeFilter = btn.dataset.filter;
    render();
  });
});
searchInput.addEventListener('input', render);
render();

// Hamburger
const ham = document.getElementById('hamburger');
const nav = document.getElementById('nav');
ham.addEventListener('click',()=>{
  const open = nav.classList.toggle('open');
  ham.setAttribute('aria-expanded', open);
  document.body.style.overflow = open ? 'hidden' : '';
});
nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{
  nav.classList.remove('open');
  ham.setAttribute('aria-expanded','false');
  document.body.style.overflow='';
}));

// Header shadow on scroll
const header = document.getElementById('header');
window.addEventListener('scroll',()=>{
  header.style.boxShadow = window.scrollY>8 ? '0 4px 20px rgba(15,23,42,.08)' : 'none';
});

// Program azi + open status
const schedule = [
  {day:'Luni',open:'09:00',close:'19:00'},
  {day:'Marți',open:'14:00',close:'19:00'},
  {day:'Miercuri',open:'09:00',close:'19:00'},
  {day:'Joi',open:'09:00',close:'19:00'},
  {day:'Vineri',open:'09:00',close:'19:00'},
  {day:'Sâmbătă',open:'10:00',close:'15:00'},
  {day:'Duminică',open:null,close:null}
];
function updateOpenStatus(){
  const now = new Date();
  let jsDay = now.getDay(); // 0 duminica
  let idx = jsDay===0?6:jsDay-1;
  const today = schedule[idx];
  const progEl = document.getElementById('program-azi');
  const statusEl = document.getElementById('openStatus');
  if(progEl) progEl.textContent = today.open ? `${today.open} – ${today.close}` : 'Închis';
  // highlight today
  document.querySelectorAll('#scheduleList li').forEach((li,i)=>{
    if(i===idx) li.style.background='rgba(94,234,212,.12)';
    if(i===idx) li.style.borderRadius='8px';
    if(i===idx) li.style.paddingLeft='8px';
    if(i===idx) li.style.paddingRight='8px';
  });
  if(!statusEl) return;
  if(!today.open){ statusEl.textContent='🔴 Închis azi (Duminică)'; statusEl.className='open-status closed'; return; }
  const [oh,om]=today.open.split(':').map(Number);
  const [ch,cm]=today.close.split(':').map(Number);
  const openMin=oh*60+om, closeMin=ch*60+cm, curMin=now.getHours()*60+now.getMinutes();
  if(curMin>=openMin && curMin<closeMin){
    statusEl.textContent='🟢 Deschis acum – te așteptăm!';
    statusEl.className='open-status open';
  } else if(curMin<openMin){
    statusEl.textContent=`🟡 Se deschide la ${today.open}`;
    statusEl.className='open-status closed';
  } else {
    statusEl.textContent='🔴 Închis momentan';
    statusEl.className='open-status closed';
  }
}
updateOpenStatus();

// Lightbox
const lightbox = document.getElementById('lightbox');
const lbImg = document.getElementById('lightboxImg');
const lbClose = document.getElementById('lightboxClose');
document.querySelectorAll('.gallery-item:not(.placeholder)').forEach(el=>{
  el.addEventListener('click',()=>{
    const src = el.dataset.src || el.querySelector('img').src;
    const alt = el.querySelector('img').alt;
    lbImg.src = src;
    lbImg.alt = alt;
    lightbox.classList.add('open');
    lightbox.setAttribute('aria-hidden','false');
    document.body.style.overflow='hidden';
  });
});
function closeLb(){
  lightbox.classList.remove('open');
  lightbox.setAttribute('aria-hidden','true');
  document.body.style.overflow='';
}
lbClose.addEventListener('click', closeLb);
lightbox.addEventListener('click', (e)=>{ if(e.target===lightbox) closeLb(); });
document.addEventListener('keydown', e=>{ if(e.key==='Escape' && lightbox.classList.contains('open')) closeLb(); });

// Year
document.getElementById('year').textContent = new Date().getFullYear();

// Smooth scroll offset handled by CSS scroll-padding

// Lazy performance: preconnect maps already
