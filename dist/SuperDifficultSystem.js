class SayGreeting {
    guest;
    message = [];
    constructor(guest) {
        this.guest = guest;
    }
    add(msg) {
        this.message.push(msg);
    }
    combine() {
        let longMsg = "";
        this.message.forEach(msg => longMsg += `\n${msg}`);
        return longMsg;
    }
}
const guest = new SayGreeting("Elmer");
guest.add("Happy Valentine! 💝");
guest.add("Thank you for lecture.");
guest.add("And have a wonderful long weekend.");
guest.add("See you next Tuesday! 👋");
console.log(guest.combine());
