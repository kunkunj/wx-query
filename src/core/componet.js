export default function (options) {
    if (options.methods.createDataKey) {
        throw new Error('请不要取名createDataKey')
    }
    options.methods.createDataKey = function (object, sup, vm) {
        for (const key in object) {
            if (typeof object[key] == 'object') {
                vm.createDataKey(object[key], sup + '$$' + key, vm)
            } else if (['string', 'number'].includes(typeof object[key])) {
                vm.setData({
                    [sup + '$$' + key]: object[key]
                })
                Object.defineProperty(vm.data, sup + '$$' + key, {
                    set(val) {
                        let arr = (sup + '$$' + key).split('$$')
                        let str = 'observeData.'
                        for (let index = 1; index < arr.length; index++) {
                            if (index < arr.length - 1) {
                                str = str + arr[index] + '.'
                            } else {
                                str = str + arr[index]
                            }
                        }
                        vm.setData({
                            [str]: val
                        })
                    },
                    get() {
                        return object[key]
                    }
                })
            }
        }
    }
    options.created && options.created()
    options.created = function () {
        if (options.data.observeData) {
            this.createDataKey(options.data.observeData, options.data.sup || 'L', this)
        }
    }
    Component(options)
}