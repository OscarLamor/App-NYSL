var userName = "";
var userEmail = "";
var matchIdActual = "";


// Creo funcion para ocultar todos los (divId) con display-none, que está agregado a cada clase con .classList.add:
function hideAll() {
    document.getElementById("home").classList.add("d-none");
    document.getElementById("menu").classList.add("d-none");
    document.getElementById("about").classList.add("d-none");
    document.getElementById("rules").classList.add("d-none");
    document.getElementById("gameInfo").classList.add("d-none");
    document.getElementById("contact").classList.add("d-none");
    document.getElementById("map1").classList.add("d-none");
    document.getElementById("map2").classList.add("d-none");
    document.getElementById("map3").classList.add("d-none");
    document.getElementById("map4").classList.add("d-none");
    document.getElementById("map5").classList.add("d-none");
    document.getElementById("map6").classList.add("d-none");
    document.getElementById("pageChat").classList.add("d-none");
}

// Creo otra funcion para enseñar solo el div que necesite usando .remove para borrar display-none:

function showDiv(divId) {
    hideAll();
    document.getElementById(divId).classList.remove("d-none");
    if (divId != 'home') {
        document.getElementById("menu").classList.remove("d-none");
    }
}

//Funcion para mostrar mapas
function showDivMap(divId) {
    hideAll();
    divId.classList.remove("d-none");
}
//funcion para mostar chat
function showDivChat(divId) {
    hideAll();
    divId.classList.remove("d-none");
}

//<----------------------------------------------------------------------------------------------------------->

/*function writeUser(){
	//Cogemos todos los datos de los input que hemos creado y los guardamos en diferentes variables
	var user = document.getElementById('username').value;
	var pass = document.getElementById('password').value;
	var name = document.getElementById('name').value;
	var surname = document.getElementById('surname').value;
	
	//Guardamos todas esas variables en un objecto para poder enviarlo a guardar
	var data = {
		username: user,
		password: pass,
		name: name,
		surname: surname
  };
  
  //Ejecutamos la función de guardar en base de datos, le pasamos el objeto que contiene todas las variables con datos y le pasamos la tabla concreta en la que queremos guardar el dato
  writeInDB(data,'users');
}*/

//Funcion para subir datos de los partidos a la base de datos (Firebase)

function writeMatches(){
    var data = {
		date: "9/01",
		time: "9:30 a.m.",
		location: "AJ Katzenmaier Elementary",
		teams: "U1 and U4",
        map: "map1"
    };
    var data1 = {
		date: "9/01",
		time: "1:00 p.m.",
		location: "Greenbay",
		teams: "U3 and U2",
        map: "map2"
    };
    var data2 = {
		date: "9/08",
		time: "9:30 a.m.",
		location: "Howard A Yeagery",
		teams: "U5 and U6",
        map: "map3"
    };
    var data3 = {
		date: "9/08",
		time: "1:00 p.m.",
		location: "Marjorie P Hart",
		teams: "U6 and U1",
        map: "map4"
    };
    var data4 = {
		date: "9/15",
		time: "9:30 a.m.",
		location: "North",
		teams: "U2 and U4",
        map: "map5"
    };
    var data5 = {
		date: "9/15",
		time: "1:00 a.m.",
		location: "AJ Katzenmaier",
		teams: "U3 and U5",
        map: "map2"
    };
    var data6 = {
		date: "9/22",
		time: "9:30 a.m.",
		location: "South",
		teams: "U1 and U3",
        map: "map6"
    };
    var data7 = {
		date: "9/22",
		time: "1:00 a.m.",
		location: "Howard A Yeager",
		teams: "U2 and U6",
        map: "map3"
    };
    var data8 = {
		date: "9/29",
		time: "9:30 a.m.",
		location: "Greenbay",
		teams: "U4 and U5",
        map: "map2"
    };
    var data9 = {
		date: "10/06",
		time: "9:30 a.m.",
		location: "Marjorie P Hart",
		teams: "U2 and U5",
        map: "map4"
    };
    var data10 = {
		date: "10/06",
		time: "1:00 a.m.",
		location: "South",
		teams: "U1 and U6",
        map: "map6"
    };
    var data11 = {
		date: "10/13",
		time: "9:30 a.m.",
		location: "Howard A Yeager",
		teams: "U3 and U4",
        map: "map3"
    };
    var data12 = {
		date: "10/13",
		time: "1:00 a.m.",
		location: "Greenbay",
		teams: "U5 and U1",
        map: "map2"
    };
    var data13 = {
		date: "10/20",
		time: "9:30 a.m.",
		location: "North",
		teams: "U6 and U3",
        map: "map5"
    };
    var data14 = {
		date: "10/20",
		time: "1:00 a.m.",
		location: "Marjorie P Hart",
		teams: "U2 and U4",
        map: "map4"
    };
    var data15 = {
		date: "10/27",
		time: "9:30 a.m.",
		location: "AJ Katzenmaier",
		teams: "U3 and U1",
        map: "map1"
    };
    var data16 = {
		date: "10/27",
		time: "1:00 a.m.",
		location: "Howard A Yeager",
		teams: "U5 and U6",
        map: "map3"
    };
    writeInDB(data,'match');
    writeInDB(data1,'match');
    writeInDB(data2,'match');
    writeInDB(data3,'match');
    writeInDB(data4,'match');
    writeInDB(data5,'match');
    writeInDB(data6,'match');
    writeInDB(data7,'match');
    writeInDB(data8,'match');
    writeInDB(data9,'match');
    writeInDB(data10,'match');
    writeInDB(data11,'match');
    writeInDB(data12,'match');
    writeInDB(data13,'match');
    writeInDB(data14,'match');
    writeInDB(data15,'match');
    writeInDB(data16,'match');
}

//writeMatches();

// Funcion para Crear tablas de partidos de manera dinamica y añado if para diferenciar mes de tablas distintas

function createTableMatches(element,snapshot){
    var tabla = document.getElementById("matches");
    var html = tabla.innerHTML;
    if (element.date.indexOf("9/") != -1){
       html = html + "<tr class='september'>";  
    }else {
        html = html + "<tr class='october d-none'>";
    }
	html = html + "<td>" + element.date + "</td>";
	html = html + "<td>" + element.teams + "</td>";
	html = html + "<td><a onclick='showDivMap(" + element.map + ")'><i class='fas fa-map-marked-alt'></i></a></td>";
	html = html + "<td>" + element.time + "</td>";
    html = html + "<td><i class='chat far fa-comments d-none' onclick='showDivChat(pageChat);setMatchId(\""+snapshot+"\");readText();'></i></td>";
	html = html + "</tr>";
	tabla.innerHTML = html;
}
getFromDB('match');

// Funcion para crear tabla de chat y añado if para diferenciar usuario que escribe mensaje a traves del email

function createTableChat(element){
    var tabla = document.getElementById('chatContainer');
    var html = tabla.innerHTML;
    var myDivClass = "";
    var myDivClass2 = "";
    var myDivClass3 = "";
    if(userEmail == element.userEmail){
        myDivClass = "myMessageRight";
        myDivClass2 = "littleTextLeft";
        myDivClass3 = "textRight";
    }else{
        myDivClass = "myMessageLeft";
        myDivClass2 = "littleTextRight";
        myDivClass3 = "textLeft";
    }
    html = html + "<div class='card "+myDivClass+"'>";
    html = html + "<span class='"+myDivClass3+"'>" + element.message + "</span>";
    html = html + "<div class='"+myDivClass2+"'>";
    html = html + "<span>" + element.author + "</span>&nbsp;&nbsp;";
    html = html + "<span>" + element.time + "</span>";
    html = html + "</div>";
    html = html + "</div>";
    tabla.innerHTML = html;
}

//Funcion para cuando pinchas en flecha derecha mostrar datos solo de tabla Septiembre

function clickRight() {
    var sept = document.getElementsByClassName('september');  
    for(var i = 0; i < sept.length; i++){
        sept[i].classList.add("d-none");
    }
    
    var oct = document.getElementsByClassName('october');
    for(var i = 0; i < oct.length; i++){
        oct[i].classList.remove("d-none");
    }
}

//Funcion para cuando pinchas en flecha derecha mostrar datos solo de tabla Octubre

function clickLeft() {
    var oct = document.getElementsByClassName('october');
    for(var i=0;i<oct.length;i++){
        oct[i].classList.add("d-none");
    }
    
    var sept = document.getElementsByClassName('september');  
    for(var i=0;i<sept.length;i++){
        sept[i].classList.remove("d-none");
    }
}

// Funcion para cuando haces LogIn esconder el boton y que aparezca el de LogOut y los iconos de chat

function logIn() {
    firebaseAuth();
    document.getElementById("logIn").classList.add("d-none");
    document.getElementById("logOut").classList.remove("d-none");
    document.getElementById("chat").classList.remove("d-none");
    var chat = document.getElementsByClassName('chat');
    for (var i=0; i < chat.length; i++){
        chat[i].classList.remove("d-none");
    }
}

// Funcion para cuando haces Log Out esconder iconos de char y boton LogOut y que aparezca el de LogIn

function logOut() {
    firebaseLogOut();
    document.getElementById("logOut").classList.add("d-none");
    document.getElementById("logIn").classList.remove("d-none");
    document.getElementById("chat").classList.add("d-none");
    var chat = document.getElementsByClassName('chat');
    for (var i=0; i < chat.length; i++){
        chat[i].classList.add("d-none");
    }
}


function setMatchId(matchId){
    matchIdActual = matchId;
}


//Funcion para agarrar el valor del texto e imprimirlo en consola.

function sendText() {
    var msg = document.getElementById("textCamp").value;
    msg = msg.trim(); //Trim para borrar espacios en blanco
    var fecha = new Date();
    var time = fecha.getHours()+":"+fecha.getMinutes()+":"+fecha.getSeconds();
    console.log(time);
    var data = {
        author: userName,
        message: msg,
        time: time,
        userEmail: userEmail,
        matchId: matchIdActual
    }
// If para saber si el mensaje que nos llega tiene un tamaño mayor a 0
    if (msg.length > 0){
        writeInDB(data,'chat');
    }
    document.getElementById("textCamp").value = ""; //Inicializamos campo de texto en vacio cada vez que pulsemos boton de enviar.
}


//¿?
function readText(){
    document.getElementById('chatContainer').innerHTML = "";// borra y deja vacio ChatContainer al hacer click para los diferentes chat de cada partido.
    getFromDBFiltered('chat', matchIdActual);//cogemos la tabla q queremos del chat para q filtre por partido al q se le haga click por macthId
}




/////////////////////METODOS GENERICOS PARA ACCEDER SOBRE FIREBASE/////////////////////////////////////////////


//Le pasamos 2 parametros a la función, una variable con el objeto que queremos guardar, y un string con el nombre de la tabla.
function writeInDB(data,table) {
  //Cogemos una nueva clave de una tabla para que se pueda subir.
  var newKey = firebase.database().ref().child(table).push().key;

  //Preparamos los updates que se van a hacer, indicando, la tabla, la clave que se ha generado y por último le pasamos los datos
  var updates = {};
  updates['/'+table+'/' + newKey] = data;

  //Se ejecutan todos los updates que hemos prepardo anteriormente.
  return firebase.database().ref().update(updates);
}

//Le pasamos la tabla de la que queremos coger los datos
function getFromDB(table){
	//Hacemos la llamada a la tabla que queremos coger y en ref se guarda la tabla 
	var ref = firebase.database().ref(table);
	//Teniendo en ref la tabla, accedemos a cada una de las keys (alfanumericas) que se han creado
	ref.orderByKey().on("child_added", function(snapshot) {
		var elemt = {}
		//Accedemos a cada una de las keys cogiendo el siguiente nivel que es el que tiene los datos
		snapshot.forEach(function(childSnapshot) {
			//Utilizamos el objeto que se ha creado arriba y guardamos los valores en cada una de las keys
			elemt[childSnapshot.key]= childSnapshot.val();
		});
		//Si la tabla que hemos solicitado es usuarios llamamos a la creación de las lineas de usuario con cada uno de los elementos.
		//Esto se hace así para que se ejecute cuando recibe los datos y sea de forma asincrona
		if(table == "match"){
            createTableMatches(elemt,snapshot.key);
        }
	});
}

//A esta función le pasamos una tabla(chat) y un matchId para que nos filtre el chat por ese partido concreto
function getFromDBFiltered(table, matchId){
	//Hacemos la llamada a la tabla que queremos coger y en ref se guarda la tabla 
	var ref = firebase.database().ref(table);
	//Teniendo en ref la tabla, accedemos a cada una de las keys (alfanumericas) que se han creado
	ref.orderByKey().on("child_added", function(snapshot) {
		var elemt = {}
		//Accedemos a cada una de las keys cogiendo el siguiente nivel que es el que tiene los datos
		snapshot.forEach(function(childSnapshot) {
			//Utilizamos el objeto que se ha creado arriba y guardamos los valores en cada una de las keys
			elemt[childSnapshot.key]= childSnapshot.val();
		});
		//Si la tabla que hemos solicitado es usuarios llamamos a la creación de las lineas de usuario con cada uno de los elementos.
		//Esto se hace así para que se ejecute cuando recibe los datos y sea de forma asincrona
		if(matchId == elemt.matchId){
            createTableChat(elemt);
        }
	});
}

//Metodo que autentifica el usuario para poder ejecutar
function firebaseAuth(){
  var provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider);
  var user = firebase.auth().currentUser;
  userName = user.displayName;
  userEmail = user.email;
}


//Funcion para hacer LogOut:
function firebaseLogOut(){
  firebase.auth().signOut();
}

