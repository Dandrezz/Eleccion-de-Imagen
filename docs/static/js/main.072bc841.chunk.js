(this["webpackJsonpchoose-image-app"]=this["webpackJsonpchoose-image-app"]||[]).push([[0],{11:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),i=a(3),r=a.n(i),l=(a(9),a(1)),m=function(e){var t=e.image,a=e.handleChangeImage;return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"column"},c.a.createElement("div",{className:"ui segment"},c.a.createElement("div",{className:"card imagen center"},c.a.createElement("div",{className:"ui image image-size"},c.a.createElement("img",{src:t,alt:"Cargando..."})))),c.a.createElement("button",{className:"ui primary fluid button",onClick:function(){return a(t)}},"Seleccionar")))},s=function(){var e=Object(n.useState)(""),t=Object(l.a)(e,2),a=t[0],i=t[1],r=Object(n.useState)(""),s=Object(l.a)(r,2),u=s[0],o=s[1],d=function(e){fetch("https://picsum.photos/450/400").then((function(e){return i(e.url)})),fetch("https://picsum.photos/450/400").then((function(e){return o(e.url)})),console.log(e.match(/[0-9]+/)[0])};return Object(n.useEffect)((function(){fetch("https://picsum.photos/450/400").then((function(e){return i(e.url)})),fetch("https://picsum.photos/450/400").then((function(e){return o(e.url)}))}),[]),c.a.createElement("div",{className:"all"},c.a.createElement("div",null,c.a.createElement("div",{className:"top-header"},c.a.createElement("div",{className:"div-hiddin"}),c.a.createElement("div",{className:"ui sizer vertical segment fontSize"},c.a.createElement("div",{className:"ui huge header header-custom"},"\xbfQu\xe9 prefieres?")),c.a.createElement("div",{className:"div-hiddin"})),c.a.createElement("div",{className:"ui middle aligned two column centered grid centered custom-animation"},c.a.createElement(m,{image:a,handleChangeImage:d}),c.a.createElement(m,{image:u,handleChangeImage:d}))))},u=function(){return c.a.createElement(s,null)};a(10);r.a.render(c.a.createElement(u,null),document.getElementById("root"))},4:function(e,t,a){e.exports=a(11)},9:function(e,t,a){}},[[4,1,2]]]);
//# sourceMappingURL=main.072bc841.chunk.js.map