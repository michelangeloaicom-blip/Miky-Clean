// Miky Clean & Go - Script
const prices = [
["Bluza maneca lunga","Articole de imbracaminte Curatatorie",21.05,"Buc"],
["Bluza trening","Articole de imbracaminte Curatatorie",24.0,"Buc"],
["Camasa","Articole de imbracaminte Curatatorie",23.0,"Buc"],
["Camasa / Bluza (delicata/pietre/paiete)","Articole de imbracaminte Curatatorie",37.0,"Buc"],
["Camasa matase/pliuri/delicata","Articole de imbracaminte Curatatorie",37.0,"Buc"],
["Combinezon ski","Articole de imbracaminte Curatatorie",100.0,"Buc"],
["Corset","Articole de imbracaminte Curatatorie",37.0,"Buc"],
["Cravata/Fular/Esarfa matase","Articole de imbracaminte Curatatorie",24.09,"Buc"],
["Cravata/Fular/Esarfa/Caciula/Manusi","Articole de imbracaminte Curatatorie",17.05,"Buc"],
["Fusta lunga","Articole de imbracaminte Curatatorie",37.0,"Buc"],
["Fusta ocazie","Articole de imbracaminte Curatatorie",45.0,"Buc"],
["Fusta pliuri/delicata","Articole de imbracaminte Curatatorie",47.0,"Buc"],
["Fusta scurta","Articole de imbracaminte Curatatorie",27.0,"Buc"],
["Geaca blugi","Articole de imbracaminte Curatatorie",40.0,"Buc"],
["Geaca groasa/puf lunga","Articole de imbracaminte Curatatorie",78.0,"Buc"],
["Geaca groasa/puf scurta","Articole de imbracaminte Curatatorie",67.0,"Buc"],
["Geaca puf scurta/subțire","Articole de imbracaminte Curatatorie",47.0,"Buc"],
["Geaca ski","Articole de imbracaminte Curatatorie",60.0,"Buc"],
["Haina blana sintetica/scurta","Articole de imbracaminte Curatatorie",57.0,"Buc"],
["Hanorac","Articole de imbracaminte Curatatorie",29.0,"Buc"],
["Palton/Pardesiu lung","Articole de imbracaminte Curatatorie",70.0,"Buc"],
["Palton/Pardesiu/Balonzaid/scurt","Articole de imbracaminte Curatatorie",57.0,"Buc"],
["Pantalon delicat","Articole de imbracaminte Curatatorie",35.0,"Buc"],
["Pantalon lung/dunga","Articole de imbracaminte Curatatorie",29.0,"Buc"],
["Pantalon scurt","Articole de imbracaminte Curatatorie",19.0,"Buc"],
["Pantalon trening/blugi","Articole de imbracaminte Curatatorie",26.05,"Buc"],
["Pantalon/Bluza/Halat scurt medical","Articole de imbracaminte Curatatorie",23.09,"Buc"],
["Pantaloni ski","Articole de imbracaminte Curatatorie",47.0,"Buc"],
["Pulover","Articole de imbracaminte Curatatorie",26.0,"Buc"],
["Pulover (delicat/pietre/paiete)","Articole de imbracaminte Curatatorie",35.0,"Buc"],
["Rochie cu accesorii","Articole de imbracaminte Curatatorie",80.0,"Buc"],
["Rochie delicata fara accesorii MATASE","Articole de imbracaminte Curatatorie",60.0,"Buc"],
["Rochie lunga de ocazie (APLICATII)","Articole de imbracaminte Curatatorie",120.0,"Buc"],
["Rochie lunga de zi (simpla)","Articole de imbracaminte Curatatorie",53.0,"Buc"],
["Rochie Mireasa ampla","Articole de imbracaminte Curatatorie",550.0,"Buc"],
["Rochie Mireasa foarte mare + pete","Articole de imbracaminte Curatatorie",850.0,"Buc"],
["Rochie Mireasa simpla","Articole de imbracaminte Curatatorie",350.0,"Buc"],
["Rochie scurta de ocazie","Articole de imbracaminte Curatatorie",55.0,"Buc"],
["Rochie scurta de zi","Articole de imbracaminte Curatatorie",37.0,"Buc"],
["Rochie simpla/Sarafan/Salopeta Dama Simpla","Articole de imbracaminte Curatatorie",49.0,"Buc"],
["Sacou (delicat/pietre/paiete)","Articole de imbracaminte Curatatorie",45.0,"Buc"],
["Sacou barbatesc","Articole de imbracaminte Curatatorie",33.0,"Buc"],
["Sacou dama","Articole de imbracaminte Curatatorie",28.0,"Buc"],
["Salopeta de lucru","Articole de imbracaminte Curatatorie",32.0,"Buc"],
["Salopeta de ocazie","Articole de imbracaminte Curatatorie",65.0,"Buc"],
["Sapca/Palarie","Articole de imbracaminte Curatatorie",19.05,"Buc"],
["Scurta de stofa","Articole de imbracaminte Curatatorie",45.0,"Buc"],
["Tricou / Maiou (delicat/pietre/paiete)","Articole de imbracaminte Curatatorie",28.0,"Buc"],
["Tricou Polo","Articole de imbracaminte Curatatorie",19.05,"Buc"],
["Tricou simplu","Articole de imbracaminte Curatatorie",16.05,"Buc"],
["Vesmant preotesc (3 piese)","Articole de imbracaminte Curatatorie",100.0,"Buc"],
["Vesta blana sintetica","Articole de imbracaminte Curatatorie",45.0,"Buc"],
["Vesta blana sintetica lunga","Articole de imbracaminte Curatatorie",60.0,"Buc"],
["Vesta blugi","Articole de imbracaminte Curatatorie",23.0,"Buc"],
["Vesta costum","Articole de imbracaminte Curatatorie",19.05,"Buc"],
["Vesta matlasata lunga","Articole de imbracaminte Curatatorie",47.0,"Buc"],
["Vesta matlasata scurta","Articole de imbracaminte Curatatorie",35.0,"Buc"],
["Vesta puf lunga","Articole de imbracaminte Curatatorie",57.0,"Buc"],
["Vesta puf scurta","Articole de imbracaminte Curatatorie",45.0,"Buc"],
["Voal mireasa mare","Articole de imbracaminte Curatatorie",55.0,"Buc"],
["Voal mireasa mic","Articole de imbracaminte Curatatorie",35.0,"Buc"],
["Abonament 10 kg","Abonamente Calcat",400.0,"Kg"],
["Abonament 15 kg","Abonamente Calcat",540.0,"Kg"],
["Abonament Bussiness (Camasi)","Abonamente Calcat",550.0,"Kg"],
["Bluza maneca lunga","Articole de imbracaminte Calcatorie",18.0,"Buc"],
["Bluza trening","Articole de imbracaminte Calcatorie",20.0,"Buc"],
["Camasa / Bluza","Articole de imbracaminte Calcatorie",19.05,"Buc"],
["Camasa / Bluza (delicata/pietre/paiete/matase)","Articole de imbracaminte Calcatorie",27.0,"Buc"],
["Cravata/Fular/Esarfa matase","Articole de imbracaminte Calcatorie",18.05,"Buc"],
["Cravata/Fular/Esarfa/Caciula/Manusi","Articole de imbracaminte Calcatorie",10.0,"Buc"],
["Fusta lunga","Articole de imbracaminte Calcatorie",25.0,"Buc"],
["Fusta pliuri/delicata","Articole de imbracaminte Calcatorie",30.0,"Buc"],
["Fusta scurta","Articole de imbracaminte Calcatorie",20.0,"Buc"],
["Geaca blugi","Articole de imbracaminte Calcatorie",30.0,"Buc"],
["Hanorac","Articole de imbracaminte Calcatorie",25.0,"Buc"],
["Palton scurt/lung","Articole de imbracaminte Calcatorie",40.0,"Buc"],
["Pantalon delicat","Articole de imbracaminte Calcatorie",28.0,"Buc"],
["Pantalon lung","Articole de imbracaminte Calcatorie",26.0,"Buc"],
["Pantalon scurt","Articole de imbracaminte Calcatorie",15.0,"Buc"],
["Pantalon trening","Articole de imbracaminte Calcatorie",23.0,"Buc"],
["Pantalon/Bluza/Halat scurt medical","Articole de imbracaminte Calcatorie",20.0,"Buc"],
["Pulover","Articole de imbracaminte Calcatorie",20.0,"Buc"],
["Pulover (delicat/pietre/paiete)","Articole de imbracaminte Calcatorie",25.0,"Buc"],
["Roba magistrat/vesmant preotesc","Articole de imbracaminte Calcatorie",50.0,"Buc"],
["Rochie cu accesorii","Articole de imbracaminte Calcatorie",65.0,"Buc"],
["Rochie delicata fara accesorii","Articole de imbracaminte Calcatorie",53.0,"Buc"],
["Rochie lunga de ocazie (APLICATII)","Articole de imbracaminte Calcatorie",100.0,"Buc"],
["Rochie lunga de zi (simpla)","Articole de imbracaminte Calcatorie",45.0,"Buc"],
["Rochie Mireasa foarte mare","Articole de imbracaminte Calcatorie",500.0,"Buc"],
["Rochie Mireasa simpla","Articole de imbracaminte Calcatorie",250.0,"Buc"],
["Rochie simpla/Sarafan/Salopeta Dama Simpla","Articole de imbracaminte Calcatorie",40.0,"Buc"],
["Sacou (delicat/pietre/paiete)","Articole de imbracaminte Calcatorie",40.0,"Buc"],
["Sacou barbatesc","Articole de imbracaminte Calcatorie",28.0,"Buc"],
["Sacou dama","Articole de imbracaminte Calcatorie",24.0,"Buc"],
["Salopeta de ocazie","Articole de imbracaminte Calcatorie",50.0,"Buc"],
["Scurta de stofa","Articole de imbracaminte Calcatorie",36.0,"Buc"],
["Tricou / Maiou (delicat/pietre/paiete)","Articole de imbracaminte Calcatorie",23.0,"Buc"],
["Tricou Polo","Articole de imbracaminte Calcatorie",15.0,"Buc"],
["Tricou simplu","Articole de imbracaminte Calcatorie",13.0,"Buc"],
["Vesta Blugi","Articole de imbracaminte Calcatorie",17.0,"Buc"],
["Vesta costum","Articole de imbracaminte Calcatorie",14.0,"Buc"],
["Voal mireasa mare","Articole de imbracaminte Calcatorie",45.0,"Buc"],
["Voal mireasa mic","Articole de imbracaminte Calcatorie",30.0,"Buc"],
["CEARCEAF PAT","Lenjerie si articole de casa Curatatorie",19.0,"Buc"],
["CEARCEAF PLIC","Lenjerie si articole de casa Curatatorie",21.0,"Buc"],
["Cerga de lana","Lenjerie si articole de casa Curatatorie",130.0,"Buc"],
["COVOR BLANA OAIE","Lenjerie si articole de casa Curatatorie",65.0,"Buc"],
["COVORAS BLANA SINTETIC","Lenjerie si articole de casa Curatatorie",35.0,"Buc"],
["DRAPERII GROASE","Lenjerie si articole de casa Curatatorie",16.09,"m2"],
["DRAPERII SUBTIRI","Lenjerie si articole de casa Curatatorie",8.09,"m2"],
["FATA DE MASA + 12 PERSOANE (FILEU)","Lenjerie si articole de casa Curatatorie",39.0,"Buc"],
["FATA DE MASA MARE ( 8-10 PERSOANE )","Lenjerie si articole de casa Curatatorie",32.0,"Buc"],
["FATA DE MASA MICA  ( 4-6 PERSOANE )","Lenjerie si articole de casa Curatatorie",27.0,"Buc"],
["FATA DE PERNA MARE","Lenjerie si articole de casa Curatatorie",9.05,"Buc"],
["FATA DE PERNA MEDIE","Lenjerie si articole de casa Curatatorie",8.0,"Buc"],
["HALAT DE BAIE / HALAT DE CASA","Lenjerie si articole de casa Curatatorie",29.0,"Buc"],
["HUSA CANAPEA 2 LOCURI","Lenjerie si articole de casa Curatatorie",49.0,"Buc"],
["HUSA CANAPEA 3 LOCURI / HUSA SALTEA","Lenjerie si articole de casa Curatatorie",60.0,"Buc"],
["HUSA FOTOLIU","Lenjerie si articole de casa Curatatorie",32.0,"Buc"],
["Husa saltea 1 persoana","Lenjerie si articole de casa Curatatorie",60.0,"Buc"],
["Husa saltea dubla","Lenjerie si articole de casa Curatatorie",85.0,"Buc"],
["HUSA SCAUN","Lenjerie si articole de casa Curatatorie",18.05,"Buc"],
["Husa/ Pema Scaun exterior","Lenjerie si articole de casa Curatatorie",30.0,"Buc"],
["NAPRON / SERVET","Lenjerie si articole de casa Curatatorie",9.05,"Buc"],
["PATURA / CUVERTURA MICA / PILOTA VARA","Lenjerie si articole de casa Curatatorie",53.0,"Buc"],
["PATURA dubla / CUVERTURA MARE / PILOTA IARNA","Lenjerie si articole de casa Curatatorie",68.0,"Buc"],
["Patura groasa","Lenjerie si articole de casa Curatatorie",77.0,"Buc"],
["PERDELE","Lenjerie si articole de casa Curatatorie",6.09,"m2"],
["PERNA PUF MARE","Lenjerie si articole de casa Curatatorie",49.0,"Buc"],
["PERNA PUF MEDIE","Lenjerie si articole de casa Curatatorie",40.0,"Buc"],
["PERNA SINTETICA MARE","Lenjerie si articole de casa Curatatorie",42.0,"Buc"],
["PERNA SINTETICA MEDIE","Lenjerie si articole de casa Curatatorie",37.0,"Buc"],
["PERNUTE DECOR / PERNUTE SCAUN","Lenjerie si articole de casa Curatatorie",17.0,"Buc"],
["Pilota 1 persoana","Lenjerie si articole de casa Curatatorie",53.0,"Buc"],
["Pilota dubla","Lenjerie si articole de casa Curatatorie",67.0,"Buc"],
["PILOTA PUF (1 pers)","Lenjerie si articole de casa Curatatorie",57.0,"Buc"],
["PILOTA PUF (2 pers)","Lenjerie si articole de casa Curatatorie",85.0,"Buc"],
["PLAPUMA","Lenjerie si articole de casa Curatatorie",150.0,"Buc"],
["plus mare","Lenjerie si articole de casa Curatatorie",50.0,"Buc"],
["plus mediu","Lenjerie si articole de casa Curatatorie",25.0,"Buc"],
["Plus mic","Lenjerie si articole de casa Curatatorie",15.0,"Buc"],
["PROSOP BUCATARIE","Lenjerie si articole de casa Curatatorie",10.0,"Buc"],
["PROSOP MARE","Lenjerie si articole de casa Curatatorie",16.0,"Buc"],
["PROSOP MEDIU","Lenjerie si articole de casa Curatatorie",13.0,"Buc"],
["PROSOP MIC","Lenjerie si articole de casa Curatatorie",10.0,"Buc"],
["SET BOTEZ","Lenjerie si articole de casa Curatatorie",60.0,"Buc"],
["SET COVORASE BAIE","Lenjerie si articole de casa Curatatorie",45.0,"Buc"],
["Topper","Lenjerie si articole de casa Curatatorie",180.0,"Buc"],
["CEARCEAF PAT / PROTECTIE SALTEA","Lenjerie si articole de casa Calcatorie",17.0,"Buc"],
["CEARCEAF PLIC","Lenjerie si articole de casa Calcatorie",18.0,"Buc"],
["DRAPERII SUBTIRI CALCAT","Lenjerie si articole de casa Calcatorie",10.0,"m2"],
["FATA DE MASA + 12 PERSOANE (FILEU)","Lenjerie si articole de casa Calcatorie",28.0,"Buc"],
["FATA DE MASA MARE ( 8-10 PERSOANE )","Lenjerie si articole de casa Calcatorie",27.0,"Buc"],
["FATA DE MASA MICA  ( 4-6 PERSOANE )","Lenjerie si articole de casa Calcatorie",25.0,"Buc"],
["FATA DE PERNA MARE","Lenjerie si articole de casa Calcatorie",9.0,"Buc"],
["FATA DE PERNA MEDIE","Lenjerie si articole de casa Calcatorie",8.0,"Buc"],
["FATA DE PERNA MICA","Lenjerie si articole de casa Calcatorie",7.0,"Buc"],
["HALAT DE BAIE / HALAT DE CASA","Lenjerie si articole de casa Calcatorie",14.0,"Buc"],
["MAIOU","Lenjerie si articole de casa Calcatorie",7.0,"Buc"],
["NAPRON / SERVET","Lenjerie si articole de casa Calcatorie",8.0,"Buc"],
["PANTALON PIJAMA","Lenjerie si articole de casa Calcatorie",9.0,"Buc"],
["PERDELE CALCAT","Lenjerie si articole de casa Calcatorie",6.0,"m2"],
["PIJAMA","Lenjerie si articole de casa Calcatorie",18.0,"Buc"],
["PROSOP MARE","Lenjerie si articole de casa Calcatorie",9.0,"Buc"],
["PROSOP MEDIU","Lenjerie si articole de casa Calcatorie",8.0,"Buc"],
["PROSOP MIC","Lenjerie si articole de casa Calcatorie",6.0,"Buc"],
["CARPETA","Diverse articole Curatatorie",20.0,"Buc"],
["CASCA MOTO / SKI","Diverse articole Curatatorie",31.9,"Buc"],
["Cort la kg ( spălat+uscat) (fără mucegai ) FĂRĂ GARANȚIE !","Diverse articole Curatatorie",20.0,"Kg"],
["GEANTA material textil mare","Diverse articole Curatatorie",34.9,"Buc"],
["GEANTA material textil mica / poseta","Diverse articole Curatatorie",19.09,"Buc"],
["JUCARIE PLUS MARE","Diverse articole Curatatorie",49.9,"Buc"],
["JUCARIE PLUS MEDIE","Diverse articole Curatatorie",32.9,"Buc"],
["JUCARIE PLUS MICA","Diverse articole Curatatorie",18.09,"Buc"],
["PERNA PENTRU BALANSOAR / SEZLONG","Diverse articole Curatatorie",25.0,"Buc"],
["PRELATA AUTO","Diverse articole Curatatorie",31.9,"Buc"],
["PRELATA MOTO / BICICLETA","Diverse articole Curatatorie",11.09,"Buc"],
["RUCSAC TEXTIL","Diverse articole Curatatorie",31.9,"Buc"],
["SAC DE DORMIT","Diverse articole Curatatorie",35.0,"Buc"],
["SCAUN AUTO COPIL","Diverse articole Curatatorie",39.9,"Set"],
["SET HUSE SCAUNE AUTO","Diverse articole Curatatorie",50.0,"Buc"],
["TROLLER MARE","Diverse articole Curatatorie",79.9,"Buc"],
["TROLLER MIC","Diverse articole Curatatorie",49.9,"Buc"],
["GEACA IMITATIE PIELE","Articole din piele Curatatorie",53.0,"Buc"],
["GEACA PIELE LUNGA","Articole din piele Curatatorie",96.0,"Buc"],
["GEACA PIELE MOTO","Articole din piele Curatatorie",49.9,"Buc"],
["GEACA PIELE SCURTA","Articole din piele Curatatorie",60.0,"Buc"],
["GEANTA PIELE MARE","Articole din piele Curatatorie",55.0,"Buc"],
["GEANTA PIELE MICA","Articole din piele Curatatorie",35.0,"Buc"],
["PANTALON PIELE / FUSTA PIELE","Articole din piele Curatatorie",49.9,"Buc"],
["PANTALON PIELE MOTO","Articole din piele Curatatorie",74.9,"Buc"],
["RUCSAC PIELE","Articole din piele Curatatorie",37.9,"Buc"],
["VESTA PIELE","Articole din piele Curatatorie",69.9,"Buc"],
["Fețe de masa între 100-200 kg (per colectare)","Horeca",12.0,"Kg"],
["Fețe de masa pana in 100 kg  (per colectare)","Horeca",15.0,"Kg"],
["Fete de masa pana in 50 kg  (per colectare)","Horeca",18.0,"Buc"],
["Fețe de masa peste 200kg (per colectare)","Horeca",9.05,"Kg"],
["Prosoape (Spălat, uscat, impachetat) la kg","Prețuri haine la KG",23.0,"Kg"],
["Spălat și Călcat la Kg","Prețuri haine la KG",55.0,"Kg"],
["Spalat/uscat la kg","Prețuri haine la KG",45.0,"Kg"],
["Albire","Extra",10.0,"Buc"],
["Apret","Extra",10.0,"Buc"],
["Cusut nasture","Extra",5.0,"Buc"],
["Cusut ruptura","Extra",10.0,"Buc"],
["Folie","Extra",1.0,"Buc"],
["Impermeabilizare","Extra",10.0,"Buc"],
["Sac","Extra",2.0,"Buc"],
["Taxa Urgenta mare","Extra",100.0,"Buc"],
["Taxa Urgenta medie","Extra",50.0,"Buc"],
["Taxa Urgenta mica","Extra",30.0,"Buc"],
["Adidasi/Ghete/Pantofi/Mocasini din piele intoarsa","Incaltaminte Curatatorie",90.0,"Buc"],
["Adidasi/Tenesi din piele sau vinyl","Incaltaminte Curatatorie",85.0,"Buc"],
["Boots/Clapari/Incaltaminte Moto","Incaltaminte Curatatorie",75.99,"Buc"],
["Cizme Lungi din piele sau piele intoarsa","Incaltaminte Curatatorie",90.0,"Buc"],
["Pantof sport textil plasa","Incaltaminte Curatatorie",59.99,"Buc"],
["Pantofi sport textil plasa (doar masina de spalat si atat)","Incaltaminte Curatatorie",45.0,"Buc"],
["Pantofi/Mocasini/Ghete/Bocanci/ Cizme scurte din piele","Incaltaminte Curatatorie",59.99,"Buc"],
["Sandale normale","Incaltaminte Curatatorie",39.9,"Buc"],
["Sandale talpa ortopedica","Incaltaminte Curatatorie",59.99,"Buc"],
["UGG","Incaltaminte Curatatorie",120.0,"Buc"],
["Vopsire bot + limba + finish lac lucios/mat","Reconditionari Incaltaminte VOPSIT",72.99,"Buc"],
["Vopsire cizme/ghete lungi + finish lac lucios/mat","Reconditionari Incaltaminte VOPSIT",239.99,"Buc"],
["Vopsire Geanta","Reconditionari Incaltaminte VOPSIT",239.99,"Buc"],
["Vopsire integrala (pantofi,adidasi,cizme/ghete scurte) + finish lac lucios/mat","Reconditionari Incaltaminte VOPSIT",203.99,"Buc"],
["Vopsire lateral talpa + finish lac lucios/mat","Reconditionari Incaltaminte VOPSIT",95.99,"Buc"],
["Vopsire partiala ambele laterale + finish lac lucios/mat","Reconditionari Incaltaminte VOPSIT",95.99,"Buc"],
["Vopsire UGG","Reconditionari Incaltaminte VOPSIT",249.99,"Buc"],
["Covor (adus la spalatorie)","Covoare",21.0,"m2"],
["Covor cu preluare si livrare","Covoare",23.0,"m2"],
["Covor de blana (sintetic)","Covoare",46.0,"m2"],
]

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
  }).join('') || `<tr><td colspan="3" style="text-align:center;padding:22px;color:#64748b">Niciun rezultat pentru căutarea ta. Sună-ne la <a href="tel:+40731679219" style="color:#0d9488;font-weight:700">+40 731 679 219</a></td></tr>`;
  countEl.textContent = filtered.length;
}

document.querySelectorAll('.filter-btn').forEach(btn=>{
  btn.addEventListener('click',()=>{
    document.querySelectorAll('.filter-btn').forEach(b=>b.classList.remove('active'));
    btn.classList.add('active');
    activeFilter = btn.dataset.filter;
    render();
    // scroll lista sus la schimbare filtru
    const sc = document.getElementById('pricesScroll');
    if(sc) sc.scrollTop = 0;
  });
});
const searchClear = document.getElementById('searchClear');
function updateClearBtn(){
  if(!searchClear) return;
  searchClear.classList.toggle('visible', !!searchInput.value);
}
searchInput.addEventListener('input', ()=>{ updateClearBtn(); render(); });
if(searchClear){
  searchClear.addEventListener('click', ()=>{
    searchInput.value='';
    updateClearBtn();
    render();
    searchInput.focus();
  });
}
updateClearBtn();

// scroll fade for prices
const pricesScroll = document.getElementById('pricesScroll');
const pricesWrap = document.getElementById('pricesWrap');
function updateScrollFade(){
  if(!pricesScroll || !pricesWrap) return;
  const atBottom = pricesScroll.scrollTop + pricesScroll.clientHeight >= pricesScroll.scrollHeight - 4;
  pricesWrap.classList.toggle('at-bottom', atBottom);
}
if(pricesScroll){
  pricesScroll.addEventListener('scroll', updateScrollFade, {passive:true});
}
let _renderOrig = render;
render = function(){
  _renderOrig.apply(this, arguments);
  requestAnimationFrame(updateScrollFade);
};
render();
updateScrollFade();

// Hamburger - robust mobile fix
const ham = document.getElementById('hamburger');
const nav = document.getElementById('nav');
const overlay = document.getElementById('navOverlay');
function openNav(){
  nav.classList.add('open');
  if(overlay) overlay.classList.add('open');
  ham.setAttribute('aria-expanded','true');
  document.body.classList.add('nav-open');
  if(overlay) overlay.setAttribute('aria-hidden','false');
}
function closeNav(){
  nav.classList.remove('open');
  if(overlay) overlay.classList.remove('open');
  ham.setAttribute('aria-expanded','false');
  document.body.classList.remove('nav-open');
  if(overlay) overlay.setAttribute('aria-hidden','true');
}
function toggleNav(){
  if(nav.classList.contains('open')) closeNav(); else openNav();
}
ham.addEventListener('click', (e)=>{
  e.stopPropagation();
  toggleNav();
});
if(overlay) overlay.addEventListener('click', closeNav);
nav.querySelectorAll('a').forEach(a=>a.addEventListener('click', closeNav));
document.addEventListener('keydown', (e)=>{
  if(e.key==='Escape' && nav.classList.contains('open')) closeNav();
});
// inchide la resize spre desktop
window.addEventListener('resize', ()=>{
  if(window.innerWidth > 900 && nav.classList.contains('open')) closeNav();
});
// prevent nav scroll from propagating to body
if(nav){
  nav.addEventListener('touchmove', (e)=>{ e.stopPropagation(); }, {passive:true});
}

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
