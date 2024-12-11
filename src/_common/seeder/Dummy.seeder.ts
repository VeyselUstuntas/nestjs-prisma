import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient();

async function main() {
    const basketball = await prisma.product.upsert({
        where: { name: "BasketBall" },
        update: {},
        create: {
            name: "BasketBall",
            price: 34.90,
            availibility: "IN_STORE",
            description: {
                create: {
                    content: "Güzel bir Basketbol topu."
                }
            },
            tags: {
                create: [
                    { content: "Basketball" },
                    { content: "Ball" },
                    { content: "Atletichs" }
                ]
            },
        }
    });

    const football = await prisma.product.upsert({
        where: { name: "FootBall" },
        update: {},
        create: {
            name: "FootBall",
            price: 44.90,
            availibility: "ONLINE",
            description: {
                create: {
                    content: "Güzel bir Futbol topu."
                }
            },
            tags: {
                create: [
                    { content: "FootBall" },
                    { content: "Ball" },
                    { content: "Atletichs" }
                ]
            },
        },
        include: {
            description: true,
            reviews: true,
            tags: true
        }
    });


    const reviwBasketball1 = await prisma.review.create({
        data: {
            title: "idare eder",
            content: "idare eder kargoda açılmış",
            rating: 2,
            productId: basketball.id
        },
        include: {
            product: true
        }
    });

    const reviwBasketball2 = await prisma.review.create({
        data: {
            title: "Güzel top",
            content: "Güzel top kargo çok hızlıydı",
            rating: 5,
            productId: basketball.id
        },
        include: {
            product: true
        }
    });

    const reviwFootball1 = await prisma.review.create({
        data: {
            title: "sahte ürün ",
            content: "sahte ürrün göndermişler idae",
            rating: 1,
            productId: football.id
        },
        include: {
            product: true
        }
    });

}

main()
    .catch(async (e) => {
        console.log(e);
        process.exit(1);
    });