// Google Tag Manager
(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-M3KF5G9X');

// Reddit Pixel
//!function(w,d){if(!w.rdt){var p=w.rdt=function(){p.sendEvent?p.sendEvent.apply(p,arguments):p.callQueue.push(arguments)};p.callQueue=[];var t=d.createElement("script");t.src="https://www.redditstatic.com/ads/pixel.js",t.async=!0;var s=d.getElementsByTagName("script")[0];s.parentNode.insertBefore(t,s)}}(window,document);rdt('init','a2_hhey4shrgwfv');rdt('track', 'PageVisit');

// Meta Pixel Code
!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '765992762948956');
fbq('track', 'PageView');

/* !function(e,t,n,s,u,a){e.twq||(s=e.twq=function(){s.exe?s.exe.apply(s,arguments):s.queue.push(arguments);
},s.version='1.1',s.queue=[],u=t.createElement(n),u.async=!0,u.src='https://static.ads-twitter.com/uwt.js',
a=t.getElementsByTagName(n)[0],a.parentNode.insertBefore(u,a))}(window,document,'script');
twq('config','qf2c6'); */

// Events
const url_params = new URLSearchParams(window.location.search);
const utm_source = url_params.get('utm_source');
document.addEventListener('DOMContentLoaded', function() {
    var buttons = document.querySelectorAll(".ep-add-to-cart");
    buttons.forEach(function(btn) {
        btn.addEventListener("click", function() {
            var product = btn.getAttribute("data-product") || "unknown";
            window.dataLayer = window.dataLayer || [];
            window.dataLayer.push({
                'event': 'add_to_cart',
                'product_name': product
            });      
            if (typeof fbq !== 'undefined') {
                fbq('track', 'AddToCart', {
                    content_name: product
                });
                console.log('MetaAds.'+product);
            }
            
            /*
            if( typeof rdt !== 'undefined' ){
                rdt('track', 'AddToCart', {
                    conversion_id: 'purchase-' + product
                });
            }

            if (typeof twq !== 'undefined') {
                twq('event', 'tw-qf2c6-qf2ca', {
                    value: 59,
                    currency: 'USD',
                    contents: [{
                        content_type: 'product',
                        content_id: product,
                        content_name: product,
                        content_price: 59,
                        num_items: 1,
                    }]
                });
                console.log('Twitter Pixel for product: ' + product);
            }
            */

        });
    });
});