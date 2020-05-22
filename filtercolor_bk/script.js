var Addon_Id = "filtercolor_bk";

var item = GetAddonElement(Addon_Id);
if (window.Addon == 1) {
	Addons.FilterColor_BK = {
		List: [],
		Mode: api.LowPart(item.getAttribute("Path")) ? "Path" : "Name"
	};
	try {
		var ado = OpenAdodbFromTextFile(fso.BuildPath(te.Data.DataFolder, "config\\" + Addon_Id + ".tsv"));
		while (!ado.EOS) {
			var ar = ado.ReadText(adReadLine).split("\t");
			if (ar[0]) {
				Addons.FilterColor_BK.List.push([ar[0], GetWinColor(ar[1])]);
			}
		}
		ado.Close();
	} catch (e) { }

	AddEvent("ItemPrePaint2", function (Ctrl, pid, nmcd, vcd, plRes) {
		if (pid) {
			var path = pid[Addons.FilterColor_BK.Mode];
			for (var i = Addons.FilterColor_BK.List.length; i--;) {
				if (PathMatchEx(path, Addons.FilterColor_BK.List[i][0])) {
					vcd.clrTextBk = Addons.FilterColor_BK.List[i][1];
					return S_OK;
				}
			}
		}
	});
} else {
	hint = GetText("Filter");
	importScript("addons\\" + Addon_Id + "\\options.js");
}
