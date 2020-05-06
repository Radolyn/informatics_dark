// ==UserScript==
// @name         Informatics dark theme additions
// @version      0.1
// @description  Turns Informatics into dark mode!
// @author       Radolyn
// @license      MIT
// @match        https://informatics.msk.ru/*
// @match        https://informatics.mccme.ru/*
// @supportURL   https://github.com/radolyn/informatics_dark
// @updateURL    https://raw.githubusercontent.com/Radolyn/informatics_dark/master/informatics_additions.user.js
// @downloadURL  https://raw.githubusercontent.com/Radolyn/informatics_dark/master/informatics_additions.user.js
// @homepage     https://github.com/radolyn/informatics_dark
// @namespace    https://github.com/radolyn/informatics_dark
// @run-at       document-body
// ==/UserScript==

(function () {
    ("use strict");

    const removeElements = (elms) => elms.forEach((el) => el.remove());

    function remove_logo() {
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
    }

    remove_logo();

    function remove_description() {
        removeElements(document.querySelectorAll("#inst2"));
        // @todo: ломает отображение профиля
        removeElements(
            document.querySelectorAll(
                "#content > table > tbody > tr:nth-child(1) > td > table > tbody > tr"
            )
        );
    }

    function remove_columns() {
        removeElements(document.querySelectorAll("#left-column"));
    }

    function remove_stars() {
        removeElements(document.querySelectorAll("#stars"));
    }

    function remove_navigation() {
        removeElements(document.querySelectorAll(".bigicon"));
    }

    function remove_search() {
        removeElements(document.querySelectorAll("#inst5198"));
    }

    remove_description();
    remove_columns();
    remove_stars();
    remove_navigation();
    remove_search();
})();
