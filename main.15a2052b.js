parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"xzGp":[function(require,module,exports) {
"use strict";function r(r){return o(r)||n(r)||t(r)||e()}function e(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function t(r,e){if(r){if("string"==typeof r)return a(r,e);var t=Object.prototype.toString.call(r).slice(8,-1);return"Object"===t&&r.constructor&&(t=r.constructor.name),"Map"===t||"Set"===t?Array.from(r):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?a(r,e):void 0}}function n(r){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(r))return Array.from(r)}function o(r){if(Array.isArray(r))return a(r)}function a(r,e){(null==e||e>r.length)&&(e=r.length);for(var t=0,n=new Array(e);t<e;t++)n[t]=r[t];return n}var l=null;function i(r){return function(e,t){var n=e.sortValue,o=t.sortValue;switch(!0){case"$"===n[0]:return(parseFloat(n.slice(1))-parseFloat(o.slice(1)))*r;case!isNaN(parseInt(n)):return(parseInt(n)-parseInt(o))*r;default:return n.localeCompare(o)*r}}}function u(e){var t=e.target,n=t.closest("table"),o=n.querySelector("tbody"),a=r(n.querySelectorAll("th")).indexOf(t),u=r(o.children).map(function(r){return{sortValue:r.children[a].innerText,element:r}}),c=i(t===l?-1:1);u.sort(c),u.forEach(function(r){var e=r.element;return o.insertAdjacentElement("beforeend",e)}),l=t===l?null:t}module.exports=u;
},{}],"eDbA":[function(require,module,exports) {
"use strict";function t(t){if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(t=r(t))){var n=0,e=function(){};return{s:e,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:e}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,a,i=!0,l=!1;return{s:function(){o=t[Symbol.iterator]()},n:function(){var t=o.next();return i=t.done,t},e:function(t){l=!0,a=t},f:function(){try{i||null==o.return||o.return()}finally{if(l)throw a}}}}function r(t,r){if(t){if("string"==typeof t)return n(t,r);var e=Object.prototype.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(t):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?n(t,r):void 0}}function n(t,r){(null==r||r>t.length)&&(r=t.length);for(var n=0,e=new Array(r);n<r;n++)e[n]=t[n];return e}function e(r){var n,e=r.target.closest("tr"),o=t(e.parentElement.children);try{for(o.s();!(n=o.n()).done;){var a=n.value;a===e?a.classList.add("active"):a.classList.remove("active")}}catch(i){o.e(i)}finally{o.f()}}module.exports=e;
},{}],"Bywf":[function(require,module,exports) {
"use strict";function n(n){return r(n)||o(n)||t(n)||e()}function e(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function t(n,e){if(n){if("string"==typeof n)return a(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);return"Object"===t&&n.constructor&&(t=n.constructor.name),"Map"===t||"Set"===t?Array.from(n):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?a(n,e):void 0}}function o(n){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(n))return Array.from(n)}function r(n){if(Array.isArray(n))return a(n)}function a(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,o=new Array(e);t<e;t++)o[t]=n[t];return o}function i(){document.body.insertAdjacentHTML("beforeend",'\n    <form class="new-employee-form">\n      <label>\n        Name: <input name="name" type="text" required>\n      </label>\n\n      <label>\n        Position: <input name="position" type="text" required>\n      </label>\n\n      <label>\n        Office:\n        <select name="office" required>\n          <option value="Tokyo">Tokyo</option>\n          <option value="Singapore">Singapore</option>\n          <option value="London">London</option>\n          <option value="New York">New York</option>\n          <option value="San Francisco">San Francisco</option>\n        </select>\n      </label>\n\n      <label>\n        Age: <input name="age" type="number" required>\n      </label>\n\n      <label>\n        Salary: <input name="salary" type="number" required>\n      </label>\n\n      <button type="submit">Add to table</button>\n    </form>\n  ');var e=document.body.lastElementChild;return n(e.elements).slice(0,-1).forEach(function(n){n.dataset.qa=n.name}),e}module.exports=i;
},{}],"rnsM":[function(require,module,exports) {
"use strict";var e=null,n={success:"success",error:"error",warning:"warning"};function t(){(e=document.createElement("div")).style.cssText="\n    position: fixed;\n    right: 10px;\n    top: 10px;\n\n    display: flex;\n    flex-direction: column-reverse;\n    gap: 10px;\n  ",document.body.insertAdjacentElement("beforeend",e)}var i=function(n,t,i){var s=document.createElement("div"),a=document.createElement("h2"),c=document.createElement("p");a.innerText="".concat(n,":"),c.innerText=t,a.style.cssText="margin: 0 0 12px 0;",c.style.cssText="margin: 0;",s.append(a),s.append(c),s.classList.add("notification"),s.classList.add(i),s.dataset.qa="notification",s.style.cssText="\n    position: static;\n\n    padding: 12px;\n    min-height: auto;\n  ",e.append(s),setTimeout(function(){return s.remove()},2e3)};module.exports={notificationsArea:e,types:n,create:t,push:i};
},{}],"Ej3s":[function(require,module,exports) {
"use strict";function e(e){for(var r=[],s=0,t=e.length-1;t>=0;t--)r.push(e[t]),++s%3==0&&0!==t&&r.push(",");return r.reverse(),r.join("")}module.exports=e;
},{}],"uI5K":[function(require,module,exports) {
"use strict";function e(e){if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=n(e))){var r=0,t=function(){};return{s:t,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:t}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,o,i=!0,u=!1;return{s:function(){a=e[Symbol.iterator]()},n:function(){var e=a.next();return i=e.done,e},e:function(e){u=!0,o=e},f:function(){try{i||null==a.return||a.return()}finally{if(u)throw o}}}}function r(e){return o(e)||a(e)||n(e)||t()}function t(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function n(e,r){if(e){if("string"==typeof e)return i(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?i(e,r):void 0}}function a(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}function o(e){if(Array.isArray(e))return i(e)}function i(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}var u=require("./notifications"),l=require("./triplify"),f=null;function c(e){f=e,u.create()}function s(t){var n=r(t.elements).slice(0,-1);if(n.some(function(e){return e.value.length<=0}))return u.push("Empty field","Fill all empty fields before adding",u.types.error),!1;var a,o=e(n);try{for(o.s();!(a=o.n()).done;){var i=a.value;switch(i.name){case"name":if(i.value.length<4)return u.push("Wrong name",'"Name" field should have at least 4 characters',u.types.error),!1;break;case"age":var l=parseInt(i.value);if(l<18||l>90)return u.push("Age restriction","You are out of permissed age bounds",u.types.error),!1}}}catch(f){o.e(f)}finally{o.f()}return!0}function d(t){t.preventDefault();var n=t.target.form;if(s(n)){var a,o=r(n.elements).slice(0,-1),i=document.createElement("tr"),c=e(o);try{for(c.s();!(a=c.n()).done;){var d=a.value,y=document.createElement("td");y.innerText="salary"===d.name?"$".concat(l(d.value)):d.value,d.value="office"===d.name?d.value:"",i.append(y)}}catch(m){c.e(m)}finally{c.f()}f.prepend(i),u.push("Employee added","New employee was added succesfully",u.types.success)}}module.exports={table:f,bindTo:c,add:d};
},{"./notifications":"rnsM","./triplify":"Ej3s"}],"Nex5":[function(require,module,exports) {
"use strict";var e=null;function t(t){var n=t.target,r=n.closest("td"),i=n.value.trim();r.innerText=i.length>0?i:e,n.remove()}function n(e){"Enter"===e.key&&t(e)}function r(r){var i=r.target,s=document.createElement("input");e=i.innerText,i.innerText="",i.insertAdjacentElement("beforeend",s),s.classList.add("cell-input"),s.focus(),s.addEventListener("keypress",n),s.addEventListener("blur",t)}module.exports=r;
},{}],"KIzB":[function(require,module,exports) {
"use strict";var e=require("./sortTableByProperty"),r=require("./markSelectedRow"),t=require("./createAddEmployeeForm"),c=require("./tableRecords"),l=require("./editCell"),d=document.querySelector("table"),o=d.querySelector("thead"),i=d.querySelector("tbody"),n=o.querySelectorAll("th"),u=t(),a=u.querySelector("button");d.style.userSelect="none",n.forEach(function(r){return r.addEventListener("click",e)}),i.addEventListener("click",r),i.addEventListener("dblclick",l),c.bindTo(i),a.addEventListener("click",c.add);
},{"./sortTableByProperty":"xzGp","./markSelectedRow":"eDbA","./createAddEmployeeForm":"Bywf","./tableRecords":"uI5K","./editCell":"Nex5"}]},{},["KIzB"], null)
//# sourceMappingURL=main.15a2052b.js.map