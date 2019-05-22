var colors = JSON_DATA["colors"];
for (var i = 0; i < colors.length; i++) {
  var one = document.createElement("div");
  one.className= "one";
  one.id = "#"+colors[i].color;
  var namae = document.createElement("p");
  namae.className = "name";
  namae.textContent = colors[i].name;
  var iro = document.createElement("p");
  iro.className = "color";
  iro.textContent = "#"+colors[i].color;
  one.appendChild(iro);
  one.insertBefore(namae, iro);
  document.getElementById('main').appendChild(one);
}

var backgrounds = document.getElementsByClassName('one');
for (let i=0; i<backgrounds.length; i++){
  backgrounds[i].style.backgroundColor=backgrounds[i].id;
}
for(let i = 0; i < backgrounds.length; i++){
  backgrounds[i].addEventListener("click",() => {
    var text = document.getElementById(backgrounds[i].id);
    text=text.lastElementChild;
    var selection = window.getSelection();
    var range = document.createRange();
    range.selectNodeContents(text);
    selection.removeAllRanges();
    selection.addRange(range);
    document.execCommand('copy');
    selection.removeAllRanges();
    text.parentNode.classList.add( "copied" ) ;
    setTimeout('for(let j=0; j<document.getElementsByClassName("copied").length;j++){document.getElementsByClassName("copied")[j].classList.toggle( "copied" )}', 800);
  }, false);
}
