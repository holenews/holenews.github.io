/*
 * tinyLz77 - LZ77 based algorithm JavaScript Compressor
 *
 * Version 1.11, 2011-11-07
 * Copyright (c) 2011 polygon planet <polygon.planet@gmail.com>
 * Dual licensed under the MIT and GPL v2 licenses.
 *
 * RFC 1951 DEFLATE Compressed Data Format Specification version 1.3
 * http://www.ietf.org/rfc/rfc1951.txt
 *
 * Demo:
 *   http://lab.polygonpla.net/js/tinylz77.html
 *   http://feel.happy.nu/test/tinylz77.js.html
 *
 * Note:
 *   This functions uses only Lz77 compression
 *   though RFC 1951 contains the Hafman compression algorithm.
 *
 * Usage:
 *   var string = 'Hello,Hello,abcabcabcabcabcabc.....';
 *   var compressedString = tinyLz77.compress(string);
 *   var decompressedString = tinyLz77.decompress(compressedString);
 *
 */
var TinyLz77 = {
  compress: function(s) {
    var a = 53300, b, c, d, e, f, g = -1, h, r = [];
    s = new Array(a--).join(' ') + s;
    while ((b = s.substr(a, 256))) {
      for (c = 2; c <= b.length; ++c) {
        d = s.substring(a - 52275, a + c - 1).lastIndexOf(b.substring(0, c));
        if (d === -1) {
          break;
        }
        e = d;
      }
      if (c === 2 || c === 3 && f === g) {
        f = g;
        h = s.charCodeAt(a++);
        r.push(h >> 8 & 255, h & 255);
      } else {
        r.push((e >> 8 & 255) | 65280, e & 255, c - 3);
        a += c - 1;
      }
    }
    return String.fromCharCode.apply(0, r);
  },
  decompress: function(s) {
    var a = 53300, b = 0, c, d, e, f, g, h, r = new Array(a--).join(' ');
    while (b < s.length) {
      c = s.charCodeAt(b++);
      if (c <= 255) {
        r += String.fromCharCode((c << 8) | s.charCodeAt(b++));
      } else {
        e = ((c & 255) << 8) | s.charCodeAt(b++);
        f = e + s.charCodeAt(b++) + 2;
        h = r.slice(-52275);
        g = h.substring(e, f);
        if (g) {
          while (h.length < f) {
            h += g;
          }
          r += h.substring(e, f);
        }
      }
    }
    return r.slice(a);
  }
};
