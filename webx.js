 /*!
 * WebX v1.0.0
 * Copyright © 2025 Abhijay Singh Meena
 * All rights reserved.
 * Unauthorized copying, modification, distribution, or reverse engineering prohibited.
 */

/* read LICENSE */
 
 const root = document.getElementById("root");
const body = document.body;
const head = document.head;

function getById(id) {
    return document.getElementById(id);
}

function log(args, color, from) {
    if(from) { console.log(`%c[${from}]`, `color: ${color};`, args); }
    else { console.log('%c[webx]', `color: ${color};`, args); }
}

function err(error) {
    console.log(error)
}

function logS(args, color, style, from) {
    if(from) { console.log(`%c[${from}] ${args}`, `color: ${color}; ${style}`); }
    else { console.log(`%c[webx] ${args}`, `color: ${color}; ${style}`); }
}


function rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function appendMany(parent, ...children) {
    children.forEach(child => {
        if (child instanceof Node) parent.appendChild(child);
    });
}

function Time({
    hour = true,
    min = true,
    sec = true,
    day = false,
    month = false,
    year = false,
    dayOfWeek = false,
    timestamp = false
} = {}) {
    const time = new Date();

    const pad = n => n.toString().padStart(2, '0');

    const timeParts = [];
    if (hour) timeParts.push(pad(time.getHours()));
    if (min) timeParts.push(pad(time.getMinutes()));
    if (sec) timeParts.push(pad(time.getSeconds()));

    const dateParts = [];
    if (day) dateParts.push(pad(time.getDate()));
    if (month) dateParts.push(pad(time.getMonth() + 1));
    if (year) dateParts.push(time.getFullYear());

    let result = '';
    if (timeParts.length > 0) {
        result += timeParts.join(':');
    }

    if (dateParts.length > 0) {
        result += ` (${dateParts.join('/')})`;
    }

    if (dayOfWeek) {
        const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        result += ` (${weekDays[time.getDay()]})`;
    }

    if (timestamp) {
        result += ` ${time.getTime()}`;
    }

    return result;
}

function UpdateInTime({event, miliseconds}) {
    setInterval(event, miliseconds);
}

function show(el) {
    el.style.display = '';
}

function hide(el) {
    el.style.display = 'none';
}

function addClass(element, className) {
    element.classList.add(className);
}

function removeClass(element, className) {
    element.classList.remove(className);
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
    if (parent) {
        parent.appendChild(h1_el);
    }
    h1_el.setAttribute("style", style);
    return h1_el;
}

function footer(Html, parent, attributeName, AtrributeValue, style) {
    const footer_el = document.createElement("footer");
    footer_el.innerHTML = Html
    footer_el.setAttribute(attributeName, AtrributeValue);
    if (parent) {
        parent.appendChild(footer_el);
    }
    footer_el.setAttribute("style", style);
    return footer_el;
}

function h2(Html, parent, attributeName, AtrributeValue, style) {
    const h2_el = document.createElement("h2");
    h2_el.innerHTML = Html
    h2_el.setAttribute(attributeName, AtrributeValue);
    if (parent) {
        parent.appendChild(h2_el);
    }
    h2_el.setAttribute("style", style);
    return h2_el;
}

function h3(Html, parent, attributeName, AtrributeValue, style) {
    const h3_el = document.createElement("h3");
    h3_el.innerHTML = Html
    h3_el.setAttribute(attributeName, AtrributeValue);
    if (parent) {
        parent.appendChild(h3_el);
    }
    h3_el.setAttribute("style", style);
    return h3_el;
}

function h4(Html, parent, attributeName, AtrributeValue, style) {
    const h4_el = document.createElement("h4");
    h4_el.innerHTML = Html
    h4_el.setAttribute(attributeName, AtrributeValue);
    if (parent) {
        parent.appendChild(h4_el);
    }
    h4_el.setAttribute("style", style);
    return h4_el
}

function h5(Html, parent, attributeName, AtrributeValue, style) {
    const h5_el = document.createElement("h5");
    h5_el.innerHTML = Html
    h5_el.setAttribute(attributeName, AtrributeValue);
    if (parent) {
        parent.appendChild(h5_el);
    }
    h5_el.setAttribute("style", style);
    return h5_el;
}

function h6(Html, parent, attributeName, AtrributeValue, style) {
    const h6_el = document.createElement("h6");
    h6_el.innerHTML = Html;
    h6_el.setAttribute(attributeName, AtrributeValue);
    if (parent) {
        parent.appendChild(h6_el);
    }
    h6_el.setAttribute("style", style);
    return h6_el;
}

function p(Html, parent, attributeName, AtrributeValue, style) {
    const p_el = document.createElement("p");
    p_el.innerHTML = Html;
    p_el.setAttribute(attributeName, AtrributeValue)
    if (parent) {
        parent.appendChild(p_el);
    }
    p_el.setAttribute("style", style);
    return p_el;
}


function center(Html, parent, attributeName, AtrributeValue, style) {
    const center_el = document.createElement("center");
    center_el.innerHTML = Html;
    center_el.setAttribute(attributeName, AtrributeValue)
    if (parent) {
        parent.appendChild(center_el);
    }
    center_el.setAttribute("style", style);
    return center_el;
}

function div(Html, parent, event, EventCode, attributeName, AtrributeValue, style) {
    const div_el = document.createElement("div");
    div_el.innerHTML = Html;
    if (attributeName && AtrributeValue) {
        div_el.setAttribute(attributeName, AtrributeValue);
    }
    if (style) {
        div_el.setAttribute("style", style);
    }
    if (parent) {
        parent.appendChild(div_el);
    }
    if (event && EventCode) {
        div_el.addEventListener(event, function () {
            EventCode();
        });
    }
    return div_el;
}

function button(Html, parent, clickEventCode, attributeName, AtrributeValue, style) {
    const button_el = document.createElement("button");
    button_el.innerHTML = Html;
    if (attributeName && AtrributeValue) {
        button_el.setAttribute(attributeName, AtrributeValue);
    }
    if (style) {
        button_el.setAttribute("style", style);
    }
    if (parent) {
        parent.appendChild(button_el);
    }
    if (clickEventCode) {
        button_el.addEventListener("click", function () {
            clickEventCode();
        });
    }
    return button_el;
}

function container(Html, parent, event, EventCode, attributeName, AtrributeValue, style) {
    const container_el = document.createElement("div");
    container_el.innerHTML = Html;
    container_el.setAttribute('class', 'white-container');
    if (attributeName && AtrributeValue) {
        container_el.setAttribute(attributeName, AtrributeValue);
    }
    if (style) {
        container_el.setAttribute("style", style);
    }
    if (parent) {
        parent.appendChild(container_el);
    }
    if (event && EventCode) {
        container_el.addEventListener(event, function () {
            EventCode();
        });
    }
    return container_el;
}

function containerGrad(Html, parent, event, EventCode, attributeName, AtrributeValue, style) {
    const containerGrad_el = document.createElement("div");
    containerGrad_el.innerHTML = Html;
    containerGrad_el.setAttribute('class', 'white-container-grad');
    if (attributeName && AtrributeValue) {
        containerGrad_el.setAttribute(attributeName, AtrributeValue);
    }
    if (style) {
        containerGrad_el.setAttribute("style", style);
    }
    if (parent) {
        parent.appendChild(containerGrad_el);
    }
    if (event && EventCode) {
        containerGrad_el.addEventListener(event, function () {
            EventCode();
        });
    }
    return containerGrad_el;
}

function form(Html, parent, action, event, EventCode, attributeName, AtrributeValue, style) {
    const form_el = document.createElement("form");
    form_el.innerHTML = Html;
    if (attributeName && AtrributeValue) {
        form_el.setAttribute(attributeName, AtrributeValue);
    }
    if (action) {
        form_el.setAttribute("action", action);
    }
    if (style) {
        form_el.setAttribute("style", style);
    }
    if (parent) {
        parent.appendChild(form_el);
    }
    if (event && EventCode) {
        form_el.addEventListener(event, function () {
            EventCode();
        });
    }
    return form_el;
}

function img(src, alt, parent, event, EventCode, attributeName, AtrributeValue, style) {
    const img_el = document.createElement("img");
    img_el.setAttribute("src", src);
    img_el.setAttribute("alt", alt);
    if (attributeName && AtrributeValue) {
        img_el.setAttribute(attributeName, AtrributeValue);
    }
    if (style) {
        img_el.setAttribute("style", style);
    }
    if (parent) {
        parent.appendChild(img_el);
    }
    if (event && EventCode) {
        img_el.addEventListener(event, function () {
            EventCode();
        });
    }
    return img_el;
}

function a(Html, parent, href, attributeName, AtrributeValue, event, EventCode, style) {
    const a_el = document.createElement("a");
    a_el.innerHTML = Html;
    a_el.setAttribute("href", href);
    if (attributeName && AtrributeValue) {
        a_el.setAttribute(attributeName, AtrributeValue);
    }
    if (style) {
        a_el.setAttribute("style", style);
    }
    if (parent) {
        parent.appendChild(a_el);
    }
    if (event && EventCode) {
        a_el.addEventListener(event, function () {
            EventCode();
        });
    }
    return a_el;
}

function inputSt(parent, type, placeholder, attributeName, AtrributeValue, event, EventCode, style) {
    const preStyle = 'background-image: linear-gradient(57deg, blue, cyan); color: white; border-radius: 0.15cm; padding: 0.25cm; margin: 10px; border: none; outline: none;';
    let yourstyle = preStyle + style;
    const inputSt_el = document.createElement("input");
    inputSt_el.setAttribute("type", type);
    inputSt_el.setAttribute("placeholder", placeholder);
    inputSt_el.setAttribute('class', 'input-txt');
    if (attributeName && AtrributeValue) {
        inputSt_el.setAttribute(attributeName, AtrributeValue);
    }
    inputSt_el.setAttribute("style", yourstyle);
    if (parent) {
        parent.appendChild(inputSt_el);
    }
    if (event && EventCode) {
        inputSt_el.addEventListener(event, function () {
            EventCode();
        });
    }
    return inputSt_el;
}

function input(parent, type, placeholder, attributeName, AtrributeValue, event, EventCode, style) {
    const input_el = document.createElement("input");
    input_el.setAttribute("type", type);
    if (type === "text" || type === "password") {
        input_el.setAttribute("placeholder", placeholder);
    }
    if (attributeName && AtrributeValue) {
        input_el.setAttribute(attributeName, AtrributeValue);
    }
    if (style) {
        input_el.setAttribute("style", style);
    }
    if (parent) {
        parent.appendChild(input_el);
    }
    if (event && EventCode) {
        input_el.addEventListener(event, function () {
            EventCode();
        });
    }
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
        if (typeof html === 'string') {
            element.innerHTML = html;
        } else if (html instanceof HTMLElement) {
            element.appendChild(html);
        } else if (Array.isArray(html)) {
            html.forEach(item => {
                if (typeof item === 'string') {
                    const span = document.createElement('span');
                    span.innerHTML = item;
                    element.appendChild(span);
                } else if (item instanceof HTMLElement) {
                    element.appendChild(item);
                }
            });
        } if (Array.isArray(attribute)) {
            attribute.forEach(attr => {
                if (attr.key && attr.value) {
                    element.setAttribute(attr.key, attr.value);
                }
            });
        } else if (attribute.key && attribute.value) {
            element.setAttribute(attribute.key, attribute.value);
        } if (style) {
            element.setAttribute("style", style);
        } if (parent) {
            parent.appendChild(element);
        } if (event && eventCode) {
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
    },

    CreateApp: function ({ home, isParentReq = true }) {
        const App = document.createElement('div');
        App.appendChild(home)
        if(isParentReq) { body.appendChild(App); }
        return App;
    },

    animate: {
        fadeIn: ({ element, duration = 300, easing = 'ease-in-out', delay = 0 }) => {
            element.style.opacity = '0';
            element.style.transition = `opacity ${duration}ms ${easing}`;
            setTimeout(() => {
                element.style.opacity = '1';
            }, delay);
        },
    
        fadeOut: ({ element, duration = 300, easing = 'ease-in-out', delay = 0 }) => {
            element.style.opacity = '1';
            element.style.transition = `opacity ${duration}ms ${easing}`;
            setTimeout(() => {
                element.style.opacity = '0';
            }, delay);
        },
    
        slideUp: ({ element, duration = 300, easing = 'ease-in-out', delay = 0 }) => {
            const height = element.offsetHeight;
            element.style.transition = `height ${duration}ms ${easing}, opacity ${duration}ms ${easing}`;
            element.style.height = `${height}px`;
            element.style.opacity = '1';
            element.style.overflow = 'hidden';
            setTimeout(() => {
                element.style.height = '0';
                element.style.opacity = '0';
            }, delay);
        },
    
        slideDown: ({ element, duration = 300, easing = 'ease-in-out', delay = 0 }) => {
            element.style.height = '0';
            element.style.opacity = '0';
            element.style.overflow = 'hidden';
            element.style.transition = `height ${duration}ms ${easing}, opacity ${duration}ms ${easing}`;
            setTimeout(() => {
                const height = element.scrollHeight;
                element.style.height = `${height}px`;
                element.style.opacity = '1';
                setTimeout(() => {
                    element.style.height = 'auto';
                }, duration);
            }, delay);
        },
    
        bounce: ({ element, duration = 500, easing = 'ease-in-out', cycles = 2, amplitude = 10, delay = 0 }) => {
            const keyframes = `
                @keyframes bounce {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-${amplitude}px); }
                }
            `;
            const styleSheet = document.createElement('style');
            styleSheet.textContent = keyframes;
            document.head.appendChild(styleSheet);
            element.style.animation = `bounce ${duration}ms ${easing} ${cycles}`;
            setTimeout(() => {
                element.style.animation = '';
                styleSheet.remove();
            }, duration * cycles + delay);
        },
    
        scale: ({ element, duration = 300, easing = 'ease-in-out', scaleFrom = 0, scaleTo = 1, delay = 0 }) => {
            element.style.transform = `scale(${scaleFrom})`;
            element.style.transition = `transform ${duration}ms ${easing}`;
            setTimeout(() => {
                element.style.transform = `scale(${scaleTo})`;
            }, delay);
        },
    
        rotate: ({ element, duration = 300, easing = 'ease-in-out', degrees = 360, delay = 0 }) => {
            element.style.transform = `rotate(0deg)`;
            element.style.transition = `transform ${duration}ms ${easing}`;
            setTimeout(() => {
                element.style.transform = `rotate(${degrees}deg)`;
            }, delay);
        }
    },

    Navigate: function ({ Page, Mount = body, OnNavigation, animate = true, animation = 'fadeIn', duration = 500, delay = 0 }) {
        Mount.innerHTML = '';
        Mount.appendChild(Page);
        if(animate) {
            if (Mount.firstChild) {
                webx.animate.fadeOut({
                    element: Mount.firstChild,
                    duration: duration / 2,
                    easing: 'ease-out'
                });
            } const timeout = setTimeout(() => {
                Mount.innerHTML = '';
                Mount.appendChild(Page);
                webx.animate[animation]({
                    element: Page,
                    duration,
                    delay,
                    easing: 'ease-in-out'
                }); if (typeof OnNavigation === 'function') {
                    OnNavigation();
                }
                clearTimeout(timeout);
            }, duration / 2);
        } else {
            if (typeof OnNavigation === 'function') {
                OnNavigation();
            }
        }
    }
}

function Home({ scaf, style = '' }) {
    const Home = document.createElement('div');
    Home.setAttribute('id', 'Home');
    Home.appendChild(scaf);
    webx.createElement({
        tag: 'style',
        html: style,
        parent: document.head
    })
    return Home;   
}

function Scaf({ navBar, body }) {
    const Scaf = document.createElement('div');
    Scaf.setAttribute('id', 'Scaf');
    if (navBar instanceof Node) {
        Scaf.appendChild(navBar);
    }
    if (Array.isArray(body)) {
        body.forEach(item => {
            if (item instanceof Node) {
                Scaf.appendChild(item);
            } else {
                console.warn("Invalid DOM element in body:", item);
            }
        });
    } else {
        Scaf.appendChild(body)
    }
    return Scaf;
}

function Body({ Content = '' }) {
    const Body = document.createElement('div');
    Body.setAttribute("id", "Body")
    if (typeof Content === 'string') {
        Body.innerHTML = Content;
    } else if (Content instanceof HTMLElement) {
        Body.appendChild(Content);
    } else if (Array.isArray(Content)) {
        Content.forEach(item => {
            if (typeof item === 'string') {
                const span = document.createElement('span');
                span.innerHTML = item;
                Body.appendChild(span);
            } else if (item instanceof HTMLElement) {
                Body.appendChild(item);
            }
        });
    }
    return Body;   
}

const Colors = {
    slate: {
      50: '#f8fafc',
      100: '#f1f5f9',
      200: '#e2e8f0',
      300: '#cbd5e1',
      400: '#94a3b8',
      500: '#64748b',
      600: '#475569',
      700: '#334155',
      800: '#1e293b',
      900: '#0f172a',
      950: '#020617',
    },
    gray: {
      50: '#f9fafb',
      100: '#f3f4f6',
      200: '#e5e7eb',
      300: '#d1d5db',
      400: '#9ca3af',
      500: '#6b7280',
      600: '#4b5563',
      700: '#374151',
      800: '#1f2937',
      900: '#111827',
      950: '#030712',
    },
    zinc: {
      50: '#fafafa',
      100: '#f4f4f5',
      200: '#e4e4e7',
      300: '#d4d4d8',
      400: '#a1a1aa',
      500: '#71717a',
      600: '#52525b',
      700: '#3f3f46',
      800: '#27272a',
      900: '#18181b',
      950: '#09090b',
    },
    neutral: {
      50: '#fafafa',
      100: '#f5f5f5',
      200: '#e5e5e5',
      300: '#d4d4d4',
      400: '#a3a3a3',
      500: '#737373',
      600: '#525252',
      700: '#404040',
      800: '#262626',
      900: '#171717',
      950: '#0a0a0a',
    },
    stone: {
      50: '#fafaf9',
      100: '#f5f5f4',
      200: '#e7e5e4',
      300: '#d6d3d1',
      400: '#a8a29e',
      500: '#78716c',
      600: '#57534e',
      700: '#44403c',
      800: '#292524',
      900: '#1c1917',
      950: '#0c0a09',
    },
    red: {
      50: '#fef2f2',
      100: '#fee2e2',
      200: '#fecaca',
      300: '#fca5a5',
      400: '#f87171',
      500: '#ef4444',
      600: '#dc2626',
      700: '#b91c1c',
      800: '#991b1b',
      900: '#7f1d1d',
      950: '#450a0a',
    },
    orange: {
      50: '#fff7ed',
      100: '#ffedd5',
      200: '#fed7aa',
      300: '#fdba74',
      400: '#fb923c',
      500: '#f97316',
      600: '#ea580c',
      700: '#c2410c',
      800: '#9a3412',
      900: '#7c2d12',
      950: '#431407',
    },
    amber: {
      50: '#fffbeb',
      100: '#fef3c7',
      200: '#fde68a',
      300: '#fcd34d',
      400: '#fbbf24',
      500: '#f59e0b',
      600: '#d97706',
      700: '#b45309',
      800: '#92400e',
      900: '#78350f',
      950: '#451a03',
    },
    yellow: {
      50: '#fefce8',
      100: '#fef9c3',
      200: '#fef08a',
      300: '#fde047',
      400: '#facc15',
      500: '#eab308',
      600: '#ca8a04',
      700: '#a16207',
      800: '#854d09',
      900: '#713f12',
      950: '#422006',
    },
    lime: {
      50: '#f7fee7',
      100: '#ecfccb',
      200: '#d9f99d',
      300: '#bef264',
      400: '#a3e635',
      500: '#84cc16',
      600: '#65a30d',
      700: '#4d7c0f',
      800: '#3f6212',
      900: '#365314',
      950: '#1a2e05',
    },
    green: {
      50: '#f0fdf4',
      100: '#dcfce7',
      200: '#bbf7d0',
      300: '#86efad',
      400: '#4ade80',
      500: '#22c55e',
      600: '#16a34a',
      700: '#15803d',
      800: '#166534',
      900: '#14532d',
      950: '#052e16',
    },
    emerald: {
      50: '#ecfdf5',
      100: '#d1fae5',
      200: '#a7f3d0',
      300: '#6ee7b7',
      400: '#34d399',
      500: '#10b981',
      600: '#059669',
      700: '#047857',
      800: '#065f46',
      900: '#064e3b',
      950: '#022c22',
    },
    teal: {
      50: '#f0fdfa',
      100: '#ccfbf1',
      200: '#99f6e4',
      300: '#5eead4',
      400: '#2dd4bf',
      500: '#14b8a6',
      600: '#0d9488',
      700: '#0f766e',
      800: '#115e59',
      900: '#134e4a',
      950: '#042f2e',
    },
    cyan: {
      50: '#ecfeff',
      100: '#cffafe',
      200: '#a5f3fc',
      300: '#67e8f9',
      400: '#22d3ee',
      500: '#06b6d4',
      600: '#0891b2',
      700: '#0e7490',
      800: '#155e75',
      900: '#164e63',
      950: '#083344',
    },
    sky: {
      50: '#f0f9ff',
      100: '#e0f2fe',
      200: '#bae6fd',
      300: '#7dd3fc',
      400: '#38bdf8',
      500: '#0ea5e9',
      600: '#0284c7',
      700: '#0369a1',
      800: '#075985',
      900: '#0c4a6e',
      950: '#082f49',
    },
    blue: {
      50: '#eff6ff',
      100: '#dbeafe',
      200: '#bfdbfe',
      300: '#93c5fd',
      400: '#60a5fa',
      500: '#3b82f6',
      600: '#2563eb',
      700: '#1d4ed8',
      800: '#1e40af',
      900: '#1e3a8a',
      950: '#172554',
    },
    indigo: {
      50: '#eef2ff',
      100: '#e0e7ff',
      200: '#c7d2fe',
      300: '#a5b4fc',
      400: '#818cf8',
      500: '#6366f1',
      600: '#4f46e5',
      700: '#4338ca',
      800: '#3730a3',
      900: '#312e81',
      950: '#1e1b4b',
    },
    violet: {
      50: '#f5f3ff',
      100: '#ede9fe',
      200: '#ddd6fe',
      300: '#c4b5fd',
      400: '#a78bfa',
      500: '#8b5cf6',
      600: '#7c3aed',
      700: '#6d28d9',
      800: '#5b21b6',
      900: '#4c1d95',
      950: '#2e1065',
    },
    purple: {
      50: '#faf5ff',
      100: '#f3e8ff',
      200: '#e9d5ff',
      300: '#d8b4fe',
      400: '#c084fc',
      500: '#a855f7',
      600: '#9333ea',
      700: '#7e22ce',
      800: '#6b21a8',
      900: '#581c87',
      950: '#3b0764',
    },
    fuchsia: {
      50: '#fdf4ff',
      100: '#fae8ff',
      200: '#f5d0fe',
      300: '#f0abfc',
      400: '#e879f9',
      500: '#d946ef',
      600: '#c026d3',
      700: '#a21caf',
      800: '#86198f',
      900: '#701a75',
      950: '#4a044e',
    },
    pink: {
      50: '#fdf2f8',
      100: '#fce7f3',
      200: '#fbcfe8',
      300: '#f9a8d4',
      400: '#f472b6',
      500: '#ec4899',
      600: '#db2777',
      700: '#be185d',
      800: '#9d174d',
      900: '#831843',
      950: '#500724',
    },
    rose: {
      50: '#fff1f2',
      100: '#ffe4e6',
      200: '#fecdd3',
      300: '#fda4af',
      400: '#fb7185',
      500: '#f43f5e',
      600: '#e11d48',
      700: '#be123c',
      800: '#9f1239',
      900: '#881337',
      950: '#4c051e',
    },
  };


function SetMdTheme({primaryC, OnPrimaryC, BgC, OnBgC, SurfaceC, OnSurfaceC}) {
    return `
    :root {
        --md-sys-color-primary: ${primaryC};
        --md-sys-color-on-primary: ${OnPrimaryC};
        --md-sys-color-background: ${BgC};
        --md-sys-color-on-background: ${OnBgC};
        --md-sys-color-surface: ${SurfaceC};
        --md-sys-color-on-surface: ${OnSurfaceC};
      }
    `
}

function AddMaterial3Lib() {
    const fontLink = document.createElement('link');
    fontLink.rel = 'stylesheet';
    fontLink.href = 'https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap';
    document.head.appendChild(fontLink);

    const importMap = document.createElement('script');
    importMap.type = 'importmap';
    importMap.innerHTML = JSON.stringify({
        imports: {
            "@material/web/": "https://esm.run/@material/web/"
        }
    });
    document.head.appendChild(importMap);

    const moduleScript = document.createElement('script');
    moduleScript.type = 'module';
    moduleScript.innerHTML = `
        import '@material/web/all.js';
        import { styles as typescaleStyles } from '@material/web/typography/md-typescale-styles.js';
        document.adoptedStyleSheets.push(typescaleStyles.styleSheet);
    `;
    document.head.appendChild(moduleScript);
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
    const s = document.createElement('style');
    s.innerHTML = `md-icon {
        font-family: 'Material Symbols Outlined';
        font-weight: normal;
        font-style: normal;
        font-size: 24px;
        line-height: 1;
        letter-spacing: normal;
        text-transform: none;
        display: inline-block;
        white-space: nowrap;
        direction: ltr;
        -webkit-font-feature-settings: 'liga';
        -webkit-font-smoothing: antialiased;
    }`
    document.head.appendChild(s);
} function AddTailwindLib(callback) {
    const preloadLink = document.createElement('link');
    preloadLink.rel = 'preload';
    preloadLink.href = 'https://cdn.tailwindcss.com';
    preloadLink.as = 'script';
    document.head.appendChild(preloadLink);

    const script = document.createElement('script');
    script.src = 'https://cdn.tailwindcss.com';
    script.onload = () => {
        console.log('Tailwind CDN loaded successfully');
        if (callback) callback();
    };
    script.onerror = () => console.error('Failed to load Tailwind CDN');
    document.head.appendChild(script);
} function AddAll() {
    const fontLink = document.createElement('link');
    fontLink.rel = 'stylesheet';
    fontLink.href = 'https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap';
    document.head.appendChild(fontLink);

    const importMap = document.createElement('script');
    importMap.type = 'importmap';
    importMap.innerHTML = JSON.stringify({
        imports: {
            "@material/web/": "https://esm.run/@material/web/"
        }
    });
    document.head.appendChild(importMap);

    const moduleScript = document.createElement('script');
    moduleScript.type = 'module';
    moduleScript.innerHTML = `
        import '@material/web/all.js';
        import { styles as typescaleStyles } from '@material/web/typography/md-typescale-styles.js';
        document.adoptedStyleSheets.push(typescaleStyles.styleSheet);
    `;
    document.head.appendChild(moduleScript);
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
    const s = document.createElement('style');
    s.innerHTML = `md-icon {
    font-family: 'Material Symbols Outlined';
    font-weight: normal;
    font-style: normal;
    font-size: 24px;
    line-height: 1;
    letter-spacing: normal;
    text-transform: none;
    display: inline-block;
    white-space: nowrap;
    direction: ltr;
    -webkit-font-feature-settings: 'liga';
    -webkit-font-smoothing: antialiased;
}`
    document.head.appendChild(s);
    const script = document.createElement('script');
    script.src = 'https://cdn.tailwindcss.com';
    script.onload = () => {
        log('sucess', Colors.lime[500])
    };
    script.onerror = () => console.error('Failed to load Tailwind CDN');
    document.head.appendChild(script);
}


const DefualtColors = {
    primary: '#6750A4',
    onPrimary: '#FFFFFF',
    primaryContainer: '#EADDFF',
    onPrimaryContainer: '#21005D',
    secondary: '#625B71',
    onSecondary: '#FFFFFF',
    secondaryContainer: '#E8DEF8',
    onSecondaryContainer: '#1D192B',
    tertiary: '#7D5260',
    onTertiary: '#FFFFFF',
    tertiaryContainer: '#FFD8E4',
    onTertiaryContainer: '#31111D',
    error: '#B3261E',
    onError: '#FFFFFF',
    errorContainer: '#F2B8B5',
    onErrorContainer: '#410E0B',
    background: '#FFFBFE',
    onBackground: '#1C1B1F',
    surface: '#FFFBFE',
    onSurface: '#1C1B1F',
    surfaceVariant: '#E7E0EC',
    onSurfaceVariant: '#49454F',
    outline: '#79747E',
};

const colors = {
    red: {
      50: '#FFEBEE',
      100: '#FFCDD2',
      200: '#EF9A9A',
      300: '#E57373',
      400: '#EF5350',
      500: '#F44336',
      600: '#E53935',
      700: '#D32F2F',
      800: '#C62828',
      900: '#B71C1C',
      A100: '#FF8A80',
      A200: '#FF5252',
      A400: '#FF1744',
      A700: '#D50000',
    },
    pink: {
      50: '#FCE4EC',
      100: '#F8BBD0',
      200: '#F48FB1',
      300: '#F06292',
      400: '#EC407A',
      500: '#E91E63',
      600: '#D81B60',
      700: '#C2185B',
      800: '#AD1457',
      900: '#880E4F',
      A100: '#FF80AB',
      A200: '#FF4081',
      A400: '#F50057',
      A700: '#C51162',
    },
    purple: {
      50: '#F3E5F5',
      100: '#E1BEE7',
      200: '#CE93D8',
      300: '#BA68C8',
      400: '#AB47BC',
      500: '#9C27B0',
      600: '#8E24AA',
      700: '#7B1FA2',
      800: '#6A1B9A',
      900: '#4A148C',
      A100: '#EA80FC',
      A200: '#E040FB',
      A400: '#D500F9',
      A700: '#AA00FF',
    },
    deepPurple: {
      50: '#EDE7F6',
      100: '#D1C4E9',
      200: '#B39DDB',
      300: '#9575CD',
      400: '#7E57C2',
      500: '#673AB7',
      600: '#5E35B1',
      700: '#512DA8',
      800: '#4527A0',
      900: '#311B92',
      A100: '#B388FF',
      A200: '#7C4DFF',
      A400: '#651FFF',
      A700: '#6200EA',
    },
    indigo: {
      50: '#E8EAF6',
      100: '#C5CAE9',
      200: '#9FA8DA',
      300: '#7986CB',
      400: '#5C6BC0',
      500: '#3F51B5',
      600: '#3949AB',
      700: '#303F9F',
      800: '#283593',
      900: '#1A237E',
      A100: '#8C9EFF',
      A200: '#536DFE',
      A400: '#3D5AFE',
      A700: '#304FFE',
    },
    blue: {
      50: '#E3F2FD',
      100: '#BBDEFB',
      200: '#90CAF9',
      300: '#64B5F6',
      400: '#42A5F5',
      500: '#2196F3',
      600: '#1E88E5',
      700: '#1976D2',
      800: '#1565C0',
      900: '#0D47A1',
      A100: '#82B1FF',
      A200: '#448AFF',
      A400: '#2979FF',
      A700: '#2962FF',
    },
    lightBlue: {
      50: '#E1F5FE',
      100: '#B3E5FC',
      200: '#81D4FA',
      300: '#4FC3F7',
      400: '#29B6F6',
      500: '#03A9F4',
      600: '#039BE5',
      700: '#0288D1',
      800: '#0277BD',
      900: '#01579B',
      A100: '#80D8FF',
      A200: '#40C4FF',
      A400: '#00B0FF',
      A700: '#0091EA',
    },
    cyan: {
      50: '#E0F7FA',
      100: '#B2EBF2',
      200: '#80DEEA',
      300: '#4DD0E1',
      400: '#26C6DA',
      500: '#00BCD4',
      600: '#00ACC1',
      700: '#0097A7',
      800: '#00838F',
      900: '#006064',
      A100: '#84FFFF',
      A200: '#18FFFF',
      A400: '#00E5FF',
      A700: '#00B8D4',
    },
    teal: {
      50: '#E0F2F1',
      100: '#B2DFDB',
      200: '#80CBC4',
      300: '#4DB6AC',
      400: '#26A69A',
      500: '#009688',
      600: '#00897B',
      700: '#00796B',
      800: '#00695C',
      900: '#004D40',
      A100: '#A7FFEB',
      A200: '#64FFDA',
      A400: '#1DE9B6',
      A700: '#00BFA5',
    },
    green: {
      50: '#E8F5E9',
      100: '#C8E6C9',
      200: '#A5D6A7',
      300: '#81C784',
      400: '#66BB6A',
      500: '#4CAF50',
      600: '#43A047',
      700: '#388E3C',
      800: '#2E7D32',
      900: '#1B5E20',
      A100: '#B9F6CA',
      A200: '#69F0AE',
      A400: '#00E676',
      A700: '#00C853',
    },
    lightGreen: {
      50: '#F1F8E9',
      100: '#DCEDC8',
      200: '#C5E1A5',
      300: '#AED581',
      400: '#9CCC65',
      500: '#8BC34A',
      600: '#7CB342',
      700: '#689F38',
      800: '#558B2F',
      900: '#33691E',
      A100: '#CCFF90',
      A200: '#B2FF59',
      A400: '#76FF03',
      A700: '#64DD17',
    },
    lime: {
      50: '#F9FBE7',
      100: '#F0F4C3',
      200: '#E6EE9C',
      300: '#DCE775',
      400: '#D4E157',
      500: '#CDDC39',
      600: '#C0CA33',
      700: '#AFB42B',
      800: '#9E9D24',
      900: '#827717',
      A100: '#F4FF81',
      A200: '#EEFF41',
      A400: '#C6FF00',
      A700: '#AEEA00',
    },
    yellow: {
      50: '#FFFDE7',
      100: '#FFF9C4',
      200: '#FFF59D',
      300: '#FFF176',
      400: '#FFEE58',
      500: '#FFEB3B',
      600: '#FDD835',
      700: '#FBC02D',
      800: '#F9A825',
      900: '#F57F17',
      A100: '#FFFF8D',
      A200: '#FFFF00',
      A400: '#FFEA00',
      A700: '#FFD600',
    },
    amber: {
      50: '#FFF8E1',
      100: '#FFECB3',
      200: '#FFE082',
      300: '#FFD54F',
      400: '#FFCA28',
      500: '#FFC107',
      600: '#FFB300',
      700: '#FFA000',
      800: '#FF8F00',
      900: '#FF6F00',
      A100: '#FFE57F',
      A200: '#FFD740',
      A400: '#FFC400',
      A700: '#FFAB00',
    },
    orange: {
      50: '#FFF3E0',
      100: '#FFE0B2',
      200: '#FFCC80',
      300: '#FFB74D',
      400: '#FFA726',
      500: '#FF9800',
      600: '#FB8C00',
      700: '#F57C00',
      800: '#EF6C00',
      900: '#E65100',
      A100: '#FFD180',
      A200: '#FFAB40',
      A400: '#FF9100',
      A700: '#FF6D00',
    },
    deepOrange: {
      50: '#FBE9E7',
      100: '#FFCCBC',
      200: '#FFAB91',
      300: '#FF8A65',
      400: '#FF7043',
      500: '#FF5722',
      600: '#F4511E',
      700: '#E64A19',
      800: '#D84315',
      900: '#BF360C',
      A100: '#FF9E80',
      A200: '#FF6E40',
      A400: '#FF3D00',
      A700: '#DD2C00',
    },
    brown: {
      50: '#EFEBE9',
      100: '#D7CCC8',
      200: '#BCAAA4',
      300: '#A1887F',
      400: '#8D6E63',
      500: '#795548',
      600: '#6D4C41',
      700: '#5D4037',
      800: '#4E342E',
      900: '#3E2723',
    },
    grey: {
      50: '#FAFAFA',
      100: '#F5F5F5',
      200: '#EEEEEE',
      300: '#E0E0E0',
      400: '#BDBDBD',
      500: '#9E9E9E',
      600: '#757575',
      700: '#616161',
      800: '#424242',
      900: '#212121',
    },
    blueGrey: {
      50: '#ECEFF1',
      100: '#CFD8DC',
      200: '#B0BEC5',
      300: '#90A4AE',
      400: '#78909C',
      500: '#607D8B',
      600: '#546E7A',
      700: '#455A64',
      800: '#37474F',
      900: '#263238',
    },
    white: '#FFFFFF',
    black: '#000000',
    transparent: '#00000000',
};

function normalizeAttributes(...args) {
    const attrList = [];

    args.forEach(item => {
        if (!item) return;

        if (Array.isArray(item)) {
            item.forEach(attr => {
                if (attr && typeof attr.key === 'string') {
                    attrList.push(attr);
                }
            });
        } else if (typeof item === 'object') {
            for (const [key, value] of Object.entries(item)) {
                if (typeof key === 'string') {
                    attrList.push({ key, value });
                }
            }
        }
    });

    return attrList;
}

 function Button({
    type = 'filled',
    margin = 2,
    BorderRadius,
    html,
    Parent = null,
    eventC,
    attributes
}) {
    const btn = webx.createElement({
        tag: `md-${type}-button`,
        html: html,
        parent: Parent,
        attribute: normalizeAttributes(
            { key: 'class', value: `m-${margin}` },
            BorderRadius ? { key: 'class', value: `rounded-${BorderRadius}` } : null,
            attributes
        ),
        event: 'click',
        eventCode: () => {
            if (typeof eventC === 'function') eventC();
        }
    });

    return btn;
}

 function Icon({
    margin = 2,
    Name,
    attributes,
    Parent = null,
    eventC,
}) {
    const Ico = webx.createElement({
        tag: `md-icon`,
        html: Name,
        parent: Parent,
        attribute: normalizeAttributes(
            { key: 'class', value: `m-${margin}` },
            attributes
        ),
        event: 'click',
        eventCode: () => {
            if (typeof eventC === 'function') eventC();
        }
    });

    return Ico;
}

 function FAB({
    AriaLabel = "Edit",
    Icon = "edit",
    margin = 2,
    label,
    Parent = null,
    eventC,
    attributes
}) {
    const fb = webx.createElement({
        tag: `md-fab`,
        html: webx.createElement({
            tag: 'md-icon',
            html: Icon,
            attribute: { key: 'slot', value: 'icon' },
        }),
        parent: Parent,
        attribute: normalizeAttributes(
            { key: 'class', value: `m-${margin}` },
            label ? { key: 'label', value: label } : null,
            { key: 'aria-label', value: AriaLabel },
            attributes
        ),
        event: 'click',
        eventCode: () => {
            if (typeof eventC === 'function') eventC();
        }
    });

    return fb;
}

 function Loader({
    type = 'linear',
    Value,
    indeterminate = false,
    fourColor = false,
    buffer,
    Parent = null,
    attributes = {}
}) {
    const attrList = [];
    if (Value != null) {
        attrList.push({ key: 'value', value: Value });
    } if (indeterminate) {
        attrList.push({ key: 'indeterminate', value: 'true' });
    } if (buffer) {
        attrList.push({ key: 'buffer', value: buffer });
    } if (fourColor) {
        attrList.push({ key: 'four-color', value: 'true' });
    } if (attributes && typeof attributes === 'object') {
        if (Array.isArray(attributes)) {
            attributes.forEach(attr => {
                if (attr && typeof attr.key === 'string') {
                    attrList.push(attr);
                }
            });
        } else {
            for (const [key, value] of Object.entries(attributes)) {
                attrList.push({ key, value });
            }
        }
    }
    const element = document.createElement(`md-${type}-progress`);
    attrList.forEach(attr => {
        if (attr.value === '' || attr.value === true || attr.value === 'true') {
            element.setAttribute(attr.key, '');
        } else {
            element.setAttribute(attr.key, attr.value);
        }
    });

    if (Parent) Parent.appendChild(element);

    return element;
}

 function AppBar({
    title = '',
    leading = null,
    actions = [],
    backgroundColor = '',
    elevation = 0,
    Parent = null,
    attributes = []
}) {
    const children = [];
    if (leading) {
        const leadingSlot = webx.createElement({
            tag: 'div',
            attribute: { key: 'slot', value: 'navigationIcon' },
            html: leading
        });
        children.push(leadingSlot);
    }
    if (title) {
        const titleEl = webx.createElement({
            tag: 'div',
            attribute: { key: 'slot', value: 'title' },
            html: title
        });
        children.push(titleEl);
    }
    actions.forEach(action => {
        const actionEl = webx.createElement({
            tag: 'div',
            attribute: { key: 'slot', value: 'actionItems' },
            html: action
        });
        children.push(actionEl);
    });
    const classStr = `p-4 flex items-center justify-between ${backgroundColor ? `bg-${backgroundColor}` : `bg-white`} ${elevation ? `shadow-${elevation}` : ''}`;
    const attrList = [
        { key: 'class', value: classStr },
        ...Array.isArray(attributes) ? attributes : Object.entries(attributes).map(([key, value]) => ({ key, value }))
    ];

    const appbar = webx.createElement({
        tag: 'md-top-app-bar',
        attribute: attrList,
        parent: Parent,
        html: children
    });

    return appbar;
}

function applyAttributes(el, attributes) {
    if (!attributes) return;

    if (Array.isArray(attributes)) {
        attributes.forEach(({ key, value }) => {
            if (value === '' || value === true || value === 'true') {
                el.setAttribute(key, '');
            } else {
                el.setAttribute(key, value);
            }
        });
    } else if (typeof attributes === 'object') {
        for (const [key, value] of Object.entries(attributes)) {
            if (value === '' || value === true || value === 'true') {
                el.setAttribute(key, '');
            } else {
                el.setAttribute(key, value);
            }
        }
    }
}

function Checkbox({
    checked = false,
    indeterminate = false,
    Parent = null,
    attributes = [],
    onClick,
}) {
    const checkbox = document.createElement('md-checkbox');
    if (checked) checkbox.setAttribute('checked', '');
    if (indeterminate) checkbox.setAttribute('indeterminate', '');
    applyAttributes(checkbox, attributes);
    if (Parent) Parent.appendChild(checkbox);
    if(onClick) {
        checkbox.addEventListener('click', function () {
            onClick();
        })
    }
    return checkbox;
}

function Radio({
    checked = false,
    value = '',
    name = '',
    Parent = null,
    attributes = [],
    onClick,
}) {
    const radio = document.createElement('md-radio');
    if (checked) radio.setAttribute('checked', '');
    if (value) radio.setAttribute('value', value);
    if (name) radio.setAttribute('name', name);
    applyAttributes(radio, attributes);
    if (Parent) Parent.appendChild(radio);
    if(onClick) {
        radio.addEventListener('click', function () {
            onClick();
        })
    }
    return radio;
}

function Slider({
    withTicks = false,
    isRange = false,
    value = 50,
    valueStart = 25,
    valueEnd = 75,
    Parent = null,
    BorderRadius,
    attributes = [],
    eventC = {}
}) {
    const slider = webx.createElement({
        tag: 'md-slider',
        parent: Parent,
        attribute: normalizeAttributes(
            BorderRadius ? { key: 'class', value: BorderRadius } : null,
            ...attributes,
            withTicks ? { key: 'ticks' } : null,
            isRange
                ? [
                    { key: 'range' },
                    { key: 'value-start', value: valueStart },
                    { key: 'value-end', value: valueEnd }
                ]
                : { key: 'value', value }
        ),
        eventC
    });

    return slider;
}

function TextField({
    type = "outlined",
    label,
    placeholder,
    ariaLabel,
    Parent = null,
    BorderRadius,
    attributes = [],
    eventC = {}
}) {
    const attrList = normalizeAttributes(
        BorderRadius ? { key: 'class', value: BorderRadius } : null,
        ...attributes,
        label ? { key: 'label', value: label } : null,
        placeholder ? { key: 'placeholder', value: placeholder } : null,
        ariaLabel ? { key: 'aria-label', value: ariaLabel } : null
    );

    const field = webx.createElement({
        tag: `md-${type}-text-field`,
        parent: Parent,
        attribute: attrList,
        eventC
    });

    return field;
}

function Tabs({
    tabs = [],      
    onChange = () => {},
    Parent = null,
    BorderRadius,
    attributes = [],
    eventC = {}
}) {
    const tabContainer = webx.createElement({
        tag: 'md-tabs',
        parent: Parent,
        attribute: normalizeAttributes(
            BorderRadius ? { key: 'class', value: BorderRadius } : null,
            ...attributes
        ),
        eventC
    });

    tabs.forEach(({ label, isActive }) => {
        const tab = webx.createElement({
            tag: 'md-primary-tab',
            html: label,
            attribute: isActive ? [{ key: 'active' }] : [],
            parent: tabContainer
        });
    });

    tabContainer.addEventListener('change', (event) => {
        const tabs = [...tabContainer.querySelectorAll('md-primary-tab')];
        const index = tabs.findIndex(t => t.hasAttribute('active'));
        onChange(index, event); 
    });

    return tabContainer;
}
