// fetch API or Method
// basically fetch can be used for to fetch the data from external API or Pages.
// fetch internally uses promise concept.

fetch("header.html")
  .then((res) => {
    return res.text();
  })
  .then((data) => {
    document.getElementById("header-container").innerHTML = data;
  })
  .catch((err) => {
    console.error("Something went wrong", err);
  })
  .finally(console.log("Success"));

fetch("footer.html")
  .then((res) => {
    return res.text();
  })
  .then((data) => {
    document.getElementById("footer-container").innerHTML = data;
  })
  .catch((err) => {
    console.error("Something went wrong", err);
  })
  .finally(console.log("Success"));
