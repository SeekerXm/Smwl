        window['LocalConst'] = {

            //pjax
            IS_PJAX: '1',
            IS_PAJX_COMMENT: '1',
            PJAX_ANIMATE: 'default',
            PJAX_TO_TOP: '0',
            TO_TOP_SPEED: '80',

            USER_COMPLETED: {"data":"_hmt.push([\"_trackPageview\", document.location.pathname]);"},

            CDN_NAME: 'UPYUN',
            LAZY_LOAD: '',
            PAGE_ANIMATE: '',
            THEME_COLOR: '14',
            THEME_COLOR_EDIT: 'white-white-white',
            THEME_HEADER_FIX: '1',
            THEME_ASIDE_FIX: '1',
            THEME_ASIDE_FOLDED: '',
            THEME_ASIDE_DOCK: '',
            THEME_CONTAINER_BOX: '1',
            THEME_HIGHLIGHT_CODE: '1',
            THEME_MATHJAX: '',
            THEME_TOC: '1',
            THEME_DARK_MODE: 'auto',
            THEME_DARK_MODE_VALUE: 'auto',
            SHOW_SETTING_BUTTON: '1',

            THEME_DARK_HOUR: '18',
            THEME_LIGHT_HOUR: '6',
            THUMB_STYLE: 'normal',
            AUTO_READ_MODE: '',

            //代码高亮
            CODE_STYLE_LIGHT: 'dracula',
            CODE_STYLE_DARK: 'dracula',

            //other
            OFF_SCROLL_HEIGHT: '50',
            SHOW_IMAGE_ALT: '1',
            USER_LOGIN: '',
            USE_CACHE: '1',
            POST_SPEECH: '1',
        };

        if ('serviceWorker' in navigator) {
            if (LocalConst.USE_CACHE) {
                navigator.serviceWorker.register(LocalConst.BLOG_URL + 'sw.min.js?v=7.3.12020081502')
                    .then(function (reg) {

                    }).catch(function (error) {
                    console.log('cache failed with ' + error); // registration failed
                });
            } else {
                navigator.serviceWorker.getRegistrations()
                    .then(function (registrations) {
                        for (let registration of registrations) {
                            registration.unregister();
                            // 清除缓存
                            window.caches && caches.keys && caches.keys().then(function (keys) {
                                keys.forEach(function (key) {
                                    caches.delete(key);
                                });
                            });
                            console.log("unregister success")
                        }
                    });
            }
        }