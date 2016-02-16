/**
 * Created by Stéphanie on 16/02/2016.
 */

function getXMLHttpRequest() {
    var xhr = null;

    if(window.XMLHttpRequest || window.ActiveXObject) {

//Pour les version < internet explorer 7
        if(window.ActiveXObject){
            try {
                xhr = new ActiveXObject("Msxml2.XMLHTTP");
            } catch (e) {
                xhr = new ActiveXObject("Microsoft.XMLHTTP");
            }
        } else {
            //Instancie un new objet
            xhr = new XMLHttpRequest();
        }
    } else {
        alert("Votre navigateur ne supporte pas l'object XMLHttpRequest...");
        return null;
    }
    return xhr;
}

//POur instancier un nouveau XHR, il faut :

//var xhr = getXMLHttpRequest();