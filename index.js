let myhttp = require("http");

let myserver = myhttp.createServer(
  function(myrequest, myresponse) {
    console.log(myrequest.url);

    let mytext;
    if (myrequest.url === "/soup") {
      mytext = "soup is tasty!";
    }
    else if (myrequest.url === "/salad") {
      mytext = "soup is better.";
    }
    else if (myrequest.url === "/super-salad") {
      mytext = "great choice!"
    }
    else {
      mytext = "would you like soup or salad?"
    }

    myresponse.writeHead(200, { "Content-Type": "text/plain" });

    myresponse.end(mytext);
  }
);

myserver.listen(8080, "0.0.0.0");
console.log("server has started");