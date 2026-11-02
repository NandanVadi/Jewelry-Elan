const u=(id:string,w=1400)=>`https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;
export const IMG={
 hero:u('photo-1515562141207-7a88fb7ce338',2000),celestia:u('photo-1605100804763-247f67b3557e',2000),
 bridal:u('photo-1583939003579-730e3918a45a',2000),story:u('photo-1573408301185-9146fe634ad0',1400),
 craft:[u('photo-1617038220319-276d3cfab638'),u('photo-1611652022419-a9419f74343d'),u('photo-1535632066927-ab7c9ab60908'),u('photo-1602173574767-37ac01994b2a')],
 cats:[u('photo-1599643478518-a784e5dc4c8f'),u('photo-1601121141461-9d6647bca1ed'),u('photo-1543294001-f7cd5d7fb516'),u('photo-1610694955371-d4a3e0ce4b52'),u('photo-1506630448388-4e683c67ddb0')],
 journal:[u('photo-1588444650733-d0767b753fc8',900),u('photo-1600003263720-95b45a4035d5',900),u('photo-1584302179602-e4c3d3fd629d',900),u('photo-1611591437281-460bfbe1220a',900)]};
export type Product={slug:string;name:string;category:string;price:string;material:string[];desc:string;img:string;gallery:string[]};
export const products:Product[]=[
{slug:'celeste-diamond-necklace',name:'Celeste Diamond Necklace',category:'Necklaces',price:'₹2,85,000',material:['18K White Gold','VS Diamonds, 3.2 ct'],desc:'A graduated line of brilliant-cut diamonds that rests like light along the collarbone.',img:u('photo-1599643477877-530eb83abc8e',1400),gallery:[u('photo-1599643477877-530eb83abc8e'),u('photo-1515562141207-7a88fb7ce338')]},
{slug:'noor-emerald-ring',name:'Noor Emerald Ring',category:'Rings',price:'₹1,42,000',material:['18K Yellow Gold','Natural Emerald','Diamond Accents'],desc:'A sculptural emerald ring framed by delicate diamond accents, designed to bring a quiet sense of colour to every occasion.',img:u('photo-1605100804763-247f67b3557e',1000),gallery:[u('photo-1605100804763-247f67b3557e'),u('photo-1603561591411-07134e71a2a9')]},
{slug:'aster-gold-earrings',name:'Aster Gold Earrings',category:'Earrings',price:'₹78,000',material:['22K Gold'],desc:'Hand-engraved petals in warm gold, light enough for every day.',img:u('photo-1535632066927-ab7c9ab60908',900),gallery:[u('photo-1535632066927-ab7c9ab60908'),u('photo-1617038220319-276d3cfab638')]},
{slug:'elan-diamond-bracelet',name:'Élan Diamond Bracelet',category:'Bracelets',price:'₹1,95,000',material:['18K White Gold','Diamonds, 2.1 ct'],desc:'A fluid tennis bracelet with a supple, barely-there drape.',img:u('photo-1611652022419-a9419f74343d',1000),gallery:[u('photo-1611652022419-a9419f74343d'),u('photo-1515562141207-7a88fb7ce338')]},
{slug:'mira-pearl-pendant',name:'Mira Pearl Pendant',category:'Pendants',price:'₹62,000',material:['18K Yellow Gold','South Sea Pearl'],desc:'A single luminous pearl, suspended on a whisper of gold.',img:u('photo-1602173574767-37ac01994b2a',900),gallery:[u('photo-1602173574767-37ac01994b2a'),u('photo-1599643478518-a784e5dc4c8f')]},
{slug:'vela-solitaire-ring',name:'Vela Solitaire Ring',category:'Rings',price:'₹3,40,000',material:['Platinum','GIA Diamond, 1.0 ct'],desc:'A pure solitaire, cut for proportion and set for a lifetime.',img:u('photo-1603561591411-07134e71a2a9',900),gallery:[u('photo-1603561591411-07134e71a2a9'),u('photo-1605100804763-247f67b3557e')]}];
export const WA='https://wa.me/910000000000?text=';
export const nav=['Collections','Bridal','Our Story','Craftsmanship','Journal'];
