//クリックされたら確認する

function errorInput(){
    console.log(document.getElementById("month"))
    console.log(document.getElementById("day"))

    const month = document.getElementById("month").value;
    const day = document.getElementById("day").value

    console.log("month:",month,"day:",day)

}

//javascriptのプログラムとHTMLファイルはどこで対応しているか。
//タグについているIDで紐づく
//タグの中にある付加情報のことを属性という。
//console.log()はｃ言語でいうとprintf():です