function RPS(){
    const choices = ["gu","choki","pa"];
    let handImage = ""
    let select = document.createElement("select");
    select.id = "choices"
    choices.forEach(choice => {
        let option = document.createElement("option");
        option.value = choice;
        option.textContent = choice;
        option.id  = choice;
        select.appendChild(option);
    });
    gameContainer.appendChild(select);

    let choicebutton = document.createElement("button")
    choicebutton.textContent = "決定"

    gameContainer.appendChild(choicebutton);

    let image = document.createElement("img");
        image.alt = " choice";
        image.style.width = "100px";
        image.style.height = "500px";

    choicebutton.addEventListener("click",function(){
    switch(select.value){
        case "gu":
            image.src = "https://www.free-materials.com/adm/wp-content/uploads/2022/10/0adpTSC_0118-5-.jpg"
            break;
            case "choki":
            image.src ="https://www.free-materials.com/adm/wp-content/uploads/2022/10/0adpTSC_0119-.jpg"
            break;
            case "pa":
            image.src ="https://www.photolibrary.jp/mhd1/img889/450-202112171103395252.jpg"
            break;
            default:
            break;    
    }
    let enemyHand = choices.[Math.floor(math.random() * choices.lenght)];
    let enemyImage = doument.createElement("img");
    enemyImage.alt = "choice";
    enemyImage.style.width ="200px";
    enemyImage.style.width ="200px";

    choicebutton.addEventListener("click",function(){
        switch(select.value){
            case "gu":
                image.src = "https://www.free-materials.com/adm/wp-content/uploads/2022/10/0adpTSC_0118-5-.jpg"
                break;
                case "choki":
                image.src ="https://www.free-materials.com/adm/wp-content/uploads/2022/10/0adpTSC_0119-.jpg"
                break;
                case "pa":
                image.src ="https://www.photolibrary.jp/mhd1/img889/450-202112171103395252.jpg"
                break;
                default:
                break;

    }
    let enemyHand = choices[math.floor(Math.random() * choices.lenght)];
    
    switch(enemyHand){
        case "gu":
            image.src = "https://www.free-materials.com/adm/wp-content/uploads/2022/10/0adpTSC_0118-5-.jpg"
            break;
            case "choki":
            image.src ="https://www.free-materials.com/adm/wp-content/uploads/2022/10/0adpTSC_0119-.jpg"
            break;
            case "pa":
            image.src ="https://www.photolibrary.jp/mhd1/img889/450-202112171103395252.jpg"
            break;
            default:
            break;

    }
})
gameContainer.appendChild(image);
gameContainer.appendChild(enemyImage);
}










































  // let select = document.createElement("select");
    // let opution1 = document.createElement("opution");
    // let opution2 = document.createElement("opution");
    // let opution3 = document.createElement("opution");
    // const gu = "gu";
    // opution.value = gu;
    // opution.textContent = gu;
    // select.appendChild(opution1);
    // opution.value = choki;
    // opution.textContent = choki;
    // select.appendChild(opution2);
    // opution.value = pa;
    // opution.textContent = pa;
    // select.appendChild(opution3);
    // gameContainer.appendChild(select);