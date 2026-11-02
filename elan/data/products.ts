const u=(i:string,w=1200)=>`https://images.unsplash.com/${i}?auto=format&fit=crop&w=${w}&q=80`;
// Image IDs are unverified. Swap any that fail in this file.
export const IMG={hero:u('photo-1535632066927-ab7c9ab60908',2000),look:u('photo-1611591437281-460bfbe1220a',1600),video:u('photo-1515562141207-7a88fb7ce338',2000),
 vibes:['photo-1602173574767-37ac01994b2a','photo-1611652022419-a9419f74343d','photo-1599643478518-a784e5dc4c8f','photo-1617038220319-276d3cfab638','photo-1573408301185-9146fe634ad0'].map(i=>u(i,900)),
 ugc:['photo-1535632066927-ab7c9ab60908','photo-1611591437281-460bfbe1220a','photo-1603561591411-07134e71a2a9','photo-1601121141461-9d6647bca1ed','photo-1543294001-f7cd5d7fb516','photo-1610694955371-d4a3e0ce4b52'].map(i=>u(i,800)),
 crew:['photo-1573408301185-9146fe634ad0','photo-1611591437281-460bfbe1220a','photo-1535632066927-ab7c9ab60908','photo-1599643477877-530eb83abc8e','photo-1617038220319-276d3cfab638'].map(i=>u(i,800))};
export const FREE_SHIP=2000;
export type Product={slug:string;name:string;price:number;cat:string;material:string;vibe:string;collection:string;rating:number;stock:boolean;isNew:boolean;img:string;gallery:string[];desc:string};
const P=(name:string,price:number,cat:string,material:string,vibe:string,collection:string,rating:number,isNew:boolean,ids:string[],desc:string,stock=true):Product=>({slug:name.toLowerCase().replace(/[^a-z]+/g,'-'),name,price,cat,material,vibe,collection,rating,stock,isNew,img:u(ids[0]),gallery:ids.map(i=>u(i,1400)),desc});
export const products:Product[]=[
P('Signature Chain',4999,'Chains','925 Silver','Bold','Signature',4.9,true,['photo-1599643477877-530eb83abc8e','photo-1611591437281-460bfbe1220a'],'A weighty curb chain that does all the talking.'),
P('Flame Ring',2799,'Rings','925 Silver','Bold','Signature',4.8,true,['photo-1605100804763-247f67b3557e','photo-1603561591411-07134e71a2a9'],'A sculptural everyday ring designed to catch light from every angle.'),
P('Chrome Hoops',2499,'Earrings','925 Silver','Minimal','Chrome',4.7,true,['photo-1535632066927-ab7c9ab60908','photo-1617038220319-276d3cfab638'],'Mirror-finish hoops, light enough to forget, loud enough to notice.'),
P('After Dark Necklace',3999,'Chains','Gold Plated','After Dark','After Dark',4.9,true,['photo-1599643478518-a784e5dc4c8f','photo-1543294001-f7cd5d7fb516'],'A layered choker built for when the night starts.'),
P('Bold Signet',3499,'Rings','Gold Plated','Bold','Signature',4.6,true,['photo-1603561591411-07134e71a2a9','photo-1605100804763-247f67b3557e'],'A chunky signet with a clean, flat face. Engrave it or leave it blank.'),
P('Mini Cross Pendant',2199,'Pendants','925 Silver','Romantic','Chrome',4.5,true,['photo-1602173574767-37ac01994b2a','photo-1599643478518-a784e5dc4c8f'],'Small, sharp and easy to layer.'),
P('Thin Stack Band',1299,'Rings','925 Silver','Minimal','Everyday',4.8,false,['photo-1601121141461-9d6647bca1ed','photo-1605100804763-247f67b3557e'],'Stack three, or wear it solo.'),
P('Pearl Drop Studs',1799,'Earrings','Gold Plated','Romantic','Everyday',4.6,false,['photo-1610694955371-d4a3e0ce4b52','photo-1535632066927-ab7c9ab60908'],'Soft but never boring.'),
P('Link Bracelet',2999,'Bracelets','925 Silver','Everyday','Everyday',4.7,false,['photo-1611652022419-a9419f74343d','photo-1515562141207-7a88fb7ce338'],'Your daily uniform, one click on the clasp.'),
P('Midnight Cuff',3299,'Bracelets','Gold Plated','After Dark','After Dark',4.4,false,['photo-1617038220319-276d3cfab638','photo-1611652022419-a9419f74343d'],'An open cuff with a dark polish.',false),
P('Paperclip Chain',2599,'Chains','925 Silver','Minimal','Everyday',4.8,false,['photo-1543294001-f7cd5d7fb516','photo-1599643477877-530eb83abc8e'],'Clean. Quiet. Effortless.'),
P('Everyday Set',5499,'Sets','925 Silver','Everyday','Everyday',4.9,false,['photo-1515562141207-7a88fb7ce338','photo-1573408301185-9146fe634ad0'],'A ring, hoops and chain, pre-stacked.')];
export const cats=['Rings','Chains','Earrings','Bracelets','Pendants','Sets'];
export const vibes=[['Minimal','Clean. Quiet. Effortless.'],['Bold','Make them look twice.'],['Romantic','Soft but never boring.'],['After Dark','For when the night starts.'],['Everyday','Your daily uniform.']];
export const journal=[['5 Ways to Stack Your Rings','Stacking'],['How to Layer Chains Without Overthinking It','Styling'],['Jewellery Trends We\'re Taking Into 2027','Trends'],['From Day Plans to After Dark','Style'],['Your Jewellery, Your Rules','Culture']];
export const social=[['@riya.jpg'],['@arjuncreates'],['@mehakstyle'],['@ishaan.jpeg'],['@riya.jpg'],['@mehakstyle']];
export const crew=['Music','Fashion','Art','Creative','Street'];
export const inr=(n:number)=>'₹'+n.toLocaleString('en-IN');
export const get=(s:string)=>products.find(p=>p.slug===s);
