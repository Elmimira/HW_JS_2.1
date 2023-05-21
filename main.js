let result1 = "Ти живеш у столиці "
let result2 = "Ти живеш у місті "
let result3 = "Круто! Хочеш стати "
let cancel = "Шкода, що Ви не захотіли ввести свій(ю) "


let dateOfBirth  = prompt ("Який Ваш рік народження?");
if ( dateOfBirth == null || dateOfBirth == " ") {
    alert ( cancel + "рік народження")
}
else {
    alert ("Ваш вік - " + (2023 - dateOfBirth));
}

let placeOfLiving = prompt ('В якому місті Ви живете?');
if (placeOfLiving == "Київ") {
    alert (result1 + "України")
}
if (placeOfLiving == "Вашингтон") {
    alert (result1 + "США")
}
if (placeOfLiving == "Лондон") {
    alert (result1 + "Великої Британії")
}
if ( placeOfLiving == null) {
    alert ( cancel + "місто")
}
else {
    alert (result2 + placeOfLiving)
}


let favouriteSport = prompt('Який Ваш улюблений вид спорту?');
if (favouriteSport == "Баскетбол") {
    alert (result3 + "Майклом Джорданом?")
}
if (favouriteSport == "Футбол") {
    alert (result3 + "Криштіаном Роналду?")
}
if (favouriteSport == "Волейбол") {
    alert (result3 + "Бруно Резендем?")
}
if ( favouriteSport == null) {
    alert ( cancel + "вид спорту")
}
else {
    alert ("Круто!")
}