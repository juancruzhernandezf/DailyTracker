/* En el futuro quiero generar X numero de variables para miembros del equipo segun la cantidad de miembros que el usuario ingrese

let amount-team = parseInt(prompt("Cuántos miembros tiene tu equipo?"));

*/



let item_todo;

let new_item;

let add_another;

let create_list;

let name_user = prompt("Bienvenido a Daily Tracker, ¿Cómo es tu nombre?");



function add_todo() {

    item_todo = prompt("Escribe el nombre de la tarea que quieres agregar a la lista de quehaceres:")

    console.log(item_todo);
    
}


function new_list () {

    create_list = prompt(name_user + ", ¿quieres crear una lista de quehaceres nueva? Escribe 'Si' para crear una lista nueva o 'Salir' para finalizar ");

    if (create_list !== "Si" && create_list !== "Salir") {
    
        while (create_list !== "Si" && create_list !== "Salir") {
            
            let create_list = prompt("Por favor ingrese un comando válido. Escribe 'Si' para crear una lista nueva o 'Salir' para finalizar");
            
            if (create_list == "Si") {
    
                console.log("------", name_user, ", esta es tu nueva lista ------")
                break
            
            }
            
            else if (create_list == "Salir") {
                console.log("Gracias por utilizar el servicio, esperamos verte pronto", name_user+ "!");
                break
            }
            
            
        }
    }

    else if (create_list == "Salir") {
        console.log("Gracias por utilizar el servicio, esperamos verte pronto", name_user+ "!");
    }

    else {
        console.log("------", name_user, "esta es tu nueva lista ------")
    }

}


new_list();

if ( create_list == "Si") {
do {

    add_todo();

    add_another = prompt("Si desea agregar otra tarea, escriba 'Si', de lo contrario, escriba 'Salir'");

    if (add_another == "Salir") {

        console.log("------", name_user, ", aquí finaliza tu lista ------");

    }

    else {
          while ( add_another != "Salir" && add_another != "Si") {  

                add_another = prompt("ERROR!"+" Usted ingresó "+"'"+ add_another+"'"+ ", por favor ingrese un comando válido. Si desea agregar otra tarea, escriba 'Si', de lo contrario, escriba 'Salir'");
          }
    }


}

while (add_another == "Si");

console.log("Gracias por utilizar el servicio, esperamos verte pronto", name_user+ "!");

}





