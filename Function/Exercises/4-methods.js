'use strict';

const methods = (iface) => Object.keys(iface)
    .filter((name) => typeof iface[name] === 'function')
    .map((name) => [name, iface[name].length]);

module.exports = { methods };
