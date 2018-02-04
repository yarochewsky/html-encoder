(function() {
  "use strict";

  var $ = function(id) { return document.getElementById(id); };
  var regexPattern = /é|à|ã|ç|á/g;
  var replacements = {"é" : "&eacute;", "à" : "&agrave;", "ã" : "&atilde;", "ç" : "&ccedil;",
                      "á" : "&aacute;"};

  window.onload = function() {
    $("encode").onclick = encode;
    $("copy").onclick = copy;
  };

  function encode() {
    $("result").innerHTML = "";
    var source = $("source").value;
    var matches = source.match(regexPattern);
    if (matches) {
      for (var i = 0; i < matches.length; i++) {
        var toReplace = matches[i];
        source = source.replace(new RegExp(toReplace), replacements[toReplace]);
      }
      var sourceCode = document.createTextNode(source);
      $("result").appendChild(sourceCode);
      $("copy").classList.remove("hidden");
    } else {
      $("result").innerHTML = "no encoding necessary =)";
    }
    $("result").classList.remove("hidden");
  }

  function copy() {
    $("result").select();
    document.execCommand("Copy");
  }

})();
