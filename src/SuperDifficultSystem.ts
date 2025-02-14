//
// 🤖 Build a Super Difficult System
// 
//
// 
//
// 
//
// 
//
// 
//
// Just kidding.
//
//
// Happy Valentines Day to you! 💖
// Thank you for being my student! 😜
// Good luck with the rest of the lab,
// ...and I hope you enjoy your day!
//
//
//
//////////////////////////////
//
// Elemr,
// Thank you for your lecture and Valentines gift like this file. LOL
// Enjoy your rest of day and Have a great weekend!
type Message = {
  msg: string
}

class SayGreeting {
  guest: string;
  message: Message[] = [];
  constructor(guest: string) {
    this.guest = guest;
  }

  add(msg) {
    this.message.push(msg);
  }

  combine(): string{
    let longMsg: string = "";
    this.message.forEach(msg => longMsg += `\n${msg}`)
    return longMsg;
  }
}

const guest = new SayGreeting("Elmer");
guest.add("Happy Valentine! 💝")
guest.add("Thank you for lecture.")
guest.add("And have a wonderful long weekend.")
guest.add("See you next Tuesday! 👋")
console.log(guest.combine())