const Addon_Id = "filtercolor_bk";
const item = GetAddonElement(Addon_Id);

Sync.FilterColor_BK = {
	List: [],
	Mode: GetNum(item.getAttribute("Path")) ? "Path" : "Name"
};
try {
	const ado = OpenAdodbFromTextFile(BuildPath(te.Data.DataFolder, "config", Addon_Id + ".tsv"));
	while (!ado.EOS) {
		const ar = ado.ReadText(adReadLine).split("\t");
		if (ar[0]) {
			Sync.FilterColor_BK.List.push([ar[0], GetWinColor(ar[1])]);
		}
	}
	ado.Close();
} catch (e) { }

AddEvent("ItemPrePaint2", function (Ctrl, pid, nmcd, vcd, plRes) {
	if (pid) {
		const path = pid[Sync.FilterColor_BK.Mode];
		for (let i = Sync.FilterColor_BK.List.length; i--;) {
			if (PathMatchEx(path, Sync.FilterColor_BK.List[i][0])) {
				vcd.clrTextBk = Sync.FilterColor_BK.List[i][1];
				return S_OK;
			}
		}
	}
});
