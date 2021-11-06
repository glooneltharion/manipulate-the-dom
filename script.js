var names = ["Samuel", "Lucia", "Michal", "Patrik" ];


names.forEach((element) => $('.item').append(
    " " + "<strong>" + element + "</strong>"
  ) );

var additionalBlock = {
    title: "Added with javascript",
    text: "This block was added using JavaScript's jQuery library. How awesome!"
  };

$('body').append(
    "<h1>" + additionalBlock.title + "</h1>",
    "<p>" + additionalBlock.text + "</p>"
  );
