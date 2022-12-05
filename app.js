let selectedColor;

window.onload = function(){
    init();
}

function init(){
    let colorChip = ["#f89b00", "#f7e600", "#7dbad5", "#e091a9", "#86e6c2", "#81c147"];
    let tag = "";
    for(i = 0; i < colorChip.length; i++){
        tag += "<div id="+colorChip[i]+" class='colorBox' onclick='colorSet(this)'></div>";
    }
    document.getElementById("colorList").innerHTML = tag;
    colorBoxList = document.getElementsByClassName("colorBox");
  for(i=0; i<colorBoxList.length; i++){
    colorBoxList[i].style.background = colorBoxList[i].id;  //id인 색상명을 colorBox의 배경색으로 지정해주기
  }
}

// onclick event
function colorSet(colorPick){
  document.querySelector("body").style.background = colorPick.id;  //배경색을 선택한 색상박스의 id 값으로 지정해주기

  if(selectedColor != null){  
    document.getElementById(selectedColor).className = document.getElementById(selectedColor).className.replace("selected", "");
  }
  document.getElementById(colorPick.id).className += " selected";
  selectedColor = colorPick.id;
}