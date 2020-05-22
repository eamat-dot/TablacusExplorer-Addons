var Addon_Id = "createdatecolor_bk";

var item = GetAddonElement(Addon_Id);
if (window.Addon == 1) {
	Addons.CreateDateColor_BK = {
		Color: []
	};
	try {
		var smhdw = { s: 1000, m: 60000, h: 3600000, d: 86400000, w: 604800000, y: 31536000000 };
		var ado = OpenAdodbFromTextFile(fso.BuildPath(te.Data.DataFolder, "config\\createdatecolor_bk.tsv"));
		var tzo = new Date().getTimezoneOffset() * 60000;
		while (!ado.EOS) {
			var ar = ado.ReadText(adReadLine).split("\t");
			if (ar[0]) {
				var s = (ar[0].replace(/([\dx]+)([smhdwy])/ig, function (all, re1, re2) {
					return eval(re1.replace(/x/ig, "*")) * smhdw[re2.toLowerCase()] + '+';
				}).replace(/\+$/, "")) - tzo;
				Addons.CreateDateColor_BK.Color.push([s, ar[1] ? GetWinColor(ar[1]) : -1]);
			}
		}
		ado.Close();
	} catch (e) { }

	Addons.CreateDateColor_BK.Color = Addons.CreateDateColor_BK.Color.sort(function (a, b) {
		return b[0] - a[0];
	});

	AddEvent("ItemPrePaint2", function (Ctrl, pid, nmcd, vcd, plRes) {
		if (pid) {
			var d = new Date() - pid.ExtendedProperty("Create");
			for (var i = Addons.CreateDateColor_BK.Color.length; i--;) {
				var ar = Addons.CreateDateColor_BK.Color[i];
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
} else {
	hint = "1s 1m 1h 1d 1w 1y";
	importScript("addons\\" + Addon_Id + "\\options.js");
}
