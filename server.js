// home route
app.get("/", (req, res) => {
  res.render("base", { title: "Login System" });
});

app.listen(port, () => {
  console.log("Lostening to the server on http://localhost:3000");
});
