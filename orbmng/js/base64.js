// UTF8 octets encode/decode
var utf8 = {
  encode: function(s) {
    var ret;
    try {
      ret = encodeURI(s).replace(/%(..)/g, function(m0, m1) {
        return String.fromCharCode("0x" + m1);
      });
    } catch (e) {
      ret = "";
    }
    return ret;
  },
  decode: function(s) {
    var ret;
    try {
      ret = decodeURIComponent(s.replace(/[%\x80-\xFF]/g, function(m0) {
        return "%" + m0.charCodeAt(0).toString(16);
      }));
    } catch (e) {
      ret = "";
    }
    return ret;
  }
};

// Base64 from (based) http://feel.happy.nu/test/base64.html
var base64={
 b:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
 encode: function(s){
  var t="",p=-6,a=0,i=0,v=0,c;s=utf8.encode(s);
  while(i<s.length||p>-6){
   if(p<0){
    if(i<s.length){
     c=s.charCodeAt(i++);
     v+=8
    }else{
     c=0
    }
    a=((a&255)<<8)|(c&255);
    p+=8
   }
   t+=base64.b.charAt(v>0?a>>p&63:64);
   p-=6;
   v-=6
  }
  return t
 },
 decode: function(s){
  var t="",p=-8,a=0,c,d,i=0;
  for(;i<s.length;i++){
   if((c=base64.b.indexOf(s.charAt(i)))>=0){
    a=(a<<6)|(c&63);
    if((p+=6)>=0){
     d=a>>p&255;
     if(c!=64)t+=String.fromCharCode(d);
     a&=63;
     p-=8
    }
   }
  }
  return utf8.decode(t)
 }
}