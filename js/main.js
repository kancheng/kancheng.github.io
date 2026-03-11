var themes = [
	{ name: "sakura-vader", href: "sakura-vader.css" },
	{ name: "sakura-earthly", href: "sakura-earthly.css" }
];
var THEME_STORAGE_KEY = "sakura-theme";
var DAY_START_HOUR = 6;
var DAY_END_HOUR = 18;

var parent_v = document.getElementById("parent-v");
var parent_g = document.getElementById("parent-g");
var current = 0;
var sakura = document.getElementById("sakura-css");
var tem_key = "";

function setThemeCssVars(themeName) {
	var root = document.documentElement;
	if (!root) return;

	// Dark: use translucent white surfaces; Light: translucent black surfaces.
	if (themeName === themes[0].name) {
		root.style.setProperty("--nav-btn-bg", "rgba(255, 255, 255, 0.12)");
		root.style.setProperty("--nav-btn-hover-bg", "rgba(255, 255, 255, 0.18)");
		root.style.setProperty("--nav-btn-border", "rgba(255, 255, 255, 0.18)");
		root.style.setProperty("--nav-btn-color", "inherit");

		root.style.setProperty("--cv-download-bg", "rgba(255, 255, 255, 0.08)");
		root.style.setProperty("--cv-download-hover-bg", "rgba(255, 255, 255, 0.12)");
		root.style.setProperty("--cv-download-border", "rgba(255, 255, 255, 0.14)");
		root.style.setProperty("--cv-download-hover-border", "rgba(255, 255, 255, 0.2)");
		root.style.setProperty("--cv-download-color", "rgba(255, 255, 255, 0.95)");
	} else {
		root.style.setProperty("--nav-btn-bg", "rgba(0, 0, 0, 0.06)");
		root.style.setProperty("--nav-btn-hover-bg", "rgba(0, 0, 0, 0.1)");
		root.style.setProperty("--nav-btn-border", "rgba(0, 0, 0, 0.12)");
		root.style.setProperty("--nav-btn-color", "inherit");

		root.style.setProperty("--cv-download-bg", "rgba(0, 0, 0, 0.04)");
		root.style.setProperty("--cv-download-hover-bg", "rgba(0, 0, 0, 0.07)");
		root.style.setProperty("--cv-download-border", "rgba(0, 0, 0, 0.08)");
		root.style.setProperty("--cv-download-hover-border", "rgba(0, 0, 0, 0.14)");
		root.style.setProperty("--cv-download-color", "#1a1a1a");
	}
}

function applyTheme(index) {
	if (!sakura || index < 0 || index >= themes.length) return;
	var t = themes[index];
	sakura.href = "css/" + t.href;
	setThemeCssVars(t.name);
	if (parent_v && parent_g) {
		if (t.name === themes[0].name) {
			parent_v.style.display = "block";
			parent_g.style.display = "none";
		} else {
			parent_v.style.display = "none";
			parent_g.style.display = "block";
		}
	}
	current = index;
}

function getDefaultThemeIndex() {
	var hour = new Date().getHours();
	return (hour >= DAY_START_HOUR && hour < DAY_END_HOUR) ? 1 : 0;
}

function initTheme() {
	try {
		var saved = localStorage.getItem(THEME_STORAGE_KEY);
		if (saved) {
			var idx = themes.findIndex(function (t) { return t.name === saved; });
			if (idx >= 0) {
				applyTheme(idx);
				return;
			}
		}
		applyTheme(getDefaultThemeIndex());
	} catch (e) {
		applyTheme(getDefaultThemeIndex());
	}
}

function switchSakuraTheme() {
	tem_key = (current + 1) % themes.length;
	applyTheme(tem_key);
	try {
		localStorage.setItem(THEME_STORAGE_KEY, themes[tem_key].name);
	} catch (e) {}
}
$(window).scroll(function() {
	var $window = $(window).scrollTop();
	if ($window > 300) {
		$('button.totop').fadeIn(300);
	} else {
		$('button.totop').fadeOut(300);
	}			
})
$(function() {
	//To top effect
	$('button.totop').on('click', function() {
		$('html, body').animate({
			scrollTop: 0
		}, 800);
		return false;
	})
});

initTheme();
