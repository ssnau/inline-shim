;(function(){ function detect(){window.$$SHIM_SUPPORT={},window.$$SHIM_SUPPORT["array-is-array"]=void 0,window.$$SHIM_SUPPORT.fetch=void 0,window.$$SHIM_SUPPORT["object-assign"]=void 0,window.$$SHIM_SUPPORT["object-keys"]=void 0,window.$$SHIM_SUPPORT.promise=void 0,window.$$SHIM_SUPPORT.raf=void 0}!function(){if(detect(),"undefined"!=typeof localStorage){var s=window.$$SHIM_SUPPORT,unsupported=[];for(var k in s)s.hasOwnProperty(k)&&(s[k]||unsupported.push(k));for(var i=0;i<unsupported.length;i++){var code=localStorage.getItem("_shim-"+unsupported[i]);code&&eval(code)}detect()}}(); }());