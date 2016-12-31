(function (global) {
    'use strict';

    var notInBrowser = !global.HTMLElement || !HTMLElement.prototype;
    var alreadyDefined = ('hidden' in HTMLElement.prototype);
    var notPossibleToImplement = typeof Object.defineProperty === 'undefined';

    if (notInBrowser || alreadyDefined || notPossibleToImplement) {
        return;
    }

    Object.defineProperty(HTMLElement.prototype, 'hidden', {
        get: function () {
            return this.hasAttribute('hidden');
        },
        set: function (value) {
            if (value) {
                this.setAttribute('hidden', '');
            } else {
                this.removeAttribute('hidden');
            }

            return value;
        }
    });
})(typeof window === 'undefined' ? this : window);