(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{"/qS5":function(e,n,t){"use strict";t.r(n);var r=t("ln6h"),s=t.n(r),o=t("O40h"),u=t("q1tI"),a=t.n(u),i=t("5Yp1"),c=t("zgjP"),l=t.n(c),p=function(e){return a.a.createElement(i.a,null,a.a.createElement("h1",null,e.show.name),a.a.createElement("p",null,e.show.summary.replace(/<[\/]?p>/g,"")),a.a.createElement("img",{src:e.show.image.medium}))};p.getInitialProps=function(){var e=Object(o.default)(s.a.mark(function e(n){var t,r,o;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.query.id,e.next=3,l()("https://api.tvmaze.com/shows/".concat(t));case 3:return r=e.sent,e.next=6,r.json();case 6:return o=e.sent,console.log("Fetched show: ".concat(o.name)),e.abrupt("return",{show:o});case 9:case"end":return e.stop()}},e,this)}));return function(n){return e.apply(this,arguments)}}(),n.default=p},"W/7i":function(e,n,t){"use strict";t.r(n),n.default=function(e,n){return n=n||{},new Promise(function(t,r){var s=new XMLHttpRequest;for(var o in s.open(n.method||"get",e,!0),n.headers)s.setRequestHeader(o,n.headers[o]);function u(){var e,n=[],t=[],r={};return s.getAllResponseHeaders().replace(/^(.*?):[^\S\n]*([\s\S]*?)$/gm,function(s,o,u){n.push(o=o.toLowerCase()),t.push([o,u]),r[o]=(e=r[o])?e+","+u:u}),{ok:2==(s.status/100|0),status:s.status,statusText:s.statusText,url:s.responseURL,clone:u,text:function(){return Promise.resolve(s.responseText)},json:function(){return Promise.resolve(s.responseText).then(JSON.parse)},blob:function(){return Promise.resolve(new Blob([s.response]))},headers:{keys:function(){return n},entries:function(){return t},get:function(e){return r[e.toLowerCase()]},has:function(e){return e.toLowerCase()in r}}}}s.withCredentials="include"==n.credentials,s.onload=function(){t(u())},s.onerror=r,s.send(n.body||null)})}},e1rV:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/MovieDetail",function(){var e=t("/qS5");return{page:e.default||e}}])},zgjP:function(e,n,t){e.exports=window.fetch||(window.fetch=t("W/7i").default||t("W/7i"))}},[["e1rV",1,0]]]);