Number.prototype.between = function (_0x157a64, _0x34e888) {
    var _0x10cab4 = Math.min.apply(Math, [_0x157a64, _0x34e888]),
        _0x2baafa = Math.max.apply(Math, [_0x157a64, _0x34e888]);
    return this > _0x10cab4 && this < _0x2baafa;
};
var _0x252320 = 'https://raw.githubusercontent.com/RedPixel-canvas/rpminimap/master/templates/';
$('head').append("<link rel='stylesheet' href='https://code.jquery.com/ui/1.12.1/themes/base/jquery-ui.min.css' type='text/css' media='screen'>");
$('head').append($(`<style>h2.title { margin:0px auto; padding:10px; }
\
.moveUp {position:absolute; bottom:6em; left:0.3333em;}
\
.groupUp { bottom: initial !important; left: initial !important; position: initial !important; display: inline-block !important;}
\
.colorsLeft {margin-left:0.333em !important;}
\
.close { color:black; position:absolute; top:0.8em; right:1em; cursor:pointer; }
\
.discord { color:black; position:absolute; top:0.75em; right:2.55em; cursor:pointer; }
\
.smooth { overflow:auto; padding-top:4px; padding-bottom:4px; }
\
.settings-list { margin:2px; text-shadow:1px 1px 8px white; position:relative; list-style-type:none; padding:0; display:table; width:99%;}
\
.settings-list li:nth-child(odd) { background:linear-gradient(to right, rgba(228,228,228,0.65), rgba(0,0,0,0)); }
\
.settings-button { right:0.5em; } .small{font-size:12px;} .smalltext{font-size:10px; width:120px;}
\
.SettingsCss { width:280px; height:400px; display:none; border:3px solid rgba(34,34,34,0.75); overflow:hidden; background-color:rgba(255,255,255,0.95); position:absolute; top:-10%; bottom:0; left:0; right:0; margin:auto; }
\
.GotoCss { width:280px; height:110px; display:none; border:3px solid rgba(34,34,34,0.75); overflow:hidden; background-color:rgba(255,255,255,0.95); position:absolute; top:-20%; bottom:0; left:0; right:0; margin:auto; }
\
#minimap-backup {background-color:rgba(0,0,0,0.75); height:50px; border-radius:5px; position:absolute; right:1em; bottom:1em;}
\
#minimap-content {background-color:rgba(0,0,0,0.75); width:480px; height:270px; border-radius:5px; position:absolute; right:1em; bottom:1em; outline: 4px solid white;}
\
.fleft {float:left;} .fright {float:right;}
\
.minimize { opacity: 0.45; filter: alpha(opacity=45);  }
\
#minimap-settings { z-index:6; position:absolute; right:0em; bottom:0; width:480px; background-color:rgba(0,0,0,0.5);}
\
#minimap {width:100%; top:0; height:100%; z-index:0; outline: 4px solid black!important; outline-offset: -2px;} #minimap-grid {width:100%; top:0; height:100%; z-index:1;} #minimap-cursor {width:100%; top:0; height:100%; z-index:2;}
\
.clickable { cursor:pointer; font-weight:bold; }
\
ul.toolbar { justify-content: space-around; white-space:nowrap;  display:-webkit-flex; -webkit-justify-content:center; display:flex; justify-content:center; z-index:6; position:relative !important; line-height:25px; list-style-type:none; margin:0; border-style:none; overflow:hidden; text-align:center; color:white; }
\
li.toolbar { z-index:6; float:left; } li.padding { padding-left:20px; } li.smallPadding { padding-left:4px; }
\
.ui-slider .ui-slider-handle { width:1em !important; }
\
.footer { font-size:8px; position:absolute; bottom:.5em; text-align:center; }
\
.slider { right:0em !important; width:6.25em !important; }
\
#config-categorie { height:50px;width:275px;border:1px solid #ccc; overflow:auto; font-size: 14px; }
\
#BoxedSettings { height:180px;width:275px;border:1px solid #ccc; overflow:auto; font-size: 14px; }
\
#i1, #i2, #i3 { text-align: center; display:inline-block; width: 33.3%; }
\
#custom-slider-cursor { width: 1em !important; font-size:12px; position:relative !important; height: 1.25em; top: 50%; margin-top: -.75em; text-align: center; line-height: 1.6em !important; }
\
#custom-slider-grid { width: 1em !important; font-size:12px; position:relative !important; height: 1.25em; top: 50%; margin-top: -.75em; text-align: center; line-height: 1.6em !important; }
\
canvas { position:absolute; image-rendering:optimizeSpeed; image-rendering:-moz-crisp-edges; image-rendering:-webkit-optimize-contrast; image-rendering:-o-crisp-edges; image-rendering:optimize-contrast; -ms-interpolation-mode:nearest-neighbor; }
\
.menu-text { display:inline; }
\
.CookiesButton { float:right; background-color:DarkGreen; color:white; font-weight:bold; cursor:pointer; border-color:DarkGreen; font-size: 14px !important; }
\
.CookiesButton:hover { float:right; background-color:DarkGreen !important; color:white; font-weight:bold; cursor:pointer; border-color:lime !important; font-size: 14px !important; }
\
span.cookiesAndMilk { color:white; float:left; padding-top:5px; display:block; margin-left:.5em; font-size: 13px; }</style>`));
var _0x3b94a6 = `
\
<div id="goto" class="GotoCss">
\
  <h2 class="title"> Goto template </h2>
\
  <div id="close-goto" class="close"><i class="fas fa-window-close"></i></div>
\
  <div class="ui-widget" style="padding:5px;">
\
    <label for="inputName">Template name: </label>
\
    <input id="inputName">
\
    <button id="enter-goto" class="ui-button ui-widget ui-corner-all">GO!</button>
\
  </div>
\
</div>
\
<div id="settings" class="SettingsCss">
\
   <h2 class="title"> Settings </h2>
\
   <div id="discord-link" class="discord"><small><u>Join Discord</u></small> <i class="fab fa-discord"></i></div>
\
   <div id="close-settings" class="close"><i class="fas fa-window-close"></i></div>
\
   <ul class="settings-list">
\

\
      <!-- CATEGORIE  -->
\
      <li class="smooth"><div class="fleft small">Template categorie(s): </div>
\
      <div id="config-categorie"></div></li>
\

\
     <div id="BoxedSettings">
\
        <!-- HIDE ZOOM -->
\
        <li class="smooth"><div class="fleft small">Hide zoom slider</div>
\
          <div id="config-hidezoom" class="fright clickable settings-button">Hide</div>
\
        </li>
\

\
        <!-- HIDE CURSOR  -->
\
        <li class="smooth"><div class="fleft small">Hide cursor</div>
\
          <div id="config-hidecursor" class="fright clickable settings-button">Hide</div>
\
        </li>
\

\
        <!-- HIDE GRID  -->
\
        <li class="smooth"><div class="fleft small">Hide grid</div>
\
          <div id="config-hidegrid" class="fright clickable settings-button">Hide</div>
\
        </li>
\

\
        <!-- PLACE PALLET -->
\
        <li class="smooth"><div class="fleft small">Place palette</div>
\
          <div id="config-centerpallet" class="fright clickable settings-button">Center</div>
\
        </li>
\

\
        <!-- DISPLAY TEXT  -->
\
        <li class="smooth"><div class="fleft small">Display text</div><div id="config-displaytext" class="fright settings-button">
\
        <select id="config-text" class="fright">
\
          <option>Icons and Text</option>
\
          <option>Text only</option>
\
          <option>Icons only</option>
\
        </select>
\
        </div></li>
\

\
        <!-- CURSOR COLOR  -->
\
        <li class="smooth" style="padding-bottom:0.5em;"><div class="fleft small">Cursor color</div><div id="config-cursorcolor" class="fright settings-button">
\
          <select runat="server" id="CursorColor" style="min-width:105px;">
\
            <option value="NAVY" style="background-color: #001f3f;" />
\
            <option value="BLUE" style="background-color: #0074D9;" />
\
            <option value="AQUA" style="background-color: #7FDBFF;" />
\
            <option value="TEAL" style="background-color: #39CCCC;" />
\
            <option value="OLIVE" style="background-color: #3D9970;" />
\
            <option value="GREEN" style="background-color: #2ECC40;" />
\
            <option value="LIME" style="background-color: #01FF70;" />
\
            <option value="YELLOW" style="background-color: #FFDC00;" />
\
            <option value="ORANGE" style="background-color: #FF851B;" />
\
            <option value="RED" style="background-color: #FF4136;" />
\
            <option value="MAROON" style="background-color: #85144b;" />
\
            <option value="FUCHSIA" style="background-color: #F012BE;" />
\
            <option value="PURPLE" style="background-color: #B10DC9;" />
\
            <option value="BLACK" style="background-color: #111111;" />
\
            <option value="GRAY" style="background-color: #AAAAAA;" />
\
            <option value="SILVER" style="background-color: #DDDDDD;" />
\
          </select>
\
        </div></li>
\

\
        <!-- SLIDER CURSOR  -->
\
        <li class="smooth"><div class="fleft small">Cursor transparency</div><div id="config-cursoralpha" class="fright settings-button">
\
          <div id="slider-cursor" class="slider"><div id="custom-slider-cursor" class="ui-slider-handle"></div></div>
\
        </div></li>
\

\
        <!-- SLIDER GRID  -->
\
        <li class="smooth"><div class="fleft small">Grid transparency</div><div id="config-gridalpha" class="fright settings-button">
\
          <div id="slider-grid" class="slider"><div id="custom-slider-grid" class="ui-slider-handle"></div></div>
\
        </div></li>
\
    </div>
\

\
     <li style="padding:3px"><!-- SPACE --></li>
\

\
     <!-- RESET BUTTON -->
\
     <li class="smooth">
\
       <div id="config-reset" class="fright clickable settings-button">Reset settings</div>
\
     </li>
\
   </ul>
\

\
   <div class="footer"><a rel="license" href="http://creativecommons.org/licenses/by-nc-nd/4.0/" target="_blank"><img alt="Creative Commons License" style="border-width:0; float:left; margin-top:10px; margin-left:5px;" src="https://i.creativecommons.org/l/by-nc-nd/4.0/88x31.png" /></a><br />This work is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-nc-nd/4.0/" target="_blank">Creative Commons Attribution-NonCommercial-NoDerivatives 4.0 International License</a>.</div>
\
</div>
\
<div id="minimap-backup" style="display:none"><span class="clickable" style="color:white; display:block;padding: 15px 20px;"> <i class="fas fa-eye menu-icon"></i> <div class="menu-text"> Open minimap </div> </span></div>
\
<div id="minimap-content">
\
   <div id="slider-vertical" style="height:200px; width:0.5em; position:absolute; top:1em; right:1em; opacity:0.45; z-index:9;"></div>
\
   <canvas id="minimap" width="1024" height="540"></canvas>
\
   <canvas id="minimap-grid" width="1024" height="540"></canvas>
\
   <canvas id="minimap-cursor" width="1024" height="540"></canvas>
\
<div id="minimap-settings" style="margin-left: -20px">
\
  <ul class="toolbar">
\
      <div id="i1"> <li class="toolbar clickable" id="hide-map"> <i class="fas fa-eye-slash menu-icon"></i> <div class="menu-text"> Hide minimap </div> </li> </div>
\
      <div id="i2"> <li class="toolbar clickable" id="open-goto"> <i class="fas fa-chevron-circle-up menu-icon"></i> <div class="menu-text"> Goto template </div> </li> </div>
\
      <div id="i3"> <li class="toolbar clickable" id="open-settings"> <i class="fas fa-cog menu-icon"></i> <div class="menu-text"> Settings </div> </li> </div>
\
  </ul>
\
</div>
\
</div>`;
var _0x34901b = `
\
<div id="CookieBar" style="z-index:999; position:absolute; background-color:black; right:0; top:0; width:480px;">
\
  <span class="cookiesAndMilk">We use cookies and milk to keep track your settings.</span>
\
  <button id="CookiesOk" class="CookiesButton ui-button ui-widget ui-corner-all">I Understand!</button>
\
</div>`;
var _0x4a4f1f = 0;
var _0x219cc2 = null;
var _0x4ccfee = null;
var _0x20966d = 35;
var _0x3cfc20 = 60;
var _0x1d7648 = _0x31cb55(Math.pow(1.1, _0x20966d));
var _0x5ec7b9 = [];
var _0x1398d3 = [];
var _0x860272 = {};
var _0x33f27d = '#001f3f';
var _0x3dfda4 = 90;
var _0x1854e1 = 50;
var _0x48f333 = true;
var _0x51d8f8 = true;
var _0x2e5898 = true;
var _0x53770a = 0;
var _0x1030bc = true;
var _0x4ae39a = [];
var _0x48093a = 0;
$(document).ready(function () {
    'use strict';
    _0x121b2a();
    _0x284ee0();
    $('div#app').children().append(_0x3b94a6);
    if ($['cookie']('WeUseCookies') === '0' || typeof $['cookie']('WeUseCookies') === 'undefined') {
        $('div#minimap-content').append(_0x34901b);
    };
    _0x2b9360();
    _0x4a7e78();
    _0x31f20();
    $('#slider-vertical').slider('value', _0x20966d);
});

function _0x2b9360() {
    if (typeof $['cookie']('showMinimap') === 'undefined') {
        $['cookie']('showMinimap', 'true', {
            'expires': 0x16d
        });
    } else {
        if ($['cookie']('showMinimap') === 'false') {
            $('#minimap-content').hide();
            $('#minimap-backup').show();
        }
    };
    if (typeof $['cookie']('cursorColor') === 'undefined') {
        _0x10b4a4('NAVY', true);
    } else {
        console.log(_0x10b4a4($['cookie']('cursorColor')));
        _0x10b4a4($['cookie']('cursorColor'));
    };
    if (typeof $['cookie']('WeUseCookies') === 'undefined') {
        $['cookie']('WeUseCookies', 0, {
            'expires': 0x16d
        });
    };
    if (typeof $['cookie']('cursorAlpha') === 'undefined') {
        $['cookie']('cursorAlpha', _0x3dfda4, {
            'expires': 0x16d
        });
    } else {
        _0x3dfda4 = $['cookie']('cursorAlpha');
    };
    if (typeof $['cookie']('gridAlpha') === 'undefined') {
        $['cookie']('gridAlpha', _0x1854e1, {
            'expires': 0x16d
        });
    } else {
        _0x1854e1 = $['cookie']('gridAlpha');
    };
    if (typeof $['cookie']('showSlider') === 'undefined') {
        $['cookie']('showSlider', 'true', {
            'expires': 0x16d
        });
    } else {
        _0x48f333 = $['cookie']('showSlider') === 'true' ? !![] : false;
        $('#config-hidezoom').text(!_0x48f333 ? 'Show' : 'Hide');
        if (_0x48f333) {
            $('#slider-vertical').show();
        } else {
            $('#slider-vertical').hide();
        }
    };
    if (typeof $['cookie']('showCursor') === 'undefined') {
        $['cookie']('showCursor', 'true', {
            'expires': 0x16d
        });
    } else {
        _0x51d8f8 = $['cookie']('showCursor') === 'true' ? !![] : false;
        $('#config-hidecursor').text(!_0x51d8f8 ? 'Show' : 'Hide');
    };
    if (typeof $['cookie']('showGrid') === 'undefined') {
        $['cookie']('showGrid', 'true', {
            'expires': 0x16d
        });
    } else {
        _0x2e5898 = $['cookie']('showGrid') === 'true' ? !![] : false;
        $('#config-hidegrid').text(!_0x2e5898 ? 'Show' : 'Hide');
    };
    if (typeof $['cookie']('centerPallet') === 'undefined') {
        $['cookie']('centerPallet', 'true', {
            'expires': 0x16d
        });
    } else {
        _0x1030bc = $['cookie']('centerPallet') === 'true' ? !![] : false;
        $('#config-centerpallet').text(!_0x1030bc ? 'Center' : 'Left');
        if (!_0x1030bc) {
            $('div#colors').addClass('colorsLeft');
            $('#app > div:nth-child(1) > div:nth-child(9)').addClass('moveUp');
            $('#app > div:nth-child(1) > div:nth-child(9) > div:nth-child(2)').addClass('groupUp');
            $('#app > div:nth-child(1) > div:nth-child(9) > div:nth-child(1)').addClass('groupUp');
        }
    };
    if (typeof $['cookie']('textDisplay') === 'undefined') {
        $['cookie']('textDisplay', _0x53770a, {
            'expires': 0x16d
        });
    } else {
        _0x53770a = $['cookie']('textDisplay');
        $('#config-text').prop('selectedIndex', _0x53770a);
        var _0x2529a4 = $('#config-text option:selected').text();
        if (_0x2529a4 === 'Icons and Text') {
            _0x53770a = 0;
            $['cookie']('textDisplay', 0, {
                'expires': 0x16d
            });
            $('.menu-text').show();
            $('.menu-icon').show();
        } else {
            if (_0x2529a4 === 'Text only') {
                _0x53770a = 1;
                $['cookie']('textDisplay', 1, {
                    'expires': 0x16d
                });
                $('.menu-text').show();
                $('.menu-icon').hide();
            } else {
                if (_0x2529a4 === 'Icons only') {
                    _0x53770a = 2;
                    $['cookie']('textDisplay', 2, {
                        'expires': 0x16d
                    });
                    $('.menu-text').hide();
                    $('.menu-icon').show();
                }
            }
        }
    };
    if (typeof $['cookie']('zoom') === 'undefined') {
        $['cookie']('zoom', _0x20966d, {
            'expires': 0x16d
        });
    } else {
        _0x20966d = $['cookie']('zoom');
        _0x1d7648 = _0x31cb55(Math.pow(1.1, _0x20966d));
    };
    var _0x39f8cb = [];
    if (typeof $['cookie']('categories') === 'undefined') {
        $['cookie']('categories', '', {
            'expires': 0x16d
        });
    } else {
        var _0x39f8cb = $['cookie']('categories').split(' ');
        _0x39f8cb = _0x39f8cb !== [''] ? _0x39f8cb : [];
    }
    console.log('Checked categories: ' + (_0x39f8cb !== [] ? _0x39f8cb : 'None'));
    var _0x438d8d = _0x252320 + '!data.json';
    $['ajax']({
        'type': 'GET',
        'url': _0x438d8d,
        'dataType': 'json',
        'success': function (_0x175d8a) {
            var _0xbd21a1 = jQuery.parseJSON(JSON.stringify(_0x175d8a)).Categories;
            _0xbd21a1.sort();
            for (let _0x1c42bc = 0; _0x1c42bc < _0xbd21a1.length; _0x1c42bc++) {
                $('#config-categorie').append('<label><input type="checkbox" name="' + _0xbd21a1[_0x1c42bc][1] + '\" ' + ($['inArray'](_0xbd21a1[_0x1c42bc][1], _0x39f8cb) !== -1 ? 'checked=true' : '') + ' id="check-' + _0xbd21a1[_0x1c42bc][1] + '\">' + _0xbd21a1[_0x1c42bc][0] + '</label>');
            }
        }
    });
    console.log('' + $['cookie']('cursorAlpha') + ' ' + $['cookie']('gridAlpha') + ' ' + $['cookie']('showCursor') + ' ' + $['cookie']('showGrid') + ' ' + $['cookie']('textDisplay') + ' ' + $['cookie']('zoom') + '');
}

function _0x31f20() {
    $('#CursorColor').change(function () {
        _0x10b4a4($(this).val(), true);
    });
    $('#CookiesOk').click(function () {
        $['cookie']('WeUseCookies', 1, {
            'expires': 0x16d
        });
        $('#CookieBar').slideUp(100);
    });
    $('#discord-link').click(function () {
        window.open('https://discord.io/pixelatlas', '_blank');
    });
    $('#inputName').autocomplete({
        'source': _0x4ae39a
    });
    $('#enter-goto').click(function () {
        var _0x455e7a = $('#inputName').val();
        if (_0x5ec7b9.hasOwnProperty(_0x455e7a)) {
            let _0x4c41ec = Math.round(_0x5ec7b9[_0x455e7a].x + _0x5ec7b9[_0x455e7a].width / 2);
            let _0x565211 = Math.round(_0x5ec7b9[_0x455e7a].y + _0x5ec7b9[_0x455e7a].height / 2);
            window.location.replace('https://pixelcanvas.io/@' + _0x4c41ec + ',' + _0x565211);
        }
    });
    $('#inputName').keypress(function (_0x364e99) {
        if (_0x364e99.which == 13) {
            var _0x13d625 = $('#inputName').val();
            if (_0x5ec7b9.hasOwnProperty(_0x13d625)) {
                let _0x5f2ca3 = Math.round(_0x5ec7b9[_0x13d625].x + _0x5ec7b9[_0x13d625].width / 2);
                let _0x3c196a = Math.round(_0x5ec7b9[_0x13d625].y + _0x5ec7b9[_0x13d625].height / 2);
                window.location.replace('https://pixelcanvas.io/@' + _0x5f2ca3 + ',' + _0x3c196a);
            }
        }
    });
    $('#open-goto').click(function () {
        var _0x595594 = $('#goto');
        var _0x5b06e2 = $('.GotoCss:visible');
        if (_0x5b06e2.length > 0) {
            $('.GotoCss:visible').slideUp(500);
            return;
        };
        _0x91440b();
        _0x595594.slideDown(500);
    });
    var _0x3ccbe1 = $('#custom-slider-cursor');
    $('#slider-cursor').slider({
        'range': 'min',
        'min': 0,
        'max': 100,
        'value': $['cookie']('cursorAlpha'),
        'create': function () {
            var _0x32c61b = $(this).slider('value');
            _0x3ccbe1.text(_0x32c61b);
            _0x3dfda4 = parseInt(_0x32c61b);
            $['cookie']('cursorAlpha', _0x3dfda4, {
                'expires': 0x16d
            });
        },
        'slide': function (_0x38f5db, _0x37268d) {
            var _0x5005f3 = _0x37268d.value;
            _0x3ccbe1.text(_0x37268d.value);
            _0x3dfda4 = parseInt(_0x5005f3);
            $['cookie']('cursorAlpha', _0x3dfda4, {
                'expires': 0x16d
            });
        }
    });
    var _0x4a6ae1 = $('#custom-slider-grid');
    $('#slider-grid').slider({
        'range': 'min',
        'min': 0,
        'max': 100,
        'value': $['cookie']('gridAlpha'),
        'create': function () {
            var _0x40c484 = $(this).slider('value');
            _0x4a6ae1.text($(this).slider('value'));
            _0x1854e1 = parseInt(_0x40c484);
            $['cookie']('gridAlpha', _0x1854e1, {
                'expires': 0x16d
            });
        },
        'slide': function (_0x3c2ab0, _0x4a4304) {
            var _0x5810af = _0x4a4304.value;
            _0x4a6ae1.text(_0x4a4304.value);
            _0x1854e1 = parseInt(_0x5810af);
            $['cookie']('gridAlpha', _0x1854e1, {
                'expires': 0x16d
            });
        }
    });
    $('#config-reset').click(function () {
        if (window.confirm('Are you sure?')) {
            _0x3dfda4 = 90;
            _0x33f27d = 'NAVY';
            _0x1854e1 = 50;
            _0x48f333 = true;
            _0x51d8f8 = true;
            _0x2e5898 = true;
            _0x53770a = 0;
            _0x20966d = 30;
            _0x1030bc = true;
            _0x3ccbe1.text(_0x3dfda4);
            _0x4a6ae1.text(_0x1854e1);
            $['cookie']('cursorAlpha', _0x3dfda4, {
                'expires': 0x16d
            });
            $['cookie']('gridAlpha', _0x1854e1, {
                'expires': 0x16d
            });
            $['cookie']('showCursor', _0x51d8f8, {
                'expires': 0x16d
            });
            $['cookie']('showGrid', _0x2e5898, {
                'expires': 0x16d
            });
            $['cookie']('textDisplay', _0x53770a, {
                'expires': 0x16d
            });
            $['cookie']('zoom', _0x20966d, {
                'expires': 0x16d
            });
            $['cookie']('centerPallet', _0x1030bc, {
                'expires': 0x16d
            });
            $['cookie']('categories', '', {
                'expires': 0x16d
            });
            $['cookie']('cursorColor', 'NAVY', {
                'expires': 0x16d
            });
            window.location.reload();
        }
    });
    $('#config-text').click(function () {
        var _0x522cb3 = $('#config-text option:selected').text();
        console.log(_0x522cb3);
        if (_0x522cb3 === 'Icons and Text') {
            _0x53770a = 0;
            $['cookie']('textDisplay', 0, {
                'expires': 0x16d
            });
            $('.menu-text').show();
            $('.menu-icon').show();
        } else {
            if (_0x522cb3 === 'Text only') {
                _0x53770a = 1;
                $['cookie']('textDisplay', 1, {
                    'expires': 0x16d
                });
                $('.menu-text').show();
                $('.menu-icon').hide();
            } else {
                if (_0x522cb3 === 'Icons only') {
                    _0x53770a = 2;
                    $['cookie']('textDisplay', 2, {
                        'expires': 0x16d
                    });
                    $('.menu-text').hide();
                    $('.menu-icon').show();
                }
            }
        }
    });
    $('#config-hidecursor').click(function () {
        _0x51d8f8 = !_0x51d8f8;
        $('#config-hidecursor').text(!_0x51d8f8 ? 'Show' : 'Hide');
        $['cookie']('showCursor', _0x51d8f8, {
            'expires': 0x16d
        });
    });
    $('#config-hidegrid').click(function () {
        _0x2e5898 = !_0x2e5898;
        $('#config-hidegrid').text(!_0x2e5898 ? 'Show' : 'Hide');
        $['cookie']('showGrid', _0x2e5898, {
            'expires': 0x16d
        });
    });
    $('#config-hidezoom').click(function () {
        _0x48f333 = !_0x48f333;
        $('#config-hidezoom').text(!_0x48f333 ? 'Show' : 'Hide');
        if (_0x48f333) {
            $('#slider-vertical').show();
        } else {
            $('#slider-vertical').hide();
        };
        $['cookie']('showSlider', _0x48f333, {
            'expires': 0x16d
        });
    });
    $('#config-centerpallet').click(function () {
        _0x1030bc = !_0x1030bc;
        $('#config-centerpallet').text(!_0x1030bc ? 'Center' : 'Left');
        $('div#colors').toggleClass('colorsLeft');
        $('#app > div:nth-child(1) > div:nth-child(9)').toggleClass('moveUp');
        $('#app > div:nth-child(1) > div:nth-child(9) > div:nth-child(2)').toggleClass('groupUp');
        $('#app > div:nth-child(1) > div:nth-child(9) > div:nth-child(1)').toggleClass('groupUp');
        $['cookie']('centerPallet', _0x1030bc, {
            'expires': 0x16d
        });
    });
    $('#slider-vertical').slider({
        'orientation': 'vertical',
        'range': 'min',
        'min': 10,
        'max': 60,
        'value': 30,
        'slide': function (_0x54fa1c, _0x199d37) {
            _0x20966d = _0x199d37.value;
            _0x1d7648 = _0x31cb55(Math.pow(1.1, _0x20966d));
            $['cookie']('zoom', _0x20966d, {
                'expires': 0x16d
            });
        }
    });
    $('#open-settings').click(function () {
        var _0x54278d = $('#settings');
        var _0x1ac6e2 = $('.SettingsCss:visible');
        if (_0x1ac6e2.length > 0) {
            $('.SettingsCss:visible').slideUp(500);
            return;
        };
        _0x91440b();
        _0x54278d.slideDown(500);
    });
    $('#close-settings').click(function () {
        var _0x6102d0 = $('#settings');
        if (_0x6102d0.is(':visible')) {
            _0x6102d0.slideUp(500);
            return;
        };
        var _0x329f2f = $('.SettingsCss:visible');
        if (_0x329f2f.length > 0) {
            $('.SettingsCss:visible').slideUp(500);
        }
    });
    $('#close-goto').click(function () {
        var _0xd4d587 = $('#goto');
        if (_0xd4d587.is(':visible')) {
            _0xd4d587.slideUp(500);
            return;
        };
        var _0x46ae16 = $('.GotoCss:visible');
        if (_0x46ae16.length > 0) {
            $('.GotoCss:visible').slideUp(500);
        }
    });
    $('#minimap-content').mouseover(function () {
        if ($('#minimap-content').hasClass('minimize')) {
            $('#minimap-content').removeClass('minimize');
        }
    });
    $('#hide-map').click(function () {
        $('#minimap-content').hide();
        $('#minimap-backup').show();
        $['cookie']('showMinimap', 'false', {
            'expires': 0x16d
        });
    });
    $('#minimap-backup').click(function () {
        $('#minimap-content').show();
        $('#minimap-backup').hide();
        $['cookie']('showMinimap', 'true', {
            'expires': 0x16d
        });
    });
    $('#gameWindow').mousemove(function () {
        var _0x5d5d09 = $('div[style*="position: absolute; left: 1em; bottom: 1em;"]')[0].innerText.replace('(', '').replace(')', '').split(',');
        _0x219cc2 = parseInt(_0x5d5d09[0]);
        _0x4ccfee = parseInt(_0x5d5d09[1]);
        _0x284ee0();
        _0x27ac6d();
        _0x3ff34c();
    });
}

function _0x10b4a4(_0x50e5d1, _0x53583f = false) {
    switch (_0x50e5d1) {
    default:
        ;
    case 'NAVY': {
        $('#CursorColor').css('background-color', '#001f3f');
        if (_0x53583f) {
            $['cookie']('cursorColor', 'NAVY', {
                'expires': 0x16d
            });
        };
        _0x33f27d = '#001f3f';
        return '#001f3f';
    }
    break;
    case 'BLUE': {
        $('#CursorColor').css('background-color', '#0074D9');
        if (_0x53583f) {
            $['cookie']('cursorColor', 'BLUE', {
                'expires': 0x16d
            });
        };
        _0x33f27d = '#0074D9';
        return '#0074D9';
    }
    break;
    case 'AQUA': {
        $('#CursorColor').css('background-color', '#7FDBFF');
        if (_0x53583f) {
            $['cookie']('cursorColor', 'AQUA', {
                'expires': 0x16d
            });
        };
        _0x33f27d = '#7FDBFF';
        return '#7FDBFF';
    }
    break;
    case 'TEAL': {
        $('#CursorColor').css('background-color', '#39CCCC');
        if (_0x53583f) {
            $['cookie']('cursorColor', 'TEAL', {
                'expires': 0x16d
            });
        };
        _0x33f27d = '#39CCCC';
        return '#39CCCC';
    }
    break;
    case 'OLIVE': {
        $('#CursorColor').css('background-color', '#3D9970');
        if (_0x53583f) {
            $['cookie']('cursorColor', 'OLIVE', {
                'expires': 0x16d
            });
        };
        _0x33f27d = '#3D9970';
        return '#3D9970';
    }
    break;
    case 'GREEN': {
        $('#CursorColor').css('background-color', '#2ECC40');
        if (_0x53583f) {
            $['cookie']('cursorColor', 'GREEN', {
                'expires': 0x16d
            });
        };
        _0x33f27d = '#2ECC40';
        return '#2ECC40';
    }
    break;
    case 'LIME': {
        $('#CursorColor').css('background-color', '#01FF70');
        if (_0x53583f) {
            $['cookie']('cursorColor', 'LIME', {
                'expires': 0x16d
            });
        };
        _0x33f27d = '#01FF70';
        return '#01FF70';
    }
    break;
    case 'YELLOW': {
        $('#CursorColor').css('background-color', '#FFDC00');
        if (_0x53583f) {
            $['cookie']('cursorColor', 'YELLOW', {
                'expires': 0x16d
            });
        };
        _0x33f27d = '#FFDC00';
        return '#FFDC00';
    }
    break;
    case 'ORANGE': {
        $('#CursorColor').css('background-color', '#FF851B');
        if (_0x53583f) {
            $['cookie']('cursorColor', 'ORANGE', {
                'expires': 0x16d
            });
        };
        _0x33f27d = '#FF851B';
        return '#FF851B';
    }
    break;
    case 'RED': {
        $('#CursorColor').css('background-color', '#FF4136');
        if (_0x53583f) {
            $['cookie']('cursorColor', 'RED', {
                'expires': 0x16d
            });
        };
        _0x33f27d = '#FF4136';
        return '#FF4136';
    }
    break;
    case 'MAROON': {
        $('#CursorColor').css('background-color', '#85144b');
        if (_0x53583f) {
            $['cookie']('cursorColor', 'MAROON', {
                'expires': 0x16d
            });
        };
        _0x33f27d = '#85144b';
        return '#85144b';
    }
    break;
    case 'FUCHSIA': {
        $('#CursorColor').css('background-color', '#F012BE');
        if (_0x53583f) {
            $['cookie']('cursorColor', 'FUCHSIA', {
                'expires': 0x16d
            });
        };
        _0x33f27d = '#F012BE';
        return '#F012BE';
    }
    break;
    case 'PURPLE': {
        $('#CursorColor').css('background-color', '#B10DC9');
        if (_0x53583f) {
            $['cookie']('cursorColor', 'PURPLE', {
                'expires': 0x16d
            });
        };
        _0x33f27d = '#B10DC9';
        return '#B10DC9';
    }
    break;
    case 'BLACK': {
        $('#CursorColor').css('background-color', '#111111');
        if (_0x53583f) {
            $['cookie']('cursorColor', 'BLACK', {
                'expires': 0x16d
            });
        };
        _0x33f27d = '#111111';
        return '#111111';
    }
    break;
    case 'GRAY': {
        $('#CursorColor').css('background-color', '#AAAAAA');
        if (_0x53583f) {
            $['cookie']('cursorColor', 'GRAY', {
                'expires': 0x16d
            });
        };
        _0x33f27d = '#AAAAAA';
        return '#AAAAAA';
    }
    break;
    case 'SILVER': {
        $('#CursorColor').css('background-color', '#DDDDDD');
        if (_0x53583f) {
            $['cookie']('cursorColor', 'SILVER', {
                'expires': 0x16d
            });
        };
        _0x33f27d = '#DDDDDD';
        return '#DDDDDD';
    }
    break;
    }
}

function _0x31cb55(_0xacba99) {
    return parseInt(Math.min(_0x3cfc20, Math.max(1, _0xacba99)));
}

function _0x1cf426() {
    return !$('#minimap-backup').is(':visible') && $('#minimap-content').is(':visible');
}

function _0x91440b() {
    var _0xdf4094 = $('#settings');
    if (_0xdf4094.is(':visible')) {
        _0xdf4094.slideUp(500);
        return;
    };
    var _0x3fdd2f = $('#goto');
    if (_0x3fdd2f.is(':visible')) {
        _0x3fdd2f.slideUp(500);
        return;
    }
}

function _0x121b2a() {
    var _0x1aed15 = _0x252320 + '!data.json';
    $['ajax']({
        'type': 'GET',
        'url': _0x1aed15,
        'dataType': 'json',
        'success': function (_0x475e3f) {
            _0x200629(jQuery.parseJSON(JSON.stringify(_0x475e3f)).Templates);
        }
    });
    setTimeout(_0x121b2a, 2.16e+5);
}

function _0x35533c(_0x158856) {
    var _0x4c0de7 = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(_0x158856);
    return _0x4c0de7 ? {
        'r': parseInt(_0x4c0de7[1], 16),
        'g': parseInt(_0x4c0de7[2], 16),
        'b': parseInt(_0x4c0de7[3], 16)
    } : null;
}

function _0x3ff34c() {
    _minimap_cursor.clearRect(0, 0, minimap.width, minimap.height);
    if (!_0x1cf426() || !_0x51d8f8) {
        return;
    };
    _minimap_cursor.beginPath();
    var _0x57b42c = minimap.width + _0x1d7648;
    var _0x581460 = minimap.height + _0x1d7648;
    var _0x21342a = _0x57b42c / 2;
    var _0x556681 = _0x581460 / 2;
    var _0x46b0cf = _0x35533c(_0x33f27d);
    _minimap_cursor.lineWidth = parseInt(0.15 * _0x1d7648);
    _minimap_cursor.strokeStyle = 'rgba(' + _0x46b0cf.r + ', ' + _0x46b0cf.g + ', ' + _0x46b0cf.b + ', ' + _0x3dfda4 / 100 + ')';
    _minimap_cursor.rect(_0x21342a - _0x1d7648 / 2, _0x556681 - _0x1d7648 / 2, _0x1d7648, _0x1d7648);
    _minimap_cursor.stroke();
}

function _0x27ac6d() {
    var _0x277ff5 = 0;
    _minimap_grid.clearRect(0, 0, minimap.width, minimap.height);
    if (!_0x1cf426() || !_0x2e5898 || _0x1d7648 < 17) {
        let _0x113f8c = minimap.width + _0x1d7648;
        for (let _0x1948fd = 0; _0x1948fd <= _0x113f8c; _0x1948fd += _0x1d7648) {
            _0x277ff5 += 1;
        }
    } else {
        _minimap_grid.beginPath();
        let _0x125485 = minimap.width + _0x1d7648;
        var _0x33ad50 = minimap.height + _0x1d7648;
        var _0x2d3aa6 = minimap.width / 0x2 % _0x1d7648 - _0x1d7648;
        var _0x4a0311 = minimap.height / 0x2 % _0x1d7648 - _0x1d7648;
        console.log('Drawing grid board = [' + _0x125485 + ', ' + _0x33ad50 + '] and offset = [' + _0x2d3aa6 + ', ' + _0x4a0311 + ']');
        _minimap_grid.fillStyle = 'rgba(34, 34, 34, ' + _0x1854e1 / 100 + ')';
        var _0x5e0ad6 = 1;
        var _0x69b8f2 = _0x5e0ad6 % 1;
        _minimap_grid.translate(_0x69b8f2, 0);
        for (let _0x385ce6 = 0; _0x385ce6 <= _0x125485; _0x385ce6 += _0x1d7648) {
            _0x277ff5 += 1;
            _minimap_grid.fillRect(_0x385ce6 + _0x2d3aa6, _0x4a0311, _0x5e0ad6, _0x33ad50);
        };
        _minimap_grid.translate(-_0x69b8f2, 0);
        _minimap_grid.translate(0, _0x69b8f2);
        for (var _0xc37d0 = 0; _0xc37d0 <= _0x33ad50; _0xc37d0 += _0x1d7648) {
            _minimap_grid.fillRect(_0x2d3aa6, _0xc37d0 + _0x4a0311, _0x125485, _0x5e0ad6);
        };
        _minimap_grid.translate(0, -_0x69b8f2);
        _minimap_grid.stroke();
    };
    _0x48093a = _0x277ff5;
    console.log('Hitzone', _0x48093a);
}

function _0xd2e879(_0x3d8a59, _0x30c51f, _0x598e46, _0x330a1e, _0x2d8869, _0x7ed6e7) {
    _0x4a4f1f = 0;
    $('#minimap-content').removeClass('minimize');
    var _0x5ade87 = minimap.width / _0x1d7648 / 2;
    var _0x31d5b3 = minimap.height / _0x1d7648 / 2;
    var _0x4541e7 = (_0x5ade87 + _0x598e46) * _0x1d7648;
    var _0x373b96 = (_0x31d5b3 + _0x330a1e) * _0x1d7648;
    var _0x46705e = _0x1d7648 * _0x2d8869;
    var _0x4950b1 = _0x1d7648 * _0x7ed6e7;
    console.log('x: ' + _0x598e46 + ' y: ' + _0x330a1e + ' W: ' + _0x2d8869 + ' H: ' + _0x7ed6e7 + ' | z: (' + _0x1d7648 + ') (' + _0x20966d + ')');
    if (_0x860272.hasOwnProperty(_0x30c51f)) {
        _0x3d8a59.drawImage(_0x860272[_0x30c51f], _0x4541e7, _0x373b96, _0x46705e, _0x4950b1);
    } else {
        var _0x409670 = new Image();
        _0x409670.src = _0x252320 + _0x5ec7b9[_0x30c51f].name;
        _0x409670.onload = function () {
            _0x3d8a59.drawImage(_0x409670, _0x4541e7, _0x373b96, _0x46705e, _0x4950b1);
            _0x860272[_0x30c51f] = _0x409670;
        };
    }
}

function _0x200629(_0x5538ac) {
    _0x5ec7b9 = _0x5538ac;
    for (let _0x11cc6f in _0x5538ac) {
        if (!_0x4ae39a.includes(_0x11cc6f)) {
            _0x4ae39a.push(_0x11cc6f);
        }
    }
}

function _0x284ee0() {
    var _0x2e5abe = [];
    if (!_0x1cf426()) {
        return;
    };
    _minimap.clearRect(0, 0, minimap.width, minimap.height);
    for (var _0x32c00d in _0x5ec7b9) {
        if (_0x5ec7b9.hasOwnProperty(_0x32c00d)) {
            var _0x4a1e76 = [];
            $('#config-categorie input:checked').each(function () {
                _0x4a1e76.push($(this).attr('name'));
            });
            if ($['cookie']('categories') !== _0x4a1e76.join(' ')) {
                $['cookie']('categories', _0x4a1e76.join(' '), {
                    'expires': 0x16d
                });
            };
            var _0x2d4942 = _0x5ec7b9[_0x32c00d].x;
            var _0x420bc2 = _0x5ec7b9[_0x32c00d].y;
            var _0x233277 = _0x2d4942 + _0x5ec7b9[_0x32c00d].width;
            var _0x136840 = _0x420bc2 + _0x5ec7b9[_0x32c00d].height;
            var _0x560090 = _0x2d4942 - _0x48093a;
            var _0x1d7edc = _0x233277 + _0x48093a;
            var _0x1899cb = _0x420bc2 - _0x48093a;
            var _0x3c6543 = _0x136840 + _0x48093a;
            _0x2e5abe.push(_0x219cc2.between(_0x560090, _0x1d7edc) && _0x4ccfee.between(_0x3c6543, _0x1899cb) && _0x4a1e76.some(_0x5a9a7d => _0x5ec7b9[_0x32c00d].categories.includes(_0x5a9a7d)));
            if (_0x219cc2.between(_0x560090, _0x1d7edc) && _0x4ccfee.between(_0x3c6543, _0x1899cb) && _0x4a1e76.some(_0x3f10b0 => _0x5ec7b9[_0x32c00d].categories.includes(_0x3f10b0))) {
                _0x4a4f1f = 0;
                $('#minimap-content').removeClass('minimize');
                console.log('Drawing', _0x32c00d);
                _0xd2e879(_minimap, _0x32c00d, _0x2d4942 - _0x219cc2, _0x420bc2 - _0x4ccfee, _0x5ec7b9[_0x32c00d].width, _0x5ec7b9[_0x32c00d].height);
            }
        }
    };
    if (!_0x2e5abe.includes(true)) {
        if (_0x4a4f1f < 3) {
            _0x4a4f1f++;
        } else {
            $('#minimap-content').addClass('minimize');
        }
    }
}

function _0x4a7e78() {
    minimap = $('#minimap').get(0);
    _minimap = minimap.getContext('2d');
    _minimap.imageSmoothingEnabled = false;
    _minimap.webkitImageSmoothingEnabled = false;
    _minimap.mozImageSmoothingEnabled = false;
    minimap_grid = $('#minimap-grid').get(0);
    _minimap_grid = minimap_grid.getContext('2d');
    _minimap_grid.imageSmoothingEnabled = false;
    _minimap_grid.webkitImageSmoothingEnabled = false;
    _minimap_grid.mozImageSmoothingEnabled = false;
    minimap_cursor = $('#minimap-cursor').get(0);
    _minimap_cursor = minimap_cursor.getContext('2d');
    _minimap_cursor.imageSmoothingEnabled = false;
    _minimap_cursor.webkitImageSmoothingEnabled = false;
    _minimap_cursor.mozImageSmoothingEnabled = false;
}