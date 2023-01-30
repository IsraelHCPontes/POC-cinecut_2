import prisma from "../src/db/db.js";

async function main() {

    await prisma.director.createMany({
        data:[
            {
                "name": "paul thomas anderson",
                "image": "https://flxt.tmsimg.com/assets/73551_v9_bb.jpg"
              },
              {
                "name": "james camarones",
                "image": "https://t.ctcdn.com.br/rKqTnkqC7m65FAfoCIz8_nL7kXM=/400x400/smart/filters:format(webp)/i490897.jpeg"
              }

        ]
    })


await prisma.studio.createMany({
    data:[
        {
            "name": "20fox",
          },
          {
            "name": "Universal",
          }

    ]
})


    await prisma.movies.createMany({
     data:[
            {
                "name": "Avatar",
                "image":"https://conteudo.imguol.com.br/c/entretenimento/80/2017/04/25/a-atriz-zoe-saldana-como-neytiri-em-avatar-1493136439818_v2_4x3.jpg",
                "directorId": 1,
                "studioId":1,
                "genre": "terror",
                "score": 2
              },
              {
                "name": "there will be blody",
                "image":"https://m.media-amazon.com/images/M/MV5BMjAxODQ4MDU5NV5BMl5BanBnXkFtZTcwMDU4MjU1MQ@@._V1_.jpg",
                "directorId": 2,
                "studioId":2,
                "genre": "terror",
                "score": 20
              }

        ]
    })

}


main()
    .then(()=> {
    console.log("Registro feito com sucesso!");
})
.catch(e => {
    console.error(e);
    process.exit(1);
})
.finally(async () => {
  await prisma.$disconnect();
})