self.addEventListener("install", () => { 
    // self.lastId = -1;
    console.log("installed");
});
self.addEventListener("activate", (e) => {
    // e.waitUntil(self.clients.claim());
    // console.log("Service Worker activado y reclamando clientes");

    // self.lastId++;
    // self.id = self.lastId;
    // console.log(`Mi id: ${self.id}\n Last Id: ${self.lastId}`);
    console.log("activated");
});
self.addEventListener("message", (event) => {
    console.log("Mensaje recibido:", event.data);


});