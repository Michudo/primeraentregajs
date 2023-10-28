function loguear(){


    let identificar = true
    let intentos = 1
    do{
        let usuario = prompt("ingresa tu usuario (solo 3 intentos)")
        if(usuario === null){
            break
        }
        if(usuario == "michelle"  && intentos <=3){
            alert("bienvenido usuario " + usuario)
            console.log ("el usuario ingreso correctamente")
            identificar = false
        }else{
            alert("Usuario incorrecto, igrese nuevamente " + usuario)
            intentos++
            if(intentos >3){
                alert("usted supero los 3 intentos, vuelva mas tarde")
                console.error("no se reconoce el usuario")
                break
            }
        }
    }while(identificar)
}

loguear()

let lista = parseFloat(prompt("Cuanto dispone para comprar su picador?"))

// Elije el precio del picador el usuario
if (lista >= 7 && lista <= 10) {
    alert("Tengo un picador por 8.99 USD");
} else if (lista >= 15 && lista <= 20) {
    alert(`Por ${lista} USD puedes adquirir un picador que te puede servir.`);
} else {
    if (isNaN(lista)) {
    lista= 0
        alert(`No me quedan picadores disponibles por el valor de ${lista} USD.`)
        }
    alert(`No me quedan picadores disponibles por el valor de ${lista} USD.`)

}