import aboutRouter from './about.route.js';
import siteRouter from './site.route.js'


function route(app) {


    app.use('/about', aboutRouter);
    app.use('/', siteRouter);

    // app.get('/search', (req, res) => {
    //     res.render('search');
    // })


}

export default route;