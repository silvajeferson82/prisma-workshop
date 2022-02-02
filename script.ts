import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

// A `main` function so that you can use async/await
async function main() {
  //Create User
  // const result  = await prisma.user.create({
  //   data: {
  //     name: 'Rodrigo Medeiros',
  //     email: 'rodrigo@email.com',
  //   }
  // });

  //Get all users
  // const result = await prisma.user.findMany()

  //Create one user
  // const create = await prisma.user.create({
  //   data: {
  //     name: 'Carlos Barata',
  //     email: 'carlos@email.com'
  //   }
  // })

  //Edit User
  // const update = await prisma.user.update({
  //   data:{
  //     email: 'silvajeferson82@email.com'
  //   },
  //   where:{
  //     id: 1
  //   }
  // });


  //Create Post
  //  const result = await prisma.post.create({
  //    data: {
  //      title: 'Hello World',
  //    }
  //  });

  //Relation Post with User
  // const result = await prisma.post.update({
  //   data: {
  //     author: {
  //       connect: {
  //         id: 1,
  //       },
  //     },
  //   },
  //   where: {
  //     id: 1,
  //   }
  // });

  // const result = await prisma.user.findUnique({
  //     where: {
  //       email: 'silvajefrson@email.com',
  //     }
  // })

  //Busca por elementos
  // const result =  await prisma.user.findMany({
  //   select: {
  //     id: true,
  //     email: true,
  //   },
  // });
  
  //Buscar User e Relacionamentos Post
  // const result =  await prisma.user.findMany({
  //   include: {
  //     posts: {
  //       select: {
  //         id: true,
  //         title: true,
  //       }
  //     }
  //   }
  // });

  // const result  = await prisma.user.create({
  //   data: {
  //     email: 'regiane@email.com',
  //     name: 'Regiane@email.com',
  //     posts: {
  //       create: { title: 'Postagem da Regiane.'},
  //     },
  //   },
  // });

  //Busca de User por determianada letra
  // const result  = await prisma.user.findMany({
  //   select: {
  //     id: true,
  //     name: true,
  //   },
  //   where: {
  //     name: { startsWith: 'R' }
  //   }
  // })

  const result = await prisma.user.upsert({
    where: {
      email: 'naotem@email.com'
    },
    create: {
      email: 'naotem@email.com',
      name: 'Create Teste upsert 1'
    },
    update:{
      name: 'Update Teste upsert 2'
    }
  });

  // console.log(JSON.stringify(result, null, 1));
  console.log(result);
}

main()
  .catch(e => {
    throw e
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
