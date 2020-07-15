var Mongo = {
  'isValid' : function(s){
      return typeof(s) === "string" && s.length === 24 && !/[^a-z0-9]/.test(s)
  },
  'getTimestamp' : function(s){
      return Mongo['isValid'](s) ?  new Date(parseInt("0x" + s.slice(0,8)) * 1000) : false;
  }
}