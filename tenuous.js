// Copyrights C-EGG inc.
(function() {
    var aa = "日月火水木金土".split("")
      , ba = "門前清自摸和;立直;一發;槍槓;嶺上開花;海底摸月;河底撈魚;平和;斷么九;一盃口;自風 東;自風 南;自風 西;自風 北;場風 東;場風 南;場風 西;場風 北;役牌 白;役牌 發;役牌 中;兩立直;七對子;混全帶么九;一氣通貫;三色同順;三色同刻;三槓子;對對和;三暗刻;小三元;混老頭;二盃口;純全帶么九;混一色;清一色;人和;天和;地和;大三元;四暗刻;四暗刻單騎;字一色;綠一色;清老頭;九蓮寶燈;純正九蓮寶燈;國士無雙;國士無雙13面;大四喜;小四喜;四槓子;ドラ;裏ドラ;赤ドラ;親;門前;榮和;本場;明槓;暗槓;五;ガリ;セット;カラス;全ガリ;バンバン".split(";")
      , da = " ポン カン チー カン カン ロン ツモ リーチ  キタ パオ".split(" ")
      , ga = "新人 ９級 ８級 ７級 ６級 ５級 ４級 ３級 ２級 １級 初段 二段 三段 四段 五段 六段 七段 八段 九段 十段 天鳳".split(" ")
      , ha = " 滿貫 跳滿 倍滿 三倍滿 役滿".split(" ")
      , ia = {
        kaze4: "四風連打",
        yao9: "九種九牌",
        ron3: "三家和了",
        reach4: "四家立直",
        kan4: "四槓散了",
        nm: "流局滿貫"
    }
      , ja = [{
        800: "300-500",
        1100: "400-700",
        1200: "400-800",
        1500: "500-1000",
        1800: "600-1200",
        2E3: "700-1300",
        2300: "800-1500",
        2400: "800-1600",
        2700: "900-1800",
        3E3: "1000-2000",
        3500: "1200-2300",
        3900: "1300-2600",
        4400: "1500-2900",
        4800: "1600-3200",
        5400: "1800-3600",
        5900: "2000-3900",
        6E3: "2000-4000",
        9E3: "3000-6000",
        12E3: "4000-8000",
        18E3: "6000-12000",
        24E3: "8000-16000",
        48E3: "16000-32000",
        72E3: "24000-48000"
    }, {
        1E3: 500,
        1400: 700,
        1600: 800,
        2E3: 1E3,
        2400: 1200,
        2600: 1300,
        3E3: 1500,
        3200: 1600,
        3600: 1800,
        4E3: 2E3,
        4600: 2300,
        5200: 2600,
        5800: 2900,
        6400: 3200,
        7200: 3600,
        7800: 3900,
        8E3: 4E3,
        12E3: 6E3,
        16E3: 8E3,
        24E3: 12E3,
        32E3: 16E3,
        64E3: 32E3,
        96E3: 48E3
    }, {
        1100: "300-500",
        1500: "400-700",
        1600: "400-800",
        2E3: "500-1000",
        2400: "600-1200",
        2700: "700-1300",
        3100: "800-1500",
        3200: "800-1600",
        3600: "900-1800",
        4E3: "1000-2000",
        4700: "1200-2300",
        5200: "1300-2600",
        5900: "1500-2900",
        6400: "1600-3200",
        7200: "1800-3600",
        7900: "2000-3900",
        8E3: "2000-4000",
        12E3: "3000-6000",
        16E3: "4000-8000",
        24E3: "6000-12000",
        32E3: "8000-16000",
        64E3: "16000-32000",
        96E3: "24000-48000"
    }, {
        1500: 500,
        2100: 700,
        2400: 800,
        3E3: 1E3,
        3600: 1200,
        3900: 1300,
        4500: 1500,
        4800: 1600,
        5400: 1800,
        6E3: 2E3,
        6900: 2300,
        7800: 2600,
        8700: 2900,
        9600: 3200,
        10800: 3600,
        11700: 3900,
        12E3: 4E3,
        18E3: 6E3,
        24E3: 8E3,
        36E3: 12E3,
        48E3: 16E3,
        96E3: 32E3,
        144E3: 48E3
    }]
      , ka = {
        1001: "プレーヤ名が正しくありません。プレーヤ名には使用できない文字があります。",
        1002: 'このプレーヤ名を使用するにはIDで入場する必要があります<br>■IDの再発行方法は以下を参照してください<br><a href="https://tenhou.net/support.html" target=_blank>https://tenhou.net/support.html</a>',
        1003: 'IDが正しくありません<br>■IDの再発行方法は以下を参照してください<br><a href="https://tenhou.net/support.html" target=_blank>https://tenhou.net/support.html</a><br>180日以上対戦を行っていないIDは停止または削除されている場合があります。七段以上で有料版の決済情報が確認できる場合にはIDの復元が可能です。お早めにお問い合わせください。',
        1004: "このプレーヤは既に接続済みです。しばらく経ってから接続してください。",
        1005: "このプレーヤは既に登録済みです。同じプレーヤ名は使用できません。",
        1006: "この接続元からの新規登録は約７日間行なえません",
        1007: "登録に失敗しました",
        1008: "この接続元からは一定期間アクセスできません<br><br>多くのプレーヤから不正/迷惑行為の通報が寄せられた可能性があります。<br>アクセス解除は問い合わせを頂いても行なえない場合があります。<br>健全なコミュニティの運営に何卒ご理解ご協力をいただきますよう<br>よろしくお願い申し上げます。",
        1009: "通報が完了しました",
        1010: "この機能は個室では利用できません<br>ランキング戦ロビーに移動してください",
        1011: "通報に失敗しました",
        1012: "登録が完了しました。IDを紛失しないようにコピーしてください。<small class=gray>(※180日以上対戦を行っていないIDは削除されますのでご注意ください)</small>",
        1013: "観戦可能な対戦は現在ありません",
        1014: "観戦情報が見つかりませんでした<br>この対戦は既に終了している可能性があります",
        1015: "大会ロビーの作成が完了しました",
        1016: "大会ロビーの作成に失敗しました",
        1017: "予約中は牌譜を閲覧できません",
        1018: "予約中は観戦できません",
        1019: "大会ロビーが見つかりませんでした。",
        1020: "必要な有効期限が不足しています<br><br>今すぐ購入しますか？",
        1021: "外部ログインサーバからの応答がありません",
        1022: "ID互換のないロビーへは移動できません",
        1023: "一時的に使用している外部IDの有効期限が切れました",
        1024: "参加に必要な条件を満たしていません",
        1025: "外部IDでは利用できません",
        1026: "このロビーでは参加登録は行えません",
        1027: "参加登録が完了しました",
        1028: "すでに参加登録が完了しています",
        1100: "このルールへの予約は許可されていません",
        1101: "段位戦の上級/特上卓では、不正防止のため対戦人数が100人未満のルールを予約するには有料会員の有効期限の残りが91日以上必要です",
        1102: "接続数が8000人以下の場合のみ予約が許可されています",
        1200: "トレーニングを使用するにはID登録が必要です。ログイン画面の「新規ID」からIDを取得してください",
        2003: "牌譜の読み込みに失敗しました。<br>プレイ中の牌譜はゲーム終了後に閲覧可能になります"
    };
    function la(a, f) {
        return 0 != (0 == a ? 0 != (f & 1536) ? ~f & 8 : f & 64 : f & 64)
    }
    function ma(a) {
        return (a & 32) >> 4 | (a & 128) >> 7
    }
    function na(a) {
        return 0 != (a & 2048) ? "東天紅" : (a & 16 ? "三" : "四") + "般上特鳳若銀琥孔".substr(ma(a) + 4 * (0 != (a & 1536)), 1) + (a & 8 ? "南" : "東") + (0 != (a & 1536) ? (a & 8 ? "" : "速") + (~a & 512 ? "祝０" : a & 1024 ? "祝５" : "祝２") : (a & 4 ? "" : "喰") + (a & 2 ? "" : "赤") + (a & 64 ? "速" : "") + (a & 256 ? "暗" : "") + (a & 512 ? "祝" : ""))
    }
    var oa = [0, 0, 0, 0, 0, 0, 0, 0, -10, -20, -30, -40, -50, -60, -70, -80, -90, -100, -110, -120, 0]
      , sa = [20, 20, 20, 20, 40, 60, 80, 100, 100, 100, 400, 800, 1200, 1600, 2E3, 2400, 2800, 3200, 3600, 4E3, 0]
      , ta = [1, 3, 0, 7, 9, 11, 0, 15, 65, 0, 0, 0, 73, 0, 0, 0, 129, 131, 0, 135, 137, 139, 0, 143, 193, 0, 0, 0, 201, 0, 0, 0, 33, 35, 0, 39, 41, 43, 0, 47, 97, 0, 0, 0, 105, 0, 0, 0, 161, 163, 0, 167, 169, 171, 0, 175, 225, 0, 0, 0, 233, 0, 0, 0, 17, 25, 145, 153, 49, 57, 177, 185, 81, 89, 209, 217, 113, 121, 241, 249, 1025, 1033, 513, 521, 1537, 1545, 1553, 1561, 1153, 1161, 641, 649, 1665, 1673, 1681, 1689, 1057, 1065, 545, 553, 1569, 1577, 1585, 1593, 1185, 1193, 673, 681, 1697, 1705, 1713, 1721, 2065];
    function xa(a, f, d) {
        a.addEventListener(f, d, !1);
        return a
    }
    function za(a, f) {
        for (var d in f)
            a.addEventListener(d, f[d], !1);
        return a
    }
    function Aa(a, f) {
        for (var d in f)
            a[d] = f[d];
        return a
    }
    function Ba(a) {
        a.sort(function(a, d) {
            return a - d
        })
    }
    function Ca(a, f) {
        a.sort(function(a, b) {
            return (f[a] << 8 | a) - (f[b] << 8 | b)
        })
    }
    function q(a, f) {
        if (void 0 === a || "" === a)
            return [];
        f = f || 1;
        a.split && (a = a.split(","));
        for (var d = 0; d < a.length; ++d)
            a[d] = 1 != f && "" == a[d] ? void 0 : f * ~~a[d];
        return a
    }
    function Da(a) {
        return a.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
    }
    function Ra(a) {
        a = a.split("&");
        var f = {}, d;
        for (d in a)
            if (a[d].length) {
                var b = a[d].split("=");
                f[b.shift()] = decodeURIComponent(b.join("="))
            }
        return f
    }
    function Ta(a) {
        for (var f = a.length - 1; 0 < f; --f) {
            var d = Math.floor(Math.random() * (f + 1))
              , b = a[f];
            a[f] = a[d];
            a[d] = b
        }
        return a
    }
    function Ua(a, f, d) {
        var b = new XMLHttpRequest;
        b.onload = function() {
            200 == this.status ? f(this.response) : d && d(this)
        }
        ;
        b.onerror = function() {
            d && d(this)
        }
        ;
        b.open("GET", a, !0);
        b.send()
    }
    function Wa(a, f) {
        var d;
        return function() {
            clearTimeout(d);
            d = setTimeout(function() {
                d = null;
                a()
            }, f)
        }
    }
    function Xa(a, f) {
        return ("000" + f).slice(-a)
    }
    function Ya(a) {
        return (0 < a ? "+" : "") + a
    }
    var Za = 1
      , r = window
      , ab = document
      , db = ab.body
      , eb = 0
      , fb = 0
      , gb = 0
      , hb = navigator.userAgent;
    hb.match(/iP(hone|od|ad)/) && hb.match(/OS (\d+)_(\d+)/) && (eb = RegExp.$1 + "." + RegExp.$2);
    hb.match(/Android (\d\.\d)/) && (fb = parseFloat(RegExp.$1));
    var gb = 4.4 > fb && 0 < hb.indexOf(" Chrome/") && 0 < hb.indexOf(" Version/")
      , ib = "ontouchstart"in ab.documentElement && !r.navigator.msPointerEnabled
      , jb = !!r.cordova
      , lb = jb || "standalone"in navigator && navigator.standalone
      , mb = !1
      , t = r.devicePixelRatio || 1
      , u = Ra(location.search.substr(1));
    u.TW = u.tw = ~~u.tw % 4;
    u.ab = !(!u.wg && !u.log);
    u.jb = !1;
    u.Gc = function(a) {
        function f(d, b) {
            var h = a.match(d);
            return h ? h[1] : b
        }
        u.log = f(/\?log=([^&]*)/, "");
        u.TW = u.tw = ~~f(/&tw=(\d)/, 0);
        u.ts = ~~f(/&ts=(\d+)/, 0);
        u.wg = f(/\?wg=([^&]*)/, "");
        (u.log || u.wg) && v.ja(11)
    }
    ;
    function nb(a, f, d, b, h) {
        a = ab.createElement(a);
        d && (a.className = d);
        Aa(a, b);
        Aa(a.style, h);
        return f ? f.insertBefore(a, null) : a
    }
    function ob(a) {
        for (var f = 1; f < arguments.length; ++f) {
            var d = arguments[f];
            if (0 === d)
                Array.prototype.push.apply(arguments, "regid clearid idcont cfg uname sx mvlb ok".split(" "));
            else if (1 === d)
                Array.prototype.push.apply(arguments, "testplay haifu kansen openurl help hairi purchase".split(" "));
            else if (2 === d)
                Array.prototype.push.apply(arguments, ["iap", "storePurchase", "exit"]);
            else if (3 === d)
                Array.prototype.push.apply(arguments, ["rule", "join", "cancel", "logout"]);
            else
                for (var d = ab.getElementsByName(d), b = 0; b < d.length; ++b) {
                    var h = d[b];
                    h && (h.disabled = a)
                }
        }
    }
    function pb(a) {
        if (!a)
            return !1;
        a = a.replace(/\?.*$/, "");
        return a.match(/^https?:\/\/(?:[\w-]+\.)+[\w-]+(?:\/[\w-]+)+\.(?:jpg|png|gif)$/)
    }
    var qb = function() {
        var a = []
          , f = new XMLHttpRequest;
        f.onload = function() {
            a.length && 1 != f.readyState && (f.open("POST", "https://tenhou.net/3/err.cgi", !0),
            f.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"),
            f.send(a.shift()))
        }
        ;
        return function() {
            for (var d = arguments[0], b = 1; b < arguments.length; ++b)
                d += " " + arguments[b];
            a.push(d);
            f.onload()
        }
    }()
      , rb = "";
    r.onerror = function(a, f, d) {
        a = a + " " + f + ":" + d;
        rb != a && qb(a);
        rb = a
    }
    ;
    var sb = document.createElement("style");
    sb.innerHTML = "@font-face{font-family:cwTeX-Q-Kai-T;src: url(https://tenhou.net/3/font/cwTeXQKaiT-Medium.ttf) format('truetype');}@font-face{font-family:icons2;src: url(https://tenhou.net/3/font/icons1004.ttf) format('truetype');}*{-webkit-tap-highlight-color:rgba(0,0,0,0);line-height:1;}:focus{outline:0;}HTML{box-sizing:border-box;}*,*:before,*:after{box-sizing:inherit;}HTML{touch-action:pan-y;}BODY{font-family:sans-serif;overflow-x:hidden;-webkit-text-size-adjust:100%;}HR{border-color:#444;border-width:1px 0 0 0;border-style:solid;margin:0.5em 0;}TEXTAREA{margin:0px;word-break:break-all;}SELECT{-webkit-appearance:none;-moz-appearance:none;appearance:none;border-radius:0.6em;}SELECT::-ms-expand{display:none;}BUTTON,SELECT,INPUT,.bth{height:2em;font-size:175%;margin:0;}BUTTON,SELECT,INPUT[type=checkbox]+LABEL,A.bt3{padding:0 0.5em;color:inherit;border:solid 1px #444;}BUTTON,SELECT,INPUT[type=checkbox]+LABEL{background:linear-gradient(to bottom, rgba(0,0,0,0.4) 0%,rgba(167,147,127,0.4) 50%,rgba(31,31,31,0.4) 51%,rgba(0,0,0,0.4) 100%);}A.bt3{display:block;width:100%;height:100%;padding:0 1em;border:solid 1px #444;background:linear-gradient(to bottom, rgba(0,0,0,0.4) 0%,rgba(47,47,47,0.4) 100%);}A.bt3:hover,SELECT:hover{background-color:#030;}SELECT:disabled,BUTTON:disabled{color:#888;background:#444;pointer-events:none;}OPTION{background-color:#FFF;color:#000;}BUTTON *{pointer-events:none;}.notxt{font-size:0px;}.sscl{-webkit-overflow-scrolling:touch;}.rot000{position:absolute;}.rot090{position:absolute;transform:rotate( 90deg);-webkit-transform:rotate( 90deg);filter:progid:DXImageTransform.Microsoft.BasicImage(rotation=1);}.rot180{position:absolute;transform:rotate(180deg);-webkit-transform:rotate(180deg);filter:progid:DXImageTransform.Microsoft.BasicImage(rotation=2);}.rot270{position:absolute;transform:rotate(270deg);-webkit-transform:rotate(270deg);filter:progid:DXImageTransform.Microsoft.BasicImage(rotation=3);}.ts0,sblink{text-shadow:#000 -1px 0px 0px, #000 1px 0px 0px, #000 1px 1px 1px,#000 -1px -1px 1px;}.tsv{text-shadow:#000 -1px -1px 0px, #000 0px 1px 0px, #000 3px 3px 0px;}.nosel{-ms-user-select:none;-moz-user-select:none;-webkit-user-select:none;user-select:none;}.tbl{display:table;}.tbc{display:table-cell;}.nobr{word-break:keep-all;white-space:nowrap;}.gray{color:#666;}.bgb40{background-color:rgba(0,0,0,0.4);}.bgb60{background-color:rgba(0,0,0,0.6);}.bgb80{background-color:rgba(0,0,0,0.8);}.bgb{background-color:#000;}.ra0{border-radius:0.6em;}.ra1{border-radius:0.6em 0 0 0.6em;}.ra2{border-radius:0 0.6em 0.6em 0;}.dan18,.dan19,.dan20{font-weight:bold;}.n2r{display:inline-block;width:2em;text-align:right;}SELECT{padding-right:1em;}.select-wrapper{position:relative;display:inline-block;}.select-wrapper:after{content:'';position:absolute;right:0.5em;top:45%;width:0;height:0;border-left:0.3em solid transparent;border-right:0.3em solid transparent;border-top: 0.3em solid #FFF;pointer-events:none;}.select-wrapper>BUTTON:first-child{padding-right:1em;border-radius:0.6em;}.fixed-select{min-width:10em;max-width:90vw;max-height:85vh;overflow-y:auto;}.fixed-select .A{font-size:150%;color:#000;padding:0.5em;text-decoration:none;display:block;}.fixed-select .A{border-bottom:1px solid #DDD;cursor:pointer;}.fixed-select .A:nth-child(1){border-top:1px solid #DDD;}.fixed-select .A:hover{background-color:#CCC}.fixed-select .A DIV.desc{color:#666;font-size:50%;}.fixed-select .A *{pointer-events:none;}.vscl::-webkit-scrollbar{background:#CCC;width:0.5em;}.vscl::-webkit-scrollbar-thumb{background:#AAA;}INPUT[type=checkbox]{display:none;}INPUT[type=checkbox]+LABEL{position:relative;cursor:pointer;display:inline-block;border-radius:0.6em;}INPUT[type=checkbox]+LABEL{padding:0.5em 0.5em 0.5em 1.8em;}INPUT[type=checkbox]+LABEL::before{font-family:icons2;content:'';position:absolute;left:0.5em;top:25%;}INPUT[type=checkbox]:checked+LABEL::before{content:'';}INPUT[type=checkbox]:disabled+LABEL{color:#888;background:#444;pointer-events:none;}.bblink{animation: _bblink 0.5s ease 0s infinite alternate;}@keyframes _bblink{0%{background-color:rgba(255,255,255,0.3);}30%{background-color:rgba(0,0,0,0.3);}100%{background-color:rgba(0,0,0,0.3);}}.cblink{animation: _cblink 1.75s linear 0s infinite alternate;}@keyframes _cblink{0%{color:#FFF;}80%{color:#FFF;}100%{color:#666;}}.sblink{animation: _sblink 0.5s linear 0s infinite alternate;position:absolute;bottom:0;right:0.25em;color:#888;font-size:300%;pointer-events:none;}@keyframes _sblink{0%{color:transparent;}30%{color:#888;}100%{color:#888;}}.fadeinqs{animation:_fadein 0.25s ease 0s 1 normal;}.fadein2s{animation:_fadein 2s ease 0s 1 normal;}@keyframes _fadein{0%{opacity:0;}100%{opacity:1;}}.flip{perspective:100px;opacity:0;transform:rotateX(-90deg);transition:all 0.5s cubic-bezier(.36,-0.64,.34,1.76);}.flip.show{opacity:1;transform:none;transition:all 0.5s cubic-bezier(.36,-0.64,.34,1.76);}.flipinqs{animation:_flipin 0.25s cubic-bezier(0.175, 0.885, 0.320, 1) 0s 1 normal;}.flipinhs{animation:_flipin 0.5s cubic-bezier(0.175, 0.885, 0.320, 1) 0s 1 normal;}.flipin1s{animation:_flipin 1s cubic-bezier(0.175, 0.885, 0.320, 1) 0s 1 normal;}@keyframes _flipin{0%{opacity:0;transform:rotateX(-90deg);}100%{opacity:1;transform:none;}}.flipinqs.hide{animation:_flipout 0.25s cubic-bezier(0.600, 0, 0.735, 0.045) 0s 1 normal;}.flipinhs.hide{animation:_flipout 0.5s cubic-bezier(0.600, 0, 0.735, 0.045) 0s 1 normal;}@keyframes _flipout{0%{opacity:1;transform:none;}100%{opacity:0;transform:rotateX(-90deg);}}.arrow-box-left,.arrow-box-right{position:relative;background:#FFF;color:#000;border-radius:0.2em;padding:0.5em;}.arrow-box-left:after{right:100%;top:50%;border:solid transparent;content:' ';height:0;width:0;position:absolute;pointer-events:none;border-color:rgba(255, 255, 255, 0);border-right-color:#FFF;border-width:0.5em;margin-top:-0.5em;}.arrow-box-right:after {left:100%;top:50%;border:solid transparent;content:' ';height:0;width:0;position:absolute;pointer-events:none;border-color:rgba(255, 255, 255, 0);border-left-color:#FFF;border-width:0.5em;margin-top:-0.5em;}#pftab TD,#rnktab TD{padding-top:0.35em;}.trtab TD{padding:0.5em 0.25em;}";
    db.appendChild(sb);
    function z(a) {
        return "<span class=gray>" + a + "</span>"
    }
    function tb(a) {
        return "<span class=nobr>" + a + "</span>"
    }
    nb("SPAN", db, "", {
        innerHTML: "FontLoader&#xe800;"
    }, {
        position: "absolute",
        fontFamily: "cwTeX-Q-Kai-T,icons2",
        visibility: "hidden"
    });
    setInterval(function() {
        for (var a = ab.getElementsByClassName("sblink"), f = 0; f < a.length; ++f) {
            var d = a[f]
              , b = d.previousSibling;
            d.style.visibility = b.scrollTop + b.offsetHeight < b.scrollHeight - .25 * d.offsetHeight ? "" : "hidden"
        }
    }, 1E3);
    var wb = function() {
        function a(b) {
            var a = b & 7
              , c = 0
              , d = 0;
            1 == a || 4 == a ? c = d = 1 : 2 == a && (c = d = 2);
            b >>= 3;
            a = (b & 7) - c;
            if (0 > a)
                return !1;
            c = d;
            d = 0;
            1 == a || 4 == a ? (c += 1,
            d += 1) : 2 == a && (c += 2,
            d += 2);
            b >>= 3;
            a = (b & 7) - c;
            if (0 > a)
                return !1;
            c = d;
            d = 0;
            1 == a || 4 == a ? (c += 1,
            d += 1) : 2 == a && (c += 2,
            d += 2);
            b >>= 3;
            a = (b & 7) - c;
            if (0 > a)
                return !1;
            c = d;
            d = 0;
            1 == a || 4 == a ? (c += 1,
            d += 1) : 2 == a && (c += 2,
            d += 2);
            b >>= 3;
            a = (b & 7) - c;
            if (0 > a)
                return !1;
            c = d;
            d = 0;
            1 == a || 4 == a ? (c += 1,
            d += 1) : 2 == a && (c += 2,
            d += 2);
            b >>= 3;
            a = (b & 7) - c;
            if (0 > a)
                return !1;
            c = d;
            d = 0;
            1 == a || 4 == a ? (c += 1,
            d += 1) : 2 == a && (c += 2,
            d += 2);
            b >>= 3;
            a = (b & 7) - c;
            if (0 > a)
                return !1;
            c = d;
            d = 0;
            1 == a || 4 == a ? (c += 1,
            d += 1) : 2 == a && (c += 2,
            d += 2);
            b >>= 3;
            a = (b & 7) - c;
            if (0 != a && 3 != a)
                return !1;
            a = (b >> 3 & 7) - d;
            return 0 == a || 3 == a
        }
        function f(b, d) {
            if (0 == b) {
                if (128 <= (d & 448) && a(d - 128) || 65536 <= (d & 229376) && a(d - 65536) || 33554432 <= (d & 117440512) && a(d - 33554432))
                    return !0
            } else if (1 == b) {
                if (16 <= (d & 56) && a(d - 16) || 8192 <= (d & 28672) && a(d - 8192) || 4194304 <= (d & 14680064) && a(d - 4194304))
                    return !0
            } else if (2 == b && (2 <= (d & 7) && a(d - 2) || 1024 <= (d & 3584) && a(d - 1024) || 524288 <= (d & 1835008) && a(d - 524288)))
                return !0;
            return !1
        }
        function d(b, a) {
            return b[a + 0] << 0 | b[a + 1] << 3 | b[a + 2] << 6 | b[a + 3] << 9 | b[a + 4] << 12 | b[a + 5] << 15 | b[a + 6] << 18 | b[a + 7] << 21 | b[a + 8] << 24
        }
        return {
            Bb: function(b) {
                var h = 1 << b[27] | 1 << b[28] | 1 << b[29] | 1 << b[30] | 1 << b[31] | 1 << b[32] | 1 << b[33];
                if (16 <= h)
                    return !1;
                if (2 == (h & 3) && 2 == b[0] * b[8] * b[9] * b[17] * b[18] * b[26] * b[27] * b[28] * b[29] * b[30] * b[31] * b[32] * b[33] || !(h & 10) && 7 == (2 == b[0]) + (2 == b[1]) + (2 == b[2]) + (2 == b[3]) + (2 == b[4]) + (2 == b[5]) + (2 == b[6]) + (2 == b[7]) + (2 == b[8]) + (2 == b[9]) + (2 == b[10]) + (2 == b[11]) + (2 == b[12]) + (2 == b[13]) + (2 == b[14]) + (2 == b[15]) + (2 == b[16]) + (2 == b[17]) + (2 == b[18]) + (2 == b[19]) + (2 == b[20]) + (2 == b[21]) + (2 == b[22]) + (2 == b[23]) + (2 == b[24]) + (2 == b[25]) + (2 == b[26]) + (2 == b[27]) + (2 == b[28]) + (2 == b[29]) + (2 == b[30]) + (2 == b[31]) + (2 == b[32]) + (2 == b[33]))
                    return !0;
                if (h & 2)
                    return !1;
                var c = b[0] + b[3] + b[6]
                  , g = b[1] + b[4] + b[7]
                  , n = b[9] + b[12] + b[15]
                  , p = b[10] + b[13] + b[16]
                  , l = b[18] + b[21] + b[24]
                  , k = b[19] + b[22] + b[25]
                  , m = (c + g + (b[2] + b[5] + b[8])) % 3;
                if (1 == m)
                    return !1;
                var x = (n + p + (b[11] + b[14] + b[17])) % 3;
                if (1 == x)
                    return !1;
                var E = (l + k + (b[20] + b[23] + b[26])) % 3;
                if (1 == E || 1 != (2 == m) + (2 == x) + (2 == E) + (2 == b[27]) + (2 == b[28]) + (2 == b[29]) + (2 == b[30]) + (2 == b[31]) + (2 == b[32]) + (2 == b[33]))
                    return !1;
                c = (1 * c + 2 * g) % 3;
                g = d(b, 0);
                n = (1 * n + 2 * p) % 3;
                p = d(b, 9);
                l = (1 * l + 2 * k) % 3;
                b = d(b, 18);
                return h & 4 ? !(m | c | x | n | E | l) && a(g) && a(p) && a(b) : 2 == m ? !(x | n | E | l) && a(p) && a(b) && f(c, g) : 2 == x ? !(E | l | m | c) && a(b) && a(g) && f(n, p) : 2 == E ? !(m | c | x | n) && a(g) && a(p) && f(l, b) : !1
            },
            eb: function(b) {
                var a = []
                  , c = 0;
                if (12 <= (0 !== b[0]) + (0 !== b[8]) + (0 !== b[9]) + (0 !== b[17]) + (0 !== b[18]) + (0 !== b[26]) + (0 !== b[27]) + (0 !== b[28]) + (0 !== b[29]) + (0 !== b[30]) + (0 !== b[31]) + (0 !== b[32]) + (0 !== b[33]))
                    for (; 34 > c; ++c)
                        3 >= b[c] && (++b[c],
                        wb.Bb(b) && a.push(c),
                        --b[c]);
                else {
                    for (; 27 > c; ++c)
                        3 >= b[c] && (b[c] || 0 < c % 9 && b[c - 1] || 8 > c % 9 && b[c + 1]) && (++b[c],
                        wb.Bb(b) && a.push(c),
                        --b[c]);
                    for (; 34 > c; ++c)
                        3 >= b[c] && b[c] && (++b[c],
                        wb.Bb(b) && a.push(c),
                        --b[c])
                }
                return a
            },
            Ac: function(b) {
                for (var a = {}, c = 0; 34 > c; ++c)
                    b[c] && (--b[c],
                    a[c] = wb.eb(b),
                    ++b[c]);
                return a
            }
        }
    }();
    var A = function() {
        function a(b) {
            d && d[b] && 0 == d[b](f) || !f || (f.parentNode.removeChild(f),
            f = null)
        }
        var f, d;
        return {
            l: function(b, h, c, g) {
                1 == arguments.length && (h = 1);
                d = [g, c];
                var n = f = nb("DIV", db, "tbl fadeinqs", {}, {
                    position: "fixed",
                    left: 0,
                    top: 0,
                    width: "100%",
                    height: "100%",
                    background: "rgba(0,0,0,0.75)"
                });
                setTimeout(function() {
                    h || xa(n, "click", function() {
                        a(0)
                    });
                    n = nb("DIV", n, "tbc", {}, {
                        textAlign: "center",
                        verticalAlign: "middle"
                    });
                    n = nb("DIV", n, "", {}, {
                        display: "inline-block",
                        background: "#FFF",
                        color: "#000",
                        borderRadius: "0.6em",
                        maxWidth: "90vw",
                        padding: "1em"
                    });
                    n.innerHTML = '<div style="position:relative;font-size:150%;' + (h ? "padding:1em 0;" : "") + '">' + b + '</div><button style="width:6em;">CANCEL</button><button style="width:6em;">OK</button>';
                    var c = n.getElementsByTagName("BUTTON");
                    c[0].onclick = function() {
                        a(0)
                    }
                    ;
                    c[0].style.display = h & 2 ? "" : "none";
                    c[1].onclick = function() {
                        a(1)
                    }
                    ;
                    c[1].style.display = h & 1 ? "" : "none";
                    c = n.getElementsByTagName("INPUT");
                    if (fb && jb)
                        for (var d = 0; d < c.length; ++d)
                            za(c[d], {
                                focus: function() {
                                    xb(1)
                                },
                                blur: function() {
                                    xb()
                                }
                            });
                    c.length && c[0].focus()
                }, 1)
            },
            da: function(b, a, c, d, f) {
                return A.l('<div class="fixed-select sscl" style="position:relative;' + (a || "") + '">' + b + '</div><div class=sblink style="visibility:hidden;">▼</div>', c, d, f)
            },
            Za: function() {
                return !!f
            }
        }
    }();
    xa(r, "click", function(a) {
        var f = a.target;
        if (f.classList.contains("A") && f.id && f.parentNode.classList.contains("fixed-select"))
            if ("A" == f.tagName && a.preventDefault(),
            a = f.id.split("-"),
            C.b && C[a[0]])
                C[a[0]](a[0], a[1]);
            else
                switch (a[0]) {
                case "#tw":
                    3 == H.a ? yb.ub(a[0], a[1]) : 2 == H.a && zb.ub(a[0], a[1]);
                    break;
                case "#ts":
                    yb.Vb(a[0], a[1]);
                    break;
                case "#tj":
                    yb.Wb(a[0], a[1])
                }
    });
    function Ab(a) {
        if ("254" == a)
            return "a";
        if ("255" == a)
            return "r";
        if ("136" == a)
            return "0z";
        var f = a >> 2;
        return (27 > f && 16 == a % 36 ? "0" : f % 9 + 1) + "mpsz".substr(f / 9, 1)
    }
    function Bb(a) {
        for (var f = "", d = 0; d < a.length; ++d)
            f += Ab(a[d]);
        return f.replace(/\d(m|p|s|z)(\d\1)*/g, "$&:").replace(/(m|p|s|z)([^:])/g, "$2").replace(/:/g, "")
    }
    function Cb(a) {
        return a.replace(/(\d)(\d{0,8})(\d{0,8})(\d{0,8})(\d{0,8})(\d{0,8})(\d{0,8})(\d{8})(m|p|s|z)/g, "$1$9$2$9$3$9$4$9$5$9$6$9$7$9$8$9").replace(/(\d?)(\d?)(\d?)(\d?)(\d?)(\d?)(\d)(\d)(m|p|s|z)/g, "$1$9$2$9$3$9$4$9$5$9$6$9$7$9$8$9").replace(/(m|p|s|z)(m|p|s|z)+/g, "$1").replace(/([^0-9]|^)[mpsz](\d[mpsz\d]*)/g, "$1$2")
    }
    function Db(a) {
        if (!a)
            return "";
        for (var f = [], d = 0; 34 > d; ++d)
            f[d] = 0;
        return Cb(a).replace(/r/g, "255,").replace(/a/g, "254,").replace(/(\d)([mpsz])(?![mpsz])/g, function(b, a, c) {
            a = ~~a;
            if ("z" == c && 0 == a)
                return "136,";
            b = "m" == c ? 0 : "p" == c ? 1 : "s" == c ? 2 : 3;
            return a ? 36 * b + 4 * (a - 1) + ++f[9 * b + (a - 1)] % 4 + "," : 4 * (9 * b + 4) + 0 + ","
        }).replace(/,$/, "")
    }
    ;var I;
    (function() {
        try {
            I = r.localStorage,
            I.setItem("a", 1),
            I.removeItem("a")
        } catch (h) {
            I = {
                removeItem: function(b) {
                    delete I[b]
                }
            },
            navigator.userAgent.match(/TwitterAndroid/) ? A.l("Twitterの専用ブラウザでは、設定の保存(牌譜の記録/IDの保存/など)が行えません。メニューの「ブラウザで開く」から通常のブラウザで開いてください。") : A.l("このブラウザ環境(プライベートブラウズなど)では、牌譜の記録やIDの保存などが行えません。")
        }
        var a = I.scro;
        if (jb && r.screen && r.screen.orientation && r.screen.orientation.lock) {
            var f = screen.orientation
              , d = f.type;
            if (eb && ("landscape-primary" == d || "landscape-secondary" == d)) {
                var b = ab.getElementById("loading");
                b && (b.style.display = "none");
                r.StatusBar.overlaysWebView(!0);
                r.StatusBar.hide();
                f.lock("portrait");
                "landscape-primary" == d ? f.lock("landscape-secondary") : "landscape-secondary" == d && f.lock("landscape-primary");
                b && setTimeout(function() {
                    b.style.display = "table"
                }, 1E3)
            }
            eb && 2 == a ? f.lock("landscape-primary" == d ? "landscape-secondary" : "landscape-secondary" == d ? "landscape-primary" : "landscape") : f.lock(1 == a ? "portrait" : 2 == a ? "landscape" : "any")
        }
    }
    )();
    function Eb(a, f, d) {
        f != d ? I.setItem(a, f) : I.removeItem(a)
    }
    (function() {
        function a(f) {
            mb = "mousedown" == f.type;
            f = I.desktop;
            1 != f && 2 != f && (Eb("desktop", mb ? 3 : 0, 0),
            f !== I.desktop && Ib());
            r.removeEventListener("touchstart", a, !1);
            r.removeEventListener("mousedown", a, !1)
        }
        za(r, {
            touchstart: a,
            mousedown: a
        })
    }
    )();
    var Jb = 108
      , Kb = nb("DIV", db, "nosel", {}, {
        display: "none",
        color: "#CCC",
        backgroundColor: "#444",
        height: Jb + "px"
    })
      , Lb = nb("DIV", db, "", {}, {
        display: "none",
        overflow: "hidden",
        position: "absolute"
    })
      , Mb = nb("DIV", db, "", {}, {
        position: "absolute"
    });
    ib && !lb ? Kb.innerHTML = '<div style="width:100%;height:100%;display:table;pointer-events:none;"><div style="display:table-cell;text-align:center;vertical-align:middle;">上にゆっくりスクロールしてください</div></div>' : (Kb.style.height = Jb = 0,
    db.style.overflow = "hidden");
    function Nb() {
        function a() {
            d = null;
            var a = ab.documentElement.clientWidth
              , c = r.innerHeight
              , g = (~~r.orientation + 360) % 360
              , n = b[0];
            ib && ((~~g + 360) % 180 && (n = b[1]),
            fb && a == n[1] && (Lb.style.display = Kb.style.display = "none",
            n[0] = n[1] = 0),
            a < n[0] && (a = n[0]),
            c < n[1] && (c = n[1]));
            a == parseInt(Lb.style.width) && c == parseInt(Lb.style.height) ? (n[0] = a,
            n[1] = c,
            db.style.height = parseInt(Kb.style.height) + c + "px",
            Lb.style.display = Kb.style.display = "",
            Ib()) : (f(),
            xb(),
            r.scrollTo(0, parseInt(Kb.style.height)),
            Lb.style.width = a + "px",
            Lb.style.height = c + "px")
        }
        function f(b) {
            eb && (Lb.style.display = Kb.style.display = "none");
            b && "resize" == b.type || (db.style.height = 2 * r.innerHeight + "px");
            clearTimeout(d);
            d = setTimeout(a, 250)
        }
        var d, b = [[0, 0], [0, 0]];
        xa(r, "orientationchange", eb ? f : function() {
            Lb.style.display = Kb.style.display = "none";
            var a = b[(~~((~~r.orientation + 360) % 360) + 360) % 180 ? 1 : 0];
            a[0] = a[1] = 0;
            f()
        }
        );
        xa(r, "resize", f);
        f()
    }
    function Ob(a, f, d) {
        var b = f / t + "px"
          , h = d / t + "px";
        if (a.width != f || a.height != d)
            a.width = f,
            a.height = d;
        a = a.style;
        if (a.width != b || a.height != h)
            a.width = b,
            a.height = h
    }
    function Pb() {
        K.a = 2;
        K.a = 3 == H.a ? I.check & 24 ? 3 : ~~I.yama : ~~I.yama;
        0 == K.a && I.desktop && (K.a = 1);
        Qb();
        M.Ec();
        var a = Rb
          , f = Sb;
        db.parentNode.style.fontSize = ~~((a - 2 * N[1]) / t / 30) + "px";
        Tb.style.width = (a + (3 == H.a && Lb.offsetHeight < Lb.offsetWidth ? (a - 2 * N[1]) / 8 : 0)) / t + "px";
        Tb.style.height = f / t + "px";
        Ob(Ub.v.canvas, a, f);
        Ob(Q.v.canvas, Vb, f);
        Ob(Wb.v.canvas, Vb, f);
        a = -~~((Vb - a) / 2 / t);
        Q.v.canvas.style.marginLeft = Wb.v.canvas.style.marginLeft = a + "px";
        Xb.fa();
        R.K();
        Yb.K();
        Zb.style.left = ~~(R[80] / t) + a + "px";
        Zb.style.top = ~~(R[81] / t) + "px";
        f = $b.v.canvas;
        f.style.marginLeft = ~~(R[32] / t) + a + "px";
        f.style.marginTop = ~~(R[33] / t) + "px";
        Ob(f, R[34], R[35]);
        Ub.S();
        $b.S();
        Q.vb();
        S.K();
        v.K();
        C.K();
        ac.K();
        Mb.style.top = Tb.offsetHeight + S.b.offsetHeight + "px";
        (a = ab.getElementById("loading")) && a.parentNode.removeChild(a)
    }
    function Ib() {
        Ib = Pb;
        v.ja(11, r.tenhouEventInfo && !ab.referrer.match(/^https?:\/\/tenhou.net/))
    }
    function xb(a) {
        var f = r.StatusBar;
        if (f) {
            jb && fb && f.backgroundColorByHexString("#000");
            var d = ab.documentElement.clientWidth
              , b = r.innerHeight;
            !a && b < d ? (f.overlaysWebView(!0),
            f.hide()) : (f.overlaysWebView(!1),
            f.show())
        }
    }
    jb && xa(ab, "resume", Wa(function() {
        Ub.S();
        $b.S();
        Q.vb();
        var a = Wb.v;
        a.clearRect(0, 0, a.canvas.width + 1, a.canvas.height + 1)
    }, 1));
    var Tb = nb("DIV", Lb, "nosel tbl", {}, {
        margin: "0 auto",
        position: "relative"
    });
    function bc(a, f) {
        var d = arguments;
        a.beginPath();
        a.moveTo(d[2], d[3]);
        for (var b = 4; b < d.length; )
            switch (d[b++]) {
            case 0:
                b += 2;
                break;
            case 1:
                a.lineTo(d[b++], d[b++]);
                break;
            case 2:
                a.arcTo(d[b++], d[b++], d[b + 1], d[b + 2], f)
            }
        a.closePath()
    }
    function cc(a, f, d, b, h) {
        var c = ~~(.5 * T[0]);
        bc(a, c, f + c, d + h, 2, f + b, d + h, 2, f + b, d, 2, f, d, 2, f, d + h, 0, f + b, d + h + .01)
    }
    var Ub = function() {
        function a(a, d, b, h, c) {
            c && (a.fillStyle = c,
            a.fillText(d, 1, b + 0),
            a.fillText(d, -1, b + 0),
            a.fillText(d, 0, b + 1),
            a.fillText(d, 0, b - 1),
            a.fillText(d, 1, b + 1),
            a.fillText(d, -1, b + 1),
            a.fillText(d, 1, b - 1),
            a.fillText(d, -1, b - 1));
            h && (a.fillStyle = h,
            a.fillText(d, 0, b))
        }
        return {
            v: nb("CANVAS", Tb, "", {}, {
                position: "absolute",
                pointerEvents: "none"
            }).getContext("2d"),
            S: Wa(function() {
                var f = Ub.v;
                if (f && (f.setTransform(1, 0, 0, 1, 0, 0),
                f.clearRect(0, 0, f.canvas.width + 1, f.canvas.height + 1),
                M.cb.complete && M.cb.height && f.drawImage(M.cb, 0, 0),
                -1 != H.ka)) {
                    var d = Q.v.canvas.offsetLeft * t
                      , b = R[16] + d
                      , h = R[17]
                      , c = R[18]
                      , g = R[19]
                      , n = T[0]
                      , p = ~~(.5 * n);
                    f.fillStyle = "#000";
                    cc(f, b, h, c, g);
                    f.globalAlpha = .2;
                    f.fill();
                    f.globalAlpha = 1;
                    var l = 3 * N[1]
                      , k = 3 * U[0]
                      , m = [f];
                    m.push(p, b, h + g);
                    H.B[0] && m.push(2, b, h + g + k, 2, b + c + l, h + g + k, 2, b + c + l, h + g + n, 1, b + c, h + g + n);
                    m.push(1, b + c, h + g);
                    H.B[1] && m.push(2, b + c + l, h + g, 2, b + c + l, h - k, 2, b + c + n, h - k, 1, b + c + n, h);
                    m.push(1, b + c, h);
                    H.B[2] && m.push(2, b + c, h - k, 2, b - l, h - k, 2, b - l, h - n, 1, b, h - n);
                    m.push(1, b, h);
                    H.B[3] && m.push(2, b - l, h, 2, b - l, h + g + k, 2, b - n, h + g + k, 1, b - n, h + g);
                    bc.apply(this, m);
                    f.globalAlpha = .15;
                    f.fill();
                    f.globalAlpha = 1;
                    for (b = 0; 4 > b; ++b)
                        H.B[b] && (f.setTransform(1, 0, 0, 1, d, 0),
                        f.fillStyle = "#000",
                        c = 48 + 4 * b,
                        h = f,
                        cc(h, R[c + 0], R[c + 1], R[c + 2], R[c + 3]),
                        h.globalAlpha = .15,
                        h.fill(),
                        h.globalAlpha = 1,
                        h = Math.min(R[c + 2] / 2, R[c + 3] / 2),
                        f.textAlign = "center",
                        f.textBaseline = "middle",
                        f.setTransform(1, 0, 0, 1, R[c + 0] + ~~(R[c + 2] / 2) + d, R[c + 1] + ~~(R[c + 3] / 2)),
                        f.rotate(270 * b * Math.PI / 180),
                        c = 0 == b || 3 == b ? "rgba(255,255,255,0.25)" : "rgba(191,191,191,0.25)",
                        g = void 0,
                        u.jb || (c = 0 == b || 3 == b ? "rgba(255,255,255,0.80)" : "rgba(191,191,191,0.80)",
                        g = "rgba(0,0,0,0.50)"),
                        n = -.1,
                        1800 <= H.Qa[b] && (f.font = "normal " + .3 * h + "px sans-serif",
                        a(f, "R" + ~~H.Qa[b], -.55 * h, c, g),
                        n = 0),
                        f.font = "normal " + .9 * h + "px cwTeX-Q-Kai-T,icons2,serif",
                        a(f, ga[H.Ua[b]], h * n, c, g),
                        f.font = "normal " + .25 * h + "px sans-serif",
                        a(f, H.B[b], h * (.55 + n), c, g));
                    f.fillStyle = "#000";
                    f.setTransform(1, 0, 0, 1, d, 0);
                    for (b = 0; 4 > b; ++b)
                        H.B[b] && (d = b ? 0 : T[4],
                        h = R[80 + 2 * b],
                        c = R[81 + 2 * b],
                        g = R[96 + 2 * b],
                        n = R[97 + 2 * b],
                        0 == b && (ty0 = R[97]),
                        p = f,
                        cc(p, Math.min(h, g), Math.min(c, n) + d, Math.abs(h - g) + N[b], Math.abs(c - n) + U[b] + T[b] - d),
                        p.globalAlpha = .2,
                        p.fill(),
                        p.globalAlpha = 1)
                }
            })
        }
    }();
    var Q = function() {
        function a(a, b, c, d) {
            if (c && d) {
                var l = Q.v;
                l.clearRect(a, b, c, d);
                c = a + c;
                d = b + d;
                for (var k, f = 0; k = R.ra[f]; ++f) {
                    var g = k.i;
                    if (void 0 !== g && 0 !== k.u && g.ya.complete && g.ya.height) {
                        var p = k.ta.c + g.offsetX
                          , h = k.ta.h - k.ta.Ba + g.offsetY;
                        if (!(c <= p || d <= h)) {
                            var n = p + g.ha;
                            if (!(n <= a)) {
                                var D = h + g.va;
                                if (!(D <= b)) {
                                    var ca = a - p;
                                    0 < ca ? p = a : ca = 0;
                                    c < n && (n = c);
                                    var n = n - p
                                      , pa = b - h;
                                    0 < pa ? h = b : pa = 0;
                                    d < D && (D = d);
                                    D -= h;
                                    l.globalAlpha = k.u;
                                    l.drawImage(g.ya, g.Xa + ca, g.Ya + pa, n, D, p, h, n, D);
                                    k.aa && (g = k.ia,
                                    l.globalAlpha = k.aa,
                                    l.drawImage(g.ya, g.Xa + ca, g.Ya + pa, n, D, p, h, n, D))
                                }
                            }
                        }
                    }
                }
                l.globalAlpha = 1
            }
        }
        function f(a, d, l, k) {
            c && g ? (a < b ? (c += b - a,
            b = a) : l += a - b,
            c < l && (c = l),
            d < h ? (g += h - d,
            h = d) : k += d - h,
            g < k && (g = k)) : (b = a,
            h = d,
            c = l,
            g = k)
        }
        var d = Wa(function() {
            var b = Q.v;
            b.clearRect(0, 0, b.canvas.width + 1, b.canvas.height + 1);
            for (var c, d = 0; c = R.ra[d]; ++d) {
                var k = c.i;
                if (void 0 !== k && 0 !== c.u && k.ya.complete && k.ya.height) {
                    var m = c.ta.c + k.offsetX
                      , f = c.ta.h - c.ta.Ba + k.offsetY;
                    b.globalAlpha = c.u;
                    b.drawImage(k.ya, k.Xa, k.Ya, k.ha, k.va, m, f, k.ha, k.va);
                    if (c.aa) {
                        var g = c.ia;
                        b.globalAlpha = c.aa;
                        b.drawImage(g.ya, g.Xa, g.Ya, k.ha, k.va, m, f, k.ha, k.va)
                    }
                }
            }
            Q.Ka = a
        }, 1), b, h, c, g;
        return {
            v: nb("CANVAS", Tb, "", {}, {
                position: "absolute",
                pointerEvents: "none"
            }).getContext("2d"),
            vb: function() {
                (Q.Ka = d)()
            },
            za: function() {
                b = h = c = g = 0;
                Q.Ka = f
            },
            Aa: function() {
                a(b, h, c, g);
                Q.Ka = a
            },
            Ka: a
        }
    }();
    var $b = function() {
        function a(a, b) {
            for (var c = $b.v, d = [], h = 2; h < arguments.length; h += 5) {
                c.font = arguments[h + 0];
                var l = c.measureText(arguments[h + 3]).width;
                d.push(l);
                a -= l / 2
            }
            for (h = 2; h < arguments.length; h += 5)
                c.font = arguments[h + 0],
                c.fillStyle = f[arguments[h + 1]],
                (l = f[arguments[h + 2]]) ? (c.shadowBlur = 2 * t,
                c.shadowColor = l,
                c.shadowOffsetX = 1 * t,
                c.shadowOffsetY = 1 * t) : (c.shadowBlur = 0,
                c.shadowColor = "#000",
                c.shadowOffsetX = 0,
                c.shadowOffsetY = 0),
                l = d.shift(),
                c.fillText(arguments[h + 3], a + l / 2, b + arguments[h + 4]),
                a += l
        }
        var f = "#FFF #666 #000 #00F #F00 #AAA".split(" ")
          , d = 0
          , b = 0;
        return {
            v: nb("CANVAS", Tb, "", {}, {
                position: "absolute",
                display: "none"
            }).getContext("2d"),
            S: function(f, c) {
                void 0 !== f && (d = f);
                void 0 !== c && (b = c);
                var g = $b.v
                  , h = g.canvas.width
                  , p = g.canvas.height
                  , l = Math.min(.18 * h, .18 * p);
                if (1 == K.a || 3 == K.a)
                    l *= .9;
                g.save();
                g.setTransform(1, 0, 0, 1, 0, 0);
                g.clearRect(0, 0, h + 1, p + 1);
                cc(g, 1, 1, h - 2, p - 2);
                u.jb ? (g.fillStyle = "#222",
                g.fill()) : (g.globalAlpha = .75,
                g.fillStyle = "#222",
                g.fill(),
                g.globalAlpha = 1);
                g.strokeStyle = "#111";
                g.lineWidth = 1;
                g.stroke();
                var k = b
                  , m = .24 * l
                  , x = .02 * l
                  , E = $b.v
                  , w = E.canvas.width
                  , B = E.canvas.height
                  , y = E.createLinearGradient(0, 0, k & 1 ? 0 : w, k & 1 ? B : 0);
                y.addColorStop(0, "rgba(0,127,0,0)");
                y.addColorStop(.2, "rgba(0,127,0,255)");
                y.addColorStop(.8, "rgba(0,127,0,255)");
                y.addColorStop(1, "rgba(0,127,0,0)");
                E.fillStyle = y;
                switch (k) {
                case 0:
                    E.fillRect(0, B - m - x, w, m);
                    break;
                case 1:
                    E.fillRect(w - m - x, 0, m, B);
                    break;
                case 2:
                    E.fillRect(0, x, w, m);
                    break;
                case 3:
                    E.fillRect(x, 0, m, B)
                }
                k = "normal " + 1.2 * l + "px cwTeX-Q-Kai-T,icons2,serif";
                m = "normal " + .8 * l + "px cwTeX-Q-Kai-T,icons2,serif";
                x = .15 * l;
                g.textAlign = "center";
                g.textBaseline = "middle";
                g.setTransform(1, 0, 0, 1, h / 2, p / 2);
                E = [[0, p / 2 - .7 * l], [0, h / 2 - .7 * l], [0, p / 2 - .7 * l], [0, h / 2 - .7 * l]];
                if (3 != d)
                    if (0 == d)
                        for (w = 0; 4 > w; ++w)
                            E[w].push(k, (4 + w - H.ka) % 4 ? 1 : 0, -1, H.gb[w] + " ", 0, k, H.connected & 1 << w ? 0 : 4, 2, void 0 === H.na[w] ? "-" : H.na[w] / 100, 0, m, 1, -1, "00", x);
                    else if (E[0].push(k, 0, 2, H.gb[0] + " ", 0, k, 0, 2, void 0 === H.na[0] ? "" : H.na[0] / 100, 0),
                    E[1].push(k, 0, 2, void 0 === H.na[1] ? "" : Ya((H.na[1] - H.na[0]) / 100), 0),
                    E[2].push(k, 0, 2, void 0 === H.na[2] ? "" : Ya((H.na[2] - H.na[0]) / 100), 0),
                    E[3].push(k, 0, 2, void 0 === H.na[3] ? "" : Ya((H.na[3] - H.na[0]) / 100), 0),
                    ~H.s & 512)
                        E[0].push(m, 1, -1, "00", x);
                    else
                        for (w = 0; 4 > w; ++w)
                            E[w].push(k, 0, 2, " " + H.Mb[w], 0);
                H.B[0] && a.apply(this, E[0]);
                g.rotate(270 * Math.PI / 180);
                H.B[1] && a.apply(this, E[1]);
                g.rotate(270 * Math.PI / 180);
                H.B[2] && a.apply(this, E[2]);
                g.rotate(270 * Math.PI / 180);
                H.B[3] && a.apply(this, E[3]);
                3 == d ? (g.setTransform(1, 0, 0, 1, h / 2, p / 2),
                g.fillStyle = "#FFF",
                a(0, 0, k, 0, 2, "天鳳", 0)) : 0 == d ? (g.setTransform(1, 0, 0, 1, h / 2, p / 2 - .75 * l / 2),
                g.fillStyle = "#FFF",
                k = "normal " + 1.7 * l + "px cwTeX-Q-Kai-T,icons2,serif",
                m = H.ma[0],
                a(0, 0, k, 0, ~~(m / 4) & 1 ? 4 : 3, "東南西北".substr(~~(m / 4), 1), 0, k, 0, m % 4 == (H.s & 16 ? 2 : 3) ? 4 : 2, m % 4 + 1, 0, k, 1, -1, "局", 0),
                w = (h - 2.8 * l) / 2,
                g.beginPath(),
                g.moveTo(-w, .75 * +l),
                g.lineTo(+w, .75 * +l),
                k = g.createLinearGradient(-w, 0, +w, 0),
                k.addColorStop("0.0", "rgba(15,15,15,0)"),
                k.addColorStop("0.5", "rgba(15,15,15,1)"),
                k.addColorStop("1.0", "rgba(15,15,15,0)"),
                g.strokeStyle = k,
                g.lineWidth = 1,
                g.stroke(),
                g.setTransform(1, 0, 0, 1, h / 2, p / 2 + 1.7 * l / 2 - .75 * l / 2 + .3 * l),
                k = "normal " + .75 * l + "px cwTeX-Q-Kai-T,icons2,serif",
                m = "normal " + .5 * l + "px cwTeX-Q-Kai-T,icons2,serif",
                x = .12 * l,
                h = K.Tb(b),
                a(0, 0, k, 0, h < (H.s & 16 ? 6 : 8) ? 4 : 2, h + " ", 0, m, 5, -1, "", x, k, 0, 2, H.ma[1], 0, m, 5, -1, "", x, k, 0, 2, H.ma[2], 0)) : (k = "normal bold " + .75 * l + "px sans-serif",
                g.setTransform(1, 0, 0, 1, h / 2, p / 2),
                g.fillStyle = "#FFF",
                a(0, 0, k, 0, 2, 4 == H.a ? "天鳳" : na(H.s), 0));
                g.restore()
            },
            ja: function() {}
        }
    }();
    (function() {
        function a(a, f) {
            $b.S(f || 1);
            if (d) {
                var b = d;
                delete dc()[b];
                d = void 0
            }
        }
        function f() {
            a(0, 2);
            d = ec(function() {
                d = void 0;
                $b.S(0)
            }, 2E3)
        }
        var d = void 0;
        za($b.v.canvas, {
            touchstart: function() {
                $b.S(1)
            },
            touchend: f,
            touchcancel: function() {
                $b.S(0)
            },
            mouseover: a,
            mouseout: f
        })
    }
    )();
    var Wb = function() {
        function a(a) {
            var p = Wb.v;
            0 < c && 0 < g && p.clearRect(b, h, c, g);
            var l = b = h = c = g = 0, k;
            for (k in f) {
                var m = f[k];
                if (0 > m.t)
                    m.t += a;
                else if (m.t < m.oa) {
                    var x = m.i
                      , n = ~~(m.Sa + (m.yc - m.Sa) * m.t / m.oa)
                      , w = ~~(m.xb + (m.zc - m.xb) * m.t / m.oa)
                      , B = x.ha
                      , y = x.va;
                    x.ya.complete && x.ya.height && (p.globalAlpha = m.u,
                    p.drawImage(x.ya, x.Xa, x.Ya, B, y, n, w, B, y));
                    m.t += a;
                    c && g ? (n < b ? (c += b - n,
                    b = n) : B += n - b,
                    c < B && (c = B),
                    w < h ? (g += h - w,
                    h = w) : y += w - h,
                    g < y && (g = y)) : (b = n,
                    h = w,
                    c = B,
                    g = y)
                } else
                    m.qb && m.qb.ga(m.pc),
                    delete f[k];
                ++l
            }
            p.globalAlpha = 1;
            l || (fc(),
            d && d.length && (d.shift()(),
            ++l));
            return l
        }
        var f, d, b, h, c, g;
        return {
            v: nb("CANVAS", Tb, "", {}, {
                position: "absolute",
                pointerEvents: "none"
            }).getContext("2d"),
            Z: !1,
            pa: function() {
                d = [];
                f = {};
                b = h = c = g = 0;
                var a = Wb.v;
                a.clearRect(0, 0, a.canvas.width + 1, a.canvas.height + 1)
            },
            O: function(b, c, l, k, m, h, g, w, B, y) {
                if (Wb.Z)
                    return b instanceof Function ? b() : c instanceof gc ? c.ga(l) : B && B.ga(y),
                    0;
                var x = dc();
                x.qc || (x.qc = a);
                if (b instanceof Function)
                    return d.push(b),
                    0;
                x = f[Za++] = {};
                x.t = -b;
                c instanceof gc ? (B = c,
                y = l,
                x.oa = 0) : (x.u = w,
                x.i = g,
                void 0 === g && qb("animation src undefined"),
                x.Sa = c,
                x.xb = l,
                x.yc = k,
                x.zc = m,
                0 < h ? (c = k - c,
                l = m - l,
                x.oa = ~~(Math.sqrt(c * c + l * l) / (N[0] * h))) : x.oa = -h);
                B && (x.qb = B,
                x.pc = y);
                return b + x.oa
            },
            Ea: function() {
                for (; a(1E4); )
                    ;
            }
        }
    }();
    var Yb = function() {
        for (var a = [], f = 0; 4 > f; ++f)
            a[f] = nb("DIV", Tb, "nosel tbl ts0 rot" + Xa(3, 270 * f % 360), {}, {
                fontSize: "80%",
                pointerEvents: "none",
                textAlign: "right",
                display: "none"
            });
        var d = [1, 2, 3, 4, 5, 6, 7, 8, 0, 10, 11, 12, 13, 14, 15, 16, 17, 9, 19, 20, 21, 22, 23, 24, 25, 26, 18, 28, 29, 30, 27, 32, 33, 31];
        return {
            pa: function() {
                for (var b = 0; 4 > b; ++b)
                    a[b].style.display = "none"
            },
            nb: function(b) {
                var f = a[b]
                  , c = V[16 | b].length;
                if (c) {
                    for (var g = c, n = [], p = 0; p < V[16 | b].length; ++p) {
                        var l = V[16 | b][p];
                        16 == l && (g += 1);
                        n[l] = 1
                    }
                    n[0] && n[1] && n[2] && n[3] && (g += 4);
                    n[16] && n[17] && n[18] && n[19] && (g += 4);
                    n[32] && n[33] && n[34] && n[35] && (g += 4);
                    n[120] && n[121] && n[122] && n[123] && (g += 4);
                    for (p = 5; p < H.ma.length; ++p)
                        b = d[H.ma[p] >> 2],
                        0 != (H.s & 2048) ? 1 == b ? b = 4 : 5 == b && (b = 8) : H.s & 16 && 1 == b && (b = 8),
                        b *= 4,
                        g += ~~n[b + 0] + ~~n[b + 1] + ~~n[b + 2] + ~~n[b + 3];
                    n = "";
                    0 != (H.s & 2048) && (n += g + '<span style="font-size:50%;">+</span><br>');
                    f.style.display = "";
                    f.innerHTML = '<div class=tbc style="vertical-align:bottom;padding:0 0.1em;">' + (n + ('<span style="font-size:60%;">x</span>' + c + "<br>")) + "</div>"
                } else
                    f.style.display = "none"
            },
            K: function() {
                for (var b = 0; 4 > b; ++b) {
                    var d = a[b].style;
                    d.width = d.height = ~~(Math.min(N[b], U[b]) / t) + "px";
                    var c = -(0 == b ? N[0] : hc[b]);
                    d.left = ~~((R[96 + 2 * b] + -(1 == b ? U[1] : ic[b])) / t) + Q.v.canvas.offsetLeft + "px";
                    d.top = ~~((R[97 + 2 * b] + c) / t) + "px"
                }
            }
        }
    }()
      , lc = function() {
        function a(a) {
            return '<span style="pointer-events:none;vertical-align:middle;">' + a + "</span>"
        }
        function f() {
            for (var a in v)
                if (!(~a & 262144) && (v[a].parentNode.style.visibility = d[a] ? "" : "hidden",
                d[a] && 2 === d[a].length)) {
                    var f = d[a][0]
                      , c = d[a][1];
                    M.ua(v[a], "", 4, .8, f, c);
                    d[2098693] = d[a] = {
                        tag: "N",
                        type: f >> 2 == c >> 2 ? 1 : 3,
                        hai0: f,
                        hai1: c
                    }
                }
        }
        var d = {};
        return {
            vc: function(b, h) {
                if (1 == H.a || 4 == H.a) {
                    var c = 0;
                    d = {};
                    b & 32 && (d[2359814] = {
                        tag: "REACH"
                    });
                    b & 16 && (d[2359816] = {
                        tag: "N",
                        type: 7
                    });
                    b & 64 && (d[2359815] = {
                        tag: "N",
                        type: 9
                    });
                    0 < K.Tb(0) && 4 > K.bb - V[16].length - V[17].length - V[18].length - V[19].length && (b |= 2);
                    var g = [];
                    if (b & 2)
                        for (var n, p = (H.s & 16 ? 16 : 17) - 1; n = R[2048 | p]; --p)
                            if (void 0 !== n.Ha.fb) {
                                for (var l = 0; l < V[32].length && V[32][l] != n.Ha.fb; ++l)
                                    ;
                                l < V[32].length && g.push({
                                    tag: "N",
                                    type: 5,
                                    hai: V[32][l]
                                })
                            }
                    if (b & 2)
                        if (n = V[48],
                        V[64])
                            p = "" + V[64],
                            l = h >> 2,
                            4 == n[l] && (n[l] -= 4,
                            "" + wb.eb(n) == p && g.push({
                                tag: "N",
                                type: 4,
                                hai: 4 * l
                            }),
                            n[l] += 4);
                        else
                            for (l = 0; 34 > l; ++l)
                                4 > n[l] || g.push({
                                    tag: "N",
                                    type: 4,
                                    hai: 4 * l
                                });
                    g.length || (b &= -3);
                    g.length && (d[2098693] = d[401412] = g[0],
                    M.ua(v[401412], a("槓") + " ", 4, .7, g[0].hai),
                    g.shift(),
                    ++c);
                    g.length && (d[2098693] = d[401416] = g[0],
                    M.ua(v[401416], a("槓") + " ", 4, .7, g[0].hai),
                    g.shift(),
                    ++c);
                    g.length && (d[2098693] = d[401417] = g[0],
                    M.ua(v[401417], a("槓") + " ", 4, .7, g[0].hai),
                    g.shift(),
                    ++c);
                    if (b & 128)
                        if (0 == (H.s & 2048) || V[64])
                            d[2098693] = d[401414] = {
                                tag: "N",
                                type: 10
                            },
                            v[401414].innerHTML = "拔き",
                            ++c;
                        else {
                            n = [];
                            for (p = 0; p < V[32].length; ++p)
                                if (g = V[32][p],
                                l = g >> 2,
                                0 == l || 4 == l || 8 == l || 30 == l)
                                    n[g] = {
                                        tag: "N",
                                        type: 10,
                                        hai: g
                                    };
                            g = [401414, 401415, 401418, 401419, 401417];
                            if (l = n[120] || n[121] || n[122] || n[123])
                                d[2098693] = d[g[0]] = l,
                                M.ua(v[g[0]], a("抜") + " ", 4, .7, l.hai),
                                g.shift(),
                                ++c;
                            if (l = n[0] || n[1] || n[2] || n[3])
                                d[2098693] = d[g[0]] = l,
                                M.ua(v[g[0]], a("抜") + " ", 4, .7, l.hai),
                                g.shift(),
                                ++c;
                            if (l = n[16])
                                d[2098693] = d[g[0]] = l,
                                M.ua(v[g[0]], a("抜") + " ", 4, .7, l.hai),
                                g.shift(),
                                ++c;
                            if (l = n[17] || n[18] || n[19])
                                d[2098693] = d[g[0]] = l,
                                M.ua(v[g[0]], a("抜") + " ", 4, .7, l.hai),
                                g.shift(),
                                ++c;
                            if (l = n[32] || n[33] || n[34] || n[35])
                                d[2098693] = d[g[0]] = l,
                                M.ua(v[g[0]], a("抜") + " ", 4, .7, l.hai),
                                g.shift(),
                                ++c
                        }
                    f();
                    v.X(512);
                    v[2098693].parentNode.style.visibility = 1 == c ? "" : "hidden";
                    v[3670533].parentNode.style.visibility = 1 < c ? "" : "hidden";
                    1 == c && (v[2098693].innerHTML = b & 128 ? "拔き" : b & 2 ? "カン" : "?");
                    b && jc(8, 0, 0);
                    return b
                }
            },
            tc: function(b, h) {
                if (1 == H.a || 4 == H.a) {
                    for (var c = ~~(h / 4 / 9), g = ~~(h / 4) % 9, n = {}, p = 0; p < V[32].length; ++p) {
                        var l = V[32][p]
                          , k = ~~(l / 4);
                        if (3 > c && 2 <= g && k == 9 * c + g - 2 || 3 > c && 1 <= g && k == 9 * c + g - 1 || k == 9 * c + g || 3 > c && 7 >= g && k == 9 * c + g + 1 || 3 > c && 6 >= g && k == 9 * c + g + 2)
                            k |= K.sb(l) << 8,
                            n[k] ? n[k].push(l) : n[k] = [l]
                    }
                    p = 0;
                    d = {
                        2360326: {
                            tag: "N"
                        }
                    };
                    b & 8 && (d[2360328] = {
                        tag: "N",
                        type: 6
                    });
                    l = n[0 | 9 * c + g] || [];
                    k = n[256 | 9 * c + g] || [];
                    b & 2 && 3 == l.length + k.length && (M.ua(v[409604], a("槓") + " ", 4, .8, (k.length ? k : l)[0]),
                    d[2098693] = d[409604] = {
                        tag: "N",
                        type: 2
                    },
                    ++p);
                    b & 1 && (1 == k.length && 2 == l.length ? (d[409606] = [l[0], l[1]],
                    d[409607] = [k[0], l[0]],
                    p += 2) : 2 <= l.length ? (d[409607] = [l[0], l[1]],
                    ++p) : 1 == k.length && 1 == l.length && (d[409607] = [k[0], l[0]],
                    ++p));
                    if (b & 4)
                        for (var m = 0; 3 > m; ++m) {
                            var x = (m & 1) << 8
                              , E = (m & 2) << 7;
                            (l = n[x | 9 * c + g - 2]) && (k = n[E | 9 * c + g - 1]) && (d[m ? 409614 : 409610] = [l[0], k[0]],
                            ++p);
                            (l = n[x | 9 * c + g - 1]) && (k = n[E | 9 * c + g + 1]) && (d[m ? 409613 : 409609] = [l[0], k[0]],
                            ++p);
                            (l = n[x | 9 * c + g + 1]) && (k = n[E | 9 * c + g + 2]) && (d[m ? 409612 : 409608] = [l[0], k[0]],
                            ++p)
                        }
                    d[409607] && !d[409606] && (d[409606] = d[409607],
                    delete d[409607]);
                    d[409614] && !d[409610] && (d[409610] = d[409614],
                    delete d[409614]);
                    d[409613] && !d[409609] && (d[409609] = d[409613],
                    delete d[409613]);
                    d[409612] && !d[409608] && (d[409608] = d[409612],
                    delete d[409612]);
                    f();
                    v.X(1024);
                    ac.l(0, v[2360326]);
                    v[2098693].parentNode.style.visibility = 1 == p ? "" : "hidden";
                    v[3671045].parentNode.style.visibility = 1 < p ? "" : "hidden";
                    1 == p && (v[2098693].innerHTML = b & 4 ? "チー" : b & 1 ? "ポン" : b & 2 ? "カン" : "?");
                    b && jc(8, 0, 0)
                }
            },
            uc: function(a) {
                if (1 == H.a || 4 == H.a)
                    d = {
                        2360326: {
                            tag: "N"
                        }
                    },
                    a & 8 && (d[2360328] = {
                        tag: "N",
                        type: 6
                    }),
                    f(),
                    v.X(1024),
                    ac.l(0, v[2360326]),
                    v[2098693].parentNode.style.visibility = v[3671045].parentNode.style.visibility = "hidden",
                    a && jc(8, 0, 0)
            },
            L: function(a) {
                ac.Y();
                v.X(256);
                kc();
                4 == H.a ? C.Xb(d[a]) : W.L(d[a])
            }
        }
    }();
    function mc(a) {
        var f = ~~a.m, d = f & 3, b;
        if (f & 4) {
            a[2] = 3;
            b = (f & 64512) >> 10;
            var h = b % 3;
            b = ~~(b / 3);
            b = 4 * (9 * ~~(b / 7) + b % 7);
            b = [b + 0 + ((f & 24) >> 3), b + 4 + ((f & 96) >> 5), b + 8 + ((f & 384) >> 7)];
            b.splice(0, 0, b.splice(h, 1)[0])
        } else
            f & 24 ? (a[2] = f & 16 ? 5 : 1,
            a[4] = (f & 96) >> 5,
            b = (f & 65024) >> 9,
            h = b % 3,
            b = 4 * ~~(b / 3),
            b = [b + 0, b + 1, b + 2, b + 3],
            a[4] = b.splice(a[4], 1)[0],
            b.splice(d ^ 3, 0, b.splice(h, 1)[0]),
            f & 16 && (b = [a[4]])) : f & 32 ? (a[2] = 10,
            b = [(f & 65280) >> 8]) : 0 == d ? (a[2] = 4,
            b = (f & 65280) >> 8 & -4,
            b = [b + 2, b + 0, b + 1, b + 3]) : (a[2] = 2,
            f = (f & 65280) >> 8,
            b = f & -4,
            b = [b + 0, b + 1, b + 2, b + 3],
            b.splice(f & 3, 1),
            b.splice(1 == d ? 3 : d ^ 3, 0, f));
        a[3] = d;
        a[0] = b
    }
    ;for (var v = function() {
        function a(a, b, d) {
            var c = v[a];
            d ? c.innerHTML = '<span class=nobr style="pointer-events:none;' + (v.o[a] ? "" : "color:#888;") + '">' + (v.o[a] ? "" : "") + b + "</span>" : (c.innerHTML = '<span style="pointer-events:none;' + (v.o[a] ? "" : "color:#888;") + '">' + b + "<br>" + (v.o[a] ? "" : "") + "</span>",
            c.parentNode.style.fontSize = "85%")
        }
        function f(b) {
            b && (v.o[b] = !v.o[b]);
            var c = I.desktop & 1;
            a(1183749, "鳴きなし", c);
            a(1183750, "自動理牌", c);
            a(1183751, "不聴宣言", c);
            a(1183752, "自動和了", c);
            a(1183753, "ツモ切り", c);
            1183750 == b && v.o[1183750] && (V.lb(0),
            V.kb())
        }
        function d(b) {
            b && (v.o[b] = !v.o[b]);
            a(1277961, "ツモ切り");
            a(1277957, "待ち");
            a(1277960, "手牌");
            a(1212429, "牌山");
            I.check = I.check & -32 | (v.o[1277961] ? 0 : 1) | (v.o[1277957] ? 0 : 2) | (v.o[1277960] ? 0 : 4) | (v.o[1212429] ? 24 : 0);
            1212429 == b && (K.a = I.check & 24 ? 3 : ~~I.yama,
            0 == K.a && I.desktop && (K.a = 1),
            Ib());
            b && (3 == H.a && yb.Ja(0),
            2 == H.a && zb.ub())
        }
        function b(a) {
            for (var b = 1; b < arguments.length; ++b)
                arguments[b].parentNode.style.visibility = a
        }
        return {
            b: nb("DIV", Lb, "nosel", {}, {
                position: "absolute",
                display: "none",
                color: "#FFF",
                fontFamily: "icons2,sans-serif",
                fontSize: "140%"
            }),
            a: 0,
            o: {},
            X: function(a) {
                v.a = 126976 == a ? v.a & 3840 : a & 126976 ? a | v.a & 3840 : a | v.a & 102400;
                a = v.a & 126976 ? v.a & 126976 : v.a & 3840;
                256 == a && 3 == H.a && (a = 2048);
                for (var c in v)
                    if (1572868 != c) {
                        var g = v[c];
                        g != v.b && g.tagName && (g.parentNode != v.b && (g = g.parentNode),
                        g.style.display = !a || ~c & a ? "none" : "")
                    }
                v[1572868].parentNode.style.display = v.a & 126976 ? "none" : "";
                c = I.desktop & 1;
                if (4096 == a || c)
                    f(),
                    b(1 == H.a && ~H.s & 1 ? "" : "hidden", v[495623]),
                    b("hidden", v[1183751]);
                32768 == a || 65536 == a ? (b(!jb && u.ab ? "hidden" : "", v[495623]),
                d()) : 256 == a && b("hidden", v[2360326]);
                nc.Ra && nc.Ra();
                if (1 == H.a && c) {
                    v[1572868].parentNode.style.display = "none";
                    a = [v[495623], v[1183749], v[1183750], v[1183752], v[1183753]];
                    for (c = 0; c < a.length; ++c)
                        a[c].parentNode.style.display = "";
                    f()
                }
            },
            K: function() {
                v.b.style.left = Tb.offsetLeft + "px";
                v.b.style.top = Tb.offsetTop + "px";
                var a = ~~(R[82] / t)
                  , b = ~~(R[81] / t)
                  , d = ~~((R[82] - R[86] - N[1]) / 4 / t)
                  , f = ~~((R[81] - R[33]) / 2.5 / t)
                  , f = Math.max(f, ~~((U[4] + T[4]) / t));
                3 == H.a && (Lb.offsetHeight < Lb.offsetWidth ? a = ~~(Rb / t) + ~~(.5 * d) : b = ~~(Sb / t) + f);
                var p = I.desktop & 1, l;
                for (l in v) {
                    var k = v[l];
                    if (k != v.b && k.parentNode) {
                        var m = k.style;
                        k.parentNode.parentNode == v.b && (m = k.parentNode.style);
                        var x = ((l & 3) >> 0) + 1
                          , E = (l & 12) >> 2;
                        p && 2360326 == l && (x = 1);
                        m.left = a - d * x + "px";
                        m.top = b - f * E + "px";
                        m.width = d + "px";
                        m.height = f + "px";
                        m.fontSize = "";
                        k.style.border = "solid 1px " + (l & 131072 ? "#222" : "rgba(0,0,0,0.25)");
                        l & 131072 ? (k.classList.remove("ts0"),
                        k.classList.add("bgb")) : (k.classList.remove("bgb"),
                        k.classList.add("ts0"))
                    }
                }
                if (1 == H.a) {
                    if (l = [v[1183749], v[1183753], v[1183752], v[1183751], v[1183750], null, v[495623]],
                    p)
                        for (d = ~~(Rb / t / 8),
                        f = ~~(U[1] / t),
                        a = (R[80] + 13 * N[4]) / t + Q.v.canvas.offsetLeft,
                        b = Tb.offsetHeight - 1 * f,
                        p = 0; p < l.length; ++p)
                            l[p] && (m = l[p].parentNode.style,
                            m.left = a - d * (p + 1) + "px",
                            m.top = b + "px",
                            m.width = d + "px",
                            m.height = f + "px",
                            m.fontSize = "50%",
                            l[p].classList.remove("bgb"),
                            l[p].classList.add("ts0"),
                            l[p].style.borderStyle = "none")
                } else
                    3 == H.a && (v[1574918].style.borderColor = v[1574917].style.borderColor = v[1572868].style.borderColor = 3 == H.a ? "#444" : "rgba(0,0,0,0.25)",
                    Lb.offsetHeight < Lb.offsetWidth && (p = ~~(1.5 * f),
                    d = ~~(.5 * d),
                    Lb.offsetWidth < a && (a = ~~Lb.offsetWidth,
                    d = Lb.offsetWidth - ~~(Rb / t)),
                    m = v[1574918].parentNode.style,
                    m.width = d + "px",
                    m.height = p + "px",
                    m.left = a - 1 * d + "px",
                    m.top = b - f - 2 * p + "px",
                    m = v[1574917].parentNode.style,
                    m.width = d + "px",
                    m.height = p + "px",
                    m.left = a - 1 * d + "px",
                    m.top = b - f - 1 * p + "px",
                    m = v[1572868].parentNode.style,
                    m.width = d + "px",
                    m.height = f + "px",
                    m.left = a - 1 * d + "px",
                    m.top = b - f - 0 * p + "px"))
            },
            ja: function(a, b) {
                switch (a) {
                case 2360326:
                    ac.Lb();
                    break;
                case 409606:
                case 409607:
                case 409604:
                case 409610:
                case 409609:
                case 409608:
                case 409614:
                case 409613:
                case 409612:
                case 401412:
                case 401416:
                case 401417:
                case 401414:
                case 401415:
                case 401418:
                case 401419:
                case 2359815:
                case 2360328:
                case 2359816:
                case 2359814:
                case 2098693:
                    lc.L(a);
                    break;
                case 3670533:
                    v.X(8192);
                    break;
                case 3671045:
                    v.X(16384);
                    break;
                case 1572868:
                    4 == H.a ? C.Jb(1) : v.X(3 == H.a ? 32768 : 2 == H.a ? 65536 : 4096);
                    break;
                case 3678213:
                case 3686405:
                case 1675268:
                    v.X(126976);
                    break;
                case 1574917:
                    yb.Ja(1);
                    break;
                case 1574918:
                    yb.Ja(-1);
                    break;
                case 1802246:
                    v.X(126976);
                    for (var c = "", h = 0; 4 > h; ++h)
                        H.B[h] && (c += '<div class=A id="#tw-' + h + '"><span class=dan' + ~~H.Ua[h] + ">" + ga[~~H.Ua[h]] + "</span>" + (1800 < H.Qa[h] ? "R" + ~~H.Qa[h] : "") + " " + H.B[h] + "</div>");
                    !1 === v.o[14] && (c += '<div class=A id="#tw-4">(匿名表示 ON)</div>');
                    !0 === v.o[14] && (c += '<div class=A id="#tw-4">(匿名表示 OFF)</div>');
                    A.da(c, "font-size:75%;text-align:left;", 0);
                    break;
                case 1736718:
                    v.X(126976);
                    yb.Wb();
                    break;
                case 1736714:
                    v.X(126976);
                    yb.Vb();
                    break;
                case 1183749:
                case 1183750:
                case 1183751:
                case 1183752:
                case 1183753:
                    f(a);
                    break;
                case 1277961:
                case 1277957:
                case 1277960:
                case 1212429:
                    d(a);
                    break;
                case 425995:
                    switch (H.a) {
                    case 3:
                        A.l('<div style="text-align:left;font-size:75%;">' + (mb ? "- 右/左クリック … 進む/戻る<br>" : "") + "- ボタン/クリック長押し … オートリピート<br>- センターパネル … 得点差表示<br></div>")
                    }
                    break;
                case 495623:
                    if (u.ab) {
                        history.back();
                        break
                    }
                case 11:
                    v.X(126976),
                    -1 != H.ka && (u.ab || (delete u.log,
                    delete u.wg),
                    yb.fa(),
                    zb.fa(),
                    H.fa()),
                    v.o[14] = !1,
                    H.a = 0,
                    u.log ? (H.a = 3,
                    W.Y()) : u.wg ? H.a = 2 : (v.b.style.display = "none",
                    H.a = 1),
                    Ib(),
                    b ? C.l({
                        tag: "SPLASH"
                    }) : u.log ? (yb.oc(u.log),
                    v.K(),
                    S.K()) : u.wg ? (W.pb(),
                    W.L({
                        tag: "HELO",
                        name: "NoName",
                        sx: "M"
                    })) : (W.pb(),
                    C.l({
                        tag: 495623 == a ? "AUTOLOGIN" : "LOGIN"
                    }))
                }
            }
        }
    }(), oc = [2360326, "&times;", 2098693, "", 3670533, " 鳴き", 3671045, " 鳴き", 1572868, "", 3678213, "&times;", 3686405, "&times;", 1675268, "&times;", 2359816, "ツモ", 2360328, "ロン", 2359814, "リーチ", 401414, "", 401415, "", 401418, "", 401419, "", 2359815, "流局", 401412, "", 401416, "", 401417, "", 409610, "", 409609, "", 409608, "", 409614, "", 409613, "", 409612, "", 409606, "", 409607, "", 409604, "カン", 1574918, "", 1574917, "", 425995, "？", 495623, "終了", 1183749, "", 1183750, "", 1183751, "", 1183752, "", 1183753, "", 1277961, "", 1277957, "", 1277960, "", 1212429, "", 1802246, '視 <span style="font-size:25%;vertical-align:50%;">▼</span>', 1736714, '局 <span style="font-size:25%;vertical-align:50%;">▼</span>', 1736718, '巡 <span style="font-size:25%;vertical-align:50%;">▼</span>'], pc = 0; pc < oc.length; pc += 2) {
        var qc = oc[pc + 0]
          , rc = nb("DIV", v.b, "tbl", {}, {
            position: "absolute"
        });
        v[qc] = nb("DIV", rc, "tbc" + (qc & 2097152 ? " bblink" : ""), {
            id: "m" + qc,
            innerHTML: oc[pc + 1]
        }, {
            textAlign: "center",
            verticalAlign: "middle",
            pointerEvents: "none"
        });
        qc & 262144 && (rc.style.display = "none");
        qc & 524288 && (v[qc].style.borderRadius = "0.6em")
    }
    var sc = I.check;
    v.o[1277961] = !(sc & 1);
    v.o[1277957] = !(sc & 2);
    v.o[1277960] = !(sc & 4);
    v.o[1212429] = !!(sc & 24);
    v[1572868].classList.add("cblink");
    var ac = function() {
        var a, f, d, b, h, c, g = nb("DIV", null, "nosel tbl ts0", {}, {
            position: "absolute",
            pointerEvents: "none",
            fontFamily: "sans-serif",
            textAlign: "right"
        });
        g.innerHTML = '<div class=tbc style="vertical-align:bottom;padding:0 0.1em;"></div>';
        return {
            Dc: function(a) {
                f = d = a
            },
            l: function(d, p, l) {
                g.firstChild.innerHTML = "";
                p || (p = Z.ok);
                ac.K(p, l);
                1 == H.a && (("BUTTON" == c.tagName ? c.parentNode : c instanceof gc ? Tb : c).appendChild(g),
                a = 0 > d ? -d + 1E3 : (d || (la(H.hb, H.s) ? 3E3 : 5E3)) + f + 1E3,
                h = a - 1E3,
                b = a - 1E3,
                dc().count = function(c) {
                    if (0 > b)
                        return ac.Y(),
                        !1;
                    a -= c;
                    if (~~(1 + b / 1E3) == ~~(1 + a / 1E3))
                        return !0;
                    b = a;
                    0 <= a ? (0 > d ? jc(1E3 > a ? 0 : 3, 0, 0) : 3E3 > a && jc(7, 0, 0),
                    g.firstChild.innerText = ~~(a / 1E3)) : ac.Lb();
                    return !0
                }
                )
            },
            K: function(a, b) {
                a && (c = a);
                c instanceof gc && ~c.$ & 1 && (c = void 0);
                if (!c)
                    for (var d = 13; (c = R[1024 | d]) && !(c.u && R[1024 | d].$ & 1); --d)
                        ;
                c && (d = g.style,
                d.fontSize = db.style.fontSize,
                c instanceof gc ? (d.left = ~~((b ? c.c : c.I) / t) + Q.v.canvas.offsetLeft + "px",
                d.top = ~~((b ? c.h : c.J) / t) + "px",
                d.width = ~~(N[4] / t) + "px",
                d.height = ~~((U[4] + T[4]) / t) + "px") : (d.left = c.offsetLeft + "px",
                d.top = c.offsetTop + "px",
                d.width = (c.offsetWidth || parseInt(c.parentNode.style.width)) + "px",
                d.height = (c.offsetHeight || parseInt(c.parentNode.style.height)) + "px"))
            },
            Lb: function() {
                if (c instanceof gc)
                    H.Gb(c.R);
                else if (c && c.name) {
                    if (!c.disabled)
                        C[c.name]()
                } else
                    ac.Y(),
                    lc.L(2360326)
            },
            Ub: function() {
                f < d && (f += 1E3)
            },
            Cc: function() {
                return c
            },
            Y: function() {
                g.parentNode && (a < f && (f = 1E3 * ~~(0 > a ? 0 : a / 1E3)),
                h < a && ac.Ub(),
                b = -1,
                g.parentNode.removeChild(g),
                c = void 0)
            }
        }
    }();
    for (var S = {
        b: nb("DIV", Tb, "", {}, {
            position: "absolute"
        }),
        K: function() {
            var a = S.b.style
              , f = N[4] / t
              , d = ~~Math.min(~~(2 * f), (Lb.offsetHeight - Sb / t) / 2);
            3 == H.a && (d = 0);
            if (mb || d < f || I.desktop & 1)
                S.b.style.display = "none";
            else
                switch (a.top = Tb.offsetTop + (R[81] + U[4] + T[4]) / t + "px",
                a.display = "",
                ~~I.cptype) {
                default:
                case 1:
                    var b = Math.min(2.25 * d, Lb.offsetHeight - Tb.offsetHeight);
                    a.width = Tb.offsetWidth + "px";
                    a.height = b + "px";
                    a.background = "linear-gradient(to bottom, rgba(0,0,0,1.0) 0%,rgba(0,0,0,1.0) 50%,rgba(24,24,24,1.0) 100%)";
                    a.borderTop = a.borderBottom = "solid 1px #222";
                    for (var h = 0; 13 >= h; ++h)
                        S[h].style.display = "none";
                    for (h = 20; 28 >= h; ++h)
                        a = S[h].style,
                        a.top = "0px",
                        a.width = 3 * f + "px",
                        a.height = b - d + "px",
                        a.display = "";
                    S.Db(0);
                    S[30].style.display = S[31].style.display = "none";
                    a = S[30].style;
                    a.width = "50%";
                    a.height = 1 * d + "px";
                    a.display = "";
                    a.marginTop = b - d + "px";
                    a = S[31].style;
                    a.width = "50%";
                    a.height = 1 * d + "px";
                    a.display = "";
                    a.marginTop = b - d + "px";
                    S[30].innerHTML = "&#12296;";
                    S[31].innerHTML = "&#12297;";
                    S[30].name = "CP_L";
                    S[31].name = "CP_R";
                    break;
                case 2:
                    b = 2 * f;
                    a.width = 7.5 * b + 1 + "px";
                    a.height = 2 * d + 1 + "px";
                    a.background = "";
                    a.borderTop = a.borderBottom = "none";
                    for (var c = V[32], c = c && c.length ? 3 * ~~(c.length / 3) + 1 : 13, h = 20; 28 >= h; ++h)
                        S[h].style.display = "none";
                    for (h = 0; 13 >= h; ++h)
                        a = S[h].style,
                        a.width = b + 1 + "px",
                        a.height = d + 1 + "px",
                        a.top = d * (h & 1) + "px",
                        a.left = R[80] / t + f * h + "px",
                        a.display = h < c ? "" : "none";
                    S[30].style.display = S[31].style.display = "none"
                }
        },
        Ta: function(a, f, d) {
            var b = R[1024 | a];
            if (b && (b.la(f, d, !0),
            !(b.$ & 8))) {
                d = !!(b.$ & 1) && b.u;
                if (!S[20].style.display) {
                    var h = N[4] / t;
                    b.$ & 6 && S.Hb(R[80] / t + h * (a + .5))
                }
                h = "";
                b.$ & 4 ? (d && ac.K(b),
                h = d ? "#060" : "#600") : b.$ & 2 && (h = d ? "#030" : "#300");
                !h && f & 6 || (S[0 + a].style.backgroundColor = S[24].style.backgroundColor = h)
            }
        },
        Hb: function(a) {
            var f = N[4] / t;
            a < R[80] / t + 0 * f && (a += 3 * f);
            R[80] / t + 14 * f < a && (a -= 3 * f);
            a = (~~((a - R[80] / t) / f) + .5) * f + R[80] / t;
            for (var d = 20; 28 >= d; ++d)
                S[d].style.left = ~~(a + 3 * f * (d - 24 - .5)) + "px";
            return a
        },
        Db: function(a) {
            S.Hb(~~(S[24].offsetLeft + S[24].offsetWidth / 2 + N[4] / t * a))
        }
    }, tc = 0; 13 >= tc; ++tc)
        S[tc] = nb("DIV", S.b, "", {}, {
            position: "absolute",
            border: "solid 1px #333",
            background: "linear-gradient(135deg, rgba(255,255,255,0) 0%,rgba(255,255,255,0) 50%,rgba(255,255,255,0.15) 100%)"
        }),
        nb("DIV", S[tc], "", {}, {
            width: "50%",
            height: tc & 1 ? "25%" : "20%",
            backgroundColor: tc & 1 ? "#333" : "#555",
            pointerEvents: "none"
        });
    S[13].parentNode.removeChild(S[13]);
    for (tc = 20; 28 >= tc; ++tc)
        S[tc] = nb("DIV", S.b, "", {}, {
            position: "absolute",
            borderLeftStyle: "none",
            borderLeft: "solid 1px #333",
            background: "linear-gradient(135deg, rgba(255,255,255,0) 0%,rgba(255,255,255,0) 50%,rgba(255,255,255,0.10) 100%)"
        }),
        nb("DIV", S[tc], "", {}, {
            position: "absolute",
            marginLeft: "50%",
            width: "1px",
            height: "50%",
            pointerEvents: "none",
            background: "linear-gradient(to bottom, rgba(195,0,0,1.0) 0%,rgba(255,0,0,1.0) 10%,rgba(0,0,0,0) 100%)"
        });
    S[28].style.borderRight = "solid 1px #333";
    S[30] = nb("BUTTON", S.b, "gray", {
        name: "CPda"
    }, {
        background: "none"
    });
    S[31] = nb("BUTTON", S.b, "gray", {
        name: "CPok"
    }, {
        background: "none"
    });
    S[30].style.borderRight = "none";
    function jc() {}
    var fc = function() {
        var a = {};
        return function(f, d, b) {
            if (arguments.length) {
                for (var h in a)
                    if (a[h] == f && b - .008 < h && h < b + .008)
                        return;
                a[b] = f;
                jc(f, d, b)
            } else
                a = {}
        }
    }();
    r.AudioContext = r.AudioContext || r.webkitAudioContext;
    (function() {
        function a(a) {
            function b() {
                this.removeEventListener("touchend", b, !1);
                this.removeEventListener("mousedown", b, !1);
                a()
            }
            xa(ab, "touchend", b);
            xa(ab, "mousedown", b)
        }
        if (AudioContext) {
            var f = new AudioContext, d, b, h = {}, c = function() {
                jc = function(a, b, c) {
                    !I.nose && !Wb.Z && 0 != a && d && h[a] && (b = f.createBufferSource(),
                    b.buffer = h[a],
                    b.connect(d),
                    b.start ? b.start(f.currentTime + c) : b.noteOn(f.currentTime + c))
                }
            }, g = 0, n = function(a, b) {
                var d = new XMLHttpRequest;
                d.open("GET", a, !0);
                d.responseType = "arraybuffer";
                d.onload = function() {
                    200 == this.status && f.decodeAudioData(this.response, function(a) {
                        h[b] = a;
                        --g || c()
                    })
                }
                ;
                d.send()
            };
            eb && nb("AUDIO", db, "", {}, {
                position: "absolute",
                display: "none"
            });
            a(function() {
                d = f.createGain ? f.createGain() : f.createGainNode();
                d.connect(f.destination);
                d.gain.value = .5;
                b = f.createGain ? f.createGain() : f.createGainNode();
                b.connect(f.destination);
                b.gain.value = 0
            });
            for (var p = 1; 25 > p; ++p)
                2 != p && (++g,
                n("https://tenhou.net/3/snd/" + Xa(2, p) + ".wav", p))
        } else {
            var l = {};
            l[1] = l[8] = l[9] = l[10] = l[12] = l[13] = l[14] = l[15] = l[16] = l[17] = l[18] = l[19] = l[20] = l[21] = l[22] = l[23] = l[24] = 1;
            for (var k = 5, n = function() {
                this.currentTime && (this.removeEventListener("timeupdate", arguments.callee, !1),
                this.pause(),
                xa(this, "timeupdate", function() {
                    this.endTime < this.currentTime && (this.pause(),
                    this.Fb = 0)
                }),
                --k || (jc = function(a, b, d) {
                    I.nose || Wb.Z || 0 == a || setTimeout(function() {
                        for (var b = 0; 5 > b && (k = (k + 1) % 5,
                        !m[k].paused && l[m[k].Fb] && !l[a]); ++b)
                            ;
                        5 != b && (b = m[k],
                        b.paused || b.pause(),
                        b.currentTime = 2 * a,
                        b.endTime = 2 * a + (1 == a ? 3 : 1),
                        b.Fb = a,
                        b.play())
                    }, 1E3 * d)
                }
                ))
            }, m = [], p = 0; 5 > p; ++p)
                m[p] = nb("AUDIO", db, "", {
                    src: "/3/snd/se.m4a"
                }, {
                    position: "absolute",
                    display: "none"
                }),
                m[p].endTime = 0,
                m[p].Fb = 0,
                m[p].volume = .7,
                xa(m[p], "timeupdate", n);
            a(function() {
                for (var a = 0; a < m.length; ++a)
                    m[a].play()
            })
        }
    }
    )();
    if (r.gr && r.gr.eworx && r.gr.eworx.AVAudioSessionAdapter) {
        var uc = gr.eworx.AVAudioSessionAdapter;
        (new uc).setCategoryWithOptions(uc.Categories.PLAYBACK, uc.CategoryOptions.MIX_WITH_OTHERS, function() {}, function() {})
    }
    ;var Xb = function() {
        var a = {
            M: [0, 12, 14, 16, 14, 14, 20, 22, 18, 0, 9, 0],
            F: [0, 13, 15, 17, 15, 15, 21, 23, 19, 0, 9, 0]
        };
        a[""] = a.C = a.M;
        var f = {};
        return {
            b: nb("DIV", Lb, "", {}, {
                position: "absolute",
                pointerEvents: "none",
                top: "0px"
            }),
            O: function(d, b, h) {
                if (!Wb.Z) {
                    var c = da[b];
                    if (c) {
                        var g = 10 * -d
                          , n = nb("SPAN", Xb.b, "tsv nosel", {
                            innerHTML: c
                        }, {
                            position: "absolute",
                            fontWeight: "bold",
                            color: "#FFF",
                            opacity: 0,
                            whiteSpace: "nowrap"
                        })
                          , p = Tb.offsetWidth / 40
                          , l = ~~(R[64 + 2 * d] / t) + Tb.offsetLeft + Q.v.canvas.offsetLeft
                          , k = ~~(R[65 + 2 * d] / t) + Tb.offsetTop
                          , m = n.style
                          , x = Za++;
                        h & 1 && (f[x] = !0);
                        ~h & 2 && (m.display = "none");
                        dc()[x] = function(c) {
                            if (!n.parentNode)
                                return 0;
                            if (0 > g)
                                return g += c,
                                0 < g && (g = 0),
                                1;
                            0 == g && h & 4 && (jc(a[H.Sa[d]][b], d, 0),
                            ++g);
                            g += c;
                            if (250 > g)
                                return m.opacity = g / 250,
                                m.fontSize = p * (4 + (250 - g) / 250 * 4) + "px",
                                m.left = l - n.offsetWidth / 2 + "px",
                                m.top = k - n.offsetHeight / 2 + "px",
                                1;
                            if (750 > g) {
                                if (1 == m.opacity)
                                    return 1;
                                m.opacity = 1;
                                m.fontSize = 4 * p + "px";
                                m.left = l - n.offsetWidth / 2 + "px";
                                m.top = k - n.offsetHeight / 2 + "px";
                                return 1
                            }
                            return f[x] ? (g -= c,
                            1) : 1250 > g ? (m.opacity = (1250 - g) / 500,
                            1) : (n.parentNode.removeChild(n),
                            0)
                        }
                    }
                }
            },
            fa: function() {
                for (; Xb.b.firstChild; )
                    Xb.b.removeChild(Xb.b.firstChild)
            },
            Ab: function() {
                f = {}
            }
        }
    }();
    var vc = function() {
        function a() {
            f = 0
        }
        var f = 0, d;
        za(r, {
            touchstart: a,
            touchend: a,
            touchcancel: a,
            mousedown: a,
            mouseup: a,
            mouseover: a,
            mouseout: a,
            keydown: a,
            blur: a
        });
        return {
            Ic: function(a) {
                mb && 2 == H.a && (f = 0);
                f || (f = a);
                a = 18E5 - (a - f);
                0 > a && (location.reload(),
                f = a = 0);
                2E4 > a ? (d || (d = nb("DIV", Tb, "ts0", {}, {
                    position: "absolute",
                    left: "0px",
                    top: "0px"
                })),
                d.innerText = "ENTERING POWERSAVING MODE " + ~~(a / 1E3)) : d && (d.parentNode.removeChild(d),
                d = null)
            }
        }
    }();
    var yb = function() {
        function a(b) {
            if (b) {
                var d = /<([a-zA-Z0-9]+)[^>]*>|[^<]+|<\/(.*)>/g
                  , c = d.exec(b);
                if (c) {
                    var f = {};
                    f.tag = c[1];
                    for (var l = / ([a-zA-Z0-9]+)="([^"]*)"/g, g; g = l.exec(c[0]); )
                        f[g[1]] = g[2];
                    for (; (c = d.exec(b)) && !c[2]; )
                        f.childNodes || (f.childNodes = []),
                        f.childNodes.push(c[1] ? a(c[0]) : ~~c[0]);
                    return f
                }
            }
        }
        function f(a) {
            for (var b = -1, c = g; 0 <= --c; ) {
                switch (h[c].tag) {
                case "INIT":
                    return c + 1;
                case "N":
                    a = h[c][2];
                    if (2 == a || 4 == a || 5 == a)
                        b = -1;
                    break;
                case "D":
                case "E":
                case "F":
                case "G":
                    if (-1 != b)
                        return b;
                    break;
                case "T":
                case "U":
                case "V":
                case "W":
                    a || (b = c)
                }
                a = !1
            }
            return -1
        }
        function d(b, d) {
            d && (h = a(d).childNodes);
            if (d && h) {
                for (var f = !1, k = 0; 40 > k; ++k) {
                    var l = I["log" + k];
                    try {
                        l = JSON.parse(l)
                    } catch (pa) {
                        continue
                    }
                    if (l.log == b) {
                        f = !0;
                        break
                    }
                }
                f || (v.o[14] = void 0);
                for (var p, k = 0; k < h.length; ++k) {
                    switch (h[k].tag) {
                    case "SHUFFLE":
                        p = K.xc(h[k].seed);
                        break;
                    case "GO":
                        W.qa(h[k])
                    }
                    if ("UN" == h[k].tag)
                        break
                }
                for (c = []; k < h.length; ++k) {
                    var l = h[k]
                      , n = [0, 0, 0, 0]
                      , y = k;
                    switch (l.tag) {
                    case "INIT":
                        c.push(k);
                        break;
                    case "RYUUKYOKU":
                        if ("ron3" == l.type)
                            for (f = 0; 4 > f; ++f)
                                l["hai" + f] && (n[f] = 6);
                        break;
                    case "AGARI":
                        for (; l = h[k],
                        n[~~l.who] = l.who == l.fromWho ? 7 : 6,
                        l.paoWho && (n[~~l.paoWho] = 11),
                        k + 1 < h.length && "AGARI" == h[k + 1].tag; ++k)
                            ;
                        break;
                    case "N":
                        mc(l);
                        n[~~l.who] = l[2];
                        break;
                    default:
                        yb.mb(l)
                    }
                    if (n[0] || n[1] || n[2] || n[3])
                        h.splice(y, 0, {
                            tag: "VOICE",
                            type: n
                        }),
                        ++k
                }
                if (p)
                    for (k = 0; k < c.length; ++k) {
                        var l = h[c[k]], f = q(l.seed), f = 6 == f[3] && 0 == f[4], J;
                        p && (J = l[5] = p(~~l.oya, f));
                        if (J)
                            if (f) {
                                if (H.s & 16)
                                    for (D = 0; 6 > D; ++D)
                                        J[D] |= 1280;
                                for (f = 0; f < (H.s & 16 ? 3 : 4); ++f) {
                                    for (D = 0; 4 > D; ++D)
                                        J[34 * f + D] |= 1280;
                                    for (; 34 > D; ++D)
                                        J[34 * f + D] |= f + 1 << 8
                                }
                                for (var n = 0, D = c[k] + 1; D < h.length && "INIT" != h[D].tag; ++D)
                                    l = h[D],
                                    "N" != l.tag || 4 != l[2] && 2 != l[2] && 5 != l[2] && 10 != l[2] || (f = ~~l.who,
                                    J[n / 4 * 34 + n % 4 ^ 1] |= f + 1 << 8,
                                    ++n)
                            } else {
                                for (var ca = !1, y = 13 * (H.s & 16 ? 3 : 4), n = 0, f = -1, D = c[k] + 1; D < h.length && "INIT" != h[D].tag; ++D)
                                    switch (l = h[D],
                                    l.tag) {
                                    case "N":
                                        ca = 4 == l[2] || 2 == l[2] || 5 == l[2] || 10 == l[2];
                                        break;
                                    case "T":
                                    case "U":
                                    case "V":
                                    case "W":
                                        f = l.tag.charCodeAt(0) - 84,
                                        J[ca ? n++ ^ 1 : J.length - 1 - y++] |= f + 1 << 8,
                                        ca = !1
                                    }
                                for (l = H.s & 16 ? 3 : 4; y < J.length - 14 - n; ++y)
                                    f = (f + 1) % l,
                                    J[J.length - 1 - y] |= f + 1 << 8;
                                for (; y < J.length; ++y)
                                    J[J.length - 1 - y] |= 1280
                            }
                    }
                for (k = 0; k < h.length; ++k)
                    zb.tb(u.tw, h[k]);
                for (k = 0; "INIT" != h[k].tag; ++k)
                    switch (h[k].tag) {
                    case "BYE":
                    case "SHUFFLE":
                    case "GO":
                        break;
                    case "UN":
                    case "TAIKYOKU":
                        W.qa(h[k]);
                        break;
                    default:
                        throw console.log(k, h[k]);
                    }
                g = c[~~u.ts];
                delete u.ts
            } else
                A.l(ka[2003], 1, function() {
                    u.ab ? history.back() : delete u.log
                })
        }
        function b(a) {
            var b = a.split("-");
            if (4 != b.length)
                return a;
            if (120 == b[3].charCodeAt(0)) {
                a = parseInt(b[3].substr(1, 4), 16);
                var c = parseInt(b[3].substr(5, 4), 16)
                  , d = parseInt(b[3].substr(9, 4), 16)
                  , f = 0;
                "2010041111gm" <= b[0] && (f = ~~("3" + b[0].substr(4, 6)) % (34 - ~~b[0].substr(9, 1) - 1));
                b[3] = Xa(4, (a ^ c ^ p[f + 0]).toString(16)) + Xa(4, (c ^ p[f + 0] ^ d ^ p[f + 1]).toString(16))
            }
            return b.join("-")
        }
        var h, c, g, n = {
            D: !0,
            E: !0,
            F: !0,
            G: !0,
            T: !0,
            U: !0,
            V: !0,
            W: !0,
            N: !0,
            RYUUKYOKU: !0,
            VOICE: !0
        }, p = [22136, 52719, 55146, 42104, 59591, 46934, 9248, 28891, 49597, 52974, 62844, 4015, 18311, 50730, 43056, 17939, 64838, 38145, 27008, 39128, 35652, 63407, 65535, 23473, 35164, 55230, 27536, 4386, 64920, 29075, 42617, 17294, 18868, 2081];
        return {
            mb: function(a) {
                var b = a.tag;
                if (1 < b.length) {
                    var c = a.tag.charCodeAt(1);
                    48 <= c && 57 >= c && (a[0] = ~~b.substr(1),
                    a.tag = b.substr(0, 1))
                }
                return a
            },
            oc: function(a) {
                a = b(a);
                Ua("https://tenhou.net/3/mjlog2xml.cgi?" + a, function(b) {
                    d(a, b)
                }, function() {
                    d(a)
                })
            },
            Ja: function(a) {
                if (h) {
                    if (0 == arguments.length) {
                        for (var b = g; 0 <= b && "INIT" != h[b].tag; --b)
                            ;
                        if (0 <= b)
                            return yb.Nb(h, b, g - b)
                    } else if (0 >= a) {
                        var d = f(0 > a);
                        if (-1 == d)
                            return;
                        if (0 > a && g == d + 1)
                            for (d = d - 1 == c[0] ? h.length - 1 : d - 2; "AGARI" == h[d - 1].tag; --d)
                                ;
                        for (var l = [], b = 0; b < c.length && !(d < c[b]); ++b)
                            ;
                        for (var p = c[b - 1], b = p; b < d; ++b)
                            l.push(h[b]);
                        W.qa(yb.Nb(h, p, d - p));
                        g = d;
                        1 == d - p && wc.set()
                    } else if (Z.ok && !Z.ok.disabled) {
                        C.ok();
                        return
                    }
                    if (!(h.length <= g))
                        for (Wb.Ea(),
                        b = !1; !b && g < h.length; ++g) {
                            switch (h[g].tag) {
                            case "REACH":
                                2 != h[g].step && (b = !0);
                                break;
                            case "AGARI":
                                g + 1 < h.length && "AGARI" != h[g + 1].tag && (b = !0);
                                break;
                            default:
                                n[h[g].tag] && (b = !0)
                            }
                            W.qa(h[g])
                        }
                }
            },
            fa: function() {
                g = 0;
                h = void 0
            },
            Wb: function(a, b) {
                if (h && h.length)
                    if (a)
                        g = ~~b + 1,
                        yb.Ja(0);
                    else {
                        for (var d = -1, c = g; 0 <= c && (-1 == d && "T" == h[c].tag && (d = c),
                        "INIT" != h[c].tag); --c)
                            ;
                        if (!(0 > c)) {
                            var f = ""
                              , l = 0;
                            for (++c; c < h.length; ++c) {
                                json = h[c];
                                if ("INIT" == json.tag)
                                    break;
                                "T" == json.tag && (f += '<div class=A id="#tj-' + c + '"><span style="position:relative;">' + (c == d ? '<div class=gray style="position:absolute;font-size:75%;top:25%;left:-1.25em;">&#8594;</div>' : "") + ++l + "巡目</span></div>")
                            }
                            A.da(f, "", 0)
                        }
                    }
            },
            Vb: function(a, b) {
                if (h && h.length)
                    if (a)
                        g = ~~b + 1,
                        yb.Ja(0);
                    else {
                        for (var c = "", d = -1, f = "", l = 0; l < h.length; ++l) {
                            var k = h[l];
                            switch (k.tag) {
                            case "INIT":
                                d = q(k.seed);
                                f = d[0];
                                f = "東南西北".substr(~~(f / 4), 1) + (f % 4 + 1) + "局" + d[1] + "本場";
                                d = l;
                                break;
                            case "RYUUKYOKU":
                                var p = ia[k.type]
                                  , c = c + ('<div class=A id="#ts-' + d + '">' + f + "<br>流局" + (p ? " " + p : "") + "</div>");
                                break;
                            case "AGARI":
                                var p = ~~k.who
                                  , n = ~~k.fromWho
                                  , k = q(k.ten)
                                  , c = c + ('<div class=A id="#ts-' + d + '">' + f + "<br>" + z(p == n ? "ツモ:" : "ロン:") + H.B[p] + " " + k[1] + (p != n ? "<br>" + z("放銃:") + H.B[n] : "") + "</div>")
                            }
                        }
                        A.da(c, "font-size:70%;text-align:left;", 0)
                    }
            },
            ub: function(a, b) {
                var c = ~~b;
                if (4 == c)
                    v.o[14] = !v.o[14];
                else if (4 > c) {
                    for (var d = 0; d < h.length; ++d)
                        zb.tb(c, h[d]);
                    u.tw = (u.tw + c) % 4
                }
                for (d = 0; d < h.length; ++d)
                    if ("UN" == h[d].tag) {
                        W.qa(h[d]);
                        Ub.S();
                        yb.Ja(0);
                        break
                    }
            },
            Nb: function(a, b, d) {
                var c = a[b];
                if ("INIT" != c.tag)
                    return null;
                for (var f = [], l = q(c.hai0); l.length; )
                    f[l.pop()] = 1;
                for (l = q(c.hai1); l.length; )
                    f[l.pop()] = 2;
                for (l = q(c.hai2); l.length; )
                    f[l.pop()] = 3;
                for (l = q(c.hai3); l.length; )
                    f[l.pop()] = 4;
                for (var k = q(c.seed), m = q(c.ten), l = q(c.chip), g = ~~c.oya, p = c[5], h = [[], [], [], []], n = [[], [], [], []], $a = -1; b < a.length && d; ++b,
                --d)
                    switch (c = a[b],
                    c.tag) {
                    case "D":
                    case "E":
                    case "F":
                    case "G":
                        var O = c.tag.charCodeAt(0) - 68
                          , Ea = c[0] == $a
                          , $a = c[0];
                        f[$a] = 0;
                        Ea && n[O].push(254);
                        n[O].push($a);
                        break;
                    case "T":
                    case "U":
                    case "V":
                    case "W":
                        O = c.tag.charCodeAt(0) - 84;
                        $a = c[0];
                        f[$a] = O + 1;
                        break;
                    case "N":
                        for (var $a = -1, O = ~~c.who, Ea = ~~c.m, kb = c[3], Fb = c[0], Va = 0; Va < Fb.length; ++Va)
                            f[Fb[Va]] = 0;
                        5 != c[2] && 4 != c[2] && 10 != c[2] && (kb = n[(O + kb) % 4],
                        kb.pop(),
                        254 == kb[kb.length - 1] && kb.pop());
                        if (5 == c[2]) {
                            for (Va = 0; Va < h[O].length && h[O][Va] != (Ea ^ 24); ++Va)
                                ;
                            if (Va == h[O].length)
                                throw console.log("Log2ReiniXML INVALID KAKAN");
                            h[O][Va] = Ea
                        } else
                            h[O].unshift(Ea);
                        break;
                    case "REACH":
                        O = ~~c.who;
                        Ea = ~~c.step;
                        2 == Ea ? (c = q(c.ten),
                        c.length ? m = c : m[O] -= 10) : (1 == Ea ? n[O].push(255) : (n[O].push(255),
                        m[O] -= 10),
                        ++k[2]);
                        break;
                    case "DORA":
                        k.push(~~c.hai)
                    }
                c = a[b];
                "AGARI" == c.tag && c.who == c.fromWho && (f[~~c.machi] = 0);
                a = {
                    tag: "REINIT",
                    seed: "" + k,
                    ten: "" + m,
                    oya: g,
                    hai0: [],
                    hai1: [],
                    hai2: [],
                    hai3: []
                };
                for (b = 0; 136 > b; ++b)
                    f[b] && a["hai" + (f[b] - 1 & 3)].push(b);
                p && (a[5] = p);
                l.length && (a.chip = l);
                for (O = 0; 4 > O; ++O)
                    h[O].length && (a["m" + O] = h[O]);
                for (O = 0; 4 > O; ++O)
                    n[O].length && (a["kawa" + O] = n[O]);
                return a
            }
        }
    }();
    var xc = {}
      , M = function() {
        function a(a, d) {
            var c;
            if (2 == a && 99 == d)
                return M[4195];
            var f = M[4096 | 100 * a + d];
            f || (f = M[4096 | 100 * a + d] = xa(new Image, "load", Q.vb));
            c = c || (99 == d ? "" : b);
            var l = N[a];
            1 == a && 99 == d && (l = N[0]);
            8 == a && 99 == d && (l = N[0]);
            c = "https://p.mjv.jp/5/img/vieww" + a + Xa(2, d) + Xa(3, l) + c + ".png";
            f.src != c && (f.src = c);
            return f
        }
        function f(a, b, d) {
            for (var c = 3; c < arguments.length; ++c) {
                var f = arguments[c]
                  , k = f >> 8 & 7;
                M[f] = Aa(M[f] || {}, {
                    ya: a,
                    Xa: b % 10 * N[k],
                    Ya: (U[k] + T[k]) * ~~(b / 10),
                    ha: N[k],
                    va: U[k] + T[k],
                    offsetX: 0,
                    offsetY: 0,
                    Ob: d
                });
                if (5 == k || 7 == k)
                    M[f].offsetY += U[k % 4] + T[k % 4] - (U[k] + T[k]);
                5 == k && (M[f].offsetX += N[k % 4] - N[k])
            }
        }
        function d(a, b, d, f, l) {
            for (var c = 5; c < arguments.length; ++c) {
                var m = arguments[c]
                  , g = m >> 8 & 7;
                xc[m] = Aa(xc[m] || {}, {
                    ya: a,
                    Xa: b,
                    Ya: d,
                    ha: f,
                    va: l,
                    offsetX: yc[g],
                    offsetY: U[g] + T[g] - l
                });
                if (5 == g || 7 == g)
                    xc[m].offsetY += U[g % 4] + T[g % 4] - (U[g] + T[g]);
                5 == g && (xc[m].offsetX += N[g % 4] - N[g])
            }
        }
        var b, h;
        return {
            cb: xa(new Image, "load", Ub.S),
            Ec: function() {
                b = "000000ffffff000000";
                h = "000100070";
                pb(I.backgroundImage) ? (u.jb = !1,
                Ub.v.canvas.style.background = "linear-gradient(to bottom, rgba(0,0,0,0.3) 0%,rgba(0,0,0,0.2) 100%),url('" + I.backgroundImage + "') center center /cover no-repeat") : (I.backgroundImage && I.backgroundImage.match(/^([0-9]{9})$/) && (h = I.backgroundImage),
                u.jb = !0,
                Ub.v.canvas.style.background = "");
                I.msk && I.msk.match(/^([0-9a-f]{6})$/) && (b = RegExp.$1 + b.substr(6));
                var c = "https://p.mjv.jp/3/img/bg" + (u.jb ? 0 : 9) + Xa(4, ~~Rb) + Xa(4, ~~Sb) + h + ".png";
                M.cb.src != c && (M.cb.src = c);
                f(a(5, 48), 0, -1, 1328);
                f(a(7, 48), 0, -1, 1840);
                for (var g = 0; 4 >= g; ++g) {
                    for (var c = a(g, 0), n = 0; 34 > n; ++n) {
                        var p = 10 * (~~(n / 9) + 1) + n % 9 + 1;
                        f(c, p - 10, n, g << 8 | p)
                    }
                    f(c, 0, 4, g << 8 | 51);
                    f(c, 10, 13, g << 8 | 52);
                    f(c, 20, 22, g << 8 | 53)
                }
                c = M[4096];
                f(c, 30, -1, 48, 560);
                f(c, 38, -1, 49, 561);
                f(c, 39, -1, 50, 562);
                c = M[4196];
                f(c, 30, -1, 304, 816);
                f(c, 38, -1, 305, 817);
                f(c, 39, -1, 306, 818);
                c = M[4296];
                f(c, 30, -1, 1584);
                f(c, 38, -1, 60, 572);
                c = M[4396];
                f(c, 38, -1, 316, 828);
                c = M[4496];
                f(c, 30, -1, 1084);
                f(c, 38, -1, 1073);
                f(c, 39, -1, 1074);
                for (g = 0; 8 > g; g += 2) {
                    c = a(g, 99);
                    n = N[g] + T[g];
                    p = 0;
                    if (0 == g || 2 == g)
                        p = ~~(47 * n / 43);
                    if (4 == g || 6 == g)
                        p = ~~(24 * n / 43);
                    var l = ~~(T[g] / 12 * 5);
                    d(c, 0, 0, n - yc[g], p, g << 8 | 0);
                    d(c, 0, p - l, 2 * l, l, g << 8 | 3, g << 8 | 2)
                }
                var g = U[1] + T[1], n = 2 * ~~(47 * (N[0] + T[0]) / 43), p = T[0] / 12, l = T[0] + ~~(5 * p), k, c = a(8, 99);
                k = 0;
                d(c, 0, k + n - U[0], l, U[0], 1, 513);
                d(c, 0, k + ~~(17 * p), l, U[0], 5, 517);
                d(c, 0, k, l, U[0] + ~~(12 * p), 4, 516);
                d(c, 0, k + n - U[1], l, U[1], 257, 769, 1281, 1793);
                d(c, 0, k + ~~(17 * p), l, U[1], 261, 773, 1285, 1797);
                d(c, 0, k, l, U[1] + ~~(12 * p), 260, 772, 1284, 1796);
                c = a(1, 99);
                k = 0;
                d(c, 0, k, l, g, 256, 768, 1280, 1792);
                d(c, 0, k + g - ~~(5 * p), 2 * ~~(5 * p), ~~(5 * p), 259, 771, 1283, 1795, 258, 770, 1282, 1794)
            },
            ua: function(a, b, d, f) {
                var c = M[4096 | 100 * d];
                if (c.complete || !c.height) {
                    var k = N[d]
                      , m = U[d] + T[d]
                      , g = k * (arguments.length - 4)
                      , h = 1 * m;
                    a.innerHTML = b + "<canvas width=" + g + " height=" + h + ' style="width:' + g / t + "px;height:" + h / t + 'px;pointer-events:none;vertical-align:middle;"></canvas>';
                    g = a.getElementsByTagName("CANVAS")[0].getContext("2d");
                    g.clearRect(0, 0, g.canvas.width + 1, g.canvas.height + 1);
                    g.globalAlpha = f;
                    for (h = 4; h < arguments.length; ++h) {
                        var p = arguments[h], n;
                        K.sb(p) ? (n = 0,
                        p = ~~(p / 4 / 9)) : (p = K.Wa[p],
                        48 == p && (p = 40),
                        n = p % 10,
                        p = ~~(p / 10) - 1);
                        g.drawImage(c, n * k, p * m, k, m, k * (h - 4), 0, k, m)
                    }
                }
            }
        }
    }();
    var zb = function() {
        function a(a, b) {
            var c = b.split(",");
            8 == c.length ? c = [c[(0 + a) % 4 * 2 + 0], c[(0 + a) % 4 * 2 + 1], c[(1 + a) % 4 * 2 + 0], c[(1 + a) % 4 * 2 + 1], c[(2 + a) % 4 * 2 + 0], c[(2 + a) % 4 * 2 + 1], c[(3 + a) % 4 * 2 + 0], c[(3 + a) % 4 * 2 + 1]] : 16 == c.length && (c = [c[(0 + a) % 4 * 2 + 0], c[(0 + a) % 4 * 2 + 1], c[(1 + a) % 4 * 2 + 0], c[(1 + a) % 4 * 2 + 1], c[(2 + a) % 4 * 2 + 0], c[(2 + a) % 4 * 2 + 1], c[(3 + a) % 4 * 2 + 0], c[(3 + a) % 4 * 2 + 1], c[(0 + a) % 4 * 2 + 8], c[(0 + a) % 4 * 2 + 9], c[(1 + a) % 4 * 2 + 8], c[(1 + a) % 4 * 2 + 9], c[(2 + a) % 4 * 2 + 8], c[(2 + a) % 4 * 2 + 9], c[(3 + a) % 4 * 2 + 8], c[(3 + a) % 4 * 2 + 9]]);
            return c.join(",")
        }
        function f(a) {
            if (!h.length)
                return 0;
            d += a;
            if (d < b)
                return 1;
            a = h.shift();
            a.tag ? W.qa(a) : b += a;
            return 1
        }
        var d, b, h = [], c = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], g = ["", "", "", ""], n = ["", "", "", ""];
        return {
            tb: function(b, c) {
                if (!b)
                    return c;
                var d = c.tag
                  , f = d.charCodeAt(1);
                if (1 == d.length || 48 <= f && 57 >= f)
                    f = d.charCodeAt(0),
                    78 == f ? c.who = (4 + ~~c.who - b) % 4 : 68 <= f && 71 >= f ? c.tag = "DEFG".substr((4 + (f - 68) - b) % 4, 1) + d.substr(1) : 84 <= f && 87 >= f && (c.tag = "TUVW".substr((4 + (f - 84) - b) % 4, 1) + d.substr(1));
                else
                    switch (d) {
                    case "UN":
                        d = [c.n0, c.n1, c.n2, c.n3];
                        c.n0 = d[(b + 0) % 4];
                        c.n1 = d[(b + 1) % 4];
                        c.n2 = d[(b + 2) % 4];
                        c.n3 = d[(b + 3) % 4];
                        c.dan && (d = c.dan.split(","),
                        c.dan = d.concat(d.splice(0, b)).join(","));
                        c.rate && (d = c.rate.split(","),
                        c.rate = d.concat(d.splice(0, b)).join(","));
                        c.sx && (d = c.sx.split(","),
                        c.sx = d.concat(d.splice(0, b)).join(","));
                        c.rc && (d = c.rc.split(","),
                        c.rc = d.concat(d.splice(0, b)).join(","));
                        c.gold && (d = c.gold.split(","),
                        c.gold = d.concat(d.splice(0, b)).join(","));
                        break;
                    case "TAIKYOKU":
                    case "KANSEN":
                        c.oya = (4 + ~~c.oya - b) % 4;
                        break;
                    case "REINIT":
                        d = [c.m0, c.m1, c.m2, c.m3],
                        c.m0 = d[(b + 0) % 4],
                        c.m1 = d[(b + 1) % 4],
                        c.m2 = d[(b + 2) % 4],
                        c.m3 = d[(b + 3) % 4],
                        d = [c.kawa0, c.kawa1, c.kawa2, c.kawa3],
                        c.kawa0 = d[(b + 0) % 4],
                        c.kawa1 = d[(b + 1) % 4],
                        c.kawa2 = d[(b + 2) % 4],
                        c.kawa3 = d[(b + 3) % 4];
                    case "INIT":
                        c.oya = (4 + ~~c.oya - b) % 4;
                        d = [c.hai0, c.hai1, c.hai2, c.hai3];
                        c.hai0 = d[(b + 0) % 4];
                        c.hai1 = d[(b + 1) % 4];
                        c.hai2 = d[(b + 2) % 4];
                        c.hai3 = d[(b + 3) % 4];
                        d = c.ten.split(",");
                        c.ten = d.concat(d.splice(0, b)).join(",");
                        void 0 != c.chip && (d = c.chip.split(","),
                        c.chip = d.concat(d.splice(0, b)).join(","));
                        break;
                    case "REACH":
                        c.who = (4 + ~~c.who - b) % 4;
                        c.ten && (d = c.ten.split(","),
                        c.ten = d.concat(d.splice(0, b)).join(","));
                        break;
                    case "RYUUKYOKU":
                        d = [c.hai0, c.hai1, c.hai2, c.hai3];
                        c.hai0 = d[(b + 0) % 4];
                        c.hai1 = d[(b + 1) % 4];
                        c.hai2 = d[(b + 2) % 4];
                        c.hai3 = d[(b + 3) % 4];
                        c.sc = a(b, c.sc);
                        void 0 != c.owari && (c.owari = a(b, c.owari));
                        break;
                    case "AGARI":
                        c.who = (4 + ~~c.who - b) % 4;
                        c.fromWho = (4 + ~~c.fromWho - b) % 4;
                        void 0 != c.paoWho && (c.paoWho = (4 + ~~c.paoWho - b) % 4);
                        c.sc = a(b, c.sc);
                        void 0 != c.owari && (c.owari = a(b, c.owari));
                        break;
                    case "VOICE":
                        d = c.type;
                        c.type = d.concat(d.splice(0, b));
                        break;
                    case "BYE":
                        c.who = (4 + ~~c.who - b) % 4
                    }
                if (c.childNodes)
                    for (d = c.childNodes,
                    f = 0; f < d.length; ++f)
                        d[f].tag && zb.tb(b, d[f]);
                return c
            },
            hc: function(a) {
                if (a = a.childNodes) {
                    Wb.Z = !0;
                    for (var b = 0; b < a.length; ++b)
                        W.qa(yb.mb(a[b]));
                    W.qa({
                        tag: "INITBYLOG"
                    })
                } else
                    Wb.Z = !1;
                return 1
            },
            mc: function(a) {
                dc().Mc || (d = b = 0,
                dc().Mc = f);
                a = a.childNodes;
                for (var c = 0; c < a.length; ++c)
                    a[c].tag && yb.mb(a[c]);
                Array.prototype.push.apply(h, a);
                return 1
            },
            wc: function() {
                for (var a = 0; a < c.length; ++a)
                    c[a] = 0;
                for (a = 0; 4 > a; ++a)
                    n[a] = g[a] = ""
            },
            fa: function() {
                for (; h.length; )
                    h.pop()
            },
            ub: function(a, b) {
                if (a) {
                    var c = ~~b;
                    4 == c ? v.o[14] = !v.o[14] : 4 > c && (u.tw = (u.tw + c) % 4)
                }
                zb.fa();
                H.fa();
                W.pb();
                W.L({
                    tag: "HELO",
                    name: "NoName",
                    sx: "M"
                })
            },
            ac: function(a) {
                var b = "" + V[48 | a];
                if (n[a] != b && (n[a] = b,
                V[64 | a] = wb.eb(V[48 | a]),
                b = "" + V[64 | a],
                g[a] != b)) {
                    g[a] = b;
                    for (a = 0; a < c.length; ++a)
                        c[a] = 0;
                    for (b = 0; 4 > b; ++b)
                        if (V[64 | b])
                            for (a = 0; a < V[64 | b].length; ++a)
                                c[V[64 | b][a]] = 1;
                    for (a = 0; a < R.ra.length; ++a)
                        b = R.ra[a],
                        b.i && b.la && b.la(-1025, c[b.i.Ob] ? 1024 : 0, !0)
                }
            },
            bc: function(a) {
                a.i && a.la && a.la(-1025, c[a.i.Ob] ? 1024 : 0, !0)
            }
        }
    }();
    var Z = {};
    function zc(a, f) {
        for (var d = [a], b = f || {}; d.length; ) {
            a = d.pop();
            for (var h = 0; h < a.childNodes.length; ++h)
                d.push(a.childNodes[h]);
            a.id ? b[a.id] = a : a.name && (b[a.name] = a)
        }
        Z = b
    }
    var C = function() {
        var a, f = [], d = {
            SPLASH: 1,
            LOGIN: 1,
            LOBBY: 1,
            STORE: 1
        };
        return {
            b: null,
            l: function(b) {
                C.b ? "RYUUKYOKU" == a.tag && "OWARI" == b.tag || "AGARI" == a.tag && "OWARI" == b.tag || "AGARI" == a.tag && "AGARI" == b.tag ? f.push(b) : C.Y(b) : (a = b,
                C.b = nb("DIV", Tb, "tbc", {}, {
                    position: "relative",
                    textAlign: "center",
                    verticalAlign: "middle"
                }),
                C.b.innerHTML = '<div style="background-color:rgba(0,0,0,0.85);color:#FFF;border:solid 1px #444;padding:1em 0.5em;"></div>',
                C.K(),
                C[a.tag](a, C.b.firstChild))
            },
            K: function() {
                if (C.b) {
                    var b = ~~(N[1] / t);
                    if (b) {
                        d[a.tag] && (b = 0);
                        var f = C.b.style;
                        f.paddingLeft = b + "px";
                        f.paddingRight = ~~(Tb.offsetWidth - Rb / t + b) + "px"
                    }
                }
            },
            Y: function(a) {
                function b() {
                    for (var b in Z)
                        delete Z[b];
                    C.b && (C.b.parentNode.removeChild(C.b),
                    C.b = null,
                    Z = {});
                    a instanceof Function ? a() : a && C.l(a);
                    nc.Ra && nc.Ra()
                }
                C.b && "none" != C.b.style.display ? dc().Pc = Ac(b) : b()
            },
            fa: function() {
                f = []
            },
            nop: function() {},
            ok: function(b) {
                ob(!0, "ok");
                ac.Y();
                f.length ? C.Y(f.shift()) : "TRAINING" == a.tag ? C.Jc(b) : "SPLASH" == a.tag ? v.ja(11) : "LOGIN" == a.tag || "AUTOLOGIN" == a.tag ? (I.gpid ? (W.L({
                    tag: "HELO",
                    name: I.uname || "NoName",
                    sx: I.sx || "M",
                    gpid: I.gpid
                }),
                I.removeItem("gpid")) : ("ID########-########" != Z.uname.value && Eb("uname", Z.uname.value, "NoName"),
                W.L({
                    tag: "HELO",
                    name: I.uname || "NoName",
                    sx: I.sx || "M"
                })),
                ob(!0, 0)) : "OWARI" == a.tag ? (2 != H.a || u.ab || delete u.wg,
                v.ja(495623)) : "NINTEI" == a.tag ? C.Cb() : (1 == H.a && W.L({
                    tag: "NEXTREADY"
                }),
                3 == H.a && yb.Ja(1))
            },
            exit: function() {
                v.ja(495623)
            }
        }
    }();
    Aa(C, function() {
        function a(a, b) {
            return a ? '<span style="color:' + (0 < a ? "#0FF" : "#F00") + ';">' + (0 < a ? "+" : "") + a + (void 0 != b ? b : "") + "</span>" : ""
        }
        function f(b, d, f, h) {
            for (var c = b.sc ? q(b.sc) : [], g = [], m = 0; 4 > m; ++m)
                g[m] = '<span style="font-weight:bold;color:#888;">' + H.gb[m] + "</span> ",
                c.length || (g[m] += ga[H.Ua[m]] + (1800 > H.Qa[m] ? "" : ' <span style="color:#888;">R</span>' + ~~H.Qa[m]) + "<br>"),
                g[m] += '<span style="font-weight:bold;color:#CCC;">' + Da(H.B[m]) + "</span><br>";
            m = 2.4;
            if (8 == c.length || 16 == c.length)
                g[0] += 100 * c[0] + (c[1] ? " " + a(100 * c[1]) : ""),
                g[1] += 100 * c[2] + (c[3] ? " " + a(100 * c[3]) : ""),
                g[2] += 100 * c[4] + (c[5] ? " " + a(100 * c[5]) : ""),
                g[3] += 100 * c[6] + (c[7] ? " " + a(100 * c[7]) : "");
            16 == c.length && (++m,
            g[0] += "<br>" + c[8] + "枚" + (c[9] ? " " + a(c[9], "枚") : ""),
            g[1] += "<br>" + c[10] + "枚" + (c[9] ? " " + a(c[11], "枚") : ""),
            g[2] += "<br>" + c[12] + "枚" + (c[9] ? " " + a(c[13], "枚") : ""),
            g[3] += "<br>" + c[14] + "枚" + (c[9] ? " " + a(c[15], "枚") : ""));
            c = "";
            b.ba && (c = q(b.ba),
            c = z("") + c[0] + " " + z("") + c[1]);
            return '<table cellpadding=0 cellspacing=0 width=100% style="text-align:center;"><tr><td rowspan=1 style="width:33%;height:' + m / 2 + 'em;font-family:icons2,sans-serif;">' + c + '</td><td rowspan=2 style="width:34%;"><div id=sc2 style="height:' + 1 * m + "em;padding:0.2em 0;" + (H.B[2] ? 'border:solid 1px #222;">' + g[2] : '">') + '</div></td><td rowspan=1 style="width:33%;height:' + m / 2 + 'em;" class=gray>' + na(H.s) + '</td></tr><tr><td rowspan=2><div id=sc3 style="height:' + 1 * m + "em;padding:0.2em 0;" + (H.B[3] ? 'border:solid 1px #222;">' + g[3] : '">') + '</div></td><td rowspan=2><div id=sc1 style="height:' + 1 * m + "em;padding:0.2em 0;" + (H.B[1] ? 'border:solid 1px #222;">' + g[1] : '">') + '</div></td></tr><tr><td rowspan=2><div id=sc0 style="height:' + 1 * m + "em;padding:0.2em 0;" + (H.B[0] ? 'border:solid 1px #222;">' + g[0] : '">') + '</div></td></tr><tr><td rowspan=1 id=info0 style="height:' + m / 2 + 'em;">' + (d || "") + '</td><td rowspan=1 id=info2 style="height:' + m / 2 + 'em;">' + (h || "") + '</td></tr><tr><td></td><td rowspan=1 id=info1 style="position:relative;">' + (f || "") + "</td><td></td></tr></table>"
        }
        function d(b, d) {
            return H.B[d].length ? '<tr><td align=center style="border:solid 1px #222;padding:0.5em;">' + Da(H.B[d]) + '<table cellpadding=0 cellspacing=0 align=center><tr><td align=right style="width:6em;">' + 100 * b[2 * d + 0] + '</td><td align=right style="width:5em;">' + a(b[2 * d + 1].toFixed(1)) + "</td>" + (16 == b.length ? '<td align=right style="width:4em;">' + a(b[2 * d + 8], "枚") + "</td>" : "") + '<td style="width:3em;"></td></tr></table></td></tr>' : ""
        }
        function b(a, b) {
            for (var c, d = 0; c = Z["yaku" + d]; ++d)
                c.childNodes[0].style.opacity = c.childNodes[1].style.opacity = 0;
            Z.sc0.style.opacity = Z.sc1.style.opacity = Z.sc2.style.opacity = Z.sc3.style.opacity = Z.total.style.opacity = 0;
            Z.ok.disabled = !0;
            var f = !!a.doraHaiUra;
            f && (Z.info2.style.opacity = 0);
            var g = !!a.yakuman
              , m = -(g ? 3E3 : 750)
              , h = 0;
            dc().Nc = function(a) {
                if (0 > m)
                    return m += a,
                    0 < m && (m = 0),
                    1;
                0 == m && jc(g && 0 == h ? 1 : 11, 0, 0);
                var c = Math.min(1, m / (g ? 3E3 : 600))
                  , k = Z["yaku" + h];
                k.childNodes[0].style.opacity = k.childNodes[1].style.opacity = c;
                h == d - 1 && (f && (Z.info2.style.opacity = c),
                Z.sc0.style.opacity = Z.sc1.style.opacity = Z.sc2.style.opacity = Z.sc3.style.opacity = Z.total.style.opacity = c);
                m += a;
                1 == c && (h++,
                m = -(~H.s & 2048 && f && h == d - 1 ? 1200 : 250));
                return h < d ? 1 : (b(),
                0)
            }
        }
        var h = {
            TAIKYOKU: "對局",
            SAIKAI: "再開",
            KANSEN: "觀戰"
        };
        return {
            TAIKYOKU: function(a, b) {
                var c = "TAIKYOKU" == a.tag;
                b.innerHTML = '<div style="font-family:cwTeX-Q-Kai-T,icons2,serif;font-size:400%;">' + h[a.tag] + "</div>" + f(a, "", c ? '<button name=ok style="padding:0 2em;">OK</button>' : '<button disabled style="font-size:150%">' + decodeURIComponent(a.msg || "WAIT") + "</button>");
                zc(b);
                c && ac.l(-1E4)
            },
            AGARI: function(a, d) {
                var c = "";
                jc(10, 0, 0);
                a.ten = q(a.ten);
                a.chip = q(a.chip);
                for (var g = a.who != a.fromWho, h = 0, k = 0; k < a.chip.length; k += 2)
                    h += a.chip[k + 1];
                var h = h ? h + z(g ? "枚" : "枚∀") : "", m;
                m = g ? a.ten[1] + z("点") : ja[(H.s & 16 ? 0 : 2) + (H.ka == a.who ? 1 : 0)][a.ten[1]] + z(H.ka == a.who ? "点∀" : "点");
                var c = c + '<div id=total style="font-family:cwTeX-Q-Kai-T,icons2,serif;font-size:250%;">'
                  , x = [];
                if (a.yakuman) {
                    a.yakuman = q(a.yakuman);
                    c += z("役滿") + m + h;
                    for (k = 0; k < a.yakuman.length; k += 1)
                        x.push([ba[a.yakuman[k]], 2 * k < a.chip.length ? a.chip[2 * k + 1] + z("枚") : ""]);
                    for (k *= 2; k < a.chip.length; k += 2)
                        x.push([ba[a.chip[k + 0]], a.chip[k + 1] + z("枚")])
                } else {
                    a.yaku = q(a.yaku);
                    for (var E = ha[a.ten[2]], w = 0, k = 0; k < a.yaku.length; k += 2)
                        w += a.yaku[k + 1];
                    if (30 == a.ten[0] && 4 == w || 60 == a.ten[0] && 3 == w)
                        !g && H.s & 16 ? a.ten[1] == (H.ka == a.who ? 8E3 : 6E3) && (E = ha[1]) : a.ten[1] == (H.ka == a.who ? 12E3 : 8E3) && (E = ha[1]);
                    ~H.s & 2048 && (c += (E ? "" : a.ten[0] + z("符") + w + z("飜")) + z(E) + m + h);
                    for (g = k = 0; k < a.yaku.length; k += 2)
                        h = a.yaku[k + 1] + z(H.s & 2048 ? "点" : "飜"),
                        g < a.chip.length && a.yaku[k + 0] == a.chip[g + 0] && (h += a.chip[g + 1] + z("枚"),
                        g += 2),
                        x.push([ba[a.yaku[k + 0]], h])
                }
                c += '</div><table cellpadding=0 cellspacing=0 style="width:100%;font-family:cwTeX-Q-Kai-T,icons2,serif;font-size:150%;"><tr>';
                k = 4 > x.length ? 0 : Math.ceil(x.length / 2);
                for (g = 0; g < x.length; ++g) {
                    if (0 == g || g == k)
                        c += "<td width=50% align=center valign=top><table cellpadding=0 cellspacing=0>";
                    c += "<tr id=yaku" + g + ' style="">';
                    c += '<td align=left style="position:relative;">' + x[g][0] + "</td>";
                    c += '<td align=left style="position:relative;">　' + x[g][1] + "</td>";
                    c += "</tr>";
                    if (g == k - 1 || g == x.length - 1)
                        c += "</table></td>"
                }
                c += "</tr></table>";
                x = q(a.doraHai);
                for (k = a.doraHaiUra ? q(a.doraHaiUra) : []; 5 > x.length; )
                    x.push(136);
                for (; 5 > k.length; )
                    k.push(136);
                c += f(a, "", '<button name=ok style="width:100%;padding:0 1em;">OK</button>', "");
                d.innerHTML = c;
                zc(d);
                M.ua(Z.info0, "", 0, 1, x[0], x[1], x[2], x[3], x[4]);
                M.ua(Z.info2, "", 0, 1, k[0], k[1], k[2], k[3], k[4]);
                3 != H.a && b(a, function() {
                    Z.ok.disabled = !1;
                    a.owari || ac.l(-5E3)
                })
            },
            RYUUKYOKU: function(a, b) {
                b.innerHTML = '<div style="font-family:cwTeX-Q-Kai-T,icons2,serif;font-size:400%;">' + (a.type ? ia[a.type] : "流局") + "</div>" + f(a) + '<button name=ok style="padding:0 2em;">OK</button>';
                zc(b);
                2 != H.a || a.owari || (Z.ok.disabled = !0);
                a.owari || ac.l(-5E3)
            },
            OWARI: function(a, b) {
                H.fa();
                Ub.S();
                var c;
                c = a.sc;
                c = c.split(",");
                for (var f = 0; f < c.length; ++f)
                    c[f] = Number(c[f]);
                var g, f = [0, 1, 2, 3];
                for (g = 1; 4 > g; ++g)
                    if (!(c[2 * f[g - 1] + 1] >= c[2 * f[g] + 1])) {
                        var h = f[g];
                        f[g] = f[g - 1];
                        f[g - 1] = h;
                        g = 0
                    }
                g = '<div style="font-family:cwTeX-Q-Kai-T,icons2,serif;font-size:400%;">終局</div><table cellpadding=0 cellspacing=0 width=75% align=center style="text-align:center;">' + d(c, f[0]);
                g += d(c, f[1]);
                g += d(c, f[2]);
                g += d(c, f[3]);
                g += "</table>";
                dc().Bc = Bc(1500);
                b.innerHTML = g + '<button name=ok style="padding:0 2em;">OK</button>';
                zc(b)
            }
        }
    }());
    C.KANSEN = C.SAIKAI = C.TAIKYOKU;
    Aa(C, function() {
        function a(a) {
            var b = Z.panes.childNodes
              , c = b.length;
            h = (h + a + c) % c;
            for (a = 0; a < c; ++a)
                b[a].style.display = a == h ? "" : "none";
            Z.paneDisp.innerHTML = b[h].firstChild.innerHTML + z(" / 設定")
        }
        function f() {
            K.a = ~~I.yama;
            0 == K.a && I.desktop && (K.a = 1);
            Ib();
            H.fa();
            H.connected = 15;
            H.s = 1;
            H.UN({
                tag: "UN",
                n0: "COM",
                n1: "COM",
                n2: "COM",
                n3: "COM",
                sx: ",,,"
            });
            H.pa({
                tag: "REINIT",
                seed: "2,1,1,5,5,57",
                ten: "123,234,345,456",
                oya: "0",
                hai0: "1,3,6,16,21,41,49,53,75,116,117,121,135",
                hai1: "1,3,6,16,21,41,49,53,75,116,117,121,135",
                kawa0: "46,125,82,128,73,94,66,130,131,55,5,126,38,124",
                kawa1: "108,120,11,74,76,50,42,78,67,70",
                kawa2: "119,32,29,65,2,104,5,126,38,124",
                kawa3: "122,127,4,112,107,77,129,69,109,106,123"
            });
            R.K();
            I.desktop & 1 ? (v.b.style.display = "",
            v[1572868].innerHTML = "",
            v.X(126976)) : v.b.style.display = "none"
        }
        function d(a) {
            Eb("hideid", ~~a.target.checked, 0)
        }
        function b(a) {
            Eb("nose", ~~a.target.checked, 0)
        }
        var h = 0
          , c = ["Default", "3TAP", "2TAP"]
          , g = ["回転", "縦画面", "横画面"]
          , n = ["Default", "あり", "なし"]
          , p = ["標準回線 / default", "中国(香港)特別回線 / CH(HK)"]
          , l = {
            iH: 0,
            iS: 10,
            iV: 7,
            hR: 0,
            hG: 0,
            hB: 0
        };
        return {
            CONFIG: function(c, g) {
                Ub.v.canvas.style.visibility = "";
                f();
                var h;
                h = '<div id=paneDisp style="font-size:125%;pointer-events:none;">　</div><hr><div id=panes style="height:12em;">' + ('<div style="display:none;padding:0.5em;text-align:left;"><span style="display:none;">環境</span><div class=select-wrapper><button name=sco></button></div><br>' + z("※アプリ版でのみご利用いただけます<br>") + "<br><input type=checkbox id=cfgSelShowID /><label class=bth for=cfgSelShowID>配信ID保護</label><br>" + z("※ログイン画面のID入力を非表示にします<br>") + "</div>");
                h += '<div style="display:none;padding:0.5em;text-align:left;"><span style="display:none;">環境</span><div class=select-wrapper><button name=cpt></button></div><br>' + z("※縦画面のみで表示されます<br>") + "<br><input type=checkbox id=cfgNoSE /><label class=bth for=cfgNoSE>SEなし</label><br></div>";
                h += '<div style="display:none;padding:0.5em;text-align:left;"><span style="display:none;">環境</span><div class=select-wrapper><button name=yam></button></div><br><br><br><div class=select-wrapper><button name=dtp></button></div><br>' + z("※「鳴きなし」他が常時手牌下に表示されます<br>") + "</div>";
                h += '<div style="display:none;padding:0.5em;text-align:left;"><span style="display:none;">環境</span><div class=select-wrapper><button name=lth></button></div><br>' + z("※横画面対戦時で牌山表示:なし/Desktop入力:なしの場合<br>") + "</div>";
                h += '<div style="display:none;padding:0.5em;text-align:left;"><span style="display:none;">卓</span><input type=checkbox id=cfgUseDefaultIMG /><label class=bth for=cfgUseDefaultIMG>標準の画像</label><br><br><br><div id=cfgUseDefaultIMG1><div class=select-wrapper><button name=iH style="width:4em;"></button></div><div class=select-wrapper><button name=iS style="width:4em;"></button></div><div class=select-wrapper><button name=iV style="width:4em;"></button></div><br></div><div id=cfgUseDefaultIMG0>画像URL:' + z("(.jpg|.png|.gif)") + '<input name=cfgBGIMG style="width:100%;font-size:125%;"/><br></div></div>';
                h = h + '<div style="display:none;padding:0.5em;text-align:left;"><span style="display:none;">牌</span><br><div class=bth>牌背色:</div><br><div class=select-wrapper><button name=hR style="width:4em;"></button></div><div class=select-wrapper><button name=hG style="width:4em;"></button></div><div class=select-wrapper><button name=hB style="width:4em;"></button></div><br></div>' + ('<div style="display:none;padding:0.5em;text-align:left;"><span style="display:none;">回線</span>' + z("* 国際特別回線は性能を保証するものではありません。<br><br>* No performance guarantee for international special connections.<br>") + '<br><div class=select-wrapper style="width:100%;"><button name=icn style="width:100%;"></button></div><br></div>');
                g.innerHTML = h + '</div><hr><button name=cfgPrev class=ra1 style="width:33%;">&laquo;</button><button name=cfgNext class=ra2 style="width:33%;">&raquo;</button><button name=cfgClose style="width:34%;">CLOSE</button>';
                zc(g);
                Z.cfgSelShowID.checked = !!I.hideid;
                Z.cfgNoSE.checked = !!I.nose;
                Z.sco.disabled = !jb;
                xa(Z.cfgBGIMG, "change", C["#iV"]);
                xa(Z.cfgSelShowID, "change", d);
                xa(Z.cfgNoSE, "change", b);
                xa(Z.cfgUseDefaultIMG, "change", C["#iV"]);
                pb(I.backgroundImage) ? Z.cfgBGIMG.value = I.backgroundImage : Z.cfgUseDefaultIMG.checked = !0;
                C["#sco"]();
                C["#yam"]();
                C["#cpt"]();
                C["#hB"]();
                C["#iV"]();
                C["#dtp"]();
                C["#lth"]();
                C["#icn"]();
                a(0)
            },
            hB: function(a) {
                for (var b = "iH" == a.name ? 36 : 16, c = "", d = 0; d < b; ++d)
                    c += '<div class=A id="#' + a.name + "-" + d + '">' + d + (d == l[a.name] ? "<div class=desc>(default)</div>" : "") + "</div>";
                A.da(c, "", 0)
            },
            "#iV": function(a, b) {
                var c = I.backgroundImage
                  , d = "000100070";
                c && c.match(/^\d{9}$/) && (d = c);
                var f = ~~d.substr(0, 3)
                  , g = ~~d.substr(3, 3)
                  , h = ~~d.substr(6, 3);
                if (Z.cfgUseDefaultIMG.checked) {
                    Z.cfgUseDefaultIMG0.style.display = "none";
                    Z.cfgUseDefaultIMG1.style.display = "";
                    if (a)
                        switch (d = 10 * ~~b,
                        a) {
                        case "#iH":
                            f = d;
                            break;
                        case "#iS":
                            g = d;
                            break;
                        case "#iV":
                            h = d
                        }
                    d = Xa(3, f) + Xa(3, g) + Xa(3, h);
                    Eb("backgroundImage", d, "000100070")
                } else
                    Z.cfgUseDefaultIMG0.style.display = "",
                    Z.cfgUseDefaultIMG1.style.display = "none",
                    (d = Z.cfgBGIMG.value) ? pb(d) ? I.backgroundImage = d : e && e.target == Z.cfgBGIMG && A.l("標準的な画像URLを使用してください。") : I.removeItem("backgroundImage");
                c != I.backgroundImage && Ib();
                Z.iH.innerHTML = z("H:") + ~~(f / 10);
                Z.iS.innerHTML = z("S:") + ~~(g / 10);
                Z.iV.innerHTML = z("V:") + ~~(h / 10)
            },
            "#hB": function(a, b) {
                var c = I.msk
                  , d = c || "000000"
                  , f = parseInt(d.substr(0, 2), 16)
                  , g = parseInt(d.substr(2, 2), 16)
                  , h = parseInt(d.substr(4, 2), 16);
                if (a)
                    switch (d = 17 * ~~b,
                    a) {
                    case "#hR":
                        f = d;
                        break;
                    case "#hG":
                        g = d;
                        break;
                    case "#hB":
                        h = d
                    }
                d = Xa(2, f.toString(16)) + Xa(2, g.toString(16)) + Xa(2, h.toString(16));
                Eb("msk", d, "000000");
                Z.hR.innerHTML = z("R:") + ~~(f / 17);
                Z.hG.innerHTML = z("G:") + ~~(g / 17);
                Z.hB.innerHTML = z("B:") + ~~(h / 17);
                c != I.msk && Ib()
            },
            sco: function() {
                A.da('<div class=A id="#sco-0">' + g[0] + '</div><div class=A id="#sco-1">' + g[1] + '</div><div class=A id="#sco-2">' + g[2] + "</div>", "", 0)
            },
            "#sco": function(a, b) {
                var c = I.scro
                  , c = ~~(a ? b : c);
                Eb("scro", c, 0);
                jb && r.screen.orientation.lock && r.screen.orientation.lock(1 == c ? "portrait" : 2 == c ? "landscape" : "any");
                Z.sco.innerHTML = "画面方向:" + g[c]
            },
            yam: function() {
                A.da('<div class=A id="#yam-0">' + n[0] + '</div><div class=A id="#yam-1">' + n[1] + '</div><div class=A id="#yam-2">' + n[2] + "</div>", "", 0)
            },
            "#yam": function(a, b) {
                var c = I.yama
                  , d = ~~(a ? b : c);
                Eb("yama", d, 0);
                Z.yam.innerHTML = "牌山表示:" + n[d];
                c != d && f()
            },
            cpt: function() {
                A.da('<div class=A id="#cpt-0">' + c[0] + '</div><div class=A id="#cpt-1">' + c[1] + '</div><div class=A id="#cpt-2">' + c[2] + "</div>", "", 0)
            },
            "#cpt": function(a, b) {
                var d = ~~(a ? b : I.cptype);
                Eb("cptype", d, 0);
                S.K();
                Z.cpt.innerHTML = "入力補助:" + c[d]
            },
            dtp: function() {
                A.da('<div class=A id="#dtp-0">' + n[0] + '</div><div class=A id="#dtp-1">' + n[1] + '</div><div class=A id="#dtp-2">' + n[2] + "</div>", "", 0)
            },
            "#dtp": function(a, b) {
                var c = I.desktop;
                3 == c && (c = 0);
                var d = ~~(a ? b : c);
                Z.dtp.innerHTML = "Desktop入力:" + n[d];
                0 == d && mb && (d = 3);
                Eb("desktop", d, 0);
                c != d && f()
            },
            lth: function() {
                A.da('<div class=A id="#lth-0">' + n[0] + '</div><div class=A id="#lth-1">' + n[1] + '</div><div class=A id="#lth-2">' + n[2] + "</div>", "", 0)
            },
            "#lth": function(a, b) {
                var c = I.lthai
                  , d = ~~(a ? b : c);
                Eb("lthai", d, 0);
                Z.lth.innerHTML = "大きな手牌:" + n[d];
                c != d && f()
            },
            icn: function() {
                A.da('<div class=A id="#icn-">' + p[0] + '</div><div class=A id="#icn-HK">' + p[1] + "</div>", "", 0)
            },
            "#icn": function(a, b) {
                var c = I.server || ""
                  , d = (a ? b : c) || "";
                Eb("server", d, "");
                Z.icn.innerHTML = p["HK" == d ? 1 : 0];
                c != d && A.l("設定を有効にするには、再接続する必要があります。<br>再接続してもよろしいですか？", 3, function() {
                    location.reload()
                })
            },
            cfgPrev: function() {
                a(-1)
            },
            cfgNext: function() {
                a(1)
            },
            cfgClose: function() {
                v.ja(11)
            }
        }
    }());
    C["#iH"] = C["#iS"] = C["#iV"];
    C.iH = C.iS = C.iV = C.hR = C.hG = C.hB;
    C["#hR"] = C["#hG"] = C["#hB"];
    Aa(C, function() {
        function a(a, b) {
            for (var d = 0; d < b.length; ++d) {
                var c = b[d]
                  , f = '<div style="position:absolute;width:100%;height:100%;padding:0.2em 0.5em;pointer-events:none;">'
                  , n = "javascript:void(0)"
                  , f = f + "<table cellpadding=0 cellspacing=0 width=100% height=100%><tr>"
                  , f = f + ("<td rowspan=3 class=gray width=6% >" + (d + 1) + ".</td>");
                if (c) {
                    var n = "https://tenhou.net/0/?log=" + c.log + "&tw=" + (4 - ~~c.oya) % 4
                      , f = f + "<td colspan=2>"
                      , f = f + (z("牌譜 | ") + c.log.substr(4, 2) + "/" + c.log.substr(6, 2) + z(" | "))
                      , f = f + na(c.type)
                      , p = c.lobby;
                    p && (f += " " + (1E4 > p ? "L" : "C") + Xa(4, p));
                    var f = f + "</td>"
                      , f = f + "</tr><tr>"
                      , p = c.uname
                      , l = ~~c.oya;
                    if (c = c.sc) {
                        for (var c = c.split(","), k = 0; k < c.length; ++k)
                            c[k] = Number(c[k]);
                        for (k = 0; 4 > k; ++k)
                            f += "<td width=47% >",
                            p[k] && (f = k ? f + ("ABCD".substr((k + 4 - l) % 4, 1) + ":") : f + (0 + ~~(p[1] && c[3] > c[1]) + ~~(p[2] && c[5] > c[1]) + ~~(p[3] && c[7] > c[1]) + 1 + "位 "),
                            f += Da(p[k]) + "(" + Ya(c[2 * k + 1].toFixed(1)) + ")"),
                            f += "</td>",
                            1 == k && (f += "</tr><tr>")
                    } else if (p)
                        for (k = 0; 4 > k; ++k)
                            f += "<td width=47% >" + Da(p[k]) + "</td>",
                            1 == k && (f += "</tr><tr>")
                }
                f += "</tr></table>";
                f += "</div>";
                f += '<a href="' + n + '" class=bt3 target=_blank></a>';
                nb("DIV", a, "", {
                    innerHTML: f
                }, {
                    height: "3.4em",
                    position: "relative",
                    textAlign: "left"
                }).childNodes[1].onclick = C.logOpen
            }
            nb("DIV", a, "gray", {
                innerHTML: '●「長押し」または「右クリック」から別タブで開く/URLのコピーなどが行えます<br><br>牌譜の検索やダウンロードはこちらから行えます<br><a href="https://tenhou.net/mjlog.html" target=_blank >https://tenhou.net/mjlog.html</a><br>'
            }, {
                fontSize: "75%",
                align: "left",
                padding: "1em 0 6em 0"
            })
        }
        function f(d, b) {
            var f = b.split("\n");
            f[c - 1] || f.pop();
            for (var c = 0; c < f.length; ++c) {
                var g = f[c].split(" ")
                  , n = g[0]
                  , p = ~~g[1];
                f[c] = {
                    type: parseInt(n.split("-")[1], 16),
                    lobby: ~~n.split("-")[2],
                    log: n,
                    oya: (4 - p) % 4,
                    uname: [g[2 + (0 + p) % 4], g[2 + (1 + p) % 4], g[2 + (2 + p) % 4], g[2 + (3 + p) % 4]],
                    sc: [0, g[6 + (0 + p) % 4], 0, g[6 + (1 + p) % 4], 0, g[6 + (2 + p) % 4], 0, g[6 + (3 + p) % 4]].join()
                }
            }
            d.innerHTML = "";
            c = nb("DIV", d, "", {
                innerHTML: '<a class=bt3 href="https://tenhou.net/mjlog.html" target=_blank style="padding:1em 0;">この端末に記録されている牌譜を表示</a>'
            }, {
                textAlign: "center"
            });
            c.childNodes[0].onclick = function() {
                C.Zb(d);
                return !1
            }
            ;
            c = nb("DIV", d, "bt3", {
                innerHTML: "※有料会員の状態で打った牌譜のみ検索できます<br>※１０日前までの牌譜が検索可能です"
            }, {
                textAlign: "center",
                padding: "0.5em 0"
            });
            a(d, f.reverse())
        }
        return {
            Zb: function(d) {
                d.innerHTML = "";
                nb("DIV", d, "", {
                    innerHTML: '<a class=bt3 href="https://tenhou.net/mjlog.html" target=_blank style="padding:1em 0;">すべての牌譜一覧を表示</a>'
                }, {
                    textAlign: "center"
                }).childNodes[0].onclick = function() {
                    d.innerHTML = "<br>L O A D I N G ...";
                    Ua("https://tenhou.net/0/log/find.cgi?un=" + I.uname + "&raw=1", function(a) {
                        console.log(a);
                        f(d, a)
                    }, function() {
                        alert("DOWNLOAD ERROR")
                    });
                    return !1
                }
                ;
                for (var b = [], h = ~~I.lognext, c = 0; 40 > c; ++c) {
                    var g = (h + 40 - 1 - c) % 40;
                    try {
                        b.push(JSON.parse(I["log" + g]))
                    } catch (n) {}
                }
                a(d, b)
            },
            logOpen: function(a) {
                if (!(a.shiftKey || a.altKey || a.ctrlKey || a.metaKey) && (a = a.target,
                a = a.href.split(/\?log=|&tw=/),
                1 != a.length))
                    return u.log = a[1],
                    u.TW = u.tw = ~~a[2],
                    u.ts = 0,
                    v.ja(11),
                    !1
            }
        }
    }());
    Aa(C, function() {
        function a() {
            Z.wgF0.innerText = h & 2 ? "四" : h & 4 ? "三" : "－";
            Z.wgF1.innerText = h & 8 ? "東" : h & 16 ? "南" : "－";
            Z.wgF2.innerText = h & 32 ? "雀" : h & 64 ? "特" : h & 128 ? "鳳" : "－"
        }
        function f() {
            var a = Z.klist;
            a.innerHTML = "";
            var f = 0;
            if (b)
                for (var n = 0; n < b.length; ++n) {
                    var p = '<div style="position:absolute;width:100%;height:100%;padding:0.2em 0.5em;pointer-events:none;">', p = p + "<table cellpadding=0 cellspacing=0 width=100% height=100%>", p = p + ("<tr><td rowspan=3 class=gray width=6%>" + (f + 1) + ".</td>"), l, k = b[n], m = ~~k[3];
                    if (h & 6) {
                        if (~m & 16 && ~h & 2)
                            continue;
                        if (m & 16 && ~h & 4)
                            continue
                    }
                    if (h & 24) {
                        if (~m & 8 && ~h & 8)
                            continue;
                        if (m & 8 && ~h & 16)
                            continue
                    }
                    if (h & 224 && 0 == d) {
                        if (0 != (m & 1536) && ~h & 32)
                            continue;
                        if (!(m & 3584) && 2 == ma(m) && ~h & 64)
                            continue;
                        if (!(m & 3584) && 3 == ma(m) && ~h & 128)
                            continue
                    }
                    l = "https://tenhou.net/0/?wg=" + k[0];
                    for (var x = [k[4], k[7], k[10], k[13]], E = 0; 4 > E; ++E)
                        x[E] && (x[E] = decodeURIComponent(escape(atob(x[E]))));
                    for (var w = [~~k[5], ~~k[8], ~~k[11], ~~k[14]], B = [~~k[6], ~~k[9], ~~k[12], ~~k[15]], p = p + ("<td colspan=2>" + z("観戦 | ") + k[2] + z(" | ") + na(m) + "</td></tr><tr>"), E = 0; 4 > E; ++E)
                        x[E] && (p += "<td width=47%>",
                        p += "<span class=dan" + w[E] + ">" + ga[w[E]] + "</span>" + z("R") + B[E] + z("/") + x[E],
                        p += "</td>",
                        1 == E && (p += "</tr><tr>"));
                    p += "</tr></table>";
                    p += "</div>";
                    p += '<a href="' + l + '" class=bt3 target=_blank></a>';
                    nb("DIV", a, "", {
                        innerHTML: p
                    }, {
                        height: "3.4em",
                        position: "relative",
                        textAlign: "left"
                    }).childNodes[1].onclick = C.wgOpen;
                    ++f
                }
            f || (a.innerHTML = "<br>観戦可能な対戦はありません");
            nb("DIV", a, "gray", {
                innerHTML: "●「長押し」または「右クリック」から別タブで開く/URLのコピーなどが行えます<br>●観戦は５分遅れ<br>"
            }, {
                fontSize: "75%",
                align: "left",
                padding: "1em 0 6em 0"
            })
        }
        var d, b, h = 128;
        return {
            Lc: function(c) {
                d = c;
                Ua("https://mjv.jp/0/wg/" + (1E4 > d ? Xa(4, d) : d) + ".js", function(a) {
                    if (b = a.substr(3, a.length - 3 - 2))
                        try {
                            b = JSON.parse(b)
                        } catch (n) {
                            return
                        }
                    if (b)
                        for (a = 0; a < b.length; ++a)
                            b[a] = b[a].split(",");
                    f()
                });
                f();
                a();
                Z.wgF2.style.display = 0 == d ? "" : "none"
            },
            wgF0: function() {
                h = h & -7 | (h & 2 ? 4 : h & 4 ? 0 : 2);
                a();
                f()
            },
            wgF1: function() {
                h = h & -25 | (h & 8 ? 16 : h & 16 ? 0 : 8);
                a();
                f()
            },
            wgF2: function() {
                h = h & -225 | (h & 32 ? 64 : h & 64 ? 128 : h & 128 ? 0 : 32);
                a();
                f()
            },
            wgOpen: function(a) {
                if (!(a.shiftKey || a.altKey || a.ctrlKey || a.metaKey))
                    return a = a.target,
                    u.wg = a.href.split("?wg=")[1],
                    u.TW = u.tw = 0,
                    v.ja(11),
                    !1
            }
        }
    }());
    var Cc = [1, 65, 9, 73, 17, 81, 25, 89, 129, 193, 137, 201, 145, 209, 153, 217, 33, 97, 41, 105, 49, 113, 57, 121, 161, 225, 169, 233, 177, 241, 185, 249, 1057, 545, 1569, 1065, 553, 1577, 1585, 1593]
      , Dc = [7, 3, 15, 11, 135, 131, 143, 139, 39, 35, 47, 43, 167, 163, 175, 171];
    Aa(C, function() {
        function a() {
            return ("" + (I.rule || "")).split(",")
        }
        function f() {
            function b(a, b) {
                var c = d[a].childNodes[1];
                c.className = "";
                c.innerHTML = b
            }
            function c(a, c, d) {
                b(a, c == d ? "1.00" : (c / d).toFixed(3).substr(1))
            }
            if (Z.pftab) {
                Z.pftab.style.display = "none";
                Z.pftab_.style.display = "";
                for (var d = Z.pftab.getElementsByTagName("TR"), f = 1; f < d.length; ++f)
                    if (!(2 > d[f].childNodes.length)) {
                        var g = d[f];
                        g.style.borderBottom = "1px solid #444";
                        g = d[f].childNodes[0];
                        g.className = "gray";
                        g.style.textAlign = "left";
                        g = d[f].childNodes[1];
                        g.innerHTML = "-";
                        g.className = "gray";
                        g.style.textAlign = "right"
                    }
                d[16].childNodes[0].innerHTML = "";
                if (f = ~~a()[4]) {
                    var h, g = 4, m = 0, k = "";
                    switch (x(f)) {
                    case 4:
                        g = 4;
                        m = 0;
                        h = C[17];
                        k = "※段位戦４人打ち合算戦績";
                        break;
                    case 3:
                        g = 3;
                        m = 0;
                        h = C[16];
                        k = "※段位戦３人打ち合算戦績";
                        break;
                    case 601:
                        g = 4;
                        m = 0;
                        h = C[18];
                        break;
                    case 602:
                        g = 4;
                        m = 2;
                        h = C[19];
                        break;
                    case 603:
                        g = 4;
                        m = 5;
                        h = C[20];
                        break;
                    case 611:
                        g = 4;
                        m = 0;
                        h = C[21];
                        break;
                    case 612:
                        g = 4;
                        m = 2;
                        h = C[22];
                        break;
                    case 613:
                        g = 4;
                        m = 5;
                        h = C[23];
                        break;
                    case 623:
                        g = 3;
                        m = 5;
                        h = C[24];
                        break;
                    case 633:
                        g = 3,
                        m = 5,
                        h = C[25]
                    }
                    d[16].childNodes[0].innerHTML = k;
                    h && (Z.pftab.style.display = "",
                    Z.pftab_.style.display = "none",
                    k = ~~h[4] + ~~h[5] + ~~h[6] + ~~h[7]) && (c(1, h[4], k),
                    c(2, h[5], k),
                    c(3, h[6], k),
                    4 == g && c(4, h[7], k),
                    c(5, h[8], k),
                    b(6, k),
                    b(7, (0 < h[3] ? "+" : "") + (h[3] / k).toFixed(1)),
                    b(8, ((1 * ~~h[4] + 2 * ~~h[5] + 3 * ~~h[6] + 4 * ~~h[7]) / k).toFixed(2)),
                    0 != (f & 1536) && (f = 1 * h[3] + h[0] * m,
                    b(9, (0 < f ? "+" : "") + (f / k).toFixed(1)),
                    b(10, (~~h[0] / k).toFixed(2))),
                    c(11, h[10], h[9]),
                    c(12, h[11], h[9]),
                    c(13, h[12], h[9]),
                    c(14, h[13], h[9]),
                    b(15, ~~h[2]))
                }
            }
        }
        function d(b) {
            function c(a) {
                for (var b, c = 1; c < arguments.length; ++c)
                    b = g[a].childNodes[c],
                    b.className = "",
                    b.innerHTML = arguments[c]
            }
            function d(a, b, d) {
                c(a, b, (d ? d : "- ") + z("位"))
            }
            function f(a, b, d, f) {
                c(a, b == d ? "1.00" : (b / d).toFixed(3).substr(1), (f ? f : "- ") + z("位"))
            }
            var h = Z.rnktab;
            if (h) {
                Z.rnktab.style.display = "none";
                Z.rnktab_.style.display = "";
                for (var g = h.getElementsByTagName("TR"), m = 1; m < g.length; ++m) {
                    var h = g[m]
                      , k = h.childNodes;
                    if (!(2 > k.length)) {
                        16 != m && 18 != m && (h.style.borderBottom = "solid 1px #444");
                        k[0].style.textAlign = "left";
                        k[0].className = "gray";
                        for (var l = 1; l < k.length; ++l)
                            h = k[l],
                            h.className = "gray",
                            h.style.textAlign = "right",
                            h.style.paddingLeft = "0.5em",
                            1 != m && 6 != m && (h.innerHTML = "-")
                    }
                }
                c(18, z("- 戦"));
                h = ~~a()[3];
                W.Na != h && (W.Na = h,
                W.L('<PXR V="' + h + '" />'));
                if (h && (Z.rnktab.style.display = "",
                Z.rnktab_.style.display = "none",
                b && (b = b.v2.split(","),
                15 == b.length || 21 == b.length))) {
                    var m = ~~b[0], k = ~~b[1], l = ~~b[2], n = ~~b[3], p = m + k + l + n, J = b[4], w;
                    switch (x(h)) {
                    case 4:
                        w = C[17][2];
                        break;
                    case 3:
                        w = C[16][2];
                        break;
                    case 601:
                        w = C[18][2];
                        break;
                    case 602:
                        w = C[19][2];
                        break;
                    case 603:
                        w = C[20][2];
                        break;
                    case 611:
                        w = C[21][2];
                        break;
                    case 612:
                        w = C[22][2];
                        break;
                    case 613:
                        w = C[23][2];
                        break;
                    case 623:
                        w = C[24][2];
                        break;
                    case 633:
                        w = C[25][2]
                    }
                    var $a = ~~b[6]
                      , B = ~~b[7]
                      , D = ~~b[8]
                      , y = ~~b[9]
                      , E = ~~b[10]
                      , ca = ~~b[11]
                      , pa = ~~b[12]
                      , ea = ~~b[13]
                      , fa = ~~b[14];
                    if (p) {
                        var Sa = h & 16 ? 30 * m + 0 * k + -30 * l : 30 * m + 10 * k + -10 * l + -30 * n
                          , va = h & 16 ? 1 * m + 2 * k + 3 * l : 1 * m + 2 * k + 3 * l + 4 * n
                          , wa = m + k
                          , ua = h & 16 ? l : n;
                        d(2, Ya(J), B);
                        d(7, Ya((J / p).toFixed(1)), D);
                        d(3, Ya(Sa), y);
                        d(8, (va / p).toFixed(2), E);
                        f(11, m, p, ca);
                        ~h & 16 && f(12, wa, p, pa);
                        f(13, ua, p, ea)
                    }
                    if (21 == b.length) {
                        var J = b[15]
                          , ca = b[16]
                          , ra = ~~b[17]
                          , qa = ~~b[18]
                          , pa = ~~b[19]
                          , ea = ~~b[20];
                        d(4, Ya(J), ra);
                        d(9, Ya((J / p).toFixed(1)), qa);
                        d(5, Ya(ca), pa);
                        d(10, Ya((ca / p).toFixed(2)), ea)
                    }
                    J = "-";
                    15 == b.length && D && (J = B + D + y + E);
                    21 == b.length && qa && (J = ra + qa);
                    d(15, ~~w, fa);
                    d(16, J, $a);
                    c(18, m + z(" + ") + k + z(" + ") + l + (h & 16 ? "" : z(" + ") + n) + z(" = ") + p + z(" 戦"))
                }
            }
        }
        function b(a) {
            a = a.rankingcs.split(",");
            var b = ""
              , c = "このロビーでは使用していません"
              , d = "なし"
              , f = ""
              , h = "-"
              , g = []
              , m = "- -";
            a[0] = a[0] || y.ranking;
            if ("sc3m" == a[0] || "sc3c0m" == a[0] || "sc3c2m" == a[0] || "sc3c5m" == a[0])
                c = "連続3戦の最大合計得点",
                "sc3c2m" == a[0] && (d = "祝儀1枚2000点"),
                "sc3c5m" == a[0] && (d = "祝儀1枚5000点"),
                f = "【最新3戦】",
                a[8] && (m = a[8]),
                a[6] && (h = Ya(Number(a[6]).toFixed(1))),
                a[3] && g.push(Ya(Number(a[3]).toFixed(1))),
                a[2] && g.push(Ya(Number(a[2]).toFixed(1))),
                a[1] && g.push(Ya(Number(a[1]).toFixed(1))),
                g.length && g.push("= " + Ya((1 * a[1] + 1 * a[2] + 1 * a[3]).toFixed(1)));
            else if ("sc5m" == a[0] || "sc5c0m" == a[0] || "sc5c2m" == a[0] || "sc5c5m" == a[0])
                c = "連続5戦の最大合計得点",
                "sc5c2m" == a[0] && (d = "祝儀1枚2000点"),
                "sc5c5m" == a[0] && (d = "祝儀1枚5000点"),
                f = "【最新5戦】",
                a[9] && (m = a[9]),
                a[7] && (h = Ya(Number(a[7]).toFixed(1))),
                a[5] && g.push(Ya(Number(a[5]).toFixed(1))),
                a[4] && g.push(Ya(Number(a[4]).toFixed(1))),
                a[3] && g.push(Ya(Number(a[3]).toFixed(1))),
                a[2] && g.push(Ya(Number(a[2]).toFixed(1))),
                a[1] && g.push(Ya(Number(a[1]).toFixed(1))),
                g.length && g.push("= " + Ya((1 * a[1] + 1 * a[2] + 1 * a[3] + 1 * a[4] + 1 * a[5]).toFixed(1)));
            g = g.length ? g.join(" ") : "--";
            b += '<div style="display:inline-block;text-align:left;">' + z("【ランキング】") + "　" + c + "<br>" + z("【最高得点】") + "　" + h + "　" + z("【祝儀】") + "　" + d + "</div>";
            b = b + ('<div style="font-size:375%;padding:0.1em 0;">' + m + "位</div>") + (z(f) + " " + g + "<br>");
            Z.csranking.innerHTML = b
        }
        function h() {
            if (M[4096] && M[4096].complete && M[4196] && M[4196].complete && M[4296] && M[4296].complete && M[4396] && M[4396].complete && M[4496] && M[4496].complete)
                return !0;
            A.l("必要な画像リソースの読み込みが完了していません");
            return !1
        }
        function c(a) {
            var b = Z.panes.childNodes
              , c = b.length;
            ca = (ca - 1 + a + c - 1) % (c - 1) + 1;
            for (a = 1; a < c; ++a)
                b[a].style.display = a == ca ? "" : "none";
            Z.paneDisp.innerHTML = b[ca].firstChild.innerHTML;
            Z.panePrev.innerHTML = 2 > ca ? "&laquo;" : "　";
            Z.paneNext.innerHTML = 2 > ca ? "&raquo;" : "　";
            Z.hdr.style.display = b[ca].classList.contains("nohdr") ? "none" : "";
            b = b[ca].classList;
            b.contains("init_tlist") && (b.remove("init_tlist"),
            C.dc(Z.tlist));
            b.contains("init_hlist") && (b.remove("init_hlist"),
            C.Zb(Z.hlist));
            b.contains("init_klist") && (b.remove("init_klist"),
            C.Lc(B))
        }
        function g(a) {
            return (new Date(a.substr(0, 4),a.substr(4, 2),a.substr(6, 2),a.substr(8, 2),a.substr(10, 2),a.substr(12, 2))).getTime()
        }
        function n(a) {
            return a.replace(/(\d{4})(\d\d)(\d\d)(\d\d)(\d\d)/, function(a, b, c, d, f, h) {
                return b + "." + c + "." + d + "(" + aa[(new Date(b,c - 1,d)).getDay()] + ") " + f + ":" + h
            })
        }
        function p() {
            var a = C[1];
            Z.expdisp.innerHTML = z("有効期限:") + (a ? a.replace(/(\d\d\d\d)(\d\d)(\d\d)/, "$1.$2.$3") : "- - - -")
        }
        function l() {
            var a = ~~y.players, b = ~~y.premiumonly, c = ~~y.joinfee, d = y.rule, f = parseInt(d[2], 16), h;
            h = "" + (f & 8 ? "東南" : "東風") + (f & 16 ? "サンマ" : "戦") + " " + (f & 4 ? "喰ナシ" : "喰あり") + (f & 2 ? "赤ナシ" : "赤あり") + " ";
            la(B, f) && (h += "速");
            f & 256 && (h += "暗");
            f & 512 && (h += "祝");
            var g = ""
              , m = ~~d[3]
              , k = ~~d[4]
              , l = ~~d[5]
              , p = ~~d[6];
            y.Ca = !!y.join;
            if (y.Ca) {
                var x = (f & 16 ? C[16] : C[17])[0];
                m && k ? y.Ca = m <= x && x <= k : m ? y.Ca = m <= x : k && (y.Ca = x <= k)
            }
            y.Ca && (f = (f & 16 ? C[16] : C[17])[2],
            l && p ? y.Ca = l <= f && f <= p : l ? y.Ca = l <= f : p && (y.Ca = f <= p));
            m && k && m == k ? g += ga[m] + "限定" : m && k ? g += ga[m] + "～" + ga[k] : m ? g += ga[m] + "以上" : k && (g += ga[k] + "以下");
            g.length && (l || p) && (g += " & ");
            l && p ? g += "R" + l + "～R" + p : l ? g += "R" + l + "以上" : p && (g += "R" + p + "以下");
            g.length || (g += "段位R指定なし");
            g += "<br>";
            g = c ? g + "だれでもOK" : b ? g + (a ? "固定 " + a + " 名(有効期限3日以上)" : "有効期限3日以上") : g + (a ? "固定 " + a + " 名" : "だれでもOK");
            a = c ? "有効期限" + c + "日分" : a ? "- - -" : b ? "なし" : "無料";
            d = "" + ('<div style="font-size:150%;padding-top:0.25em;">' + decodeURIComponent(y.title) + '</div><hr><table cellpadding=0 cellspacing=0 style="margin:0 auto;"><tr><td><div style="display:inline-block;text-align:left;">' + z("【開催期間】JST") + "<br>開始 " + n(d[0]) + "<br>終了 " + n(d[1]) + "<br>" + z("【ルール】") + "<br>" + h + '</div></td><td style="padding:0 0 0 1em;"><div style="display:inline-block;text-align:left;">' + z("【参加費】") + "<br>" + a + "<br>" + z("【参加対象】") + "<br>" + g + "</div></td></tr></table>");
            Z.csmain.innerHTML = d;
            W.L("<DATE />")
        }
        function k() {
            pa = void 0;
            Z.joincs0 && W.L("<DATE />")
        }
        function m(a) {
            return '<div style="margin:0.5em 0;"><div class=select-wrapper><button name=rule id=rule' + a + ' style="width:11.5em;text-align:left;"></button></div><button name=join id=join' + a + " disabled>予約</button></div>"
        }
        function x(a) {
            if (0 != (a & 1536))
                switch (a) {
                case 1057:
                    return 601;
                case 545:
                    return 602;
                case 1569:
                    return 603;
                case 1065:
                    return 611;
                case 553:
                    return 612;
                case 1577:
                    return 613;
                case 1585:
                    return 623;
                case 1593:
                    return 633
                }
            else
                return a & 16 ? 3 : 4
        }
        function E(a) {
            return a ? (na(a) + "　　　").substr(0, 6) + "&nbsp;&nbsp;" + J[a] : "SELECT GAME"
        }
        function w(a) {
            return a.replace(/,/g, "</td><td>").replace(/\|/g, "</td></tr><tr><td>").replace(/>\(/g, '><table cellpadding=0 cellspacing=0 width=100% style="border-collapse:collapse;"><tr><td>').replace(/\)</g, "</td></tr></table><")
        }
        var B, y, J = {
            n: [],
            $a: [],
            Va: []
        }, D = {}, ca = location.search.match(/^\?(C[0-9]{8})/) ? 2 : 1, pa;
        return {
            Cb: function() {
                D = {};
                location.search.match(/^\?L([1-9][0-9]{3})/) ? (W.L({
                    tag: "LOBBY",
                    id: RegExp.$1
                }),
                B = ~~RegExp.$1) : location.search.match(/^\?(C[0-9]{8})/) ? (B = ~~("1" + RegExp.$1.substr(1, 4)),
                W.L({
                    tag: "CS",
                    lobby: RegExp.$1
                })) : (B = 0,
                C.l({
                    tag: "LOBBY"
                }))
            },
            LOBBY: function(a, h) {
                Ub.v.canvas.style.visibility = "";
                W.Na = 0;
                var g;
                g = C[17];
                var k = C[16];
                C[2] || g.length || k.length ? (g.length || (g = [0, 0, 1500]),
                k.length || (k = [0, 0, 1500]),
                g = "<tr><td class=gray>四麻:</td><td>" + ga[g[0]] + "</td><td class=gray>R</td><td>" + ~~g[2] + '</td><td style="padding:0 0 0 0.25em;">' + g[1] + "</td><td class=gray>/</td><td>" + sa[~~g[0]] + "</td><td class=gray>pt</td></tr>",
                k = "<tr><td class=gray>三麻:</td><td>" + ga[k[0]] + "</td><td class=gray>R</td><td>" + ~~k[2] + '</td><td style="padding:0 0 0 0.25em;">' + k[1] + "</td><td class=gray>/</td><td>" + sa[~~k[0]] + "</td><td class=gray>pt</td></tr>") : (g = "<tr><td class=gray>段級位を取得するには<br>「新規ID」登録が必要です</td></tr>",
                k = "");
                g = '<div id=panes style="height:16em;">' + ('<div id=hdr><table cellpadding=0 cellspacing=0 style="width:100%;white-space:nowrap;text-align:right;"><tr><td><table cellpadding=0 cellspacing=0 style="width:100%;"><tr><td style="text-align:left;">' + z("接続:") + "<span id=lnn0>" + ~~J.n[0] + "</span> " + z("待機:") + "<span id=lnn2>" + ~~J.n[2] + "</span> " + z("終局:") + "<span id=lnn3>" + ~~J.n[3] + "</span> </td></tr><tr><td><span id=iddisp>" + Da(C[0]) + '</span> <span id=expdisp></span></td></tr></table></td><td rowspan=2 style="width:1px;padding-left:0.25em;"><table cellpadding=0 cellspacing=0 align=right>' + g + k + '</table></td></tr></table><div style="display:none;"></div><hr></div>');
                g += '<div style="display:none;padding:1em 1em;"><span style="display:none;">　</span><div id=lbinfo style="height:3em;">' + z((jb ? "" : "●アドレスバーを小さくするには下にスクロールしてからゆっくり上にスクロールします(機種依存あり)") + "●OK/パス/ツモ切りは右クリックまたは余白をダブルタップ") + "</div><br><div class=select-wrapper><button name=testplay>テストプレイ</button></div><br><br><br>" + z("※下の&laquo;&raquo;でタブを移動してください。") + "</div>";
                1E4 > B ? g += '<div style="display:none;padding:0.25em 0;"><span style="display:none;">' + (0 == B ? "対戦" : "個室L" + Xa(4, B)) + "</span>" + m(0) + m(1) + m(2) + "</div>" : 2E4 > B && (g += '<div style="display:none;"><span style="display:none;">大会C' + Xa(4, B % 1E4) + '</span><div id=csmain style="height:9em;"></div><span style="font-size:150%;padding:0 1em;">' + z("予約") + "<span id=lnj0>" + ~~J.$a[0] + "</span>" + z("人") + " " + z("対戦") + "<span id=lng0>" + ~~J.Va[0] + "</span>" + z("人") + "</span>",
                g += "<button name=join id=joincs0 disabled>　</button></div>");
                1E4 <= B && 2E4 > B && (g += '<div style="display:none;"><span style="display:none;">大会C' + Xa(4, B % 1E4) + '</span><div id=csranking style="height:9em;"></div><span style="font-size:150%;padding:0 1em;">' + z("予約") + "<span id=lnj1>" + ~~J.$a[0] + "</span>" + z("人") + " " + z("対戦") + "<span id=lng1>" + ~~J.Va[0] + "</span>" + z("人") + "</span>",
                g += "<button name=join id=joincs1 disabled>　</button></div>");
                0 == B ? g += w('<div style="display:none;"><span style="display:none;">月間戦績</span>' + m(3) + '<table cellpadding=0 cellspacing=0 id=rnktab style="margin:0 auto;"><tr><td valign=top style="min-width:10em;">(,通算,|得点,,|順位,,|収支,,|祝儀,,)</td><td style="width:0.5em;"></td><td valign=top style="min-width:7em;">(,平均,|,,|,,|,,|,,)</td><td rowspan=2 style="width:1em;"></td><td rowspan=2 valign=top style="min-width:11em;">(トップ,,|連対率,,|ラス率,,|<div style="border-bottom:1px solid transparent;">&nbsp;</div>|Rate,,|総合,,)</td></tr><tr><td colspan=3 align=right style="padding:0;"><table cellpadding=0 cellspacing=0 style="border-collapse:collapse;"><tr><td style="padding-right:0.5em;">対戦数,</td></tr></table></tr></table><div id=rnktab_><br><br>' + z("※表示する対戦ルールを選択してください") + "</div></div>") : (g += '<div style="display:none;"><span style="display:none;">' + (1E4 > B ? "個室L" : "大会C") + Xa(4, B % 1E4) + '</span><div style="height:8.5em;border:1px solid #444;text-align:left;margin-bottom:0.5em;position: relative;"><button name=chatInput style="font-size:100%;position:absolute;right:0;top:8.5em;">&middot;&middot;&middot;</button><div id=chat style="height:100%;font-size:75%;overflow-y:scroll;"><div>#ENTER LOBBY ' + B + "</div></div></div>",
                1E4 > B ? g += m(3) : 2E4 > B && (g += '<span style="font-size:150%;padding:0 1em;">' + z("予約") + "<span id=lnj2>" + ~~J.$a[0] + "</span>" + z("人") + " " + z("対戦") + "<span id=lng2>" + ~~J.Va[0] + "</span>" + z("人") + "</span><button name=join id=joincs2 disabled>　</button>"),
                g += "</div>");
                0 == B && (g += w('<div style="display:none;"><span style="display:none;">通算戦績</span>' + m(4) + '<table cellpadding=0 cellspacing=0 id=pftab style="margin:0 auto;"><tr><td valign=top style="min-width:6.5em;">(１位率,|２位率,|３位率,|４位率,|飛び率,)</td><td style="width:1em;"></td><td valign=top style="min-width:8em;">(対戦数,|平均得点,|平均順位,|平均収支,|平均祝儀,)</td><td style="width:1em;"></td><td valign=top style="min-width:6.5em;">(和了率,|放銃率,|副露率,|立直率,|Rate,)</td></tr><tr><td colspan=5 class=gray style="font-size:75%;padding:0.2em;"></td></tr></table><div id=pftab_><br><br>' + z("※表示する対戦ルールを選択してください") + "</div></div>"));
                g += '<div class="nohdr init_hlist" style="display:none;height:100%;"><span style="display:none;">牌譜</span><div style="position:relative;height:100%;"><div class=sscl id=hlist style="position:relative;height:100%;border:solid 1px #222;overflow-y:scroll;"></div><div class=sblink style="visibility:hidden;">▼</div></div></div><div class="nohdr init_klist" style="display:none;height:100%;"><span style="display:none;">観戦</span><div style="position:relative;height:100%;"><div class=sscl id=klist style="position:relative;height:100%;border:solid 1px #222;overflow-y:scroll;"></div><div class=sblink style="visibility:hidden;">▼</div><button name=wgF0 class="ra0 bgb" style="position:absolute;left:0em;bottom:0em;">－</button><button name=wgF1 class="ra0 bgb" style="position:absolute;left:2em;bottom:0em;">－</button><button name=wgF2 class="ra0 bgb" style="position:absolute;left:4em;bottom:0em;">－</button></div></div><div class="nohdr init_tlist" style="display:none;height:100%;"><span style="display:none;">Trainingβ</span><div style="position:relative;height:100%;"><div class=sscl id=tlist style="position:relative;height:100%;border:solid 1px #222;overflow-y:scroll;"></div><div class=sblink style="visibility:hidden;">▼</div></div></div><div style="display:none;padding:2em 0"><span style="display:none;">Tools</span> <button name=openurl>URL</button> <button name=help>ヘルプ</button> <button name=hairi>牌理</button><br><br><button name=purchase>料金のお支払い</button><br></div>';
                gb && (g += '<div style="display:none;"><span style="display:none;">Caution</span><div style="padding:1em 4em;">---- ご注意 ----<br><br>Android4.4より前の標準ブラウザでは、対戦を行うことはできますが、表示の乱れやダブルタップで意図しない拡大が発生することがあります。Android4.4以降にOSをアップデートするか<a href="https://play.google.com/store/apps/details?id=com.android.chrome">Google Chrome Browser</a>を使用してください。</div></div>');
                g += "</div><hr>";
                k = !!Object.keys(D).length;
                h.innerHTML = g + ('<table cellpadding=0 cellspacing=0 style="width:100%;"><tr><td style="position:relative;vertical-align:middle;"><div id=paneDisp style="position:absolute;font-size:300%;width:100%;padding:0.25em 0;pointer-events:none;">　</div><button name=panePrev class=ra1 style="font-size:300%;width:50%;height:1.5em;">　</button><button name=paneNext class=ra2 style="font-size:300%;width:50%;height:1.5em;">　</button></td><td style="width:9.5em;"><button name=cancel style="width:100%;height:2.5em;' + (k ? "" : "display:none;") + '">CANCEL</button><button name=logout style="width:100%;height:2.5em;' + (k ? "display:none;" : "") + '">LOGOUT</button></td></tr></table>');
                zc(h);
                C["#rule0"]();
                f();
                d();
                p();
                c(0);
                1E4 <= B && 2E4 > B && (l(),
                b({
                    rankingcs: ""
                }),
                W.Na = -1,
                W.L('<PXR V="-1" />'));
                u.training && setTimeout(function() {
                    C.l({
                        tag: "TRAINING",
                        file: u.training
                    })
                }, 1)
            },
            ic: function(a) {
                J.n = a.n.split(",");
                J.$a = a.j.split(",");
                J.Va = a.g.split(",");
                Z.lnn0 && (Z.lnn0.innerText = ~~J.n[0],
                Z.lnn2.innerText = ~~J.n[2],
                Z.lnn3.innerText = ~~J.n[3],
                C["#rule0"]());
                for (a = 0; 3 > a; ++a)
                    Z["lnj" + a] && (Z["lnj" + a].innerText = ~~J.$a[0]),
                    Z["lng" + a] && (Z["lng" + a].innerText = ~~J.Va[0]);
                return 1
            },
            ec: function(a) {
                var b = a.lobby;
                b && (4 == b.length ? (B = ~~b,
                C.l({
                    tag: "LOBBY"
                })) : 9 == b.length && (B = ~~("1" + b.substr(1, 4))));
                var b = ab.getElementById("chat")
                  , c = a.text;
                if (b && c && c.length) {
                    c = decodeURIComponent(c);
                    (a = a.uname) && a.length && (c = decodeURIComponent(a) + ": " + c);
                    a = ab.createElement("DIV");
                    a.innerText = c;
                    var c = b.scrollHeight
                      , d = b.scrollTop + b.clientHeight;
                    b.appendChild(a);
                    c <= d && d < b.scrollHeight && (b.scrollTop = b.scrollHeight)
                }
                return 1
            },
            fc: function(a) {
                a && (y = a,
                y.rule = y.rule.split(","),
                y.join = ~~y.join,
                y.joinfee = ~~y.joinfee,
                y.players = ~~y.players,
                y.premiumonly = ~~y.premiumonly);
                Z.joincs0 ? l() : C.l({
                    tag: "LOBBY"
                });
                return 1
            },
            gc: function(a) {
                var b = Z.joincs0;
                if (!b)
                    return 1;
                a = g(a.t);
                var c = g(y.rule[0])
                  , d = g(y.rule[1]);
                if (d <= a)
                    b.innerText = "終了",
                    b.disabled = !0;
                else if (y.Ca)
                    if (a < c) {
                        var f = (c - a) / 1E3;
                        b.innerText = "あと" + (86400 < f ? (f / 24 / 60 / 60).toFixed(1) + "日" : 3600 < f ? (f / 60 / 60).toFixed(1) + "時間" : 60 < f ? (f / 60).toFixed(1) + "分" : "約" + 5 * ~~(f / 5) + "秒");
                        b.disabled = !0
                    } else
                        f = parseInt(y.rule[2], 16),
                        b.innerText = "予約",
                        b.disabled = !!D[f];
                else
                    y.joinfee ? (b.innerText = "参加登録",
                    b.disabled = !1) : y.premiumonly ? (b.innerText = "参加予約",
                    b.disabled = !1) : (b.innerText = "参加不可",
                    b.disabled = !0);
                Z.joincs1.innerText = Z.joincs2.innerText = b.innerText;
                Z.joincs1.disabled = Z.joincs2.disabled = b.disabled;
                pa || (pa = setTimeout(k, a < c - 6E4 || d < a || c < a && a < d - 3E4 ? 3E4 : 5E3));
                return 1
            },
            kc: d,
            lc: function(a) {
                Z.joincs0 && b(a)
            },
            panePrev: function() {
                c(-1)
            },
            paneNext: function() {
                c(1)
            },
            testplay: function() {
                A.da('<div class=A id="#testplay-64">' + na(64) + '<div class=desc>(４人打 東風 喰断アリ 赤アリ 速)</div></div><div class=A id="#testplay-0">' + na(0) + '<div class=desc>(４人打 東風 喰断アリ 赤アリ)</div></div><div class=A id="#testplay-16">' + na(16) + '<div class=desc>(３人打 東風 喰断アリ 赤アリ)</div></div><div class=A id="#testplay-1536">' + na(1536) + '<div class=desc>(４人打 東風 喰断アリ 赤アリ 祝儀)</div></div><div class=A id="#testplay-1552">' + na(1552) + '<div class=desc>(３人打 東風 喰断アリ 赤アリ 祝儀)</div></div><div class=A id="#testplay-2064">東天紅 三麻β<div class=desc>(３人打 東天紅)</div></div>', "font-size:80%;text-align:left;", 0)
            },
            "#testplay": function(a, b) {
                if (h()) {
                    var c = ~~b;
                    ob(!0, 3, 1);
                    Z.cancel.style.display = "";
                    Z.logout.style.display = "none";
                    W.L({
                        tag: "JOIN",
                        t: B + "," + c
                    })
                }
            },
            rule: function(a) {
                C["#rule0"]("#" + a.id)
            },
            "#rule0": function(b, c) {
                for (var g = 0; g < ta.length; ++g)
                    J[ta[g]] = ~~J.$a[g] + ":<div class=n2r>" + ~~J.Va[g] + "</div>";
                var h = []
                  , m = C[2]
                  , k = C[17]
                  , l = C[16]
                  , n = "";
                b && void 0 === c && (n += '<div class=A id="' + b + '-0">SELECT GAME</div>');
                for (var p = Cc.concat(~~I.swar ? Dc : []), g = 0; g < p.length; ++g) {
                    var x = !0
                      , w = p[g]
                      , y = w & 16 ? l : k;
                    if (!B)
                        switch (ma(w) + 4 * (0 != (w & 1536))) {
                        case 0:
                            x = 13 <= y[0] && 1800 <= y[2] ? !1 : !0;
                            break;
                        case 1:
                            x = 16 <= y[0] && 2E3 <= y[2] ? !1 : 9 <= y[0] || 60 <= m;
                            break;
                        case 2:
                            x = 13 <= y[0] && 1800 <= y[2] ? !0 : !1;
                            break;
                        case 3:
                            x = 16 <= y[0] && 2E3 <= y[2] ? m : !1;
                            break;
                        case 6:
                            x = 13 <= y[0] && 1800 <= y[2] ? m : !1
                        }
                    else if (1E4 > B && ma(w) + 4 * (0 != (w & 1536)))
                        continue;
                    x ? (h[w] = 1,
                    n && (n += '<div class="A nobr"id="' + b + "-" + w + '">' + E(w) + "</div>")) : n && "#rule3" == b && (n += '<div class="A nobr" id="' + b + "-" + w + '">' + na(w) + "</div>")
                }
                b && "#rule3" != b && n && !B && (9 <= k[0] || 60 <= m || (n += '<div class=A id="' + b + '-128">※四麻上級卓</div>'),
                9 <= l[0] || 60 <= m || (n += '<div class=A id="' + b + '-144">※三麻上級卓</div>'),
                13 <= k[0] && 1800 <= k[2] || (n += '<div class=A id="' + b + '-32">※四麻特上卓</div>'),
                13 <= l[0] && 1800 <= l[2] || (n += '<div class=A id="' + b + '-48">※三麻特上卓</div>'),
                13 <= k[0] && 1800 <= k[2] && m || (n += '<div class=A id="' + b + '-1056">※四麻雀荘戦</div>'),
                13 <= l[0] && 1800 <= l[2] && m || (n += '<div class=A id="' + b + '-1072">※三麻雀荘戦</div>'),
                16 <= k[0] && 2E3 <= k[2] && m || (n += '<div class=A id="' + b + '-160">※四麻鳳凰卓</div>'),
                16 <= l[0] && 2E3 <= l[2] && m || (n += '<div class=A id="' + b + '-176">※三麻鳳凰卓</div>'));
                b && void 0 === c && (n += '<div class=A id="' + b + '-showall">※喰断ナシON/OFF</div>');
                if (n)
                    A.da(n, "text-align:left;", 0);
                else if (b && "showall" == c)
                    Eb("swar", ~~!~~I.swar, 0);
                else {
                    m = a();
                    5 > m.length && (m = [1, 9]);
                    if (b) {
                        if (m[~~b.slice(-1)] == c)
                            return;
                        m[~~b.slice(-1)] = ~~c
                    }
                    for (g = 0; 5 > g; ++g)
                        if (Z["rule" + g] && Z["join" + g]) {
                            w = ~~m[g];
                            if (0 == (w & 2048) && ~w & 1) {
                                switch (w) {
                                case 128:
                                case 144:
                                    A.l("上級卓の入場条件(１級以上または有効期限60日以上)を満たしていません※七段R2000以上は入場できません");
                                    break;
                                case 32:
                                case 48:
                                    A.l("特上卓の入場条件(四段R1800以上を満たしていません");
                                    break;
                                case 160:
                                case 176:
                                    A.l("鳳凰卓の入場条件(七段R2000以上の有料会員)を満たしていません");
                                    break;
                                case 1056:
                                case 1072:
                                    A.l("雀荘戦の入場条件(四段R1800以上の有料会員)を満たしていません")
                                }
                                w = 0
                            }
                            3 == g && w && !h[w] ? (m[g] = w,
                            Z["join" + g].disabled = !0,
                            Z["rule" + g].innerHTML = na(w)) : (h[w] || (w = 0),
                            D[w] || (Z["join" + g].disabled = !w),
                            m[g] = w,
                            Z["rule" + g].innerHTML = E(w))
                        }
                    I.rule = m;
                    "#rule3" == b && d();
                    "#rule4" == b && f()
                }
            },
            join: function(b) {
                if (h()) {
                    var c;
                    if ("joincs0" != b.id && "joincs1" != b.id && "joincs2" != b.id) {
                        var d = a();
                        c = d[~~b.id.slice(-1)];
                        for (b = 0; 5 > b; ++b)
                            c == d[b] && Z["rule" + b] && (Z["rule" + b].disabled = Z["join" + b].disabled = !0)
                    } else if (y.Ca)
                        c = parseInt(y.rule[2], 16),
                        Z.joincs0.disabled = Z.joincs1.disabled = Z.joincs2.disabled = !0;
                    else {
                        if (y.joinfee) {
                            var f = I.uname;
                            if (!f || !f.match(/^ID([0-9A-F]{8})-[0-9A-Za-z]{8}$/)) {
                                A.l("参加費が有料の大会に参加するにはID登録が必要です。ログイン画面の「新規ID」からIDを取得してください");
                                return
                            }
                            A.l("大会への参加費として\n\n有効期限" + y.joinfee + "日分\n\nを支払います。よろしいですか？", 3, function() {
                                Ua("https://b.mjv.jp/csreg?lobby=" + B + "&uname=" + f, function(a) {
                                    a = Ra(a);
                                    H.ERR({
                                        code: a.res
                                    });
                                    1027 == a.res && (C[1] = a.expire,
                                    p(),
                                    C.Cb())
                                })
                            });
                            return
                        }
                        if (y.premiumonly) {
                            f = I.uname;
                            if (!f || !f.match(/^ID([0-9A-F]{8})-[0-9A-Za-z]{8}$/)) {
                                A.l("有料会員向けの大会に参加するにはID登録が必要です。ログイン画面の「新規ID」からIDを取得してください");
                                return
                            }
                            H.ERR({
                                code: 1020
                            });
                            return
                        }
                    }
                    ob(!0, 1);
                    Z.cancel.style.display = "";
                    Z.logout.style.display = "none";
                    W.L({
                        tag: "JOIN",
                        t: B + "," + c
                    });
                    D[c] = 1
                }
            },
            openurl: function() {
                A.l('牌譜/観戦URLを入力してください<br><input type=text size=20 value="" style="font-size:100%;" value=""/>', 3, function(a) {
                    a = a.getElementsByTagName("INPUT")[0];
                    u.Gc(a.value)
                })
            },
            cancel: function() {
                ob(!1, "rule", "join", 1);
                Z.cancel.style.display = "none";
                Z.logout.style.display = "";
                D = {};
                C["#rule0"]();
                W.L({
                    tag: "JOIN"
                })
            },
            logout: function() {
                ob(!0, 3, 1);
                v.ja(11)
            },
            purchase: function() {
                var a = I.uname;
                a && a.match(/^ID([0-9A-F]{8})-[0-9A-Za-z]{8}$/) ? jb && store ? C.l({
                    tag: "STORE"
                }) : r.open("https://tenhou.net/reg/?ID" + RegExp.$1, "_blank") : A.l("ログイン画面の「新規ID」からIDを取得してください")
            },
            hairi: function() {
                r.open("https://tenhou.net/2/", jb ? "_system" : "_blank")
            },
            help: function() {
                r.open("https://tenhou.net/man/", jb ? "_system" : "_blank")
            },
            chatInput: function() {
                A.l('CHAT:<input type=text size=15 style="font-size:100%;"/>', 3, function(a) {
                    a = a.getElementsByTagName("INPUT")[0];
                    (a = a.value) && W.L({
                        tag: "CHAT",
                        text: a
                    })
                })
            },
            Fc: function(b) {
                if (Z.hdr && !Z.joincs0) {
                    var c = Z.hdr.childNodes;
                    if (c && !(2 > c.length))
                        if (b && "join" == b.name) {
                            b = ~~a()[~~b.id.slice(-1)];
                            var d = ~~C[17][0]
                              , f = ~~C[16][0]
                              , g = "";
                            if (!(b & 3584)) {
                                var h = [0, 0, 0, 0];
                                switch (ma(b)) {
                                case 0:
                                    h[0] = 20;
                                    h[1] = 10;
                                    break;
                                case 1:
                                    h[0] = 40;
                                    h[1] = 10;
                                    break;
                                case 2:
                                    h[0] = 50;
                                    h[1] = 20;
                                    break;
                                case 3:
                                    h[0] = 60,
                                    h[1] = 30
                                }
                                b & 16 ? (h[0] += h[1],
                                h[1] = 0,
                                h[2] = oa[f]) : h[3] = oa[d];
                                b & 8 && (h[0] *= 1.5,
                                h[1] *= 1.5,
                                h[2] *= 1.5,
                                h[3] *= 1.5);
                                g += ga[b & 16 ? f : d] + z("[");
                                g = b & 16 ? g + (z("1位") + "+" + h[0] + "   " + z("2位") + "+" + h[1] + "   " + z("3位") + h[2]) : g + (z("1位") + "+" + h[0] + "   " + z("2位") + "+" + h[1] + "   " + z("3位") + "0   " + z("4位") + h[3]);
                                g += z("]") + " "
                            }
                            g += tb((0 != (b & 2048) ? "１局" : b & 8 ? "東南" : "東風") + (b & 3584 ? "打ち切り" : b & 16 ? "+3局サドンデス" : "+4局サドンデス"));
                            g += " " + tb(z("ウマ") + (0 != (b & 2048) ? "×" : 0 != (b & 1536) ? b & 16 ? "0-30" : "10-30" : b & 16 ? "0-20" : "10-20"));
                            g += " " + tb(z("1本場") + (0 != (b & 2048) ? "--" : 0 != (b & 1536) && ~b & 8 ? b & 16 ? "1000" : "1500" : b & 16 ? "200" : "300"));
                            g += " " + tb(z("明槓ドラ") + (b & 3584 ? "先" : "後"));
                            g += " " + tb(z("喰断") + (b & 4 ? "×" : "○"));
                            g += " " + tb(z("祝儀") + (~b & 512 ? "×" : b & 1024 ? "1枚5000点" : "1枚2000点"));
                            g += " " + tb(z("東西場") + (0 != (b & 1536) && ~b & 8 ? "○" : "×"));
                            g += " " + tb(z("和了止め") + "○");
                            g += " " + tb(z("聴牌止め") + "○");
                            0 != (b & 1536) && (g += " " + tb(z("段位変動") + "ナシ"));
                            c[1].innerHTML = g;
                            c[0].style.display = "none";
                            c[1].style.display = ""
                        } else
                            c[1].innerHTML = "",
                            c[0].style.display = "",
                            c[1].style.display = "none"
                }
            },
            Kc: function(b) {
                var c = a();
                c[3] = c[4] = b;
                I.rule = c
            }
        }
    }());
    C["#rule1"] = C["#rule2"] = C["#rule3"] = C["#rule4"] = C["#rule0"];
    Aa(C, function() {
        function a() {
            Z.uname.value = I.uname && 19 == I.uname.length && (~~I.hideid || I.gpid) ? "ID########-########" : I.uname || "NoName"
        }
        return {
            LOGIN: function(f, d) {
                var b = "";
                location.search.match(/^\?(L[1-9][0-9]{3})/) ? b = z("個室") + RegExp.$1 : location.search.match(/^\?(C[0-9]{8})/) && (b = z("大会") + RegExp.$1.substr(0, 5));
                d.style.border = "";
                var h = 3.683 * N[1] * 2.3
                  , c = 2.604 * N[1] * 2.3;
                d.innerHTML = "" + ('<div style="position:relative;"><img src="https://p.mjv.jp/3/img/bglogow' + Xa(4, ~~h) + Xa(4, ~~c) + '.png" width=' + ~~(h / t) + " height=" + ~~(c / t) + ' style="margin:0.5em 0;"/><span style="position:absolute;bottom:2em;">' + b + '</span></div><div id=pane0><table cellpadding=0 cellspacing=0 width=100%><tr><td><input name=uname size=22 style="margin:0;padding:0;color:#fff;background:none;text-align:center;border:solid 1px #444;width:100%;"/></td><td width=1><div class=select-wrapper><button name=sx></button></div></td><td width=1><button name=ok style="padding:0 1em;">OK</button></td></tr></table><button name=clearid>ID変更</button><button name=cfg>設定</button><div class=select-wrapper><button name=mvlb>ロビーの移動</button></div></div><div id=pane1><button name=ok style="width:100%;">お試しゲストログイン</button><button name=regid>新規ID登録</button><button name=idcont>IDで続きから</button><button name=cfg>設定</button><br></div>');
                zc(d);
                Z.pane0.style.display = Z.pane1.style.display = "none";
                Z["pane" + (I.uname ? 0 : 1)].style.display = "";
                C["#sx"]();
                a();
                fb && jb && za(Z.uname, {
                    focus: function() {
                        xb(1)
                    },
                    blur: function() {
                        xb()
                    }
                });
                "AUTOLOGIN" == f.tag || I.gpid ? (C.b.style.display = "none",
                C.ok()) : Ub.v.canvas.style.visibility = "hidden"
            },
            NINTEI: function(a, d) {
                dc().Bc = Bc(3E3);
                d.innerHTML = '<div style="font-family:cwTeX-Q-Kai-T,icons2,serif;font-size:400%;">認定</div><div style="text-align:left;margin:1em 0;display:inline-block;">' + decodeURIComponent(a.nintei).replace(/\n/g, "<br>") + '</div><button name=ok style="padding:0 2em;">OK</button>';
                zc(d)
            },
            clearid: function() {
                A.l("入力してあるIDをクリアしますがよろしいですか？IDを紛失しないようにコピーしてください。", 3, function() {
                    I.removeItem("uname");
                    a();
                    Z.pane0.style.display = "none";
                    Z.pane1.style.display = ""
                })
            },
            sx: function() {
                A.da('<div class=A id="#sx-M">男</div><div class=A id="#sx-F">女</div>', "", 0)
            },
            "#sx": function(a, d) {
                "F" == (a ? d : "F" == I.sx ? "F" : "") ? (Z.sx.innerHTML = "女",
                I.sx = "F") : (Z.sx.innerHTML = "男",
                I.removeItem("sx"))
            },
            cfg: function() {
                C.l({
                    tag: "CONFIG"
                })
            },
            mvlb: function() {
                A.da('<a class=A href="?L0000">ランキング戦<div class=desc>(段位戦、雀荘戦)</div></a><a class=A href="?C00112233" >イベント会場１<div class=desc>(公式イベントで使用します)</div></a><a class=A href="?C00223344" >イベント会場２</a><div class=A id="#sellb" >その他<div class=desc>(個室番号を指定してロビーを移動します)</div></div><a class=A href="https://tenhou.net/make_lobby.html" target=_blank>ロビーの新規作成<div class=desc>(天鳳サイトの個室作成ページを開きます)</div></a>', "font-size:80%;", 0)
            },
            "#sellb": function() {
                var a = "L0000";
                location.search.match(/^\?(L[1-9][0-9]{3}|C[0-9]{8})/) && (a = RegExp.$1);
                A.l('移動するロビー番号を入力してください。<br>例)L8141, C00112233<br>または 8141, 00112233<br><input type=text size=15 value="' + a + '" style="font-size:100%;"/><br>', 3, function(a) {
                    a = a.getElementsByTagName("INPUT")[0];
                    a = a.value;
                    a.match(/^L?(\d{4})$/) ? location.href = "?L" + RegExp.$1 : a.match(/^C?(\d{8})$/) && (location.href = "?C" + RegExp.$1)
                })
            },
            regid: function() {
                A.l('プレーヤ名を8文字以内で入力してください<br><input type=text size=22 style="font-size:100%;"/><br>', 3, function(a) {
                    a = a.getElementsByTagName("INPUT")[0];
                    var d = a.value;
                    if (d)
                        return Ua("https://b.mjv.jp/regid?q=1&uname=" + encodeURIComponent(d), function(a) {
                            a = Ra(a);
                            0 != a.res ? H.ERR({
                                code: a.res
                            }) : (d = decodeURIComponent(a.uname),
                            A.l(d + "<br><br>このプレーヤ名で新しいIDを作成しますか？", 3, function() {
                                Ua("https://b.mjv.jp/regid?uname=" + encodeURIComponent(d), function(a) {
                                    a = Ra(a);
                                    1012 != a.res ? H.ERR({
                                        code: a.res
                                    }) : (I.uname = Z.uname.value = a.id,
                                    A.l(ka[1012]),
                                    Z.pane0.style.display = "",
                                    Z.pane1.style.display = "none")
                                })
                            }))
                        }),
                        !0
                })
            },
            idcont: function() {
                A.l('プレーヤID(半角19文字)を入力してください<br><input type=text size=22 value="ID00000000-aabbccdd" style="font-size:100%;margin:0.25em"/><br><div id=info></div><small class=gray>※アプリ版以外で作成したIDも使用可能です。</small>', 3, function(f) {
                    f = f.getElementsByTagName("INPUT")[0];
                    var d = f.value;
                    f = ab.getElementById("info");
                    if ("ID00000000" != d.substr(0, 10) && d.match(/^ID[0-9A-F]{8}\-[0-9a-zA-Z]{8}$/))
                        f.innerHTML = "";
                    else
                        return f.innerHTML = '<span style="font-size:75%;color:#F00">IDが正しくありません</span>',
                        !1;
                    I.uname = d;
                    a();
                    Z.pane0.style.display = "";
                    Z.pane1.style.display = "none";
                    return !0
                })
            }
        }
    }());
    C.AUTOLOGIN = C.LOGIN;
    Aa(C, {
        SPLASH: function(a, f) {
            for (var d = r.tenhouEventInfo, b = 4 > d.length ? 2 : 5, h = .5 > Math.random() ? 0 : 2, c = '<table cellpadding=0 cellspacing=0 align=center width=100% style="font-size:0;"><tr>', g = 0; g < b; ++g) {
                var n = d.splice(Math.floor(Math.random() * d.length), 1)[0]
                  , p = g != h && 5 == b ? 1 : 2
                  , c = c + ("<td rowspan=" + p + " colspan=" + p + " width=" + 25 * p + '% ><a href="https://tenhou.net' + n.href + '" target=_blank><img src="https://tenhou.net' + (n.img ? n.img : n.href + "title.jpg") + '" border=0 style="width:100%;"/></a></td>');
                2 == g && (c += "</tr><tr>");
                d.length < b - g - 1 && d.push(n)
            }
            c += '</tr></table><div style="padding:0.75em 0;"><small>';
            r.trainingInfo && (c += r.trainingInfo + "<br>");
            f.innerHTML = c + '</small></div><button name=ok style="width:8em;">OK</button>';
            zc(f)
        }
    });
    Aa(C, function() {
        var a;
        return {
            STORE: function(f, d) {
                a = -1;
                d.innerHTML = '<div><br><br>商品を選択して「購入」ボタンを押してください。<br>金額は通貨によっては変動する場合があります。<br><br><div class=select-wrapper><button name=iap>SELECT PRODUCT</button></div><br><br><button name=storePurchase style="width:8em;">購入</button><br></div><br><br><hr><button name=exit style="width:6em;">CLOSE</button>';
                zc(d)
            },
            storePurchase: function() {
                if (-1 != a) {
                    var f = I.uname;
                    f.match(/^ID([0-9A-F]{8})-[0-9A-Za-z]{8}$/) && (f = RegExp.$1,
                    store.order(a).then(function() {
                        ob(!0, 2)
                    }).error(function(a) {
                        ob(!1, 2);
                        A.l("STORE ERROR " + a.code + ": " + a.message)
                    }))
                }
            },
            iap: function() {
                var a = "", d;
                for (d in store.products) {
                    var b = store.products[d];
                    b.valid && (a += '<div class=A id="#iap-' + d + '">' + tb(b.title) + "<br>" + b.price + "</div>")
                }
                A.da(a, "font-size:75%;", 0)
            },
            "#iap": function(f, d) {
                var b = store.products[~~d];
                a = b.id;
                Z.iap.innerHTML = b.title + " " + b.price
            }
        }
    }());
    jb && xa(ab, "deviceready", function() {
        if (1.3 > (r.storeVersion || 0)) {
            var a = "net.tenhou.catalog20170119.";
            store.register({
                id: a + "ex30",
                type: store.CONSUMABLE
            });
            store.register({
                id: a + "ex60",
                type: store.CONSUMABLE
            });
            store.register({
                id: a + "ex120",
                type: store.CONSUMABLE
            });
            store.register({
                id: a + "ex180",
                type: store.CONSUMABLE
            });
            store.register({
                id: a + "ex300",
                type: store.CONSUMABLE
            })
        } else
            a = "net.tenhou.catalog20170211.",
            store.register({
                id: a + "ex30",
                type: store.NON_RENEWING_SUBSCRIPTION
            }),
            store.register({
                id: a + "ex60",
                type: store.NON_RENEWING_SUBSCRIPTION
            }),
            store.register({
                id: a + "ex120",
                type: store.NON_RENEWING_SUBSCRIPTION
            }),
            store.register({
                id: a + "ex180",
                type: store.NON_RENEWING_SUBSCRIPTION
            }),
            store.register({
                id: a + "ex300",
                type: store.NON_RENEWING_SUBSCRIPTION
            }),
            store.register({
                id: a + "ex600",
                type: store.NON_RENEWING_SUBSCRIPTION
            });
        store.when("product").approved(function(a) {
            I.uname.match(/^ID([0-9A-F]{8})-[0-9A-Za-z]{8}$/) ? (store.validator = "https://tenhou.net/reg/via_cordova.cgi?id=" + RegExp.$1,
            a.verify()) : a.finish()
        });
        store.when("product").verified(function(a) {
            a.finish()
        });
        store.when("product").finished(function() {
            ob(!1, 2)
        });
        store.when("product").cancelled(function() {
            ob(!1, 2)
        });
        store.error(function(a) {
            "6777001" == a.code || "6777002" == a.code ? store = void 0 : qb("------ error", JSON.stringify(a));
            ob(!1, 2)
        });
        store.ready(function() {});
        store.refresh()
    });
    Aa(C, function() {
        function a(a) {
            return a.replace(/\s+$/, "")
        }
        function f(a) {
            return Cb(a).replace(/(\d)([mpsz])(?![mpsz])/g, function(a, b, c) {
                a = ("m" == c ? 10 : "p" == c ? 20 : "s" == c ? 30 : 40) + ~~b;
                10 == a && (a = 51);
                20 == a && (a = 52);
                30 == a && (a = 53);
                40 == a && (a = 69);
                b = ~~(.6 * N[0]);
                return '<img src="https://p.mjv.jp/6/img/edit' + Xa(3, b) + 0 + Xa(2, a) + '.png" style="background:' + (69 == a ? "#444" : "#EEE") + ';vertical-align:middle;" width="' + b / t + 'px" />'
            })
        }
        function d(a) {
            var b = a >> 2;
            return (27 > b && 16 == a % 36 ? "0" : b % 9 + 1) + "mpsz".substr(b / 9, 1)
        }
        function b(a) {
            Z.trtitle.innerHTML = k.title || "天鳳トレーニング";
            Z.trprogress.innerHTML = '<span class=gray style="float:right;font-weight:bold;">' + (a ? "A" : "Q") + Xa(2, l ? l[0] + 1 : 1) + "/" + Xa(2, l ? l.container.length : 1) + "</span>";
            Z.trmain.innerHTML = f((k[a ? "explanation" : "question"] || "").replace(/\n/g, "<br>"));
            Z.trmain.style.height = (a ? 14 : 8) + "em";
            Z.ok.disabled = !1;
            switch (a) {
            case 0:
                E = !1;
                C.b.classList.remove("hide");
                Z.ok.innerHTML = "OK";
                W.pb();
                H.fa();
                H.connected = 15;
                a = C[17] || "";
                W.qa({
                    tag: "UN",
                    n0: C[0] || "自家",
                    n1: "下家",
                    n2: "対面",
                    n3: "上家",
                    dan: ~~a[0] + ",0,0,0",
                    rate: parseFloat(a[2]) + ",0,0,0",
                    sx: ("F" == I.sx ? "F" : "M") + ",M,M,M"
                });
                H.ka = 0;
                Ub.S();
                var b = [q(Db(k.hai0)), q(Db(k.hai1)), q(Db(k.hai2)), q(Db(k.hai3))];
                a = [];
                k.packet && Array.prototype.push.apply(a, JSON.parse(JSON.stringify(k.packet)));
                2 == b[0].length % 3 && a.push({
                    tag: "T" + b[0].pop()
                });
                var c = (k.seed ? k.seed : "0,0,0,0,0,").split(",");
                k.kyoku && (c[0] = k.kyoku);
                k.honba && (c[1] = k.honba);
                k.nagare && (c[2] = k.nagare);
                k.dora && (c[5] = c[5] = Db(k.dora));
                W.qa({
                    tag: "TRAININGINIT",
                    seed: "" + c,
                    ten: k.ten,
                    oya: ~~k.oya,
                    hai0: "" + Ta(b[0]),
                    m0: k.m0,
                    kawa0: Db(k.kawa0),
                    hai1: "" + Ta(b[1]),
                    m1: k.m1,
                    kawa1: Db(k.kawa1),
                    hai2: "" + Ta(b[2]),
                    m2: k.m2,
                    kawa2: Db(k.kawa2),
                    hai3: "" + Ta(b[3]),
                    m3: k.m3,
                    kawa3: Db(k.kawa3)
                });
                for (b = 0; b < a.length; ++b)
                    W.qa(yb.mb(a[b]));
                break;
            case 1:
                Z.ok.innerHTML = "NEXT"
            }
            C.Jb(1)
        }
        function h(a) {
            m ? a() : Ua("https://tenhou.net/3/tr/auth.cgi?" + I.uname, function(b) {
                m = b;
                a()
            }, function() {
                H.ERR({
                    code: 1200
                })
            })
        }
        function c(a) {
            k = l = void 0;
            x = a.match(/\.json$/) ? a : "free-sample.json";
            Ua("https://tenhou.net/3/tr/" + x + "?" + m, function(b) {
                try {
                    k = JSON.parse(b)
                } catch (ca) {
                    alert("JSONに不具合があるため読み込めませんでした\n\n" + ca);
                    return
                }
                if ("membersonly" == k.error || "subscribe" == k.error) {
                    b = I.uname;
                    if (!b || !b.match(/^ID[0-9A-F]{8}-[0-9A-Za-z]{8}$/))
                        return H.ERR({
                            code: 1200
                        });
                    "membersonly" == k.error ? A.l("この問題は有料会員に公開されています。<br><br>会費のお支払いをお願いいたします。", 3, C.purchase, C.exit) : A.da('<div style="margin:0.5em;">購読期間と料金を選択してください。</div><div class=A id="#trs-1">1日間 - 有効期限7日分</div><div class=A id="#trs-7">7日間 - 有効期限8日分</div><div class=A id="#trs-21">21日間 - 有効期限9日分</div>', "", 0)
                } else if (k.container)
                    l = k,
                    C["#trjump"](0, 0);
                else if (u.training) {
                    if (!Z.json)
                        if (60 > C[2])
                            alert("編集機能を利用するには有効期限の残り日数が60日以上必要です。");
                        else {
                            Kb.style.height = Jb = 0;
                            db.style.overflow = "";
                            for (var c = '<br><hr><br><table class=trtab width=100%><tr><td class=bth width=1>表題</td><td width=100%><input name=title style="width:100%;"></td></tr><tr><td class=bth width=1>問題</td><td width=100%><textarea name=question maxlength=1024 rows=10 style="width:100%;"></textarea></td></tr><tr><td class=bth width=1>回答</td><td width=100%><input name=answer style="width:100%;"><br>' + z("カンマ区切 例)8m,8p,r2p(リーチ2p)") + '</td></tr><tr><td class=bth width=1>解説</td><td width=100%><textarea name=explanation maxlength=4096 rows=10 style="width:100%;"></textarea></td></tr><tr><td class=bth width=1>補足</td><td width=100%><textarea name=comment maxlength=4096 rows=10 style="width:100%;"></textarea></td></tr></table><hr><table class=trtab width=100%><tr><td class=bth width=1>局</td><td><input name=kyoku><br>' + z("0:東1局 ... 7:南4局") + "</td></tr><tr><td class=bth width=1>本場</td><td><input name=honba></td></tr><tr><td class=bth width=1>供託</td><td><input name=nagare></td></tr><tr><td class=bth width=1>ドラ</td><td><input name=dora></td></tr><tr><td class=bth width=1>親</td><td><input name=oya><br>" + z("0:自家 1:下家 2:対面 3:上家") + "</td></tr></table>", d = ["自家", "下家", "対面", "上家"], f = 0; 4 > f; ++f)
                                c += "<br><hr><br><span class=bth>■" + d[f] + "</span><br><table class=trtab width=100%><tr><td class=bth width=1>点数</td><td width=100%><input name=ten" + f + ' style="width:100%;"></td></tr>',
                                f || (c += "<tr><td class=bth width=1>手牌</td><td width=100%><input name=hai" + f + ' style="width:100%;"></td></tr>'),
                                c += "<tr><td class=bth width=1>副露</td><td width=100%><input name=m" + f + ' style="width:100%;"></td></tr><tr><td class=bth width=1>河</td><td width=100%><input name=kawa' + f + ' style="width:100%;"></td></tr></table>';
                            c = c + "<br><hr><br><div id=verify></div>" + ('<br><hr><br><span class=bth>■JSON</span><br><textarea name=json maxlength=8192 rows=40 style="width:100%;font-size:75%;">' + JSON.stringify(k, null, "\t") + "</textarea>");
                            Mb.innerHTML = c;
                            c = Mb.getElementsByTagName("TEXTAREA");
                            for (d = 0; d < c.length; ++d)
                                xa(c[d], "change", "json" == c[d].name ? p : n);
                            c = Mb.getElementsByTagName("INPUT");
                            for (d = 0; d < c.length; ++d)
                                xa(c[d], "change", n);
                            zc(Mb, Z)
                        }
                    123 == a.charCodeAt(0) && (b = k,
                    k = JSON.parse(a),
                    k.title = k.title || b.title,
                    k.question = k.question || b.question,
                    k.answer = k.answer || b.answer,
                    k.explanation = k.explanation || b.explanation,
                    k.comment += b.comment,
                    b = JSON.stringify(k));
                    Z.json.value = b;
                    p()
                } else
                    C["#trjump"](0, 0)
            }, function() {
                alert("問題ファイルを読み込めませんでした")
            })
        }
        function g() {
            var a;
            a = "■合計得点<br>" + ("'" + Z.ten0.value + "' + '" + Z.ten1.value + "' + '" + Z.ten2.value + "' + '" + Z.ten3.value + "' = " + (~~Z.ten0.value + ~~Z.ten1.value + ~~Z.ten2.value + ~~Z.ten3.value) + "<br><br>");
            a += "■使用枚数<br>";
            for (var b = Db(Z.hai0.value), b = b + ("," + Db(Z.dora.value)), c = 0; 4 > c; ++c) {
                var b = b + ("," + Db(Z["kawa" + c].value))
                  , d = Z["m" + c].value;
                if (d)
                    for (var d = d.split(","), g = 0; g < d.length; ++g) {
                        var h = {
                            m: d[g]
                        };
                        mc(h);
                        var m = h[0];
                        if (1 == m.length)
                            switch (h[2]) {
                            case 4:
                            case 5:
                            case 2:
                                h = m[0] >> 2,
                                m = [h + 0, h + 1, h + 2, h + 3]
                            }
                        m && (b += "," + m)
                    }
            }
            c = [];
            for (g = 0; 38 > g; ++g)
                c[g] = 0;
            b = b.split(",");
            for (g = 0; g < b.length; ++g)
                h = b[g],
                "" != h && 255 != h && 254 != h && (136 == h ? c[30]++ : 16 == h ? c[0]++ : 52 == h ? c[1]++ : 88 == h ? c[2]++ : c[10 * ~~(h / 4 / 9) + ~~(h / 4) % 9 + 1]++);
            c[30] = "-";
            for (g = 0; 38 > g; ++g)
                a += f(30 == g ? "0z" : Ab(36 * ~~(g / 10) + (g % 10 ? g % 10 * 4 - 1 : 16))) + c[g] + " ",
                9 == g % 10 && (a += "<br>");
            Z.verify.innerHTML = a
        }
        function n() {
            if (Z.json) {
                var c = k.packet;
                k = {};
                k.title = a(Z.title.value);
                k.question = a(Z.question.value);
                k.answer = a(Z.answer.value);
                k.explanation = a(Z.explanation.value);
                k.comment = a(Z.comment.value);
                "" == k.comment && delete k.comment;
                var d = "0 0 0 0 0 ".split(" ");
                "0" != Z.kyoku.value && (d[0] = Z.kyoku.value);
                "0" != Z.honba.value && (d[1] = Z.honba.value);
                "0" != Z.nagare.value && (d[2] = Z.nagare.value);
                "" != Z.dora.value && (d[5] = Db(Z.dora.value));
                k.seed = "" + d;
                k.oya = Z.oya.value;
                k.ten = [Z.ten0.value, Z.ten1.value, Z.ten2.value, Z.ten3.value];
                Z.hai0.value && (k.hai0 = Bb(Db(Z.hai0.value).split(",")));
                for (d = 0; 4 > d; ++d)
                    "" != k.ten[d] && (k.ten[d] = ~~(k.ten[d] / 100)),
                    Z["m" + d].value && (k["m" + d] = Z["m" + d].value),
                    Z["kawa" + d].value && (k["kawa" + d] = Bb(Db(Z["kawa" + d].value).split(",")));
                k.ten = "" + k.ten;
                c && (k.packet = c);
                Z.json.value = JSON.stringify(k, null, "\t").replace(/"packet": \[[^\]]*\]/, '"packet": ' + JSON.stringify(c));
                b(0);
                g()
            }
        }
        function p() {
            if (Z.json) {
                try {
                    k = JSON.parse(Z.json.value)
                } catch (y) {
                    alert("JSONに不具合があるため読み込めませんでした\n\n" + y);
                    return
                }
                var a = (k.seed ? k.seed : "0,0,0,0,0,").split(",");
                Z.title.value = k.title || "";
                Z.question.value = k.question || "";
                Z.answer.value = k.answer || "";
                Z.explanation.value = k.explanation || k.description || "";
                Z.comment.value = k.comment || "";
                Z.kyoku.value = k.kyoku || a[0];
                Z.honba.value = k.honba || a[1];
                Z.nagare.value = k.nagare || a[2];
                Z.dora.value = k.dora || Bb(a.slice(5));
                Z.oya.value = k.oya || 0;
                for (var a = (k.ten ? k.ten : ",,,").split(","), c = 0; 4 > c; ++c)
                    Z["ten" + c].value = "" != a[c] ? 100 * a[c] : "",
                    c || (Z["hai" + c].value = k["hai" + c] || ""),
                    Z["m" + c].value = k["m" + c] || "",
                    Z["kawa" + c].value = k["kawa" + c] || "";
                b(0);
                g()
            }
        }
        var l, k, m, x = "", E = !1;
        return {
            TRAINING: function(a, b) {
                H.a = 4;
                W.Y();
                b.innerHTML = '<div style="width:100%;"><table width=100% cellpadding=0 cellspacing=0><tr><td align=left class=gray id=trtitle></td><td id=trprogress align=right></td></tr></table><hr><div style="position:relative;"><div id=trmain class=vscl style="line-height:1.2em;height:8em;overflow-y:scroll;text-align:left;"><br><br>' + z("<center>左下のメニューからトレーニングを終了して<br><br>もう一度開いてください。</center>") + '</div><div class=sblink style="visibility:hidden;">▼</div></div><hr><table width=100% cellpadding=0 cellspacing=0><tr><td align=left width=1><button name=trmenu style="font-family:cwTeX-Q-Kai-T,icons2,serif;"></button></td><td class=ra0 style="border:1px solid #444;" width=100%><span class="bt3 ra0" style="color:#444;font-size:150%;">卓表示<span></td><td align=right width=1><button name=ok style="width:6em;" disabled>OK</button></td></tr></table></div>';
                zc(b);
                C.b.classList.add("flipinhs");
                h(function() {
                    c(a.file)
                })
            },
            Jb: function(a) {
                ob(!1, "ok");
                C.b.style.display = a ? "" : "none";
                v.b.style.display = a ? "none" : "";
                v[1572868].innerHTML = " 問題"
            },
            Jc: function(a) {
                a && "NEXT" != Z.ok.innerHTML && !$b.v.canvas.style.display ? (C.Jb(0),
                2 == V[32].length % 3 && kc({
                    tag: "T"
                }),
                Z.ok.innerHTML = "CLOSE") : (C.b.classList.add("hide"),
                xa(C.b, "animationend", function(a) {
                    this.removeEventListener(a.type, arguments.callee, !1);
                    l && (l[0] = (l[0] + 1) % l.container.length,
                    k = l.container[l[0]]);
                    b(0)
                }))
            },
            Xb: function(a) {
                console.log("sendTrainingAns", a);
                var c;
                switch (a.tag) {
                case "REACH":
                    E = !0;
                    W.qa({
                        tag: "REACH",
                        who: 0,
                        step: 1
                    });
                    return;
                case "D":
                    c = (E ? "r" : "") + d(a.p);
                    break;
                case "N":
                    c = "N",
                    a.type && (c += "-" + a.type),
                    a.hai0 && (c += "-" + a.hai0),
                    a.hai1 && (c += "-" + a.hai1),
                    a.hai2 && (c += "-" + a.hai2)
                }
                if (c) {
                    a = k.answer.split(",");
                    for (var f = 0; f < a.length && a[f] != c; ++f)
                        ;
                    f < a.length && (c = "")
                }
                setTimeout(function() {
                    if (c)
                        b(1);
                    else {
                        jc(24, 0, 0);
                        var a = nb("DIV", Tb, "flipinqs tsv", {
                            innerHTML: "○"
                        }, {
                            position: "absolute",
                            left: "50%",
                            top: "50%",
                            fontSize: "1600%",
                            fontWeight: "bold",
                            pointerEvents: "none",
                            marginTop: "-0.5em",
                            marginLeft: "-0.5em"
                        });
                        setTimeout(function() {
                            a.classList.add("hide");
                            xa(a, "animationend", function() {
                                a.parentNode.removeChild(a);
                                b(1)
                            })
                        }, 1E3)
                    }
                }, 1E3)
            },
            trmenu: function() {
                A.da('<div class=A id="#trmenu-0">他の問題に移動</div><div class=A id="#trmenu-1">トレーニング終了</div>', "", 0)
            },
            "#trmenu": function(a, b) {
                if ("1" == b)
                    u.training ? history.back() : C.exit();
                else {
                    var c = "";
                    if (l)
                        for (var d in l.container)
                            c += '<div class=A id="#trjump-' + d + '">Q' + Xa(2, ~~d + 1) + "</div>";
                    else
                        k.title && (c += '<div class=A id="#trjump-0">' + k.title + "</div>");
                    A.da(c, "text-align:left;", 0)
                }
            },
            "#trjump": function(a, c) {
                if (l) {
                    var d = ~~c;
                    k = l.container[d];
                    l[0] = d
                }
                b(0)
            },
            "#trs": function(a, b) {
                Ua("https://tenhou.net/3/tr/subscribe.cgi?file=" + x + "&auth=" + m + "&type=" + b, function(a) {
                    a = JSON.parse(a);
                    if ("insufficient" == a.error)
                        return H.ERR({
                            code: 1020
                        });
                    "ok" == a.error && c(x)
                })
            },
            dc: function(a, b) {
                if (b) {
                    var c = {}
                      , d = b.subscribing;
                    if (d)
                        for (var f = 0; f < d.length; ++f)
                            c[d[f].file] = d[f].expire;
                    a.innerHTML = "";
                    for (var g = {
                        free: '<span style="color:#088;font-weight:bold;">【無料】</span>',
                        member: '<span style="color:#088;font-weight:bold;">【会員無料】</span>',
                        subscribing: '<span style="color:#880;font-weight:bold;">【購読中】</span>'
                    }, d = b.all, f = 0; f < d.length; ++f)
                        d[f].Rb = 1E3 * (d[f].type || "undefined").length + f;
                    d.sort(function(a, b) {
                        return a.Rb - b.Rb
                    });
                    for (f = 0; f < d.length; ++f) {
                        var h = d[f]
                          , m = h.file
                          , k = c[m]
                          , m = "https://tenhou.net/0/?training=" + m
                          , l = '<div style="position:absolute;width:100%;height:100%;padding:0.2em 0.5em;pointer-events:none;">'
                          , l = l + ('<div class=nobr style="overflow:hidden;text-overflow:ellipsis;">' + (g[k ? "subscribing" : h.type] || "") + " ");
                        h.tip && (l += '<span style="color:#F00;font-weight:bold;font-size:75%;">' + h.tip + "</span> ");
                        l += h.title + "</div>";
                        l += '<div class=nobr style="color:#CCC;overflow:hidden;text-overflow:ellipsis;font-size:75%;">';
                        l += '<span style="color:#000;background-color:#666;">レベル:' + (h.level || "初中") + "</span> ";
                        l += "問題数:" + h.n + " ";
                        h.type && (l += "毎月２～３回更新 ");
                        k && (l += "購読終了:" + k + " ");
                        l += "</div>";
                        l += '<div class=nobr style="color:#666;overflow:hidden;text-overflow:ellipsis;">' + (h.memo || "") + "</div>";
                        l += "</div>";
                        l += '<a href="' + m + '" class=bt3 target=_blank></a>';
                        nb("DIV", a, "", {
                            innerHTML: l
                        }, {
                            height: "3.4em",
                            position: "relative",
                            textAlign: "left"
                        }).childNodes[1].onclick = C.trOpen
                    }
                    nb("DIV", a, "gray", {
                        innerHTML: "●「長押し」または「右クリック」から別タブで開く/URLのコピーなどが行えます"
                    }, {
                        fontSize: "75%",
                        align: "left",
                        padding: "1em 0 6em 0"
                    })
                } else
                    a.innerHTML = z("<br>Loading ..."),
                    c = (c = I.uname) && c.match(/^ID([0-9A-F]{8})-[0-9A-Za-z]{8}$/) ? RegExp.$1 : "00000000",
                    Ua("https://tenhou.net/3/tr/free-index.json?" + c, function(b) {
                        try {
                            b = JSON.parse(b)
                        } catch (Fb) {
                            return
                        }
                        C.dc(a, b)
                    })
            },
            trOpen: function(a) {
                if (!(a.shiftKey || a.altKey || a.ctrlKey || a.metaKey)) {
                    var b = I.uname;
                    if (!b || !b.match(/^ID[0-9A-F]{8}-[0-9A-Za-z]{8}$/))
                        return H.ERR({
                            code: 1200
                        }),
                        !1;
                    a = a.target;
                    a = a.href.split(/\?training=/);
                    if (1 != a.length)
                        return C.l({
                            tag: "TRAINING",
                            file: a[1]
                        }),
                        !1
                }
            }
        }
    }());
    var Zb = nb("DIV", Tb, "nosel ts0", {
        innerHTML: "フリテン"
    }, {
        position: "absolute",
        fontSize: "60%",
        pointerEvents: "none",
        display: "none"
    })
      , V = function() {
        var a = 0;
        return {
            pa: function() {
                for (var a = 0; 4 > a; ++a)
                    V[32 | a] = [],
                    V[48 | a] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    V[16 | a] = [],
                    delete V[64 | a]
            },
            Hc: function(a) {
                for (var d = [], b = 0; b < V[32 | a].length; ++b)
                    d.push(b);
                Ca(d, V[32 | a]);
                for (b = 0; b < V[32 | a].length; ++b)
                    if (d[b] != b) {
                        var f = R[1024 | a << 8 | d[b]]
                          , c = R[1024 | a << 8 | b];
                        Wb.O(0, c, 0);
                        c.Da(!0, a && !v.o[1277960] ? 136 : V[32 | a][d[b]]);
                        f = Wb.O(0, f.c + c.i.offsetX, f.h + c.i.offsetY, c.c + c.i.offsetX, c.h + c.i.offsetY, .04, c.i, .5, c, 1);
                        a || fc(4, 0, f / 1E3)
                    }
                Ba(V[32 | a])
            },
            Yb: function(a) {
                v.X(256);
                ac.Y();
                if (1 == H.a || !v.o[1277960]) {
                    var d = 0;
                    a & 2 && (d = Math.max(d, V[33].length));
                    a & 4 && (d = Math.max(d, V[34].length));
                    a & 8 && (d = Math.max(d, V[35].length));
                    for (var d = 30 * d, b = 0; b < d; b += 30)
                        jc(4, 0, b / 1E3);
                    var f = 0
                      , b = 0;
                    dc()[Za++] = function(c) {
                        for (b += c; f < b && f < d; f += 30)
                            for (c = 1; 4 > c; ++c)
                                if (!(~a & 1 << c)) {
                                    var g = ~~(f / 30)
                                      , h = R[1024 | c << 8 | g];
                                    h.u && (g = V[32 | c][g],
                                    Q.za(),
                                    h.ga(0),
                                    h.w = c,
                                    h.i = M[c << 8 | K.Wa[g]],
                                    h.ga(1),
                                    Q.Aa())
                                }
                        return f < d
                    }
                }
            },
            Ib: function(f) {
                Q.za();
                for (var d = 0, b = V[32 | f], h = 0; 14 > h; ++h) {
                    var c = R[1024 | f << 8 | h];
                    if (c.u) {
                        var g = R[1024 | f << 8 | d];
                        g.Da(!0, f && !v.o[1277960] ? 136 : b[d]);
                        g.c = c.c;
                        g.h = c.h;
                        g.la(-1025, c.$ & 1024, !1);
                        g.ga(1);
                        ++d;
                        a |= 1 << f
                    } else
                        d < b.length && b.splice(d, 1)
                }
                for (; 14 > d; ++d)
                    c = R[1024 | f << 8 | d],
                    c.u && c.ga(0);
                Q.Aa()
            },
            lb: function(f) {
                if ((f || v.o[1183750]) && (!f || v.o[1277960])) {
                    Q.za();
                    for (var d = V[32 | f], b = [], h = [], c = [], g = -1, n = 0; n < d.length; ++n) {
                        var p = R[1024 | f << 8 | n];
                        p.u && (c.push({
                            rb: n,
                            $: p.$,
                            c: p.c,
                            h: p.h
                        }),
                        h.push(d[n]),
                        0 == f && p == ac.Cc() && (g = b.length),
                        b.push(b.length))
                    }
                    Ca(b, h);
                    for (n = 0; n < b.length; ++n)
                        if (d[c[n].rb] = h[b[n]],
                        p = R[1024 | f << 8 | c[b[n]].rb],
                        b[n] == n) {
                            if (p.c != p.I || p.h != p.J)
                                a |= 1 << f
                        } else {
                            var l = R[1024 | f << 8 | c[n].rb];
                            l.Da(!0, f && !v.o[1277960] ? 136 : h[b[n]]);
                            p = c[b[n]];
                            l.c = p.c;
                            l.h = p.h;
                            l.la(-1042, p.$ & 1041, !1);
                            l.ga(1);
                            a |= 1 << f
                        }
                    Q.Aa();
                    -1 != g && ac.K(R[1024 | f << 8 | c[b[g]].rb])
                }
            },
            kb: function() {
                for (var f = 0; 4 > f; ++f)
                    if (!(~a & 1 << f)) {
                        for (var d = [], b = 0, h = 0, c = 0; 14 > c; ++c) {
                            var g = R[1024 | f << 8 | c];
                            if (g.u) {
                                var n = g.c - g.I
                                  , p = g.h - g.J;
                                if (0 != n || 0 != p)
                                    d.length && b != n && h != p && (R.Pa(0, 200, d),
                                    d = []),
                                    b = n,
                                    h = p,
                                    d.push(g)
                            }
                        }
                        d.length && R.Pa(0, 200, d)
                    }
                a = 0
            }
        }
    }();
    V.pa();
    function kc(a) {
        if (1 == H.a || 4 == H.a)
            if (!C.b || C.b.style.display) {
                var f = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
                if (a)
                    if ("REACH" == a.tag)
                        for (var d = wb.Ac(V[48]), b = 0; b < V[32].length; ++b) {
                            var h = d[~~(V[32][b] / 4)];
                            f[b] |= h && h.length ? 1 : 16
                        }
                    else if ("T" == a.tag && V[64])
                        for (b = V[32].length - 1,
                        f[b] |= 1,
                        --b; 0 <= b; --b)
                            f[b] |= 16;
                    else if ("N" != a.tag || 3 != a[2] && 1 != a[2])
                        for (b = 0; 14 > b; ++b)
                            f[b] |= 1;
                    else
                        for (d = {},
                        1 == (a[0][2] >> 2) - (a[0][1] >> 2) ? (0 < (a[0][1] >> 2) % 9 && (d[(a[0][1] >> 2) - 1] = 1),
                        8 > (a[0][2] >> 2) % 9 && (d[(a[0][2] >> 2) + 1] = 1)) : d[a[0][0] >> 2] = 1,
                        b = 0; b < V[32].length; ++b)
                            f[b] |= d[V[32][b] >> 2] ? 16 : 1;
                else
                    ac.Y(),
                    v.X(256);
                Q.za();
                for (b = 0; 14 > b; ++b)
                    S.Ta(b, -18, f[b]);
                Q.Aa();
                a && ac.l(0, void 0, "T" == a.tag)
            }
    }
    ;r.requestAnimationFrame = r.requestAnimationFrame || r.webkitRequestAnimationFrame || r.mozRequestAnimationFrame || r.oRequestAnimationFrame || r.msRequestAnimationFrame || function(a) {
        setTimeout(a, 1E3 / 60)
    }
    ;
    var dc = function() {
        function a() {}
        var f = {}, d, b = 0, h = 0, c = Date.now(), g = requestAnimationFrame;
        setInterval(function() {
            var f = Date.now();
            b && h && b == h && requestAnimationFrame == g && (requestAnimationFrame = a,
            d(b + f - c),
            requestAnimationFrame = g);
            h = b;
            c = f;
            vc.Ic(f)
        }, 250);
        requestAnimationFrame(function(a) {
            d = a ? function(a) {
                var c = 0, g = 1 >= b ? 0 : a - b, h;
                for (h in f)
                    f[h](g) ? ++c : delete f[h];
                if (!c)
                    for (h in f)
                        ++c;
                c ? (b = a,
                requestAnimationFrame(d)) : b = 0
            }
            : window.performance && window.performance.now ? function() {
                var a = performance.now(), c = 0, g = 1 >= b ? 0 : a - b, h;
                for (h in f)
                    f[h](g) ? ++c : delete f[h];
                if (!c)
                    for (h in f)
                        ++c;
                c ? (b = a,
                requestAnimationFrame(d)) : b = 0
            }
            : function() {
                var a = Date.now(), c = 0, g = 1 >= b ? 0 : a - b, h;
                for (h in f)
                    f[h](g) ? ++c : delete f[h];
                if (!c)
                    for (h in f)
                        ++c;
                c ? (b = a,
                requestAnimationFrame(d)) : b = 0
            }
            ;
            requestAnimationFrame(d)
        });
        return function() {
            !b && d && (requestAnimationFrame(d),
            b = 1);
            return f
        }
    }();
    function ec(a, f) {
        if (0 < f)
            return dc()[Za++] = function(d) {
                return 0 < (f -= d) ? !0 : (a(),
                !1)
            }
            ,
            Za - 1;
        a()
    }
    function Bc(a) {
        var f = C.b.style
          , d = f.opacity = 0;
        return function(b) {
            d += b;
            f.opacity = Math.min(1, d / a);
            if (d < a)
                return 1;
            f.opacity = 1;
            return 0
        }
    }
    function Ac(a) {
        var f = C.b
          , d = f.style
          , b = 0;
        return function(h) {
            b += h;
            d.opacity = Math.max(0, 1 - b / 250);
            if (250 > b)
                return 1;
            d.display = "none";
            d.opacity = 1;
            a && a(f);
            return 0
        }
    }
    ;var N = [0, 0, 0, 0, 0, 0, 0, 0]
      , U = [0, 0, 0, 0, 0, 0, 0, 0]
      , T = [0, 0, 0, 0, 0, 0, 0, 0]
      , yc = [0, 0, 0, 0, 0, 0, 0, 0]
      , Ec = [0, 0, 0, 0, 0]
      , Fc = [0, 0, 0, 0, 0]
      , ic = [0, 0, 0, 0]
      , hc = [0, 0, 0, 0]
      , Gc = [0, 0, 0, 0]
      , Hc = [0, 0, 0, 0]
      , Rb = 0
      , Sb = 0
      , Vb = 0
      , Ic = 0
      , Jc = !1;
    function Qb() {
        var a = Lb.offsetWidth * t
          , f = Lb.offsetHeight * t
          , d = I.desktop & 1;
        function b() {
            h[1] = ~~(2360 * h[0] / 31 / 56);
            g[0] = g[1] = g[4] = Math.min(~~(12 * h[0] / 31), ~~(12 * h[1] / 40));
            c[0] = c[4] = ~~(47 * h[0] / 31) - g[0];
            c[1] = ~~(37 * h[1] / 40) - g[1];
            h[4] != h[0] && (g[4] = ~~(12 * h[4] / 31),
            c[4] = ~~(47 * h[4] / 31) - g[4]);
            h[2] = h[6] = h[0];
            g[2] = g[6] = g[0];
            c[2] = c[6] = c[0];
            h[3] = h[1];
            g[3] = g[1];
            c[3] = c[1];
            h[5] = h[7] = ~~(380 * c[1] / 460);
            g[5] = g[7] = ~~(44 * h[5] / 19) - c[1];
            c[5] = c[7] = c[1];
            var b = 2 * c[1]
              , m = 2 * h[0];
            n = p = 0;
            1 == K.a || 3 == K.a ? (n = Math.max(n, m + 17 * h[0] + 2 * h[1] + m),
            p = Math.max(p, b + 17 * c[1] + 2 * c[0] + g[0] + c[4] + g[4] + (d ? c[1] : 0))) : (n = Math.max(n, m + 3 * h[1] + 6 * h[0] + 3 * h[1] + m),
            p = Math.max(p, b + 3 * c[0] + 6 * c[1] + 3 * c[0] + g[0] + c[4] + g[4] + (d ? c[1] : 0)));
            n = Math.max(n, ~~(14.1 * h[4]) + h[0]);
            Ic = c[7] + g[7] - (c[3] + g[3]);
            p = Math.max(p, ~~(2.1 * c[1]) + Ic + 4 * (2 * c[1] + c[0]) + c[1] + g[1] + c[4] + g[4]);
            p = Math.max(p, c[0] + 4 * (2 * c[1] + c[0]) + ~~(2.1 * c[1]) + Ic + 2 * c[1] + g[1] + (d ? c[1] : 0));
            return n <= a && p <= f
        }
        var h = N, c = U, g = T, n, p;
        for (h[0] = 99; 10 < h[0]; --h[0]) {
            Jc = !0;
            h[4] = ~~(31 * (2 * c[1] + g[0]) / 47);
            if (b())
                break;
            Jc = !1;
            h[4] = ~~((a - h[0]) / 14.1);
            if (b())
                break
        }
        h[4] = ~~((a - h[0]) / 14.1);
        for (h[4] = Math.min(h[4], ~~(1.7 * h[0])); 10 < h[4] && !b(); --h[4])
            ;
        2 == I.lthai || !Jc || d || 1 != H.a && 4 != H.a || 1 == K.a || 3 == K.a || (h[4] = ~~((a - h[0]) / 14.1),
        h[4] = Math.min(h[4], ~~(31 * (c[4] + g[4]) / 47) + g[0] + ~~(.3 * c[0])),
        g[4] = ~~(12 * h[4] / 31),
        c[4] = ~~(47 * h[4] / 31) - g[4]);
        for (var l = 0; 8 > l; ++l)
            yc[l] = N[l] - ~~(5 * T[4 == l ? 4 : 0] / 12);
        f - p < a - n ? p = ~~f : n = ~~a;
        Vb = Math.max(n, ~~(14.1 * h[4]) + h[0]);
        Rb = n;
        Sb = p
    }
    ;function gc(a) {
        Aa(this, a)
    }
    Aa(gc.prototype, {
        Ia: function() {
            if (this.P && !this.Ba)
                if (this.i && 1 == this.u) {
                    var a = 0;
                    this.ca && this.ca.i && 1 == this.ca.u && this.c + N[this.w] == this.ca.c + N[this.ca.w] && this.h + T[this.w] == this.ca.h + U[this.ca.w] + T[this.ca.w] && (a |= this.ca.wa && this.ca.wa.i && 1 == this.ca.wa.u && this.ca.c + N[this.ca.w] == this.ca.wa.c && this.ca.h == this.ca.wa.h ? 0 : 1);
                    this.wa && this.wa.i && 1 == this.wa.u && this.c + N[this.w] == this.wa.c && this.h + U[this.w] == this.wa.h + U[this.wa.w] && (a |= 2);
                    this.xa && this.xa.i && 1 == this.xa.u && this.c + N[this.w] == this.xa.c + N[this.xa.w] && this.h + U[this.w] + T[this.w] == this.xa.h + T[this.xa.w] && (a |= 4);
                    xc[this.w << 8 | a] ? (this.P.i = xc[this.w << 8 | a],
                    this.P.u = 1) : (delete this.P.i,
                    this.P.u = 0)
                } else
                    delete this.P.i
        },
        la: function(a, f, d) {
            var b = this.$
              , b = b & a | f;
            a = this.ia;
            f = this.aa;
            b & 4 ? (this.ia = M[this.w << 8 | (b & 1 ? 60 : 50)],
            this.aa = b & 1 ? .3 : .2) : b & 2 ? (this.ia = M[this.w << 8 | (b & 1 ? 60 : 50)],
            this.aa = b & 1 ? .2 : .1) : b & 16 ? (this.ia = M[this.w << 8 | 49],
            this.aa = .3) : b & 1024 ? (this.ia = M[this.w << 8 | 50],
            this.aa = .2) : b & 2048 ? (this.ia = M[this.w << 8 | 60],
            this.aa = .15) : b & 256 ? (this.ia = M[this.w << 8 | 49],
            this.aa = .3) : b & 512 ? (delete this.ia,
            delete this.aa) : b & 4096 ? (this.ia = M[this.w << 8 | 49],
            this.aa = b & 8192 ? .4 : .15) : (delete this.ia,
            delete this.aa);
            this.$ = b;
            !d || this.ia == a && this.aa == f || this.Sb();
            return this
        },
        ga: function(a) {
            if (!this.i)
                return this;
            var f = 0
              , d = 0;
            this.u && (f = this.P.i ? this.P.i.offsetX + this.P.i.ha : this.i.ha,
            d = this.i.va);
            this.u = a;
            this.Ia();
            this.ca && this.ca.Ia();
            this.xa && this.xa.Ia();
            this.ib && (this.ib.Ia(),
            this.ib.xa && this.ib.xa.Ia());
            this.u && (f = this.P.i ? this.P.i.offsetX + this.P.i.ha : f ? f : this.i.ha,
            d = this.i.va);
            Q.Ka(this.c + this.i.offsetX, this.h + this.i.offsetY - this.Ba, f, d);
            return this
        },
        Da: function(a, f) {
            var d = this.w % 4;
            a && (d || (d += 4),
            d && 136 == f && (d += 4));
            this.i = M[d << 8 | K.Wa[f]];
            this.w = d;
            this.i || qb("PH.setImage noimg ", d, f, K.Wa[f]);
            return this
        },
        Sb: function() {
            void 0 !== this.i && 0 !== this.u && Q.Ka(this.c, this.h - this.Ba, this.i.ha, this.i.va)
        },
        La: function() {
            void 0 !== this.i && 0 !== this.u && Q.Ka(this.c, this.h - this.Ba, this.P.i ? this.P.i.offsetX + this.P.i.ha : this.i.ha, this.i.va)
        }
    });
    var R = {
        ra: []
    };
    (function() {
        for (var a = [function(a, b) {
            a.wa = b;
            b.ib = a
        }
        , function(a, b) {
            a.ca = b;
            b.xa = a
        }
        , function(a, b) {
            a.ib = b;
            b.wa = a
        }
        , function(a, b) {
            a.xa = b;
            b.ca = a
        }
        ], f = [1024, 14, 2048, 34, 3072, 26, 4096, 34, 5120, 5]; f.length; )
            for (var d = f.shift(), b = f.shift(), h = 0; 4 > h; ++h) {
                for (var c = {}, g = 0; g < b; ++g)
                    R.ra.push(R[d | h << 8 | g] = c[g] = new gc({
                        u: 0,
                        w: h,
                        c: 0,
                        h: 0,
                        Ba: 0,
                        I: 0,
                        J: 0
                    })),
                    R.ra.push(c[g].P = {
                        u: 0
                    }),
                    c[g].ta = c[g].P.ta = c[g];
                for (g = 1; g < b; ++g)
                    if (!(2048 == d && 17 == g || 3072 == d && 6 == g || 3072 == d && 12 == g || 4096 == d && 17 == g))
                        a[h](c[g - 1], c[g]);
                if (2048 == d)
                    for (g = 0; 17 > g; ++g)
                        a[(h + 1) % 4](c[g], c[g + 17]),
                        c[g].Ha = c[g + 17];
                if (3072 == d)
                    for (g = 6; 18 > g; ++g)
                        a[(h + 1) % 4](c[g], c[g - 6]);
                if (4096 == d)
                    for (g = 17; 34 > g; ++g)
                        a[(h + 1) % 4](c[g], c[g - 17]);
                if (5120 == d)
                    break
            }
        for (g = 0; a = R[1024 | g]; ++g)
            a.R = g
    }
    )();
    Aa(R, {
        K: function() {
            var a = Aa(Ec, [N[0], 0, -N[0], 0, N[4]])
              , f = Aa(Fc, [0, -U[1], 0, U[1], 0])
              , d = Aa(ic, [0, N[1], 0, -N[1]])
              , b = Aa(hc, [U[0], 0, -U[0], 0]);
            Aa(Gc, [0, N[1] - N[0], N[0] - N[1], 0]);
            Aa(Hc, [U[0] - U[1], U[1] - U[0], 0, 0]);
            var h = Q.v.canvas.offsetWidth * t
              , c = Q.v.canvas.offsetHeight * t
              , g = ~~((h - Rb) / 2)
              , n = ~~((c - Sb) / 2)
              , p = g + Rb
              , l = n + Sb - (I.desktop & 1 ? U[1] : 0)
              , k = 6 * N[0]
              , m = 6 * U[1]
              , x = g + ~~((p - g - k) / 2)
              , E = n + 2 * U[1] + (3 == K.a || 1 == K.a ? 2 * U[0] : 0) + 3 * U[0];
            R[112] = x;
            R[113] = E + m;
            R[114] = x + k;
            R[115] = E + m - U[1];
            R[116] = x + k - N[0];
            R[117] = E - U[0];
            R[118] = x - N[1];
            R[119] = E;
            for (var w = 0; 4 > w; ++w)
                R.$b(w);
            for (var B, y = 0; B = R[5120 | y]; ++y)
                B.c = B.I = x + ~~((k - 5 * N[0]) / 2) + N[0] * y,
                B.h = B.J = E;
            if (3 == K.a) {
                w = 17 * N[0] + 2 * N[1];
                B = 17 * U[1] + 2 * U[0];
                for (var J = x + ~~((k - w) / 2), D = E + ~~((m - B) / 2), J = [{
                    Fa: J + w - 1 * N[0],
                    Ga: D + B - 1 * U[0]
                }, {
                    Fa: J + w - 1 * N[1],
                    Ga: D
                }, {
                    Fa: J,
                    Ga: D
                }, {
                    Fa: J,
                    Ga: D + B - 1 * U[1]
                }], w = 0; 4 > w; ++w)
                    for (y = 0; B = R[4096 | w << 8 | y]; ++y)
                        B.c = B.I = J[w].Fa - a[w] * (16 - y % 17) - (17 > y ? 0 : d[w]),
                        B.h = B.J = J[w].Ga - f[w] * (16 - y % 17) - (17 > y ? 0 : b[w]),
                        B.Ba = 0
            } else if (1 == K.a)
                for (w = 17 * N[0] + N[1],
                B = 17 * U[1] + U[0],
                J = x + ~~((k - w) / 2),
                D = E + ~~((m - B + T[0]) / 2),
                J = [{
                    Fa: J + w - N[0],
                    Ga: D + B - U[0]
                }, {
                    Fa: J + w - N[1],
                    Ga: D
                }, {
                    Fa: J,
                    Ga: D
                }, {
                    Fa: J,
                    Ga: D + B - U[1]
                }],
                w = 0; 4 > w; ++w)
                    for (y = 0; B = R[4096 | w << 8 | y]; ++y)
                        B.c = B.I = J[w].Fa - a[w] * (16 - y % 17),
                        B.h = B.J = J[w].Ga - f[w] * (16 - y % 17),
                        B.Ba = 17 > y ? 0 : T[w];
            else
                for (w = 0; 4 > w; ++w)
                    for (y = 0; B = R[4096 | w << 8 | y]; ++y)
                        B.c = B.h = B.Ba = 0;
            E += T[0];
            R[16] = x;
            R[17] = E;
            R[18] = k;
            R[19] = m;
            a = 3 * N[1];
            f = 3 * U[0];
            R[48] = x + k + T[0];
            R[49] = E + m + T[0];
            R[50] = a - T[0];
            R[51] = f - T[0];
            R[52] = x + k + T[0];
            R[53] = E - f;
            R[54] = a - T[0];
            R[55] = f - T[0];
            R[56] = x - a;
            R[57] = E - f;
            R[58] = a - T[0];
            R[59] = f - T[0];
            R[60] = x - a;
            R[61] = E + m + T[0];
            R[62] = a - T[0];
            R[63] = f - T[0];
            D = 1 == K.a || 3 == K.a ? 0 : U[0];
            R[32] = x;
            R[33] = E + D;
            R[34] = k;
            R[35] = m - D - T[0];
            R[80] = p - ~~(14.1 * N[4]) - N[0];
            R[81] = l - U[4] - T[4];
            R[82] = R[98] = p - N[1];
            R[85] = R[101] = n;
            R[86] = R[102] = g;
            R[96] = p - N[0];
            R[97] = l - T[0] - U[0];
            R[80] < g && (a = ~~((g - R[80]) / 2),
            R[80] += a,
            R[96] += a);
            B = ~~(2.1 * U[1]) + Ic + 4 * (2 * U[1] + U[0]) + (H.s & 16 ? U[1] : 0);
            R[99] = Math.max(n + ~~((l - Math.max(2 * U[1], U[4] + T[4]) - n - B) / 2), 0);
            R[83] = Math.min(R[99] + (B - U[1] - T[1]), l - U[4] - T[4] - U[1]);
            B += T[1];
            R[87] = Math.max(n + ~~((l - U[4] - T[4] - n - B) / 2), 0);
            R[103] = Math.min(R[87] + (B - U[1] - T[1]), l - U[4] - T[4] - U[1]);
            w = ~~(2.1 * N[0]) + 4 * (2 * N[0] + N[1]) + (H.s & 16 ? N[0] : 0);
            3 == K.a && (w = Math.max(w, 17 * N[0] + 2 * N[1]));
            1 == K.a && (w = Math.max(w, 17 * N[0] + 1 * N[1]));
            R[100] = x + ~~((k - w) / 2);
            ~H.s & 16 && !Jc && (R[100] = N[1]);
            H.s & 16 && (H.B[1] || (R[100] += N[0]),
            H.B[3] || (R[100] = g));
            R[84] = R[100] + w - N[0];
            for (w = 0; 4 > w; ++w)
                for (R.cc(w),
                y = 0; B = R[1024 | w << 8 | y]; ++y)
                    B.c = B.I,
                    B.h = B.J;
            Yb.K();
            R[64] = R[68] = ~~(R[16] + R[18] / 2);
            R[67] = R[71] = ~~(R[17] + R[19] / 2);
            R[65] = ~~(R[81] - 1.5 * U[0]);
            R[66] = ~~(R[82] - 1.5 * N[1]);
            R[69] = ~~(R[85] + 2.5 * U[2]);
            R[70] = ~~(R[86] + 2.5 * N[3]);
            for (y in R.ra)
                R.ra[y].P && void 0 === R.ra[y].I && console.log(y);
            R.ra.sort(function(a, b) {
                return (void 0 != a.R ? 0 : -h * c) + (a.P ? h * c : 0) + (a.ta.Ba + a.ta.J) * h + a.ta.I - ((void 0 != b.R ? 0 : -h * c) + (b.P ? h * c : 0) + (b.ta.Ba + b.ta.J) * h + b.ta.I)
            })
        },
        fa: function() {
            for (var a = 0; a < R.ra.length; ++a) {
                var f = R.ra[a];
                f.u = 0;
                f.P && (void 0 !== f.I && (f.c = f.I),
                void 0 !== f.J && (f.h = f.J),
                f.la(-1, 0, !1),
                delete f.fb)
            }
            for (a = 0; 4 > a; ++a)
                R.wb(a, -2)
        },
        cc: function(a) {
            for (var f, d = 16; R[2048 | a << 8 | d]; --d)
                ;
            for (var b = 0, h = 0, d = 16; f = R[2048 | a << 8 | d]; --d) {
                f.I = R[96 + 2 * a] - Ec[a] * (16 - d);
                f.J = R[97 + 2 * a] - Fc[a] * (16 - d);
                var c = f.Ha;
                c.I = f.I + Ec[(a + 1) % 4];
                c.J = f.J + Fc[(a + 1) % 4];
                f.w != a && (b += Ec[a] - ic[(a + 1) % 4],
                h += Fc[a] - hc[(a + 1) % 4]);
                f.c = f.I + b;
                f.h = f.J + h;
                c.c = c.I + b;
                c.h = c.J + h;
                f.w != a && (f.c += Gc[a],
                f.h += Hc[a],
                c.c += Gc[a],
                c.h += Hc[a])
            }
            for (d = 0; f = R[1024 | a << 8 | d]; ++d)
                f.I = 0 + R[80 + 2 * a] + Ec[a ? a : 4] * d,
                f.J = 0 + R[81 + 2 * a] + Fc[a ? a : 4] * d
        },
        $b: function(a) {
            for (var f = 0, d = 0, b, h = 0; b = R[3072 | a << 8 | h]; ++h)
                if (b.I = R[112 + 2 * a] + Ec[a] * h + (ic[a] - 6 * Ec[a]) * (12 < h ? 2 : ~~(h / 6)) + f,
                b.J = R[113 + 2 * a] + Fc[a] * h + (hc[a] - 6 * Fc[a]) * (12 < h ? 2 : ~~(h / 6)) + d,
                b.w != a && (b.I += Gc[a],
                b.J += Hc[a],
                f = -Ec[a] + ic[(a + 1) % 4],
                d = -Fc[a] + hc[(a + 1) % 4]),
                b.c = b.I,
                b.h = b.J,
                5 == h || 11 == h)
                    f = d = 0
        }
    });
    Aa(R, {
        wb: function(a, f) {
            for (var d, b = 0; d = R[3072 | a << 8 | b]; ++b)
                d.w != a && (d.w = a),
                -1 != f || d.u || (f = b);
            0 <= f && (R[3072 | a << 8 | f].w = (a + 1) % 4);
            R.$b(a)
        }
    });
    Aa(R, function() {
        function a(a) {
            var b = 0, d;
            for (d in f) {
                var c = f[d];
                if (0 <= c.t) {
                    c.oa <= c.t && (c.t = c.oa);
                    Q.za();
                    var g, n;
                    for (n in c) {
                        var p = c[n]
                          , l = p.qb;
                        if (l) {
                            var k = l.P.i ? l.P.i.offsetX + l.P.i.ha : l.i.ha
                              , m = l.i.va
                              , x = ~~(l.I + (p.Sa - l.I) * (c.oa - c.t) / c.oa);
                            x <= l.c ? (k += l.c - x,
                            l.c = x) : (k += x - l.c,
                            g = l.c,
                            l.c = x,
                            x = g);
                            p = ~~(l.J + (p.xb - l.J) * (c.oa - c.t) / c.oa);
                            p <= l.h ? (m += l.h - p,
                            l.h = p) : (m += p - l.h,
                            g = l.h,
                            l.h = p,
                            p = g);
                            Q.Ka(x + l.i.offsetX, p + l.i.offsetY, k, m);
                            c.oa <= c.t && l.ga(l.u)
                        }
                    }
                    Q.Aa()
                }
                c.oa <= c.t && delete f[d];
                c.t += a;
                ++b
            }
            0 == b && nc.Ra && nc.Ra();
            return b
        }
        var f = {};
        return {
            Pa: function(d, b, h) {
                if (Wb.Z) {
                    Q.za();
                    for (d = 0; d < h.length; ++d)
                        b = h[d],
                        b.La(),
                        b.c = b.I,
                        b.h = b.J;
                    for (d = 0; d < h.length; ++d)
                        b = h[d],
                        b.ga(b.u),
                        b.La();
                    Q.Aa()
                } else {
                    b = f[Za++] = {
                        t: -~~d,
                        oa: b
                    };
                    for (d = 0; d < h.length; ++d)
                        b[d] = {
                            qb: h[d],
                            Sa: h[d].c,
                            xb: h[d].h
                        };
                    dc().Pa = a
                }
            }
        }
    }());
    var K = function() {
        function a() {
            return !1
        }
        function f(a) {
            return 16 == a || 52 == a || 88 == a
        }
        function d(a) {
            a = (135 - a + h) % 136;
            return R[4096 | ~~(a / 34) << 8 | (a % 34 >> 1) + 17 * (a & 1)]
        }
        var b, h, c, g;
        return {
            a: 0,
            bb: 0,
            Oa: !1,
            Wa: {
                136: 48
            },
            pa: function(d) {
                for (var n = K.Wa, l = 0; 136 > l; ++l) {
                    var k = ~~(l / 4);
                    n[l] = 10 * (~~(k / 9) + 1) + k % 9 + 1
                }
                H.s & 2 ? K.sb = a : (K.sb = f,
                n[16] = 51,
                n[52] = 52,
                n[88] = 53);
                n = H.ka;
                l = H.ma[3];
                k = H.ma[4];
                c = (4 + n - H.ma[0] % 4) % 4;
                K.Oa = 6 == l && 0 == k;
                h = ((n + (l + 1) + (k + 1) - 1) % 4 * 17 + 17 - 1 - (l + 1) - (k + 1)) % 68 * 2 + 2;
                K.Oa && (h = 34 * (c + 1));
                b = [0, 0, 0, 0];
                K.bb = 0;
                g = null;
                if (d)
                    for (g = [],
                    l = 0; 136 > l; ++l)
                        g[l] = d[135 - l]
            },
            Kb: function(a) {
                if (!K.Oa)
                    return d(b[0]++);
                -1 == a && (a = (c + 3) % 4);
                var f = b[a]++;
                return R[4096 | a << 8 | 33 - (17 * (f & 1) + (f >> 1))]
            },
            Ma: function(a) {
                if (!K.Oa)
                    return d(135 - a ^ 1);
                var b = (c + (a >> 2)) % 4;
                a %= 4;
                return R[4096 | b << 8 | 17 * (~a & 1) + (a >> 1)]
            },
            Eb: function(a, b) {
                return g ? K.Oa ? g[135 - (34 * a + ~~(b % 34 / 17) + b % 17 * 2)] : g[(135 - (34 * a + ~~(b % 34 / 17) + b % 17 * 2) + h) % 136] : 136
            },
            Tb: function(a) {
                if (!b)
                    return 0;
                if (0 != (H.s & 2048))
                    return 116 - b[0] - 2 * (H.ma.length - 5);
                if (!K.Oa)
                    return 122 - b[0] - K.bb;
                for (var c = 0, d = -1, f = 1; 4 >= f; ++f)
                    H.B[(a + f) % 4] && c < b[(a + f) % 4] && (c = b[(a + f) % 4],
                    d = f);
                return (30 - c) * (H.s & 16 ? 3 : 4) + d - 1
            },
            sb: a
        }
    }();
    K.xc = function(a) {
        function f(a) {
            for (var b = 0; b < a.length; ++b)
                a[b] = (a[b] & 255) << 24 | (a[b] & 65280) << 8 | (a[b] & 16711680) >>> 8 | (a[b] & 4278190080) >>> 24;
            return a
        }
        a = a.split(",");
        if ("mt19937ar-sha512-n288-base64" == a[0]) {
            a = function(a) {
                a = atob(a);
                for (var b = [], c = 0; c < a.length; c += 4)
                    b.push(a.charCodeAt(c + 0) << 0 | a.charCodeAt(c + 1) << 8 | a.charCodeAt(c + 2) << 16 | a.charCodeAt(c + 3) << 24);
                return b
            }(a[1]);
            var d = -1
              , b = new Kc;
            Lc(b, a, a.length);
            var h = new Kc;
            return function(a, g) {
                if (g && d != a) {
                    for (var c = [], p = 0; 624 > p; ++p)
                        c[p] = Mc(b);
                    Lc(h, c, 624)
                }
                d = a;
                for (var l = g ? h : b, c = [], k = [], p = 0; 9 > p; ++p) {
                    for (var m = [], x = 0; 32 > x; ++x)
                        m[x] = Mc(l);
                    Array.prototype.push.apply(k, f(Nc(f(m))))
                }
                for (var p = 0; p < k.length; ++p)
                    k[p] >>>= 0;
                if (H.s & 16)
                    for (p = 0; 136 > p; ++p)
                        (4 > p || 32 <= p) && c.push(p);
                else
                    for (p = 0; 136 > p; ++p)
                        c.push(p);
                x = c.length;
                for (p = 0; p < x - 1; ++p)
                    l = p + k[p] % (x - p),
                    m = c[p],
                    c[p] = c[l],
                    c[l] = m;
                return c
            }
        }
    }
    ;
    var wc = function() {
        function a(a) {
            if (void 0 !== b)
                return 350 < f && 25 < f - d && (b(),
                d = f),
                f += a,
                !0
        }
        var f = 0
          , d = 0
          , b = void 0;
        return {
            set: function(h, c) {
                b = h;
                f = d = 0;
                b ? (c && b(),
                dc().autoRepeat = a) : delete dc().Oc
            }
        }
    }();
    var H = function() {
        function a(a) {
            if (1 == H.a) {
                var b = (~~I.lognext + 40 - 1) % 40
                  , c = I["log" + b];
                if (c) {
                    try {
                        c = JSON.parse(c)
                    } catch (w) {
                        return
                    }
                    c.sc || (c.sc = a,
                    I["log" + b] = JSON.stringify(c))
                }
            }
        }
        function f(a, b, c, d, f, g, h) {
            var m, k, l;
            c instanceof gc ? (m = d.w % 4,
            k = d.c,
            l = d.h,
            d.ga(0),
            d = M[c.w << 8 | K.Wa[f]]) : (m = c,
            c = R[b | m << 8 | d],
            k = c.c,
            l = c.h,
            d = M[m << 8 | 48]);
            switch (b) {
            case 5120:
                l = 0;
                break;
            case 4096:
                0 == m ? l = Sb : 1 == m ? k = Rb : 2 == m ? l = 0 : 3 == m && (k = 0);
                m & 1 && (k -= Q.v.canvas.offsetLeft * t);
                break;
            case 1024:
                var n = p ? K.Ma(K.bb++) : K.Kb(m);
                1 == K.a || 3 == K.a ? (d = n.i,
                k = n.c,
                l = n.h,
                Wb.O(a, n, 0)) : 0 == m ? l = ~~(Sb / 2) : 1 == m ? k = ~~(Rb / 2) : 2 == m ? l = ~~(Sb / 2) : 3 == m && (k = ~~(Rb / 2));
                p = !1;
                break;
            case 3072:
                c.c = c.I + (Wb.Z ? 0 : ~~(.2 * Ec[m]) + ~~(.15 * ic[m])),
                c.h = c.J + (Wb.Z ? 0 : ~~(.2 * Fc[m]) + ~~(.15 * hc[m]))
            }
            c.Da(1024 == b, f);
            Wb.O(a + 0, k, l, c.c, c.h, g, d, .06);
            b = Wb.O(a + 10, k, l, c.c, c.h, g, d, .18, c, 1);
            Wb.O(a + 20, k, l, c.c, c.h, g, d, .06);
            0 != h && fc(h, 0, b / 1E3);
            return b
        }
        function d(a) {
            ac.Y();
            v.X(256);
            kc();
            var b = {
                tag: "D",
                p: a
            };
            1 == H.a ? W.L(b) : 4 == H.a && C.Xb(b);
            b[0] = a;
            W.qa(b)
        }
        function b() {
            H.Pb = [-1, -1, -1, -1];
            H.gb = ["", "", "", ""];
            for (var a = 0, b = 0; 4 > b; ++b)
                who = (H.ka + b) % 4,
                H.B[who] && (H.Pb[who] = a,
                H.gb[who] = "東南西北".substr(a, 1),
                ++a)
        }
        var h = {
            84: 0,
            85: 1,
            86: 2,
            87: 3,
            116: 0,
            117: 1,
            118: 2,
            119: 3
        }, c = -1, g = -1, n = null, p, l = "", k = !1;
        return {
            a: 0,
            s: 0,
            hb: 0,
            ka: -1,
            Pb: [],
            gb: [],
            ma: [],
            na: [],
            Mb: [],
            Sa: [],
            Ua: [],
            Qa: [],
            B: [],
            connected: 0,
            fa: function() {
                var a = dc(), b;
                for (b in a)
                    "autoRepeat" != b && delete a[b];
                Xb.fa();
                Wb.pa();
                Q.vb();
                for (b = 0; b < R.ra.length; ++b)
                    a = R.ra[b],
                    a.u = 0,
                    a.P && (void 0 !== a.I && (a.c = a.I),
                    void 0 !== a.J && (a.h = a.J),
                    a.la(0, 0, !1),
                    delete a.fb);
                for (b = 0; 4 > b; ++b)
                    R.wb(b, -2);
                n = null;
                g = -1;
                c = H.ka = -1;
                $b.S(0, -1);
                Yb.pa();
                V.pa();
                Zb.style.display = $b.v.canvas.style.display = "none";
                ac.Y();
                v.X(256);
                kc();
                S.K();
                C.fa()
            },
            pa: function(a) {
                if ("REINIT" == a.tag || 3 == H.a)
                    Wb.Z = !0;
                p = !1;
                c = H.ka = ~~a.oya;
                H.ma = q(a.seed);
                H.na = q(a.ten, 100);
                H.Mb = q(a.chip);
                b();
                ac.Dc(la(H.hb, H.s) ? 5E3 : 1E4);
                K.pa(a[5]);
                Yb.pa();
                V.pa();
                zb.wc();
                k && (jc(1, 0, 0),
                k = !1);
                $b.S(void 0, -1);
                for (var d = 0; 4 > d; ++d)
                    if (H.B[d])
                        for (var g = 0; 13 > g; ++g)
                            V[32 | d].push(136);
                var h = 0;
                if (1 == K.a) {
                    for (d = 0; 4 > d; ++d)
                        for (g = 0; 34 > g; ++g)
                            R[4096 | d << 8 | g].aa = 0;
                    for (g = 0; 17 > g; ++g)
                        for (d = 0; 4 > d; ++d)
                            Wb.O(f(h, 4096, d, g, 136, .08, 4), R[4096 | d << 8 | g + 17].Da(!1, 136), 1),
                            h += 12
                } else if (3 == K.a) {
                    for (var m = u.tw + 1, d = 0; 4 > d; ++d)
                        for (g = 0; 34 > g; ++g) {
                            var l = K.Eb(d, g)
                              , n = R[4096 | d << 8 | g]
                              , l = (l & 3840) >> 8;
                            l == m ? n.la(-2049, 2048, !1) : 5 == l ? n.la(-12289, 12288, !1) : n.la(-4097, 4096, !1)
                        }
                    for (g = 0; 17 > g; ++g)
                        for (d = 0; 4 > d; ++d)
                            Wb.O(f(h, 4096, d, g, K.Eb(d, g) & 255, .08, 4), R[4096 | d << 8 | g + 17].Da(!1, K.Eb(d, g + 17) & 255), 1),
                            h += 12
                } else
                    for (g = 0; 5 > g; ++g)
                        f(h, 5120, 0, g, 136, .08, 4),
                        h += 45;
                Wb.O(function() {
                    $b.S(void 0, c);
                    for (var a = 5; a < H.ma.length; ++a)
                        H.DORA({
                            hai: H.ma[a],
                            Qb: a - 5
                        });
                    if (K.Oa)
                        for (var b = 0; 4 > b; ++b) {
                            var d = ~~(.1 * Ec[b])
                              , f = ~~(.1 * Fc[b]);
                            Q.za();
                            for (a = 0; 34 > a; ++a)
                                if (2 <= a % 17) {
                                    var g = R[4096 | b << 8 | a];
                                    g.La();
                                    g.c += d;
                                    g.h += f;
                                    g.Ia();
                                    g.La()
                                }
                            for (a = 0; 34 > a; ++a)
                                R[4096 | b << 8 | a].Ia();
                            Q.Aa()
                        }
                });
                var D = [0, 0, 0, 0];
                H.B[1] || (D[1] += 136 - (H.s & 2048 ? 112 : 108));
                H.B[2] || (D[2] += 136 - (H.s & 2048 ? 112 : 108));
                H.B[3] || (D[3] += 136 - (H.s & 2048 ? 112 : 108));
                for (d = 0; 4 > d; ++d)
                    for (n = q(a["m" + d]); n.length; )
                        l = n.pop(),
                        H.N({
                            who: d,
                            m: l
                        }),
                        p && (K.Ma(K.bb).ga(0),
                        ++K.bb,
                        p = !1),
                        ++D[(d + (l & 3)) % 4],
                        --D[d];
                a.hai && (V[32] = q(a.hai));
                a.hai0 && (V[32] = q(a.hai0));
                a.hai1 && (V[33] = q(a.hai1));
                a.hai2 && (V[34] = q(a.hai2));
                a.hai3 && (V[35] = q(a.hai3));
                S.K();
                for (d = 0; 4 > d; ++d)
                    for (H.B[d] && (D[d] += 13 - V[32 | d].length),
                    g = 0; g < V[32 | d].length; ++g)
                        136 > V[32 | d][g] && V[48 | d][V[32 | d][g] >> 2]++;
                g = [q(a.kawa0), q(a.kawa1), q(a.kawa2), q(a.kawa3)];
                for (d = 0; 4 > d; ++d) {
                    Q.za();
                    h = 0;
                    for (m = !1; g[d].length; )
                        l = g[d].shift(),
                        255 == l ? (R.wb(d, h),
                        0 == d && (V[64] = wb.eb(V[48]))) : 254 == l ? m = !0 : (n = R[3072 | d << 8 | h],
                        n.Da(!1, l & 255),
                        n.ga(1),
                        m && (4 == H.mode || 1 != H.a && v.o[1277961]) && n.la(-257, 256, !1),
                        n.La(),
                        ++D[d],
                        ++h,
                        m = !1);
                    Q.Aa()
                }
                Wb.Z && Q.za();
                Wb.O(function() {
                    for (var a = 0; 4 > a; ++a)
                        for (var b = 0; b < D[a]; ++b)
                            K.Kb(a).ga(0);
                    for (var c = 0, d = 0; 52 > d; ++d)
                        a = (48 > d ? ~~(d / 4) : d) % 4,
                        H.B[a] && (b = 48 > d ? 4 * ~~(d / 16) + d % 4 : 12,
                        V[32 | a].length <= b || (f(c, 1024, a, b, a && !v.o[1277960] ? 136 : V[32 | a][b], .08, 4),
                        3 == d % 4 && (c += 75)));
                    $b.S()
                });
                Wb.Z && Q.Aa();
                Wb.O(function() {
                    for (var a = 0; 4 > a; ++a)
                        Wb.Z && Q.za(),
                        (Wb.Z || a || v.o[1183750]) && V.Hc(a),
                        Wb.Z && Q.Aa();
                    if (~H.s & 2048 && (1 == K.a || 3 == K.a)) {
                        Q.za();
                        K.Ma(14).La();
                        for (var a = K.Ma(14).w, b = ~~(.15 * Ec[a]), c = ~~(.15 * Fc[a]), d = 14; 48 > d; ++d) {
                            var f = K.Ma(d);
                            if (f.w != a)
                                break;
                            f.c += b;
                            f.h += c;
                            f.La()
                        }
                        K.Ma(13).Ia();
                        K.Ma(15).Ia();
                        Q.Aa()
                    }
                });
                Zb.style.display = "none";
                $b.v.canvas.style.display = "";
                v.o[1183749] = v.o[1183752] = v.o[1183753] = v.o[1183751] = !1;
                v.o[1183750] = !0;
                v.X(256);
                if ((3 == H.a || 2 == H.a) && v.o[1277957])
                    for (d = 0; 4 > d; ++d)
                        zb.ac(d);
                if ("REINIT" == a.tag || 3 == H.a)
                    Wb.Z = !1;
                Wb.O(W.Ea)
            },
            Gb: function(a) {
                var b = g;
                V[64] || (b = V[32 | c][a]);
                d(b)
            },
            ERR: function(a) {
                var b = ~~a.code;
                a = "(ERR" + b + ")";
                var c = 1;
                switch (b) {
                case 1001:
                case 1002:
                case 1003:
                case 1004:
                case 1005:
                case 1006:
                case 1012:
                case 1019:
                case 1021:
                    C.b.style.display = "";
                    ob(!1, 0);
                    break;
                case 1020:
                    c |= 2;
                    break;
                case 1027:
                    a = "";
                    break;
                case 1100:
                case 1101:
                    C.cancel()
                }
                A.l(ka[b] + a, c, function() {
                    switch (b) {
                    case 1014:
                        delete u.wg;
                        u.ab && history.back();
                        break;
                    case 1019:
                        history.back();
                        break;
                    case 1020:
                        C.purchase()
                    }
                });
                return 1
            },
            HELO: function(a) {
                if (a.closing)
                    return location.reload(),
                    1;
                if (2 == H.a)
                    return W.L({
                        tag: "WG",
                        id: u.wg,
                        tw: u.tw
                    }),
                    1;
                var b;
                C[17] = a.PF4 ? a.PF4.split(",") : [];
                C[16] = a.PF3 ? a.PF3.split(",") : [];
                C[18] = a.PF601 && a.PF01C ? (b = a.PF601.split(","),
                b.splice(1, 0, 0, a.PF01C.split(",")[1]),
                b) : [];
                C[19] = a.PF602 && a.PF02C ? (b = a.PF602.split(","),
                b.splice(1, 0, 0, a.PF02C.split(",")[1]),
                b) : [];
                C[20] = a.PF603 && a.PF03C ? (b = a.PF603.split(","),
                b.splice(1, 0, 0, a.PF03C.split(",")[1]),
                b) : [];
                C[21] = a.PF611 && a.PF11C ? (b = a.PF611.split(","),
                b.splice(1, 0, 0, a.PF11C.split(",")[1]),
                b) : [];
                C[22] = a.PF612 && a.PF12C ? (b = a.PF612.split(","),
                b.splice(1, 0, 0, a.PF12C.split(",")[1]),
                b) : [];
                C[23] = a.PF613 && a.PF13C ? (b = a.PF613.split(","),
                b.splice(1, 0, 0, a.PF13C.split(",")[1]),
                b) : [];
                C[24] = a.PF623 && a.PF23C ? (b = a.PF623.split(","),
                b.splice(1, 0, 0, a.PF23C.split(",")[1]),
                b) : [];
                C[25] = a.PF633 && a.PF33C ? (b = a.PF633.split(","),
                b.splice(1, 0, 0, a.PF33C.split(",")[1]),
                b) : [];
                C[0] = decodeURIComponent(a.uname);
                C[1] = a.expire;
                C[2] = ~~a.expiredays;
                a.nintei ? (a.tag = "NINTEI",
                C.l(a)) : C.Cb();
                return 1
            },
            REHELO: function() {
                W.nc();
                return 1
            },
            LN: C.ic,
            REJOIN: function(a) {
                W.L({
                    tag: "JOIN",
                    t: a.t
                });
                return 1
            },
            CHAT: C.ec,
            CS: C.fc,
            DATE: C.gc,
            RANKING: function(a) {
                a.rankingcs ? C.lc(a) : C.kc(a);
                return 1
            },
            SHUFFLE: function() {
                return 1
            },
            GO: function(a) {
                a.gpid && (I.gpid = a.gpid);
                H.hb = ~~a.lobby;
                H.s = ~~a.type;
                1 != H.a && 2 != H.a || W.L({
                    tag: "GOK"
                });
                1 == H.a && 0 == H.hb && H.s & 1 && C.Kc(H.s);
                return 1
            },
            UN: function(a) {
                if (3 <= !!a.n0 + !!a.n1 + !!a.n2 + !!a.n3) {
                    H.B = ["", "", "", ""];
                    for (var b = 0; 4 > b; ++b)
                        H.B[b] = decodeURIComponent(a["n" + b]).replace("Ⓟ", "ⓟ").replace("Ⓢ", "ⓢ");
                    H.Ua = q(a.dan ? a.dan : ",,,");
                    H.Qa = q(a.rate ? a.rate : ",,,");
                    H.Sa = (a.sx ? a.sx : ",,,").split(",");
                    if (!1 !== v.o[14])
                        for (b = 0; 4 > b; ++b) {
                            if (a = H.B[b])
                                (a = H.B[b]) && a.length ? (a = a.charCodeAt(0),
                                a = 9372 <= a && 9397 >= a || 9398 <= a && 9423 >= a || 9424 <= a && 9449 >= a) : a = !1,
                                a = !(a || 20 <= H.Ua[b]);
                            a && (a = (u.tw + b) % 4,
                            H.B[b] = 3 == H.a && a == u.TW ? "私" : "ABCD".substr(a, 1) + "さん")
                        }
                } else
                    a.n0 && (H.connected |= 1),
                    a.n1 && (H.connected |= 2),
                    a.n2 && (H.connected |= 4),
                    a.n3 && (H.connected |= 8),
                    $b.S();
                return 1
            },
            BYE: function(a) {
                H.connected &= ~(1 << ~~a.who);
                $b.S();
                return 1
            },
            TAIKYOKU: function(a) {
                v.b.style.display = "";
                v[1572868].innerHTML = "";
                v.X(126976);
                W.Na = 0;
                k = "SAIKAI" != a.tag && H.s & 1;
                H.ka = ~~a.oya;
                if (1 == H.a && a.log) {
                    l = a.log;
                    var c = ~~I.lognext;
                    I["log" + c] = JSON.stringify({
                        type: H.s,
                        lobby: H.hb,
                        log: l,
                        oya: H.ka,
                        uname: H.B
                    });
                    I.lognext = (c + 1) % 40
                }
                H.connected = 15;
                b();
                R.K();
                Yb.K();
                C.l(a);
                Ub.S();
                return 1
            },
            INIT: function(a) {
                C.Y(function() {
                    H.fa();
                    H.pa(a)
                })
            },
            FURITEN: function(a) {
                Zb.style.display = ~~a.show ? "" : "none";
                return 1
            },
            T: function(a) {
                if (-1 == c)
                    return 1;
                if (p || 3 == H.a)
                    V.lb(c),
                    V.kb();
                3 == H.a && Xb.Ab();
                n && (R.Pa(0, 120, [n]),
                n = null);
                g = void 0 === a[0] ? 136 : a[0];
                c = h[a.tag.charCodeAt(0)];
                var b = V[32 | c].length;
                V[32 | c].push(g);
                136 > g && V[48 | c][g >> 2]++;
                var k = R[1024 | c << 8 | b];
                k || qb("T d PH_TEHAI who=" + c + " n=" + b + " wg=" + u.wg);
                k.c = k.I + ~~(.1 * Ec[c]);
                k.h = k.J + ~~(.1 * Fc[c]);
                f(0, 1024, c, b, c && !v.o[1277960] ? 136 : g, -120, 5);
                $b.S(void 0, c);
                1 != H.a && zb.bc(k);
                var l = ~~a.t;
                Wb.O(function() {
                    3 == H.a || 2 == H.a || c || (l & 16 && v.o[1183752] ? W.L({
                        tag: "N",
                        type: 7
                    }) : (l = lc.vc(l, g)) || !v.o[1183753] && !V[64] ? kc(a) : (ac.Ub(),
                    d(g)));
                    ec(W.Ea, Wb.Z || 3 == H.a ? 0 : 500)
                })
            },
            D: function(a) {
                if (-1 == c)
                    return 1;
                var b = a.tag.charCodeAt(0)
                  , d = 100 <= b && 103 >= b || g === a[0];
                g = a[0];
                0 < V[48 | c][g >> 2] && V[48 | c][g >> 2]--;
                for (var h = V[32 | c].length, b = 0; b < h && V[32 | c][b] != g; ++b)
                    ;
                b == h && (b = d ? h - 1 : ~~((h - 1) / 2));
                b = R[1024 | c << 8 | b];
                for (h = 0; (n = R[3072 | c << 8 | h]) && n.u; ++h)
                    ;
                2 == H.a || 3 == H.a ? (v.o[1277957] && zb.ac(c),
                v.o[1277961] && n.la(-1281, (d ? 256 : 0) | b.$ & 1024, !1)) : (H.s & 256 || 4 == H.a) && n.la(-257, d ? 256 : 0, !1);
                f(0, 3072, n, b, g, -120, 6);
                var k = ~~a.t;
                Wb.O(function() {
                    k & 8 && v.o[1183752] ? (jc(8, 0, 0),
                    ec(function() {
                        W.L({
                            tag: "N",
                            type: 6
                        })
                    }, 1E3)) : ~k & 8 && k && v.o[1183749] ? W.L({
                        tag: "N"
                    }) : k && lc.tc(k, g);
                    3 == H.a ? (V.Ib(c),
                    W.Ea()) : ec(function() {
                        V.Ib(c);
                        V.lb(c);
                        V.kb();
                        W.Ea()
                    }, Wb.Z ? 0 : 300)
                })
            },
            N: function(a) {
                ac.Y();
                v.X(256);
                kc();
                if (-1 == c)
                    return 1;
                3 == H.a && (V.lb(c),
                V.kb());
                var b = c = ~~a.who;
                $b.S(void 0, b);
                a[2] || mc(a);
                var d = a[0]
                  , h = V[32 | b].length
                  , k = []
                  , l = 3 - a[3];
                if (a.tag) {
                    Xb.O(b, a[2], 3 == H.a ? 4 : 6);
                    for (var m = 0; m < d.length; ++m)
                        if (n && d[m] == g)
                            k[m] = n,
                            n = null,
                            l = m;
                        else {
                            for (var D = 0; D < V[32 | b].length && V[32 | b][D] != d[m]; ++D)
                                ;
                            D == V[32 | b].length && (D = --h);
                            k[m] = R[1024 | b << 8 | D];
                            V[48 | b][d[m] >> 2]--
                        }
                } else
                    5 == a[2] && H.N({
                        who: b,
                        m: a.m ^ 24
                    });
                p = !0;
                h = [];
                if (10 == a[2])
                    V[16 | b].push(d[0]),
                    Yb.nb(b),
                    h[0] = R[b << 8 | 2064],
                    h[0].w = b;
                else if (1 == d.length) {
                    for (m = (H.s & 16 ? 16 : 17) - 1; (h[0] = R[2048 | b << 8 | m]) && h[0].u && h[0].Ha.fb != d[0]; --m)
                        ;
                    h[0] && (h[0].Ha.w = (b + 3) % 4,
                    h[0] = h[0].Ha)
                } else {
                    for (m = (H.s & 16 ? 16 : 17) - 1; (h[0] = R[2048 | b << 8 | m]) && h[0].u; --m)
                        ;
                    h.unshift(R[2048 | b << 8 | m - 1]);
                    h.unshift(R[2048 | b << 8 | m - 2]);
                    for (m = 0; m < h.length; ++m)
                        h[m].w = b;
                    3 == l && (l = a[3] ? 2 : 1);
                    4 == d.length ? (h[l].w = h[l].Ha.w = (b + 1) % 4,
                    h[3] = h[2],
                    h[2] = h[l].Ha) : (p = !1,
                    h[l].w = (b + 1) % 4,
                    1 == a[2] && (h[l].Ha.fb = a[4]))
                }
                R.cc(b);
                if (a.tag) {
                    for (m = 0; m < h.length; ++m) {
                        l = d[m];
                        4 != d.length || a[3] || 0 != m && 3 != m || (l = 136);
                        D = .06;
                        if (10 == a[2])
                            var D = h[m].c - k[m].c
                              , ca = h[m].h - k[m].h
                              , D = Math.sqrt(D * D + ca * ca) / 4E3;
                        f(0, 2048, h[m], k[m], l, D, 0)
                    }
                    V.Ib(b);
                    V.lb(b);
                    V.kb();
                    b || (S.K(),
                    p || kc(a));
                    var pa = ~~a.t;
                    Wb.O(function() {
                        pa && lc.uc(pa);
                        W.Ea()
                    })
                } else {
                    for (m = 0; m < h.length; ++m)
                        l = d[m],
                        4 != d.length || a[3] || 0 != m && 3 != m || (l = 136),
                        h[m].Da(!1, l),
                        h[m].ga(1),
                        h[m].La();
                    5 != a[2] && 10 != a[2] && V[32 | b].splice(V[32 | b].length - 3, 3)
                }
            },
            DORA: function(a) {
                if (-1 == c)
                    return 1;
                var b = ~~a.hai
                  , d = void 0 === a.Qb ? H.ma.length - 5 : a.Qb
                  , f = (H.s & 2048 ? 20 : H.s & 16 ? 8 : 4) + 2 * d
                  , g = R[5120 | d];
                if (1 == K.a || 3 == K.a)
                    g = K.Ma(f);
                g.Da(!1, b);
                0 == d && 3 == K.a && g.la(-513, 512, !1);
                g.Sb();
                "DORA" == a.tag && H.ma.push(b);
                1 < d && (Yb.nb(0),
                Yb.nb(1),
                Yb.nb(2),
                Yb.nb(3));
                return 1
            },
            REACH: function(a) {
                if (1 == a.step) {
                    var b = ~~a.who;
                    Xb.O(b, 8, 3 == H.a ? 7 : 6);
                    R.wb(b, -1);
                    0 == b && kc(a);
                    ec(W.Ea, Wb.Z || 3 == H.a ? 0 : 500)
                } else
                    return 2 == a.step && (b = ~~a.who,
                    1 == H.a && 0 == b && (V[64] = wb.eb(V[48])),
                    H.ma[2]++,
                    $b.S()),
                    a.ten && (H.na = q(a.ten, 100)),
                    1
            },
            AGARI: function(b) {
                if (-1 == c)
                    return 1;
                3 == H.a && Xb.Ab();
                var d = ~~b.who;
                V[32 | d] = q(b.hai);
                V[32 | d].splice(V[32 | d].indexOf(~~b.machi), 1);
                if (d && d == b.fromWho) {
                    var f = R[1024 | d << 8 | V[32 | d].length];
                    f.ga(0).Da(!0, ~~b.machi).ga(1);
                    1 != H.a && zb.bc(f)
                }
                n && (R.Pa(0, 120, [n]),
                n = null);
                Xb.O(d, d == b.fromWho ? 7 : 6, 3 == H.a ? 4 : 6);
                b.paoWho && Xb.O(~~b.paoWho, 11, 3 == H.a ? 4 : 6);
                V.Yb(1 << d);
                ec(function() {
                    C.l(b);
                    b.owari && (I.removeItem("gpid"),
                    C.l({
                        tag: "OWARI",
                        sc: b.owari
                    }),
                    a(b.owari),
                    W.Y())
                }, 3 == H.a ? 0 : 1E3);
                wc.set();
                return 1
            },
            RYUUKYOKU: function(b) {
                if (-1 == c)
                    return 1;
                3 == H.a && Xb.Ab();
                b.hai1 && (V[33] = q(b.hai1));
                b.hai2 && (V[34] = q(b.hai2));
                b.hai3 && (V[35] = q(b.hai3));
                if ("ron3" == b.type) {
                    var d = 3 == H.a ? 4 : 6;
                    b.hai0 && Xb.O(0, 6, d);
                    b.hai1 && Xb.O(1, 6, d);
                    b.hai2 && Xb.O(2, 6, d);
                    b.hai3 && Xb.O(3, 6, d)
                }
                n && (R.Pa(0, 120, [n]),
                n = null);
                V.Yb(14);
                ec(function() {
                    C.l(b);
                    b.owari && (I.removeItem("gpid"),
                    C.l({
                        tag: "OWARI",
                        sc: b.owari
                    }),
                    a(b.owari),
                    W.Y())
                }, 3 == H.a ? 0 : 1E3);
                wc.set();
                return 1
            },
            VOICE: function(a) {
                a = a.type;
                for (var b = 0; 4 > b; ++b)
                    a[b] && Xb.O(b, a[b], 3);
                return 1
            },
            PROF: function() {
                return 1
            },
            INITBYLOG: zb.hc,
            WGC: zb.mc,
            TRAININGINIT: function(a) {
                H.pa(a)
            }
        }
    }();
    H.W = H.V = H.U = H.T;
    H.g = H.f = H.e = H.d = H.G = H.F = H.E = H.D;
    H.KANSEN = H.SAIKAI = H.TAIKYOKU;
    H.REINIT = H.INIT;
    function Kc() {
        this.ea = 624;
        this.ob = 397;
        this.jc = 2567483615;
        this.zb = 2147483648;
        this.yb = 2147483647;
        this.H = Array(this.ea);
        this.sa = this.ea + 1
    }
    function Oc(a, f) {
        a.H[0] = f >>> 0;
        for (a.sa = 1; a.sa < a.ea; a.sa++)
            f = a.H[a.sa - 1] ^ a.H[a.sa - 1] >>> 30,
            a.H[a.sa] = (1812433253 * ((f & 4294901760) >>> 16) << 16) + 1812433253 * (f & 65535) + a.sa,
            a.H[a.sa] >>>= 0
    }
    function Lc(a, f, d) {
        var b, h, c;
        Oc(a, 19650218);
        b = 1;
        h = 0;
        for (c = a.ea > d ? a.ea : d; c; c--) {
            var g = a.H[b - 1] ^ a.H[b - 1] >>> 30;
            a.H[b] = (a.H[b] ^ (1664525 * ((g & 4294901760) >>> 16) << 16) + 1664525 * (g & 65535)) + f[h] + h;
            a.H[b] >>>= 0;
            b++;
            h++;
            b >= a.ea && (a.H[0] = a.H[a.ea - 1],
            b = 1);
            h >= d && (h = 0)
        }
        for (c = a.ea - 1; c; c--)
            g = a.H[b - 1] ^ a.H[b - 1] >>> 30,
            a.H[b] = (a.H[b] ^ (1566083941 * ((g & 4294901760) >>> 16) << 16) + 1566083941 * (g & 65535)) - b,
            a.H[b] >>>= 0,
            b++,
            b >= a.ea && (a.H[0] = a.H[a.ea - 1],
            b = 1);
        a.H[0] = 2147483648
    }
    function Mc(a) {
        var f, d = [0, a.jc];
        if (a.sa >= a.ea) {
            var b;
            a.sa == a.ea + 1 && Oc(a, 5489);
            for (b = 0; b < a.ea - a.ob; b++)
                f = a.H[b] & a.zb | a.H[b + 1] & a.yb,
                a.H[b] = a.H[b + a.ob] ^ f >>> 1 ^ d[f & 1];
            for (; b < a.ea - 1; b++)
                f = a.H[b] & a.zb | a.H[b + 1] & a.yb,
                a.H[b] = a.H[b + (a.ob - a.ea)] ^ f >>> 1 ^ d[f & 1];
            f = a.H[a.ea - 1] & a.zb | a.H[0] & a.yb;
            a.H[a.ea - 1] = a.H[a.ob - 1] ^ f >>> 1 ^ d[f & 1];
            a.sa = 0
        }
        f = a.H[a.sa++];
        f ^= f >>> 11;
        f ^= f << 7 & 2636928640;
        f ^= f << 15 & 4022730752;
        return (f ^ f >>> 18) >>> 0
    }
    Kc.prototype.random = function() {
        return Mc(this) * (1 / 4294967296)
    }
    ;
    var nc = function() {
        function a() {
            v.ja(1574918)
        }
        function f() {
            v.ja(1574917)
        }
        function d() {
            var a = V[32]
              , a = a ? 3 * ~~(a.length / 3) + 1 : 1;
            if (R[1024 | a].u)
                return R[1024 | a]
        }
        function b(a, b) {
            if (a && a.tagName) {
                var c = a.style;
                b ? (c.backgroundColor = m & 4 ? "#050" : "#030",
                c.animationName = "none",
                c.color || (c.color = "#FFF")) : (c.backgroundColor = "",
                c.animationName = "",
                c.color = "")
            }
        }
        function h(a) {
            if (l != a) {
                if (l && l.tagName && (b(l, !1),
                k && !a)) {
                    l = k;
                    return
                }
                k && (~m & 2 || !a || a instanceof gc) && (S.Ta(k.R, -15, 0),
                k = void 0);
                if (!a && k)
                    l = k;
                else {
                    l = a;
                    a instanceof gc && S.Ta(a.R, -15, 2 | (m & 8 ? 8 : 0));
                    if (!a || a instanceof gc)
                        k = a;
                    C.Fc(a);
                    m &= -5;
                    b(l, !0)
                }
            }
        }
        function c(a) {
            if (k) {
                var b = k.R;
                S.Ta(b, -15, 0);
                S.Ta(b + a, -15, 6);
                k = R[1024 | b + a]
            }
        }
        function g(g, p) {
            g && wc.set();
            if (l) {
                g || 3 != H.a || (l == v[1574917] && wc.set(f, !1),
                l == v[1574918] && wc.set(a, !1));
                if (g && !p)
                    m &= -5,
                    l instanceof gc && S.Ta(l.R, -15, 0),
                    l && l != $b.v.canvas && l.style && ~m & 8 && h();
                else if (!p || ~m & 4)
                    m |= 4,
                    l instanceof gc && S.Ta(l.R, -15, 4 | (m & 8 ? 8 : 0));
                else {
                    if ("CPda" == l.name)
                        h(),
                        l = k;
                    else if ("CPok" == l.name) {
                        var D = d();
                        D && R[1024 | D.R].$ & 1 && D.u ? H.Gb(D.R) : n(Tb, 0, 0, !0, !1)
                    }
                    if (l instanceof gc)
                        R[1024 | l.R].$ & 1 && l.u && (H.Gb(l.R),
                        h());
                    else if (l && l.tagName) {
                        if (!g)
                            return;
                        if (l.name) {
                            if (!l.disabled)
                                if ("CP_L" == l.name)
                                    S.Db(-1),
                                    c(-1);
                                else if ("CP_R" == l.name)
                                    S.Db(1),
                                    c(1);
                                else if (C[l.name])
                                    C[l.name](l)
                        } else
                            l == $b.v.canvas ? $b.ja() : l.parentNode.parentNode != v.b || l.parentNode.style.visibility || v.ja(~~l.id.substr(1));
                        m & 2 && h()
                    }
                }
                m &= -9;
                b(l, !0)
            }
        }
        function n(a, b, c, f, g, n) {
            "BUTTON" == a.tagName || a.parentNode != S.b || S[20].style.display ? a.parentNode != S.b || S[0].style.display || (c = R[81] / t + 1,
            g || (b = a.offsetLeft + 1)) : (c = R[81] / t + 1,
            m & 2 && !g && (b = S.b.offsetLeft + S[24].offsetLeft + S[24].offsetWidth / 2),
            m &= -3,
            g = !1);
            b *= t;
            c *= t;
            var p;
            if (g && l instanceof gc) {
                if (1 == H.a || 4 == H.a) {
                    for (a = 0; (p = R[1024 | a]) && !(p.I <= b && b < p.I + N[4]); ++a)
                        ;
                    if (b = p && l != p)
                        if (b = l,
                        c = p,
                        b != c && b.u && c.u) {
                            v.o[1183750] && v.ja(1183750);
                            for (f = [b]; b != c; )
                                a = R[1024 | b.R + (c.R < b.R ? -1 : 1)],
                                n = S[b.R].style.backgroundColor,
                                S[b.R].style.backgroundColor = S[a.R].style.backgroundColor,
                                S[a.R].style.backgroundColor = n,
                                n = V[32][b.R],
                                V[32][b.R] = V[32][a.R],
                                V[32][a.R] = n,
                                n = b.i,
                                b.i = a.i,
                                a.i = n,
                                n = b.u,
                                b.u = a.u,
                                a.u = n,
                                n = b.c,
                                b.c = a.c,
                                a.c = n,
                                n = b.h,
                                b.h = a.h,
                                a.h = n,
                                n = b.$,
                                b.$ = a.$,
                                a.$ = n,
                                n = b.ia,
                                b.ia = a.ia,
                                a.ia = n,
                                n = b.aa,
                                b.aa = a.aa,
                                a.aa = n,
                                f.push(b = a);
                            R.Pa(0, 80, f);
                            b = !0
                        } else
                            b = !1;
                    b && (l = k = p,
                    ac.K(p))
                }
            } else if ("BUTTON" == a.tagName)
                h(a.disabled ? null : a);
            else if (a == $b.v.canvas)
                h(a);
            else if (a.parentNode && a.parentNode == v.b)
                h(("SELECT" == a.tagName ? a.previousSibling : a).firstChild);
            else {
                if (!A.Za()) {
                    if (m & 2) {
                        g = N[4];
                        var w = U[4] >> 1;
                        for (a = 0; (p = R[1024 | a]) && !(p.u && p.I - g <= b && b < p.I + N[4] && p.J - w <= c && c < p.J + U[4] + T[4]); ++a)
                            ;
                    } else
                        for (a = 0; (p = R[1024 | a]) && !(p.I <= b && b < p.I + N[4] && p.J <= c && c < p.J + U[4] + T[4]); ++a)
                            ;
                    p && n && n.preventDefault()
                }
                m &= -9;
                if (!p && f) {
                    if (b / t < S.b.offsetLeft + S[1].offsetLeft && S.b.offsetTop + S[1].offsetTop < c / t && c / t < S.b.offsetTop + S[1].offsetTop + S[1].offsetHeight)
                        p = R[1025];
                    else if (S.b.offsetLeft + S[12].offsetLeft + S[12].offsetWidth < b / t && S.b.offsetTop + S[12].offsetTop < c / t && c / t < S.b.offsetTop + S[12].offsetTop + S[12].offsetHeight)
                        p = R[1036];
                    else if (C.b && !C.b.style.display && Z.ok)
                        p = Z.ok;
                    else if (!v[2360326].parentNode.style.visibility && !v[2360326].parentNode.style.display)
                        p = v[2360326];
                    else if (1 == H.a || 4 == H.a)
                        p = d();
                    p && (m |= 8)
                }
                h(p)
            }
        }
        var p = {
            A: 1,
            IMG: 1,
            INPUT: 1,
            SELECT: 1,
            OPTION: 1,
            LABEL: 1,
            TEXTAREA: 1
        }, l, k, m = 0, x, E, w, B, y;
        za(r, {
            touchstart: function(b) {
                var c = b.target;
                if (!p[c.tagName] && "fixed-select" != c.parentNode.className) {
                    var d = b.changedTouches;
                    if (1 != d.length)
                        h();
                    else if (C.b && !c.name && "scroll" != c.style.overflowY && C.b.firstChild.contains(c))
                        h(),
                        l || -1 == H.ka || (C.b.style.visibility = "hidden");
                    else {
                        x = Date.now();
                        E = d[0].pageX;
                        w = d[0].pageY;
                        var d = E - Tb.offsetLeft - Q.v.canvas.offsetLeft
                          , g = w - Jb;
                        "BUTTON" == c.tagName || c.parentNode != S.b || S[20].style.display || S.Hb(c.offsetLeft + c.offsetWidth / 2);
                        m |= 2;
                        n(c, d, g, !A.Za(), !1, b);
                        l && l != $b.v.canvas && l.style && ~m & 8 && (m |= 4);
                        v.a & 126976 && !v.b.contains(c) || (l == v[1574917] && wc.set(f, !1),
                        l == v[1574918] && wc.set(a, !1))
                    }
                }
            },
            touchmove: function(a) {
                if (l instanceof gc) {
                    var b = a.touches;
                    1 == b.length && (Math.abs(b[0].pageX - E) < 10 * t || n(a.target, b[0].pageX - Tb.offsetLeft - Q.v.canvas.offsetLeft, R[81] / t + 1, !1, !0))
                }
            },
            touchend: function(a) {
                wc.set();
                var b = a.target;
                p[b.tagName] || !b.parentNode || p[b.parentNode.tagName] || "fixed-select" == b.parentNode.className || (A.Za() || a.preventDefault(),
                C.b && "hidden" == C.b.style.visibility ? C.b.style.visibility = "" : (a = a.changedTouches,
                1 == a.length && (g(!0, Math.abs(a[0].pageX - E) < 10 * t && Math.abs(a[0].pageY - w) < 10 * t && 1E3 > Date.now() - x),
                v.a & 126976 && !v.b.contains(b) && v.X(126976))))
            },
            touchcancel: function() {
                wc.set()
            },
            mousemove: function(a) {
                var b = a.target;
                if (void 0 !== a.buttons ? 2 != a.buttons : 3 != a.which) {
                    B = a.pageX;
                    y = a.pageY;
                    var c = B - Tb.offsetLeft - Q.v.canvas.offsetLeft
                      , d = y - Jb;
                    m &= -3;
                    n(b, c, d, !1, void 0 !== a.buttons ? 1 == a.buttons : 1 == a.which)
                }
            },
            mousedown: function(b) {
                var c = b.target;
                p[c.tagName] || !c.parentNode || p[c.parentNode.tagName] || "fixed-select" == c.parentNode.className || (C.b && !c.name && "scroll" != c.style.overflowY && C.b.firstChild.contains(c) ? l || -1 == H.ka || (C.b.style.visibility = "hidden") : (x = Date.now(),
                E = b.pageX,
                w = b.pageY,
                (void 0 !== b.buttons ? 2 != b.buttons : 3 != b.which) || 1 != H.a && 4 != H.a ? n(c, E - Tb.offsetLeft - Q.v.canvas.offsetLeft, w - Jb, !1) : n(Tb, 0, 0, !A.Za()),
                g(!1, !0),
                3 != H.a || v.a & 126976 && !v.b.contains(c) || A.Za() || l || wc.set((void 0 !== b.buttons ? 2 == b.buttons : 3 == b.which) ? a : f, !0)))
            },
            mouseup: function(a) {
                wc.set();
                var b = a.target;
                !p[b.tagName] && b.parentNode && "dropdown" != b.parentNode.className && (C.b && "hidden" == C.b.style.visibility ? C.b.style.visibility = "" : (g(!0, Math.abs(a.pageX - E) < 10 * t && Math.abs(a.pageY - w) < 10 * t && 1E3 > Date.now() - x),
                v.a & 126976 && !v.b.contains(b) && v.X(126976)))
            }
        });
        return {
            Ra: function() {
                if (!(l instanceof gc)) {
                    var a = ab.elementFromPoint(~~(B - r.pageXOffset), ~~(y - r.pageYOffset));
                    a && n(a, B - Tb.offsetLeft - Q.v.canvas.offsetLeft, y - Jb, !1)
                }
            }
        }
    }();
    xa(r, "touchstart", function(a) {
        this.removeEventListener(a.type, arguments.callee, !1);
        delete nc.Ra
    });
    xa(r, "keypress", function(a) {
        switch (a.keyCode) {
        case 84:
            if (3 == H.a) {
                a = yb.Ja();
                var f = {
                    comment: "【牌譜URL https://tenhou.net/0/?log=" + u.log + "&tw=" + ~~u.tw + "】\n\n",
                    seed: a.seed,
                    oya: a.oya,
                    ten: a.ten
                };
                f.hai0 = Bb(a.hai0);
                for (var d = 0; 4 > d; ++d)
                    a["m" + d] && (f["m" + d] = "" + a["m" + d]),
                    a["kawa" + d] && (f["kawa" + d] = Bb(a["kawa" + d]));
                r.open("?training=" + encodeURIComponent(JSON.stringify(f)))
            }
        }
    });
    var Pc = "onwheel"in ab ? "wheel" : "onmousewheel"in ab ? "mousewheel" : "DOMMouseScroll";
    xa(ab, Pc, function(a) {
        3 != H.a || A.Za() || (a.preventDefault(),
        v.ja(0 > (a.deltaY ? -a.deltaY : a.wheelDelta ? a.wheelDelta : -a.detail) ? 1574917 : 1574918))
    });
    (function() {
        var a;
        xa(r, "touchstart", function(f) {
            var d = f.target;
            "A" != d.tagName || "auto" != d.parentNode.style.overflowY && "scroll" != d.parentNode.parentNode.style.overflowY || (a = f.touches[0].screenY)
        });
        xa(r, "touchmove", function(f) {
            var d = f.target;
            "A" == d.tagName && ("auto" == d.parentNode.style.overflowY && 0 == d.parentNode.scrollTop || "scroll" == d.parentNode.parentNode.style.overflowY && 0 == d.parentNode.parentNode.scrollTop) && a <= f.touches[0].screenY && f.preventDefault()
        });
        xa(ab, Pc, function(a) {
            var d = a.target
              , b = a.deltaY ? -a.deltaY : a.wheelDelta ? a.wheelDelta : -a.detail;
            "A" == d.tagName && ("auto" == d.parentNode.style.overflowY && 0 == d.parentNode.scrollTop || "scroll" == d.parentNode.parentNode.style.overflowY && 0 == d.parentNode.parentNode.scrollTop) && 0 < b && a.preventDefault()
        })
    }
    )();
    db.oncontextmenu = function(a) {
        if (a.target) {
            a = a.target;
            if ("A" != a.tagName && "INPUT" != a.tagName && "TEXTAREA" != a.tagName)
                return !1;
            if (jb && a.href)
                return r.prompt("Anchor URL as TEXT", a.href),
                !1
        }
    }
    ;
    var Nc = function() {
        var a = [-2147483648, 8388608, 32768, 128]
          , f = [1116352408, 3609767458, 1899447441, 602891725, 3049323471, 3964484399, 3921009573, 2173295548, 961987163, 4081628472, 1508970993, 3053834265, 2453635748, 2937671579, 2870763221, 3664609560, 3624381080, 2734883394, 310598401, 1164996542, 607225278, 1323610764, 1426881987, 3590304994, 1925078388, 4068182383, 2162078206, 991336113, 2614888103, 633803317, 3248222580, 3479774868, 3835390401, 2666613458, 4022224774, 944711139, 264347078, 2341262773, 604807628, 2007800933, 770255983, 1495990901, 1249150122, 1856431235, 1555081692, 3175218132, 1996064986, 2198950837, 2554220882, 3999719339, 2821834349, 766784016, 2952996808, 2566594879, 3210313671, 3203337956, 3336571891, 1034457026, 3584528711, 2466948901, 113926993, 3758326383, 338241895, 168717936, 666307205, 1188179964, 773529912, 1546045734, 1294757372, 1522805485, 1396182291, 2643833823, 1695183700, 2343527390, 1986661051, 1014477480, 2177026350, 1206759142, 2456956037, 344077627, 2730485921, 1290863460, 2820302411, 3158454273, 3259730800, 3505952657, 3345764771, 106217008, 3516065817, 3606008344, 3600352804, 1432725776, 4094571909, 1467031594, 275423344, 851169720, 430227734, 3100823752, 506948616, 1363258195, 659060556, 3750685593, 883997877, 3785050280, 958139571, 3318307427, 1322822218, 3812723403, 1537002063, 2003034995, 1747873779, 3602036899, 1955562222, 1575990012, 2024104815, 1125592928, 2227730452, 2716904306, 2361852424, 442776044, 2428436474, 593698344, 2756734187, 3733110249, 3204031479, 2999351573, 3329325298, 3815920427, 3391569614, 3928383900, 3515267271, 566280711, 3940187606, 3454069534, 4118630271, 4000239992, 116418474, 1914138554, 174292421, 2731055270, 289380356, 3203993006, 460393269, 320620315, 685471733, 587496836, 852142971, 1086792851, 1017036298, 365543100, 1126000580, 2618297676, 1288033470, 3409855158, 1501505948, 4234509866, 1607167915, 987167468, 1816402316, 1246189591]
          , d = [];
        return function(b) {
            var h, c, g, n, p, l, k, m, x, E, w, B, y, J, D, ca, pa, $a = !1, O, Ea = 0, kb = 0, Fb = 0, Va = b.length, Fa, Ga, P, F, L, G, Gb, Hb, ub, vb, bb, cb, X, Y, ea, fa, Sa;
            h = 1779033703;
            c = 4089235720;
            g = 3144134277;
            n = 2227873595;
            p = 1013904242;
            l = 4271175723;
            k = 2773480762;
            m = 1595750129;
            x = 1359893119;
            E = 2917565137;
            w = 2600822924;
            B = 725511199;
            y = 528734635;
            J = 4215389547;
            D = 1541459225;
            ca = 327033209;
            pa = 0;
            do {
                d[0] = pa;
                d[1] = d[2] = d[3] = d[4] = d[5] = d[6] = d[7] = d[8] = d[9] = d[10] = d[11] = d[12] = d[13] = d[14] = d[15] = d[16] = d[17] = d[18] = d[19] = d[20] = d[21] = d[22] = d[23] = d[24] = d[25] = d[26] = d[27] = d[28] = d[29] = d[30] = d[31] = d[32] = 0;
                for (O = kb; Ea < Va && 128 > O; ++Ea)
                    d[O >> 2] |= b[Ea],
                    O += 4;
                Fb += O - kb;
                kb = O - 128;
                Ea == Va && (d[O >> 2] |= a[O & 3],
                ++Ea);
                pa = d[32];
                Ea > Va && 112 > O && (d[31] = Fb << 3,
                $a = !0);
                for (O = 32; 160 > O; O += 2)
                    X = d[O - 30],
                    Y = d[O - 29],
                    Fa = (X >>> 1 | Y << 31) ^ (X >>> 8 | Y << 24) ^ X >>> 7,
                    Ga = (Y >>> 1 | X << 31) ^ (Y >>> 8 | X << 24) ^ (Y >>> 7 | X << 25),
                    X = d[O - 4],
                    Y = d[O - 3],
                    P = (X >>> 19 | Y << 13) ^ (Y >>> 29 | X << 3) ^ X >>> 6,
                    F = (Y >>> 19 | X << 13) ^ (X >>> 29 | Y << 3) ^ (Y >>> 6 | X << 26),
                    X = d[O - 32],
                    Y = d[O - 31],
                    ea = d[O - 14],
                    fa = d[O - 13],
                    L = (fa & 65535) + (Y & 65535) + (Ga & 65535) + (F & 65535),
                    F = (fa >>> 16) + (Y >>> 16) + (Ga >>> 16) + (F >>> 16) + (L >>> 16),
                    G = (ea & 65535) + (X & 65535) + (Fa & 65535) + (P & 65535) + (F >>> 16),
                    P = (ea >>> 16) + (X >>> 16) + (Fa >>> 16) + (P >>> 16) + (G >>> 16),
                    d[O] = P << 16 | G & 65535,
                    d[O + 1] = F << 16 | L & 65535;
                var va = h
                  , wa = c
                  , ua = g
                  , ra = n
                  , qa = p
                  , ya = l
                  , Ha = k
                  , Ia = m
                  , Ja = x
                  , Ka = E
                  , La = w
                  , Ma = B
                  , Na = y
                  , Oa = J
                  , Pa = D
                  , Qa = ca;
                ub = ua & qa;
                vb = ra & ya;
                for (O = 0; 160 > O; O += 8)
                    Fa = (va >>> 28 | wa << 4) ^ (wa >>> 2 | va << 30) ^ (wa >>> 7 | va << 25),
                    Ga = (wa >>> 28 | va << 4) ^ (va >>> 2 | wa << 30) ^ (va >>> 7 | wa << 25),
                    P = (Ja >>> 14 | Ka << 18) ^ (Ja >>> 18 | Ka << 14) ^ (Ka >>> 9 | Ja << 23),
                    F = (Ka >>> 14 | Ja << 18) ^ (Ka >>> 18 | Ja << 14) ^ (Ja >>> 9 | Ka << 23),
                    Gb = va & ua,
                    Hb = wa & ra,
                    bb = Gb ^ va & qa ^ ub,
                    cb = Hb ^ wa & ya ^ vb,
                    Sa = Ja & La ^ ~Ja & Na,
                    G = Ka & Ma ^ ~Ka & Oa,
                    X = d[O],
                    Y = d[O + 1],
                    ea = f[O],
                    fa = f[O + 1],
                    L = (fa & 65535) + (Y & 65535) + (G & 65535) + (F & 65535) + (Qa & 65535),
                    F = (fa >>> 16) + (Y >>> 16) + (G >>> 16) + (F >>> 16) + (Qa >>> 16) + (L >>> 16),
                    G = (ea & 65535) + (X & 65535) + (Sa & 65535) + (P & 65535) + (Pa & 65535) + (F >>> 16),
                    P = (ea >>> 16) + (X >>> 16) + (Sa >>> 16) + (P >>> 16) + (Pa >>> 16) + (G >>> 16),
                    X = P << 16 | G & 65535,
                    Y = F << 16 | L & 65535,
                    L = (cb & 65535) + (Ga & 65535),
                    F = (cb >>> 16) + (Ga >>> 16) + (L >>> 16),
                    G = (bb & 65535) + (Fa & 65535) + (F >>> 16),
                    P = (bb >>> 16) + (Fa >>> 16) + (G >>> 16),
                    ea = P << 16 | G & 65535,
                    fa = F << 16 | L & 65535,
                    L = (Ia & 65535) + (Y & 65535),
                    F = (Ia >>> 16) + (Y >>> 16) + (L >>> 16),
                    G = (Ha & 65535) + (X & 65535) + (F >>> 16),
                    P = (Ha >>> 16) + (X >>> 16) + (G >>> 16),
                    Pa = P << 16 | G & 65535,
                    Qa = F << 16 | L & 65535,
                    L = (fa & 65535) + (Y & 65535),
                    F = (fa >>> 16) + (Y >>> 16) + (L >>> 16),
                    G = (ea & 65535) + (X & 65535) + (F >>> 16),
                    P = (ea >>> 16) + (X >>> 16) + (G >>> 16),
                    Ha = P << 16 | G & 65535,
                    Ia = F << 16 | L & 65535,
                    Fa = (Ha >>> 28 | Ia << 4) ^ (Ia >>> 2 | Ha << 30) ^ (Ia >>> 7 | Ha << 25),
                    Ga = (Ia >>> 28 | Ha << 4) ^ (Ha >>> 2 | Ia << 30) ^ (Ha >>> 7 | Ia << 25),
                    P = (Pa >>> 14 | Qa << 18) ^ (Pa >>> 18 | Qa << 14) ^ (Qa >>> 9 | Pa << 23),
                    F = (Qa >>> 14 | Pa << 18) ^ (Qa >>> 18 | Pa << 14) ^ (Pa >>> 9 | Qa << 23),
                    ub = Ha & va,
                    vb = Ia & wa,
                    bb = ub ^ Ha & ua ^ Gb,
                    cb = vb ^ Ia & ra ^ Hb,
                    Sa = Pa & Ja ^ ~Pa & La,
                    G = Qa & Ka ^ ~Qa & Ma,
                    X = d[O + 2],
                    Y = d[O + 3],
                    ea = f[O + 2],
                    fa = f[O + 3],
                    L = (fa & 65535) + (Y & 65535) + (G & 65535) + (F & 65535) + (Oa & 65535),
                    F = (fa >>> 16) + (Y >>> 16) + (G >>> 16) + (F >>> 16) + (Oa >>> 16) + (L >>> 16),
                    G = (ea & 65535) + (X & 65535) + (Sa & 65535) + (P & 65535) + (Na & 65535) + (F >>> 16),
                    P = (ea >>> 16) + (X >>> 16) + (Sa >>> 16) + (P >>> 16) + (Na >>> 16) + (G >>> 16),
                    X = P << 16 | G & 65535,
                    Y = F << 16 | L & 65535,
                    L = (cb & 65535) + (Ga & 65535),
                    F = (cb >>> 16) + (Ga >>> 16) + (L >>> 16),
                    G = (bb & 65535) + (Fa & 65535) + (F >>> 16),
                    P = (bb >>> 16) + (Fa >>> 16) + (G >>> 16),
                    ea = P << 16 | G & 65535,
                    fa = F << 16 | L & 65535,
                    L = (ya & 65535) + (Y & 65535),
                    F = (ya >>> 16) + (Y >>> 16) + (L >>> 16),
                    G = (qa & 65535) + (X & 65535) + (F >>> 16),
                    P = (qa >>> 16) + (X >>> 16) + (G >>> 16),
                    Na = P << 16 | G & 65535,
                    Oa = F << 16 | L & 65535,
                    L = (fa & 65535) + (Y & 65535),
                    F = (fa >>> 16) + (Y >>> 16) + (L >>> 16),
                    G = (ea & 65535) + (X & 65535) + (F >>> 16),
                    P = (ea >>> 16) + (X >>> 16) + (G >>> 16),
                    qa = P << 16 | G & 65535,
                    ya = F << 16 | L & 65535,
                    Fa = (qa >>> 28 | ya << 4) ^ (ya >>> 2 | qa << 30) ^ (ya >>> 7 | qa << 25),
                    Ga = (ya >>> 28 | qa << 4) ^ (qa >>> 2 | ya << 30) ^ (qa >>> 7 | ya << 25),
                    P = (Na >>> 14 | Oa << 18) ^ (Na >>> 18 | Oa << 14) ^ (Oa >>> 9 | Na << 23),
                    F = (Oa >>> 14 | Na << 18) ^ (Oa >>> 18 | Na << 14) ^ (Na >>> 9 | Oa << 23),
                    Gb = qa & Ha,
                    Hb = ya & Ia,
                    bb = Gb ^ qa & va ^ ub,
                    cb = Hb ^ ya & wa ^ vb,
                    Sa = Na & Pa ^ ~Na & Ja,
                    G = Oa & Qa ^ ~Oa & Ka,
                    X = d[O + 4],
                    Y = d[O + 5],
                    ea = f[O + 4],
                    fa = f[O + 5],
                    L = (fa & 65535) + (Y & 65535) + (G & 65535) + (F & 65535) + (Ma & 65535),
                    F = (fa >>> 16) + (Y >>> 16) + (G >>> 16) + (F >>> 16) + (Ma >>> 16) + (L >>> 16),
                    G = (ea & 65535) + (X & 65535) + (Sa & 65535) + (P & 65535) + (La & 65535) + (F >>> 16),
                    P = (ea >>> 16) + (X >>> 16) + (Sa >>> 16) + (P >>> 16) + (La >>> 16) + (G >>> 16),
                    X = P << 16 | G & 65535,
                    Y = F << 16 | L & 65535,
                    L = (cb & 65535) + (Ga & 65535),
                    F = (cb >>> 16) + (Ga >>> 16) + (L >>> 16),
                    G = (bb & 65535) + (Fa & 65535) + (F >>> 16),
                    P = (bb >>> 16) + (Fa >>> 16) + (G >>> 16),
                    ea = P << 16 | G & 65535,
                    fa = F << 16 | L & 65535,
                    L = (ra & 65535) + (Y & 65535),
                    F = (ra >>> 16) + (Y >>> 16) + (L >>> 16),
                    G = (ua & 65535) + (X & 65535) + (F >>> 16),
                    P = (ua >>> 16) + (X >>> 16) + (G >>> 16),
                    La = P << 16 | G & 65535,
                    Ma = F << 16 | L & 65535,
                    L = (fa & 65535) + (Y & 65535),
                    F = (fa >>> 16) + (Y >>> 16) + (L >>> 16),
                    G = (ea & 65535) + (X & 65535) + (F >>> 16),
                    P = (ea >>> 16) + (X >>> 16) + (G >>> 16),
                    ua = P << 16 | G & 65535,
                    ra = F << 16 | L & 65535,
                    Fa = (ua >>> 28 | ra << 4) ^ (ra >>> 2 | ua << 30) ^ (ra >>> 7 | ua << 25),
                    Ga = (ra >>> 28 | ua << 4) ^ (ua >>> 2 | ra << 30) ^ (ua >>> 7 | ra << 25),
                    P = (La >>> 14 | Ma << 18) ^ (La >>> 18 | Ma << 14) ^ (Ma >>> 9 | La << 23),
                    F = (Ma >>> 14 | La << 18) ^ (Ma >>> 18 | La << 14) ^ (La >>> 9 | Ma << 23),
                    ub = ua & qa,
                    vb = ra & ya,
                    bb = ub ^ ua & Ha ^ Gb,
                    cb = vb ^ ra & Ia ^ Hb,
                    Sa = La & Na ^ ~La & Pa,
                    G = Ma & Oa ^ ~Ma & Qa,
                    X = d[O + 6],
                    Y = d[O + 7],
                    ea = f[O + 6],
                    fa = f[O + 7],
                    L = (fa & 65535) + (Y & 65535) + (G & 65535) + (F & 65535) + (Ka & 65535),
                    F = (fa >>> 16) + (Y >>> 16) + (G >>> 16) + (F >>> 16) + (Ka >>> 16) + (L >>> 16),
                    G = (ea & 65535) + (X & 65535) + (Sa & 65535) + (P & 65535) + (Ja & 65535) + (F >>> 16),
                    P = (ea >>> 16) + (X >>> 16) + (Sa >>> 16) + (P >>> 16) + (Ja >>> 16) + (G >>> 16),
                    X = P << 16 | G & 65535,
                    Y = F << 16 | L & 65535,
                    L = (cb & 65535) + (Ga & 65535),
                    F = (cb >>> 16) + (Ga >>> 16) + (L >>> 16),
                    G = (bb & 65535) + (Fa & 65535) + (F >>> 16),
                    P = (bb >>> 16) + (Fa >>> 16) + (G >>> 16),
                    ea = P << 16 | G & 65535,
                    fa = F << 16 | L & 65535,
                    L = (wa & 65535) + (Y & 65535),
                    F = (wa >>> 16) + (Y >>> 16) + (L >>> 16),
                    G = (va & 65535) + (X & 65535) + (F >>> 16),
                    P = (va >>> 16) + (X >>> 16) + (G >>> 16),
                    Ja = P << 16 | G & 65535,
                    Ka = F << 16 | L & 65535,
                    L = (fa & 65535) + (Y & 65535),
                    F = (fa >>> 16) + (Y >>> 16) + (L >>> 16),
                    G = (ea & 65535) + (X & 65535) + (F >>> 16),
                    P = (ea >>> 16) + (X >>> 16) + (G >>> 16),
                    va = P << 16 | G & 65535,
                    wa = F << 16 | L & 65535;
                L = (c & 65535) + (wa & 65535);
                F = (c >>> 16) + (wa >>> 16) + (L >>> 16);
                G = (h & 65535) + (va & 65535) + (F >>> 16);
                P = (h >>> 16) + (va >>> 16) + (G >>> 16);
                h = P << 16 | G & 65535;
                c = F << 16 | L & 65535;
                L = (n & 65535) + (ra & 65535);
                F = (n >>> 16) + (ra >>> 16) + (L >>> 16);
                G = (g & 65535) + (ua & 65535) + (F >>> 16);
                P = (g >>> 16) + (ua >>> 16) + (G >>> 16);
                g = P << 16 | G & 65535;
                n = F << 16 | L & 65535;
                L = (l & 65535) + (ya & 65535);
                F = (l >>> 16) + (ya >>> 16) + (L >>> 16);
                G = (p & 65535) + (qa & 65535) + (F >>> 16);
                P = (p >>> 16) + (qa >>> 16) + (G >>> 16);
                p = P << 16 | G & 65535;
                l = F << 16 | L & 65535;
                L = (m & 65535) + (Ia & 65535);
                F = (m >>> 16) + (Ia >>> 16) + (L >>> 16);
                G = (k & 65535) + (Ha & 65535) + (F >>> 16);
                P = (k >>> 16) + (Ha >>> 16) + (G >>> 16);
                k = P << 16 | G & 65535;
                m = F << 16 | L & 65535;
                L = (E & 65535) + (Ka & 65535);
                F = (E >>> 16) + (Ka >>> 16) + (L >>> 16);
                G = (x & 65535) + (Ja & 65535) + (F >>> 16);
                P = (x >>> 16) + (Ja >>> 16) + (G >>> 16);
                x = P << 16 | G & 65535;
                E = F << 16 | L & 65535;
                L = (B & 65535) + (Ma & 65535);
                F = (B >>> 16) + (Ma >>> 16) + (L >>> 16);
                G = (w & 65535) + (La & 65535) + (F >>> 16);
                P = (w >>> 16) + (La >>> 16) + (G >>> 16);
                w = P << 16 | G & 65535;
                B = F << 16 | L & 65535;
                L = (J & 65535) + (Oa & 65535);
                F = (J >>> 16) + (Oa >>> 16) + (L >>> 16);
                G = (y & 65535) + (Na & 65535) + (F >>> 16);
                P = (y >>> 16) + (Na >>> 16) + (G >>> 16);
                y = P << 16 | G & 65535;
                J = F << 16 | L & 65535;
                L = (ca & 65535) + (Qa & 65535);
                F = (ca >>> 16) + (Qa >>> 16) + (L >>> 16);
                G = (D & 65535) + (Pa & 65535) + (F >>> 16);
                P = (D >>> 16) + (Pa >>> 16) + (G >>> 16);
                D = P << 16 | G & 65535;
                ca = F << 16 | L & 65535
            } while (!$a);return [h, c, g, n, p, l, k, m, x, E, w, B, y, J, D, ca]
        }
    }();
    var W = function() {
        function a(a) {
            b && (b.close(),
            b = null);
            r.WebSocket && (b = za(new WebSocket("HK" == I.server ? "wss://p-hk.mjv.jp" : "wss://p.mjv.jp"), {
                error: function(a) {
                    console.log("ws:onerror", a)
                },
                open: function() {
                    this.send(JSON.stringify(a))
                },
                message: function(a) {
                    var req = new XMLHttpRequest();
                    req.open("POST", "http://localhost:12121/");
                    req.send(a.data);
                    try {
                        var b = JSON.parse(a.data)
                    } catch (n) {}
                    2 == H.a && zb.tb(u.tw, b);
                    yb.mb(b);
                    1 == H.a && "D" == b.tag || W.qa(b)
                },
                close: function() {
                    this == b && (d = [],
                    A.l('CONNECTION CLOSED<br>再接続しますか？<hr><small>Wi-Fi(無線LAN)やbluetoothは電子レンジや近隣利用者の影響を受け接続が切れる場合があります。"設定"から国際高速回線が使用できる場合があります。International high-speed connection(回線) may be available from 設定(Config).</small><hr>', 3, function() {
                        location.reload()
                    }))
                }
            }))
        }
        function f() {
            if (d.length)
                if (d[0][6])
                    qb("RUNNING", d[0]);
                else {
                    var a = d[0];
                    d[0][6] = 1;
                    H[a.tag](a) && W.Ea()
                }
        }
        var d = [], b;
        setInterval(function() {
            b && 1 == b.readyState && (b.send("<Z/>"),
            W.Na && b.send('<PXR v="' + W.Na + '" />'))
        }, 1E4);
        return {
            Na: 0,
            qa: function(a) {
                d.push(a);
                1 == d.length && f()
            },
            L: function(d) {
                b ? (0 == b.readyState && console.log("ws.readyState=" + b.readyState, d),
                b.send(d.tag ? JSON.stringify(d) : d)) : "HELO" == d.tag && setTimeout(function() {
                    a(d)
                }, 1)
            },
            Y: function() {
                b && (b.close(),
                b = null)
            },
            nc: function() {
                b && xa(b, "close", function() {
                    setTimeout(function() {
                        C.l({
                            tag: "AUTOLOGIN"
                        })
                    }, 1E4)
                });
                W.Y()
            },
            pb: function() {
                for (b && 1 == b.readyState && b.send("<BYE/>"); d.length; d.shift())
                    delete d[0][6]
            },
            Ea: function() {
                d.length && (delete d[0][6],
                d.shift(),
                f())
            }
        }
    }();
    r.handleOpenURL = function(a) {
        a = a.split("?")[1];
        location.href = a ? "?" + a : "index.html"
    }
    ;
    r.top !== r && (location.href = "https://tenhou.net/0/" + location.search);
    var Qc = I.lastreload
      , Rc = Date.now();
    Qc ? 36E5 < Rc - Qc ? (I.lastreload = Rc,
    location.reload()) : Nb() : (I.lastreload = Rc,
    Nb());
}
)();
//

