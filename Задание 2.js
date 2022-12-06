const jsonString = `
{
 "list": [
  {
   "name": "Petr",
   "age": "20",
   "prof": "mechanic"
  },
  {
   "name": "Vova",
   "age": "60",
   "prof": "pilot"
  }
 ]
}
`;

const data = JSON.parse(jsonString);
const list = data.list;
const preResult = [];

list.forEach(element => {
  const name = element.name;
  const age = element.age;
  const profession = element.prof;
  
preResult.push ({
  name: name,
  age: +age,
  prof: profession,
  });
});

result = {
  
  list: preResult
}

console.log(result)