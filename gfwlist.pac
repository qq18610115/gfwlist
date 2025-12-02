var proxy = 'SOCKS5 192.168.10.2:1080; SOCKS 192.168.10.2:1080; DIRECT;';
var rules = [
    [
        [],
        []
    ],
    [
        [
            "aftygh.gov.tw",
            "aide.gov.tw",
            "aliyun.com",
            "arte.gov.tw",
            "baidu.com",
            "chinaso.com",
            "chinaz.com",
            "chukuang.gov.tw",
            "clientservices.googleapis.com",
            "cycab.gov.tw",
            "dbnsa.gov.tw",
            "df.gov.tw",
            "eastcoast-nsa.gov.tw",
            "erv-nsa.gov.tw",
            "fonts.googleapis.com",
            "gettyimages.cn",
            "gettyimages.com",
            "google.cn",
            "gov.cn",
            "grb.gov.tw",
            "haosou.com",
            "haygo.com",
            "hchcc.gov.tw",
            "hsinchu-cc.gov.tw",
            "iner.gov.tw",
            "ip.cn",
            "jike.com",
            "jpush.cn",
            "klsio.gov.tw",
            "kmseh.gov.tw",
            "locql.com",
            "lungtanhr.gov.tw",
            "maolin-nsa.gov.tw",
            "matsu-news.gov.tw",
            "matsu-nsa.gov.tw",
            "matsucc.gov.tw",
            "moe.gov.tw",
            "nankan.gov.tw",
            "ncree.gov.tw",
            "necoast-nsa.gov.tw",
            "ner.gov.tw",
            "nmmba.gov.tw",
            "nmp.gov.tw",
            "nmvttc.gov.tw",
            "northguan-nsa.gov.tw",
            "nstm.gov.tw",
            "ntdmh.gov.tw",
            "ntl.gov.tw",
            "ntsec.gov.tw",
            "ntuh.gov.tw",
            "nvri.gov.tw",
            "nyc.gov.tw",
            "penghu-nsa.gov.tw",
            "pinterest.cn",
            "post.gov.tw",
            "qq.com",
            "safebrowsing.googleapis.com",
            "sina.cn",
            "sina.com.cn",
            "siraya-nsa.gov.tw",
            "sl-reverse.com",
            "so.com",
            "sogou.com",
            "soso.com",
            "stdtime.gov.tw",
            "sunmoonlake.gov.tw",
            "syniumsoftware.com",
            "taitung-house.gov.tw",
            "taoyuan.gov.tw",
            "tphcc.gov.tw",
            "trimt-nsa.gov.tw",
            "uluai.com.cn",
            "update.googleapis.com",
            "vghks.gov.tw",
            "vghtc.gov.tw",
            "vghtpe.gov.tw",
            "wallproxy.com.cn",
            "wanfang.gov.tw",
            "weibo.com",
            "yahoo.cn",
            "yatsen.gov.tw",
            "yda.gov.tw",
            "youdao.com",
            "zhongsou.com"
        ],
        [
            "000webhost.com",
            "030buy.com",
            "0rz.tw",
            "1-apple.com.tw",
            "1000giri.net",
            "10beasts.net",
            "zzcloud.me",
            "zzux.com"
        ]
    ]
];
var lastRule = '';
function FindProxyForURL(url, host) {
    for (var i = 0; i < rules.length; i++) {
        ret = testHost(host, i);
        if (ret != undefined)
            return ret;
    }
    return 'DIRECT';
}
function testHost(host, index) {
    for (var i = 0; i < rules[index].length; i++) {
        for (var j = 0; j < rules[index][i].length; j++) {
            lastRule = rules[index][i][j]
            if (host == lastRule || host.endsWith('.' + lastRule))
                return i % 2 == 0 ? 'DIRECT' : proxy;
        }
    }
    lastRule = '';
}
if (!String.prototype.endsWith) {
    String.prototype.endsWith = function(searchString, position) {
        var subjectString = this.toString();
        if (typeof position !== 'number' || !isFinite(position) || Math.floor(position) !== position || position > subjectString.length) {
            position = subjectString.length;
        }
        position -= searchString.length;
        var lastIndex = subjectString.indexOf(searchString, position);
        return lastIndex !== -1 && lastIndex === position;
    };
}