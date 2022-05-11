function cntrl() {
    return {
        index: (req, res) => {
            res.render('index', {
                title: 'Cyber Invogirotion',
                style: 'index.css'
            });
        },
        about: (req, res) => {
            res.render('about', {
                title: 'about_us',
                style: 'about.css'
            });
        },
        contact: (req, res) => {
            res.render('contact', {
                title: 'contact us',
                style: 'contact.css'
            });
        },
        default: (req, res) => {
            res.render('404', {
                title: 'error page',
                style: '404.css'
            });
        }
    }
}
module.exports = cntrl;