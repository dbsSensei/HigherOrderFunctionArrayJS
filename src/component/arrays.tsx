import React from "react";

type company = {
  key: number;
  name: string;
  category: string;
  start: number;
  end: number;
};
const companies: company[] = [
  { key: 1, name: "Company One", category: "Finance", start: 1981, end: 2003 },
  { key: 2, name: "Company Two", category: "Retail", start: 1992, end: 2008 },
  { key: 3, name: "Company Three", category: "Auto", start: 1999, end: 2007 },
  { key: 4, name: "Company Four", category: "Retail", start: 1989, end: 2010 },
  {
    key: 5,
    name: "Company Five",
    category: "Technology",
    start: 2009,
    end: 2014,
  },
  { key: 6, name: "Company Six", category: "Finance", start: 1987, end: 2010 },
  { key: 7, name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
  {
    key: 8,
    name: "Company Eight",
    category: "Technology",
    start: 2011,
    end: 2016,
  },
  { key: 9, name: "Company Nine", category: "Retail", start: 1980, end: 1989 },
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];
// for (let i = 0; i < companies.length; i++) {
//   console.log(companies[i]);
// }

// let data = null;
// for (let i = 0; i < companies.length; i++) {
//   data = companies[i];
//   console.log(data);
// }

const ArrayMethod: any = () => {
  ////////////////////
  ///////////.forEach
  //   const ForEach = companies.forEach((company: any) => console.log(company));

  ////////////////////
  ////////////.filter
  //   const Filter1 = companies.filter(
  //     (company: any) => company.end - company.start > 10
  //   );
  //   console.log(Filter1);

  //   const Filter2 = ages.filter((age: any) => age > 21);
  //   console.log(Filter2);

  //   const Filter3 = companies.filter(
  //     (company: any) => company.category === "Retail"
  //   );
  //   console.log(Filter3);

  ////////////////////
  ///////////////.map
  // const Map1 = companies.map(
  //   (company: any) => `${company.name} [${company.start} - ${company.end}] `
  // );
  // console.log(Map);

  // const Map2 = ages.map((age) => Math.sqrt(age)).map((age) => age * 2);
  // console.log(Map2);

  ////////////////////
  //////////////.sort
  // const Sort1 = companies
  //   .sort((c1: any, c2: any) => (c1.start > c2.start ? 1 : 2))
  //   .map((company: any) => company.start)
  //   .filter((company) => company > 1990);
  // console.log(Sort1);

  // const Sort2 = ages.sort((a, b) => (b - a));
  // console.log(Sort2);

  ////////////////////
  ////////////.reduce
  // const Reduce1 = ages.reduce((total, age) => total + age, 9);
  // console.log(Reduce1);

  // const Reduce2 = companies.reduce(
  //   (total, company) => total + company.end - company.start,
  //   0
  // );
  // console.log(Reduce2);

  ////////////////////
  //// Combine Method
  const combined = ages
    .map((age) => age * 2)
    .filter((age) => age > 40)
    .sort((a, b) => a - b)
    .reduce((total, age) => total + age);

  console.log(combined);

  return <h1>Js Array Method</h1>;
};

export default ArrayMethod;
