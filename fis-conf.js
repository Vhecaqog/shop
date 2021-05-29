fis.set('project.ignore', ['node_modules/**', 'output/**', 'fis-conf.js', 'js/**']);

// fis.hook('relative'); 
// fis.match('**', { relative: true })
fis.match('::package', {
    spriter: fis.plugin('csssprites')
});
fis.match('*.png', {
    // fis-optimizer-png-compressor 插件进行压缩，已内置
    optimizer: fis.plugin('png-compressor')

});

fis.match('*.{js,css,png,jpg}', {
    useHash: true,
    useMap: true
});

// fis.match('*.html', {
//     useMap: true
// })

fis.match('*.js', {
    optimizer: fis.plugin('uglify-js')
});


// // 对 CSS 进行图片合并
fis.match('*.css', {
    // 给匹配到的文件分配属性 `useSprite`
    useSprite: true,
    optimizer: fis.plugin('clean-css')
});



fis.match('::package', {
    postpackager: fis.plugin('loader', {
        allInOne: true
        // allInOne: {
        //     "css": "Public/pkg.css",
        //     "js": "Public/pkg.js"
        // }
    })
});

//开启组件同名依赖
// fis.match('*.{html,js}', {
//   useSameNameRequire: true
// });

// fis.match('*.js', {
//   packTo: '/js/dist/aio.js',
// });

// fis.match('*', {
//   deploy: fis.plugin('local-deliver', {
//     to: 'dist'
//   })
// });