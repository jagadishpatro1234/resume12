let login = document.getElementById("in")
let lgin = document.getElementById("inn")
let ls = document.getElementById("ls")
let imm = document.getElementById("imm")
let im = document.getElementById("im")
let up = document.getElementById("up")
let upp = document.getElementById("upp")
let bx = document.getElementById("sign")
let innn = document.getElementById("innn")
let box = document.getElementById("log")
let lock = document.getElementById("lock")
let unlock = document.getElementById("unlock")
let tt = document.getElementById("tt")
let tet = document.getElementById("tet")
let loc = document.getElementById("loc")
let unloc = document.getElementById("unloc")


login.addEventListener("click", function(){
    box.style.display="block"
    bx.style.display="none"
    ls.style.display="block"
})
lgin.addEventListener("click", function(){
    bx.style.display="none"
    box.style.display="block"
    ls.style.display="block"
})
imm.onclick = function(){
    ls.style.display="none"
}
im.onclick = function(){
    ls.style.display="none"
}
up.onclick = function(){
    bx.style.display="block"
    ls.style.display="block"
    box.style.display="none"
}
upp.onclick = function(){
    bx.style.display="block"
    ls.style.display="block"
    box.style.display="none"
}
innn.onclick = function(){
    box.style.display="block"
    bx.style.display="none"
}
lock.onclick = function(){
    lock.style.display="none"
    unlock.style.display="block"
    tt.type="text"
}
unlock.onclick = function(){
    unlock.style.display="none"
    lock.style.display="block"
    tt.type="password"
}
loc.onclick = function(){
    loc.style.display="none"
    unloc.style.display="block"
    tet.type="text"
}
unloc.onclick = function(){
    unloc.style.display="none"
    loc.style.display="block"
    tet.type="password"
}