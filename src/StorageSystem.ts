// 🔄 Multi-Type Storage System
// 📦 Create a system that can store and manage different types of data.
//
// 1. Implement a class `Storage<T, U>` that can store multiple types of data.
// 2. Implement a method `addItem` that stores a new item of a generic type.
// 3. Implement a method `removeItem` that removes an item by value.
// 4. Implement a method `getItems` that returns all stored items.
// 5. Implement a method `findItem` that searches for an item by a given property value.
// 6. Implement a method `updateItem` that updates an item by its property value.

class MyStorage<T, U> {
  items: T[] = []
  message: U;

  addItem(item: T): string {
    this.items.push(item);
    if(typeof item === "number") {
      return `${item} added to storage`;
    } else {
      return `User ${item["name"]} Added`; // I don't why item["name"] works, and item.name doesn't work.
    }
  }

  getItems(): T[] {
    return this.items;
  }

  removeItem(id: number): string {
    this.items = this.items.filter(item => {
      if(typeof item === "number") {
        return item !== id;
      }
    })
    return `${id} removed from storage.`;
  }

  findItem(prop: string, val: string): T {
    const storageItem = this.items.filter(item => {
      if(typeof item !== "number" && item[prop] === val) {
        return item
      }
    })
    return storageItem[0]
  }

  updateItem(prop: string, id: number, update: T): string {
    let previousName: string;
    this.items = this.items.map(item => {
      if(typeof item !== "number") {
        if(typeof item !== "number" && item[prop] === id) {
          previousName = item["name"];
          return update;
        } else {
          return item
        }
      }
    })
    return `${previousName} updated successfully`;
  }
}

// Test cases
const numberStrStorage = new MyStorage<number, string>();

console.log(numberStrStorage.addItem(10)); // "10 added to storage."
console.log(numberStrStorage.addItem(20)); // "20 added to storage."
console.log(numberStrStorage.getItems()); // [10, 20]
console.log(numberStrStorage.removeItem(10)); // "10 removed from storage."
console.log(numberStrStorage.getItems()); // [20]

console.log("////////////////////")

const userStorage = new MyStorage<{ id: number; name: string }, string>();

console.log(userStorage.addItem({ id: 1, name: "Alice" })); // "User Alice added."
console.log(userStorage.addItem({ id: 2, name: "Bob" })); // "User Bob added."
console.log(userStorage.getItems()); // [{ id: 1, name: "Alice" }, { id: 2, name: "Bob" }]
console.log(userStorage.findItem("name", "Alice")); // { id: 1, name: "Alice" }
console.log(userStorage.updateItem("id", 1, { id: 1, name: "Alice Updated" })); // "Alice updated successfully."
console.log(userStorage.getItems()); // [{ id: 1, name: "Alice Updated" }, { id: 2, name: "Bob" }]