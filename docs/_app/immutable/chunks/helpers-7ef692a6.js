import{aa as k}from"./index-a89a8bfe.js";const m=[{id:"01-hello-world",name:"Hello World"},{id:"01-a-simple-counter",name:"A Simple Counter"},{id:"01-the-deployable-trait",name:"The Deployable Trait"},{id:"02-integers",name:"Integers"},{id:"02-addresses-bools",name:"Addresses, Bools"}];function c(o){if(typeof o!="string")throw new TypeError("Path must be a string. Received "+JSON.stringify(o))}function b(o,r){for(var e="",i=0,l=-1,s=0,n,t=0;t<=o.length;++t){if(t<o.length)n=o.charCodeAt(t);else{if(n===47)break;n=47}if(n===47){if(!(l===t-1||s===1))if(l!==t-1&&s===2){if(e.length<2||i!==2||e.charCodeAt(e.length-1)!==46||e.charCodeAt(e.length-2)!==46){if(e.length>2){var f=e.lastIndexOf("/");if(f!==e.length-1){f===-1?(e="",i=0):(e=e.slice(0,f),i=e.length-1-e.lastIndexOf("/")),l=t,s=0;continue}}else if(e.length===2||e.length===1){e="",i=0,l=t,s=0;continue}}r&&(e.length>0?e+="/..":e="..",i=2)}else e.length>0?e+="/"+o.slice(l+1,t):e=o.slice(l+1,t),i=t-l-1;l=t,s=0}else n===46&&s!==-1?++s:s=-1}return e}function y(o,r){var e=r.dir||r.root,i=r.base||(r.name||"")+(r.ext||"");return e?e===r.root?e+i:e+o+i:i}var d={resolve:function(){for(var r="",e=!1,i,l=arguments.length-1;l>=-1&&!e;l--){var s;l>=0?s=arguments[l]:(i===void 0&&(i=k.cwd()),s=i),c(s),s.length!==0&&(r=s+"/"+r,e=s.charCodeAt(0)===47)}return r=b(r,!e),e?r.length>0?"/"+r:"/":r.length>0?r:"."},normalize:function(r){if(c(r),r.length===0)return".";var e=r.charCodeAt(0)===47,i=r.charCodeAt(r.length-1)===47;return r=b(r,!e),r.length===0&&!e&&(r="."),r.length>0&&i&&(r+="/"),e?"/"+r:r},isAbsolute:function(r){return c(r),r.length>0&&r.charCodeAt(0)===47},join:function(){if(arguments.length===0)return".";for(var r,e=0;e<arguments.length;++e){var i=arguments[e];c(i),i.length>0&&(r===void 0?r=i:r+="/"+i)}return r===void 0?".":d.normalize(r)},relative:function(r,e){if(c(r),c(e),r===e||(r=d.resolve(r),e=d.resolve(e),r===e))return"";for(var i=1;i<r.length&&r.charCodeAt(i)===47;++i);for(var l=r.length,s=l-i,n=1;n<e.length&&e.charCodeAt(n)===47;++n);for(var t=e.length,f=t-n,v=s<f?s:f,u=-1,a=0;a<=v;++a){if(a===v){if(f>v){if(e.charCodeAt(n+a)===47)return e.slice(n+a+1);if(a===0)return e.slice(n+a)}else s>v&&(r.charCodeAt(i+a)===47?u=a:a===0&&(u=0));break}var A=r.charCodeAt(i+a),C=e.charCodeAt(n+a);if(A!==C)break;A===47&&(u=a)}var g="";for(a=i+u+1;a<=l;++a)(a===l||r.charCodeAt(a)===47)&&(g.length===0?g+="..":g+="/..");return g.length>0?g+e.slice(n+u):(n+=u,e.charCodeAt(n)===47&&++n,e.slice(n))},_makeLong:function(r){return r},dirname:function(r){if(c(r),r.length===0)return".";for(var e=r.charCodeAt(0),i=e===47,l=-1,s=!0,n=r.length-1;n>=1;--n)if(e=r.charCodeAt(n),e===47){if(!s){l=n;break}}else s=!1;return l===-1?i?"/":".":i&&l===1?"//":r.slice(0,l)},basename:function(r,e){if(e!==void 0&&typeof e!="string")throw new TypeError('"ext" argument must be a string');c(r);var i=0,l=-1,s=!0,n;if(e!==void 0&&e.length>0&&e.length<=r.length){if(e.length===r.length&&e===r)return"";var t=e.length-1,f=-1;for(n=r.length-1;n>=0;--n){var v=r.charCodeAt(n);if(v===47){if(!s){i=n+1;break}}else f===-1&&(s=!1,f=n+1),t>=0&&(v===e.charCodeAt(t)?--t===-1&&(l=n):(t=-1,l=f))}return i===l?l=f:l===-1&&(l=r.length),r.slice(i,l)}else{for(n=r.length-1;n>=0;--n)if(r.charCodeAt(n)===47){if(!s){i=n+1;break}}else l===-1&&(s=!1,l=n+1);return l===-1?"":r.slice(i,l)}},extname:function(r){c(r);for(var e=-1,i=0,l=-1,s=!0,n=0,t=r.length-1;t>=0;--t){var f=r.charCodeAt(t);if(f===47){if(!s){i=t+1;break}continue}l===-1&&(s=!1,l=t+1),f===46?e===-1?e=t:n!==1&&(n=1):e!==-1&&(n=-1)}return e===-1||l===-1||n===0||n===1&&e===l-1&&e===i+1?"":r.slice(e,l)},format:function(r){if(r===null||typeof r!="object")throw new TypeError('The "pathObject" argument must be of type Object. Received type '+typeof r);return y("/",r)},parse:function(r){c(r);var e={root:"",dir:"",base:"",ext:"",name:""};if(r.length===0)return e;var i=r.charCodeAt(0),l=i===47,s;l?(e.root="/",s=1):s=0;for(var n=-1,t=0,f=-1,v=!0,u=r.length-1,a=0;u>=s;--u){if(i=r.charCodeAt(u),i===47){if(!v){t=u+1;break}continue}f===-1&&(v=!1,f=u+1),i===46?n===-1?n=u:a!==1&&(a=1):n!==-1&&(a=-1)}return n===-1||f===-1||a===0||a===1&&n===f-1&&n===t+1?f!==-1&&(t===0&&l?e.base=e.name=r.slice(1,f):e.base=e.name=r.slice(t,f)):(t===0&&l?(e.name=r.slice(1,n),e.base=r.slice(1,f)):(e.name=r.slice(t,n),e.base=r.slice(t,f)),e.ext=r.slice(n,f)),t>0?e.dir=r.slice(0,t-1):l&&(e.dir="/"),e},sep:"/",delimiter:":",win32:null,posix:null};d.posix=d;var h=d;function S(o){const r=h.basename(h.dirname(o));let e;for(e=0;e<m.length&&m[e].id!=r;e++);return{self:m[e],prev:m[e-1],next:m[e+1]}}export{S as g};