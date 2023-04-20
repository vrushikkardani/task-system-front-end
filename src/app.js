
const express = require("express");
const path = require("path");
const app = express();
const hbs = require("hbs");
const cookieParser = require("cookie-parser");

const port = process.env.PORT || 1300;

const static_path = path.join(__dirname, "../public")
const template_path = path.join(__dirname, "../templates/views")
const partials_path = path.join(__dirname, "../templates/partials")

app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(static_path));
app.set("view engine", "hbs");
app.set("views", template_path);
hbs.registerPartials(partials_path);



app.get("/", (req, res) => {
    res.render("first_login");
});
app.get("/employee", (req, res) => {
    res.render("employee");
});
app.get("/admin_dashbord", (req, res) => {
    res.render("admin_dashbord");
});
app.get("/admin_task", (req, res) => {
    res.render("admin_task");
});
app.get("/admin_add_user", (req, res) => {
    res.render("admin_add_user");
});
app.get("/admin_add_project", (req, res) => {
    res.render("admin_add_project");
});
app.get("/admin_add_client", (req, res) => {
    res.render("admin_add_client");
});


 



app.listen(port, () => {
    console.log(`server is running at port no ${port}`);
})





