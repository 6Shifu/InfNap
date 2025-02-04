function valto() {
    let kep = document.getElementById("kep"); 
    let valt = 'vilagos'
    if (kep.src.includes("sotet.png")) {
        kep.src = "photos/vilagos.png";
        valt = 'sotet'
    } 
    else {
        kep.src = "photos/sotet.png";
        valt = 'vilagos'
    }
    //sötét
    if (valt == 'sotet')
    {
        // nav & body
        document.body.style.backgroundColor = "rgba(24, 22, 28, 0.9)"
        document.getElementById("navigation").style.backgroundColor  = "rgba(24, 22, 28, 0.1)"
        document.body.style.color = "white"
        let links = document.getElementsByClassName("navlink");
        for (let i = 0; i < links.length; i++) {
            links[i].style.color = "aliceblue";
        }
        // section
        let sectionText = document.getElementsByClassName("sectext");
        for (let i = 0; i < sectionText.length; i++) {
            sectionText[i].style.color = "white";
            sectionText[i].style.backgroundColor = "rgba(24, 22, 28, 0.1)"
        }
        // footer
        document.getElementById("foolast").style.color = "white"
    }
    //világos
    else if (valt == 'vilagos')
    {
        // nav & body
        document.body.style.backgroundColor = "white"
        document.body.style.color = "black"
        document.getElementById("navigation").style.backgroundColor  = "aliceblue"
        
        let links = document.getElementsByClassName("navlink");
        for (let i = 0; i < links.length; i++) {
            links[i].style.color = "rgb(59,1,174)";
        }
        // section
        let sectionText = document.getElementsByClassName("sectext");
        for (let i = 0; i < sectionText.length; i++) {
            sectionText[i].style.color = "black";
            sectionText[i].style.backgroundColor = "white"

        }
        // footer
        document.getElementById("foolast").style.color = "black"
    }
    
}

function szamits()
{
    let idos=parseInt(document.getElementById("idos").value)
    let felnott=parseInt(document.getElementById("normal").value)
    let osszeg=felnott*3600+idos*1800

if(document.getElementById("eletkor").value<18)
{
    document.getElementById("osszeg").innerHTML='Nem vagy elég idős a jelentkezéshez.'
}
else
{
    document.getElementById("osszeg").innerHTML=`Fizetendő összeg: ${osszeg} Ft`
    document.getElementById("fizetes").innerHTML = `<button type="submit" onclick="kiir()">Fizetés</button>`
}

}

function kiir(){
    document.getElementById("fizetes").innerHTML="Köszönjük a vásárlást <3! E-mailben értesítünk a további teendőidről."
}
    