/*global QUnit*/

jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

sap.ui.require([
	"sap/ui/test/Opa5",
	"ac/TaskProcessing_Application/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"ac/TaskProcessing_Application/test/integration/pages/App",
	"ac/TaskProcessing_Application/test/integration/pages/Browser",
	"ac/TaskProcessing_Application/test/integration/pages/Master",
	"ac/TaskProcessing_Application/test/integration/pages/Detail",
	"ac/TaskProcessing_Application/test/integration/pages/NotFound"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "ac.TaskProcessing_Application.view."
	});

	sap.ui.require([
		"ac/TaskProcessing_Application/test/integration/NavigationJourneyPhone",
		"ac/TaskProcessing_Application/test/integration/NotFoundJourneyPhone",
		"ac/TaskProcessing_Application/test/integration/BusyJourneyPhone"
	], function () {
		QUnit.start();
	});
});