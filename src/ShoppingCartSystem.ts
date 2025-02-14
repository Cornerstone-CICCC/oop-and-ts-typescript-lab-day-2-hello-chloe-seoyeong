// 🛍️ E-Commerce Cart System
// 🛒 Create a shopping cart system that manages products and their quantities.
//
// 1. Implement a class `ShoppingCart<T>` to handle products in a cart.
// 2. Implement a method `addToCart` that adds a product to the cart and updates the quantity if it already exists.
// 3. Implement a method `removeFromCart` that removes a product from the cart completely.
// 4. Implement a method `updateQuantity` that updates the quantity of a product in the cart.
// 5. Implement a method `getProductsOfCategory` that accepts a string and returns an array of items from the cart that match that category.
// 6. Implement a method `getTotalPrice` that returns the total cost of all items in the cart.

enum Category {
  Fruit = "Fruit",
  Vegetable = "Vegetable",
  Electronics = "Electronics",
  Pastry = "Pastry",
  Cereal = "Cereal"
}

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  category: Category;
}

class ShoppingCart<T extends CartItem> {
  cart: T[] = []

  addToCart(product: T): string {
    this.cart.push(product);
    return `${product.name} added to cart.`;
  }

  updateQuantity(id: number, qty: number) {
    this.cart = this.cart.map(item => {
      if(item.id === id) {
        return {
          ...item,
          quantity: qty
        }
      } else {
        return item
      }
    })

    const product = this.cart.find(item => item.id === id);
    return `Updated quantity of ${product.name} to ${product.quantity}`;
  }

  getTotalPrice(): string {
    let total: number = 0;
    this.cart.forEach(item => {
      total += item.price * item.quantity;
    })
    return `Total costs of items are ${total}`;
  }

  getProductsOfCategory(category): T[] {
    let sortProduct: T[] = [];
    this.cart.forEach(item => {
      if(item.category === category) {
        sortProduct.push(item);
      }
    })
    return sortProduct;
  }

  removeFromCart(id) {
    let removeItem: string = "";
    this.cart = this.cart.filter(item => {
      if(item.id !== id) {
        return item
      } else {
        removeItem = item.name;
      }
    })
    return `${removeItem} removed from cart`;
  }
}

// Test cases
const cart = new ShoppingCart();

console.log(cart.addToCart({ id: 1, name: "Headphones", price: 50, quantity: 1, category: Category.Electronics })); // "Headphones added to cart."
console.log(cart.addToCart({ id: 2, name: "Keyboard", price: 100, quantity: 1, category: Category.Electronics })); // "Keyboard added to cart."
console.log(cart.addToCart({ id: 3, name: "Pomelo", price: 5, quantity: 5, category: Category.Fruit })); // "Keyboard added to cart."
console.log(cart.updateQuantity(1, 3)); // "Updated quantity of Headphones to 3."
console.log(cart.getProductsOfCategory("Electronics")) // Should return all electronics
console.log(cart.getTotalPrice()); // Should return the total cost of items
console.log(cart.removeFromCart(2)); // "Keyboard removed from cart."