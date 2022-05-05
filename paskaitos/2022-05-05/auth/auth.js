import {url} from '../utils/helper.js'

const auth = (req, res, next) => {
    if (req.session.loggedin === undefined || !req.session.loggedin) {
        res.redirect(url)
    } else {
        next()
    }
}

export default auth