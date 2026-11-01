const STORE_KEY = "northbridge_library_v1";
const SESSION_KEY = "northbridge_session";
const CONTACT_KEY = "northbridge_contact_messages";

const categories = [
  ["Computer Science", "fa-solid"], ["Information Technology", "fa-solid"],
  ["Mathematics", "fa-solid"], ["Physics", "fa-solid"], ["Chemistry", "fa-solid"],
  ["Commerce", "fa-solid"], ["Management", "fa-solid"], ["English", "fa-solid"],
  ["Gujarati Literature", "fa-solid"], ["Generalities", "fa-solid"],
  ["Philosophy", "fa-solid"], ["Religion", "fa-solid"], ["Social Sciences", "fa-solid"],
  ["Language", "fa-solid"], ["Science", "fa-solid"], ["Technology", "fa-solid"],
  ["Arts", "fa-solid"], ["History", "fa-solid"]
];

const coverBase = "https://covers.openlibrary.org/b/isbn/";
function gujaratiCover(title, category) {
  const safeTitle = String(title).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;");
  const safeCategory = String(category).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;");
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="400" height="600" viewBox="0 0 400 600"><rect width="400" height="600" fill="#091a33"/><rect x="18" y="18" width="364" height="564" rx="18" fill="#102a50" stroke="#c9a45c" stroke-width="4"/><circle cx="200" cy="150" r="48" fill="#c9a45c"/><text x="200" y="164" text-anchor="middle" font-family="serif" font-size="44" fill="#091a33">ક</text><text x="200" y="260" text-anchor="middle" font-family="sans-serif" font-size="25" fill="#ffffff">${safeTitle}</text><text x="200" y="530" text-anchor="middle" font-family="sans-serif" font-size="18" fill="#e2ca91">${safeCategory}</text></svg>`;
  return "data:image/svg+xml;charset=UTF-8," + encodeURIComponent(svg);
}
const bookSeed = [
  ["Introduction to Algorithms","Thomas H. Cormen","9780262033848","Computer Science",2019,12],
  ["Clean Code","Robert C. Martin","9780132350884","Computer Science",2008,7],
  ["Computer Networks","Andrew S. Tanenbaum","9780132126953","Computer Science",2021,9],
  ["Operating System Concepts","Abraham Silberschatz","9781119456339","Computer Science",2018,8],
  ["Database System Concepts","Silberschatz & Sudarshan","9780073523323","Computer Science",2019,10],
  ["Artificial Intelligence: A Modern Approach","Stuart Russell","9780134610993","Computer Science",2020,6],
  ["Design Patterns","Erich Gamma","9780201633610","Computer Science",1994,5],
  ["Compilers: Principles, Techniques, Tools","Aho & Ullman","9780321486813","Computer Science",2006,4],
  ["The C Programming Language","Brian W. Kernighan","9780131103627","Computer Science",1988,8],
  ["Python Crash Course","Eric Matthes","9781593279288","Computer Science",2019,11],
  ["Discrete Mathematics and Its Applications","Kenneth Rosen","9781260091991","Mathematics",2018,9],
  ["Calculus: Early Transcendentals","James Stewart","9781285741550","Mathematics",2015,7],
  ["Linear Algebra and Its Applications","David Lay","9780321982384","Mathematics",2015,6],
  ["A First Course in Probability","Sheldon Ross","9780321794772","Mathematics",2014,5],
  ["Concrete Mathematics","Ronald Graham","9780201558029","Mathematics",1994,4],
  ["Mathematical Statistics with Applications","Wackerly & Mendenhall","9780495110811","Mathematics",2007,5],
  ["University Physics","Hugh Young","9780321973610","Physics",2015,10],
  ["Concepts of Modern Physics","Arthur Beiser","9780072448481","Physics",2002,6],
  ["The Feynman Lectures on Physics","Richard Feynman","9780465024933","Physics",2011,5],
  ["Introduction to Electrodynamics","David Griffiths","9781108420419","Physics",2017,4],
  ["Optics","Ajoy Ghatak","9780070701806","Physics",2017,7],
  ["Organic Chemistry","Jonathan Clayden","9780199270293","Chemistry",2012,8],
  ["Physical Chemistry","Peter Atkins","9780198769866","Chemistry",2017,6],
  ["Inorganic Chemistry","Gary Miessler","9780321811059","Chemistry",2013,5],
  ["Chemistry: The Central Science","Brown & LeMay","9780134414232","Chemistry",2017,9],
  ["Principles of Biochemistry","Lehninger & Nelson","9781319108243","Chemistry",2017,4],
  ["Financial Accounting","Jerry Weygandt","9781119606086","Commerce",2019,8],
  ["Corporate Accounting","S.N. Maheshwari","9789351339476","Commerce",2020,6],
  ["Cost Accounting","Charles Horngren","9780134145332","Commerce",2014,5],
  ["Business Statistics","S.P. Gupta","9789352605576","Commerce",2016,7],
  ["Principles of Management","Stephen Robbins","9781292153979","Management",2016,8],
  ["Strategic Management","Fred David","9781292227298","Management",2015,5],
  ["Human Resource Management","Gary Dessler","9781292215158","Management",2017,6],
  ["Marketing Management","Philip Kotler","9781292092621","Management",2015,5],
  ["Entrepreneurship","Robert Hisrich","9780078029108","Management",2016,4],
  ["Data Communication and Networking","Behrouz Forouzan","9780073376226","Information Technology",2012,9],
  ["Computer Organization and Design","Patterson & Hennessy","9780128017333","Information Technology",2017,7],
  ["Cloud Computing","Rajkumar Buyya","9780128017197","Information Technology",2016,6],
  ["Beginning Web Programming","Jon Duckett","9781118907443","Information Technology",2014,8],
  ["English for Academic Purposes","R. R. Jordan","9781847602196","English",2009,7],
];

const gujaratiBookSeed = [
  ["સરસ્વતીચંદ્ર","Govardhanram Tripathi","9788121502850","Gujarat Sahitya Prakash",1887,6],
  ["ગુજરાતી ભાષા અને साहित्यનો ઈતિહાસ","Kantibhai P. Khatri","9788173094556","University Granthnirman Board",1980,5],
  ["શ્યામળું વાતાવરણ","Chandrakant Bakshi","9788183699222","Rannade Prakashan",1972,5],
  ["માળેલા જીવ","Pannalal Patel","9788122202110","Navbharat Sahitya Mandir",1941,7],
  ["ભવાઈ","Pannalal Patel","9788172290184","Navbharat Sahitya Mandir",1958,4],
  ["કરિયાવર","Umedram H. Thaker","9788172290924","Navbharat Sahitya Mandir",1920,4],
  ["પૂનમના રંગ","Jhaverchand Meghani","9788172291051","Gurjar Granthratna Karyalay",1939,6],
  ["સોનોડા પાંખડી","Jhaverchand Meghani","9788172291068","Gurjar Granthratna Karyalay",1940,5],
  ["કર્ણ કુંડળ","Zaverchand Meghani","9788172291082","Gurjar Granthratna Karyalay",1956,4],
  ["અંસઇ","Dhumketu","9788172291112","Gurjar Granthratna Karyalay",1950,5],
  ["લિપ્ત પ્રતિમા અને અન્ય વાર્તાઓ","Dhumketu","9788172291129","Gurjar Granthratna Karyalay",1941,4],
  ["વાપસી","K.M. Munshi","9788172291303","Bharatiya Vidya Bhavan",1930,5],
  ["નવલખા માળા","K.M. Munshi","9788172291310","Bharatiya Vidya Bhavan",1933,4],
  ["મોરપંચ","Rajendra Shukla","9788172291457","Rannade Prakashan",1989,6],
  ["અપરાધ","Gunvant Shah","9788187160454","R.R. Sheth & Co.",1994,5],
  ["કિંતિપ્રસંગો","Suresh Joshi","9788172291525","Parshva Publication",1981,5],
  ["મરતી વખતનો મ્હારો દીવડો","Chandrakant Bakshi","9788183699871","Rannade Prakashan",1990,4],
  ["અંહને પંચત્રिश","Kajal Oza Vaidya","9789386221111","Vishwabharati Publications",2014,6],
  ["ગાંધીજીની આત્મકથા","Mahatma Gandhi","9788172290030","Navjivan Trust",1927,8],
  ["ભારતના ઈતિહાસની ઝાંખી","Ramprasad Vyas","9789381266115","Gujarat University Press",2011,6],
  ["ગુજરાતી વ્યાકરણ અને રચના","Ratilal Chandaria","9788172291600","Gujarat Sahitya Academy",2018,7],
  ["ગુજરાતના લોકસાહિત્યનો પરિચય","Harivallabh Bhayani","9788172291754","Gujarat Sahitya Academy",2002,5]
];

const gujaratiLiteratureSeed = [
  ["સરસ્વતીચંદ્ર","Govardhanram Tripathi","9788121502850","Gujarati Literature","ગુજરાતી સાહિત્યની વિશ્વપ્રસિદ્ધ ચાર ખંડની નવલકથા.","Gujarat Sahitya Prakash",1887,6],
  ["માળેલા જીવ","Pannalal Patel","9788122202110","Gujarati Literature","પટેલ સમાજના જીવન, સંઘર્ષ અને માનવસંવેદનાનું મર્મસ્પર્શી નવલકથાત્મક ચિત્રણ.","Navbharat Sahitya Mandir",1941,7]
];

const gujaratiOrganizedSeed = [
  ["ગુજરાત વિશ્વકોશ - પ્રારંભિક ભાગ","ગુજરાતી વિશ્વકોશ ટ્રસ્ટ","9788190107606","Generalities","ગુજરાતી વિજ્ઞાન અને સંસ્કૃતિના વિવિધ વિષયોનો સંદર્ભગ્રંથ.","ગુજરાતી વિશ્વકોશ ટ્રસ્ટ",2010,4],
  ["સામાન્ય જ્ઞાન ઝાંખી","ચેતનભાઈ પટેલ","","Generalities","વિદ્યાર્થીઓ માટે Gujarati ભાષામાં વિશ્વ અને દૈનિક માહિતીનો સંકલન.","સાહિત્યાલય",2018,5],
  ["આત્મવિચાર","મહાવીરપ્રસાદ દ્વિવેદી","","Philosophy","આत્મતत्त्व, જીવનમૂલ્યો અને સ્વાનુભવ પર આધારિત ગુજરાતી નિબંધસંગ્રહ.","ગુજરાત વિદ્યાપીઠ ગ્રંથાલય",2001,4],
  ["જીવનદર્શન","કાન્તિભાઈ પટેલ","","Philosophy","આધુનિક જીવનમાં નૈતિકતા અને સ્વતંત્ર વિચારના માર્ગો વિશેનો પ્રબોધક ગ્રંથ.","R.R. Sheth & Co.",2016,5],
  ["શ્રીમદ્ ભગવદ્ગીતા","અનુવાદક: શંકરરામ શાસ્ત્રી","9788172761214","Religion","આત્મજ્ઞાન અને कर्मयोग સમજાવતો Gujarati અનુવાદસहित ધાર્મિક ગ્રંથ.","ગીતા પ્રેસ ગાંધીનગર",2012,8],
  ["ગુજરાતી સંતવાણી","બાલમુકુન્દભાઈ દવે","","Religion","ગુજરાતના સંત પરંપરાના ભજન અને સંતવાણીનો સંગ્રહ.","ગુજરાત સાહિત્ય અકાદમી",2008,5],
  ["ભારતની સામાજિક રચना","રામકૃષ્ણ ગાંધી","","Social Sciences","ભારતીય સમાજ, પરિવારો અને institutionsના પરિવર્તનનો પરિચય.","ગુજરાત યુનિવર્સિટી પ્રેસ",2013,5],
  ["ગુજરાતના ગ્રામ્ય સમાજનો પરિચય","નરહરિ પટેલ","","Social Sciences","ગુજરાતના ગામડાઓની સમાજવ્યવસ્થા, રોજગાર અને cultural ફેરફારોનો અભ્યાસ.","સંવેદન પ્રકાશન",2019,4],
  ["ગુજરાતી વ્યાકરણ અને રચना","રતિલાલ ચંદરીયા","9788172291600","Language","ગુજરાતી ભાષાના શબ્દ, વાક્યરचना અને પ્રયોગ પર આધારિત વ્યાકરણ ગ્રંથ.","ગુજરાત સાહિત્ય અકાદમી",2018,7],
  ["ગુજરાતી ભાષાનો ઈતિહાસ","કાન્તિલાલ મ. પટેલ","9788173094556","Language","ગુજરાતી ભાષાની ઉત્પત્તિ અને સાહિત્યિક વિકાસનો scholarly પરિચય.","ગુજરાત યુનિવર્સિટી ગ્રંથનિર્માણ",2005,5],
  ["વિજ્ઞાનની વિશ્વસફર","જયંત એન. નર્લીકર","","Science","વિજ્ઞાન અને આધુનિક universe અંગે Gujarati વિજ્ઞાનપ્રેરક લેખમાળા.","સુરેન્દ્ર પ્રકાશન",2010,6],
  ["ભૌતિક વિજ્ઞાનનો પરિચય","શૈલેષ મોદી","","Science","વિદ્યાર્થીઓ માટે ગતિ, ઉર્જા અને પ્રકાશના મૂળભૂત સિદ્ધાંતોનો પરિચય.","વિશ્વભારતી પ્રકાશન",2017,6],
  ["કમ્પ્યુટર વિજ્ઞાન પરિચય","નરેશ પટેલ","","Technology","કમ્પ્યુટર systems, software અને digital technologyનો Gujarati માર્ગદર્શક.","ટેકનો પ્રકાશન",2021,7],
  ["ઇન્ટરનેટ અને નવી ટેકનોલોજી","પ્રકાશ વાઘેલા","","Technology","ઇન્ટરનેટ, cyber safety અને emerging technologyનો સરળ Gujarati માર્ગદર્શક.","નવી દૃષ્ટિ પ્રકાશન",2020,6],
  ["ગુજરાતી રંગભૂમિ અને નાટ્યકলা","જગદીશ જોષી","","Arts","Gujarati theatreની પરંપરા, stage craft અને નાટ્યપ્રયોગોનો પરિચય.","ગુજરાત સાહિત્ય અકાદમી",2012,5],
  ["ગુજરાતની લોકકला અને हस्तકला","પ્રમિલાબેન પટેલ","","Arts","ગુજરાતની textile art, folk painting અને traditional craft traditionsનું Gujarati વર્ણન.","ગુજરાતી લોકકલા મંડળ",2018,4],
  ["ગુજરાતનો ઇતિહાસ","ક. મ. મુનશી","","History","ગુજરાતના શાસકવંશો, સંસ્કૃતિ અને historical developmentનો Gujarati પરિચય.","ભાવન વિદ્યા ભવન",2011,7],
  ["ગુજરાતના वीर પુરુષો","માણેકલાલ પટેલ","","History","ગુજરાતના historical personalitiesની प्रेरક जीवनीસંગ્રહ.","ગુજરાતી સાહિત્ય મંદિર",2015,5]
];

function toDateOffset(days) {
  const d = new Date();
  d.setDate(d.getDate() + days);
  return d.toISOString().slice(0, 10);
}

function seed() {
  const existing = localStorage.getItem(STORE_KEY);
  if (existing) return JSON.parse(existing);

  const books = bookSeed.map((b, i) => ({
    id: `B${String(i + 1).padStart(3, "0")}`,
    title: b[0], author: b[1], isbn: b[2], category: b[3],
    year: b[4], copies: b[5], available: b[5] - (i % 4 === 0 ? 1 : 0),
    publisher: i % 3 ? "University Press" : "Pearson Academic",
    cover: coverBase + b[2] + "-L.jpg",
    description: `An essential academic resource covering the key principles, methods, and modern practice of ${b[3].toLower}.${i ? "" : ""}`
  }));
  [...gujaratiLiteratureSeed, ...gujaratiOrganizedSeed].forEach((b, i) => {
    const index=books.length;
    books.push({
      id:`B${String(index+1).padStart(3,"0")}`,
      title:b[0], author:b[1], isbn:b[2], category:b[3],
      year:b[6], copies:b[7], available:b[7]-(i%5===0?1:0),
      publisher:b[6],
      cover:gujaratiCover(b[0], b[3]),
      description:b[4] || "A Gujarati-language academic resource."
    });
  });
  const catRows = categories.map((c, i) => ({ id: `C${i + 1}`, name: c[0], description: `${c[0]} collection and reference resources`, bookCount: books.filter(b => b.category === c[0]).length }));
  const students = Array.from({ length: 15 }, (_, i) => ({
    id: `S${String(i + 1).padStart(3, "0")}`,
    name: ["Aarav Sharma","Diya Patel","Rohan Mehta","Ananya Iyer","Kabir Singh","Sara Khan","Aditya Verma","Ishita Rao","Vikram Das","Nisha Gupta","Arjun Reddy","Meera Nair","Dev Malhotra","Pooja Joshi","Neel Kapoor"][i],
    email: `student${i + 1}@northbridge.edu`,
    phone: `+91 98${String(7410000 + i * 137).padStart(7, "0")}`,
    department: ["Computer Science","Information Technology","Commerce","Management","Mathematics"][i % 5],
    year: (i % 4) + 1,
    status: i === 12 ? "Inactive" : "Active",
    avatar: `https://i.pravatar.cc/150?img=${i + 12}`
  }));
  const librarians = [
    { id:"L001", name:"Trushali Bambhaniya", email:"maya.fernandes@northbridge.edu", phone:"+91 98765 41001", shift:"Morning", status:"Active", avatar:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300&q=88" },
    { id:"L002", name:"Daniel Thomas", email:"daniel.thomas@northbridge.edu", phone:"+91 98765 41002", shift:"Afternoon", status:"Active", avatar:"https://i.pravatar.cc/150?img=11" },
    { id:"L003", name:"Priya Nair", email:"priya.nair@northbridge.edu", phone:"+91 98765 41003", shift:"Evening", status:"Active", avatar:"https://i.pravatar.cc/150?img=32" }
  ];
  const issues = [
    { id:"I1001", studentId:"S001", bookId:"B001", issueDate:toDateOffset(-18), dueDate:toDateOffset(4), returnDate:null, status:"Issued" },
    { id:"I1002", studentId:"S002", bookId:"B010", issueDate:toDateOffset(-12), dueDate:toDateOffset(-1), returnDate:null, status:"Overdue" },
    { id:"I1003", studentId:"S003", bookId:"B036", issueDate:toDateOffset(-8), dueDate:toDateOffset(7), returnDate:null, status:"Issued" },
    { id:"I1004", studentId:"S004", bookId:"B011", issueDate:toDateOffset(-40), dueDate:toDateOffset(-25), returnDate:toDateOffset(-23), status:"Returned" },
    { id:"I1005", studentId:"S005", bookId:"B021", issueDate:toDateOffset(-35), dueDate:toDateOffset(-20), returnDate:toDateOffset(-19), status:"Returned" },
    { id:"I1006", studentId:"S001", bookId:"B031", issueDate:toDateOffset(-21), dueDate:toDateOffset(-6), returnDate:toDateOffset(-5), status:"Returned" },
    { id:"I1007", studentId:"S006", bookId:"B016", issueDate:toDateOffset(-4), dueDate:toDateOffset(10), returnDate:null, status:"Issued" },
    { id:"I1008", studentId:"S007", bookId:"B026", issueDate:toDateOffset(-3), dueDate:toDateOffset(11), returnDate:null, status:"Issued" },
    { id:"I1009", studentId:"S008", bookId:"B038", issueDate:toDateOffset(-17), dueDate:toDateOffset(-2), returnDate:null, status:"Overdue" },
    { id:"I1010", studentId:"S009", bookId:"B040", issueDate:toDateOffset(-26), dueDate:toDateOffset(-11), returnDate:toDateOffset(-8), status:"Returned" }
  ];
  const fines = issues.map((x, i) => {
    const overdueDays = x.status === "Returned" ? Math.max(0, daysBetween(x.dueDate, x.returnDate)) : Math.max(0, daysBetween(x.dueDate, todayStr()));
    return { id:`F${String(i + 1).padStart(3,"0")}`, issueId:x.id, studentId:x.studentId, amount:overdueDays * 5, status:overdueDays ? (i % 2 ? "Paid" : "Unpaid") : "Paid", reason:overdueDays ? "Overdue return" : "No fine" };
  });
  const notifications = [
    { id:"N1", audience:"all", title:"Library hours extended", message:"The central reading hall will remain open until 9:00 PM during examination week.", time:"Today, 9:30 AM", unread:true },
    { id:"N2", audience:"student", title:"Due date reminder", message:"Please return your issued books before the due date to avoid late fines.", time:"Yesterday, 4:15 PM", unread:true },
    { id:"N3", audience:"librarian", title:"Inventory review scheduled", message:"The monthly inventory review begins Friday at 10:00 AM.", time:"Oct 28, 11:20 AM", unread:false },
    { id:"N4", audience:"admin", title:"Monthly report ready", message:"The October circulation and fine summary is available in Reports.", time:"Oct 27, 2:00 PM", unread:false }
  ];
  const activities = [
    { text:"Aarav Sharma issued Introduction to Algorithms", time:"12 minutes ago" },
    { text:"Trushali Bambhaniya updated the Computer Science category", time:"38 minutes ago" },
    { text:"New student registration: Neel Kapoor", time:"1 hour ago" },
    { text:"Fine payment recorded for I1010", time:"2 hours ago" },
    { text:"Cloud Computing inventory adjusted", time:"Yesterday" }
  ];
  return { books, categories:catRows, students, librarians, issues, fines, notifications, activities, settings:{name:"Northbridge University Library", finePerDay:5, loanDays:14, email:"library@northbridge.edu", phone:"+91 98765 43210"} };
}

function daysBetween(a, b) {
  return Math.ceil((new Date(b) - new Date(a)) / 86400000);
}
function todayStr() { return new Date().toISOString().slice(0,10); }
function esc(str="") { return String(str).replace(/[&<>"']/g, m => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[m])); }
function money(n) { return `₹${Number(n || 0).toLocaleString("en-IN")}`; }
function save(data) { localStorage.setItem(STORE_KEY, JSON.stringify(data)); }

const librarianAvatar="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300&q=88";

function applyProfileAndGujaratiMigration(currentData) {
  if(!Array.isArray(currentData.books)) currentData.books=[];
  if(!Array.isArray(currentData.categories)) currentData.categories=[];
  const allSeed=[...gujaratiLiteratureSeed,...gujaratiOrganizedSeed];
  const retainedLiteratureTitles=new Set(gujaratiLiteratureSeed.map(b=>b[0]));

  // Remove only old Gujarati Literature records outside the two required retained titles.
  currentData.books=currentData.books.filter(book=>{
    if(book.category==="Gujarati Literature"){
      return retainedLiteratureTitles.has(book.title);
    }
    return true;
  });

  ["Gujarati Literature","Generalities","Philosophy","Religion","Social Sciences","Language","Science","Technology","Arts","History"].forEach((name)=>{
    if(!currentData.categories.some(c=>c.name===name)){
      currentData.categories.push({id:`C${currentData.categories.length+1}`,name,description:`${name} collection and reference resources`,bookCount:0});
    }
  });

  // Reconcile the exact migration records once, preserving IDs and circulation records.
  allSeed.forEach((b,index)=>{
    const normalizedTitle=String(b[0]).trim();
    const matches=currentData.books.filter(book=>String(book.title||"").trim()===normalizedTitle||(b[2]&&book.isbn===b[2]));
    let book=matches[0];
    if(!book){
      const nextId=Math.max(0,...currentData.books.map(item=>Number(String(item.id||"").replace(/\D/g,""))||0))+1;
      book={id:`B${String(nextId).padStart(3,"0")}`,copies:b[7],available:b[7]};
      currentData.books.push(book);
    }
    Object.assign(book,{
      title:b[0],author:b[1],isbn:b[2],category:b[3],description:b[4],
      publisher:b[5],year:b[6],copies:b[7],available:book.available==null?b[7]:Math.min(book.available,b[7]),
      cover:gujaratiCover(b[0],b[3])
    });
  });

  // Remove duplicate migration records by normalized title or ISBN, never touching English records.
  const seenTitles=new Set();
  const seenIsbns=new Set();
  currentData.books=currentData.books.filter(book=>{
    const seedRecord=allSeed.find(b=>b[0]===book.title||(b[2]&&b[2]===book.isbn));
    if(!seedRecord) return true;
    const title=String(book.title||"").trim();
    const isbn=String(book.isbn||"").trim();
    if(seenTitles.has(title)||(isbn&&seenIsbns.has(isbn))) return false;
    seenTitles.add(title);
    if(isbn) seenIsbns.add(isbn);
    return true;
  });

  currentData.categories.forEach(category=>{
    category.bookCount=currentData.books.filter(book=>book.category===category.name).length;
  });

  if(Array.isArray(currentData.librarians)){
    const primary=currentData.librarians.find(l=>l.id==="L001");
    if(primary){primary.name="Trushali Bambhaniya";primary.avatar=librarianAvatar;}
  }
  if(Array.isArray(currentData.activities)){
    currentData.activities.forEach(activity=>{
      activity.text=String(activity.text||"").replace(/Dr\. Evelyn Carter/g,"Venish Parmar").replace(/Maya Fernandes/g,"Trushali Bambhaniya");
    });
  }
  return currentData;
}

let data=seed();
if(localStorage.getItem(STORE_KEY)){
  data=applyProfileAndGujaratiMigration(data);
  save(data);
} else {
  save(data);
}

function getSession() {
  try {
    return JSON.parse(sessionStorage.getItem(SESSION_KEY) || localStorage.getItem(SESSION_KEY));
  } catch {
    return null;
  }
}
function setSession(session, remember=null) {
  const serialized=JSON.stringify(session);
  if(remember===null) remember=Boolean(localStorage.getItem(SESSION_KEY));
  sessionStorage.removeItem(SESSION_KEY);
  localStorage.removeItem(SESSION_KEY);
  if(remember) localStorage.setItem(SESSION_KEY, serialized);
  else sessionStorage.setItem(SESSION_KEY, serialized);
}
function logout() {
  localStorage.removeItem(SESSION_KEY);
  sessionStorage.removeItem(SESSION_KEY);
  location.hash = "#/login";
}

const roleLabels = { admin:"Administrator", librarian:"Librarian", student:"Student" };
const accounts = {
  admin:{ email:"admin@northbridge.edu", password:"admin123", role:"admin", name:"Venish Parmar", id:"A001", avatar:"" },
  librarian:{ email:"librarian@northbridge.edu", password:"library123", role:"librarian", name:"Trushali Bambhaniya", id:"L001", avatar:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300&q=88" },
  student:{ email:"student@northbridge.edu", password:"student123", role:"student", name:"Aarav Sharma", id:"S001", avatar:"https://i.pravatar.cc/150?img=12" }
};

const currentSession=getSession();
if(currentSession){
  const account=accounts[currentSession.role];
  if(account){
    const updated={...currentSession,name:account.name,id:account.id,avatar:account.avatar};
    const remember=Boolean(localStorage.getItem(SESSION_KEY))&&localStorage.getItem(SESSION_KEY)!==null;
    setSession(updated,remember);
  }
}

function publicNav(active="") {
  return `<nav class="navbar navbar-expand-lg public-nav" id="publicNav">
    <div class="container">
      <a class="navbar-brand d-flex align-items-center gap-2 text-white" href="#/landing">
        <span class="brand-mark">N</span><span><strong>Northbridge</strong><small class="d-block opacity-75 fw-normal">University Library</small></span>
      </a>
      <button class="navbar-toggler border-light text-white" type="button" data-bs-toggle="collapse" data-bs-target="#publicMenu"><i class="bi bi-list fs-4"></i></button>
      <div class="collapse navbar-collapse" id="publicMenu">
        <ul class="navbar-nav ms-auto align-items-lg-center">
          <li><a class="nav-link ${active==="landing"?"active":""}" href="#/landing">Home</a></li>
          <li><a class="nav-link ${active==="about"?"active":""}" href="#/about">About</a></li>
          <li><a class="nav-link ${active==="rules"?"active":""}" href="#/rules">Library Rules</a></li>
          <li><a class="nav-link ${active==="contact"?"active":""}" href="#/contact">Contact</a></li>
          <li><a class="btn btn-gold ms-lg-3 mt-3 mt-lg-0 px-4" href="#/login">Portal Login</a></li>
        </ul>
      </div>
    </div>
  </nav>`;
}

function landingPage() {
  const featured = data.books.slice(0, 8);
  return `<div class="landing-page">
    ${publicNav("landing")}
    <header class="hero">
      <div class="container hero-content">
        <div class="eyebrow mb-3">Knowledge for a changing world</div>
        <h1>Your gateway to discovery.</h1>
        <p class="hero-lead mt-4">Explore 40,000+ scholarly resources, quiet reading spaces, digital collections, and expert research support at Northbridge University.</p>
        <form class="hero-search d-flex mt-4" data-action="landing-search">
          <input class="form-control" name="query" placeholder="Search books by title, author or ISBN..." aria-label="Search library">
          <button class="btn btn-gold px-4" type="submit"><i class="bi bi-search me-2"></i>Search</button>
        </form>
      </div>
      <div class="hero-stats">
        <div class="hero-stat"><strong>40K+</strong><span>Library resources</span></div>
        <div class="hero-stat"><strong>1,200</strong><span>Daily visitors</span></div>
        <div class="hero-stat"><strong>18</strong><span>Specialist librarians</span></div>
      </div>
    </header>
    <section class="section-padding bg-white">
      <div class="container">
        <div class="row align-items-end mb-5"><div class="col-lg-7"><div class="section-heading">
          <div class="eyebrow mb-2">About the library</div><h2>A place for curiosity and scholarship.</h2>
        </div></div><div class="col-lg-5"><p class="text-secondary mb-0">Northbridge Library brings together trusted collections, technology-rich spaces, and dedicated guidance to support every stage of learning and research.</p></div></div>
        <div class="row g-4">
          <div class="col-md-4"><div class="feature-card"><div class="feature-icon"><i class="bi bi-journal-richtext"></i></div><h3 class="h5 fw-bold">Extensive Collections</h3><p class="text-secondary small mb-0">Books, journals, databases, and archives curated across disciplines.</p></div></div>
          <div class="col-md-4"><div class="feature-card"><div class="feature-icon"><i class="bi bi-laptop"></i></div><h3 class="h5 fw-bold">Digital Research Hub</h3><p class="text-secondary small mb-0">Access academic databases and digital resources anywhere on campus.</p></div></div>
          <div class="col-md-4"><div class="feature-card"><div class="feature-icon"><i class="bi bi-people"></i></div><h3 class="h5 fw-bold">Expert Assistance</h3><p class="text-secondary small mb-0">Receive personalized research and citation support from specialists.</p></div></div>
        </div>
      </div>
    </section>
    <section class="section-padding">
      <div class="container">
        <div class="d-flex justify-content-between align-items-end mb-4"><div class="section-heading"><div class="eyebrow mb-2">New arrivals</div><h2>Featured books</h2></div><a href="#/login" class="btn btn-outline-dark btn-sm px-3">View catalogue</a></div>
        <div class="row g-4">${featured.map(bookCardPublic).join("")}</div>
      </div>
    </section>
    <section class="section-padding bg-white">
      <div class="container"><div class="section-heading mb-4"><div class="eyebrow mb-2">Explore collections</div><h2>Popular categories</h2></div>
        <div class="category-grid">${[
          ["Computer Science","https://images.unsplash.com/photo-1518770660439-4636190af475"],
          ["Mathematics","https://images.unsplash.com/photo-1509228468518-180dd4864904"],
          ["Physics","https://images.unsplash.com/photo-1635070041078-e363dbe005cb"],
          ["Management","https://images.unsplash.com/photo-1556761175-b413da4baf72"]
        ].map((x,i)=>`<a href="#/login" class="category-tile" style="background-image:url('${x[1]}?auto=format&fit=crop&w=700&q=80')"><small>${[10,8,7,9][i]} collections</small><h3 class="h5 mb-0">${x[0]}</h3></a>`).join("")}</div>
      </div>
    </section>
    <section class="section-padding">
      <div class="container"><div class="row g-5 align-items-center">
        <div class="col-lg-6"><img class="rounded-4 shadow w-100" src="https://images.unsplash.com/photo-1568667256549-094345857637?auto=format&fit=crop&w=1000&q=85" alt="Library reading hall"></div>
        <div class="col-lg-6"><div class="section-heading"><div class="eyebrow mb-2">Plan your visit</div><h2>Opening hours & facilities</h2></div>
          <div class="row g-3 mt-2"><div class="col-sm-6"><div class="feature-card py-4"><strong>Monday–Friday</strong><div class="text-secondary">8:00 AM – 8:00 PM</div></div></div><div class="col-sm-6"><div class="feature-card py-4"><strong>Saturday–Sunday</strong><div class="text-secondary">9:00 AM – 5:00 PM</div></div></div></div>
          <div class="mt-4 d-flex flex-wrap gap-2"><span class="category-chip">Wi-Fi enabled</span><span class="category-chip">Study rooms</span><span class="category-chip">Printing</span><span class="category-chip">Accessibility</span></div>
        </div>
      </div></div>
    </section>
    ${publicFooter()}
  </div>`;
}

function bookCardPublic(b) {
  return `<div class="col-6 col-md-3 col-lg-3"><a href="#/book/${b.id}" class="d-block text-dark" aria-label="View details for ${esc(b.title)}"><div class="book-card"><img class="book-cover" src="${esc(b.cover)}" alt="${esc(b.title)}" onerror="this.src='https://images.unsplash.com/photo-1543002588-bfa74002ed7e?auto=format&fit=crop&w=500&q=80'"><div class="book-card-body"><span class="category-chip mb-2">${esc(b.category)}</span><h3>${esc(b.title)}</h3><small class="text-secondary">${esc(b.author)}</small></div></div></a></div>`;
}

function publicBookDetailPage(id) {
  const b=data.books.find(x=>x.id===id);
  if(!b){
    return `<div>${publicNav("")}<section class="section-padding bg-white"><div class="container"><div class="empty-state"><i class="bi bi-book"></i><p>This book is not available.</p><a href="#/landing" class="btn btn-navy">Back to library</a></div></div></section>${publicFooter()}</div>`;
  }
  return `<div>${publicNav("")}<section class="section-padding bg-white"><div class="container"><a href="#/landing" class="text-secondary small mb-4 d-inline-block"><i class="bi bi-arrow-left me-1"></i>Back to library</a><div class="row g-4"><div class="col-md-4"><img class="book-detail-cover" src="${esc(b.cover)}" alt="${esc(b.title)}" onerror="this.src='https://images.unsplash.com/photo-1543002588-bfa74002ed7e?auto=format&fit=crop&w=700&q=80'"></div><div class="col-md-8"><div class="panel h-100"><div class="panel-body p-4"><span class="category-chip mb-3">${esc(b.category)}</span><h1 class="brand-serif">${esc(b.title)}</h1><h2 class="h5 text-secondary mb-4">by ${esc(b.author)}</h2><p class="text-secondary">${esc(b.description)}</p><hr><div class="row g-3 mb-4"><div class="col-sm-6"><small class="text-secondary d-block">ISBN</small><strong>${esc(b.isbn)}</strong></div><div class="col-sm-6"><small class="text-secondary d-block">Publisher</small><strong>${esc(b.publisher)}</strong></div><div class="col-sm-6"><small class="text-secondary d-block">Published year</small><strong>${b.year}</strong></div><div class="col-sm-6"><small class="text-secondary d-block">Availability</small><strong>${b.available} of ${b.copies} copies</strong></div></div><span class="status-badge ${b.available?"status-active":"status-overdue"}">${b.available?"Available":"Currently unavailable"}</span><a href="#/login" class="btn btn-navy ms-3">Portal Login</a></div></div></div></div></div></section>${publicFooter()}</div>`;
}

function publicFooter() {
  return `<footer class="footer pt-5 pb-3"><div class="container"><div class="row g-4 pb-4"><div class="col-lg-5"><div class="d-flex align-items-center gap-2 mb-3"><span class="brand-mark">N</span><strong class="text-white brand-serif fs-5">Northbridge University</strong></div><p class="small">Empowering learning, inquiry, and innovation through open access to knowledge.</p></div><div class="col-lg-2 col-6"><strong class="text-white small">Explore</strong><div class="d-flex flex-column mt-3 gap-2 small"><a href="#/about">About</a><a href="#/rules">Rules</a><a href="#/login">Portal</a></div></div><div class="col-lg-3 col-6"><strong class="text-white small">Contact</strong><div class="small mt-3">library@northbridge.edu<br>+91 98765 43210</div></div><div class="col-lg-2"><strong class="text-white small">Hours</strong><div class="small mt-3">Mon–Fri: 8 AM–8 PM<br>Sat–Sun: 9 AM–5 PM</div></div></div><hr class="border-secondary opacity-25"><div class="small py-2">© 2026 Northbridge University Library</div></div></footer>`;
}

function aboutPage() {
  return `<div>${publicNav("about")}<header class="hero" style="min-height:430px;background-position:center 60%;"><div class="container hero-content" style="padding-top:150px"><div class="eyebrow mb-2">Our institution</div><h1 class="display-4">About the Library</h1></div></header><section class="section-padding bg-white"><div class="container"><div class="row g-5 align-items-center"><div class="col-lg-6"><div class="section-heading"><div class="eyebrow mb-2">Northbridge Library</div><h2>Knowledge, access, and academic excellence.</h2></div><p class="text-secondary lh-lg">Our library supports teaching, learning, and research through carefully curated collections, modern digital services, and welcoming study environments. Students and faculty can discover multidisciplinary resources with guidance from experienced information professionals.</p></div><div class="col-lg-6"><img class="w-100 rounded-4 shadow" src="https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=900&q=85" alt="University library"></div></div></div></section>${publicFooter()}</div>`;
}
function rulesPage() {
  const rules=["Borrowing privileges require a valid university identity card.","The standard loan period is 14 days for books.","Overdue materials incur a fine at the configured daily rate.","Reference and rare materials may not leave the library.","Silence and respectful conduct must be maintained in reading areas.","Food and beverages are not permitted near collections.","Damaged or lost books must be reported immediately.","Personal belongings should be kept with the reader at all times."];
  return `<div>${publicNav("rules")}<header class="hero" style="min-height:430px"><div class="container hero-content" style="padding-top:150px"><div class="eyebrow mb-2">Visitor guide</div><h1 class="display-4">Library Rules</h1></div></header><section class="section-padding bg-white"><div class="container"><div class="row g-4">${rules.map((r,i)=>`<div class="col-md-6"><div class="feature-card"><div class="feature-icon">${String(i+1).padStart(2,"0")}</div><p class="mb-0 fw-semibold">${r}</p></div></div>`).join("")}</div></div></section>${publicFooter()}</div>`;
}
function contactPage() {
  return `<div>${publicNav("contact")}<header class="hero" style="min-height:430px"><div class="container hero-content" style="padding-top:150px"><div class="eyebrow mb-2">We are here to help</div><h1 class="display-4">Contact the Library</h1></div></header><section class="section-padding bg-white"><div class="container"><div class="row g-5"><div class="col-lg-5"><div class="feature-card"><h2 class="h4">Library Information</h2><p><i class="bi bi-envelope me-2 text-secondary"></i>library@northbridge.edu</p><p><i class="bi bi-telephone me-2 text-secondary"></i>+91 98765 43210</p><p><i class="bi bi-geo-alt me-2 text-secondary"></i>Central Library, Northbridge University Campus</p></div></div><div class="col-lg-7"><form class="panel p-4" data-action="contact" novalidate><div class="row g-3"><div class="col-md-6"><label class="form-label" for="contactName">Name</label><input class="form-control" id="contactName" name="name" required minlength="2"></div><div class="col-md-6"><label class="form-label" for="contactEmail">Email</label><input type="email" class="form-control" id="contactEmail" name="email" required></div><div class="col-12"><label class="form-label" for="contactMessage">Message</label><textarea class="form-control" id="contactMessage" name="message" rows="5" required minlength="10"></textarea></div><div class="col-12"><div class="small text-secondary mb-3"><strong>Demo form:</strong> Messages are saved in this browser only and are not emailed or delivered.</div><button class="btn btn-navy px-4" type="submit">Save demo message</button></div></div></form></div></div></div></section>${publicFooter()}</div>`;
}

function loginPage() {
  return `<main class="login-page">
    <aside class="login-aside">
      <a href="#/landing" class="d-flex align-items-center gap-2 text-white"><span class="brand-mark">N</span><span><strong>Northbridge</strong><small class="d-block opacity-75">University Library</small></span></a>
      <blockquote>“A library is not a luxury but one of the necessities of life.”<footer class="mt-3 fs-6 opacity-75">— Henry Ward Beecher</footer></blockquote>
      <small class="opacity-75">Academic Library Portal · 2026</small>
    </aside>
    <div class="login-main"><div class="login-card">
      <a href="#/landing" class="text-secondary small mb-4 d-inline-block"><i class="bi bi-arrow-left me-1"></i> Back to library</a>
      <div class="eyebrow mb-2">Secure portal</div><h1 class="mb-2">Welcome back</h1><p class="text-secondary mb-4">Sign in to continue to the library management portal.</p>
      <form id="loginForm" novalidate>
        <div class="mb-3"><label class="form-label fw-semibold" for="loginEmail">Email address</label><input class="form-control" id="loginEmail" type="email" name="email" value="${esc(accounts.admin.email)}" required autocomplete="username"></div>
        <div class="mb-3"><label class="form-label fw-semibold" for="loginPassword">Password</label><div class="input-group"><input class="form-control" id="loginPassword" type="password" name="password" value="${esc(accounts.admin.password)}" required autocomplete="current-password"><button class="btn btn-outline-secondary" type="button" data-action="toggle-password"><i class="bi bi-eye"></i></button></div></div>
        <div class="d-flex justify-content-between mb-4"><div class="form-check"><input class="form-check-input" type="checkbox" id="remember" checked><label class="form-check-label small" for="remember">Remember me</label></div></div>
        <button class="btn btn-navy w-100 py-2">Sign in to portal</button>
        <div id="loginError" class="text-danger small mt-3"></div>
      </form>
      <div class="mt-4"><div class="small text-secondary mb-2">Demo accounts</div><div class="row g-2">
        ${["admin","librarian","student"].map(r=>`<div class="col-12"><button type="button" class="demo-account w-100 text-start d-flex justify-content-between align-items-center" data-demo="${r}" aria-label="Fill ${roleLabels[r]} demo credentials"><span><strong>${roleLabels[r]}</strong><small class="d-block text-secondary">${accounts[r].email}</small></span><i class="bi bi-arrow-right"></i></button></div>`).join("")}
      </div></div>
    </div></div>
  </main>`;
}

function shell(pageTitle, content, activeRoute) {
  const session = getSession();
  const role = session?.role || "student";
  const unreadCount=data.notifications.filter(n=>(n.audience==="all"||n.audience===role)&&n.unread).length;
  const menuItems = {
    admin:[
      ["dashboard","bi-grid-1x2-fill","Dashboard"],
      ["categories","bi-tags-fill","Categories"],
      ["students","bi-mortarboard-fill","Students"],
      ["librarians","bi-person-workspace","Librarians"],
      ["fines","bi-cash-stack","Fine Management"],
      ["reports","bi-bar-chart-line-fill","Reports"],
      ["notifications","bi-bell-fill","Notifications"],
      ["activities","bi-clock-history","Activity Logs"],
      ["settings","bi-gear-fill","Settings"]
    ],
    librarian:[
      ["dashboard","bi-grid-1x2-fill","Dashboard"],
      ["books","bi-book-half","Book Management"],
      ["categories","bi-tags-fill","Categories"],
      ["students","bi-mortarboard-fill","Students"],
      ["issue","bi-box-arrow-in-right","Issue Book"],
      ["return","bi-box-arrow-left","Return Book"],
      ["fines","bi-cash-stack","Fine Management"],
      ["reports","bi-bar-chart-line-fill","Reports"],
      ["notifications","bi-bell-fill","Notifications"],
      ["profile","bi-person-circle","My Profile"]
    ],
    student:[
      ["dashboard","bi-grid-1x2-fill","Dashboard"],
      ["browse","bi-book","Browse Books"],
      ["categories","bi-tags-fill","Categories"],
      ["issued","bi-journal-bookmark-fill","My Issued Books"],
      ["history","bi-clock-history","Reading History"],
      ["notifications","bi-bell-fill","Notifications"],
      ["profile","bi-person-circle","My Profile"]
    ]
  };
  const links = menuItems[role].map(([route,icon,label])=>`<a href="#/${route}" class="sidebar-link ${activeRoute===route?"active":""}"><i class="bi ${icon}"></i><span>${label}</span></a>`).join("");
  return `<div class="app-shell">
    <aside class="sidebar" id="sidebar"><div class="sidebar-brand"><span class="brand-mark">N</span><div><strong>Northbridge</strong><small>University Library</small></div></div>
      <div class="sidebar-menu"><div class="menu-label">${roleLabels[role]} portal</div>${links}</div>
      <div class="sidebar-footer"><button class="sidebar-link border-0 bg-transparent w-100" data-action="logout"><i class="bi bi-box-arrow-right"></i><span>Sign out</span></button></div>
    </aside>
    <main class="main-area"><header class="topbar">
      <div class="d-flex align-items-center gap-2"><button class="icon-btn mobile-menu" data-action="menu"><i class="bi bi-list"></i></button><div class="topbar-search search-box"><i class="bi bi-search"></i><input class="form-control form-control-sm" id="globalSearch" placeholder="Search library..."></div></div>
      <div class="d-flex align-items-center gap-2"><a href="#/notifications" class="icon-btn" aria-label="${unreadCount?`${unreadCount} unread notifications`:"Notifications"}"><i class="bi bi-bell"></i><span class="notification-dot ${unreadCount?"":"d-none"}"></span></a><div class="d-none d-sm-flex align-items-center gap-2 ms-1">${role==="admin"?`<span class="avatar avatar-initials" aria-label="Venish Parmar">VP</span>`:`<img src="${esc(session.avatar)}" class="avatar" alt="${esc(session.name)}" onerror="this.style.display='none'">`}<div><strong class="d-block small">${esc(session.name)}</strong><small class="text-secondary">${roleLabels[role]}</small></div></div></div>
    </header><div class="content"><div class="page-title mb-4">${pageTitle}</div>${content}</div></main>
  </div>`;
}

function statCard(icon, value, label, color="#eef3f8") {
  return `<div class="stat-card"><div class="d-flex align-items-start justify-content-between"><div><div class="value">${value}</div><div class="label mt-1">${label}</div></div><div class="stat-icon" style="background:${color}"><i class="bi ${icon}"></i></div></div></div>`;
}

function title(title, subtitle) { return `<div><h1>${title}</h1><p>${subtitle}</p></div>`; }

function adminDashboard() {
  const books = data.books.length, students=data.students.length, librarians=data.librarians.length;
  const issued=data.issues.filter(i=>i.status==="Issued"||i.status==="Overdue").length;
  const paid=data.fines.filter(f=>f.status==="Paid").reduce((s,f)=>s+sAmount(f),0);
  const content=`<div class="row g-3 mb-4">
    <div class="col-6 col-xl-3">${statCard("bi-book-half",books,"Total books","#edf4ff")}</div>
    <div class="col-6 col-xl-3">${statCard("bi-mortarboard",students,"Registered students","#edf9f4")}</div>
    <div class="col-6 col-xl-3">${statCard("bi-person-workspace",librarians,"Library staff","#fff4df")}</div>
    <div class="col-6 col-xl-3">${statCard("bi-journal-bookmark",issued,"Books issued","#f6edff")}</div>
  </div>
  <div class="row g-3 mb-4"><div class="col-md-8"><div class="panel"><div class="panel-header"><h2>Monthly circulation</h2><span class="category-chip">This year</span></div><div class="panel-body chart-wrap"><canvas id="adminCirculation"></canvas></div></div></div>
  <div class="col-md-4"><div class="panel"><div class="panel-header"><h2>Collection distribution</h2></div><div class="panel-body chart-wrap"><canvas id="adminCategories"></canvas></div></div></div></div>
  <div class="row g-3"><div class="col-lg-7"><div class="panel"><div class="panel-header"><h2>Recent activities</h2></div><div class="panel-body">${data.activities.slice(0,5).map(a=>`<div class="d-flex gap-3 mb-3"><span class="activity-dot mt-2"></span><div><div class="small fw-semibold">${esc(a.text)}</div><small class="text-secondary">${esc(a.time)}</small></div></div>`).join("")}</div></div></div>
  <div class="col-lg-5"><div class="panel"><div class="panel-header"><h2>Fine collection</h2><strong class="text-success">${money(paid)}</strong></div><div class="panel-body">${data.notifications.filter(n=>n.audience==="admin"||n.audience==="all").slice(0,3).map(n=>`<div class="notification-item"><div class="notification-icon"><i class="bi bi-megaphone"></i></div><div><strong class="small">${esc(n.title)}</strong><div class="small text-secondary mt-1">${esc(n.message)}</div><small class="text-secondary">${esc(n.time)}</small></div></div>`).join("")}</div></div></div></div>`;
  return shell(title("Admin Dashboard","Operations overview and library performance"),content,"dashboard");
}

function sAmount(f) { return Number(f.amount || 0); }

function librarianDashboard() {
  const available=data.books.reduce((s,b)=>s+b.available,0);
  const issued=data.issues.filter(i=>i.status==="Issued"||i.status==="Overdue").length;
  const overdue=data.issues.filter(i=>i.status==="Overdue").length;
  const todayReturns=data.issues.filter(i=>i.dueDate===todayStr()&&i.status!=="Returned").length;
  const categoryCounts=data.categories.map(c=>data.books.filter(b=>b.category===c.name).length);
  const content=`<div class="row g-3 mb-4">
    <div class="col-6 col-xl">${statCard("bi-bookshelf",data.books.length,"Total books")}</div><div class="col-6 col-xl">${statCard("bi-check2-circle",available,"Available")}</div><div class="col-6 col-xl">${statCard("bi-journal-arrow-up",issued,"Issued")}</div><div class="col-6 col-xl">${statCard("bi-exclamation-triangle",overdue,"Overdue","#fff0ee")}</div><div class="col-6 col-xl">${statCard("bi-calendar-check",todayReturns,"Today's returns","#edf9f4")}</div>
  </div><div class="row g-3"><div class="col-lg-5"><div class="panel"><div class="panel-header"><h2>Collection by category</h2></div><div class="panel-body chart-wrap"><canvas id="librarianCategories"></canvas></div></div></div>
  <div class="col-lg-7"><div class="panel"><div class="panel-header"><h2>Recent transactions</h2><a href="#/issue" class="btn btn-sm btn-navy">New issue</a></div><div class="table-responsive">${issueTable(data.issues.slice().reverse().slice(0,7))}</div></div></div></div>`;
  window.__categoryCounts=categoryCounts;
  return shell(title("Librarian Dashboard","Circulation desk and collection overview"),content,"dashboard");
}

function studentDashboard() {
  const session=getSession();
  const myIssues=data.issues.filter(i=>i.studentId===session.id);
  const current=myIssues.filter(i=>i.status==="Issued"||i.status==="Overdue");
  const history=myIssues.filter(i=>i.status==="Returned");
  const content=`<div class="panel mb-4" style="background:linear-gradient(135deg,#091a33,#173a6b);color:#fff"><div class="panel-body p-4"><div class="row align-items-center"><div class="col-md-8"><div class="eyebrow mb-2">Your library</div><h2 class="brand-serif text-white">Welcome back, ${esc(session.name.split(" ")[0])}</h2><p class="opacity-75 mb-3">You have ${current.length} active issue${current.length===1?"":"s"} and ${history.length} completed return${history.length===1?"":"s"}.</p><a href="#/browse" class="btn btn-gold">Browse books</a></div><div class="col-md-4 text-md-end mt-3 mt-md-0"><div class="brand-serif display-6">${current.length}</div><small class="opacity-75">Books currently issued</small></div></div></div></div>
  <div class="row g-3 mb-4"><div class="col-md-4">${statCard("bi-journal-bookmark-fill",current.length,"Currently issued","#edf4ff")}</div><div class="col-md-4">${statCard("bi-clock-history",history.length,"Completed returns","#edf9f4")}</div><div class="col-md-4">${statCard("bi-bell-fill",data.notifications.filter(n=>n.audience==="student"||n.audience==="all").length,"Notifications","#fff4df")}</div></div>
  <div class="row g-3"><div class="col-lg-7"><div class="panel"><div class="panel-header"><h2>Upcoming due dates</h2><a href="#/issued" class="btn btn-sm btn-outline-dark">View all</a></div><div class="table-responsive">${issueTable(current.slice(0,5))}</div></div></div><div class="col-lg-5"><div class="panel"><div class="panel-header"><h2>Recently added books</h2></div><div class="panel-body">${data.books.slice(0,4).map(b=>`<a href="#/book/${b.id}" class="d-flex gap-3 align-items-center mb-3 text-dark"><img src="${esc(b.cover)}" style="width:45px;height:62px;object-fit:cover;border-radius:6px" onerror="this.src='https://images.unsplash.com/photo-1543002588-bfa74002ed7e?auto=format&fit=crop&w=100&q=70'"><div><strong class="d-block small">${esc(b.title)}</strong><small class="text-secondary">${esc(b.author)}</small></div></a>`).join("")}</div></div></div></div>`;
  return shell(title("Student Dashboard","Your library activity at a glance"),content,"dashboard");
}

function issueTable(items) {
  if (!items.length) return `<div class="empty-state"><i class="bi bi-journal-x"></i><p class="mt-2 mb-0">No transactions found</p></div>`;
  return `<table class="table"><thead><tr><th>Book</th><th>Member</th><th>Due date</th><th>Status</th></tr></thead><tbody>${items.map(i=>{
    const b=data.books.find(b=>b.id===i.bookId)||{title:"Unknown"};
    const s=data.students.find(s=>s.id===i.studentId)||{name:"Unknown"};
    const status=i.status==="Overdue"?"Overdue":i.status==="Returned"?"Returned":"Issued";
    return `<tr><td><strong>${esc(b.title)}</strong><small class="d-block text-secondary">${esc(i.id)}</small></td><td>${esc(s.name)}</td><td>${esc(i.dueDate)}</td><td><span class="status-badge status-${status.toLowerCase()}">${status}</span></td></tr>`;
  }).join("")}</tbody></table>`;
}

function categoriesPage() {
  const role=getSession()?.role;
  const rows=data.categories.map(c=>`<tr><td><strong>${esc(c.name)}</strong></td><td>${esc(c.description)}</td><td>${data.books.filter(b=>b.category===c.name).length}</td>${role==="student"?"":`<td><div class="d-flex gap-2"><button class="icon-btn border" data-action="edit-category" data-id="${c.id}" title="Edit"><i class="bi bi-pencil"></i></button><button class="icon-btn border text-danger" data-action="delete-category" data-id="${c.id}" title="Delete"><i class="bi bi-trash"></i></button></div></td>`}</tr>`).join("");
  const add=role==="student"?"":`<button class="btn btn-navy btn-sm" data-action="add-category"><i class="bi bi-plus-lg me-1"></i>Add category</button>`;
  const content=`<div class="toolbar"><div class="search-box"><i class="bi bi-search"></i><input class="form-control" id="categorySearch" placeholder="Search categories..."></div>${add}</div><div class="panel table-responsive"><table class="table" id="categoryTable"><thead><tr><th>Name</th><th>Description</th><th>Books</th>${role==="student"?"":"<th>Actions</th>"}</tr></thead><tbody>${rows}</tbody></table></div>`;
  return shell(title("Categories","Manage library collection groups"),content,"categories");
}

function studentsPage() {
  const rows=data.students.map(s=>`<tr><td><div class="d-flex align-items-center gap-2"><img src="${esc(s.avatar)}" class="avatar" onerror="this.style.display='none'"><div><strong>${esc(s.name)}</strong><small class="d-block text-secondary">${esc(s.id)}</small></div></div></td><td>${esc(s.email)}</td><td>${esc(s.department)}</td><td>Year ${s.year}</td><td><span class="status-badge status-active">${esc(s.status)}</span></td><td><div class="d-flex gap-2"><button class="icon-btn border" data-action="edit-student" data-id="${s.id}" title="Edit"><i class="bi bi-pencil"></i></button><button class="icon-btn border text-danger" data-action="delete-student" data-id="${s.id}" title="Delete"><i class="bi bi-trash"></i></button></div></td></tr>`).join("");
  const content=`<div class="toolbar"><div class="search-box"><i class="bi bi-search"></i><input class="form-control" id="studentSearch" placeholder="Search students, email or department..."></div><button class="btn btn-navy btn-sm" data-action="add-student"><i class="bi bi-plus-lg me-1"></i>Add student</button></div><div class="panel table-responsive"><table class="table" id="studentTable"><thead><tr><th>Student</th><th>Email</th><th>Department</th><th>Program year</th><th>Status</th><th>Actions</th></tr></thead><tbody>${rows}</tbody></table></div>`;
  return shell(title("Student Management","Create and maintain student records"),content,"students");
}

function librariansPage() {
  const rows=data.librarians.map(l=>`<tr><td><div class="d-flex align-items-center gap-2"><img src="${esc(l.avatar)}" class="avatar" onerror="this.style.display='none'"><div><strong>${esc(l.name)}</strong><small class="d-block text-secondary">${esc(l.id)}</small></div></div></td><td>${esc(l.email)}</td><td>${esc(l.phone)}</td><td>${esc(l.shift)}</td><td><span class="status-badge status-active">${esc(l.status)}</span></td><td><div class="d-flex gap-2"><button class="icon-btn border" data-action="edit-librarian" data-id="${l.id}" title="Edit"><i class="bi bi-pencil"></i></button><button class="icon-btn border text-danger" data-action="delete-librarian" data-id="${l.id}" title="Delete"><i class="bi bi-trash"></i></button></div></td></tr>`).join("");
  const content=`<div class="toolbar"><div class="search-box"><i class="bi bi-search"></i><input class="form-control" id="librarianSearch" placeholder="Search librarians..."></div><button class="btn btn-navy btn-sm" data-action="add-librarian"><i class="bi bi-plus-lg me-1"></i>Add librarian</button></div><div class="panel table-responsive"><table class="table" id="librarianTable"><thead><tr><th>Librarian</th><th>Email</th><th>Phone</th><th>Shift</th><th>Status</th><th>Actions</th></tr></thead><tbody>${rows}</tbody></table></div>`;
  return shell(title("Librarian Management","Staff accounts and assignment details"),content,"librarians");
}

function booksPage() {
  const rows=data.books.map(b=>`<div class="data-book-card"><img class="cover" src="${esc(b.cover)}" alt="${esc(b.title)}" onerror="this.src='https://images.unsplash.com/photo-1543002588-bfa74002ed7e?auto=format&fit=crop&w=500&q=80'"><div class="body"><span class="category-chip mb-2">${esc(b.category)}</span><h3>${esc(b.title)}</h3><div class="small text-secondary mb-2">${esc(b.author)}</div><div class="d-flex justify-content-between align-items-center"><small><strong>${b.available}</strong> / ${b.copies} available</small><div class="d-flex gap-1"><button class="icon-btn border" data-action="edit-book" data-id="${b.id}" title="Edit"><i class="bi bi-pencil"></i></button><button class="icon-btn border text-danger" data-action="delete-book" data-id="${b.id}" title="Delete"><i class="bi bi-trash"></i></button></div></div></div></div>`).join("");
  const categories=data.categories.map(c=>`<option>${esc(c.name)}</option>`).join("");
  const content=`<div class="toolbar"><div class="search-box"><i class="bi bi-search"></i><input class="form-control" id="bookSearch" placeholder="Search title, author, ISBN or category..."></div><select class="form-select" id="categoryFilter" style="max-width:220px"><option value="">All categories</option>${categories}</select><button class="btn btn-navy btn-sm" data-action="add-book"><i class="bi bi-plus-lg me-1"></i>Add book</button></div><div class="data-grid" id="bookGrid">${rows}</div>`;
  return shell(title("Book Management","Catalogue inventory and availability"),content,"books");
}

function browsePage() {
  const cards=data.books.map(b=>`<article class="data-book-card browse-book-card" data-category="${esc(b.category)}"><a href="#/book/${b.id}" class="browse-cover-link" aria-label="View details for ${esc(b.title)}"><div class="browse-cover-wrap"><img class="cover" src="${esc(b.cover)}" alt="Cover of ${esc(b.title)}" loading="lazy" onerror="this.onerror=null;this.src='https://images.unsplash.com/photo-1543002588-bfa74002ed7e?auto=format&fit=crop&w=500&q=80'"></div></a><div class="body"><span class="category-chip mb-2">${esc(b.category)}</span><a href="#/book/${b.id}" class="text-dark"><h3>${esc(b.title)}</h3></a><div class="small text-secondary mb-2">${esc(b.author)}</div><div class="browse-book-meta"><small><span class="text-secondary">ISBN</span> ${esc(b.isbn||"Not specified")}</small><span class="status-badge ${b.available?"status-active":"status-overdue"}">${b.available?"Available":"Unavailable"}</span></div></div></article>`).join("");
  const gujaratiCategoryNames=["Generalities","Philosophy","Religion","Social Sciences","Language","Science","Technology","Arts","History","Gujarati Literature"];
  const iconMap={
    "Generalities":"bi-collection","Philosophy":"bi-lightbulb","Religion":"bi-peace",
    "Social Sciences":"bi-people","Language":"bi-translate","Science":"bi-flask",
    "Technology":"bi-cpu","Arts":"bi-palette","History":"bi-clock-history",
    "Gujarati Literature":"bi-book","Computer Science":"bi-code-slash",
    "Information Technology":"bi-router","Mathematics":"bi-calculator",
    "Physics":"bi-atom","Chemistry":"bi-droplet","Commerce":"bi-briefcase",
    "Management":"bi-diagram-3","English":"bi-chat-left-text"
  };
  const categoryNames=[];
  gujaratiCategoryNames.forEach(name=>{if(!categoryNames.includes(name))categoryNames.push(name);});
  [...data.categories.map(c=>c.name),...data.books.map(b=>b.category)].forEach(name=>{
    const clean=String(name||"").trim();
    if(clean&&!categoryNames.includes(clean))categoryNames.push(clean);
  });
  const cats=categoryNames.map(name=>`<option>${esc(name)}</option>`).join("");
  const categoryCards=categoryNames.map(name=>{
    const count=data.books.filter(b=>String(b.category||"").trim()===name).length;
    const icon=iconMap[name]||"bi-book";
    return `<button type="button" class="browse-category-card" data-browse-category="${esc(name)}"><span class="browse-category-icon"><i class="bi ${icon}"></i></span><span class="browse-category-name">${esc(name)}</span><span class="browse-category-count">${count} ${count===1?"book":"books"}</span></button>`;
  }).join("");
  const content=`<div class="toolbar"><div class="search-box"><i class="bi bi-search"></i><input class="form-control" id="browseSearch" placeholder="Search title, author, ISBN or category..."></div><select class="form-select" id="availabilityFilter" style="max-width:180px"><option value="">All availability</option><option value="available">Available</option><option value="unavailable">Unavailable</option></select><select class="form-select" id="browseCategoryFilter" style="max-width:220px"><option value="">All categories</option>${cats}</select></div><div class="browse-category-header"><h2 class="h5 mb-0">Browse by category</h2><button type="button" class="btn btn-outline-secondary btn-sm" id="clearBrowseCategory"><i class="bi bi-grid me-1"></i>All Categories</button></div><div class="browse-category-grid">${categoryCards}</div><div class="data-grid browse-grid" id="browseGrid">${cards}</div>`;
  return shell(title("Browse Books","Explore the university collection"),content,"browse");
}

function bookDetailPage(id) {
  const b=data.books.find(x=>x.id===id);
  if(!b) return shell(title("Book not found",""),`<div class="empty-state"><i class="bi bi-book"></i><p>This book is not available.</p><a href="#/browse" class="btn btn-navy">Back to browse</a></div>`,"browse");
  const content=`<a href="javascript:history.back()" class="text-secondary small mb-3 d-inline-block"><i class="bi bi-arrow-left me-1"></i>Back to catalogue</a><div class="row g-4"><div class="col-md-4"><img class="book-detail-cover" src="${esc(b.cover)}" alt="${esc(b.title)}" onerror="this.src='https://images.unsplash.com/photo-1543002588-bfa74002ed7e?auto=format&fit=crop&w=700&q=80'"></div><div class="col-md-8"><div class="panel h-100"><div class="panel-body p-4"><span class="category-chip mb-3">${esc(b.category)}</span><h1 class="brand-serif">${esc(b.title)}</h1><h2 class="h5 text-secondary mb-4">by ${esc(b.author)}</h2><p class="text-secondary">${esc(b.description)}</p><hr><div class="row g-3 mb-4"><div class="col-sm-6"><small class="text-secondary d-block">ISBN</small><strong>${esc(b.isbn)}</strong></div><div class="col-sm-6"><small class="text-secondary d-block">Publisher</small><strong>${esc(b.publisher)}</strong></div><div class="col-sm-6"><small class="text-secondary d-block">Published year</small><strong>${b.year}</strong></div><div class="col-sm-6"><small class="text-secondary d-block">Availability</small><strong>${b.available} of ${b.copies} copies</strong></div></div><span class="status-badge ${b.available?"status-active":"status-overdue"}">${b.available?"Available for issue":"Currently unavailable"}</span></div></div></div></div>`;
  return shell(title("Book Details","Catalogue record"),content,"browse");
}

function issuePage() {
  const studentOptions=data.students.map(s=>`<option value="${s.id}">${esc(s.name)} (${s.id})</option>`).join("");
  const bookOptions=data.books.filter(b=>b.available>0).map(b=>`<option value="${b.id}" data-copy="${b.available}">${esc(b.title)} — ${b.available} available</option>`).join("");
  const content=`<div class="row g-4"><div class="col-lg-7"><div class="panel"><div class="panel-header"><h2>Issue a book</h2></div><div class="panel-body"><form id="issueForm" novalidate><div class="mb-3"><label class="form-label">Student</label><select class="form-select" name="studentId" required><option value="">Select student</option>${studentOptions}</select></div><div class="mb-3"><label class="form-label">Book</label><select class="form-select" name="bookId" required><option value="">Select available book</option>${bookOptions}</select></div><div class="row"><div class="col-md-6 mb-3"><label class="form-label">Issue date</label><input class="form-control" type="date" name="issueDate" value="${todayStr()}" required></div><div class="col-md-6 mb-3"><label class="form-label">Due date</label><input class="form-control" type="date" name="dueDate" value="${toDateOffset(data.settings.loanDays)}" required></div></div><button class="btn btn-navy px-4" type="submit">Issue book</button></form></div></div></div><div class="col-lg-5"><div class="panel"><div class="panel-header"><h2>Active issues</h2></div><div class="table-responsive">${issueTable(data.issues.filter(i=>i.status!=="Returned").slice(-5).reverse())}</div></div></div></div>`;
  return shell(title("Issue Book","Create a new circulation record"),content,"issue");
}

function returnPage() {
  const active=data.issues.filter(i=>i.status==="Issued"||i.status==="Overdue");
  const options=active.map(i=>{const b=data.books.find(b=>b.id===i.bookId)||{title:"Unknown"};const s=data.students.find(s=>s.id===i.studentId)||{name:"Unknown"};return `<option value="${i.id}">${i.id} — ${esc(b.title)} (${esc(s.name)})</option>`}).join("");
  const content=`<div class="row g-4"><div class="col-lg-6"><div class="panel"><div class="panel-header"><h2>Process return</h2></div><div class="panel-body"><form id="returnForm" novalidate><div class="mb-3"><label class="form-label">Select active issue</label><select class="form-select" name="issueId" required><option value="">Choose issue record</option>${options}</select></div><div class="mb-3"><label class="form-label">Return date</label><input class="form-control" type="date" name="returnDate" value="${todayStr()}" required></div><button class="btn btn-navy px-4" type="submit">Confirm return</button></form></div></div></div><div class="col-lg-6"><div class="panel"><div class="panel-header"><h2>Pending returns</h2><span class="category-chip">${active.length}</span></div><div class="table-responsive">${issueTable(active.slice().reverse())}</div></div></div></div>`;
  return shell(title("Return Book","Complete a book return transaction"),content,"return");
}

function finesPage() {
  data.fines.forEach(f=>{const issue=data.issues.find(i=>i.id===f.issueId);if(issue&&issue.status==="Overdue"){const days=Math.max(0,daysBetween(issue.dueDate,todayStr()));f.amount=days*data.settings.finePerDay;}});
  const rows=data.fines.map(f=>{const issue=data.issues.find(i=>i.id===f.issueId)||{};const student=data.students.find(s=>s.id===f.studentId)||{name:"Unknown"};return `<tr><td>${esc(f.issueId)}</td><td>${esc(student.name)}</td><td>${esc(f.reason)}</td><td><strong>${money(f.amount)}</strong></td><td><span class="status-badge status-${f.status.toLowerCase()}">${esc(f.status)}</span></td><td>${f.status==="Unpaid"?`<button class="btn btn-sm btn-outline-dark" data-action="pay-fine" data-id="${f.id}">Mark paid</button>`:"—"}</td></tr>`}).join("");
  const content=`<div class="row g-3 mb-4"><div class="col-md-4">${statCard("bi-cash-stack",money(data.fines.reduce((s,f)=>s+f.amount,0)),"Total assessed")}</div><div class="col-md-4">${statCard("bi-check-circle",money(data.fines.filter(f=>f.status==="Paid").reduce((s,f)=>s+f.amount,0)),"Collected")}</div><div class="col-md-4">${statCard("bi-exclamation-circle",money(data.fines.filter(f=>f.status==="Unpaid").reduce((s,f)=>s+f.amount,0)),"Outstanding","#fff0ee")}</div></div><div class="panel table-responsive"><table class="table"><thead><tr><th>Issue ID</th><th>Student</th><th>Reason</th><th>Amount</th><th>Payment</th><th>Action</th></tr></thead><tbody>${rows}</tbody></table></div>`;
  return shell(title("Fine Management","Overdue penalties and payments"),content,"fines");
}

function reportsPage() {
  const totalTransactions=data.issues.length;
  const returned=data.issues.filter(i=>i.status==="Returned").length;
  const overdue=data.issues.filter(i=>i.status==="Overdue").length;
  const fineTotal=data.fines.reduce((s,f)=>s+f.amount,0);
  const categoryRows=data.categories.map(c=>{const count=data.issues.filter(i=>{const b=data.books.find(b=>b.id===i.bookId);return b?.category===c.name}).length;return `<tr><td>${esc(c.name)}</td><td>${count}</td><td>${data.books.filter(b=>b.category===c.name).length}</td></tr>`}).join("");
  const content=`<div class="row g-3 mb-4"><div class="col-md-3">${statCard("bi-arrow-left-right",totalTransactions,"Transactions")}</div><div class="col-md-3">${statCard("bi-check2-circle",returned,"Returns")}</div><div class="col-md-3">${statCard("bi-exclamation-triangle",overdue,"Current overdue","#fff0ee")}</div><div class="col-md-3">${statCard("bi-cash",money(fineTotal),"Fine assessment","#edf9f4")}</div></div><div class="row g-3 mb-4"><div class="col-lg-8"><div class="panel"><div class="panel-header"><h2>Circulation trend</h2><button class="btn btn-sm btn-outline-dark" data-action="print-report"><i class="bi bi-printer me-1"></i>Print</button></div><div class="panel-body chart-wrap"><canvas id="reportChart"></canvas></div></div></div><div class="col-lg-4"><div class="panel"><div class="panel-header"><h2>Category activity</h2></div><div class="table-responsive"><table class="table"><thead><tr><th>Category</th><th>Issued</th><th>Copies</th></tr></thead><tbody>${categoryRows}</tbody></table></div></div></div></div>`;
  return shell(title("Reports & Analytics","Circulation and collection intelligence"),content,"reports");
}

function notificationsPage() {
  const role=getSession()?.role;
  const list=data.notifications.filter(n=>n.audience==="all"||n.audience===role);
  const canCreate=role==="admin"||role==="librarian";
  const items=list.map(n=>`<div class="notification-item"><div class="notification-icon"><i class="bi ${n.unread?"bi-bell-fill":"bi-bell"}"></i></div><div class="flex-grow-1"><div class="d-flex justify-content-between"><strong class="small">${esc(n.title)}</strong><small class="text-secondary">${esc(n.time)}</small></div><p class="small text-secondary mb-0 mt-1">${esc(n.message)}</p></div></div>`).join("");
  const content=`<div class="d-flex justify-content-end mb-3">${canCreate?`<button class="btn btn-navy btn-sm" data-action="add-notification"><i class="bi bi-plus-lg me-1"></i>New announcement</button>`:""}</div><div class="panel"><div class="panel-header"><h2>Notification center</h2><button class="btn btn-sm btn-outline-dark" data-action="mark-read">Mark all as read</button></div><div class="panel-body">${items||`<div class="empty-state"><i class="bi bi-bell-slash"></i><p>No notifications yet</p></div>`}</div></div>`;
  return shell(title("Notifications","Announcements and library updates"),content,"notifications");
}

function activitiesPage() {
  const rows=data.activities.map(a=>`<tr><td><span class="activity-dot d-inline-block me-2"></span>${esc(a.text)}</td><td>${esc(a.time)}</td><td><span class="status-badge status-returned">Recorded</span></td></tr>`).join("");
  const content=`<div class="toolbar"><div class="search-box"><i class="bi bi-search"></i><input class="form-control" id="activitySearch" placeholder="Search activity log..."></div></div><div class="panel table-responsive"><table class="table" id="activityTable"><thead><tr><th>Activity</th><th>Time</th><th>Status</th></tr></thead><tbody>${rows}</tbody></table></div>`;
  return shell(title("Activity Logs","Administrative system history"),content,"activities");
}

function settingsPage() {
  const s=data.settings;
  const content=`<div class="row g-4"><div class="col-lg-8"><div class="panel"><div class="panel-header"><h2>Library settings</h2></div><div class="panel-body"><form id="settingsForm"><div class="row g-3"><div class="col-md-6"><label class="form-label">Library name</label><input class="form-control" name="name" value="${esc(s.name)}" required></div><div class="col-md-6"><label class="form-label">Contact email</label><input type="email" class="form-control" name="email" value="${esc(s.email)}" required></div><div class="col-md-6"><label class="form-label">Contact phone</label><input class="form-control" name="phone" value="${esc(s.phone)}" required></div><div class="col-md-3"><label class="form-label">Loan period (days)</label><input type="number" min="1" class="form-control" name="loanDays" value="${s.loanDays}" required></div><div class="col-md-3"><label class="form-label">Fine per day (₹)</label><input type="number" min="0" class="form-control" name="finePerDay" value="${s.finePerDay}" required></div><div class="col-12"><button class="btn btn-navy px-4" type="submit">Save settings</button></div></div></form></div></div></div><div class="col-lg-4"><div class="panel"><div class="panel-header"><h2>Demo data</h2></div><div class="panel-body"><p class="small text-secondary">Settings and records are stored in this browser only.</p><button class="btn btn-outline-danger btn-sm" data-action="reset-data">Reset all demo data</button></div></div></div></div>`;
  return shell(title("Library Settings","Policies and contact information"),content,"settings");
}

function issuedPage() {
  const s=getSession();
  const items=data.issues.filter(i=>i.studentId===s.id&&i.status!=="Returned");
  const content=`<div class="panel table-responsive"><div class="panel-header"><h2>Currently issued books</h2><span class="category-chip">${items.length} books</span></div>${issueTable(items)}</div>`;
  return shell(title("My Issued Books","Track due dates and active loans"),content,"issued");
}

function historyPage() {
  const s=getSession();
  const items=data.issues.filter(i=>i.studentId===s.id&&i.status==="Returned");
  const content=`<div class="panel table-responsive"><div class="panel-header"><h2>Reading history</h2><span class="category-chip">${items.length} returns</span></div>${issueTable(items)}</div>`;
  return shell(title("Reading History","Completed borrowing records"),content,"history");
}

function profilePage() {
  const session=getSession();
  if(session?.role==="librarian"){
    const l=data.librarians.find(x=>x.id==="L001")||{name:"Trushali Bambhaniya",email:"librarian@northbridge.edu",phone:"",shift:"Morning",status:"Active",avatar:librarianAvatar};
    const content=`<div class="row g-4"><div class="col-lg-4"><div class="panel text-center"><div class="panel-body py-5"><img src="${esc(librarianAvatar)}" class="profile-avatar-lg mb-3" alt="Trushali Bambhaniya" onerror="this.style.display='none'"><h2 class="h4">${esc(l.name)}</h2><p class="text-secondary">${esc(session.email||l.email)}</p><span class="status-badge status-active">${esc(l.status||"Active")}</span></div></div></div><div class="col-lg-8"><div class="panel"><div class="panel-header"><h2>Librarian profile</h2></div><div class="panel-body"><div class="row g-3"><div class="col-md-6"><small class="text-secondary d-block">Full name</small><strong>${esc(l.name)}</strong></div><div class="col-md-6"><small class="text-secondary d-block">Login email</small><strong>${esc(accounts.librarian.email)}</strong></div><div class="col-md-6"><small class="text-secondary d-block">Staff ID</small><strong>${esc(l.id||"L001")}</strong></div><div class="col-md-6"><small class="text-secondary d-block">Shift</small><strong>${esc(l.shift||"Morning")}</strong></div></div></div></div></div></div>`;
    return shell(title("My Profile","Librarian account information"),content,"profile");
  }
  const s=data.students.find(x=>x.id===session.id)||data.students[0];
  const content=`<div class="row g-4"><div class="col-lg-4"><div class="panel text-center"><div class="panel-body py-5"><img src="${esc(s.avatar||session.avatar)}" class="profile-avatar-lg mb-3" onerror="this.style.display='none'"><h2 class="h4">${esc(s.name)}</h2><p class="text-secondary">${esc(s.email)}</p><span class="status-badge status-active">${esc(s.status||"Active")}</span></div></div></div><div class="col-lg-8"><div class="panel"><div class="panel-header"><h2>Personal profile</h2></div><div class="panel-body"><form id="profileForm"><div class="row g-3"><div class="col-md-6"><label class="form-label">Full name</label><input class="form-control" name="name" value="${esc(s.name)}" required></div><div class="col-md-6"><label class="form-label">Email</label><input type="email" class="form-control" name="email" value="${esc(s.email)}" required></div><div class="col-md-6"><label class="form-label">Phone</label><input class="form-control" name="phone" value="${esc(s.phone)}"></div><div class="col-md-6"><label class="form-label">Department</label><input class="form-control" name="department" value="${esc(s.department)}"></div><div class="col-12"><button class="btn btn-navy px-4" type="submit">Save profile</button></div></div></form></div></div></div></div>`;
  return shell(title("My Profile","Personal information and account settings"),content,"profile");
}

const routePermissions = {
  dashboard:["admin","librarian","student"],
  books:["librarian"],
  categories:["admin","librarian","student"],
  students:["admin","librarian"],
  librarians:["admin"],
  issue:["librarian"],
  return:["librarian"],
  fines:["admin","librarian"],
  reports:["admin","librarian"],
  notifications:["admin","librarian","student"],
  activities:["admin"],
  settings:["admin"],
  browse:["student"],
  book:["student"],
  issued:["student"],
  history:["student"],
  profile:["librarian","student"]
};

function normalizeIssues() {
  data.issues.forEach(i=>{
    if(i.status==="Issued"&&i.dueDate<todayStr()) i.status="Overdue";
  });
  save(data);
}

function render() {
  normalizeIssues();
  const hash=location.hash||"#/landing";
  const parts=hash.replace(/^#\/?/,"").split("/");
  const route=parts[0]||"landing";
  const app=document.getElementById("app");

  if(["landing","login","about","rules","contact"].includes(route)){ app.innerHTML=route==="landing"?landingPage():route==="login"?loginPage():route==="about"?aboutPage():route==="rules"?rulesPage():contactPage(); afterRender(); return; }
  const session=getSession();
  if(route==="book"&&!session){
    app.innerHTML=publicBookDetailPage(parts[1]);
    afterRender();
    return;
  }
  if(!session){ location.hash="#/login"; return; }
  const allowed=routePermissions[route];
  if(allowed&&!allowed.includes(session.role)){toast("You do not have permission to access this page.","error");location.hash="#/dashboard";return;}

  let html="";
  switch(route){
    case "dashboard": html=session.role==="admin"?adminDashboard():session.role==="librarian"?librarianDashboard():studentDashboard(); break;
    case "categories": html=categoriesPage(); break;
    case "students": html=studentsPage(); break;
    case "librarians": html=librariansPage(); break;
    case "books": html=booksPage(); break;
    case "browse": html=browsePage(); break;
    case "book": html=bookDetailPage(parts[1]); break;
    case "issue": html=issuePage(); break;
    case "return": html=returnPage(); break;
    case "fines": html=finesPage(); break;
    case "reports": html=reportsPage(); break;
    case "notifications": html=notificationsPage(); break;
    case "activities": html=activitiesPage(); break;
    case "settings": html=settingsPage(); break;
    case "issued": html=issuedPage(); break;
    case "history": html=historyPage(); break;
    case "profile": html=profilePage(); break;
    default: html=shell(title("Page not found",""),`<div class="empty-state"><i class="bi bi-signpost-split"></i><p>The requested page does not exist.</p><a href="#/dashboard" class="btn btn-navy">Return to dashboard</a></div>`,"dashboard");
  }
  app.innerHTML=html;
  afterRender();
}

window.addEventListener("hashchange",render);

function afterRender() {
  window.scrollTo({top:0,behavior:"instant"});
  document.getElementById("sidebar")?.classList.remove("open");
  const nav=document.getElementById("publicNav");
  if(nav){
    const onScroll=()=>nav.classList.toggle("scrolled",window.scrollY>20);
    window.addEventListener("scroll",onScroll,{once:false});
  }
  initCharts();
  initSearches();
  initForms();
}

function toast(message,type="success") {
  const stack=document.getElementById("toast-stack");
  const el=document.createElement("div");
  el.className=`toast-custom ${type==="error"?"error":""} bg-white p-3 mb-2`;
  el.innerHTML=`<div class="d-flex align-items-center gap-2"><i class="bi ${type==="error"?"bi-exclamation-circle text-danger":"bi-check-circle text-success"} fs-5"></i><span class="small fw-semibold">${esc(message)}</span></div>`;
  stack.appendChild(el); setTimeout(()=>el.remove(),3500);
}

function addActivity(text) {
  data.activities.unshift({text,time:"Just now"});
  data.activities=data.activities.slice(0,20);
  save(data);
}

function openModal(title,body,onSubmit) {
  let el=document.getElementById("appModal");
  if(!el){el=document.createElement("div");el.id="appModal";document.body.appendChild(el);}
  el.innerHTML=`<div class="modal fade" tabindex="-1"><div class="modal-dialog modal-lg modal-dialog-centered"><div class="modal-content"><div class="modal-header"><h2 class="modal-title h5">${esc(title)}</h2><button type="button" class="btn-close" data-bs-dismiss="modal"></button></div><div class="modal-body">${body}</div></div></div></div>`;
  const modalEl=el.querySelector(".modal");
  const modal=bootstrap.Modal.getOrCreateInstance(modalEl);
  modal.show();
  modalEl.addEventListener("hidden.bs.modal",()=>{el.innerHTML="";});
  const form=modalEl.querySelector("form");
  if(form) form.addEventListener("submit",e=>{e.preventDefault();if(!form.checkValidity()){form.classList.add("was-validated");return;}onSubmit(new FormData(form),modal);});
}

function initForms() {
  const login=document.getElementById("loginForm");
  if(login&&!login.dataset.bound){
    login.dataset.bound="true";
    login.addEventListener("submit",e=>{
      e.preventDefault();
      if(!login.checkValidity()){login.classList.add("was-validated");return;}
      const fd=new FormData(login);
      const email=String(fd.get("email")||"").trim().toLowerCase();
      const password=String(fd.get("password")||"");
      const account=Object.values(accounts).find(a=>a.email.toLowerCase()===email&&a.password===password);
      if(!account){document.getElementById("loginError").textContent="Invalid email or password. Use one of the demo accounts below.";return;}
      const remember=document.getElementById("remember")?.checked===true;
      setSession(account,remember);toast(`Welcome, ${account.name}`);
      const pending=localStorage.getItem("northbridge_pending_search");
      if(pending&&account.role==="student"){localStorage.removeItem("northbridge_pending_search");location.hash="#/browse";setTimeout(()=>{const input=document.getElementById("browseSearch");if(input){input.value=pending;input.dispatchEvent(new Event("input"));}},30);}
      else location.hash="#/dashboard";
    });
  }
  const issue=document.getElementById("issueForm");
  if(issue&&!issue.dataset.bound){
    issue.dataset.bound="true";
    issue.addEventListener("submit",e=>{
      e.preventDefault();
      if(!issue.checkValidity()){issue.classList.add("was-validated");return;}
      const fd=new FormData(issue);
      const book=data.books.find(b=>b.id===fd.get("bookId"));
      const student=data.students.find(s=>s.id===fd.get("studentId"));
      if(!book||book.available<1){toast("This book is currently unavailable.","error");return;}
      if(fd.get("dueDate")<=fd.get("issueDate")){toast("Due date must be after the issue date.","error");return;}
      const id=`I${1000+data.issues.length+1}`;
      data.issues.push({id,studentId:student.id,bookId:book.id,issueDate:fd.get("issueDate"),dueDate:fd.get("dueDate"),returnDate:null,status:"Issued"});
      book.available--;
      save(data);addActivity(`${student.name} issued ${book.title}`);toast("Book issued successfully");
      render();
    });
  }
  const ret=document.getElementById("returnForm");
  if(ret&&!ret.dataset.bound){
    ret.dataset.bound="true";
    ret.addEventListener("submit",e=>{
      e.preventDefault();
      if(!ret.checkValidity()){ret.classList.add("was-validated");return;}
      const fd=new FormData(ret);
      const issue=data.issues.find(i=>i.id===fd.get("issueId"));
      if(!issue||issue.status==="Returned"){toast("Invalid issue record.","error");return;}
      const book=data.books.find(b=>b.id===issue.bookId);
      const student=data.students.find(s=>s.id===issue.studentId);
      issue.returnDate=fd.get("returnDate");issue.status="Returned";book.available=Math.min(book.copies,book.available+1);
      const overdue=Math.max(0,daysBetween(issue.dueDate,issue.returnDate));
      let fine=data.fines.find(f=>f.issueId===issue.id);
      if(overdue){if(!fine)fine={id:`F${String(data.fines.length+1).padStart(3,"0")}`,issueId:issue.id,studentId:issue.studentId,amount:0,status:"Unpaid",reason:"Overdue return"};fine.amount=overdue*data.settings.finePerDay;fine.status="Unpaid";if(!data.fines.includes(fine))data.fines.push(fine);}
      save(data);addActivity(`${student?.name||"Student"} returned ${book?.title||"a book"}`);toast(overdue?`Book returned. Fine: ${money(overdue*data.settings.finePerDay)}`:"Book returned successfully",overdue?"error":"success");render();
    });
  }
  const settings=document.getElementById("settingsForm");
  if(settings&&!settings.dataset.bound){settings.dataset.bound="true";settings.addEventListener("submit",e=>{e.preventDefault();if(!settings.checkValidity()){settings.classList.add("was-validated");return;}const fd=new FormData(settings);data.settings={name:fd.get("name"),email:fd.get("email"),phone:fd.get("phone"),loanDays:Number(fd.get("loanDays")),finePerDay:Number(fd.get("finePerDay"))};save(data);addActivity("Library settings updated");toast("Settings saved successfully");});}
  const profile=document.getElementById("profileForm");
  if(profile&&!profile.dataset.bound){profile.dataset.bound="true";profile.addEventListener("submit",e=>{e.preventDefault();if(!profile.checkValidity()){profile.classList.add("was-validated");return;}const fd=new FormData(profile);const session=getSession();const student=data.students.find(s=>s.id===session.id);if(student){student.name=fd.get("name");student.email=fd.get("email");student.phone=fd.get("phone");student.department=fd.get("department");session.name=student.name;session.avatar=student.avatar;setSession(session);}save(data);addActivity(`${session.name} updated their profile`);toast("Profile updated successfully");render();});}
}

function initSearches() {
  bindTableSearch("categorySearch","categoryTable");
  bindTableSearch("studentSearch","studentTable");
  bindTableSearch("librarianSearch","librarianTable");
  bindTableSearch("activitySearch","activityTable");
  const bs=document.getElementById("bookSearch");
  const bf=document.getElementById("categoryFilter");
  if(bs||bf){
    const filter=()=>{
      const q=(bs?.value||"").toLowerCase(), cat=bf?.value||"";
      document.querySelectorAll("#bookGrid .data-book-card").forEach(card=>{
        const text=card.textContent.toLowerCase();
        card.hidden=!text.includes(q)&&q!=="";
        if(cat) card.hidden=card.hidden||!card.textContent.includes(cat);
      });
    };
    bs?.addEventListener("input",filter);bf?.addEventListener("change",filter);
  }
  const browse=document.getElementById("browseSearch");
  const av=document.getElementById("availabilityFilter");
  const bc=document.getElementById("browseCategoryFilter");
  if(browse||av||bc){
    const filter=()=>{
      const q=(browse?.value||"").toLowerCase(), availability=av?.value||"", category=bc?.value||"";
      document.querySelectorAll("#browseGrid .data-book-card").forEach(card=>{
        const text=card.textContent.toLowerCase();
        let show=!q||text.includes(q);
        if(availability==="available") show=show&&text.includes("available");
        if(availability==="unavailable") show=show&&text.includes("unavailable");
        if(category) show=show&&card.dataset.category===category;
        card.hidden=!show;
      });
    };
    browse?.addEventListener("input",filter);av?.addEventListener("change",filter);bc?.addEventListener("change",filter);
    bc?.addEventListener("change",()=>{
      document.querySelectorAll("[data-browse-category]").forEach(card=>{
        card.classList.toggle("active",card.dataset.browseCategory===bc.value);
      });
    });
    document.querySelectorAll("[data-browse-category]").forEach(button=>{
      button.addEventListener("click",()=>{
        const category=button.dataset.browseCategory;
        if(bc) bc.value=category;
        document.querySelectorAll("[data-browse-category]").forEach(card=>card.classList.remove("active"));
        button.classList.add("active");
        filter();
        document.getElementById("browseGrid")?.scrollIntoView({behavior:"smooth",block:"start"});
      });
    });
    document.getElementById("clearBrowseCategory")?.addEventListener("click",()=>{
      if(bc) bc.value="";
      document.querySelectorAll("[data-browse-category]").forEach(card=>card.classList.remove("active"));
      filter();
    });
  }
  const global=document.getElementById("globalSearch");
  global?.addEventListener("keydown",e=>{
    if(e.key==="Enter"){
      const q=e.target.value.trim();if(!q)return;
      const role=getSession()?.role;
      if(role==="student"){location.hash="#/browse";setTimeout(()=>{const input=document.getElementById("browseSearch");if(input){input.value=q;input.dispatchEvent(new Event("input"));}},30);}
      else location.hash="#/books";
    }
  });
}
function bindTableSearch(inputId,tableId){
  const input=document.getElementById(inputId),table=document.getElementById(tableId);
  if(input&&table)input.addEventListener("input",()=>{const q=input.value.toLowerCase();table.querySelectorAll("tbody tr").forEach(tr=>tr.hidden=!tr.textContent.toLowerCase().includes(q));});
}

document.addEventListener("click",e=>{
  const demoButton=e.target.closest("[data-demo]");
  if(demoButton){
    const account=accounts[demoButton.dataset.demo];
    const form=document.getElementById("loginForm");
    if(account&&form){
      form.email.value=account.email;
      form.password.value=account.password;
      form.classList.remove("was-validated");
      const loginError=document.getElementById("loginError");
      if(loginError) loginError.textContent="";
      form.email.focus();
    }
    return;
  }
  const el=e.target.closest("[data-action]");
  if(!el){
    if(e.target.closest(".sidebar-link")) document.getElementById("sidebar")?.classList.remove("open");
    else if(document.getElementById("sidebar")?.classList.contains("open")&&
      !e.target.closest("#sidebar")&&!e.target.closest(".mobile-menu")){
      document.getElementById("sidebar").classList.remove("open");
    }
    return;
  }
  const action=el.dataset.action, id=el.dataset.id;
  const role=getSession()?.role;
  if(action==="logout"){logout();return;}
  if(action==="menu"){document.getElementById("sidebar")?.classList.toggle("open");return;}
  if(action==="toggle-password"){const input=el.parentElement.querySelector("input");input.type=input.type==="password"?"text":"password";el.innerHTML=`<i class="bi ${input.type==="password"?"bi-eye":"bi-eye-slash"}"></i>`;return;}
  if(el.dataset.demo){const d=el.dataset.demo;const account=accounts[d];const form=document.getElementById("loginForm");if(form){form.email.value=account.email;form.password.value=account.password;}return;}
  if(action==="mark-read"){data.notifications.filter(n=>n.audience==="all"||n.audience===role).forEach(n=>n.unread=false);save(data);toast("Notifications marked as read");render();return;}
  if(action==="pay-fine"){const fine=data.fines.find(f=>f.id===id);if(!fine||fine.status==="Paid")return;fine.status="Paid";save(data);addActivity(`Fine payment recorded for ${fine.issueId}`);toast("Fine marked as paid");render();return;}
  if(action==="print-report"){window.print();return;}
  if(action==="reset-data"){if(confirm("Reset all library demo data to its original state?")){localStorage.removeItem(STORE_KEY);data=seed();save(data);toast("Demo data reset");render();}return;}

  if(action==="add-category") return categoryForm();
  if(action==="edit-category") return categoryForm(data.categories.find(c=>c.id===id));
  if(action==="delete-category"){if(role==="student")return toast("You do not have permission to delete categories.","error");const c=data.categories.find(x=>x.id===id);if(!c)return;if(data.books.some(b=>b.category===c.name))return toast("Categories with books cannot be deleted.","error");if(confirm(`Delete category "${c.name}"?`)){data.categories=data.categories.filter(x=>x.id!==id);save(data);addActivity(`Category "${c.name}" deleted`);toast("Category deleted");render();}return;}

  if(action==="add-student") return studentForm();
  if(action==="edit-student") return studentForm(data.students.find(s=>s.id===id));
  if(action==="delete-student"){const s=data.students.find(x=>x.id===id);if(!s)return;if(confirm(`Delete student "${s.name}"?`)){data.students=data.students.filter(x=>x.id!==id);save(data);addActivity(`Student ${s.name} removed`);toast("Student deleted");render();}return;}

  if(action==="add-librarian") return librarianForm();
  if(action==="edit-librarian") return librarianForm(data.librarians.find(l=>l.id===id));
  if(action==="delete-librarian"){const l=data.librarians.find(x=>x.id===id);if(!l)return;if(confirm(`Delete librarian "${l.name}"?`)){data.librarians=data.librarians.filter(x=>x.id!==id);save(data);addActivity(`Librarian ${l.name} removed`);toast("Librarian deleted");render();}return;}

  if(action==="add-book") return bookForm();
  if(action==="edit-book") return bookForm(data.books.find(b=>b.id===id));
  if(action==="delete-book"){const b=data.books.find(x=>x.id===id);if(!b)return;if(data.issues.some(i=>i.bookId===b.id&&i.status!=="Returned"))return toast("This book has active issues and cannot be deleted.","error");if(confirm(`Delete "${b.title}"?`)){data.books=data.books.filter(x=>x.id!==id);save(data);addActivity(`Book "${b.title}" removed`);toast("Book deleted");render();}return;}

  if(action==="add-notification"){
    const audiences=role==="admin"?`<option value="all">All users</option><option value="admin">Admins</option><option value="librarian">Librarians</option><option value="student">Students</option>`:`<option value="librarian">Librarians</option><option value="all">All users</option>`;
    openModal("New announcement",`<form><div class="mb-3"><label class="form-label">Title</label><input class="form-control" name="title" required></div><div class="mb-3"><label class="form-label">Audience</label><select class="form-select" name="audience">${audiences}</select></div><div class="mb-3"><label class="form-label">Message</label><textarea class="form-control" name="message" rows="4" required></textarea></div><div class="text-end"><button class="btn btn-navy">Publish announcement</button></div></form>`,(fd,modal)=>{data.notifications.unshift({id:`N${Date.now()}`,audience:fd.get("audience"),title:fd.get("title"),message:fd.get("message"),time:"Just now",unread:true});save(data);addActivity(`Announcement published: ${fd.get("title")}`);modal.hide();toast("Announcement published");render();});
  }
});

document.addEventListener("keydown",e=>{
  if(e.key==="Escape"){
    document.getElementById("sidebar")?.classList.remove("open");
  }
});

document.addEventListener("submit",e=>{
  const form=e.target;
  if(form.matches('[data-action="landing-search"]')){
    e.preventDefault();const q=new FormData(form).get("query");if(q){localStorage.setItem("northbridge_pending_search",q);location.hash="#/login";setTimeout(()=>toast("Sign in to search the catalogue"),100);}
  }
  if(form.matches('[data-action="contact"]')){
    e.preventDefault();
    if(!form.checkValidity()){form.classList.add("was-validated");return;}
    const fd=new FormData(form);
    const name=String(fd.get("name")||"").trim();
    const email=String(fd.get("email")||"").trim();
    const message=String(fd.get("message")||"").trim();
    if(name.length<2||!/^\S+@\S+\.\S+$/.test(email)||message.length<10){
      form.classList.add("was-validated");
      toast("Please complete all fields with valid information.","error");
      return;
    }
    try{
      const existing=JSON.parse(localStorage.getItem(CONTACT_KEY)||"[]");
      const messages=Array.isArray(existing)?existing:[];
      messages.unshift({id:`C${Date.now()}`,name,email,message,createdAt:new Date().toISOString()});
      localStorage.setItem(CONTACT_KEY,JSON.stringify(messages));
      form.reset();
      form.classList.remove("was-validated");
      toast("Demo message saved in this browser successfully.");
    }catch(error){
      toast("The demo message could not be saved in this browser.","error");
    }
  }
});

function categoryForm(existing=null){
  const role=getSession()?.role;if(role==="student")return toast("You do not have permission to manage categories.","error");
  openModal(existing?"Edit category":"Add category",`<form><div class="row g-3"><div class="col-12"><label class="form-label">Category name</label><input class="form-control" name="name" value="${esc(existing?.name||"")}" required></div><div class="col-12"><label class="form-label">Description</label><textarea class="form-control" name="description" rows="3" required>${esc(existing?.description||"")}</textarea></div><div class="col-12 text-end"><button class="btn btn-navy px-4">${existing?"Save changes":"Add category"}</button></div></div></form>`,(fd,modal)=>{
    const name=fd.get("name").trim();if(!name)return;
    if(data.categories.some(c=>c.id!==existing?.id&&c.name.toLowerCase()===name.toLowerCase()))return toast("A category with this name already exists.","error");
    if(existing){const old=existing.name;existing.name=name;existing.description=fd.get("description");data.books.filter(b=>b.category===old).forEach(b=>b.category=name);}
    else data.categories.push({id:`C${Date.now()}`,name,description:fd.get("description")});
    save(data);addActivity(`Category "${name}" ${existing?"updated":"added"}`);modal.hide();toast(existing?"Category updated":"Category added");render();
  });
}

function studentForm(existing=null){
  const role=getSession()?.role;if(!["admin","librarian"].includes(role))return toast("You do not have permission to manage students.","error");
  openModal(existing?"Edit student":"Add student",`<form><div class="row g-3"><div class="col-md-6"><label class="form-label">Full name</label><input class="form-control" name="name" value="${esc(existing?.name||"")}" required></div><div class="col-md-6"><label class="form-label">Email</label><input type="email" class="form-control" name="email" value="${esc(existing?.email||"")}" required></div><div class="col-md-6"><label class="form-label">Phone</label><input class="form-control" name="phone" value="${esc(existing?.phone||"")}" required></div><div class="col-md-3"><label class="form-label">Department</label><input class="form-control" name="department" value="${esc(existing?.department||"")}" required></div><div class="col-md-3"><label class="form-label">Year</label><select class="form-select" name="year">${[1,2,3,4].map(y=>`<option value="${y}" ${existing?.year==y?"selected":""}>${y}</option>`).join("")}</select></div><div class="col-md-6"><label class="form-label">Status</label><select class="form-select" name="status"><option ${existing?.status==="Active"||!existing?"selected":""}>Active</option><option ${existing?.status==="Inactive"?"selected":""}>Inactive</option></select></div><div class="col-12 text-end"><button class="btn btn-navy px-4">${existing?"Save changes":"Add student"}</button></div></div></form>`,(fd,modal)=>{
    const fields={name:fd.get("name").trim(),email:fd.get("email").trim(),phone:fd.get("phone").trim(),department:fd.get("department").trim(),year:Number(fd.get("year")),status:fd.get("status")};
    if(existing){Object.assign(existing,fields);}
    else{data.students.push({id:`S${String(data.students.length+1).padStart(3,"0")}`,...fields,avatar:`https://i.pravatar.cc/150?img=${10+(data.students.length%40)}`});}
    save(data);addActivity(`Student ${fields.name} ${existing?"updated":"registered"}`);modal.hide();toast(existing?"Student updated":"Student added");render();
  });
}

function librarianForm(existing=null){
  if(getSession()?.role!=="admin")return toast("Only administrators can manage librarians.","error");
  openModal(existing?"Edit librarian":"Add librarian",`<form><div class="row g-3"><div class="col-md-6"><label class="form-label">Full name</label><input class="form-control" name="name" value="${esc(existing?.name||"")}" required></div><div class="col-md-6"><label class="form-label">Email</label><input type="email" class="form-control" name="email" value="${esc(existing?.email||"")}" required></div><div class="col-md-6"><label class="form-label">Phone</label><input class="form-control" name="phone" value="${esc(existing?.phone||"")}" required></div><div class="col-md-3"><label class="form-label">Shift</label><select class="form-select" name="shift">${["Morning","Afternoon","Evening"].map(s=>`<option ${existing?.shift===s?"selected":""}>${s}</option>`).join("")}</select></div><div class="col-md-3"><label class="form-label">Status</label><select class="form-select" name="status"><option>Active</option><option ${existing?.status==="Inactive"?"selected":""}>Inactive</option></select></div><div class="col-12 text-end"><button class="btn btn-navy px-4">${existing?"Save changes":"Add librarian"}</button></div></div></form>`,(fd,modal)=>{
    const fields={name:fd.get("name").trim(),email:fd.get("email").trim(),phone:fd.get("phone").trim(),shift:fd.get("shift"),status:fd.get("status")};
    if(existing){Object.assign(existing,fields);}
    else{data.librarians.push({id:`L${String(data.librarians.length+1).padStart(3,"0")}`,...fields,avatar:`https://i.pravatar.cc/150?img=${40+(data.librarians.length%10)}`});}
    save(data);addActivity(`Librarian ${fields.name} ${existing?"updated":"added"}`);modal.hide();toast(existing?"Librarian updated":"Librarian added");render();
  });
}

function bookForm(existing=null){
  if(getSession()?.role!=="librarian")return toast("Only librarians can manage books.","error");
  const options=data.categories.map(c=>`<option ${existing?.category===c.name?"selected":""}>${esc(c.name)}</option>`).join("");
  openModal(existing?"Edit book":"Add book",`<form><div class="row g-3"><div class="col-md-8"><label class="form-label">Title</label><input class="form-control" name="title" value="${esc(existing?.title||"")}" required></div><div class="col-md-4"><label class="form-label">ISBN</label><input class="form-control" name="isbn" value="${esc(existing?.isbn||"")}" required></div><div class="col-md-6"><label class="form-label">Author</label><input class="form-control" name="author" value="${esc(existing?.author||"")}" required></div><div class="col-md-6"><label class="form-label">Category</label><select class="form-select" name="category" required><option value="">Select category</option>${options}</select></div><div class="col-md-4"><label class="form-label">Publisher</label><input class="form-control" name="publisher" value="${esc(existing?.publisher||"")}" required></div><div class="col-md-3"><label class="form-label">Published year</label><input type="number" min="1900" max="2030" class="form-control" name="year" value="${existing?.year||new Date().getFullYear()}" required></div><div class="col-md-2"><label class="form-label">Copies</label><input type="number" min="1" class="form-control" name="copies" value="${existing?.copies||1}" required></div><div class="col-md-3"><label class="form-label">Cover image URL</label><input class="form-control" name="cover" value="${esc(existing?.cover||"")}" placeholder="Optional"></div><div class="col-12"><label class="form-label">Description</label><textarea class="form-control" name="description" rows="3">${esc(existing?.description||"")}</textarea></div><div class="col-12 text-end"><button class="btn btn-navy px-4">${existing?"Save changes":"Add book"}</button></div></div></form>`,(fd,modal)=>{
    const fields={title:fd.get("title").trim(),isbn:fd.get("isbn").trim(),author:fd.get("author").trim(),category:fd.get("category"),publisher:fd.get("publisher").trim(),year:Number(fd.get("year")),copies:Number(fd.get("copies")),description:fd.get("description").trim()};
    if(!fields.category)return toast("Please select a category.","error");
    if(existing){
      const delta=fields.copies-existing.copies;existing.available=Math.max(0,Math.min(fields.copies,existing.available+delta));Object.assign(existing,fields);if(fd.get("cover"))existing.cover=fd.get("cover");
    }else{
      const id=`B${String(data.books.length+1).padStart(3,"0")}`;data.books.push({id,...fields,available:fields.copies,cover:fd.get("cover")||`${coverBase}${fields.isbn}-L.jpg`});
    }
    save(data);addActivity(`Book "${fields.title}" ${existing?"updated":"added"}`);modal.hide();toast(existing?"Book updated":"Book added");render();
  });
}

function initCharts() {
  if(typeof Chart==="undefined")return;
  const palette=["#102a50","#c9a45c","#5b82b5","#78a99c","#b76e79","#8c7aa7","#dda15e","#5f9ea0"];
  const circulation=document.getElementById("adminCirculation");
  if(circulation){Chart.getChart(circulation)?.destroy();new Chart(circulation,{type:"line",data:{labels:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],datasets:[{label:"Books issued",data:[62,78,71,94,88,112,105,126,118,138,129,145],borderColor:"#c9a45c",backgroundColor:"rgba(201,164,92,.12)",fill:true,tension:.38,borderWidth:2,pointRadius:3}]},options:{maintainAspectRatio:false,plugins:{legend:{display:false}},scales:{x:{grid:{display:false}},y:{grid:{color:"#edf0f4"},beginAtZero:true}}}});}
  const cat=document.getElementById("adminCategories");
  if(cat){Chart.getChart(cat)?.destroy();new Chart(cat,{type:"doughnut",data:{labels:data.categories.map(c=>c.name),datasets:[{data:data.categories.map(c=>data.books.filter(b=>b.category===c.name).length),backgroundColor:palette,borderWidth:3,borderColor:"#fff"}]},options:{maintainAspectRatio:false,cutout:"68%",plugins:{legend:{position:"bottom",labels:{boxWidth:10,font:{size:10}}}}}});}
  const libCat=document.getElementById("librarianCategories");
  if(libCat){Chart.getChart(libCat)?.destroy();new Chart(libCat,{type:"bar",data:{labels:data.categories.map(c=>c.name.length>12?c.name.slice(0,12)+"…":c.name),datasets:[{data:data.categories.map(c=>data.books.filter(b=>b.category===c.name).length),backgroundColor:"#102a50",borderRadius:5}]},options:{maintainAspectRatio:false,plugins:{legend:{display:false}},scales:{y:{beginAtZero:true,grid:{color:"#edf0f4"}},x:{grid:{display:false}}}}});}
  const report=document.getElementById("reportChart");
  if(report){Chart.getChart(report)?.destroy();new Chart(report,{type:"bar",data:{labels:["May","Jun","Jul","Aug","Sep","Oct"],datasets:[{label:"Issued",data:[48,62,58,74,69,82],backgroundColor:"#102a50",borderRadius:5},{label:"Returned",data:[42,55,51,68,63,76],backgroundColor:"#c9a45c",borderRadius:5}]},options:{maintainAspectRatio:false,plugins:{legend:{position:"bottom"}},scales:{y:{beginAtZero:true,grid:{color:"#edf0f4"}},x:{grid:{display:false}}}}});}
}

render();
