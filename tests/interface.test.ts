import type { Employee, Manager } from "../src/employee.js";
import type { Person } from "../src/person.js";
import type { Seller } from "../src/seller.js";

describe("Interface Typescript", () => {
  it("should run and support interface", () => {
    const seller: Seller = {
      id: 1,
      name: "Vyanz",
      nim: 25031399393,
      nik: 72423918312,
    };

    console.info(seller);
  });

  it("should support function interface", () => {
    interface AddFunction {
      (v1: number, v2: number): number;
    }

    const add: AddFunction = (v1: number, v2: number): number => {
      return v1 + v2;
    };

    expect(add(1, 2)).toBe(3);
  });

  it("should support indexable array/object", () => {
    interface StringArray {
      [index: number]: string;
    }

    interface StringDict {
      [key: string]: string;
    }

    const names: StringArray = ["Vyan", "Pashya", "Ramadhan"];
    const dict: StringDict = {
      nama: "Vyanz",
      address: "Bangkalan",
    };

    console.info(names[0]);
    console.info(names[1]);
    console.info(names[2]);

    console.info(dict["nama"]);
    console.info(dict["address"]);
  });

  it("should return info of employees", () => {
    const employee: Employee = {
      id: 1,
      name: "Vian",
      division: "Entertainment",
    };

    const manager: Manager = {
      id: 2,
      name: "Zidan",
      division: "Creative",
      numberOfEmployees: 12,
    };

    console.info(employee);
    console.info(manager);
  });

  it("should support function in interface", () => {
    const person: Person = {
      name: "Vian",
      sayHello: function (name: string): string {
        return `Hello ${name}, my name is ${this.name}`;
      },
    };

    console.info(person.sayHello("Bud"));
  });

  it("should support intersection types", () => {
    interface HasName {
      name: string;
    }

    interface HasId {
      id: number;
    }

    //TODO: bisa make ini tapi kalo kita gabutuh nambahin apa apa, make intersection types
    // interface Person extends HasName, HasId {
    // }

    type Domain = HasId & HasName;

    const domain: Domain = {
      id: 5,
      name: "Eko",
    };

    console.info(domain);
  });

  it("should support type assertion", () => {
    const person: any = {
      name: "Vyanz",
      address: "Bangkalan",
    };

    const person2: Person = person as Person;

    console.info(person2);
  });
});
