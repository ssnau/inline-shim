!(function(){var code = "!function(){function t(){for(var t=0;t<g.length;t++)g[t][0](g[t][1]);g=[],d=!1}function n(n,e){g.push([n,e]),d||(d=!0,b(t,0))}function e(t,n){function e(t){i(n,t)}function o(t){a(n,t)}try{t(e,o)}catch(t){o(t)}}function o(t){var n=t.owner,e=n._state,o=n._data,c=t[e],f=t.then;if(\"function\"==typeof c){e=_;try{o=c(o)}catch(t){a(f,t)}}r(f,o)||(e===_&&i(f,o),e===w&&a(f,o))}function r(t,n){var e;try{if(t===n)throw new TypeError(\"A promises callback cannot return that same promise.\");if(n&&(\"function\"==typeof n||\"object\"==typeof n)){var o=n.then;if(\"function\"==typeof o)return o.call(n,function(o){e||(e=!0,n===o?c(t,o):i(t,o))},function(n){e||(e=!0,a(t,n))}),!0}}catch(n){return e||a(t,n),!0}return!1}function i(t,n){t!==n&&r(t,n)||c(t,n)}function c(t,e){t._state===p&&(t._state=y,t._data=e,n(u,t))}function a(t,e){t._state===p&&(t._state=y,t._data=e,n(s,t))}function f(t){t._then=t._then.forEach(o)}function u(t){t._state=_,f(t)}function s(t){t._state=w,f(t),!t._handled&&v&&global.process.emit(\"unhandledRejection\",t._data,t)}function h(t){global.process.emit(\"rejectionHandled\",t)}function l(t){if(\"function\"!=typeof t)throw new TypeError(\"Promise resolver \"+t+\" is not a function\");if(this instanceof l==!1)throw new TypeError(\"Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.\");this._then=[],e(t,this)}var d,p=\"pending\",y=\"settled\",_=\"fulfilled\",w=\"rejected\",m=function(){},v=\"undefined\"!=typeof global&&\"undefined\"!=typeof global.process&&\"function\"==typeof global.process.emit,b=\"undefined\"==typeof setImmediate?setTimeout:setImmediate,g=[];l.prototype={constructor:l,_state:p,_then:null,_data:void 0,_handled:!1,then:function(t,e){var r={owner:this,then:new this.constructor(m),fulfilled:t,rejected:e};return!e&&!t||this._handled||(this._handled=!0,this._state===w&&v&&n(h,this)),this._state===_||this._state===w?n(o,r):this._then.push(r),r.then},catch:function(t){return this.then(null,t)}},l.all=function(t){if(!Array.isArray(t))throw new TypeError(\"You must pass an array to Promise.all().\");return new l(function(n,e){function o(t){return c++,function(e){i[t]=e,--c||n(i)}}for(var r,i=[],c=0,a=0;a<t.length;a++)r=t[a],r&&\"function\"==typeof r.then?r.then(o(a),e):i[a]=r;c||n(i)})},l.race=function(t){if(!Array.isArray(t))throw new TypeError(\"You must pass an array to Promise.race().\");return new l(function(n,e){for(var o,r=0;r<t.length;r++)o=t[r],o&&\"function\"==typeof o.then?o.then(n,e):n(o)})},l.resolve=function(t){return t&&\"object\"==typeof t&&t.constructor===l?t:new l(function(n){n(t)})},l.reject=function(t){return new l(function(n,e){e(t)})},\"undefined\"!=typeof window&&(window.Promise=l)}();"; eval(code); try {localStorage.setItem('_shim-promise', code);}catch(e){} }())