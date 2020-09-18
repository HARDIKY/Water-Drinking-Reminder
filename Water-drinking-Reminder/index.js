document.getElementById("yewalebutton").addEventListener("click", remind);

function remind(){
  const minutes = parseInt(document.getElementById("num").value);

  if(isNaN(minutes)){
    console.log("It's not a number");
  }else{
    console.log(minutes);
    chrome.runtime.sendMessage({minutes}, function(response) {
      console.log(response);
    });
  }

  
}