const Addon_Id = "extensioncolor_bk";
if (window.Addon == 1) {
	$.importScript("addons\\" + Addon_Id + "\\sync.js");
} else {
	hint = "ext";
	importScript("addons\\" + Addon_Id + "\\options.js");
}
