var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import prisma from "../src/db/db.js";
function main() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: 
                //     await prisma.director.createMany({
                //         data:[
                //             {
                //                 "name": "paul thomas anderson",
                //                 "image": "https://flxt.tmsimg.com/assets/73551_v9_bb.jpg"
                //               },
                //               {
                //                 "name": "james camarones",
                //                 "image": "https://t.ctcdn.com.br/rKqTnkqC7m65FAfoCIz8_nL7kXM=/400x400/smart/filters:format(webp)/i490897.jpeg"
                //               }
                //         ]
                //     })
                // await prisma.studio.createMany({
                //     data:[
                //         {
                //             "name": "20fox",
                //           },
                //           {
                //             "name": "Universal",
                //           }
                //     ]
                // })
                return [4 /*yield*/, prisma.movies.createMany({
                        data: [
                            {
                                "name": "Avatar",
                                "image": "https://conteudo.imguol.com.br/c/entretenimento/80/2017/04/25/a-atriz-zoe-saldana-como-neytiri-em-avatar-1493136439818_v2_4x3.jpg",
                                "directorId": 1,
                                "studioId": 1,
                                "genre": "terror",
                                "score": 2
                            },
                            {
                                "name": "there will be blody",
                                "image": "https://m.media-amazon.com/images/M/MV5BMjAxODQ4MDU5NV5BMl5BanBnXkFtZTcwMDU4MjU1MQ@@._V1_.jpg",
                                "directorId": 2,
                                "studioId": 2,
                                "genre": "terror",
                                "score": 20
                            }
                        ]
                    })];
                case 1:
                    //     await prisma.director.createMany({
                    //         data:[
                    //             {
                    //                 "name": "paul thomas anderson",
                    //                 "image": "https://flxt.tmsimg.com/assets/73551_v9_bb.jpg"
                    //               },
                    //               {
                    //                 "name": "james camarones",
                    //                 "image": "https://t.ctcdn.com.br/rKqTnkqC7m65FAfoCIz8_nL7kXM=/400x400/smart/filters:format(webp)/i490897.jpeg"
                    //               }
                    //         ]
                    //     })
                    // await prisma.studio.createMany({
                    //     data:[
                    //         {
                    //             "name": "20fox",
                    //           },
                    //           {
                    //             "name": "Universal",
                    //           }
                    //     ]
                    // })
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
main()
    .then(function () {
    console.log("Registro feito com sucesso!");
})["catch"](function (e) {
    console.error(e);
    process.exit(1);
})["finally"](function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, prisma.$disconnect()];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
