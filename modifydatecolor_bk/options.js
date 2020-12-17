SetTabContents(4, "Color", '<form name="E" id="data1"><table id="T" style="width: 100%"></table></form>');
document.getElementById("toolbar").innerHTML = '<input type="button" value="Add" onclick=\'Add(["",""])\'>&emsp;<input type="button" value="Up" onclick="Up()"><input type="button" value="Down" onclick="Down()">&emsp;<input type="button" value="Remove" onclick="Remove()">';

ConfigTSV = BuildPath(await te.Data.DataFolder, "config", Addon_Id + ".tsv");
const g_strColor = await GetText("Color");

Get = function (i) {
	return [document.E.elements['p' + i].value, document.E.elements['c' + i].value];
}

Set = function (i, ar) {
	document.E.elements['p' + i].value = ar[0];
	document.E.elements['c' + i].value = ar[1];
	document.E.elements['c' + i].style.backgroundColor = ar[1];
	document.E.elements['b' + i].style.backgroundColor = ar[1];
}

Add = function (ar) {
	if (ar.length < 2) {
		return;
	}
	const table = document.getElementById("T");
	const nRows = table.rows.length;
	s = ['<td style="width: 1em"><input type="radio" name="sel" id="i', nRows, '"></td>'];
	s.push('<td><input type="text" name="p', nRows, '" style="width: 100%" onchange="FilterChanged(this)" placeholder="', hint, '" title="', hint, '"></td>');
	s.push('<td style="width: 7em"><input type="text" name="c', nRows, '" style="width: 100%" placeholder="', g_strColor, '" title="', g_strColor, '" onchange="FilterChanged()" ></td>');
	s.push('<td style="width: 1em"><input type="button" name="b', nRows, '" value=" " class="color" style="width: 100%" onclick="ChooseColor2(this)" title="', g_strColor, '"></td>');
	const tr = table.insertRow();
	tr.innerHTML = s.join("");
	Set(nRows, ar);
	return tr;
}


GetIndex = function () {
	const table = document.getElementById("T");
	for (let i = table.rows.length; i--;) {
		if (document.getElementById("i" + i).checked) {
			return i;
		}
	}
	return -1;
}

Up = function () {
	let nPos = GetIndex();
	if (nPos <= 0) {
		return;
	}
	const s = Get(nPos);
	Set(nPos, Get(nPos - 1));
	Set(--nPos, s);
	document.E.elements["i" + nPos].checked = true;
}

Down = function () {
	const table = document.getElementById("T");
	let nPos = GetIndex();
	if (nPos < 0 || nPos >= table.rows.length - 1) {
		return;
	}
	const s = Get(nPos);
	Set(nPos, Get(nPos + 1));
	Set(++nPos, s);
	document.E.elements["i" + nPos].checked = true;
}

Remove = async function () {
	const nPos = GetIndex();
	if (nPos < 0 || !await confirmOk()) {
		return;
	}
	const table = document.getElementById("T");
	const nRows = table.rows.length;
	for (let i = nPos; i < nRows - 1; i++) {
		Set(i, Get(i + 1));
	}
	table.deleteRow(nRows - 1);
}

FilterChanged = function (o) {
	g_bChanged = true;
}

ChangeColor = function (o) {
	const n = o.name.replace(/\D/, "");
	document.E.elements["c" + n].style.backgroundColor = o.value;
	document.E.elements["b" + n].style.backgroundColor = o.value;
	g_bChanged = true;
}

ChooseColor2 = async function (o) {
	const n = o.name.replace(/\D/, "");
	const oc = document.E.elements["c" + n];
	const c = await ChooseWebColor(oc.value);
	if (c) {
		oc.value = c;
		ChangeColor(oc);
	}
}

SaveLocation = async function () {
	try {
		const ado = await api.CreateObject("ads");
		ado.CharSet = "utf-8";
		await ado.Open();
		const table = document.getElementById("T");
		const nRows = table.rows.length;
		let data = "";
		for (let i = 0; i < nRows; i++) {
			data += [document.E.elements['p' + i].value, document.E.elements['c' + i].value].join("\t") + "\r\n";
		}
		await ado.WriteText(data);
		await ado.SaveToFile(ConfigTSV, adSaveCreateOverWrite);
		ado.Close();
	} catch (e) { }
}


for (let data = (await ReadTextFile(ConfigTSV)).split(/\r?\n/); data.length;) {
	Add(data.shift().split("\t"));
}
