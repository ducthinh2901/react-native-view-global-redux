Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.toastReducer = exports.ToastActionsCreators = exports.ToastActions = exports.Toast = undefined;
var _ToastContainer = require('./src/ToastContainer');
var _ToastContainer2 = _interopRequireDefault(_ToastContainer);
var _actions = require('./src/redux/actions');
var _reducer = require('./src/redux/reducer');
var _reducer2 = _interopRequireDefault(_reducer);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
exports.ViewGlobal = _ToastContainer2.default;
exports.ViewGlobalActions = _actions.actions;
exports.ViewGlobalActionsCreators = _actions.actionCreators;
exports.viewglobalReducer = _reducer2.default;