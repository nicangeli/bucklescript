'use strict';

var Mt = require("./mt.js");
var Block = require("../../lib/js/block.js");

var v = {
  RE_EXN_ID: "Not_found"
};

var u = {
  RE_EXN_ID: "Not_found"
};

var s = {
  RE_EXN_ID: "End_of_file"
};

var suites_000 = /* tuple */[
  "not_found_equal",
  (function (param) {
      return /* Eq */Block.__(0, [
                u,
                v
              ]);
    })
];

var suites_001 = /* :: */[
  /* tuple */[
    "not_found_not_equal_end_of_file",
    (function (param) {
        return /* Neq */Block.__(1, [
                  u,
                  s
                ]);
      })
  ],
  /* [] */0
];

var suites = /* :: */[
  suites_000,
  suites_001
];

Mt.from_pair_suites("Global_exception_regression_test", suites);

exports.v = v;
exports.u = u;
exports.s = s;
exports.suites = suites;
/*  Not a pure module */
