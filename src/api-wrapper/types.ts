// keep position
export type Position = {
  x: number;
  y: number;
};

// export whatever type you need to for your index.ts in the mapping folder
export type States = 'States';
export type Hotels = 'Hotels';

/* 
  Let's assume that you're getting both the States and Hotels data from your api
  Under the States, you get several types of data:
  - Citizens (number)
  - Capitol (string)
  - Region (number)
  - Cities (string[] -> is an array)
  - NetWorth (number)
  - Name (string)

  Under Hotels, you get serveral types of data:
  - CustomerCount (number)
  - NetWorth (number)
  - EmployeesCount (number)
  - hasPool (boolean)
  - Name (string)
*/

// Here is how the States export would be set up:
/*export type StateInfo = {
  citizens: number;
  capitol: string;
  cities: string[];
  region: number;
  networth: number;
};*/

// Now we do the same with the Hotel data
export type HotelInfo = {
  customers: number;
  networth: number;
  employees: number;
  haspool: boolean;
  name: string;
};

/*
  However, we can get more in depth. 
  We can assume that under the cities in StateInfo, each city has its own object data:
  - citizens (number)
  - county (string)
  - name (string)
  - isCapitol (boolean)
*/
export type StateInfo = {
  citizens: number;
  capitol: string;
  cities: [
    
  ]
}
