var company= new Object();
company.name="google";

company.ceo=new Object();
company.ceo.name="sundar"
company.ceo.orgin="India";

console.log(company);
console.log("company ceo name :"+[company.ceo.name]);
console.log(company.ceo["name"])

var stock="stock off company"
company[stock]=110
console.log("company stock are rated: "+company[stock])