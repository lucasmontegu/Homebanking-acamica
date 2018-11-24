//Declaración de variables

var nombreUsuario = "Lucas Montegu";
var actualizarSaldoEnPantalla;
var cargarNombreEnPantalla;
var saldoCuenta = 9500;
var limiteExtraccion = 3000;
var restaDin;
var sumaDin;
var cuenta;
var user = "lmontegu";
var password = "lucas1234";


//Ejecución de las funciones que actualizan los valores de las variables en el HTML.
window.onload = function() {
    cargarNombreEnPantalla();
    actualizarSaldoEnPantalla();
    actualizarLimiteEnPantalla();
}


//Funciones que tenes que completar
function cambiarLimiteDeExtraccion() {
    modificarLimite();
    actualizarLimiteEnPantalla();
}

function extraerDinero() {
    extraer();
    actualizarSaldoEnPantalla();

}

function depositarDinero() {
    depositar();
    actualizarSaldoEnPantalla();
}

function pagarServicio() {
    servicio = prompt("Ingrese la opcion del servicio a pagar: " + "\n 1 - TARJETA NARANAJA: $3600" + "\n 2 - EPEC: $550" + "\n 3 - AGUAS CORDOBESAS: $220" + "\n 4 - PERSONAL: $750" + "\n 5 - IMPUESTO MUNCIPAL: $400");
    pagar();
    actualizarSaldoEnPantalla();

}

function transferirDinero() {
    cuenta = prompt("Ingrese el numero de la cuenta asociada a la que desea realizar la transferencia: " + "\n 1 - Lorena Mondino " + "\n 2 - Javiar Iglesias" + "\n 3 - Matias Navarro");
    transferir();
    actualizarSaldoEnPantalla();
}

function iniciarSesion() {

    loginPage();

}

//Funciones que actualizan el valor de las variables en el HTML
function cargarNombreEnPantalla() {
    document.getElementById("nombre").innerHTML = "Bienvenido/a " + nombreUsuario;
}

function actualizarSaldoEnPantalla() {
    document.getElementById("saldo-cuenta").innerHTML = "$" + saldoCuenta;
}

function actualizarLimiteEnPantalla() {
    document.getElementById("limite-extraccion").innerHTML = "Tu límite de extracción es: $" + limiteExtraccion;
}

//***************** FUNCIONES **************************** 

//-----------------FUNCION EXTRACCION ----------------------------

function extraer() {
    var sacarDinero;
    var saldoAnterior;

    saldoAnterior = saldoCuenta;
    sacarDinero = parseInt(prompt("Ingrese el monto a extraer"));
    if(isNaN(sacarDinero) || sacarDinero == 0){
        alert("Ingrese un monto valido");
        extraer(); //Llama nuevamente a que se ejecute la funcion
    }else {
        if(sacarDinero <= limiteExtraccion) {
            if(saldoCuenta > 0 && sacarDinero <= saldoCuenta){
            restaDin = sacarDinero;
            restar(); // Llama funcion restar
            alert("Extraccion exitosa" + "\nSaldo Anterior: " + saldoAnterior + "\nEl saldo de su cuenta es: " + saldoCuenta);
            }else {
                alert("El monto ingresado es superior al saldo disponible, ingrese otro importe");
                extraer();//Llama nuevamente a que se ejecute la funcion
            }
        }else {
            alert("El Monto es superior al limite de extraccion");
            extraer();//Llama nuevamente a que se ejecute la funcion
        } 
        
    }
    
} 


//----------------------MODIFICA LIMITE EXTRACCION-----------------------------

function modificarLimite() {
    var cambioLimite;
    cambioLimite = prompt("Ingrese nuevo limite de extracción");
    if(cambioLimite != 0 && cambioLimite >= 500){
        alert("Su limite de extracción actual es " + cambioLimite);
        limiteExtraccion = cambioLimite;
    }else {
        alert("El limite debe ser superior o igual a $500");
        modificarLimite(); //Llama nuevamente a que se ejecute la funcion 
    }
    
}

//---------------------- FUNCION DEPOSITAR -----------------------------

function depositar() {
    var agregarDinero;
    agregarDinero = prompt("Ingrese el Monto a depositar");
    if(agregarDinero != 0 && agregarDinero >= 100) {
        sumaDin = agregarDinero;
        sumar(); //Llama a la funcion sumar
        alert("El deposito se ha realizado correctamente");
    }else {
        alert("El monto a depositar debe ser superior a $100");

        depositar();
    }
}

//------------------------ FUNCION TRANSFERIR --------------------------

function transferir() {
    var cashTransfer;
    
    switch(cuenta) {
        case "1":
            cashTransfer = prompt("Ingrese el monto a transferir");
            restaDin = cashTransfer;
            restar(); //Llama a la funcion restar
            alert("Transferencia Exitosa a Lorena Mondino");
            break;
        case "2":
            cashTransfer = prompt("Ingrese el monto a transferir");
            restaDin = cashTransfer;
            restar(); //Llama a la funcion restar
            alert("Transferencia Exitosa a Javier Iglesias");
            break;
        case "3":
            cashTransfer = prompt("Ingrese el monto a transferir");
            restaDin = cashTransfer;
            restar(); //Llama a la funcion restar
            alert("Transferencia Exitosa a Matias Navarro");
            break;
        default:
            alert("Debe ingresar una de las tres cuentas asociadas ");
            
    }

}

//-------------------------- FUNCION PAGAR -----------------------

function pagar(){
    var montoAPagar;

    switch(servicio){
        case "1":
            montoAPagar = prompt("Ingrese el monto a Pagar");
            restaDin = montoAPagar;
            if(montoAPagar == 3600){
                restar(); //Llama a la funcion restar
                alert("Se realizo el pago de TARJETA NARANJA");
            }else {
                alert("Ingrese el monto correspondiente a la factura del servicio");
                pagar(); //Vuelve a llamar a la funcion
            }
            break;
        case "2":
            montoAPagar = prompt("Ingrese el monto a Pagar");
            restaDin = montoAPagar;
            if(montoAPagar == 550){
                restar(); //Llama a la funcion restar
                alert("Se realizo el pago de EPEC");
            }else {
                alert("Ingrese el monto correspondiente a la factura del servicio");
                pagar(); //Vuelve a llamar a la funcion
            }
            break;
        case "3":
            montoAPagar = prompt("Ingrese el monto a Pagar");
            restaDin = montoAPagar;
            if(montoAPagar == 220){
                restar(); //Llama a la funcion restar
                alert("Se realizo el pago de AGUAS CORDOBESAS");
            }else{
                alert("Ingrese el monto correspondiente a la factura del servicio");
                pagar(); //Vuelve a llamar a la funcion
            } 
            break;
        case "4":
            montoAPagar = prompt("Ingrese el monto a Pagar");
            restaDin = montoAPagar;
            if(montoAPagar == 750){
                restar(); //Llama a la funcion restar
                alert("Se realizo el pago de PERSONAL");
            }else {
                alert("Ingrese el monto correspondiente a la factura del servicio");
                pagar(); //Vuelve a llamar a la funcion
            } 
            break;
        case "5":
            montoAPagar = prompt("Ingrese el monto a Pagar");
            restaDin = montoAPagar;
            if(montoAPagar == 400){
                restar(); //Llama a la funcion restar
                alert("Se realizo el pago de IMPUESTO MUNICIPAL");
            }else{
                alert("Ingrese el monto correspondiente a la factura del servicio");
                pagar(); //Vuelve a llamar a la funcion
            }
            break;
        default:
            alert("Debe ingresar alguna de las opciones");
            pagarServicio();
    }
}



// *************** FUNCIONES MATEMATICAS ***********************

//---------- RESTAR ---------------

function restar(){
    var resultado;
    resultado = parseFloat(saldoCuenta) - parseFloat(restaDin);
    saldoCuenta = resultado;
}

//----------- SUMAR -----------------
function sumar() {
    var resultado;
    resultado = parseFloat(saldoCuenta) + parseFloat(sumaDin);
    saldoCuenta = resultado;
  }//suma



  //**************** FUNCIONES DE SESION *****************

function loginPage(){

    var usr = document.getElementById("userName").value;
    var pwd = document.getElementById("userPwd").value;

    if (usr === user && pwd === password){
        document.getElementById("linkPage").innerHTML = location.href;    
    }else {
        alert("Usuario y/o Contraseña incorrectos");
        logout(); //Llama nuevamente a que se ejecute la funcion
    }
}

function logout() {
    document.getElementById("logout").innerHTML = location.href;
  }
