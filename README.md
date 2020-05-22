# Tablacus Explorer Add-ons
It is an **unofficial** add-on to the tabbed filer [**Tablacus Explorer**](https://tablacus.github.io/explorer.html) for Windows.

| Addon_ID           | Addon Name                          | Origral Addon_Id                                                                                  | Origral Addon Name                                                                                  |
| ------------------ | ----------------------------------- | ------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| createdatecolor_bk | Background Colored with create date | [createdatecolor](https://github.com/tablacus/TablacusExplorerAddons/tree/master/createdatecolor) | [Colored with create date](https://github.com/tablacus/TablacusExplorerAddons/wiki/createdatecolor) |
| modifydatecolor_bk | Background Colored with modify date | [modifydatecolor](https://github.com/tablacus/TablacusExplorerAddons/tree/master/modifydatecolor) | [Colored with modify date](https://github.com/tablacus/TablacusExplorerAddons/wiki/modifydatecolor) |
| accessdatecolor_bk | Background Colored with access date | [accessdatecolor](https://github.com/tablacus/TablacusExplorerAddons/tree/master/accessdatecolor) | [Colored with access date](https://github.com/tablacus/TablacusExplorerAddons/wiki/accessdatecolor) |
| attributescolor_bk | Background Colored with attributes  | [attributescolor](https://github.com/tablacus/TablacusExplorerAddons/tree/master/attributescolor) | Colored with attributes                                                                             |
| extensioncolor_bk  | Background Colored with extension   | [extensioncolor](https://github.com/tablacus/TablacusExplorerAddons/tree/master/extensioncolor)   | [Colored with extension](https://github.com/tablacus/TablacusExplorerAddons/wiki/extensioncolor)    |
| filtercolor_bk     | Background Colored with filter      | [filtercolor](https://github.com/tablacus/TablacusExplorerAddons/tree/master/filtercolor)         | Colored with filter                                                                                 |

---
# Tablacus Explorer Add-ons (Japanese)

Windows用のタブ型ファイラー [**Tablacus Explorer**](https://tablacus.github.io/explorer.html) の**非公式**アドオンです。

## 背景色で色分け

公式の「**○○で色分け**」系統の背景色バージョン。文字色の代わりに背景色を変えられるようにしただけです。
**背景色だけです。「文字色と背景色 色分け」 ではありません。**

- **公式の「ストライプ」アドオンと競合しています** **ストライプアドオンと併用時は詳細表示ではストライプのほうが優先されます**。
- 公式のカラーラベルアドオンと同じ方式で背景色をつけています。併用する場合は優先順位をカラーラベルアドオンより下げてください。

--- 
* 公式の色分けアドオンのコードをほぼそのまま流用しています。オリジナルの著作権は Gakuさんにあります。
  (文字)色分けアドオンとの併用にあたってアドバイスしていただいたGakuさんにこの場を借りてお礼申し上げます。

### ライセンス
  Tablacus Explorerのライセンスに準じ、これらも MIT License とします。

### インストール 
  addonsフォルダにコピー後、オプションのアドオン一覧から有効にしてください。

### アンインストール
  アドオン一覧から削除するか、addons/xxxx**color_bk** フォルダを直接削除して下さい。
  二度と使わない場合は config/xxxx**color_bk.tsv** ファイルも削除して下さい。
  レジストリは使っていません。

### アドオン一覧

| アドオンID         | アドオン名               | 流用元 (公式アドオン)                                                                             | オリジナルアドオン名                                                                            |
| ------------------ | ------------------------ | ------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| createdatecolor_bk | 作成日時で背景色分け     | [createdatecolor](https://github.com/tablacus/TablacusExplorerAddons/tree/master/createdatecolor) | [作成日時で色分け]((https://github.com/tablacus/TablacusExplorerAddons/wiki/createdatecolor))   |
| modifydatecolor_bk | 更新日時で背景色分け     | [modifydatecolor](https://github.com/tablacus/TablacusExplorerAddons/tree/master/modifydatecolor) | [更新日時で色分け](https://github.com/tablacus/TablacusExplorerAddons/wiki/modifydatecolor)     |
| accessdatecolor_bk | アクセス日時で背景色分け | [accessdatecolor](https://github.com/tablacus/TablacusExplorerAddons/tree/master/accessdatecolor) | [アクセス日時で色分け](https://github.com/tablacus/TablacusExplorerAddons/wiki/accessdatecolor) |
| attributescolor_bk | 属性で背景色分け         | [attributescolor](https://github.com/tablacus/TablacusExplorerAddons/tree/master/attributescolor) | 属性で色分け                                                                                    |
| extensioncolor_bk  | 拡張子で背景色分け       | [extensioncolor](https://github.com/tablacus/TablacusExplorerAddons/tree/master/extensioncolor)   | [拡張子で色分け](https://github.com/tablacus/TablacusExplorerAddons/wiki/extensioncolor)        |
| filtercolor_bk     | フィルターで背景色分け   | [filtercolor](https://github.com/tablacus/TablacusExplorerAddons/tree/master/filtercolor)         | フィルターで色分け                                                                              |

### 説明

| アドオン名               | 説明                                                                                         |
| ------------------------ | -------------------------------------------------------------------------------------------- |
| 作成日時で背景色分け     | 作成日時が指定日時以内だった場合に、ファイル名やフォルダ名の背景に色をつける                 |
| 更新日時で背景色分け     | 更新日時が指定日時以内だった場合に、ファイル名やフォルダ名の背景に色をつける                 |
| アクセス日時で背景色分け | アクセス日時が指定日時以内だった場合に、ファイル名やフォルダ名の背景に色をつける             |
| 属性で背景色分け         | 属性(システム属性や隠しファイル属性など)で判別して、ファイル名やフォルダ名の背景に色をつける |
| 拡張子で背景色分け       | 拡張子で判別して、ファイル名の背景に色をつける                                               |
| フィルターで背景色分け   | フィルター( *.txt;*.ini; など)で判別して、ファイル名やフォルダ名の背景に色をつける           |

