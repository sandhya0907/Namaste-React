const element = React.createElement(
    "h1", 
    {id:"title"}, 
    "Namaste React");
const element1=React.createElement(
    "h1",
    {
        className:"headername"},
    "header"
)
const container =React.createElement("div",
{
id:'container'
},[element,element1])
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container);
