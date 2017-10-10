const Vue = require('vue')
const app = new Vue({
    template: `<span>123</span> <div>Hello World</div>`
})
const renderer = require('vue-server-renderer').createRenderer()
renderer.renderToString(app, (err, html) => {
    if (err) throw err;//因为模板是不正确的，会报错，但是此处的err对象确实空的
    console.log('渲染成功，内容为：' + html)
})