/*global QUnit*/

jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

// We cannot provide stable mock data out of the template.
// If you introduce mock data, by adding .json files in your webapp/localService/mockdata folder you have to provide the following minimum data:
// * At least 3 SalesOrderSet in the list
// * All 3 SalesOrderSet have at least one ToLineItems

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
		"ac/TaskProcessing_Application/test/integration/MasterJourney",
		"ac/TaskProcessing_Application/test/integration/NavigationJourney",
		"ac/TaskProcessing_Application/test/integration/NotFoundJourney",
		"ac/TaskProcessing_Application/test/integration/BusyJourney",
		"ac/TaskProcessing_Application/test/integration/FLPIntegrationJourney"
	], function () {
		QUnit.start();
	});
});