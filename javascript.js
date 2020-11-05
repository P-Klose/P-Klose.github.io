let medtweb =''
let notgiven ='<div style="height:100vh;with:100vw;display: flex;flex-direction: column;align-items: center;justify-content: center;"><h1 class="not-h1" style="text-align: center;">Sorry looks like this page <br>doesnt exist jet</h1><a onclick="default_sub()">Back to list</a></div>'
let defaultsub = '<h3 onclick="medt_web()">MEDT Webtechnologie</h3><h3 onclick="medt_aud()">MEDT Audio</h3><h3 onclick="medt_vid()">MEDT Video</h3><h3 onclick="medt_fot()">MEDT Foto</h3><h3 onclick="syt()">SYT</h3><h3 onclick="sew()">SEW</h3><h3 onclick="math()">Mathematik</h3><h3 onclick="cprsw()">CPR SW</h3>'



function default_sub(){
    document.getElementById('subjekts-fill').innerHTML = defaultsub;
}
function medt_web(){
    document.getElementById('subjekts-fill').innerHTML = medtweb;
}
function medt_aud(){
    document.getElementById('subjekts-fill').innerHTML = notgiven;
}
function medt_vid(){
    document.getElementById('subjekts-fill').innerHTML = notgiven;
}
function medt_fot(){
    document.getElementById('subjekts-fill').innerHTML = notgiven;
}
function syt(){
    document.getElementById('subjekts-fill').innerHTML = notgiven;
}
function sew(){
    document.getElementById('subjekts-fill').innerHTML = notgiven;
}
function cprsw(){
    document.getElementById('subjekts-fill').innerHTML = notgiven;
}