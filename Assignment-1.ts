{
  // problem - 1
  function formatString(input: string, toUpper?: boolean): string {
    if (toUpper === false) {
      return input.toLowerCase();
    } else {
      return input.toUpperCase();
    }
  }

//   console.log(formatString("Hello", false));

  //problem - 2
  function filterByRating(items: { title: string; rating: number }[]): { title: string; rating:number }[] {
     const afterFilters = items.filter(item => item.rating >= 4)
     return afterFilters;
  }

  const books = filterByRating([
     { title: "Book A", rating: 4.5 },
     { title: "Book B", rating: 3.2 },
     { title: "Book C", rating: 5.0 },
     { title: "Book C", rating: 7.0 },
     { title: "Book C", rating: 2.8 }
   ]);

//    console.log(books);

   //problem - 3

   function concatenateArrays<T>(...arrays: T[][]): T[]{
     return arrays.flat();
   }

//    console.log(concatenateArrays([1, 2], [3, 4], [5]))

//problem-4

class Vehicle {
  private _make : string;
  public year : number;

  constructor( _make: string, year: number){
    this._make = _make;
    this.year = year
  }

  getInfo() {
    console.log(`Make: ${this._make}, Year: ${this.year}`)
  }
}

class Car extends Vehicle {
  private _model : string;

  constructor(_make: string, year: number, _model: string){
    super(_make, year);
    this._model = _model;
  }

  getModel() {
    console.log(`Model: ${this._model}`)
  }
}

// const myCar = new Car("Toyota", 2020, "Corolla");
// myCar.getInfo()
// myCar.getModel()

//problem - 5
function processValue(value: string | number): number {
  if(typeof value === 'string'){
    return value.length;
  }else{
    return value * 2;
  }
}

// console.log(processValue(10))

// problem - 6

interface Product {
  name: string;
  price: number;
}

function getMostExpensiveProduct(products: Product[]): Product | null {

  if(products.length > 0){
    const expensiveProduct = products.reduce((prev, current) => {
      return current.price > prev.price ? current : prev;
    })
    return expensiveProduct;
  } else{
    return null;
  }
}
// const products = [
//   { name: "Pen", price: 10 },
//   { name: "Notebook", price: 25 },
//   { name: "Bag", price: 50 },
//   { name: "Phone", price: 70 },
//   { name: "Book", price: 35 }
// ];
// console.log(getMostExpensiveProduct(products));  

// problem -7 
enum Day {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday
}

function getDayType(day: Day): string {
  if(day === Day.Saturday || day === Day.Sunday){
    return "Weekend"
  } else{
    return "Weekday"
  }
}

// console.log(getDayType(Day.Sunday))

//problem - 8 

async function squareAsync(n: number): Promise<number> {

  return new Promise<number>((resolve, reject) => {
    if (n < 0){
      reject(new Error('Negative number not allowed'))
    } else{
      setTimeout(() => resolve(n * n), 1000)
    }
  })
}

// squareAsync(-8).then(console.log).catch(console.error)


}
