System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/transversals", "@beyond-js/widgets@0.1.6/render"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, Transversal, __beyond_transversal, widgets, bundles;
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_beyondJsKernel019Transversals) {
      dependency_1 = _beyondJsKernel019Transversals;
    }, function (_beyondJsWidgets016Render) {
      dependency_2 = _beyondJsWidgets016Render;
    }],
    execute: function () {
      ({
        Transversal
      } = brequire('@beyond-js/kernel/transversals'));
      _export("__beyond_transversal", __beyond_transversal = new Transversal('start', ''));
      __beyond_transversal.dependencies.update([['@beyond-js/kernel/transversals', dependency_1], ['@beyond-js/widgets/render', dependency_2]]);

      /*************
      BUNDLE: WIDGET
      *************/
      ({
        widgets
      } = brequire('@beyond-js/widgets/render'));
      widgets.register([{
        "name": "coming-soon",
        "vspecifier": "pragmate-ui@0.1.1/coming-soon",
        "is": "page",
        "route": "/components/coming-soon"
      }, {
        "name": "pui-template-view-widget",
        "vspecifier": "pragmate-ui@0.1.1/pui/template/palette"
      }]);
      bundles = [];
      __beyond_transversal.initialise(bundles);
    }
  };
});