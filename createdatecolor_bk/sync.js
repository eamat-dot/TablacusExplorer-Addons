const Addon_Id = "createdatecolor_bk";
const item = GetAddonElement(Addon_Id);

Sync.CreateDateColor_BK = {
	Color: []
};
try {
	const smhdw = { s: 1000, m: 60000, h: 3600000, d: 86400000, w: 604800000, y: 31536000000 };
	const ado = OpenAdodbFromTextFile(fso.BuildPath(te.Data.DataFolder, "config\\createdatecolor_bk.tsv"));
	const tzo = new Date().getTimezoneOffset() * 60000;
	while (!ado.EOS) {
		const ar = ado.ReadText(adReadLine).split("\t");
		if (ar[0]) {
			const s = (ar[0].replace(/([\dx]+)([smhdwy])/ig, function (all, re1, re2) {
				return eval(re1.replace(/x/ig, "*")) * smhdw[re2.toLowerCase()] + '+';
			}).replace(/\+$/, "")) - tzo;
			Sync.CreateDateColor_BK.Color.push([s, ar[1] ? GetWinColor(ar[1]) : -1]);
		}
	}
	ado.Close();
} catch (e) { }

Sync.CreateDateColor_BK.Color = Sync.CreateDateColor_BK.Color.sort(function (a, b) {
	return b[0] - a[0];
});

AddEvent("ItemPrePaint2", function (Ctrl, pid, nmcd, vcd, plRes) {
	if (pid) {
		const d = new Date() - pid.ExtendedProperty("Create");
		for (let i = Sync.CreateDateColor_BK.Color.length; i--;) {
			const ar = Sync.CreateDateColor_BK.Color[i];
			if (d < ar[0]) {
				if (ar[1] != -1) {
					vcd.clrTextBk = ar[1];
					return S_OK;
				}
				return;
			}
		}
	}
});
