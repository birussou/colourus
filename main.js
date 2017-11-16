function writeLists() {

  config.forEach(function(element) { //Intial loop for the array of categories
    //Intial ul and li header
    //loop trough all the contents of the second array in the object
    console.log(element);
    document.write("<ul style='color:" + element.color + ";'>");
    document.write("<li>" + element.name + "</li>");
    element.listItems.forEach(function(item) { //each category list item
      document.write("<li");
      if (item.color != "parent") { //unique color check
        document.write(" style='color:" + item.color + ";'");
      }
      document.write("><a href='" + item.url + "'>" + item.name + "</a>");
      if (item.sup == "true") { //sup list check
        item.supInfo.forEach(function(info) { //sup list loop
          document.write("<a href='" + info.url + "'><sup class='small'>" + info.name + "</sup></a>");
        },)
      }
      document.write("</li>");
    }, );
    document.write("</ul>");
  }, this);
}
