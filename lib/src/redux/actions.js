Object.defineProperty(exports, "__esModule", {
    value: true
});
var actions = exports.actions = {
    // DISPLAY_ERROR: '@@TOAST/DISPLAY_ERROR',
    // DISPLAY_WARNING: '@@TOAST/DISPLAY_WARNING',
    DISPLAY_INFO: '@@VIEWGLOBAL/DISPLAY_VIEW_GLOBAL',
    HIDE: '@@VIEWGLOBAL/HIDE_VIEW_GLOBAL'
};


var toastAction = function toastAction(title, message, duration, type) {
    return {
        type: type,
        payload: {
            title: title,
            message: message,
            duration: duration
        }
    };
};



var actionCreators = exports.actionCreators = {
    hide: function hide() {
        return {
            type: actions.HIDE,
            payload: {}
        };

    },
    // displayError: function displayError(message) {
    //     var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 4000;
    //     return toastAction(message, duration, actions.DISPLAY_ERROR);
    // },
    // displayWarning: function displayWarning(message) {
    //     var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 4000;
    //     return toastAction(message, duration, actions.DISPLAY_WARNING);
    // },
    displayViewGlobal: function displayInfo(title, message) {
        var duration = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 4000;
        return toastAction(title, message, duration, actions.DISPLAY_INFO);
    }
};