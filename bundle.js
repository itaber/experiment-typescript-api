System.register("util", [], function (exports_1, context_1) {
    "use strict";
    var helper;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            exports_1("helper", helper = (personn) => {
                return `hello ${personn}`;
            });
        }
    };
});
System.register("server", ["util"], function (exports_2, context_2) {
    "use strict";
    var util_1;
    var __moduleName = context_2 && context_2.id;
    function greeter(person) {
        return util_1.helper(person);
    }
    return {
        setters: [
            function (util_1_1) {
                util_1 = util_1_1;
            }
        ],
        execute: function () {
            greeter('bob');
        }
    };
});
//# sourceMappingURL=bundle.js.map