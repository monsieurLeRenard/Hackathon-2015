
var buttons = require("sdk/ui/button/toggle");
var tabs 	= require("sdk/tabs");
var data 	= require("sdk/self").data;
var pageMod = require("sdk/page-mod");

var data 	= require("sdk/self").data;
var pageMod = require("sdk/page-mod");

var button = buttons.ToggleButton({
  id: "photobox-toolbar",
  label: "Photobox toolbar",
  icon: {
    "16": "./icon-16.png",
    "32": "./icon-32.png",
    "64": "./icon-64.png"
  },
  onChange: changed,
  badge: 'on',
  badgeColor: "#00AAAA"
 });

 var toolbarLaunch = false;

function changed(state) {
  if (state.checked) {
  button.badge = 'off';
    button.badgeColor = "#F43D42";
    toolbarLaunch = true;
  }
  else {
  button.badge = 'on';
    button.badgeColor = "#44E443";
    toolbarLaunch = false;
  }
}

pageMod.PageMod({
	include: '*',
	attachTo: 'top',
	contentScriptFile: [data.url("jquery.1.11.2.min.js"), data.url("boxit.js")],
	onAttach: function onAttach(worker) {
		worker.on('message', function(newabc) {
		  abc = newabc;
		});
	}
});