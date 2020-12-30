if(typeof Math.imul == "undefined" || (Math.imul(0xffffffff,5) == 0)) {
    Math.imul = function (a, b) {
        var ah  = (a >>> 16) & 0xffff;
        var al = a & 0xffff;
        var bh  = (b >>> 16) & 0xffff;
        var bl = b & 0xffff;
        // the shift by 0 fixes the sign on the high part
        // the final |0 converts the unsigned value into a signed value
        return ((al * bl) + (((ah * bl + al * bh) << 16) >>> 0)|0);
    }
}


            ;function d(a){var b=a.length;if(0<b){for(var f=Array(b),c=0;c<b;c++)f[c]=a[c];return f}return[]};function e(){this.c=""}e.prototype.toString=function(){return"SafeScript{"+this.c+"}"};e.prototype.a=function(a){this.c=a};(new e).a("");function g(){this.g=""}g.prototype.toString=function(){return"SafeStyle{"+this.g+"}"};g.prototype.a=function(a){this.g=a};(new g).a("");function h(){this.f=""}h.prototype.toString=function(){return"SafeStyleSheet{"+this.f+"}"};h.prototype.a=function(a){this.f=a};(new h).a("");function k(){this.b=""}k.prototype.toString=function(){return"SafeHtml{"+this.b+"}"};k.prototype.a=function(a){this.b=a};(new k).a("\x3c!DOCTYPE html\x3e");(new k).a("");(new k).a("\x3cbr\x3e");var l={},m={};if("undefined"===typeof l||"undefined"===typeof m||"undefined"===typeof n)var n={};if("undefined"===typeof l||"undefined"===typeof m||"undefined"===typeof p)var p=null;if("undefined"===typeof l||"undefined"===typeof m||"undefined"===typeof q)var q=null;if("undefined"===typeof l||"undefined"===typeof m||"undefined"===typeof r)var r=null;if("undefined"!==typeof Symbol){var t=Symbol;"object"!=typeof t||!t||t instanceof Array||t instanceof Object||Object.prototype.toString.call(t)}
var u="undefined"!==typeof Math&&"undefined"!==typeof Math.imul&&0!==Math.imul(4294967295,5)?function(a,b){return Math.imul(a,b)}:function(a,b){var f=a&65535,c=b&65535;return f*c+((a>>>16&65535)*c+f*(b>>>16&65535)<<16>>>0)|0};function v(a){a=u(a|0,-862048943);a=0^(u(a<<15|a>>>-15,461845907)|0);a=(u(a<<13|a>>>-13,5)+-430675100|0)^0;a=u(a^a>>>16,-2048144789);u(a^a>>>13,-1028477387)}v(1);v(0);if("undefined"===typeof l||"undefined"===typeof m||"undefined"===typeof w)var w=null;
"undefined"!==typeof console&&(p=function(){return console.log.apply(console,d(arguments))},q=function(){return console.error.apply(console,d(arguments))});if("undefined"===typeof l||"undefined"===typeof m||"undefined"===typeof x)var x=function(){throw Error("cljs.core/*eval* not bound");};var process={};