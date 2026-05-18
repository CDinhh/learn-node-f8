import Course from '../models/Course.js';

class SiteController {

    //[GET] /
    async index(req, res) {
        // res.render('home');
        // res.json({
        //     'test': 'test'
        // })

        try {
            const data = await Course.find({});
            res.json(data);
        } catch (error) {
            res.status(400).json({ 'error': 'IDK WHY' });
        }

    }

    //[GET] /search
    search(req, res) {
        res.render('search');
    }
}

export default new SiteController();