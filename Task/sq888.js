const jobname = 'shuqi'
const $ = Env(jobname)


!(async () => {
    await all();
})()
    .catch((e) => {
        $.log('', `❌ ${$.name}, 失败! 原因: ${e}!`, '')
    })
    .finally(() => {
        $.done();
    })

async function all() {
//nodejs运行
//任务顺序
//签到，视频426，分享
//极速版签到，书城，分享，阅读，收取
    
    await dailysign();
    await $.wait(1000);

    for (let i = 0; i < 10; i++) {
        await videoreward426();
        await $.wait(1000);
    }

    await $.wait(1000);
    await share();

    await $.wait(1000);
    await jsdailysign();

    await $.wait(1000);
    await jsshucheng();

    await $.wait(1000);
    await jsshare();

    await $.wait(1000);
    await jsread()

    await $.wait(1000);
    await receive();


}




//普通版签到
function dailysign() {
    return new Promise((resolve, reject) => {
         const url = "https://ocean.shuqireader.com/api/activity/xapi/signin/v5/signInAction";
        const headers = {
'Connection' : `keep-alive`,
'Accept-Encoding' : `gzip, deflate, br`,
'Content-Type' : `application/x-www-form-urlencoded`,
'x-sq-req-encrypt' : `sdk`,
'Origin' : `https://render-web.shuqireader.com`,
'User-Agent' : `Mozilla/5.0 (iPhone; CPU iPhone OS 14_8 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/18H17 AliApp(shuqi/4.5.1.0) WindVane/8.6.1 Shuqi (iPhone13,2__shuqi__v4.5.1.0) 1170x2532 Winding(WV_3) WK`,
'x-sq-req-platform' : `iOS`,
'Referer' : `https://render-web.shuqireader.com/render/sq-welfare/page/welfare_page_v2/?serviceWorkerOn=1&stopPullRefresh=1&upf=20559&from=ShuqiTab&ustatus=1&contentRecom=1&first_placeid=111111&net_env=wifi&placeid=111111&user_id=2126444763&sqExt=sFdgTamNKMYWAS89f75a%2FqSqyKLI%2B4932XzkCgzkwfhqrD%2FaJKIHLuy%2FURkgi5tztM2ce3HoBd4Ms24k7oNgLIUmsOBvLK72vviGYxssaF2uQ%2BLat0JjHiUPpFeA%2FUElj1%2Bb%2FNA1A2R6wFuQ6QJuCgZtkAdZzFUMKYme4iEg01x%2FGFwwJ7cRs5oESbGk%2FaMEZFQJZON0c90z%2BX12N6RV6rNgekOX1rNPDvddk3DOhaJqfdBUA1llxv4Ib%2BUI8Aznq%2F9N8K3klyUPJ54clbKl4FXnZnmWIypFJFkvBCyAQlG4JzgkWQ%3D%3D&msv=8.0.0&brand=Apple&skinVersionPrefix=1&isTeenMode=0&appVer=4.5.1.0&skinActiveColor=0F9970&manufacturer=Apple&session=eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyMTI2NDQ0NzYzIiwidXRkaWQiOiJZUVZmeEF1dnM1UURBT1dQL0RSQm1BTzgiLCJpbWVpIjoiRjEwMEFGQUMzMUY4RUI1Q0U3QzlDODE4MzUxMkNFQjYwMzgyOEU4RSIsInNuIjoiRTQ0MTQ5QTVERDNCRjIxOUY4MkFFNTA1QUM1MjA3N0M3ODdENUIzMyIsImV4cCI6MTYzMjEyNjkzNCwidXNlcklkIjoiMjEyNjQ0NDc2MyIsImlhdCI6MTYzMTYwODUzNCwib2FpZCI6IiIsInBsYXRmb3JtIjoiaU9TIn0.MG5iiIJUFS0hpDIAF152haCVYiDasvGEAkZ-nGNaTXpbYtRP2WBGMw1l-RZcZtvfNmDqHIb6wBLZ2EJdtOqFLQ&skinColor=23B383&platform=iOS&ver=210909&mod=iPhone12&personalized=1&skinVersion=1&statusBarHeight=44.000000&wh=1170x2532&soft_id=21&utype=vip&skinId=999&sdk=14.8`,
'Host' : `ocean.shuqireader.com`,
'Accept-Language' : `zh-cn`,
'Accept' : `application/json, text/plain, */*`
};
         const body = `data=uBs%2BZPTcd4Z7KXccSPl51ea5y8bB%2F%2F0D2nzpfnvg0eR%2F6xOedeEqdMCuWB1mysMey7qBe2fCKcYxqXsIqIQELJc609FbDr%2F92oiKd3kwRCGKMPDb9TcbQHZqgiqGiAVhgBzL%2FKxITWtM3FfklUstW2Ry13Aiv1Ndco%2FXvVkolj4uYDxXbeNT9flVSOn4tel7C3cNYKVNKc88%2BngLUt4K67FicAqH4osYS9Naw3ignal2a9hmBB13hp08aPAs7BHxodhl3qyV6Wc5JMVA24OQgWDxTXuqH1VxAylVNVffXnSXElISAPSu7JU1xuCJNhmeDVJnHaFBw5L7Z01gaAEOLy%2FzzVVkMFzwYky61cE%2BybNwry6G%2BXCmD0Ft9X%2Ff%2Fo4mv4nWGbYNReHO8EUOZnQmilq6LM%2BgJgmzM5nCrdeXWFh0%2B5QMlTd6NLbHhpiItRQ0cwWEVhIi%2FmAqhi1dRSbw9AavmZIpJaBchvy8b%2BfQpX3b%2FUPhUhhEXJimeVRY%2FZ%2B%2Fm%2BthsuNuoRQwRfNuUEjhyBxOQX43qfl3SVMcxZUVA7BhPgXuQeF6Bd8MOWjgbGz0W67D63FEZlp2lNXVu19nO4x5iau3hkxniTUD9VBCvO0hqzqGTLfJQXdfkkfH%2FVSQhWubVS8H7GnMCmAZvSzxxa7V3P2mu%2FGUpUSCAFiXzvEZdRpRJOtxV%2BCs9AfQ6%2BfLTgnAf7v0SON0QJX%2FP75Xzh5NS%2F2K2mvhR48Vi3%2FU8zFQfNJ6ih2O8FoQs5VLA5F8csvizpQdYix5mgrT%2B%2B484WdqEQJZ4dv4VP4IDpgcCmbbprHpiqSdVNlMKNpeeakTVixmq8z8Lp9%2Ba9B%2FK79q%2FWFcXW0VFTzfKsIN1d4CwOvWlYi020W8F%2Bd6K4eXKWyPmpq5Rs%2F4h0AjlWss%2B8lwXLzdBG%2F4GiT4msJOLA7DhdUwxlpNZsa1QEEA2rkpFhysrK0j3LGD5HjtW%2Bkw7f8%2Fg%2Fc2tmkl7uTO4W14slNueyyRTHEfzxHD77LbMsEDDPrcIGQQecluhZOAr1BvcfP3ElJFItXObuxD%2F4PNw2xPVJD76ANpeKMTudvUGVFkWdzTVFKxc99sl5%2FjK0TDsmGct6AAGNTejI9MD7Zwn604ng3f9biSKyjaBKw7PwjN8FXSS6icYBMwRI0IqiD2%2FiySv4YGnijxHMXcfhQ3iEN%2FWZCU9ERU%2BEoCSIsyzqok9ai8DVJwpw15nGKiJ2CIFbh88AzFOChcmDY%2Bd7i5qlLS5%2B5BeexvfDAAx1MvI1FnsglH5cQ17sChueIcwA880xFyiOR1qx1HsjS95J0MpiYEHjPG1QvgPvnUR2KzaYpkjEARaBUFJ9xsMPQVAoQpW8u%2BcGCwk6wnQaZuE%2BSR1N85g6W4EFevdpw8QwHuGGEAmibh2wuKd8sH%2Bw8hXjFMZaZk8hInIgQ4EDvLebuSuO0lXm8hcHegvRS5FvhI57Y7ChQmVTe0870syZymUxL51bcRebCc8m27P1ku19vtEFjsM1X1ffGDjmYhBOaJrfsLEg%2FhNCCz8aAdLyupoipg0S4CeSZmUYWjRv%2FnCQYEnIpfyUDmvLJbBdiP%2FfSjF12BXkY%2FHqpb1tOZaUpN9Kvft31pNhm0NQJDC0gPvRM4fHbw%2BKt9H2y%2FeYP2L4zK1F%2F9EwWUlTBpxcl2l%2FlE8JrQR5rxJYBXt%2FoNt0Jksy%2FLpOm6AXjcsanxv2EiTOPaLzF3qmH2ftFIpM8x02LwCKMk2NdHCD%2Fev0vGgTHAnmsbWrfDAJmBFuFuWXShJiuJhrfCf%2B5eJDpjl%2FJRxtFoUvW9f9%2FnMaWd6GLd%2F5yXqqyAsKs%2FqUL3sElDFSvBJ46Xnsk9jXddhfsG5jaQecQETsGsEF9I3Cz%2BfbaiKmZf%2FJrueeo4pHvhDCNZdG1HSBqOUoOvBZpjfWSP3hZPiwG9wGp5bhh%2BePimBx8coXi0w7yxplO9m5s9LlZI%2FewrorxIjC5Ab2U4RHL9txQ7NDgrBmGW4zU8Eb%2FN1T95FQArM2%2BbSe0a3PYJrQb5odO8gUSbw9KeBUSlih%2B46VV%2FL3xeGEW%2BrhCKQUKeazfd8xrRgJ1F6kSus11fbNiQMxay4GT4c9mhqJQ8piPdiIHGGh30UO5r0T0LT7HPmFmBiKDGIAdCxIQbXbsePjm5UYmyGb3YfGbzFJH7nsjj5VP%2F5UxDoYG8F0M7HrhtSxVvx5g9dWzGsuOSiRzhMPyiwEPzlXeYYx%2BldXCeemehkD2vV%2BhowLRyvi4GvzqryC%2B%2B33%2FBMAQGM6XNQweLVjl6AQUtLLlhZvwLcq8OD0%2F5vpJpGARIZBsOXo%2BuAzChZmkhxon92f3rF0qrhxl6v9K%2Bxfo5rjkm%2F6hLaurFN6EiEj76CvIMfHvY8Ltrkb9EjVFuOaRHUEFBJsx%2B%2BECGtLsOwEqormuksd540l4y%2B46G3Mu5m2pqCQJ10gtIOe4VO1MSxuyCUINd%2B%2BjMi8OSyGGNe7V0fQZ6oLWVUqCiJmFEn4A9%2FonsTX8K5XUDv41KWrXh9ap8pSr4iVwQb3RHyzvQPlp8JvcW1P9dDJxVJe5fzjEGPvj701r42sxO9m%2FDl5QrEHey`;
        const request = {
            url: url,
            headers: headers,
            body: body
        };

        $.post(request, async (error, response, data) => {
            try {
                $.log(data);
            } catch (e) {
                $.log(e)
            }
            resolve();
        })
    })
}
  
//普通版视频4.2.6
function videoreward426() {
return new Promise((resolve, reject) => {
         const url = "https://api-access.pangolin-sdk-toutiao.com/api/ad/union/sdk/reward_video/reward/";
         const headers = {
    "Accept": "*/*",
    "Accept-Encoding": "gzip, deflate, br",
    "Connection": "keep-alive",
    "Content-Type": "application/json",
    "Host": "api-access.pangolin-sdk-toutiao.com",
    "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148",
    "Content-Length": "4682",
    "Accept-Language": "zh-Hans-CN;q=1, en-CN;q=0.9"
};
         const body = "{\"message\":\"2vVVbKPbLjtcugUFjzueLRQ6axVPjSJ1auPIQPmGMOoNuZ821RQxCZfWHdJHSaYqkFYDInbP76f0Btx82c0GcaFHumsnCUg4p4mMX9ebb1Mjiyac48inVkRoM\\/PMWRHfZ\\/6hikLG2QFS3UHe5PtuGeJ8Tf0M\\/vlK748QWUIkJXwermB1SSaYMI9ZH6BUUqmj5Cnwhbjk+De\\/Oi0zZcLH2IT4oPakwj7Z+1gU0W4nfh8Mt4G++TE+PtTiPPFP1GBKUOEMuUtuKgosftc4A9oGuyGnVlXG0OO7nqXzkrRSLdpQBw5vab5AzqJfg4AE3NqD3STJwGVGH2yW5hWo6g7tR\\/WqagFbvrgMUQhDSijWalPx33YxuT3\\/lZZ7uBZiTJ2M7OgHs6PC6mWzacz4mLQSQkU4SG1sKbtbz28ZDvTqSXxQgRlm+8bfj8QXMeN5NNiS4+Sej5YbM3+tS4LlmIG3ih5LUKjMnXRZ+raWgQGsXo6znlnUMIWzuUwtKo7pEm2G0sdfWwlGhOEBrIDEQiTn9I94cSSVWCjiqGGzes9o+2U\\/Te6n\\/J+W4IQ4G+IcdeoavSxc40V9TYecioiQPxmpJKzXEfGUlTyMpicIfyjTtcRaW\\/zMR7tFKE7oTYTEgxZbzDMB9tUhEGyaFogxcSih41QR7SZtNkdNq2enuBt5CTtKBfxbMOIa\\/gG6bl43Pg8bsVuiUSl1h83VFqNSb4xDaSz025qMPeWwMC7i0OK0eEPj9ScalhCRo1jlsUKIHeZWIDo16gQHVJWgTaIXpehfZl+aCGZ1dwRakwZeFXH7CBSLqpDjvAua21j69wlTFLlWFVWZKtc4Beq8TN53ZFxm8WqdMoUZmDNlWU6\\/LUFkY2GErvidIqHBigD\\/E+\\/cWW5\\/02dQ3IG4r1u0OkfO4rvxElf9UrN37iQQkNiO9W6SiL7V2eRE1M6JliloCZFoaHu0M28J2NtDP4hJy7fRUE7WruHZZFjEyGgaaYM0y\\/1dzz2xrHWTPaNfTSlXOt2CxPVKCrtya8sdNVRFji3H2rIXcMuF\\/3aV40zdGDH3YAu8aP03O8uy\\/sFJ3Z2mcoN74iLEQ5qHjKEsFW0Uw\\/77z0FkIqHG93RNcZffAyI4CVLsuiwXUqfKRyCR8x4DyUD1Zu0\\/ozw9FrwuZ9M6sGvfybgW6xFaz8xnWh8Bt4QyMZut\\/+hans\\/xlGALwbgxwNwQjvEDFGS46o5la5+xitaGobNBykr+l9kzsYN4ODnxDCrnMW82amRlIUdK2xbwTR1wNDy6CijL4r50Gw+M0b+R0qgDkiJiLrOgyTBwDZJ2ZHFj1wi4bO0qlvmC8Naqw0jeRLAEXfkkqbr6M4ENUwdjujifXIZ6BMYqo59QlrguKORrxAhpPadFa3IFLqT+sycMWn1TTmFAleR+GIBmli\\/IFEi+SlwlN9MInptRjEG4Bz+Gym10TdvwuI1bOZwxYAIEi3ZJellqgI0We2GOiTDmXINOfINdgex71jkWMduhPITJXuGKkw+fiHLYCyXBXxKxY6IPntpQb4c9ZYdWB6F+S+V2ItyyOy5oh4llrC0CfIeaiYqO\\/wsL7fjez3oNbtO6cIHGXN1ZQ\\/yQ9kJP5e4H+hLxUpkTIVgAH+PwMbGo0UQUIuhA5c8uXqAWcSsh7zx4MODhtjhMrKLJSyQDi2LHaG5QEnNPkP4VNmhRRBFZZtP9ECZc3RvaPBxjSOWdRg0xEVQ3rKWlUfIIgL0xbBgSFToy0LU2Ig80KbN2VzjbcpQtHMFhXgRnEprySTrRIJnOXdogPdBs+5xIVwEhueyXu2Btr5qZfbxmoBoqjMc7JRm9DlgqR6epPayLFlzKaJuWf0pNGqxNJsD\\/xCIOVuZoBpu0djIBFEJfArbK4ZpoElSsHOQ6njKYPfZK9AGEClhV2tL4kao\\/elY5gFwcaGD0LZkgGH6t\\/9SaaHTYGlRkgCZXaidap6OV8uAQHPsKnunhzhQkq9+AobU6bU9vp0RMz5lwLPEqERTRGGkU43z3CruRosQUfqtmLZFJaVCyOpdSYKYQ8yu6CbWN5G1asjU96XnP2DddQ6fXmL8yj+yindGPZ6jO0Ugpi82trVvA96ooPZkS9gE1KVhALyBeeeld8L3cKTpOf2DJL5CCPyq+GAkbRUNe5z4PRbMTq2kvNZBmsoeXtQ4mcsH2Mra5u7u9MXohER9y+RlXp+hcOjln2usD7YlJ3+EOMd4i\\/PnwdgPi+yUvZ7HfZSmv8ZfgR9VH2GyIkMso5ah82SWXVH25xVbN\\/9MnkAUoee2J0aa4DEYCn0UxU3rVRBBJQpcmrSHi9rnW+l6jMEzbhWjQ8Kv33\\/uZPEAJs09IzuhKKWLiyEq+LQ00PZrVpqdqWczIAYfSSy9Wshr3\\/p\\/cFQZGLaVKJ1dyW4PZexOtmp2WjwdHOupI04dYHA2gK3+27j6ycK7QkfovSTNiBsKEFb5lm8ro7Wd75yleIBBnMbrT1tvtqUb+UlWfUqG8dr4xD2TEENwSXAxeVOGeQuERaYH6zcNgurHWgHECm4NQxvD6SAZZzjKLer2lGvj\\/EV9ulssephwpSlk6VCD7Cb+QRaj\\/JhSkiigxRTWNzbVjo10j8w7kn0tqDumGTYUDckJuaCqtadUxtHd1p3VB0b5TgzOtrgX5t326m5dwagl8J6+UAq7g9EPQeHb2TgqlW87pHyK0EsCKyuM73UhVgItnKIQb0sAi\\/FIeRLtAkN1v\\/CtrX09KYT7xLjCtlPp3kHS02Eh\\/BIw6iC96Bf6eYZ1zRmUrGbtt5MVQ7S2EBzeITPiMwhY0lV4tfYlYz7zbYMxdrPKxDPc1ko4hMBi8HOmv7qmkOU+WB4HyocoHprzARptahcZMERyfhUeCC6zpHmFeYnUZisr808rXD0PhWqyzOGxRc5bFL5z16QbIugrDw82w49T3tXZPFHKAGrl5haPpWBWj2OrUfeTrGAZqAitvnu+5ZADvpT3kNKKqOS\\/Pfz6VONZeBZbEJaui70wiz9Kqt8gce5EBcS9ylh0gxBhkC584\\/U\\/3aafZudNRr\\/Dv2IG6yt0A1Fmwctl+FhQuFpGLru4wLOq64HdTzaw2keQHjzH\\/4qbdAmBLH3A5bjXM6NHSMrd4id6ERD9kE7zdmNbZlLqy9zRH4aJ3eSo9DfvqUjPA3VJftpLyyncOXnAy6N7jBr+tUhSeRUn37RVbvVT007ywfX4D44qudxhbcMl\\/PLVEXEIkiTe6d3XkMJb5V2cH2mdw+OjgwsWnv7ihtGABtP8kIORaP83N+pkERtgbQEuXu7rqog8zqaWaUnloCgY+8pjJqtF3nZZ1Ji4WSALxyVnFAz801EdxsuFVB2jNj2MUPcJoZiTdSvhf8BgfWtCAZ8euUG7lXeysn5rNOhUaQYuLj84MbwndtbWu+Lg\\/w+OiGmbh0cb5eMAIN5dDFk1MN3JKsmfSH4DVa60V17RRSLORafeq1LmtHwEsTE5r0J8K3\\/wLKWF5TL+Qka2eYt1o80ijLKGAWXHjgtfApDH4wsg1GadKneGJYXInOSgfoNgLzVT4KXyCo6riqLtwpv5OIvpJfVcOrIjPbNqsiIQ\\/ZO0kQgUs2p8R1sjJibgoLHZOPaC0pUgijY9uLsqbokWts9S2B6x6kSzjHVyMGN54TGoQL6HjqoYxt4Mv+trLEVEeeAXIa7I4kKhPJ3cTDVJpMFANe51eAjf3D6nf79EMord8tyuo2YoyQE7arF41mP3KUEwZzMInSrA3u7XLK24L9jRTM2M+DiiQ+M6NASWt7F3RGD04laX1TT8eLYOLt03UkDevQ8WG+F0lWd199FJ7F8RO3Jpy06ZlDov8eDnXDD65DsXRXkWucbZdxoBD2STwLbW+7XsYgodMmORJa\\/xWsCCGpaH3Ue1Es3BtfnZ81Wo6edn7Wr7HKuFSr12axeYGrCmJu+BdHctZBSKhY7BTCtVCMxt\\/NecsxDsHHuznmGmC5qqKFNNFyQ+Vicrbtj4+qzr5SQe2o3S9KBqGDc3Uq4uXbyak9ECgvd4BSQH61pEuAPb+HyYb7wDF1MUc2eMvv9QFrPGjl4cNMpkGJOa+zwcsv0fTZcI7bioccXpahdphuz6gbr873N7MIgV158qjRMeWlU51BPPGe4y3w3us8qnJT2vXn35v7l+l3eL7+dZvqbc68zyQBJ+VdLAlsfmz46twMFiOCZ+3xuTd6G0JWmT6Ju3sV5vKWWcViXFrrNZy8cJw5Ft2p7EnI3XFUWafZFNQTLiLFifhjIJTOBtLNkgOPEEp9+k\\/Y8J4Gi\\/OFDSrmtYJ4StRFGAXk4biSVzQ7qfOG7lF7S67RqT90THK0uSVRcF+HuFs209N96lzIEo7W5qNAaM9Gkse3Ng0JutufE1RlXCU7IP7m4N7CeRJsv7Nii76ctN3yKZ6PTidomFuPVStAP0MrSplMKZXwlIXjxZnQyLyAuRZRG6HZy9iFS0\\/VA5WHeXwvOomWx4yaO5NOhMKwvKtDgzM4zhBFIE2rZ7UWg+e+TSYYps76frRAhQ271cva1BFz7PfdIg1+nRLHub\\/77P8OFdNc8sz8uWec0cWCDwD6TvWWiVt6YGOlkh3kdFc=\",\"cypher\":2}";
        const request = {
            url: url,
            headers: headers,
            body: body
        };

        $.post(request, async (error, response, data) => {
            try {
                $.log(data);
            } catch (e) {
                $.log(e)
            }
            resolve();
        })
    })
}


//普通版分享
function share() {
   return new Promise((resolve, reject) => {
         const url = "https://ocean.shuqireader.com/api/activity/v1/task/reward";
         const headers = {
    "Origin": "https://render-web.shuqireader.com",
    "Accept-Encoding": "gzip, deflate, br",
    "Connection": "keep-alive",
    "Content-Type": "application/x-www-form-urlencoded",
    "Accept": "application/json, text/plain, */*",
    "Host": "ocean.shuqireader.com",
    "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 AliApp(shuqi/4.2.6.0) WindVane/8.6.1 Shuqi (iPhone10,1__shuqi__v4.2.6.0) 750x1334 Winding(WV_2) WK",
    "Referer": "https://render-web.shuqireader.com/render/sq-welfare/page/welfare_page/?serviceWorkerOn=1&hideNavBar=1&from=ShuqiTab&upf=20363&sdk=14.3&utdid=YQ%2FYZWdAvqMDAKM%2FiFXyqqma&ustatus=1&first_placeid=111111&net_env=wifi&placeid=111111&user_id=2126444763&sn=C26EE3EBD0766A4CC59F848954C6CB7CA38E54DF&umidtoken=PTxLwAdLOuB5gjV70ogZObHSxI3L0W%2BE&msv=8.0.0&brand=Apple&imei=6745B60E81789B372E03EE0A15627C2951D7098E&skinVersionPrefix=1&appVer=4.2.6.0&skinActiveColor=0F9970&manufacturer=Apple&session=eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyMTI2NDQ0NzYzIiwidXRkaWQiOiIiLCJpbWVpIjoiNjc0NUI2MEU4MTc4OUIzNzJFMDNFRTBBMTU2MjdDMjk1MUQ3MDk4RSIsInNuIjoiQzI2RUUzRUJEMDc2NkE0Q0M1OUY4NDg5NTRDNkNCN0NBMzhFNTRERiIsImV4cCI6MTYzMTg1NDQ3OSwidXNlcklkIjoiMjEyNjQ0NDc2MyIsImlhdCI6MTYzMTMzNjA3OSwib2FpZCI6IiIsInBsYXRmb3JtIjoiaU9TIn0._6R2vE7hhzo4JyfF6ajH0BE7BVQFEhWBhKGZnuZQOHXu_P17bnPUofiEDud6-d83qhXBZWcuX4cb0Vuflw-vuw&skinColor=23B383&platform=iOS&ver=201102&mod=iPhone8&statusBarHeight=20.000000&skinVersion=1&wh=750x1334&soft_id=21&utype=vip&skinId=999&idfa=B69897E1-9858-46B8-9463-4A461DB9CF98",
    "Content-Length": "4704",
    "Accept-Language": "zh-cn"
};
         const body = "actTaskId=262&wua=HIVW_j5CCq1fqtQNqCZdF0uIHjYc5cMCmvdzJuYWgMNMDeXSPjwBiFs%2BbGgZJqiEXqUy%2B8wxp%2BM4CatpMTKCA0ELH3DriexlaPfdRVDYxBpenEptgd0IKjZ6UluZp%2BF5POz05aU8nuDUyKv2qQ6n46yYJ9MO2G8ewj84QJ86tz6b%2FSQzZwca%2Fd7dUZcm3W6wDaFScXMORfjl%2FukN1d8%2B96VWwp6h1tpT4qpdGOlg6YbH4bRyrqTJcUHq5lG2xm6W%2F3HRh%2BKf8zd3hQY%2BSw%2FbieFU7nzoGng0F7qe20zsWnIVWb2Kud6k2vAiCM66U0j4w3G5IvDGXEVVDkm2%2FoeNtQaff1b9wG7%2BpteTnTDi58dO5bj1R8jWZz2Xdq2j8UbGEHQENKbvVNPeRzewmEB645qU%2FHg%3D%3D&ua=140%23a8scWEGkzzFYuzo2lz30s3%2Fqc73bNvCGna%2FQZGzbnuL%2FeZIpvSoVgTHLr9TFXw1oChfaRSG9AqbnKOEFHLpkJwMfdK7oRNandR%2BZtD6Sqm9NtsK7kDXJzOukiL3mcrh8MRib7ARba2Rm%2BXjyJZ63ayOgeM9H0ZjWyXUjsDYcnhF4Lnic3EAgOHxKlcxRuT%2BCYROTfCGnUmdN0dsLrMKmxtWx8J8h4SvF77Yy92WXoHQ0GcGXvq6Ezu0pSVyYym%2BKRvksmeYjfOv4CbYfyZueMhiUklSVSGV4FrkHxKCR%2FNH0OS%2Brj2TO%2BuBtCgvjKNsbSV0V0eqL5%2B3W9fmffdsX2epJA%2FKeSPw%2FQ%2FAtpeW3ZdGQqhQ4PZZD58jCFV4g8OrxRUvSGyAz0Q38M3hqzznkxSNHFM2zzZovbHVtlzzx2DD3VthqzFr2zOaml61zaIzipmZQuXFDDe3oP3h%2FLSSb12Y4lTNxz8c1b1mqlbzzQPc3uLGCFFcsm283l6Tz%2BIrbbuBqIbrx2DD373hquQbi01Y4lp1zzrOiVu7XUfQx2PD3VqBvzzxv2t7Blp1zzrSiVXgBUSQx2PD3Vq%2F0zD3v2P2VlpTzzDxUV28KVbd32Pc3Vtg9zFozL28blpTzzDxqV28wyzd32Pc3VtgMzFxPBOEFlpTzzDx2V2ENmb%2BxvI8%2BVtg%2Fzx2i2mBNlbfDzPd3Mp2JmzrzjkI%2BVZbBzFdCE2eSl3MzIwo%2FVD%2FoQzdWFDxCA3EuiFzzXXQ9epuxfrzbAyCqlb6O2Fj%2BVtYonzDL218%2BYD6xzBbSV2l%2FlQzR2Po1%2Fth%2FJ%2Bby2X8GbOmCz8rbQqBqDb2x2nuV2pGfoQri22U31qzxzoXnY6P0MI2y7yDY5anrHRqjELrEilhjY3rVbdr8kR%2FaaIy0CuntWFnloffnbE6zjJo7vRwj%2BvlZO3tQEFNozFdyBIyYxdRNJBfgUp52YBm0u%2BD7avTg80lpRx9uG8aCvNv3%2FMUcLzTMIBnEd9XHY24xaR%2B0GRm70tIWp%2BeEpvl4b2%2B9H%2BdzOaDpfkDzR0j%2B%2BwF8p3p1NvtI2hYGArLRBntV6tNOEwdH6nMDCiXeK0iRDfY4NJHquRx6iCeE%2Bt3ilMFKrDgGc0ihnukm%2Bt3DkRRIjVs0JCCAeb37Ugq5781LP3GsCWfLkRxwxP2pMjdOZa1XQIsq4JJ3Ox3A8qmoROo8vdowJGMWwEATVcCUZUuRYaDPtO4UOP5urI9NdpmJnZ7jIAHtQ1CEzplLyoUUb5jHeGYl7U4KP7rMd%2FH4NTx25MdgRukPFOVFQz1Rl9JPjrC8oD5cvTP729mxx7bhCTy%2FcP24qDm%2BFkTefjotTf1OHjfLmYxDnP4Lkl5nUu7znc3EJXONt7LxpodTCuzE%2BbQ3zgKPKG8kPucjTmmTtJhi1XQcS3tyQIl5Pw31npcYFCrUELB04uRSkB50HGI5K%2FzWrInvv078cMeNjoOJDNS8L46lhFT4dC1MfFgBuuOkksrKyyR%2FZZCq2Xj7WZDMUwBy90TKWMkitQyAO%2BUjCKdyCYzsV%2BipEeExl7KvFmHMwMGEUF16dGvGK%2BKu3N9y7JdKKuhjVf5DKN%2F4XiUKCYUR7MKbibLIcKwqFhxi3%2BvAH7gCncGzFYtna%2FUvU3i3WH%2FEi7xd34I%2BhulqzKnsb%2FdrBX4YLL57s%2Fpt1ao306kflwdyTss4WDZroDyldh4QECKI1v3xnLdCA1k%2FphCZ%2FOn17YL28K8Fj%2Blup8UfgUdpsBizkk6v2mGqIk31M1UYJ9qyaeuhX%2BrToq64GGFG4dM3YZOauPenc46mi1gl%2FnxQafKMwAjjGlOI3FyNS16dVm%2FRyHSOiXJGsCfEBLc98rsWV4x1J1q0bKYKk%2FYntSmqGNBYqKGFfH7iPfNfVfIaqID%2Fj6MY1zyf7aO0lS2XNcxMuAcUL6VB3eJnJ6J5WICOfS6vM7A2NonAIdsq2KgqqLFJ5%2BBTPNlxSzdbKpzfM2FnJPjP5LZ9RFS0sm5Opra4C%2BaxaEeUCunPtwT80xB00oeNihFjJ6GNJkThvuQ39FSwNFg62c0D5trw3EcKZtOD%2BCtNSgYpH47qa3tq2UwwswEG3qLH2D1GAjIVOb5%2FqHb7eYdfZMbTiI7YBAJh4HzwiOT%2BcJhvLyCI1ITn0FTRLUNqzXkleoFdK53TEmIuuLoQBOL4idwKD4zGd98W9kP1ARYzUNs6EjjQ7bgnYIpMF6E2%2B8dTFjnJXaO2XmuqyCaLtj6b5qVn5HvoY2z8niuuOMZtWJm0%2BWvfvucrX55CP2JmXh2ikDE9%2BdhvGXNFqm44vkv3tng4VKbGUzY4As%2F2qiw4hRG4HnF4rskjeUpCuPzjyajGxufm%2BaMAsTUYdr9y3KNyGvDVCd%2FPRZuCymSlQiyg7Qw2kTRGgM6juw%2FRds1F9aw0Gi7x3o8TKiOqry8%2Fb%2FrreweYldg1z4JLuMxq4Y%2FSCwDisYr0D%2FRQxXa1%2F0o%2BbGsE83IDIQbto%2BjnXWzS&miniWua=HHnB_0ICdbBG%2Fgj9NS3b20%2FqqpytENijT65sWSPs%2BqhHtoOsEZNfWW654XhSWvB7p%2B%2F4q8g87pqnL7uaMA5C4f2yuWd0pMzAw7lLHk6sELQyv28Krl6zKVwOK9RZkCbHupJNcuAhwYPFiKuPbBpOuuBW%2BRw%3D%3D&userId=2126444763&umidtoken=PTxLwAdLOuB5gjV70ogZObHSxI3L0W%2BE&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&platform=1&appVer=4.2.6.0&placeId=111111&timestamp=1631408697&sqSv=1.0&sign=9fdf152a7d8241a69ba4d7810e7c049c&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26hideNavBar%3D1%26from%3DShuqiTab%26upf%3D20363%26sdk%3D14.3%26utdid%3DYQ%252FYZWdAvqMDAKM%252FiFXyqqma%26ustatus%3D1%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2126444763%26sn%3DC26EE3EBD0766A4CC59F848954C6CB7CA38E54DF%26umidtoken%3DPTxLwAdLOuB5gjV70ogZObHSxI3L0W%252BE%26msv%3D8.0.0%26brand%3DApple%26imei%3D6745B60E81789B372E03EE0A15627C2951D7098E%26skinVersionPrefix%3D1%26appVer%3D4.2.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3DeyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyMTI2NDQ0NzYzIiwidXRkaWQiOiIiLCJpbWVpIjoiNjc0NUI2MEU4MTc4OUIzNzJFMDNFRTBBMTU2MjdDMjk1MUQ3MDk4RSIsInNuIjoiQzI2RUUzRUJEMDc2NkE0Q0M1OUY4NDg5NTRDNkNCN0NBMzhFNTRERiIsImV4cCI6MTYzMTg1NDQ3OSwidXNlcklkIjoiMjEyNjQ0NDc2MyIsImlhdCI6MTYzMTMzNjA3OSwib2FpZCI6IiIsInBsYXRmb3JtIjoiaU9TIn0._6R2vE7hhzo4JyfF6ajH0BE7BVQFEhWBhKGZnuZQOHXu_P17bnPUofiEDud6-d83qhXBZWcuX4cb0Vuflw-vuw%26skinColor%3D23B383%26platform%3D1%26ver%3D201102%26mod%3DiPhone8%26statusBarHeight%3D20.000000%26skinVersion%3D1%26wh%3D750x1334%26soft_id%3D21%26utype%3Dvip%26skinId%3D999%26idfa%3DB69897E1-9858-46B8-9463-4A461DB9CF98";
        const request = {
            url: url,
            headers: headers,
            body: body
        };

        $.post(request, async (error, response, data) => {
            try {
                $.log(data);
            } catch (e) {
                $.log(e)
            }
            resolve();
        })
    })
}




//极速版签到
  function jsdailysign() {
    return new Promise((resolve, reject) => {
         const url = "https://ocean.shuqireader.com/api/activity/xapi/signin/v5/signInAction";
         const headers = {
    "Origin": "https://render-web.shuqireader.com",
    "Accept-Encoding": "gzip, deflate, br",
    "Connection": "keep-alive",
    "Content-Type": "application/x-www-form-urlencoded",
    "Accept": "application/json, text/plain, */*",
    "Host": "ocean.shuqireader.com",
    "User-Agent": "User-Agent: Mozilla/5.0 (iPhone; CPU iPhone OS 14_4_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 AliApp(shuqi/1.0.5.0) WindVane/8.6.1 Shuqi-Lite (iPhone11,6__shuqi__v1.0.5.0) 1242x2688 Winding(WV_2) WK",
    "Referer": "https://render-web.shuqireader.com/render/lite-welfare/page/golden_house/?from=ShuqiTab&serviceWorkerOn=1&stopPullRefresh=1&sdk=14.4.2&ustatus=1&umidtoken=DpBL9SlLOmovNjV8aN3shp3LvPkGQPho&net_env=wifi&placeid=111111&user_id=2018814439&sn=42DD307F03BC5831E8D802A15ADCFC9E0E66156A&msv=10.0.0&brand=Apple&imei=75934AF171CF5D9A63EBEC2505A5F61246D63244&appVer=1.0.5.0&manufacturer=Apple&session=eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyMDE4ODE0NDM5IiwidXRkaWQiOiIiLCJpbWVpIjoiZmFzdF83NTkzNEFGMTcxQ0Y1RDlBNjNFQkVDMjUwNUE1RjYxMjQ2RDYzMjQ0Iiwic24iOiJmYXN0XzQyREQzMDdGMDNCQzU4MzFFOEQ4MDJBMTVBRENGQzlFMEU2NjE1NkEiLCJleHAiOjE2MzQzNjMyMzIsInVzZXJJZCI6IjIwMTg4MTQ0MzkiLCJpYXQiOjE2MzM4NDQ4MzIsIm9haWQiOiIiLCJwbGF0Zm9ybSI6IjExNiJ9.svKSulgASsRN0lbgSHWA5DJAiTFrHKK-kbLiJ7EmdVlj0cVMKXl-BZv76mnaWTAD8RXlv91J81Wnzj76QYEP2Q&statusBarHeight=44.000000&platform=116&ver=210331&mod=iPhoneXMAX&wh=1242x2688&utype=vip&utdid=YLIP1+l2F4MDAF43yiKa4yi9&idfa=BDCBF487-08CD-49E5-A795-2A74EA612AFD",
    "Content-Length": "1847",
    "Accept-Language": "zh-cn"
};
         const body = "clientTimestamp=1633846042&position=601&signInType=1&wua=ktgi_0Kjk7uUNMNBDU9nYwINt7P5Dg3ngMIHH3EMXsRIgWKdVNItJ6NVx/wB8pUoKEqOaeSwiQOLZuXoiOR9OYk3pmfHaqnEx18VNWPAEYBoPdz2Hdbz0iikYu4a6/XCBmwg4Pc5I70sCZ2rnFiWSgQ7H1rIJ3me/zqZHRkW5R7Zi2O81mxHIARrRF9EUq7OA6u3kSNVSu/hiqX3RBAIqFAF1zSj9q4oWRVDe9l79IwZkPMIWdTKC3DA5G2Np20RlN4yY8OO11F3Sc8/wtk3pRbZz2Q2ib+Fi/OIxanjvikxFMO0HVvjU9NN7x7YZb0XrMNeWkGQhp3ebseVP/fFCl+TCEMYSKGD2sH6DK/8H1NUBluMIeaBP1qfW6PaBFB7Pa3cg&miniWua=HHnB_46Auw51Y37hDpZL1hqo3XpLtgGltdoAVbLQn8xRLedRdv4LsH1RbjBCPOlFy4i6bxjMZ+KPi1KVpXSQta8qIpB+rD0aXamtLGgUb3624IormtmkdVdwixJW8KzQDGH5f&userId=2018814439&umidtoken=DpBL9SlLOmovNjV8aN3shp3LvPkGQPho&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&platform=116&appVer=1.0.5.0&placeId=111111&timestamp=1633846042&sqSv=1.0&sign=405d6dd4ebb5e4bed849ca64dfaa3391&key=sq_h5_gateway&_public=from=ShuqiTab&serviceWorkerOn=1&stopPullRefresh=1&sdk=14.4.2&ustatus=1&umidtoken=DpBL9SlLOmovNjV8aN3shp3LvPkGQPho&net_env=wifi&placeid=111111&user_id=2018814439&sn=42DD307F03BC5831E8D802A15ADCFC9E0E66156A&msv=10.0.0&brand=Apple&imei=75934AF171CF5D9A63EBEC2505A5F61246D63244&appVer=1.0.5.0&manufacturer=Apple&session=eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyMDE4ODE0NDM5IiwidXRkaWQiOiIiLCJpbWVpIjoiZmFzdF83NTkzNEFGMTcxQ0Y1RDlBNjNFQkVDMjUwNUE1RjYxMjQ2RDYzMjQ0Iiwic24iOiJmYXN0XzQyREQzMDdGMDNCQzU4MzFFOEQ4MDJBMTVBRENGQzlFMEU2NjE1NkEiLCJleHAiOjE2MzQzNjMyMzIsInVzZXJJZCI6IjIwMTg4MTQ0MzkiLCJpYXQiOjE2MzM4NDQ4MzIsIm9haWQiOiIiLCJwbGF0Zm9ybSI6IjExNiJ9.svKSulgASsRN0lbgSHWA5DJAiTFrHKK-kbLiJ7EmdVlj0cVMKXl-BZv76mnaWTAD8RXlv91J81Wnzj76QYEP2Q&statusBarHeight=44.000000&platform=116&ver=210331&mod=iPhoneXMAX&wh=1242x2688&utype=vip&utdid=YLIP1%2Bl2F4MDAF43yiKa4yi9&idfa=BDCBF487-08CD-49E5-A795-2A74EA612AFD";
        const request = {
            url: url,
            headers: headers,
            body: body
        };

        $.post(request, async(error, response, data) => {
            try {
                $.log(data);
            } catch (e) {
                $.log(e)
            }
            resolve();
        })
    })
}
  


//极速版书城
function jsshucheng() {
    return new Promise((resolve, reject) => {
         const url = "https://ocean.shuqireader.com/api/activity/v1/task/reward?sdk=14.4.2&ustatus=1&umidtoken=DpBL9SlLOmovNjV8aN3shp3LvPkGQPho&net_env=wifi&placeid=111111&user_id=2018814439&sn=42DD307F03BC5831E8D802A15ADCFC9E0E66156A&msv=10.0.0&brand=Apple&imei=75934AF171CF5D9A63EBEC2505A5F61246D63244&appVer=1.0.5.0&manufacturer=Apple&session=eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyMDE4ODE0NDM5IiwidXRkaWQiOiIiLCJpbWVpIjoiZmFzdF83NTkzNEFGMTcxQ0Y1RDlBNjNFQkVDMjUwNUE1RjYxMjQ2RDYzMjQ0Iiwic24iOiJmYXN0XzQyREQzMDdGMDNCQzU4MzFFOEQ4MDJBMTVBRENGQzlFMEU2NjE1NkEiLCJleHAiOjE2MzQzNjMyMzIsInVzZXJJZCI6IjIwMTg4MTQ0MzkiLCJpYXQiOjE2MzM4NDQ4MzIsIm9haWQiOiIiLCJwbGF0Zm9ybSI6IjExNiJ9.svKSulgASsRN0lbgSHWA5DJAiTFrHKK-kbLiJ7EmdVlj0cVMKXl-BZv76mnaWTAD8RXlv91J81Wnzj76QYEP2Q&statusBarHeight=44.000000&platform=116&ver=210331&mod=iPhoneXMAX&wh=1242x2688&utype=vip&utdid=YLIP1%2Bl2F4MDAF43yiKa4yi9&idfa=BDCBF487-08CD-49E5-A795-2A74EA612AFD";
         const headers = {
    "Accept": "*/*",
    "Accept-Encoding": "gzip, deflate, br",
    "Connection": "keep-alive",
    "Content-Type": "application/x-www-form-urlencoded",
    "Host": "ocean.shuqireader.com",
    "User-Agent": "shuqifast/1.0.5 (iPhone; iOS 14.4.2; Scale/3.00)",
    "Content-Length": "100",
    "Accept-Language": "zh-Hans-CN;q=1, en-CN;q=0.9"
};
         const body = "actTaskId=344&platform=116&reqEncryptParam=:&reqEncryptType=-1&resEncryptType=-1&userId=2018814439";
        const request = {
            url: url,
            headers: headers,
            body: body
        };

        $.post(request, async(error, response, data) => {
            try {
                $.log(data);
            } catch (e) {
                $.log(e)
            }
            resolve();
        })
    })
}


//极速版分享
  function jsshare() {
    return new Promise((resolve, reject) => {
         const url = "https://ocean.shuqireader.com/api/activity/v1/task/reward";
         const headers = {
    "Origin": "https://render-web.shuqireader.com",
    "Accept-Encoding": "gzip, deflate, br",
    "Connection": "keep-alive",
    "Content-Type": "application/x-www-form-urlencoded",
    "Accept": "application/json, text/plain, */*",
    "Host": "ocean.shuqireader.com",
    "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/18C66 AliApp(shuqi/1.0.4.0) WindVane/8.6.1 Shuqi-Lite (iPhone10,1__shuqi__v1.0.4.0) 750x1334 Winding(WV_2) WK",
    "Referer": "https://render-web.shuqireader.com/render/lite-welfare/page/golden_house/?from=ShuqiTab&serviceWorkerOn=1&stopPullRefresh=1&sdk=14.3&ustatus=1&umidtoken=YT1NqcEwK0kDAI%2BGL48c7Szp&net_env=wifi&placeid=111111&user_id=2126444763&sn=2C5A6C6F79EDEE477A8EE92D86B6FEC191D7782A&msv=10.0.0&brand=Apple&imei=C380A3F4FFAB32B625BC8EDA1FCD9ED4413D31C1&appVer=1.0.4.0&manufacturer=Apple&session=eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyMTI2NDQ0NzYzIiwidXRkaWQiOiIiLCJpbWVpIjoiZmFzdF9DMzgwQTNGNEZGQUIzMkI2MjVCQzhFREExRkNEOUVENDQxM0QzMUMxIiwic24iOiJmYXN0XzJDNUE2QzZGNzlFREVFNDc3QThFRTkyRDg2QjZGRUMxOTFENzc4MkEiLCJleHAiOjE2MzE5MjU5NjQsInVzZXJJZCI6IjIxMjY0NDQ3NjMiLCJpYXQiOjE2MzE0MDc1NjQsIm9haWQiOiIiLCJwbGF0Zm9ybSI6IjExNiJ9.YgxrpaC60lAvT7_kqJgiRrGgHLakhW-Sx5UlRAUU3aNo8Sh_XyWieLh7xPNQig-BQo_LDj1HB22zDxtqj6n-4A&statusBarHeight=20.000000&platform=116&ver=210309&mod=iPhone8&wh=750x1334&utype=vip&utdid=YT1NqcEwK0kDAI%2BGL48c7Szp&idfa=B69897E1-9858-46B8-9463-4A461DB9CF98",
    "Content-Length": "1806",
    "Accept-Language": "zh-cn"
};
         const body = "actTaskId=327&wua=ktgi_pnul3phZvAedLAAcJf2S953RDl2HXVr3jZ6HC8bODbpLiT8fBoRsvnx8slIQRppL1G%2F%2BiATl%2F4yWhWVT2qjXFZsKleSaPmbGaifzKj0qXI6x9dHlME%2BRSfgsAOVWVBVaTg4%2BJwLnX2qNr8uPoAbobhvagiTCc5f2di2NPzXhKNEll49rrXwaQLTkDyQ%2B7WD3EaHiurU%2FV%2FD9MyrXgVjUdvHR79BwHHPLTVQYWEOfxXWJKVqiqfYbHaAw63U5pD7efCZ2ASi0yFU5vW6LZKjomDj5I%2BJw%2BbIPjimK2UBMYeETKuTkaxUwZjfDaPo98ic0gC%2F%2FsVf7%2FlGweRGK7m8Whh8ZnUCwIqp7esRSNBcpQiy7IQAPpwQmlMU6Dibb95%2B4&ua=&miniWua=HHnB_nS21yDtkwy2ie2oz%2BOA5Nr7Mp0xFYyyXsrIg0tvPH3yIWtz1LEMIAhmanksUmfqk9qJz3X8lhT0AlwoKq6tq05kuJfigH%2Be%2BHqTLWxv17kF6XPcZuJgGzsGiphirSScw&userId=2126444763&umidtoken=YT1NqcEwK0kDAI%2BGL48c7Szp&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&platform=116&appVer=1.0.4.0&placeId=111111&timestamp=1631407634&sqSv=1.0&sign=57a3c56483c7962800cd212dfeb7576e&key=sq_h5_gateway&_public=from%3DShuqiTab%26serviceWorkerOn%3D1%26stopPullRefresh%3D1%26sdk%3D14.3%26ustatus%3D1%26umidtoken%3DYT1NqcEwK0kDAI%252BGL48c7Szp%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2126444763%26sn%3D2C5A6C6F79EDEE477A8EE92D86B6FEC191D7782A%26msv%3D10.0.0%26brand%3DApple%26imei%3DC380A3F4FFAB32B625BC8EDA1FCD9ED4413D31C1%26appVer%3D1.0.4.0%26manufacturer%3DApple%26session%3DeyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyMTI2NDQ0NzYzIiwidXRkaWQiOiIiLCJpbWVpIjoiZmFzdF9DMzgwQTNGNEZGQUIzMkI2MjVCQzhFREExRkNEOUVENDQxM0QzMUMxIiwic24iOiJmYXN0XzJDNUE2QzZGNzlFREVFNDc3QThFRTkyRDg2QjZGRUMxOTFENzc4MkEiLCJleHAiOjE2MzE5MjU5NjQsInVzZXJJZCI6IjIxMjY0NDQ3NjMiLCJpYXQiOjE2MzE0MDc1NjQsIm9haWQiOiIiLCJwbGF0Zm9ybSI6IjExNiJ9.YgxrpaC60lAvT7_kqJgiRrGgHLakhW-Sx5UlRAUU3aNo8Sh_XyWieLh7xPNQig-BQo_LDj1HB22zDxtqj6n-4A%26statusBarHeight%3D20.000000%26platform%3D116%26ver%3D210309%26mod%3DiPhone8%26wh%3D750x1334%26utype%3Dvip%26utdid%3DYT1NqcEwK0kDAI%252BGL48c7Szp%26idfa%3DB69897E1-9858-46B8-9463-4A461DB9CF98";
        const request = {
            url: url,
            headers: headers,
            body: body
        };

        $.post(request, async(error, response, data) => {
            try {
                $.log(data);
            } catch (e) {
                $.log(e)
            }
            resolve();
        })
    })
}
  


//极速版阅读
function jsread() {
   return new Promise((resolve, reject) => {
         const url = "https://ocean.shuqireader.com/api/activity/v1/activity/pendant/lottery?sdk=14.4.2&ustatus=1&umidtoken=DpBL9SlLOmovNjV8aN3shp3LvPkGQPho&net_env=wifi&placeid=111111&user_id=2018814439&sn=42DD307F03BC5831E8D802A15ADCFC9E0E66156A&msv=10.0.0&brand=Apple&imei=75934AF171CF5D9A63EBEC2505A5F61246D63244&appVer=1.0.5.0&manufacturer=Apple&session=eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyMDE4ODE0NDM5IiwidXRkaWQiOiIiLCJpbWVpIjoiZmFzdF83NTkzNEFGMTcxQ0Y1RDlBNjNFQkVDMjUwNUE1RjYxMjQ2RDYzMjQ0Iiwic24iOiJmYXN0XzQyREQzMDdGMDNCQzU4MzFFOEQ4MDJBMTVBRENGQzlFMEU2NjE1NkEiLCJleHAiOjE2MzQzNjMyMzIsInVzZXJJZCI6IjIwMTg4MTQ0MzkiLCJpYXQiOjE2MzM4NDQ4MzIsIm9haWQiOiIiLCJwbGF0Zm9ybSI6IjExNiJ9.svKSulgASsRN0lbgSHWA5DJAiTFrHKK-kbLiJ7EmdVlj0cVMKXl-BZv76mnaWTAD8RXlv91J81Wnzj76QYEP2Q&statusBarHeight=44.000000&platform=116&ver=210331&mod=iPhoneXMAX&wh=1242x2688&utype=vip&utdid=YLIP1%2Bl2F4MDAF43yiKa4yi9&idfa=BDCBF487-08CD-49E5-A795-2A74EA612AFD";
         const headers = {
    "Accept": "*/*",
    "Accept-Encoding": "gzip, deflate, br",
    "Connection": "keep-alive",
    "Content-Type": "application/x-www-form-urlencoded",
    "Host": "ocean.shuqireader.com",
    "User-Agent": "shuqifast/1.0.5 (iPhone; iOS 14.4.2; Scale/3.00)",
    "Content-Length": "677",
    "Accept-Language": "zh-Hans-CN;q=1, en-CN;q=0.9"
};
         const body = "actId=355&miniWua=HHnB_0rQhASlwGkhB3iM6uFOwE4ECW1u1S2/kdlO39RD2lCQrWZ1vHLoxwszVJr1Hl2h4DjQ0TPPMNy2QSETGQB+Z9jrrKoPXnYuGW5w+OtSB1CyQ7JnRkQ1NS1hIkjSMWEe7&reqEncryptParam=:&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&timestamp=1633846125&userId=2018814439&wua=ktgi_500GAt9bs+iABzXAxsHcsmC01plaZHsVSXDwmZq6QjlRuQXAPiBBY8b2YZHTKg4H8asKHOO51qLRBO2BKpOM0v+B02PoaXg/gcGTUFvLAF9351sD6UKFdfJd9JRwGha2WQw2fYRZpqoxbRZdqrXVGGXy68e/4pjDg+Y/qycnnP4ky68hd9ay9m+10ZfBJelqXYNJihDpY8irwwn97TWdr3+f88n7i5A4jiLPcHDAxH5QySTosjW4S31MmXgLrtuwhg3JLJLAQ7be4nH5sYWOmfD/X7srk2TLsTc99YlBhc/Jy9hS2PeIRM2IoXCyaDTV3Db4wTQjf8zhPy+VII+MYBcCpjkHcDtb+pqhhVz3MxV/XVV7eisvf8cFLEeqqLBC";
        const request = {
            url: url,
            headers: headers,
            body: body
        };

        $.post(request, async (error, response, data) => {
            try {
                $.log(data);
                const result = JSON.parse(data)
                if (result.status == 200) {

                    if (result.data.chanceCurrentCnt < result.data.chanceMaxCnt) {
                        await jsread();
                        await $.wait(500);
                    }
                }
            } catch (e) {
                $.log(e)
            }
            resolve();
        })
    })
}


//极速版收取金币
function receive() {
     return new Promise((resolve, reject) => {
         const url = "https://ocean.shuqireader.com/api/prizecenter/xapi/prize/manual/receive";
         const headers = {
    "Origin": "https://render-web.shuqireader.com",
    "Accept-Encoding": "gzip, deflate, br",
    "Connection": "keep-alive",
    "Content-Type": "application/x-www-form-urlencoded",
    "Accept": "application/json, text/plain, */*",
    "Host": "ocean.shuqireader.com",
    "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 14_4_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 AliApp(shuqi/1.0.5.0) WindVane/8.6.1 Shuqi-Lite (iPhone11,6__shuqi__v1.0.5.0) 1242x2688 Winding(WV_2) WK",
    "Referer": "https://render-web.shuqireader.com/render/lite-welfare/page/golden_house/?from=ShuqiTab&serviceWorkerOn=1&stopPullRefresh=1&sdk=14.4.2&ustatus=1&umidtoken=DpBL9SlLOmovNjV8aN3shp3LvPkGQPho&net_env=wifi&placeid=111111&user_id=2018814439&sn=42DD307F03BC5831E8D802A15ADCFC9E0E66156A&msv=10.0.0&brand=Apple&imei=75934AF171CF5D9A63EBEC2505A5F61246D63244&appVer=1.0.5.0&manufacturer=Apple&session=eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyMDE4ODE0NDM5IiwidXRkaWQiOiIiLCJpbWVpIjoiZmFzdF83NTkzNEFGMTcxQ0Y1RDlBNjNFQkVDMjUwNUE1RjYxMjQ2RDYzMjQ0Iiwic24iOiJmYXN0XzQyREQzMDdGMDNCQzU4MzFFOEQ4MDJBMTVBRENGQzlFMEU2NjE1NkEiLCJleHAiOjE2MzQzNjMyMzIsInVzZXJJZCI6IjIwMTg4MTQ0MzkiLCJpYXQiOjE2MzM4NDQ4MzIsIm9haWQiOiIiLCJwbGF0Zm9ybSI6IjExNiJ9.svKSulgASsRN0lbgSHWA5DJAiTFrHKK-kbLiJ7EmdVlj0cVMKXl-BZv76mnaWTAD8RXlv91J81Wnzj76QYEP2Q&statusBarHeight=44.000000&platform=116&ver=210331&mod=iPhoneXMAX&wh=1242x2688&utype=vip&utdid=YLIP1+l2F4MDAF43yiKa4yi9&idfa=BDCBF487-08CD-49E5-A795-2A74EA612AFD",
    "Content-Length": "1133",
    "Accept-Language": "zh-cn"
};
         const body = "platform=116&src=&timestamp=1633847823&userId=2018814439&sqSv=1.0&appVer=1.0.5.0&placeId=&sign=6e01fed13c8c0c6ca197fea2f0ee8300&key=sq_h5_gateway&_public=from=ShuqiTab&serviceWorkerOn=1&stopPullRefresh=1&sdk=14.4.2&ustatus=1&umidtoken=DpBL9SlLOmovNjV8aN3shp3LvPkGQPho&net_env=wifi&placeid=111111&user_id=2018814439&sn=42DD307F03BC5831E8D802A15ADCFC9E0E66156A&msv=10.0.0&brand=Apple&imei=75934AF171CF5D9A63EBEC2505A5F61246D63244&appVer=1.0.5.0&manufacturer=Apple&session=eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyMDE4ODE0NDM5IiwidXRkaWQiOiIiLCJpbWVpIjoiZmFzdF83NTkzNEFGMTcxQ0Y1RDlBNjNFQkVDMjUwNUE1RjYxMjQ2RDYzMjQ0Iiwic24iOiJmYXN0XzQyREQzMDdGMDNCQzU4MzFFOEQ4MDJBMTVBRENGQzlFMEU2NjE1NkEiLCJleHAiOjE2MzQzNjMyMzIsInVzZXJJZCI6IjIwMTg4MTQ0MzkiLCJpYXQiOjE2MzM4NDQ4MzIsIm9haWQiOiIiLCJwbGF0Zm9ybSI6IjExNiJ9.svKSulgASsRN0lbgSHWA5DJAiTFrHKK-kbLiJ7EmdVlj0cVMKXl-BZv76mnaWTAD8RXlv91J81Wnzj76QYEP2Q&statusBarHeight=44.000000&platform=116&ver=210331&mod=iPhoneXMAX&wh=1242x2688&utype=vip&utdid=YLIP1%2Bl2F4MDAF43yiKa4yi9&idfa=BDCBF487-08CD-49E5-A795-2A74EA612AFD";
        const request = {
            url: url,
            headers: headers,
            body: body
        };

        $.post(request, async (error, response, data) => {
            try {
                $.log(data);
            } catch (e) {
                $.log(e)
            }
            resolve();
        })
    })
}




function jsvideoreward20() {
    return new Promise((resolve, reject) => {
         const url = "https://ocean.shuqireader.com/api/ad/v1/api/prize/lottery";
         const headers = {
    "Accept-Encoding": "gzip, deflate, br",
    "Accept": "*/*",
    "Connection": "keep-alive",
    "Content-Type": "application/x-www-form-urlencoded",
    "Host": "ocean.shuqireader.com",
    "User-Agent": "shuqifast/1.0.4 (iPhone; iOS 14.3; Scale/2.00)",
    "Accept-Language": "zh-Hans-CN;q=1, en-CN;q=0.9"
};
         const body = "_public=idfa%3DB69897E1-9858-46B8-9463-4A461DB9CF98%26ustatus%3D1%26net_env%3Dwifi%26umidtoken%3Dn8hLRnJLOoy3BTV715HY5oC4YhJ%2BaMcb%26placeid%3D111111%26user_id%3D2032723913%26sn%3D6D0BAA0BDD6E7797B9C3DF914A1BB96AC562DDEC%26msv%3D10.0.0%26brand%3DApple%26imei%3D227F80890B767D337CFDD98EC7E2CAFD2E93FCEF%26appVer%3D1.0.4.0%26manufacturer%3DApple%26session%3DeyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyMDMyNzIzOTEzIiwidXRkaWQiOiIiLCJpbWVpIjoiZmFzdF8yMjdGODA4OTBCNzY3RDMzN0NGREQ5OEVDN0UyQ0FGRDJFOTNGQ0VGIiwic24iOiJmYXN0XzZEMEJBQTBCREQ2RTc3OTdCOUMzREY5MTRBMUJCOTZBQzU2MkRERUMiLCJleHAiOjE2MzE4MDMxNjMsInVzZXJJZCI6IjIwMzI3MjM5MTMiLCJpYXQiOjE2MzEyODQ3NjMsIm9haWQiOiIiLCJwbGF0Zm9ybSI6IjExNiJ9.2o2lUkADEPHqWAfk7P1y0idQD-K8m_3a-zFL0l1s2pZCyYnEjJ9xdHbWTlgMRG4AM26srPnzIIj2fymZ223BxA%26statusBarHeight%3D20.000000%26platform%3D116%26ver%3D210309%26mod%3DiPhone8%26wh%3D750x1334%26utype%3Dvip%26utdid%3DYTtsdxbeZFYDAKRn2sNXOyit%26sdk%3D14.3&deliveryId=980&key=sq_app_ad&miniWua=HHnB_nq6XKSBcNOE4aozofH6Po3nFmjJJqYsiB/6NVD2%2BEKmZA30naCRYwMFpcV8yB2CGGgEydp1weGPXqDLIsc90gepiTl0qP1sTIPmlKNhkJlVvHr3CcZ7dB1nGIJRL893d0GR%2BJOK6y/nFTeuHYOPwEg%3D%3D&platform=116&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=717&sign=FA6F605EB4578AE85985FA62B2F2B2C8&timestamp=1631406982&userId=2032723913&user_id=2032723913&wua=ktgi_Rm6JbRWAtoGJqpznOPyDWXWbYA%2BNVF4lYiRo1UhgTcOoUPMEhpCS%2Bikh8Wy7jOzUUywZwM/CBgH1lUSqaoJXXARTMNLqKfJcfLYR8E6cL8QvUcJFvumHAnGZiQ20ZuKe6UACqkVdFG7x8c6wjn3/kqO/Uqd8QHd6yHiGchEzjtevExGCaMcRuD9H%2BYjy32SIoRZDxNqeqbfFN0YtZVZkSjzZINR2aC4ROISOlnpnlF1oPMrwCTT9BNKLK91fThvx9/apXg022VqlFEIIPaVgvQuj8FjC0qz7aQe4RzI6f1REbXUBxAUcbt94%2B1mZALQn63tOm%2BfiKmiF9Q4crRcVRfv1JavH3oguJK1jTGuNnBpWvUqz5EqGsmzmkaPi3IwY3qkee2m%2Bg2Hcwl8ECiNHrw%3D%3D";
        const request = {
            url: url,
            headers: headers,
            body: body
        };

        $.post(request, async (error, response, data) => {
            try {
                $.log(data);
                const result = JSON.parse(data)
                if (result.status == 200) {

                    if (result.data.chanceCurrentCnt < result.data.chanceMaxCnt) {
                        await jsvideoreward20();
                        await $.wait(500);
                    }
                }
            } catch (e) {
                $.log(e)
            }
            resolve();
        })
    })
}  

function jsvideoreward10() {
    return new Promise((resolve, reject) => {
         const url = "https://ocean.shuqireader.com/api/ad/v1/api/prize/lottery";
         const headers = {
    "Accept": "*/*",
    "Accept-Encoding": "gzip, deflate, br",
    "Connection": "keep-alive",
    "Content-Type": "application/x-www-form-urlencoded",
    "Host": "ocean.shuqireader.com",
    "User-Agent": "shuqifast/1.0.4 (iPhone; iOS 14.3; Scale/2.00)",
    "Content-Length": "1721",
    "Accept-Language": "zh-Hans-CN;q=1, en-CN;q=0.9"
};
         const body = "_public=idfa%3DB69897E1-9858-46B8-9463-4A461DB9CF98%26ustatus%3D1%26net_env%3D4g%26umidtoken%3DOXNLxI5LOi0hKTV70PfosZTPJLbwWMaW%26placeid%3D111111%26user_id%3D2032723913%26sn%3D6D0BAA0BDD6E7797B9C3DF914A1BB96AC562DDEC%26msv%3D10.0.0%26brand%3DApple%26imei%3D227F80890B767D337CFDD98EC7E2CAFD2E93FCEF%26appVer%3D1.0.4.0%26manufacturer%3DApple%26session%3DeyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyMDMyNzIzOTEzIiwidXRkaWQiOiIiLCJpbWVpIjoiZmFzdF8yMjdGODA4OTBCNzY3RDMzN0NGREQ5OEVDN0UyQ0FGRDJFOTNGQ0VGIiwic24iOiJmYXN0XzZEMEJBQTBCREQ2RTc3OTdCOUMzREY5MTRBMUJCOTZBQzU2MkRERUMiLCJleHAiOjE2MzE4MDMxNjMsInVzZXJJZCI6IjIwMzI3MjM5MTMiLCJpYXQiOjE2MzEyODQ3NjMsIm9haWQiOiIiLCJwbGF0Zm9ybSI6IjExNiJ9.2o2lUkADEPHqWAfk7P1y0idQD-K8m_3a-zFL0l1s2pZCyYnEjJ9xdHbWTlgMRG4AM26srPnzIIj2fymZ223BxA%26statusBarHeight%3D20.000000%26platform%3D116%26ver%3D210309%26mod%3DiPhone8%26wh%3D750x1334%26utype%3Dvip%26utdid%3DYTtsdxbeZFYDAKRn2sNXOyit%26sdk%3D14.3&deliveryId=980&key=sq_app_ad&miniWua=HHnB_th4r%2BBA6WLKwaysGoZWvK/CuL5NlQtT0YoTn2HWdQjL0uWQ6xNgRViZUgZPyflT09/Rxj75GIg8TJEdkG4%2BRAvP6OinOiOjrupv4o/xX8ZoPctXVCa/4hTTBIkWnehAAl7f53ckk6AUxC1qULBBWCA%3D%3D&platform=116&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=717&sign=F5FF99FD491B33BABFB8F2A9198D425F&timestamp=1631285460&userId=2032723913&user_id=2032723913&wua=ktgi_fUeX47%2BLpqR5TJgRWHdXq98W38ntyP/HHstek3eBzRRvd1DcFkq7EPM/ApaDV%2Bm0nycPxS1GCZcVdF6SPEGdI8eNwemmMKMsN%2BiTJ%2BId59UB2Hd7khT0qP9Vw2JQPz9MFUZGka3O8E1lMu4UHDhGy6CWAyR4AmIKx15G2UcGWz5HTu1tIaBpZjT1wFl1qujFYWMDd1eBnvQ1tlqjE11gR877NKrRm03rGR74%2BZoDnbiQtpJACP%2BpX4ugJwuTeMUaSAZJ/p28pVGma4CY5cGkeWvh/GzVOcwF9gQ6/KJzMYwONRTQ7vvSzcSRT9QymlJgyfh/sDo%2B0jiwUC4g6yXjzM0tizS2L5YX72ocIMtgxaXcWXcAEHXDycGIIy/9XNAL";
        const request = {
            url: url,
            headers: headers,
            body: body
        };

        $.post(request, async (error, response, data) => {
            try {
                $.log(data);
                const result = JSON.parse(data)
                if (result.status == 200) {

                    if (result.data.chanceCurrentCnt < result.data.chanceMaxCnt) {
                        await jsvideoreward10();
                        await $.wait(500);
                    }
                }
            } catch (e) {
                $.log(e)
            }
            resolve();
        })
    })
}



function Env(t, e) {
    class s {
        constructor(t) {
            this.env = t
        }
        send(t, e = "GET") {
            t = "string" == typeof t ? {
                url: t
            }
                : t;
            let s = this.get;
            return "POST" === e && (s = this.post),
                new Promise((e, i) => {
                    s.call(this, t, (t, s, r) => {
                        t ? i(t) : e(s)
                    })
                })
        }
        get(t) {
            return this.send.call(this.env, t)
        }
        post(t) {
            return this.send.call(this.env, t, "POST")
        }
    }
    return new class {
        constructor(t, e) {
            this.name = t,
                this.http = new s(this),
                this.data = null,
                this.dataFile = "box.dat",
                this.logs = [],
                this.isMute = !1,
                this.isNeedRewrite = !1,
                this.logSeparator = "\n",
                this.startTime = (new Date).getTime(),
                Object.assign(this, e),
                this.log(`\n${this.name}\u811a\u672c,\u5f00\u59cb\u6267\u884c:`)
        }
        isNode() {
            return "undefined" != typeof module && !!module.exports
        }
        isQuanX() {
            return "undefined" != typeof $task
        }
        isSurge() {
            return "undefined" != typeof $httpClient && "undefined" == typeof $loon
        }
        isLoon() {
            return "undefined" != typeof $loon
        }
        toObj(t, e = null) {
            try {
                return JSON.parse(t)
            } catch {
                return e
            }
        }
        toStr(t, e = null) {
            try {
                return JSON.stringify(t)
            } catch {
                return e
            }
        }
        getjson(t, e) {
            let s = e;
            const i = this.getdata(t);
            if (i)
                try {
                    s = JSON.parse(this.getdata(t))
                } catch { }
            return s
        }
        setjson(t, e) {
            try {
                return this.setdata(JSON.stringify(t), e)
            } catch {
                return !1
            }
        }
        getScript(t) {
            return new Promise(e => {
                this.get({
                    url: t
                }, (t, s, i) => e(i))
            })
        }
        runScript(t, e) {
            return new Promise(s => {
                let i = this.getdata("@chavy_boxjs_userCfgs.httpapi");
                i = i ? i.replace(/\n/g, "").trim() : i;
                let r = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
                r = r ? 1 * r : 20,
                    r = e && e.timeout ? e.timeout : r;
                const [o, h] = i.split("@"),
                    a = {
                        url: `http://${h}/v1/scripting/evaluate`,
                        body: {
                            script_text: t,
                            mock_type: "cron",
                            timeout: r
                        },
                        headers: {
                            "X-Key": o,
                            Accept: "*/*"
                        }
                    };
                this.post(a, (t, e, i) => s(i))
            }).catch(t => this.logErr(t))
        }
        loaddata() {
            if (!this.isNode())
                return {}; {
                this.fs = this.fs ? this.fs : require("fs"),
                    this.path = this.path ? this.path : require("path");
                const t = this.path.resolve(this.dataFile),
                    e = this.path.resolve(process.cwd(), this.dataFile),
                    s = this.fs.existsSync(t),
                    i = !s && this.fs.existsSync(e);
                if (!s && !i)
                    return {}; {
                    const i = s ? t : e;
                    try {
                        return JSON.parse(this.fs.readFileSync(i))
                    } catch (t) {
                        return {}
                    }
                }
            }
        }
        writedata() {
            if (this.isNode()) {
                this.fs = this.fs ? this.fs : require("fs"),
                    this.path = this.path ? this.path : require("path");
                const t = this.path.resolve(this.dataFile),
                    e = this.path.resolve(process.cwd(), this.dataFile),
                    s = this.fs.existsSync(t),
                    i = !s && this.fs.existsSync(e),
                    r = JSON.stringify(this.data);
                s ? this.fs.writeFileSync(t, r) : i ? this.fs.writeFileSync(e, r) : this.fs.writeFileSync(t, r)
            }
        }
        lodash_get(t, e, s) {
            const i = e.replace(/\[(\d+)\]/g, ".$1").split(".");
            let r = t;
            for (const t of i)
                if (r = Object(r)[t], void 0 === r)
                    return s;
            return r
        }
        lodash_set(t, e, s) {
            return Object(t) !== t ? t : (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce((t, s, i) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ? [] : {}, t)[e[e.length - 1]] = s, t)
        }
        getdata(t) {
            let e = this.getval(t);
            if (/^@/.test(t)) {
                const [, s, i] = /^@(.*?)\.(.*?)$/.exec(t),
                    r = s ? this.getval(s) : "";
                if (r)
                    try {
                        const t = JSON.parse(r);
                        e = t ? this.lodash_get(t, i, "") : e
                    } catch (t) {
                        e = ""
                    }
            }
            return e
        }
        setdata(t, e) {
            let s = !1;
            if (/^@/.test(e)) {
                const [, i, r] = /^@(.*?)\.(.*?)$/.exec(e),
                    o = this.getval(i),
                    h = i ? "null" === o ? null : o || "{}" : "{}";
                try {
                    const e = JSON.parse(h);
                    this.lodash_set(e, r, t),
                        s = this.setval(JSON.stringify(e), i)
                } catch (e) {
                    const o = {};
                    this.lodash_set(o, r, t),
                        s = this.setval(JSON.stringify(o), i)
                }
            } else
                s = this.setval(t, e);
            return s
        }
        getval(t) {
            return this.isSurge() || this.isLoon() ? $persistentStore.read(t) : this.isQuanX() ? $prefs.valueForKey(t) : this.isNode() ? (this.data = this.loaddata(), this.data[t]) : this.data && this.data[t] || null
        }
        setval(t, e) {
            return this.isSurge() || this.isLoon() ? $persistentStore.write(t, e) : this.isQuanX() ? $prefs.setValueForKey(t, e) : this.isNode() ? (this.data = this.loaddata(), this.data[e] = t, this.writedata(), !0) : this.data && this.data[e] || null
        }
        initGotEnv(t) {
            this.got = this.got ? this.got : require("got"),
                this.cktough = this.cktough ? this.cktough : require("tough-cookie"),
                this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar,
                t && (t.headers = t.headers ? t.headers : {}, void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar))
        }
        get(t, e = (() => { })) {
            t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"]),
                this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
                    "X-Surge-Skip-Scripting": !1
                })), $httpClient.get(t, (t, s, i) => {
                    !t && s && (s.body = i, s.statusCode = s.status),
                        e(t, s, i)
                })) : this.isQuanX() ? (this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
                    hints: !1
                })), $task.fetch(t).then(t => {
                    const {
                        statusCode: s,
                        statusCode: i,
                        headers: r,
                        body: o
                    } = t;
                    e(null, {
                        status: s,
                        statusCode: i,
                        headers: r,
                        body: o
                    }, o)
                }, t => e(t))) : this.isNode() && (this.initGotEnv(t), this.got(t).on("redirect", (t, e) => {
                    try {
                        if (t.headers["set-cookie"]) {
                            const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
                            this.ckjar.setCookieSync(s, null),
                                e.cookieJar = this.ckjar
                        }
                    } catch (t) {
                        this.logErr(t)
                    }
                }).then(t => {
                    const {
                        statusCode: s,
                        statusCode: i,
                        headers: r,
                        body: o
                    } = t;
                    e(null, {
                        status: s,
                        statusCode: i,
                        headers: r,
                        body: o
                    }, o)
                }, t => {
                    const {
                        message: s,
                        response: i
                    } = t;
                    e(s, i, i && i.body)
                }))
        }
        post(t, e = (() => { })) {
            if (t.body && t.headers && !t.headers["Content-Type"] && (t.headers["Content-Type"] = "application/x-www-form-urlencoded"), t.headers && delete t.headers["Content-Length"], this.isSurge() || this.isLoon())
                this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
                    "X-Surge-Skip-Scripting": !1
                })), $httpClient.post(t, (t, s, i) => {
                    !t && s && (s.body = i, s.statusCode = s.status),
                        e(t, s, i)
                });
            else if (this.isQuanX())
                t.method = "POST", this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
                    hints: !1
                })), $task.fetch(t).then(t => {
                    const {
                        statusCode: s,
                        statusCode: i,
                        headers: r,
                        body: o
                    } = t;
                    e(null, {
                        status: s,
                        statusCode: i,
                        headers: r,
                        body: o
                    }, o)
                }, t => e(t));
            else if (this.isNode()) {
                this.initGotEnv(t);
                const {
                    url: s,
                    ...i
                } = t;
                this.got.post(s, i).then(t => {
                    const {
                        statusCode: s,
                        statusCode: i,
                        headers: r,
                        body: o
                    } = t;
                    e(null, {
                        status: s,
                        statusCode: i,
                        headers: r,
                        body: o
                    }, o)
                }, t => {
                    const {
                        message: s,
                        response: i
                    } = t;
                    e(s, i, i && i.body)
                })
            }
        }
        time(t) {
            let e = {
                "M+": (new Date).getMonth() + 1,
                "d+": (new Date).getDate(),
                "H+": (new Date).getHours(),
                "m+": (new Date).getMinutes(),
                "s+": (new Date).getSeconds(),
                "q+": Math.floor(((new Date).getMonth() + 3) / 3),
                S: (new Date).getMilliseconds()
            };
            /(y+)/.test(t) && (t = t.replace(RegExp.$1, ((new Date).getFullYear() + "").substr(4 - RegExp.$1.length)));
            for (let s in e)
                new RegExp("(" + s + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? e[s] : ("00" + e[s]).substr(("" + e[s]).length)));
            return t
        }
        msg(e = t, s = "", i = "", r) {
            const o = t => {
                if (!t)
                    return t;
                if ("string" == typeof t)
                    return this.isLoon() ? t : this.isQuanX() ? {
                        "open-url": t
                    }
                        : this.isSurge() ? {
                            url: t
                        }
                            : void 0;
                if ("object" == typeof t) {
                    if (this.isLoon()) {
                        let e = t.openUrl || t.url || t["open-url"],
                            s = t.mediaUrl || t["media-url"];
                        return {
                            openUrl: e,
                            mediaUrl: s
                        }
                    }
                    if (this.isQuanX()) {
                        let e = t["open-url"] || t.url || t.openUrl,
                            s = t["media-url"] || t.mediaUrl;
                        return {
                            "open-url": e,
                            "media-url": s
                        }
                    }
                    if (this.isSurge()) {
                        let e = t.url || t.openUrl || t["open-url"];
                        return {
                            url: e
                        }
                    }
                }
            };
            this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(e, s, i, o(r)) : this.isQuanX() && $notify(e, s, i, o(r)));
            let h = ["", "==============\ud83d\udce3\u7cfb\u7edf\u901a\u77e5\ud83d\udce3=============="];
            h.push(e),
                s && h.push(s),
                i && h.push(i),
                console.log(h.join("\n")),
                this.logs = this.logs.concat(h)
        }
        log(...t) {
            t.length > 0 && (this.logs = [...this.logs, ...t]),
                console.log(t.join(this.logSeparator))
        }
        logErr(t, e) {
            const s = !this.isSurge() && !this.isQuanX() && !this.isLoon();
            s ? this.log("", `\u2757\ufe0f${this.name}, \u9519\u8bef!`, t.stack) : this.log("", `\u2757\ufe0f${this.name}, \u9519\u8bef!`, t)
        }
        wait(t) {
            return new Promise(e => setTimeout(e, t))
        }
        done(t = {}) {
            const e = (new Date).getTime(),
                s = (e - this.startTime) / 1e3;
            this.log("", `${this.name}\u811a\u672c, \u6267\u884c\u7ed3\u675f! \u7528\u65f6${s}\u79d2`),
                this.log(),
                (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(t)
        }
    }
        (t, e)
}
