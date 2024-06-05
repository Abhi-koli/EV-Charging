sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
function (Controller) {
    "use strict";

    return Controller.extend("evcharger.controller.Map", {
        onSelectUSA: function (oEvent) {
            this.getView().byId("pageContainer").to(this.getView().byId("pageUSA"));
            },
            onSelectEU: function (oEvent) {
            this.getView().byId("pageContainer").to(this.getView().byId("pageEU"));
            },
            onSelectIndia: function (oEvent) {
            this.getView().byId("pageContainer").to(this.getView().byId("pageIndia"));
            }
    });
});