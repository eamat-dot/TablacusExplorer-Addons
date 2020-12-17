const Addon_Id = "attributescolor_bk";
const item = GetAddonElement(Addon_Id);

Sync.AttributesColor_BK = {
	Color: {},
	attrs: ["root", FILE_ATTRIBUTE_REPARSE_POINT, FILE_ATTRIBUTE_ENCRYPTED, FILE_ATTRIBUTE_SYSTEM, FILE_ATTRIBUTE_HIDDEN, FILE_ATTRIBUTE_READONLY, FILE_ATTRIBUTE_COMPRESSED, FILE_ATTRIBUTE_DIRECTORY]
};

AddEvent("ItemPrePaint2", function (Ctrl, pid, nmcd, vcd, plRes) {
	if (pid) {
		if (api.PathIsRoot(pid.Path)) {
			const i = Sync.AttributesColor_BK.Color["root"];
			if (isFinite(i)) {
				vcd.clrTextBk = i;
				return;
			}
		}
		const wfd = api.Memory("WIN32_FIND_DATA");
		api.SHGetDataFromIDList(pid, SHGDFIL_FINDDATA, wfd, wfd.Size);
		for (let i in Sync.AttributesColor_BK.attrs) {
			const j = Sync.AttributesColor_BK.attrs[i];
			if (j & wfd.dwFileAttributes) {
				vcd.clrTextBk = Sync.AttributesColor_BK.Color[j];
				break;
			}
		}
	}
});

for (let i = Sync.AttributesColor_BK.attrs.length; i--;) {
	const j = Sync.AttributesColor_BK.attrs[i];
	const s = GetWinColor(item.getAttribute("c" + j));
	if (isFinite(s) && s != null) {
		Sync.AttributesColor_BK.Color[j] = s;
	} else {
		delete Sync.AttributesColor_BK.attrs[i];
	}
}
