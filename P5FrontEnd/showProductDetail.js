//je recupere la fin de l url en  variable
let params = (new URL(document.location)).searchParams;
let name = params.get('_id');
let url = windows.location.pathname;

//je verifie mes donnees 
if (url == "/" || url == "index.html") {
    
}
