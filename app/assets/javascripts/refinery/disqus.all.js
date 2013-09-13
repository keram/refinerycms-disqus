
(function (window, $) {

// Source: ~/refinerycms-disqus/scripts/disqus.js
(function (window, refinery) {

    /**
     * @constructor
     * @class refinery.extern.Disqus
     * @expose
     * @extends {refinery.Object}
     */
    refinery.Object.create({

        name: 'Disqus',

        module: 'extern',

        options: {

            /**
             * Url from which load DISQUS
             *
             * @type {string}
             */
            //url: 'http://localhost/embed.js?{disqus_shortname}'
            url: 'http://{shortname}.disqus.com/embed.js'
        },

        /**
         * @return {Object} self
         */
        destroy: function () {
            if (this.is('initialised') && typeof DISQUS === 'object') {
                DISQUS.reset({
                    'reload': false
                });
            }

            this._destroy();

            return this;
        },

        /**
         * Check if DISQUS object exists, if not try configure and load.
         *
         * @return {undefined} [description]
         */
        initialise_or_reload: function () {
            var that = this,
                options = /** disqus_config */(that.holder.data('disqus')),
                page = options.page || {};

            if (typeof DISQUS === 'object') {
                DISQUS.reset({
                    'reload': true,
                    'config': function () {
                        var key;

                        for (key in options) {
                            if (options.hasOwnProperty(key)) {
                                this[key] = options[key];
                            }
                        }
                    }
                });
            } else {

                /**
                 * Configuration of DISQUS for first time
                 * For more info see:
                 *
                 * http://help.disqus.com/customer/portal/articles/472098-javascript-configuration-variables
                 * http://www.disqus.com/api/docs/categories/
                 */

                /**
                 * Tells the Disqus service your forum's shortname,
                 * which is the unique identifier for your website as registered on Disqus.
                 * If undefined, the Disqus embed will not load.
                 *
                 * @expose
                 * @type {string}
                 */
                window.disqus_shortname = options.shortname;

                /**
                 * When the Disqus embed is loaded, the identifier is used to look up the correct thread.
                 * If disqus_identifier is undefined, the page's URL will be used
                 *
                 * @expose
                 * @type {string|undefined}
                 */
                window.disqus_identifier = page.identifier;

                /**
                 * This is used when creating the thread on Disqus for the first time.
                 * If undefined, Disqus will use the <title> attribute of the page.
                 * If that attribute could not be used, Disqus will use the URL of the page.
                 *
                 * @expose
                 * @type {string|undefined}
                 */
                window.disqus_title = page.title;

                /**
                 * If undefined, Disqus will take the window.location.href.
                 * This URL is used to look up or create a thread if disqus_identifier is undefined.
                 * In addition, this URL is always saved when a thread is being created
                 * so that Disqus knows what page a thread belongs to.
                 *
                 * @expose
                 * @type {string|undefined}
                 */
                window.disqus_url = page.url;

                /**
                 *
                 * @expose
                 * @type {string|undefined}
                 */
                window.disqus_category_id = options.category_id;

                $('<script/>', {
                    'async': true,
                    'src': that.options.url.replace('{shortname}', window.disqus_shortname)
                }).appendTo($('head'));
            }
        },

        /**
         * Initialisation
         *
         * @param {!jQuery} holder
         *
         * @return {Object} self
         */
        init: function (holder) {
            var that = this;

            if (that.is('initialisable')) {
                that.is('initialising', true);
                that.attach_holder(holder);

                that.initialise_or_reload();

                that.is({'initialised': true, 'initialising': false});
                that.trigger('init');
            }

            return that;
        }
    });


    /**
     * Discuss initialization
     *
     * @expose
     * @param  {jQuery} holder
     * @return {undefined}
     */
    refinery.ui.disqus = function (holder) {
        /**
         * Disqus dom holder
         *
         * @type {jQuery}
         */
        var disqus_holder = holder.find('#disqus_thread');

        if (disqus_holder.length > 0) {
            refinery('extern.Disqus').init(disqus_holder);
        }
    };
}(window, refinery));
}(window, jQuery));