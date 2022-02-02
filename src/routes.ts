import { Router } from "express";
import  { ApiPrismaController } from "./controllers/ApiPrismaController";

const routes = Router();

const apiPrismaController = new ApiPrismaController();


routes.get('/', (request, response ) => {
    response.json({message: "Prisma Day 2021 - Work Shop"});
});

routes.get('/users', apiPrismaController.index);

routes.post('/users', apiPrismaController.signup);

routes.put('/post/:id/views', apiPrismaController.views);



export { routes };
