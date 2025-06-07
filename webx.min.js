/*!
 * WebX v1.0.0
 * Copyright © 2025 Abhijay Singh Meena
 * All rights reserved.
 * Unauthorized copying, modification, distribution, or reverse engineering prohibited.
 */

 
const root = document.getElementById("root");
const body = document.body;

function getById(id) {
    return document.getElementById(id);
}

function getByClass(className) {
    return document.getElementsByClassName(className);
}

function getByTag(tagName) {
    return document.getElementsByTagName(tagName);
}

function getByQS(selector) {
    return document.querySelector(selector);
}

function println(ThingWhichYouWantToPrint) {
    console.log(ThingWhichYouWantToPrint);
}

function h1(Html, parent, attributeName, AtrributeValue, style) {
    const h1_el = document.createElement("h1");
    h1_el.innerHTML = Html
    h1_el.setAttribute(attributeName, AtrributeValue);
    parent.appendChild(h1_el)
    h1_el.setAttribute("style", style);
    return h1_el;
}

function footer(Html, parent, attributeName, AtrributeValue, style) {
    const footer_el = document.createElement("footer");
    footer_el.innerHTML = Html
    footer_el.setAttribute(attributeName, AtrributeValue);
    parent.appendChild(footer_el)
    footer_el.setAttribute("style", style);
    return footer_el;
}

function h2(Html, parent, attributeName, AtrributeValue, style) {
    const h2_el = document.createElement("h2");
    h2_el.innerHTML = Html
    h2_el.setAttribute(attributeName, AtrributeValue);
    parent.appendChild(h2_el);
    h2_el.setAttribute("style", style);
    return h2_el;
}

function h3(Html, parent, attributeName, AtrributeValue, style) {
    const h3_el = document.createElement("h3");
    h3_el.innerHTML = Html
    h3_el.setAttribute(attributeName, AtrributeValue);
    parent.appendChild(h3_el)
    h3_el.setAttribute("style", style);
    return h3_el;
}

function h4(Html, parent, attributeName, AtrributeValue, style) {
    const h4_el = document.createElement("h4");
    h4_el.innerHTML = Html
    h4_el.setAttribute(attributeName, AtrributeValue);
    parent.appendChild(h4_el);
    h4_el.setAttribute("style", style);
    return h4_el
}

function h5(Html, parent, attributeName, AtrributeValue, style) {
    const h5_el = document.createElement("h5");
    h5_el.innerHTML = Html
    h5_el.setAttribute(attributeName, AtrributeValue);
    parent.appendChild(h5_el)
    h5_el.setAttribute("style", style);
    return h5_el;
}

function h6(Html, parent, attributeName, AtrributeValue, style) {
    const h6_el = document.createElement("h6");
    h6_el.innerHTML = Html;
    h6_el.setAttribute(attributeName, AtrributeValue);
    parent.appendChild(h6_el);
    h6_el.setAttribute("style", style);
    return h6_el;
}

function button(Html, parent, clickEventCode, attributeName, AtrributeValue, style) {
    const button_el = document.createElement("button");
    button_el.innerHTML = Html
    button_el.setAttribute(attributeName, AtrributeValue);
    parent.appendChild(button_el);
    button_el.setAttribute("style", style);
    button_el.addEventListener("click", function () {
        clickEventCode();
    });
    return button_el;
}

function div(Html, parent, event, EventCode, attributeName, AtrributeValue, style) {
    const div_el = document.createElement("div");
    div_el.innerHTML = Html;
    div_el.setAttribute(attributeName, AtrributeValue);
    parent.appendChild(div_el);
    div_el.setAttribute("style", style);
    div_el.addEventListener(event, function () {
        EventCode();
    });
    return div_el;
}

function container(Html, parent, event, EventCode, attributeName, AtrributeValue, style) {
    const container_el = document.createElement("div");
    container_el.innerHTML = Html;
    container_el.setAttribute(attributeName, AtrributeValue);
    container_el.setAttribute('class', 'white-container')
    parent.appendChild(container_el);
    container_el.setAttribute("style", style);
    container_el.addEventListener(event, function () {
        EventCode();
    });
    return container_el;
}

function containerGrad(Html, parent, event, EventCode, attributeName, AtrributeValue, style) {
    const containerGrad_el = document.createElement("div");
    containerGrad_el.innerHTML = Html;
    containerGrad_el.setAttribute(attributeName, AtrributeValue);
    containerGrad_el.setAttribute('class', 'white-container-grad')
    parent.appendChild(containerGrad_el);
    containerGrad_el.setAttribute("style", style);
    containerGrad_el.addEventListener(event, function () {
        EventCode();
    });
    return containerGrad_el;
}

function form(Html, parent, action, event, EventCode, attributeName, AtrributeValue, style) {
    const form_el = document.createElement("form");
    form_el.innerHTML = Html;
    form_el.setAttribute(attributeName, AtrributeValue);
    form_el.setAttribute("action", action);
    parent.appendChild(form_el);
    form_el.setAttribute("style", style);
    form_el.addEventListener(event, function () {
        EventCode();
    });
    return form_el;
}

function p(Html, parent, attributeName, AtrributeValue, style) {
    const p_el = document.createElement("p");
    p_el.innerHTML = Html;
    p_el.setAttribute(attributeName, AtrributeValue)
    parent.appendChild(p_el);
    p_el.setAttribute("style", style);
    return p_el;
}


function center(Html, parent, attributeName, AtrributeValue, style) {
    const center_el = document.createElement("center");
    center_el.innerHTML = Html;
    center_el.setAttribute(attributeName, AtrributeValue)
    parent.appendChild(center_el);
    center_el.setAttribute("style", style);
    return center_el;
}


function img(src, alt, parent, event, EventCode, attributeName, AtrributeValue, style) {
    const img_el = document.createElement("img");
    img_el.setAttribute("src", src);
    img_el.setAttribute("alt", alt)
    img_el.setAttribute(attributeName, AtrributeValue);
    parent.appendChild(img_el);
    img_el.setAttribute("style", style);
    img_el.addEventListener(event, function () {
        EventCode();
    });
    return img_el;
}


function a(Html, parent, href, attributeName, AtrributeValue, event, EventCode, style) {
    const a_el = document.createElement("a");
    a_el.innerHTML = Html;
    a_el.setAttribute(attributeName, AtrributeValue);
    a_el.setAttribute("href", href);
    parent.appendChild(a_el);
    a_el.setAttribute("style", style);
    a_el.addEventListener(event, function () {
        EventCode();
    });
    return a_el;
}

function inputSt(parent, type, placeholder, attributeName, AtrributeValue, event, EventCode, style) {
    const preStyle = 'background-image: linear-gradient(57deg, blue, cyan); color: white; border-radius: 0.15cm; padding: 0.25cm; margin: 10px; border: none; outline: none;';
    let yourstyle = preStyle + style;
    const inputSt_el = document.createElement("input");
    inputSt_el.setAttribute(attributeName, AtrributeValue);
    inputSt_el.setAttribute('class', 'input-txt');
    inputSt_el.setAttribute("style", yourstyle);
    inputSt_el.setAttribute("placeholder", placeholder);
    inputSt_el.setAttribute("type", type);
    parent.appendChild(inputSt_el);
    inputSt_el.addEventListener(event, function () {
        EventCode();
    });
    return inputSt_el;
}

function input(parent, type, placeholder, attributeName, AtrributeValue, event, EventCode, style) {
    const input_el = document.createElement("input");
    input_el.setAttribute(attributeName, AtrributeValue);
    input_el.setAttribute("style", style);
    input_el.setAttribute("type", type);
    if(type == "text" || type == "password") {
        input_el.setAttribute("placeholder", placeholder);
    }
    parent.appendChild(input_el);
    input_el.addEventListener(event, function () {
        EventCode();
    });
    return input_el;
}

const webx = {
    createElement: function ({
        tag,
        parent = root,
        html = "",
        style = "",
        event = null,
        eventCode = null,
        attribute = {
            key: null,
            value: null
        }
    }) {
        const element = document.createElement(tag);
        element.innerHTML = html;
        if (attribute.key && attribute.value) {
            element.setAttribute(attribute.key, attribute.value);
        }
        if (style) {
            element.setAttribute("style", style);
        }
        if (parent) {
            parent.appendChild(element);
        }

        if (event && eventCode) {
            element.addEventListener(event, function () {
                eventCode();
            });
        }
        return element;
    },

    keyEvent: function ({ keyDown, keyUp, eventCode, key }) {
        if (keyDown == true && eventCode) {
            document.addEventListener("keydown", function (event) {
                if (event.key == key) {
                    eventCode();
                }
            });
        }
        if (keyUp == true && eventCode) {
            document.addEventListener("keyup", function (event) {
                if (event.key == key) {
                    eventCode();
                }
            });
        }
    },

    Storage: {
        Local: {
            Add: function ({key, value}) {
                window.localStorage.setItem(key, value);
            },
            Remove: function (key) {
                window.localStorage.removeItem(key);
            },
            Reset: function (value) {
                    localStorage.key = value;
            },

            Clear: function() {
                window.localStorage.clear()
            },

            GetItem: function (key) {
                return window.localStorage.getItem(key);
            },

            lengthItems: function () {
                return window.localStorage.length;
            }
        },

        Json: {
            Store: function({JsonObject, key = "Data"}) {
                const Data = JsonObject;
                const DataString = JSON.stringify(Data);
                localStorage.setItem(key, DataString);
            },

            Get: function({TitleKey}) {
                let DataLocal = localStorage.getItem(TitleKey);
                let DataJson = JSON.parse(DataLocal);
                return DataJson;
            },

            ClearAll: function() {
                localStorage.clear();
            },

            RemoveData: function({TitleKey}) {
                localStorage.removeItem(TitleKey);
            }
        }
    }
}
