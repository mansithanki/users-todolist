// Generated by ReScript, PLEASE EDIT WITH CARE
'use client';

import * as Curry from "rescript/lib/es6/curry.js";
import * as Fetch from "bs-fetch/src/Fetch.bs.js";
import * as React from "react";
import * as Js_promise from "rescript/lib/es6/js_promise.js";

function Users(props) {
  var match = React.useState(function () {
        return "";
      });
  var setUsers = match[1];
  var fetchUserData = function (param) {
    var __x = fetch("https://jsonplaceholder.typicode.com/users");
    var __x$1 = Js_promise.then_(Fetch.$$Response.text, __x);
    Js_promise.then_((function (text) {
            console.log(text);
            Curry._1(setUsers, (function (param) {
                    return text;
                  }));
            return Promise.resolve(undefined);
          }), __x$1);
  };
  React.useEffect((function () {
          fetchUserData(undefined);
          return (function (param) {
                    
                  });
        }), []);
  return React.createElement("div", undefined, React.createElement("div", undefined, match[0]));
}

var make = Users;

export {
  make ,
}
/* react Not a pure module */
