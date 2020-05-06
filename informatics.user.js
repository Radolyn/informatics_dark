// ==UserScript==
// @name         Informatics dark theme
// @version      0.3
// @description  Turns Informatics into dark mode!
// @author       Radolyn
// @license      MIT
// @match        https://informatics.msk.ru/*
// @match        https://informatics.mccme.ru/*
// @supportURL   https://github.com/radolyn/informatics_dark
// @updateURL    https://raw.githubusercontent.com/Radolyn/informatics_dark/master/informatics.user.js
// @downloadURL  https://raw.githubusercontent.com/Radolyn/informatics_dark/master/informatics.user.js
// @homepage     https://github.com/radolyn/informatics_dark
// @namespace    https://github.com/radolyn/informatics_dark
// @run-at       document-start
// @grant        GM_addStyle
// ==/UserScript==

(function () {
    ("use strict");

    var darkColor = "#212121 !important";
    var darkLighterColor = "#424242 !important";

    var textColor = "#E0E0E0 !important";
    var textLighterColor = "#9E9E9E !important";

    var css = `
    body, .header, .title, .skip-block, #header, #header-home, .content, .side, .navbar, .combobox_summary, pre, .ui-widget-header, .ui-widget-content, #source-textarea, .bootstrap, .well-small, .ui-state-active, h2 {
        background-color: ${darkColor};
        background: ${darkColor};
    }

    .generalbox {
        background-color: ${darkColor};
    }

    a {
        text-decoration: none !important;
        background-image: linear-gradient(currentColor, currentColor);
        background-position: 0% 100%;
        background-repeat: no-repeat;
        background-size: 0% 1px;
        transition: background-size 0.3s;
        color: #03A9F4 !important;
    }
    a:hover {
        background-size: 100% 1px;
    }
    a:visited {
        color: #0097a7 !important;
    }
    a:active {
        color: #388e3c !important;
    }

    i, p, td, .title, .desc, .subcontent, .logininfo, .arrow, li.first, .combobox_input, #content > table > tbody > tr:nth-child(2) > td:nth-child(2) > div > div > div:nth-child(1) > div:nth-child(5), #content > div > div.loginpanel > h2, #content > div > div.signuppanel > h2, #content {
        color: ${textColor};
    }

    table {
        border-color: ${textColor};
    }

    pre.content, code, h1, .current, .Caption, .combobox_input {
        background-color: ${darkLighterColor};
    }

    code, #source-textarea {
        color: ${textLighterColor};
    }

    .navbar, .ui-state-active {
        background: url() !important;
    }

    #header > p, #header-home > p {
        margin-left: 42.5px;
        margin-top: 7.5px;
    }

    .logininfo {
        margin-top: 9px;
        margin-right: 10px;
    }

    #header, #header-home {
        height: 30px !important;
    }

    tr, #header, #Searchresult, #SearchresultLoading, .current, .combobox_button, #combobox_container_lang_id > span, .pagination a, .box, .generalbox, .sideblock .header {
        border: solid 1px ${darkLighterColor};
    }

    ul.combobox_summary {
        width: 147px !important;
    }

    #layout-table, #content {
        width: 85%;
    }

    .course-content, #content {
        margin-left: 10%;
    }

    #monitor_table > table.BlueTable > tbody > tr > td {
        color: ${darkLighterColor};
    }

    #monitor_table > table.BlueTable > tbody > tr > td:nth-child(1), #monitor_table > table.BlueTable > tbody > tr:nth-child(1) > td:nth-child(2),  #monitor_table > table.BlueTable > tbody > tr > td:nth-child(3), #monitor_table > table.BlueTable > tbody > tr:nth-child(13) > td:nth-child(2) {
        color: ${textColor}
    }

    /* сейчас бы использовать input вместо button :( */
    input[type="submit"],
    input[type="button"] {
        background: #37474F !important;
        border: none;
        padding: 2px;
        border-bottom: 3px solid #607D8B !important;
        border-radius: 3px;
        color: #D2E2FF !important;
    }

    input[type="submit"]:hover,
    input[type="button"]:hover {
        background: #78909C !important;
        border-bottom: 3px solid #607D8B !important;
        border-radius: 3px;
        color: #fff !important;
    }

    input[type=text],
    input[type=date],
    input[type=datetime],
    input[type=number],
    input[type=search],
    input[type=time],
    input[type=url],
    input[type=email],
    textarea,
    select{
        box-sizing: border-box;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        border:1px solid #BEBEBE;
        margin:0px;
        -webkit-transition: all 0.30s ease-in-out;
        -moz-transition: all 0.30s ease-in-out;
        -ms-transition: all 0.30s ease-in-out;
        -o-transition: all 0.30s ease-in-out;
        outline: none;
    }
    input[type=text]:focus,
    input[type=date]:focus,
    input[type=datetime]:focus,
    input[type=number]:focus,
    input[type=search]:focus,
    input[type=time]:focus,
    input[type=url]:focus,
    input[type=email]:focus,
    textarea:focus,
    select:focus{
        -moz-box-shadow: 0 0 8px #FF6F00;
        -webkit-box-shadow: 0 0 8px #FF6F00;
        box-shadow: 0 0 8px #FF6F00;
        border: 1px solid #FF6F00;
    }

    `;

    GM_addStyle(css);
})();
