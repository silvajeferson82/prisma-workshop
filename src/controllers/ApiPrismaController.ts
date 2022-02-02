import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient({log:["error", "info", "query", "warn"]});


class ApiPrismaController {
    async index (request: Request, response: Response) {
        const result  = await prisma.user.findMany();

        return response.json(result);
    };

    async signup(request: Request, response: Response) {
        try{
            const { name, email} = request.body;
            console.log(typeof name);
            const result = await prisma.user.create({
                data:{
                    name,
                    email,
                }
            });
            return response.json(result);
        }catch(err){console.log({"ERROOOOO": err})}
    };

    async views(request: Request, response: Response){
        const { id } = request.params;

        const result = await prisma.post.update({
            where: {
                id: Number(id),
            },
            data: {
                viewCount: {
                    increment: 1
                },
            }
        });
        return response.json(result);
    };
}

export { ApiPrismaController };