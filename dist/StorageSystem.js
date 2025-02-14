// 🔄 Multi-Type Storage System
// 📦 Create a system that can store and manage different types of data.
//
// 1. Implement a class `Storage<T, U>` that can store multiple types of data.
// 2. Implement a method `addItem` that stores a new item of a generic type.
// 3. Implement a method `removeItem` that removes an item by value.
// 4. Implement a method `getItems` that returns all stored items.
// 5. Implement a method `findItem` that searches for an item by a given property value.
// 6. Implement a method `updateItem` that updates an item by its property value.
class MyStorage {
    items = [];
    addItem(item) {
        this.items.push(item);
        if (typeof item === "object") {
            return `User ${item["name"]} Added`; // I don't why item["name"] works, and item.name doesn't work.
        }
        else {
            return `${item} added to storage`;
        }
    }
    getItems() {
        return this.items;
    }
    removeItem(id) {
        this.items = this.items.filter(item => {
            if (typeof item === "number" || "string") {
                return item !== id;
            }
        });
        return `${id} removed from storage.`;
    }
    findItem(prop, val) {
        const storageItem = this.items.filter(item => {
            if (item[prop] === val) {
                return item;
            }
        });
        return storageItem[0];
    }
    updateItem(prop, id, update) {
        let previousName;
        this.items = this.items.map(item => {
            if (typeof item === "object") {
                if (item[prop] === id) {
                    previousName = item["name"];
                    return update;
                }
                else {
                    return item;
                }
            }
        });
        return previousName ? `${previousName} updated successfully` : `Can not update.`;
    }
}
// Test cases
const numberStrStorage = new MyStorage();
console.log(numberStrStorage.addItem(10)); // "10 added to storage."
console.log(numberStrStorage.addItem(20)); // "20 added to storage."
console.log(numberStrStorage.addItem("30"));
console.log(numberStrStorage.getItems()); // [10, 20, '30']
console.log(numberStrStorage.removeItem(10)); // "10 removed from storage."
console.log(numberStrStorage.getItems()); // [20, '30']
console.log("////////////////////");
const userStorage = new MyStorage();
console.log(userStorage.addItem({ id: 1, name: "Alice" })); // "User Alice added."
console.log(userStorage.addItem({ id: 2, name: "Bob" })); // "User Bob added."
console.log(userStorage.getItems()); // [{ id: 1, name: "Alice" }, { id: 2, name: "Bob" }]
console.log(userStorage.findItem("name", "Alice")); // { id: 1, name: "Alice" }
console.log(userStorage.updateItem("id", 1, { id: 1, name: "Alice Updated" })); // "Alice updated successfully."
console.log(userStorage.updateItem("id", 3, { id: 3, name: "John Updated" }));
console.log(userStorage.getItems()); // [{ id: 1, name: "Alice Updated" }, { id: 2, name: "Bob" }]
