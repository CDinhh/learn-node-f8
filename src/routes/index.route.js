import aboutRouter from '../routes/about.route.js'


function route(app) {

    app.get('/', (req, res) => {
        res.render('home');
    });

    app.use('/about', aboutRouter);

    app.get('/search', (req, res) => {
        res.render('search');
    })

}

export default route;