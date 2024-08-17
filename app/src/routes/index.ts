import { Application } from "express";
import cliente from "./ClientesRoutes";



const routes = (app: Application) => {
    app.get('/api', (req, res)=> {
        res.status(200).json({
            message: 'Basico',
            version: '1.0.0'
        })
    });

    app.use(cliente)

};

export default routes