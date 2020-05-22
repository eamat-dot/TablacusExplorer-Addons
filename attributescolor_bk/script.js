var Addon_Id = "attributescolor_bk";

var item = GetAddonElement(Addon_Id);
if (window.Addon == 1) {
	Addons.AttributesColor_BK = {
		Color: {},
		attrs: ["root", FILE_ATTRIBUTE_REPARSE_POINT, FILE_ATTRIBUTE_ENCRYPTED, FILE_ATTRIBUTE_SYSTEM, FILE_ATTRIBUTE_HIDDEN, FILE_ATTRIBUTE_READONLY, FILE_ATTRIBUTE_COMPRESSED, FILE_ATTRIBUTE_DIRECTORY]
	};

	AddEvent("ItemPrePaint2", function (Ctrl, pid, nmcd, vcd, plRes) {
		if (pid) {
			if (api.PathIsRoot(pid.Path)) {
				var i = Addons.AttributesColor_BK.Color["root"];
				if (isFinite(i)) {
					vcd.clrTextBk = i;
					return;
				}
			}
			var wfd = api.Memory("WIN32_FIND_DATA");
			api.SHGetDataFromIDList(pid, SHGDFIL_FINDDATA, wfd, wfd.Size);
			for (var i in Addons.AttributesColor_BK.attrs) {
				var j = Addons.AttributesColor_BK.attrs[i];
				if (j & wfd.dwFileAttributes) {
					vcd.clrTextBk = Addons.AttributesColor_BK.Color[j];
					break;
				}
			}
		}
	});

	for (var i = Addons.AttributesColor_BK.attrs.length; i--;) {
		var j = Addons.AttributesColor_BK.attrs[i];
		var s = GetWinColor(item.getAttribute("c" + j));
		if (isFinite(s) && s !== null) {
			Addons.AttributesColor_BK.Color[j] = s;
		} else {
			delete Addons.AttributesColor_BK.attrs[i];
		}
	}
} else {
	importScript("addons\\" + Addon_Id + "\\options.js");
}
