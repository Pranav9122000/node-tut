const EventEmitter = require("events");

const customEmitter = new EventEmitter();

customEmitter.on("response", (name,id) => {
  console.log(`data recieved from ${name} with id: ${id}`);
});

customEmitter.on("response", () => {
    console.log("something recevied");
  });

//order matters here
customEmitter.emit("response","john",32);
