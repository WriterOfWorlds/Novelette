function fillContent(content, loc) {
  try {
    if (typeof (content) + typeof (loc) != "stringstring") {
      console.log("Can't help you more than that, check your code.");
      throw "Value was not a string somewhere."
    }
    var parsedContent = "<p>";
    for (var i = 0; i < content.length; i++) {
      switch (content.charAt(i)) {
        case "~":
          parsedContent += "<br>";
          break;
        case "[":
          parsedContent += "<span>";
          break;
        case "]":
          parsedContent += "</span>";
          break;
        default:
          parsedContent += content.charAt(i);
      }
    }
    parsedContent += "</p>";
  }
  catch (err) {
    alert("Error: " + err)
  }
  document.getElementById(loc).innerHTML = parsedContent;
}

function fillImage(fileloc, loc, funct) {
  try {
    if (typeof (fileloc) + typeof (loc) != "stringstring") {
      console.log("Can't help you more than that, check your code.");
      throw "Value was not a string somewhere."
    }
    document.getElementById(loc).src = fileloc;
    if (funct != null) {
      switch (funct) {
        
      }
    } 
  }
  catch (err) {
    alert("Error: " + err)
  }
}

function fillTemplate(parameter, loc) {
  try {
    if (typeof (content) + typeof (loc) != "stringstring") {
      console.log("Can't help you more than that, check your code.");
      throw "Value was not a string somewhere."
    }
  }
  catch (err) {
    alert("Error: " + err)
  }
}

let dialogue = "Hey there kid! Pick up the [phone]!~Phone phone phone.~Thank you for petting a la the kitty! The cat thanks you very much."
fillImage("stockimage.jpg", "basicTemplateImage", "alert('asd')");
