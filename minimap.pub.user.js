// ==UserScript==
// @name         Minimap
// @namespace    traa-pixelcanvas/Minimap
// @version      0.13
// @description  Minimap for PixelCanvas
// @author       Exel80#0080 & Terrienne#2453
// @match        http://pixelcanvas.io/*
// @match        https://pixelcanvas.io/*
// @grant        GM_addStyle
// @grant        GM_getResourceText
// @require      https://use.fontawesome.com/releases/v5.0.10/js/all.js
// @require      https://code.jquery.com/jquery-2.2.4.min.js
// @require      https://cdnjs.cloudflare.com/ajax/libs/jquery-cookie/1.4.1/jquery.cookie.min.js
// @require      https://code.jquery.com/ui/1.12.1/jquery-ui.min.js
// @resource     jQueryCss https://code.jquery.com/ui/1.12.1/themes/base/jquery-ui.min.css
// @copyright    2018 © Exel80#0080 & Terrienne#2453
// @license      https://creativecommons.org/licenses/by-nc-nd/4.0/
// @updateURL    https://raw.githubusercontent.com/traa-pixelcanvas/Minimap/master/minimap.pub.user.js
// @downloadURL  https://raw.githubusercontent.com/traa-pixelcanvas/Minimap/master/minimap.pub.user.js
// ==/UserScript==

Number['prototype']['between'] = function(_0x9fa6x1, _0x9fa6x2) {
    var _0x9fa6x3 = Math['min']['apply'](Math, [_0x9fa6x1, _0x9fa6x2]),
        _0x9fa6x4 = Math['max']['apply'](Math, [_0x9fa6x1, _0x9fa6x2]);
    return this > _0x9fa6x3 && this < _0x9fa6x4
};
dataUrl = 'https://raw.githubusercontent.com/traa-pixelcanvas/Minimap/master/templates/';
$('head')['append']('<link rel=\'stylesheet\' href=\'https://code.jquery.com/ui/1.12.1/themes/base/jquery-ui.min.css\' type=\'text/css\' media=\'screen\'>');
$('head')['append']($('<style>h2.title { margin:0px auto; padding:10px; }\x0D\x0A.moveUp {position:absolute; bottom:6em; left:0.3333em;}\x0D\x0A.groupUp { bottom: initial !important; left: initial !important; position: initial !important; display: inline-block !important;}\x0D\x0A.colorsLeft {margin-left:0.333em !important;}\x0D\x0A.close { color:black; position:absolute; top:0.8em; right:1em; cursor:pointer; }\x0D\x0A.discord { color:black; position:absolute; top:0.75em; right:2.55em; cursor:pointer; }\x0D\x0A.smooth { overflow:auto; padding-top:4px; padding-bottom:4px; }\x0D\x0A.settings-list { margin:2px; text-shadow:1px 1px 8px white; position:relative; list-style-type:none; padding:0; display:table; width:99%;}\x0D\x0A.settings-list li:nth-child(odd) { background:linear-gradient(to right, rgba(228,228,228,0.65), rgba(0,0,0,0)); }\x0D\x0A.settings-button { right:0.5em; } .small{font-size:12px;} .smalltext{font-size:10px; width:120px;}\x0D\x0A.SettingsCss { width:280px; height:400px; display:none; border:3px solid rgba(34,34,34,0.75); overflow:hidden; background-color:rgba(255,255,255,0.95); position:absolute; top:-10%; bottom:0; left:0; right:0; margin:auto; }\x0D\x0A.GotoCss { width:280px; height:110px; display:none; border:3px solid rgba(34,34,34,0.75); overflow:hidden; background-color:rgba(255,255,255,0.95); position:absolute; top:-20%; bottom:0; left:0; right:0; margin:auto; }\x0D\x0A#minimap-backup {background-color:rgba(0,0,0,0.75); height:50px; border-radius:5px; position:absolute; right:1em; bottom:1em;}\x0D\x0A#minimap-content {background-color:rgba(0,0,0,0.75); width:480px; height:270px; border-radius:5px; position:absolute; right:1em; bottom:1em; outline: 4px solid white;}\x0D\x0A.fleft {float:left;} .fright {float:right;}\x0D\x0A.minimize { opacity: 0.45; filter: alpha(opacity=45); /* For IE8 and earlier */ }\x0D\x0A#minimap-settings { z-index:6; position:absolute; right:0em; bottom:0; width:480px; background-color:rgba(0,0,0,0.5);}\x0D\x0A#minimap {width:100%; top:0; height:100%; z-index:0; outline: 4px solid black!important; outline-offset: -2px;} #minimap-grid {width:100%; top:0; height:100%; z-index:1;} #minimap-cursor {width:100%; top:0; height:100%; z-index:2;}\x0D\x0A.clickable { cursor:pointer; font-weight:bold; }\x0D\x0Aul.toolbar { justify-content: space-around; white-space:nowrap;  display:-webkit-flex; -webkit-justify-content:center; display:flex; justify-content:center; z-index:6; position:relative !important; line-height:25px; list-style-type:none; margin:0; border-style:none; overflow:hidden; text-align:center; color:white; }\x0D\x0Ali.toolbar { z-index:6; float:left; } li.padding { padding-left:20px; } li.smallPadding { padding-left:4px; }\x0D\x0A.ui-slider .ui-slider-handle { width:1em !important; }\x0D\x0A.footer { font-size:8px; position:absolute; bottom:.5em; text-align:center; }\x0D\x0A.slider { right:0em !important; width:6.25em !important; }\x0D\x0A#config-categorie { height:50px;width:275px;border:1px solid #ccc; overflow:auto; font-size: 14px; }\x0D\x0A#BoxedSettings { height:180px;width:275px;border:1px solid #ccc; overflow:auto; font-size: 14px; }\x0D\x0A#i1, #i2, #i3 { text-align: center; display:inline-block; width: 33.3%; }\x0D\x0A#custom-slider-cursor { width: 1em !important; font-size:12px; position:relative !important; height: 1.25em; top: 50%; margin-top: -.75em; text-align: center; line-height: 1.6em !important; }\x0D\x0A#custom-slider-grid { width: 1em !important; font-size:12px; position:relative !important; height: 1.25em; top: 50%; margin-top: -.75em; text-align: center; line-height: 1.6em !important; }\x0D\x0Acanvas { position:absolute; image-rendering:optimizeSpeed; image-rendering:-moz-crisp-edges; image-rendering:-webkit-optimize-contrast; image-rendering:-o-crisp-edges; image-rendering:optimize-contrast; -ms-interpolation-mode:nearest-neighbor; }\x0D\x0A.menu-text { display:inline; }\x0D\x0A.CookiesButton { float:right; background-color:DarkGreen; color:white; font-weight:bold; cursor:pointer; border-color:DarkGreen; font-size: 14px !important; }\x0D\x0A.CookiesButton:hover { float:right; background-color:DarkGreen !important; color:white; font-weight:bold; cursor:pointer; border-color:lime !important; font-size: 14px !important; }\x0D\x0Aspan.cookiesAndMilk { color:white; float:left; padding-top:5px; display:block; margin-left:.5em; font-size: 13px; }</style>'));
minimapHTML = '\x0D\x0A<div id="goto" class="GotoCss">\x0D\x0A  <h2 class="title"> Goto template </h2>\x0D\x0A  <div id="close-goto" class="close"><i class="fas fa-window-close"></i></div>\x0D\x0A  <div class="ui-widget" style="padding:5px;">\x0D\x0A    <label for="inputName">Template name: </label>\x0D\x0A    <input id="inputName">\x0D\x0A    <button id="enter-goto" class="ui-button ui-widget ui-corner-all">GO!</button>\x0D\x0A  </div>\x0D\x0A</div>\x0D\x0A<div id="settings" class="SettingsCss">\x0D\x0A   <h2 class="title"> Settings </h2>\x0D\x0A   <div id="discord-link" class="discord"><small><u>Join Discord</u></small> <i class="fab fa-discord"></i></div>\x0D\x0A   <div id="close-settings" class="close"><i class="fas fa-window-close"></i></div>\x0D\x0A   <ul class="settings-list">\x0D\x0A\x0D\x0A      <!-- CATEGORIE  -->\x0D\x0A      <li class="smooth"><div class="fleft small">Template categorie(s): </div>\x0D\x0A      <div id="config-categorie"></div></li>\x0D\x0A\x0D\x0A     <div id="BoxedSettings">\x0D\x0A        <!-- HIDE ZOOM -->\x0D\x0A        <li class="smooth"><div class="fleft small">Hide zoom slider</div>\x0D\x0A          <div id="config-hidezoom" class="fright clickable settings-button">Hide</div>\x0D\x0A        </li>\x0D\x0A\x0D\x0A        <!-- HIDE CURSOR  -->\x0D\x0A        <li class="smooth"><div class="fleft small">Hide cursor</div>\x0D\x0A          <div id="config-hidecursor" class="fright clickable settings-button">Hide</div>\x0D\x0A        </li>\x0D\x0A\x0D\x0A        <!-- HIDE GRID  -->\x0D\x0A        <li class="smooth"><div class="fleft small">Hide grid</div>\x0D\x0A          <div id="config-hidegrid" class="fright clickable settings-button">Hide</div>\x0D\x0A        </li>\x0D\x0A\x0D\x0A        <!-- PLACE PALLET -->\x0D\x0A        <li class="smooth"><div class="fleft small">Place palette</div>\x0D\x0A          <div id="config-centerpallet" class="fright clickable settings-button">Center</div>\x0D\x0A        </li>\x0D\x0A\x0D\x0A        <!-- DISPLAY TEXT  -->\x0D\x0A        <li class="smooth"><div class="fleft small">Display text</div><div id="config-displaytext" class="fright settings-button">\x0D\x0A        <select id="config-text" class="fright">\x0D\x0A          <option>Icons and Text</option>\x0D\x0A          <option>Text only</option>\x0D\x0A          <option>Icons only</option>\x0D\x0A        </select>\x0D\x0A        </div></li>\x0D\x0A\x0D\x0A        <!-- CURSOR COLOR  -->\x0D\x0A        <li class="smooth" style="padding-bottom:0.5em;"><div class="fleft small">Cursor color</div><div id="config-cursorcolor" class="fright settings-button">\x0D\x0A          <select runat="server" id="CursorColor" style="min-width:105px;">\x0D\x0A            <option value="NAVY" style="background-color: #001f3f;" />\x0D\x0A            <option value="BLUE" style="background-color: #0074D9;" />\x0D\x0A            <option value="AQUA" style="background-color: #7FDBFF;" />\x0D\x0A            <option value="TEAL" style="background-color: #39CCCC;" />\x0D\x0A            <option value="OLIVE" style="background-color: #3D9970;" />\x0D\x0A            <option value="GREEN" style="background-color: #2ECC40;" />\x0D\x0A            <option value="LIME" style="background-color: #01FF70;" />\x0D\x0A            <option value="YELLOW" style="background-color: #FFDC00;" />\x0D\x0A            <option value="ORANGE" style="background-color: #FF851B;" />\x0D\x0A            <option value="RED" style="background-color: #FF4136;" />\x0D\x0A            <option value="MAROON" style="background-color: #85144b;" />\x0D\x0A            <option value="FUCHSIA" style="background-color: #F012BE;" />\x0D\x0A            <option value="PURPLE" style="background-color: #B10DC9;" />\x0D\x0A            <option value="BLACK" style="background-color: #111111;" />\x0D\x0A            <option value="GRAY" style="background-color: #AAAAAA;" />\x0D\x0A            <option value="SILVER" style="background-color: #DDDDDD;" />\x0D\x0A          </select>\x0D\x0A        </div></li>\x0D\x0A\x0D\x0A        <!-- SLIDER CURSOR  -->\x0D\x0A        <li class="smooth"><div class="fleft small">Cursor transparency</div><div id="config-cursoralpha" class="fright settings-button">\x0D\x0A          <div id="slider-cursor" class="slider"><div id="custom-slider-cursor" class="ui-slider-handle"></div></div>\x0D\x0A        </div></li>\x0D\x0A\x0D\x0A        <!-- SLIDER GRID  -->\x0D\x0A        <li class="smooth"><div class="fleft small">Grid transparency</div><div id="config-gridalpha" class="fright settings-button">\x0D\x0A          <div id="slider-grid" class="slider"><div id="custom-slider-grid" class="ui-slider-handle"></div></div>\x0D\x0A        </div></li>\x0D\x0A    </div>\x0D\x0A\x0D\x0A     <li style="padding:3px"><!-- SPACE --></li>\x0D\x0A\x0D\x0A     <!-- RESET BUTTON -->\x0D\x0A     <li class="smooth">\x0D\x0A       <div id="config-reset" class="fright clickable settings-button">Reset settings</div>\x0D\x0A     </li>\x0D\x0A   </ul>\x0D\x0A\x0D\x0A   <div class="footer"><a rel="license" href="http://creativecommons.org/licenses/by-nc-nd/4.0/" target="_blank"><img alt="Creative Commons License" style="border-width:0; float:left; margin-top:10px; margin-left:5px;" src="https://i.creativecommons.org/l/by-nc-nd/4.0/88x31.png" /></a><br />This work is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-nc-nd/4.0/" target="_blank">Creative Commons Attribution-NonCommercial-NoDerivatives 4.0 International License</a>.</div>\x0D\x0A</div>\x0D\x0A<div id="minimap-backup" style="display:none"><span class="clickable" style="color:white; display:block;padding: 15px 20px;"> <i class="fas fa-eye menu-icon"></i> <div class="menu-text"> Open minimap </div> </span></div>\x0D\x0A<div id="minimap-content">\x0D\x0A   <div id="slider-vertical" style="height:200px; width:0.5em; position:absolute; top:1em; right:1em; opacity:0.45; z-index:9;"></div>\x0D\x0A   <canvas id="minimap" width="1024" height="540"></canvas>\x0D\x0A   <canvas id="minimap-grid" width="1024" height="540"></canvas>\x0D\x0A   <canvas id="minimap-cursor" width="1024" height="540"></canvas>\x0D\x0A<div id="minimap-settings" style="margin-left: -20px">\x0D\x0A  <ul class="toolbar">\x0D\x0A      <div id="i1"> <li class="toolbar clickable" id="hide-map"> <i class="fas fa-eye-slash menu-icon"></i> <div class="menu-text"> Hide minimap </div> </li> </div>\x0D\x0A      <div id="i2"> <li class="toolbar clickable" id="open-goto"> <i class="fas fa-chevron-circle-up menu-icon"></i> <div class="menu-text"> Goto template </div> </li> </div>\x0D\x0A      <div id="i3"> <li class="toolbar clickable" id="open-settings"> <i class="fas fa-cog menu-icon"></i> <div class="menu-text"> Settings </div> </li> </div>\x0D\x0A  </ul>\x0D\x0A</div>\x0D\x0A</div>';
cookieHTML = '\x0D\x0A<div id="CookieBar" style="z-index:999; position:absolute; background-color:black; right:0; top:0; width:480px;">\x0D\x0A  <span class="cookiesAndMilk">We use cookies and milk to keep track your settings.</span>\x0D\x0A  <button id="CookiesOk" class="CookiesButton ui-button ui-widget ui-corner-all">I Understand!</button>\x0D\x0A</div>';
var attempt = 0;
var curX = null;
var curY = null;
var _zoom = 35;
var max_zoom = 60;
var FinalZoom = calcZoom(Math['pow'](1.1, _zoom));
var templateList = [];
var categorieList = [];
var storedTemplates = {};
var cursorColor = '#001f3f';
var cursorAlpha = 90;
var gridAlpha = 50;
var showSlider = true;
var showCursor = true;
var showGrid = true;
var textDisplay = 0;
var centerPallet = true;
var availableFactions = [];
var hitzone = 0;
$(document)['ready'](function() {
    'use strict';
    loadJsonLoop();
    loadTemplates();
    $('div#app')['children']()['append'](minimapHTML);
    if ($['cookie']('WeUseCookies') === '0' || (typeof $['cookie']('WeUseCookies') === 'undefined')) {
        $('div#minimap-content')['append'](cookieHTML)
    };
    setupCookies();
    setupCanvas();
    setupEvents();
    $('#slider-vertical')['slider']('value', _zoom)
});

function setupCookies() {
    if (typeof $['cookie']('showMinimap') === 'undefined') {
        $['cookie']('showMinimap', 'true', {
            expires: 365
        })
    } else {
        if ($['cookie']('showMinimap') === 'false') {
            $('#minimap-content')['hide']();
            $('#minimap-backup')['show']()
        }
    };
    if (typeof $['cookie']('cursorColor') === 'undefined') {
        getCursorColor('NAVY', true)
    } else {
        console['log'](getCursorColor($['cookie']('cursorColor')));
        getCursorColor($['cookie']('cursorColor'))
    };
    if (typeof $['cookie']('WeUseCookies') === 'undefined') {
        $['cookie']('WeUseCookies', 0, {
            expires: 365
        })
    };
    if (typeof $['cookie']('cursorAlpha') === 'undefined') {
        $['cookie']('cursorAlpha', cursorAlpha, {
            expires: 365
        })
    } else {
        cursorAlpha = $['cookie']('cursorAlpha')
    };
    if (typeof $['cookie']('gridAlpha') === 'undefined') {
        $['cookie']('gridAlpha', gridAlpha, {
            expires: 365
        })
    } else {
        gridAlpha = $['cookie']('gridAlpha')
    };
    if (typeof $['cookie']('showSlider') === 'undefined') {
        $['cookie']('showSlider', 'true', {
            expires: 365
        })
    } else {
        showSlider = $['cookie']('showSlider') === 'true' ? true : false;
        $('#config-hidezoom')['text']((!showSlider ? 'Show' : 'Hide'));
        if (showSlider) {
            $('#slider-vertical')['show']()
        } else {
            $('#slider-vertical')['hide']()
        }
    };
    if (typeof $['cookie']('showCursor') === 'undefined') {
        $['cookie']('showCursor', 'true', {
            expires: 365
        })
    } else {
        showCursor = $['cookie']('showCursor') === 'true' ? true : false;
        $('#config-hidecursor')['text']((!showCursor ? 'Show' : 'Hide'))
    };
    if (typeof $['cookie']('showGrid') === 'undefined') {
        $['cookie']('showGrid', 'true', {
            expires: 365
        })
    } else {
        showGrid = $['cookie']('showGrid') === 'true' ? true : false;
        $('#config-hidegrid')['text']((!showGrid ? 'Show' : 'Hide'))
    };
    if (typeof $['cookie']('centerPallet') === 'undefined') {
        $['cookie']('centerPallet', 'true', {
            expires: 365
        })
    } else {
        centerPallet = $['cookie']('centerPallet') === 'true' ? true : false;
        $('#config-centerpallet')['text']((!centerPallet ? 'Center' : 'Left'));
        if (!centerPallet) {
            $('div#colors')['addClass']('colorsLeft');
            $('#app > div:nth-child(1) > div:nth-child(9)')['addClass']('moveUp');
            $('#app > div:nth-child(1) > div:nth-child(9) > div:nth-child(2)')['addClass']('groupUp');
            $('#app > div:nth-child(1) > div:nth-child(9) > div:nth-child(1)')['addClass']('groupUp')
        }
    };
    if (typeof $['cookie']('textDisplay') === 'undefined') {
        $['cookie']('textDisplay', textDisplay, {
            expires: 365
        })
    } else {
        textDisplay = $['cookie']('textDisplay');
        $('#config-text')['prop']('selectedIndex', textDisplay);
        _displayText = $('#config-text option:selected')['text']();
        if (_displayText === 'Icons and Text') {
            textDisplay = 0;
            $['cookie']('textDisplay', 0, {
                expires: 365
            });
            $('.menu-text')['show']();
            $('.menu-icon')['show']()
        } else {
            if (_displayText === 'Text only') {
                textDisplay = 1;
                $['cookie']('textDisplay', 1, {
                    expires: 365
                });
                $('.menu-text')['show']();
                $('.menu-icon')['hide']()
            } else {
                if (_displayText === 'Icons only') {
                    textDisplay = 2;
                    $['cookie']('textDisplay', 2, {
                        expires: 365
                    });
                    $('.menu-text')['hide']();
                    $('.menu-icon')['show']()
                }
            }
        }
    };
    if (typeof $['cookie']('zoom') === 'undefined') {
        $['cookie']('zoom', _zoom, {
            expires: 365
        })
    } else {
        _zoom = $['cookie']('zoom');
        FinalZoom = calcZoom(Math['pow'](1.1, _zoom))
    };
    if (typeof $['cookie']('categories') === 'undefined') {
        $['cookie']('categories', '', {
            expires: 365
        })
    } else {
        var _0x9fa6x19 = $['cookie']('categories')['split'](' ');
        console['log'](('Checked categories: ' + _0x9fa6x19 + ', Cookie: ' + ($['cookie']('categories')) + ', '));
        _url = dataUrl + '!data.json';
        $['ajax']({
            type: 'GET',
            url: _url,
            dataType: 'json',
            success: function(_0x9fa6x1a) {
                categories = jQuery['parseJSON'](JSON['stringify'](_0x9fa6x1a))['Categories'];
                categories['sort']();
                for (var _0x9fa6x1b = 0; _0x9fa6x1b < categories['length']; _0x9fa6x1b++) {
                    $('#config-categorie')['append'](('<label><input type="checkbox" name="' + (categories[_0x9fa6x1b][1]) + '" ' + ($['inArray'](categories[_0x9fa6x1b][1], _0x9fa6x19) > -1 ? 'checked=true' : '') + ' id="check-' + (categories[_0x9fa6x1b][1]) + '">' + (categories[_0x9fa6x1b][0]) + '</label>'))
                }
            }
        })
    };
    console['log'](('' + ($['cookie']('cursorAlpha')) + ' ' + ($['cookie']('gridAlpha')) + ' ' + ($['cookie']('showCursor')) + ' ' + ($['cookie']('showGrid')) + ' ' + ($['cookie']('textDisplay')) + ' ' + ($['cookie']('zoom')) + ''))
}

function setupEvents() {
    $('#CursorColor')['change'](function() {
        getCursorColor($(this)['val'](), true)
    });
    $('#CookiesOk')['click'](function() {
        $['cookie']('WeUseCookies', 1, {
            expires: 365
        });
        $('#CookieBar')['slideUp'](100)
    });
    $('#discord-link')['click'](function() {
        window['open']('https://discord.io/pixelatlas', '_blank')
    });
    $('#inputName')['autocomplete']({
        source: availableFactions
    });
    $('#enter-goto')['click'](function() {
        inputTxt = $('#inputName')['val']();
        if (templateList['hasOwnProperty'](inputTxt)) {
            var _0x9fa6x1d = Math['round'](templateList[inputTxt]['x'] + (templateList[inputTxt]['width'] / 2));
            var _0x9fa6x1e = Math['round'](templateList[inputTxt]['y'] + (templateList[inputTxt]['height'] / 2));
            window['location']['replace'](('http://pixelcanvas.io/@' + _0x9fa6x1d + ',' + _0x9fa6x1e + ''))
        }
    });
    $('#inputName')['keypress'](function(_0x9fa6x1f) {
        if (_0x9fa6x1f['which'] == 13) {
            inputTxt = $('#inputName')['val']();
            if (templateList['hasOwnProperty'](inputTxt)) {
                var _0x9fa6x1d = Math['round'](templateList[inputTxt]['x'] + (templateList[inputTxt]['width'] / 2));
                var _0x9fa6x1e = Math['round'](templateList[inputTxt]['y'] + (templateList[inputTxt]['height'] / 2));
                window['location']['replace'](('http://pixelcanvas.io/@' + _0x9fa6x1d + ',' + _0x9fa6x1e + ''))
            }
        }
    });
    $('#open-goto')['click'](function() {
        var _0x9fa6x20 = $('#goto');
        var _0x9fa6x21 = $('.GotoCss:visible');
        if (_0x9fa6x21['length'] > 0) {
            $('.GotoCss:visible')['slideUp'](500);
            return
        };
        VisibleBoxies();
        _0x9fa6x20['slideDown'](500)
    });
    var _0x9fa6x22 = $('#custom-slider-cursor');
    $('#slider-cursor')['slider']({
        range: 'min',
        min: 0,
        max: 100,
        value: $['cookie']('cursorAlpha'),
        create: function() {
            val = $(this)['slider']('value');
            _0x9fa6x22['text'](val);
            cursorAlpha = parseInt(val);
            $['cookie']('cursorAlpha', cursorAlpha, {
                expires: 365
            })
        },
        slide: function(_0x9fa6x1f, _0x9fa6x23) {
            val = _0x9fa6x23['value'];
            _0x9fa6x22['text'](_0x9fa6x23['value']);
            cursorAlpha = parseInt(val);
            $['cookie']('cursorAlpha', cursorAlpha, {
                expires: 365
            })
        }
    });
    var _0x9fa6x24 = $('#custom-slider-grid');
    $('#slider-grid')['slider']({
        range: 'min',
        min: 0,
        max: 100,
        value: $['cookie']('gridAlpha'),
        create: function() {
            val = $(this)['slider']('value');
            _0x9fa6x24['text']($(this)['slider']('value'));
            gridAlpha = parseInt(val);
            $['cookie']('gridAlpha', gridAlpha, {
                expires: 365
            })
        },
        slide: function(_0x9fa6x1f, _0x9fa6x23) {
            val = _0x9fa6x23['value'];
            _0x9fa6x24['text'](_0x9fa6x23['value']);
            gridAlpha = parseInt(val);
            $['cookie']('gridAlpha', gridAlpha, {
                expires: 365
            })
        }
    });
    $('#config-reset')['click'](function() {
        if (window['confirm']('Are you sure?')) {
            cursorAlpha = 90;
            cursorColor = 'NAVY';
            gridAlpha = 50;
            showSlider = true;
            showCursor = true;
            showGrid = true;
            textDisplay = 0;
            _zoom = 30;
            centerPallet = true;
            _0x9fa6x22['text'](cursorAlpha);
            _0x9fa6x24['text'](gridAlpha);
            $['cookie']('cursorAlpha', cursorAlpha, {
                expires: 365
            });
            $['cookie']('gridAlpha', gridAlpha, {
                expires: 365
            });
            $['cookie']('showCursor', showCursor, {
                expires: 365
            });
            $['cookie']('showGrid', showGrid, {
                expires: 365
            });
            $['cookie']('textDisplay', textDisplay, {
                expires: 365
            });
            $['cookie']('zoom', _zoom, {
                expires: 365
            });
            $['cookie']('centerPallet', centerPallet, {
                expires: 365
            });
            $['cookie']('categories', '', {
                expires: 365
            });
            $['cookie']('cursorColor', 'NAVY', {
                expires: 365
            });
            window['location']['reload']()
        }
    });
    $('#config-text')['click'](function() {
        _displayText = $('#config-text option:selected')['text']();
        console['log'](_displayText);
        if (_displayText === 'Icons and Text') {
            textDisplay = 0;
            $['cookie']('textDisplay', 0, {
                expires: 365
            });
            $('.menu-text')['show']();
            $('.menu-icon')['show']()
        } else {
            if (_displayText === 'Text only') {
                textDisplay = 1;
                $['cookie']('textDisplay', 1, {
                    expires: 365
                });
                $('.menu-text')['show']();
                $('.menu-icon')['hide']()
            } else {
                if (_displayText === 'Icons only') {
                    textDisplay = 2;
                    $['cookie']('textDisplay', 2, {
                        expires: 365
                    });
                    $('.menu-text')['hide']();
                    $('.menu-icon')['show']()
                }
            }
        }
    });
    $('#config-hidecursor')['click'](function() {
        showCursor = !showCursor;
        $('#config-hidecursor')['text']((!showCursor ? 'Show' : 'Hide'));
        $['cookie']('showCursor', showCursor, {
            expires: 365
        })
    });
    $('#config-hidegrid')['click'](function() {
        showGrid = !showGrid;
        $('#config-hidegrid')['text']((!showGrid ? 'Show' : 'Hide'));
        $['cookie']('showGrid', showGrid, {
            expires: 365
        })
    });
    $('#config-hidezoom')['click'](function() {
        showSlider = !showSlider;
        $('#config-hidezoom')['text']((!showSlider ? 'Show' : 'Hide'));
        if (showSlider) {
            $('#slider-vertical')['show']()
        } else {
            $('#slider-vertical')['hide']()
        };
        $['cookie']('showSlider', showSlider, {
            expires: 365
        })
    });
    $('#config-centerpallet')['click'](function() {
        centerPallet = !centerPallet;
        $('#config-centerpallet')['text']((!centerPallet ? 'Center' : 'Left'));
        $('div#colors')['toggleClass']('colorsLeft');
        $('#app > div:nth-child(1) > div:nth-child(9)')['toggleClass']('moveUp');
        $('#app > div:nth-child(1) > div:nth-child(9) > div:nth-child(2)')['toggleClass']('groupUp');
        $('#app > div:nth-child(1) > div:nth-child(9) > div:nth-child(1)')['toggleClass']('groupUp');
        $['cookie']('centerPallet', centerPallet, {
            expires: 365
        })
    });
    $('#slider-vertical')['slider']({
        orientation: 'vertical',
        range: 'min',
        min: 10,
        max: 60,
        value: 30,
        slide: function(_0x9fa6x1f, _0x9fa6x23) {
            _zoom = _0x9fa6x23['value'];
            FinalZoom = calcZoom(Math['pow'](1.1, _zoom));
            $['cookie']('zoom', _zoom, {
                expires: 365
            })
        }
    });
    $('#open-settings')['click'](function() {
        var _0x9fa6x25 = $('#settings');
        var _0x9fa6x21 = $('.SettingsCss:visible');
        if (_0x9fa6x21['length'] > 0) {
            $('.SettingsCss:visible')['slideUp'](500);
            return
        };
        VisibleBoxies();
        _0x9fa6x25['slideDown'](500)
    });
    $('#close-settings')['click'](function() {
        var _0x9fa6x25 = $('#settings');
        if (_0x9fa6x25['is'](':visible')) {
            _0x9fa6x25['slideUp'](500);
            return
        };
        var _0x9fa6x21 = $('.SettingsCss:visible');
        if (_0x9fa6x21['length'] > 0) {
            $('.SettingsCss:visible')['slideUp'](500)
        }
    });
    $('#close-goto')['click'](function() {
        var _0x9fa6x20 = $('#goto');
        if (_0x9fa6x20['is'](':visible')) {
            _0x9fa6x20['slideUp'](500);
            return
        };
        var _0x9fa6x21 = $('.GotoCss:visible');
        if (_0x9fa6x21['length'] > 0) {
            $('.GotoCss:visible')['slideUp'](500)
        }
    });
    $('#minimap-content')['mouseover'](function() {
        if ($('#minimap-content')['hasClass']('minimize')) {
            $('#minimap-content')['removeClass']('minimize')
        }
    });
    $('#hide-map')['click'](function() {
        $('#minimap-content')['hide']();
        $('#minimap-backup')['show']();
        $['cookie']('showMinimap', 'false', {
            expires: 365
        })
    });
    $('#minimap-backup')['click'](function() {
        $('#minimap-content')['show']();
        $('#minimap-backup')['hide']();
        $['cookie']('showMinimap', 'true', {
            expires: 365
        })
    });
    $('#gameWindow')['mousemove'](function() {
        var _0x9fa6x26 = $('div[style*="position: absolute; left: 1em; bottom: 1em;"]')[0]['innerText']['replace']('(', '')['replace'](')', '')['split'](',');
        curX = parseInt(_0x9fa6x26[0]);
        curY = parseInt(_0x9fa6x26[1]);
        loadTemplates();
        drawGrid();
        drawCursor()
    })
}

function getCursorColor(_0x9fa6x28, _0x9fa6x29 = false) {
    switch (_0x9fa6x28) {
        default:
            ;
        case 'NAVY': {
            $('#CursorColor')['css']('background-color', '#001f3f');
            if (_0x9fa6x29) {
                $['cookie']('cursorColor', 'NAVY', {
                    expires: 365
                })
            };
            cursorColor = '#001f3f';
            return '#001f3f'
        }
        break;
    case 'BLUE': {
        $('#CursorColor')['css']('background-color', '#0074D9');
        if (_0x9fa6x29) {
            $['cookie']('cursorColor', 'BLUE', {
                expires: 365
            })
        };
        cursorColor = '#0074D9';
        return '#0074D9'
    }
    break;
    case 'AQUA': {
        $('#CursorColor')['css']('background-color', '#7FDBFF');
        if (_0x9fa6x29) {
            $['cookie']('cursorColor', 'AQUA', {
                expires: 365
            })
        };
        cursorColor = '#7FDBFF';
        return '#7FDBFF'
    }
    break;
    case 'TEAL': {
        $('#CursorColor')['css']('background-color', '#39CCCC');
        if (_0x9fa6x29) {
            $['cookie']('cursorColor', 'TEAL', {
                expires: 365
            })
        };
        cursorColor = '#39CCCC';
        return '#39CCCC'
    }
    break;
    case 'OLIVE': {
        $('#CursorColor')['css']('background-color', '#3D9970');
        if (_0x9fa6x29) {
            $['cookie']('cursorColor', 'OLIVE', {
                expires: 365
            })
        };
        cursorColor = '#3D9970';
        return '#3D9970'
    }
    break;
    case 'GREEN': {
        $('#CursorColor')['css']('background-color', '#2ECC40');
        if (_0x9fa6x29) {
            $['cookie']('cursorColor', 'GREEN', {
                expires: 365
            })
        };
        cursorColor = '#2ECC40';
        return '#2ECC40'
    }
    break;
    case 'LIME': {
        $('#CursorColor')['css']('background-color', '#01FF70');
        if (_0x9fa6x29) {
            $['cookie']('cursorColor', 'LIME', {
                expires: 365
            })
        };
        cursorColor = '#01FF70';
        return '#01FF70'
    }
    break;
    case 'YELLOW': {
        $('#CursorColor')['css']('background-color', '#FFDC00');
        if (_0x9fa6x29) {
            $['cookie']('cursorColor', 'YELLOW', {
                expires: 365
            })
        };
        cursorColor = '#FFDC00';
        return '#FFDC00'
    }
    break;
    case 'ORANGE': {
        $('#CursorColor')['css']('background-color', '#FF851B');
        if (_0x9fa6x29) {
            $['cookie']('cursorColor', 'ORANGE', {
                expires: 365
            })
        };
        cursorColor = '#FF851B';
        return '#FF851B'
    }
    break;
    case 'RED': {
        $('#CursorColor')['css']('background-color', '#FF4136');
        if (_0x9fa6x29) {
            $['cookie']('cursorColor', 'RED', {
                expires: 365
            })
        };
        cursorColor = '#FF4136';
        return '#FF4136'
    }
    break;
    case 'MAROON': {
        $('#CursorColor')['css']('background-color', '#85144b');
        if (_0x9fa6x29) {
            $['cookie']('cursorColor', 'MAROON', {
                expires: 365
            })
        };
        cursorColor = '#85144b';
        return '#85144b'
    }
    break;
    case 'FUCHSIA': {
        $('#CursorColor')['css']('background-color', '#F012BE');
        if (_0x9fa6x29) {
            $['cookie']('cursorColor', 'FUCHSIA', {
                expires: 365
            })
        };
        cursorColor = '#F012BE';
        return '#F012BE'
    }
    break;
    case 'PURPLE': {
        $('#CursorColor')['css']('background-color', '#B10DC9');
        if (_0x9fa6x29) {
            $['cookie']('cursorColor', 'PURPLE', {
                expires: 365
            })
        };
        cursorColor = '#B10DC9';
        return '#B10DC9'
    }
    break;
    case 'BLACK': {
        $('#CursorColor')['css']('background-color', '#111111');
        if (_0x9fa6x29) {
            $['cookie']('cursorColor', 'BLACK', {
                expires: 365
            })
        };
        cursorColor = '#111111';
        return '#111111'
    }
    break;
    case 'GRAY': {
        $('#CursorColor')['css']('background-color', '#AAAAAA');
        if (_0x9fa6x29) {
            $['cookie']('cursorColor', 'GRAY', {
                expires: 365
            })
        };
        cursorColor = '#AAAAAA';
        return '#AAAAAA'
    }
    break;
    case 'SILVER': {
        $('#CursorColor')['css']('background-color', '#DDDDDD');
        if (_0x9fa6x29) {
            $['cookie']('cursorColor', 'SILVER', {
                expires: 365
            })
        };
        cursorColor = '#DDDDDD';
        return '#DDDDDD'
    }
    break
    }
}

function calcZoom(_0x9fa6x2b) {
    return parseInt(Math['min'](max_zoom, Math['max'](1, _0x9fa6x2b)))
}

function isMenuVisible() {
    return (!$('#minimap-backup')['is'](':visible') && $('#minimap-content')['is'](':visible'))
}

function VisibleBoxies() {
    var _0x9fa6x25 = $('#settings');
    if (_0x9fa6x25['is'](':visible')) {
        _0x9fa6x25['slideUp'](500);
        return
    };
    var _0x9fa6x20 = $('#goto');
    if (_0x9fa6x20['is'](':visible')) {
        _0x9fa6x20['slideUp'](500);
        return
    }
}

function loadJsonLoop() {
    _url = dataUrl + '!data.json';
    $['ajax']({
        type: 'GET',
        url: _url,
        dataType: 'json',
        success: function(_0x9fa6x1a) {
            updateTemplates(jQuery['parseJSON'](JSON['stringify'](_0x9fa6x1a)).Templates)
        }
    });
    setTimeout(loadJsonLoop, 60 * 60 * 60)
}

function hexToRgb(_0x9fa6x30) {
    var _0x9fa6x31 = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i ['exec'](_0x9fa6x30);
    return _0x9fa6x31 ? {
        r: parseInt(_0x9fa6x31[1], 16),
        g: parseInt(_0x9fa6x31[2], 16),
        b: parseInt(_0x9fa6x31[3], 16)
    } : null
}

function drawCursor() {
    _minimap_cursor['clearRect'](0, 0, minimap['width'], minimap['height']);
    if (!isMenuVisible() || !showCursor) {
        return
    };
    _minimap_cursor['beginPath']();
    var _0x9fa6x33 = minimap['width'] + FinalZoom;
    var _0x9fa6x34 = minimap['height'] + FinalZoom;
    var _0x9fa6x35 = (_0x9fa6x33 / 2);
    var _0x9fa6x36 = (_0x9fa6x34 / 2);
    var _0x9fa6x37 = hexToRgb(cursorColor);
    _minimap_cursor['lineWidth'] = parseInt(0.15 * FinalZoom);
    _minimap_cursor['strokeStyle'] = ('rgba(' + (_0x9fa6x37['r']) + ', ' + (_0x9fa6x37['g']) + ', ' + (_0x9fa6x37['b']) + ', ' + ((cursorAlpha / 100)) + ')');
    _minimap_cursor['rect'](_0x9fa6x35 - (FinalZoom / 2), _0x9fa6x36 - (FinalZoom / 2), FinalZoom, FinalZoom);
    _minimap_cursor['stroke']()
}

function drawGrid() {
    var _0x9fa6x39 = 0;
    _minimap_grid['clearRect'](0, 0, minimap['width'], minimap['height']);
    if (!isMenuVisible() || !showGrid || FinalZoom < 17) {
        var _0x9fa6x33 = minimap['width'] + FinalZoom;
        for (var _0x9fa6x1d = 0; _0x9fa6x1d <= _0x9fa6x33; _0x9fa6x1d += FinalZoom) {
            _0x9fa6x39 += 1
        }
    } else {
        _minimap_grid['beginPath']();
        var _0x9fa6x33 = minimap['width'] + FinalZoom;
        var _0x9fa6x34 = minimap['height'] + FinalZoom;
        var _0x9fa6x35 = (minimap['width'] / 2) % FinalZoom - FinalZoom;
        var _0x9fa6x36 = (minimap['height'] / 2) % FinalZoom - FinalZoom;
        console['log'](('Drawing grid board = [' + _0x9fa6x33 + ', ' + _0x9fa6x34 + '] and offset = [' + _0x9fa6x35 + ', ' + _0x9fa6x36 + ']'));
        _minimap_grid['fillStyle'] = ('rgba(34, 34, 34, ' + ((gridAlpha / 100)) + ')');
        var _0x9fa6x3a = 1;
        var _0x9fa6x3b = (_0x9fa6x3a % 2) / 2;
        _minimap_grid['translate'](_0x9fa6x3b, 0);
        for (var _0x9fa6x1d = 0; _0x9fa6x1d <= _0x9fa6x33; _0x9fa6x1d += FinalZoom) {
            _0x9fa6x39 += 1;
            _minimap_grid['fillRect'](_0x9fa6x1d + _0x9fa6x35, _0x9fa6x36, _0x9fa6x3a, _0x9fa6x34)
        };
        _minimap_grid['translate'](-_0x9fa6x3b, 0);
        _minimap_grid['translate'](0, _0x9fa6x3b);
        for (var _0x9fa6x1e = 0; _0x9fa6x1e <= _0x9fa6x34; _0x9fa6x1e += FinalZoom) {
            _minimap_grid['fillRect'](_0x9fa6x35, _0x9fa6x1e + _0x9fa6x36, _0x9fa6x33, _0x9fa6x3a)
        };
        _minimap_grid['translate'](0, -_0x9fa6x3b);
        _minimap_grid['stroke']()
    };
    hitzone = _0x9fa6x39;
    console['log']('Hitzone', hitzone)
}

function drawImage(_0x9fa6x3d, _0x9fa6x3e, _0x9fa6x3f, _0x9fa6x40, _0x9fa6x41, _0x9fa6x42) {
    attempt = 0;
    $('#minimap-content')['removeClass']('minimize');
    var _0x9fa6x43 = minimap['width'] / FinalZoom / 2;
    var _0x9fa6x44 = minimap['height'] / FinalZoom / 2;
    var _0x9fa6x45 = (_0x9fa6x43 + _0x9fa6x3f) * FinalZoom;
    var _0x9fa6x46 = (_0x9fa6x44 + _0x9fa6x40) * FinalZoom;
    var _0x9fa6x47 = FinalZoom * _0x9fa6x41;
    var _0x9fa6x48 = FinalZoom * _0x9fa6x42;
    console['log'](('x: ' + _0x9fa6x3f + ' y: ' + _0x9fa6x40 + ' W: ' + _0x9fa6x41 + ' H: ' + _0x9fa6x42 + ' | z: (' + FinalZoom + ') (' + _zoom + ')'));
    if (storedTemplates['hasOwnProperty'](_0x9fa6x3e)) {
        _0x9fa6x3d['drawImage'](storedTemplates[_0x9fa6x3e], _0x9fa6x45, _0x9fa6x46, _0x9fa6x47, _0x9fa6x48)
    } else {
        var _0x9fa6x49 = new Image();
        _0x9fa6x49['src'] = dataUrl + _0x9fa6x3e + '.png';
        _0x9fa6x49['onload'] = function() {
            _0x9fa6x3d['drawImage'](_0x9fa6x49, _0x9fa6x45, _0x9fa6x46, _0x9fa6x47, _0x9fa6x48);
            storedTemplates[_0x9fa6x3e] = _0x9fa6x49
        }
    }
}

function updateTemplates(_0x9fa6x4b) {
    templateList = _0x9fa6x4b;
    for (var _0x9fa6x4c in _0x9fa6x4b) {
        if (!availableFactions['includes'](_0x9fa6x4c)) {
            availableFactions['push'](_0x9fa6x4c)
        }
    }
}

function loadTemplates() {
    arrayAttempt = [];
    if (!isMenuVisible()) {
        return
    };
    _minimap['clearRect'](0, 0, minimap['width'], minimap['height']);
    for (var _0x9fa6x4e in templateList) {
        if (templateList['hasOwnProperty'](_0x9fa6x4e)) {
            var _0x9fa6x4f = [];
            $('#config-categorie input:checked')['each'](function() {
                _0x9fa6x4f['push']($(this)['attr']('name'))
            });
            if ($['cookie']('categories') !== _0x9fa6x4f['join'](' ')) {
                $['cookie']('categories', _0x9fa6x4f['join'](' '), {
                    expires: 365
                })
            };
            var _0x9fa6x50 = $('#minimap')['width']() / 2;
            var _0x9fa6x51 = $('#minimap')['height']() / 2;
            var _0x9fa6x52 = [];
            var _0x9fa6x53 = templateList[_0x9fa6x4e]['x'];
            var _0x9fa6x54 = templateList[_0x9fa6x4e]['y'];
            var _0x9fa6x55 = _0x9fa6x53 + templateList[_0x9fa6x4e]['width'];
            var _0x9fa6x56 = _0x9fa6x54 + templateList[_0x9fa6x4e]['height'];
            var _0x9fa6x57 = _0x9fa6x53 - hitzone;
            var _0x9fa6x58 = _0x9fa6x55 + hitzone;
            var _0x9fa6x59 = _0x9fa6x54 - hitzone;
            var _0x9fa6x5a = _0x9fa6x56 + hitzone;
            arrayAttempt['push']((curX['between'](_0x9fa6x57, _0x9fa6x58) && curY['between'](_0x9fa6x5a, _0x9fa6x59) && _0x9fa6x4f['some']((_0x9fa6x5b) => templateList[_0x9fa6x4e]['categories']['includes'](_0x9fa6x5b))));
            if (curX['between'](_0x9fa6x57, _0x9fa6x58) && curY['between'](_0x9fa6x5a, _0x9fa6x59) && _0x9fa6x4f['some']((_0x9fa6x5b) => templateList[_0x9fa6x4e]['categories']['includes'](_0x9fa6x5b))) {
                attempt = 0;
                $('#minimap-content')['removeClass']('minimize');
                console['log']('Drawing', _0x9fa6x4e);
                drawImage(_minimap, _0x9fa6x4e, (_0x9fa6x53 - curX), (_0x9fa6x54 - curY), templateList[_0x9fa6x4e]['width'], templateList[_0x9fa6x4e]['height'])
            }
        }
    };
    if (!arrayAttempt['includes'](true)) {
        if (attempt < 3) {
            attempt++
        } else {
            $('#minimap-content')['addClass']('minimize')
        }
    }
}

function setupCanvas() {
    minimap = $('#minimap')['get'](0);
    _minimap = minimap['getContext']('2d');
    _minimap['imageSmoothingEnabled'] = false;
    _minimap['webkitImageSmoothingEnabled'] = false;
    _minimap['mozImageSmoothingEnabled'] = false;
    minimap_grid = $('#minimap-grid')['get'](0);
    _minimap_grid = minimap_grid['getContext']('2d');
    _minimap_grid['imageSmoothingEnabled'] = false;
    _minimap_grid['webkitImageSmoothingEnabled'] = false;https://i.imgur.com/vsa5OtO.png
    _minimap_grid['mozImageSmoothingEnabled'] = false;
    minimap_cursor = $('#minimap-cursor')['get'](0);
    _minimap_cursor = minimap_cursor['getContext']('2d');
    _minimap_cursor['imageSmoothingEnabled'] = false;
    _minimap_cursor['webkitImageSmoothingEnabled'] = false;
    _minimap_cursor['mozImageSmoothingEnabled'] = false
}

function selectColor(_0x9fa6x3d, _0x9fa6x5e, _0x9fa6x5f, _0x9fa6x60, _0x9fa6x61) {
    var _0x9fa6x62 = _0x9fa6x3d['getImageData'](_0x9fa6x5e, _0x9fa6x5f, _0x9fa6x60, _0x9fa6x61)['data'];
    var _0x9fa6x63 = ('' + (_0x9fa6x62[0]) + ', ' + (_0x9fa6x62[1]) + ', ' + (_0x9fa6x62[2]) + '');
    return _0x9fa6x63
}
