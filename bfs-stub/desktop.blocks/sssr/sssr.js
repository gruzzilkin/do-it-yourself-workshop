modules.define('sssr', ['i-bem__dom', 'jquery'], function(provide, BEMDOM, $) {

    provide(BEMDOM.decl(this.name, {
        onSetMod: {
            js: {
                inited: function() {
                    this.findBlockInside('form').on('submit', function() {
                        this.setMod('loading');
                        this._sendRequest();
                    }, this);
                }
            },
            loading: function(modName, modVal) {
                this.findBlockInside('spin').setMod('progress', modVal);
            }
        },

        // ...

        _onSuccess: function(result) {
            this.delMod('loading');
            BEMDOM.update(this.findBlockInside('content').domElem, result);
        }
    }))
})
