modules.define('form', ['i-bem__dom'], function (provide, BEMDOM) {
    provide(BEMDOM.decl(this.name, {
        onSetMod: {
            js: {
                inited: function () {
                    this.bindTo('submit', this._onSubmit);

                    this.on('submit', function () {
                        console.log('BEM-event');
                    });
                }
            }
        },
        _onSubmit: function (e) {
            this.emit('submit');
            e.preventDefault();
        },
        getVal: function() {
            return this.domElem.serialize();
        }
    }));
});
