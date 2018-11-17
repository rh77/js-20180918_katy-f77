'use strict';

/**
 * Функция декоратор makeLogging(fn, log), для функции fn
 * возвращающий обёртку, которая при каждом вызове добавляет её аргументы в массив log.
 * @param {Function} fn - декорируемая функция
 * @param {Array} log - массив для записи логов
 * @return {Function}
 */
function makeLogging(fn, log) {

    return function(){

        let _this = this;
        let args = [];

        for (let i = 0; i < arguments.length; i++ )
        {
            args.push(arguments[i]);
        }

        log.push(args);

        return fn.apply(_this, arguments);
    }
}