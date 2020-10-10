import Cors from 'cors'
import initMiddleware from "../../lib/init-middleware";


const cors = initMiddleware(
    Cors({
        methods: ['GET', 'POST', 'OPTIONS']
    })
);

export default async (req,res) => {
    await cors(req, res);

    const jwt = req.headers.authorization;
    const request = await fetch('https://api.nike.com/sport/v3/me/activities/after_time/0', {
        headers: new Headers({
            'Authorization': jwt,
        })
    });
    const data = await request.json();
    res.json(data);
}
