function RPS(){
    const choices = ["gu","choki","pa"];


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

    let select = document.createElement("select");
    choices.forEach(choice => {
        let option = document.createElement("option");
        option.value = choice;
        option.textContent = choice;
        select.appendChild(option);
    });
    gameContainer.appendChild(select);

    let image = document.createElement("img");
    image.alt = " choice";
    image.style.width = "1000px";
    image.style.height = "1000px";
    image.src = "https://www.free-materials.com/adm/wp-content/uploads/2022/10/0adpTSC_0118-5-.jpg"
    
    gameContainer.appendChild(image);

}