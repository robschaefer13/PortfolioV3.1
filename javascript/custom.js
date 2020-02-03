/* -------------------------------------------

	Name:		Rob Schaefer
	Date:		2019/01/10
	Author:		http://psdhtml.me

---------------------------------------------  */
/*global jQuery, document, yall, setTimeout */
var i = 0,
	img_lazy = document.querySelectorAll('img[data-src]:not(.dont)');
for (i = 0; i < img_lazy.length; i = i + 1) {
	img_lazy[i].classList.add('lazy');
}
document.addEventListener('DOMContentLoaded', function () {
	'use strict';
	yall({
		observeChanges: true,
		threshold: 500
	});
});
jQuery(function () {
	"use strict";
	var
		html_tag = document.documentElement,

		email_tag = document.getElementsByClassName('email'),
		Default = {
			utils: {
				mails: function () {
					if (email_tag.length) {
						Array.from(email_tag).filter(function (el) {
							return el.tagName !== 'INPUT' && el.tagName !== 'DIV';
						}).forEach(function (el) {
							el.innerText = el.innerText.replace('//', '@').replace(/\//g, '.');
							if (el.tagName === 'A') {
								el.setAttribute('href', 'mailto:' + el.innerText);
							}
						});
					}
				},
				mobile: function () {
					if (jQuery.browser.mobile) {
						html_tag.classList.add('mobile');
					} else {
						html_tag.classList.add('no-mobile');
					}
				},
				done: function () {
					var tag = document.createElement('script');
					tag.src = "javascript/scripts-async.js";
					document.body.appendChild(tag);
				}
			}

		};
	setTimeout(function () {
		Default.utils.mails();
		Default.utils.mobile();
		Default.utils.done();
	}, 0);
});

/*!*/
