addEventListener("message",(msg)=>{
    if(msg.data=="start"){
        let i =0;
        while (i < 1e5) {
            console.log(i);
            i++;
        }
        postMessage("terminate");

    }
})
