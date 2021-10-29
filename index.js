const numbersList = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const cities = [
  { name: 'Almaty', code: 'ALA' },
  { name: 'Nursultan', code: 'AST'},
  { name: 'Shymkent', code: 'SHY' },
  { name: 'Aktau', code: 'AKT' },
  { name: 'Atyrau', code: 'ATY' },
  { name: 'Karaganda', code: 'KAR' },
  { name: 'Kyzylorda', code: 'KZY' },
  { name: 'Pavlodar', code: 'PAV' },
];
//1
evenNumbers = numbersList.filter(x=>x%2==0);
console.log("1. Even Numbers:", evenNumbers);
//2
oddNumbers = numbersList.filter(x=>x%2!=0);
console.log("2. Odd Numbers: ",oddNumbers);
//3
citiesWithK = cities.filter(x=>{
  return x.name.startsWith('K')
})
console.log("3. Cities with first letter K: ", citiesWithK);
//4
citiesName = cities.map(x => x.name);
console.log("4. Cities: ", citiesName);
//5
let mult = 1;
for(let i=0;i<numbersList.length;i++){
    mult*=numbersList[i];
}
console.log("5. Multiplication 1: ", mult);

//6
let mult2 = numbersList.reduce((accum,cur)=>accum*cur)
console.log("6. Multiplication 2: ", mult2);

//7
let sum = numbersList.reduce((accum,cur)=>accum+cur)
console.log("7. Sum of numbersList: ", sum);

//8
const newObj = cities.reduce((accum, cur) => {
  accum[cur.code] = cur.name;
  return accum;
  },{})
console.log("New Obj: ", newObj)