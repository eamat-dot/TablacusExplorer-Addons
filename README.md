# Tablacus Explorer Add-ons
It is an **unofficial** add-on to the tabbed filer [**Tablacus Explorer**](https://tablacus.github.io/explorer.html) for Windows.

| Addon_ID           | Addon Name                          |
| ------------------ | ----------------------------------- |
| createdatecolor_bk | Background Colored with create date |
| modifydatecolor_bk | Background Colored with modify date |
| accessdatecolor_bk | Background Colored with access date |
| attributescolor_bk | Background Colored with attributes  |
| extensioncolor_bk  | Background Colored with extension   |
| filtercolor_bk     | Background Colored with filter      |


---
# Tablacus Explorer Add-ons (Japanese)

Windows用のタブ型ファイラー [**Tablacus Explorer**](https://tablacus.github.io/explorer.html) の**非公式**アドオンです。

## 背景色で色分け

公式の「**○○で色分け**」系統の背景色バージョン。文字色の代わりに背景色を変えられるようにしただけです。
**背景色だけです。「文字色と背景色 色分け」 ではありません。**

* 公式の色分けアドオンのコードをほぼそのまま流用しています。オリジナルの著作権は Gakuさんにあります。
  (文字)色分けアドオンとの併用にあたってアドバイスしていただいたGakuさんにこの場を借りてお礼申し上げます。


### インストール 
  addonsフォルダにコピー後、オプションのアドオン一覧から有効にしてください。

### アンインストール
  アドオン一覧から削除するか、addons/xxxx**color_bk** フォルダを直接削除して下さい。
  二度と使わない場合は config/xxxx**color_bk.tsv** ファイルも削除して下さい。
  レジストリは使っていません。

### アドオン一覧

| アドオンID         | アドオン名               | 説明                                                                                         |
| ------------------ | ------------------------ | -------------------------------------------------------------------------------------------- |
| createdatecolor_bk | 作成日時で背景色分け     | 作成日時が指定日時以内だった場合に、ファイル名やフォルダ名の背景に色をつける                 |
| modifydatecolor_bk | 更新日時で背景色分け     | 更新日時が指定日時以内だった場合に、ファイル名やフォルダ名の背景に色をつける                 |
| accessdatecolor_bk | アクセス日時で背景色分け | アクセス日時が指定日時以内だった場合に、ファイル名やフォルダ名の背景に色をつける             |
| attributescolor_bk | 属性で背景色分け         | 属性(システム属性や隠しファイル属性など)で判別して、ファイル名やフォルダ名の背景に色をつける |
| extensioncolor_bk  | 拡張子で背景色分け       | 拡張子で判別して、ファイル名の背景に色をつける                                               |
| filtercolor_bk     | フィルターで背景色分け   | フィルター( *.txt;*.ini; など)で判別して、ファイル名やフォルダ名の背景に色をつける           |

公式のカラーラベルアドオンと同じ方式で背景色をつけています。併用する場合は優先順位をカラーラベルアドオンより下げてください。
