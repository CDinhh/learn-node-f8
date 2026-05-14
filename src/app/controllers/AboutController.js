class AboutController {
    //[GET] /about
    index(req, res) {
        res.render('about');
    }
    detail(req, res) {
        res.send('detail');
    }
}

export default new AboutController();