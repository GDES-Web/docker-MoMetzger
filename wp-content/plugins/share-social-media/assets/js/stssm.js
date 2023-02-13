( function() {
	'use strict';

	if ( 'undefined' === typeof stssm ) {
		return;
	}

	if ( ! Element.prototype.matches ) {
		Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
	}

	if ( '1' === stssm.sticky ) {
		const iconsStickyAll = stssm.iconsStickyAll;
		const iconsSticky = stssm.iconsSticky;
		const iconsStickyAllKeys = Object.keys( iconsStickyAll );
		const iconsStickyKeys = Object.keys( iconsSticky );
		var html = '' +
		'<div id="stssm-popup" class="stssm-overlay stssm-light">' +
			'<div class="stssm-popup">' +
				'<a class="stssm-popup-cancel" href="javascript:void(0)"></a>' +
				'<div class="stssm-popup-content">' +
					'<ul class="stssm-social-icons stssm-content-social-icons">';
		for ( var i = 0; i < iconsStickyAllKeys.length; i++ ) {
			html += ( '<li class="ssm-' + iconsStickyAllKeys[ i ] + '"><i tabindex="0" class="' + iconsStickyAll[ iconsStickyAllKeys[ i ] ] + '"></i></li>' );
		}
			html += '</ul>' +
				'</div>' +
			'</div>' +
		'</div>' +
		'<ul class="stssm-social-icons stssm-sticky-social-icons">';
		for ( var i = 0; i < iconsStickyKeys.length; i++ ) {
			html += ( '<li class="ssm-' + iconsStickyKeys[ i ] + '"><i tabindex="0" class="' + iconsSticky[ iconsStickyKeys[ i ] ] + '"></i></li>' );
		}
			html += '<li class="ssm-action stssm-expand">' +
				'<a class="stssm-more" href="javascript:void(0)"></a>' +
			'</li>' +
			'<li class="ssm-action stssm-toggle-icons">' +
				'<a class="stssm-toggle" href="javascript:void(0)"></a>' +
			'</li>' +
		'</ul>' +
		'';

		document.body.innerHTML += html;

		var hidden = localStorage.getItem( 'stssm-sticky-hidden' );
		if ( '1' === hidden ) {
			var icons = document.querySelectorAll( '.stssm-sticky-social-icons li:not(:last-child)' );
			for ( var i = 0; i < icons.length; i++ ) {
				icons[i].className = 'stssm-hide';
			}
		}

		var popup = document.getElementById( 'stssm-popup' );
		var popupCancel = document.querySelector( '.stssm-popup-cancel' );

		const toggle = document.querySelector( '.stssm-toggle' );
		toggle.addEventListener( 'click', function( event ) {
			event.preventDefault();
			var hidden = localStorage.getItem( 'stssm-sticky-hidden' );
			if ( ( '0' === hidden ) || ! hidden ) {
				var icons = document.querySelectorAll( '.stssm-sticky-social-icons li:not(:last-child)' );
				for ( var i = 0; i < icons.length; i++ ) {
					icons[i].classList.add( 'stssm-hide' );
				}
				localStorage.setItem( 'stssm-sticky-hidden', '1' );
			} else {
				var icons = document.querySelectorAll( '.stssm-sticky-social-icons li:not(:last-child)' );
				for ( var i = 0; i < icons.length; i++ ) {
					icons[i].classList.remove( 'stssm-hide' );
				}
				localStorage.setItem( 'stssm-sticky-hidden', '0' );
			}
		});

		const more = document.querySelector( '.stssm-more' );
		more.addEventListener( 'click', function( event ) {
			event.preventDefault();
			if ( popup ) {
				if ( popup.classList.contains( 'stssm-popup-open' ) ) {
					popup.classList.remove( 'stssm-popup-open' );
				} else {
					popup.classList.add( 'stssm-popup-open' );
					popupCancel.focus();
				}
			}
		});

		popupCancel.addEventListener( 'click', function( event ) {
			event.preventDefault();
			if ( popup ) {
				popup.classList.remove( 'stssm-popup-open' );
			}
		});
	}

	function stssmSocialWindow( url ) {
		var left = ( screen.width - 570 ) / 2;
		var top = ( screen.height - 570 ) / 2;
		var params = 'menubar=no,toolbar=no,status=no,width=570,height=570,top=' + top + ',left=' + left;
		window.open( url, 'NewWindow', params );
	}

	function stssmSetShareLinks() {
		var url = document.URL;
		var lastCharacter = url[ url.length - 1 ];
		if ( '#' === lastCharacter ) {
			url = url.substring( 0, url.length - 1 );
		}
		var pageUrl = encodeURIComponent( url );
		var title = document.title;
		var desc = document.querySelector( "meta[name='description']" );
		var text = document.querySelector( "meta[property='og:description']" );
		var media = document.querySelector( "meta[property='og:image']" );

		if ( desc ) {
			desc = desc.getAttribute( 'content' );
		}
		if ( text ) {
			text = text.getAttribute( 'content' );
		}
		if ( media ) {
			media = media.getAttribute( 'content' );
		}

		if ( ! title ) {
			title = stssm.title;
		}
		if ( ! desc ) {
			desc = stssm.desc;
		}
		if ( ! text ) {
			text = desc;
		}
		if ( ! media ) {
			media = stssm.image;
		}

		if ( title ) {
			title = encodeURIComponent( title );
		} else {
			title = '';
		}

		if ( desc ) {
			desc = encodeURIComponent( desc );
		} else {
			desc = '';
		}

		if ( text ) {
			text = encodeURIComponent( text );
		} else {
			text = '';
		}

		if ( media ) {
			media = encodeURIComponent( media );
		} else {
			media = '';
		}

		function stssmOpenShare( event ) {
			if ( ( 'click' === event.type ) || ( 13 === event.keyCode ) ) {
				if ( event.target.matches( '.ssm-facebook i' ) ) {
					var url = 'https://www.facebook.com/sharer.php?u=' + pageUrl;
					stssmSocialWindow( url );
				} else if ( event.target.matches( '.ssm-twitter i' ) ) {
					var url = 'https://twitter.com/intent/tweet?url=' + pageUrl + '&text=' + text;
					stssmSocialWindow( url );
				} else if ( event.target.matches( '.ssm-linkedin i' ) ) {
					var url = 'https://www.linkedin.com/sharing/share-offsite/?url=' + pageUrl;
					stssmSocialWindow( url );
				} else if ( event.target.matches( '.ssm-pinterest i' ) ) {
					var url = 'https://www.pinterest.com/pin/create/link/?url=' + pageUrl + '&media=' + media + '&description=' + desc;
					stssmSocialWindow( url );
				} else if ( event.target.matches( '.ssm-reddit i' ) ) {
					var url = 'https://reddit.com/submit?url=' + pageUrl + '&title=' + title;
					stssmSocialWindow( url );
				} else if ( event.target.matches( '.ssm-tumblr i' ) ) {
					var url = 'https://www.tumblr.com/widgets/share/tool?canonicalUrl=' + pageUrl + '&title=' + title + '&caption=' + desc;
					stssmSocialWindow( url );
				} else if ( event.target.matches( '.ssm-blogger i' ) ) {
					var url = 'https://www.blogger.com/blog-this.g?u=' + pageUrl + '&n=' + title + '&t=' + desc;
					stssmSocialWindow( url );
				} else if ( event.target.matches( '.ssm-evernote i' ) ) {
					var url = 'https://www.evernote.com/clip.action?url=' + pageUrl + '&title=' + title;
					stssmSocialWindow( url );
				} else if ( event.target.matches( '.ssm-getpocket i' ) ) {
					var url = 'https://getpocket.com/edit?url=' + pageUrl;
					stssmSocialWindow( url );
				} else if ( event.target.matches( '.ssm-wordpress i' ) ) {
					var url = 'https://wordpress.com/press-this.php?u=' + pageUrl + '&t=' + title + '&s=' + desc;
					stssmSocialWindow( url );
				} else if ( event.target.matches( '.ssm-line i' ) ) {
					var url = 'https://social-plugins.line.me/lineit/share?url=' + pageUrl;
					stssmSocialWindow( url );
				} else if ( event.target.matches( '.ssm-whatsapp i' ) ) {
					var url = 'https://api.whatsapp.com/send?text=' + title + '%20' + pageUrl;
					stssmSocialWindow( url );
				} else if ( event.target.matches( '.ssm-envelope i' ) ) {
					var url = 'mailto:?subject=' + title + '&body=' + desc;
					stssmSocialWindow( url );
				}
			}
		}

		[].forEach.call( document.querySelectorAll( '.stssm-social-icons' ), function ( el ) {
			el.addEventListener( 'click', stssmOpenShare );
			el.addEventListener( 'keydown', stssmOpenShare );
		} );

		document.addEventListener( 'keyup', function( event ) {
			if ( 'Escape' === event.key ) {
				if ( popup ) {
					popup.classList.remove( 'stssm-popup-open' );
				}
			}
		} );
	}

	try {
		stssmSetShareLinks();
	} catch( e ) {}
} )();
