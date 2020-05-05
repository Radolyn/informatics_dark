// ==UserScript==
// @name         Informatics dark theme
// @namespace    https://radolyn.com/
// @version      0.2
// @description  Turns Informatics into dark mode!
// @author       radolyn.com
// @match        https://informatics.msk.ru
// @supportURL   https://github.com/radolyn/informatics_dark
// @include      https://informatics.msk.ru/*
// @include      https://informatics.mccme.ru/*
// @require      https://code.jquery.com/jquery-3.5.1.min.js
// @updateURL    https://raw.githubusercontent.com/Radolyn/informatics_dark/master/informatics.js
// @downloadURL  https://raw.githubusercontent.com/Radolyn/informatics_dark/master/informatics.js
// @run-at       document-body
// @grant        GM_addStyle
// @grant        GM_log
// ==/UserScript==

(function () {
  ("use strict");

  const removeElements = (elms) => elms.forEach((el) => el.remove());

  var darkColor = "#212121 !important";
  var darkLighterColor = "#424242 !important";

  var textColor = "#E0E0E0 !important";
  var textLighterColor = "#9E9E9E !important";

  var css = `
    body, .header, .title, .skip-block, #header, #header-home, .content, .side, .navbar, .combobox_summary, pre, .ui-widget-header, .ui-widget-content, #source-textarea, .bootstrap, .well-small, .ui-state-active {
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

    i, p, td, .title, .desc, .subcontent, .logininfo, .arrow, li.first, .combobox_input {
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
        height: 30px;
    }

    tr, #header, #Searchresult, #SearchresultLoading, .current, .combobox_button, #combobox_container_lang_id > span, .pagination a, .box, .generalbox {
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
    `;

  GM_addStyle(css);

  // убираем описание курса
  removeElements(document.querySelectorAll("#inst2"));
  removeElements(
    document.querySelectorAll(
      "#content > table > tbody > tr:nth-child(1) > td > table > tbody > tr"
    )
  );

  var h = document.createElement("p");

  var text = document.createTextNode("--- Informatics ---");
  h.appendChild(text);

  var header = document.querySelector("#header");

  if (header == null) {
    header = document.querySelector("#header-home");
    removeElements(document.querySelectorAll("#header-home > h1"));
  } else {
    removeElements(document.querySelectorAll("#header > h1"));
  }

  header.appendChild(h);

  setTimeout(
    () => removeElements(document.querySelectorAll("#left-column")),
    75
  ); // P.S. на главной странице убирает левую колонку
  setTimeout(() => removeElements(document.querySelectorAll("#stars")), 75); // P.S. убирает 'избранное:'
  setTimeout(() => removeElements(document.querySelectorAll(".bigicon")), 75); // убираем унопки навигации по задачам (кто-то их использует?)
})();
