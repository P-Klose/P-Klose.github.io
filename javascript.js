let medtin ='<div class="sub-list"><h3 onclick="medt_web()">Webtechnologie</h3><h3 onclick="medt_aud()">Audio</h3><h3 onclick="med_vid()">Video</h3><h3 onclick="medt_fot()">Fotografie</h3><h3 onclick="back()">Back</h3> </div>'
let medtweb='<div class="sub-list"><h3 onclick="medt_web()"style="background-color: #eb5e28;">Webtechnologie</h3><h3 onclick="medt_aud()">Audio</h3><h3 onclick="med_vid()">Video</h3><h3 onclick="medt_fot()">Fotografie</h3><h3 onclick="back()">Back</h3> </div><div style="height:60vh;width:100vw;display: flex;flex-direction: column;align-items: center;justify-content: center;"><h1 class="not-h1" style="text-align: center;">Sorry looks like this page <br>doesnt exist jet</h1><a onclick="default_sub()">Back to list</a></div>'
let medtaud='<div class="sub-list"><h3 onclick="medt_web()">Webtechnologie</h3><h3 onclick="medt_aud()"style="background-color: #eb5e28;">Audio</h3><h3 onclick="med_vid()">Video</h3><h3 onclick="medt_fot()">Fotografie</h3><h3 onclick="back()">Back</h3> </div><div style="height:60vh;width:100vw;display: flex;flex-direction: column;align-items: center;justify-content: center;"><h1 class="not-h1" style="text-align: center;">Sorry looks like this page <br>doesnt exist jet</h1><a onclick="default_sub()">Back to list</a></div>'
let medtvid='<div class="sub-list"><h3 onclick="medt_web()">Webtechnologie</h3><h3 onclick="medt_aud()">Audio</h3><h3 onclick="med_vid()"style="background-color: #eb5e28;">Video</h3><h3 onclick="medt_fot()">Fotografie</h3><h3 onclick="back()">Back</h3> </div><div style="height:60vh;width:100vw;display: flex;flex-direction: column;align-items: center;justify-content: center;"><h1 class="not-h1" style="text-align: center;">Sorry looks like this page <br>doesnt exist jet</h1><a onclick="default_sub()">Back to list</a></div>'
let medtfot='<div class="sub-list"><h3 onclick="medt_web()">Webtechnologie</h3><h3 onclick="medt_aud()">Audio</h3><h3 onclick="med_vid()">Video</h3><h3 onclick="medt_fot()"style="background-color: #eb5e28;">Fotografie</h3><h3 onclick="back()">Back</h3> </div><div class="subjekt-main-content"><h2 class="subjekt-main-h2">Makrofotografie</h2><h3 class="subjekt-main-h3">See the world from another Perspectiv</h3><img class="makro-photo" src="../media/black.jpg" alt=""></div>'
let mathein=''

let notgiven ='<div class="sub-list"><h3 onclick="medt()">MEDT</h3><h3 onclick="syt()">SYT</h3><h3 onclick="sew()">SEW</h3><h3 onclick="math()">AM</h3><h3 onclick="cpr()">CPR</h3> </div><div style="height:60vh;width:100vw;display: flex;flex-direction: column;align-items: center;justify-content: center;"><h1 class="not-h1" style="text-align: center;">Sorry looks like this page <br>doesnt exist jet</h1><a onclick="default_sub()">Back to list</a></div>'
let backin = '<div class="sub-list"><h3 onclick="medt()">MEDT</h3><h3 onclick="syt()">SYT</h3><h3 onclick="sew()">SEW</h3><h3 onclick="math()">AM</h3><h3 onclick="cpr()">CPR</h3> </div>'



function back(){
    document.getElementById('subjekts-fill').innerHTML = backin;
}
function medt(){
    document.getElementById('subjekts-fill').innerHTML = medtweb;
}
function medt_web(){
    document.getElementById('subjekts-fill').innerHTML = medtweb;
}
function medt_aud(){
    document.getElementById('subjekts-fill').innerHTML = medtaud;
}
function med_vid(){
    document.getElementById('subjekts-fill').innerHTML = medtvid;
}
function medt_fot(){
    document.getElementById('subjekts-fill').innerHTML = medtfot;
}
function syt(){
    document.getElementById('subjekts-fill').innerHTML = notgiven;
}
function sew(){
    document.getElementById('subjekts-fill').innerHTML = notgiven;
}
function math(){
    document.getElementById('subjekts-fill').innerHTML = notgiven;
}
function cpr(){
    document.getElementById('subjekts-fill').innerHTML = notgiven;
}