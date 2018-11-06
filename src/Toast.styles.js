Object.defineProperty(exports, "__esModule", {
    value: true
});
var _reactNative = require('react-native');

// var colors = {
//     black: '#000',
//     blue: '#40C4FE',
//     red: '#F55E64',
//     transparent: 'transparent',
//     yellow: '#FFD200'
// };
exports.default =


    _reactNative.StyleSheet.create({
        container: {
            backgroundColor: 'transparent',
            top: 0,
            zIndex: 100,
            position: 'absolute',
            left: 0,
            right: 0,
            justifyContent: 'center',
            alignItems: 'center', 
            // shadowColor: '#000',
            // shadowOffset: { width: 0, height: 2 },
            // shadowOpacity: 0.8,
            // shadowRadius: 2,
            // elevation: 1,
            marginLeft: 2,
            marginRight: 2,
            marginTop: 0,
            borderRadius: 5,
            borderColor: '#DDD',
            borderWidth: 1,
        },

        messageContainer: { 
            width: '100%',
            backgroundColor: '#FFF',
            color: '#333',
        },

        titleContainer: { 
            width: '100%',
            backgroundColor: '#FFF',
            color: '#333',
        },

        // error: {
        //     backgroundColor: colors.red
        // },

        // warning: {
        //     backgroundColor: colors.yellow
        // },

        shadow: {
            // elevation: 10,
            // shadowColor: colors.black,
            // shadowOpacity: 0.5,
            // shadowOffset: {
            //     height: 0,
            //     width: 0
            // },

            // shadowRadius: 5
        }
    });