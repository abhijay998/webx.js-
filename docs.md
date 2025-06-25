
# **Documentation [Webx.js]**
## **Overview**
#### Webx.js is a library with goal to make dynamic web pages with less effort and Simplicity Webx.js is a Javascript based library that when combined it can be used to write Logic Style and Markup together like this
`JS
for(i = 0; i <= 10; i++) {
  h1(i, root);
}`

this simple code can make 10 h1 elements and with the innerHTML as i -
1
2
3
4
5
6
7
8
9
10

It has features of Local Storage Json Storage and I am are currently working to add index DB storage too an it has support of many JS libraries like Tailwind CSS and Three.js and others It also can track key event listeners with ease - 
```JS
webx.keyEvent({
  key: 'UpArrow',
  keyDown: true,
  eventCode: function () {
    h1("you pressed Up Arrow Key!", root);
  } 
});
```

### Installation
Create a HTML file like this - 
```HTML
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Webx Project</title>
</head>
<body>
    <div id="root"></div>
    <script src="https://abhijay998.github.io/Webx-cdn/webx.js"> <!--don't move this-->
    <script src="index.js"></script>
</body>
</html>
```
### **and then you have to make a Index.js file in the same folder**
```JS
// you can leave this empty or type the clicker code just to test if the library is working
let clicks = 0;
const click = h1(clicks, root)

button(`<h1>click me</h1>`, root, function () {
    clicks += 1;
    click.innerHTML = clicks;
});
```
And run your project by opening the HTML file in the browser or using the live server extension if you are in vs code
# **Utility Functions**
The core of this library are the utility functions they help to make html elements like `h1("Hi!", root);` 
they are available for some tags only but if want some unique or make your own tags or want to get other tags you can use Webx.createElement() method but we will discuss it later in this Docs page right now you have understand the syntax of this Utitlity function - 
``` JS
h1("inner html", parent, AtrributeName, AtrributeValue, Style); 

// here now you can also type a integer value or others in the para meter of innerHTML the following syntax is applicable for all the h1 to h6 elements 
/* 
This code generates a H1 inside the DOM the parent is only __Argument__  that is necessary
the parent can be either body or root or a elements Utility function like the following code
*/

const Container = div('', root);
h1("hello world", Container) // this works
``` 
## **innerHTML Dynamics**
you can even add JS in the of element by using template strings (`` // backticks) and template literals ( ${} ) - 
``` JS
i = 0;
h1(`i = ${i}`, root); // output = <h1>i = 0</h1> 
```
this can be used in for loops like - 
``` JS
for(i = 0; i <= 10; i++) {
   h1(`i = ${i}`, root);
}
```
If you want you can add multi-line HTML like this - 

```JS
h1(`Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur blanditiis itaque alias reprehenderit 
numquam molestiae quis optio laborum quisquam voluptatum aliquam saepe autem recusandae perferendis, eos corporis, 
velit, repudiandae officiis!`, root);
```
### other utility Functions work like this - 
```JS
button(Html, parent, clickEventCode, attributeName, AtrributeValue, style); 
// inside click event code you can pass in arrow functions or use them like this - 
button("click me", root, function () {
   h1("hello world", root); // this will generate a h1 every time you click the button
});

div(Html, parent, event, EventCode, attributeName, AtrributeValue, style);
// now in event you have to specify the type of event

form(Html, parent, action, event, EventCode, attributeName, AtrributeValue, style);
// this is form element which has a additional atrribute called action

p(Html, parent, attributeName, AtrributeValue, style);
img(src, alt, parent, event, EventCode, attributeName, AtrributeValue, style);

a(Html, parent, href, attributeName, AtrributeValue, event, EventCode, style);
/* you can put a button in side the a to make the button help navigate */
a(`<button>Hello</button>`, root,'./index.html'); // or -

const link = a(``, root, './index.html');
button("hello", link); 

input(parent, type, placeholder, attributeName, AtrributeValue, event, EventCode, style);
// in type enter the type of input

const UsernameInp = input(root, "text", "Enter Username");
const username = UsernameInp.value;
console.log(username);
```
## **Pre-defined Parents**
There are some _Pre-defined_ parents like - body and root { root: the div element in body with Id root }
`const root = document.getElementById("root");
const body = document.body;`

# Utility functions (Which make your code short) - 
these utility functions have no such uniqueness as they are met just to make some pre-defined JS functions/methods short like - 
```JS
getById(id);
getByClass(className);
getByTag(tagName);
getByQS(selector);
println(ThingWhichYouWantToPrint);
```

# **Webx.js methods**
The webx.js object consists of some core features of the library like storage, live key event's and creation of elements let us start with create element - 

```JS
// create your own element or use some other ones which are not available as utility functions 
let n = 0
webx.createElement({
  tag: "div", // you can write any tag name you want like - br, footer, header, nav, etc. [also type your tag name => "ContainerTag"]
  parent: root,
  html: "hello world",
  style: "background-color: white;",
  event: "click",
  eventCode: function () {
    n = n + 1;
    h1(`you clicked me ${n} times`, root);
  }, 
  attribute: {
    key: "class",
    value: "text-white text-2xl"
  }
});
```

next for key event listeners - 
```JS
const message = div(``, root);
webx.keyEvent({
  key: 'UpArrow',
  keydown: true,
  eventCode: function () {
   message.innerHTML = "you pressed up arrow key";
  }
}); // if up arrow is pressed do eventCode

webx.keyEvent({
  key: 'UpArrow',
  keydown: true,
  eventCode: function () {
   message.innerHTML = "you released up arrow key"
  }
}); // if up arrow is released do eventCode
```
Next is local Storage there are 2 types of them local or JSON + local will soon add indexedDB in the newer versions let use explore both of them - 
```JS
const Display = h1(``, root); // ths will be used to show user data
const UsernameInp = input(root, "text", "Enter Username");
const EmailInp = input(root, "text", "Enter Email");
const Username = UsernameInp.value; // we will use this for local storage
const Email = EmailInp.value;

// let us first do JSON storage
const buttonJSONSubmit = button("Submit(JSON)", root, function () {

  const ObjectForJSON = {
    username: UsernameInp.value,
    email: EmailInp.value,
  } 
  webx.Storage.Json.Store({
    JsonObject: ObjectForJSON,
    key: "UserData" // our storage key name
  });
});

// now for getting the user data
const buttonJSONget = button("Show(JSON)", root, function () {
  const Data = webx.Storage.Json.Get({
    TitleKey: "UserData",
  });

  Display.innerHTML = `username: ${Data.username}, email: ${Data.email}`;
});

/*
there are other methods to like - 
ClearAll: "clears all the data",
Webx.Storage.Json.ClearALL();

RemoveData: "remove a specific item",
Webx.Storage.Json.RemoveData({
  TitleKey: keyName,
});
 */

// now for local storage

const buttonLocalSubmit = button("Submit(Local)", root, function () {
  webx.Storage.Local.Add({
    key: "Username",
    value: UsernameInp.value
  });
  webx.Storage.Local.Add({
    key: "Email",
    value: EmailInp.value
  });
});

const buttonLocalGet = button("Submit(Get)", root, function () {
  const UsernameDATA = webx.Storage.Local.GetItem("Username"); // params => key
  const EmailDATA = webx.Storage.Local.GetItem("Email");
  Display.innerHTML = `username: ${UsernameDATA}, email: ${EmailDATA}`;
});

/* 
other methods - 
webx.Storage.Local.Clear();
webx.Storage.Local.lengthItems();
webx.Storage.Local.Reset(key, value);
webx.Storage.Local.Remove(key);
 */

```
# Components
you can make reusable components just like this - 

```JS
// file name = CARD.JS
// card component
function card({ name, info, bgColor, parent }) {
 const Card = div(``, parent, '', function () { null }, "class", `${bgColor}Card`); 
 /* you can use dynamic CSS for color Red => .RedCard, for Blue => .BlueCard etc. .BlueCard class may have code to make the 
    card blue etc. or use tailwindCss like "class", `bg-{bgColor}-950` or add shade param to fully automate the selection
    "class", `bg-{bgColor}-${shade}`
 */

 const Title = h1(name, Card);
 const infoText = p(info, Card);

 return Card();
}
```

_*In Your HTML*_ add the script tag for this file _*before index.js (main JS file) file's tag*_

```HTML
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="abhijay998.github.io/webx-cdn/webx.min.js">
    <title>Webx Project</title>
</head>
<body>
    <div id="root"></div>
</body>
    <script src="./components/card.js"></script> 
    <!-- you can make a new folder of components to make the project folder tree clean -->
    <script src="index.js"></script>
</html>
```
and this is how you can use the component in index.js file - 

```JS
card({
 name: "Abhijay",
 info: "I love coding",
 bgColor: "sky",
 parent: root
});

card({
 name: "John Doe",
 info: "Example TEXT",
 bgColor: "Blue",
 parent: root
});

// and you can add more
```

# **_Thanks!_**
