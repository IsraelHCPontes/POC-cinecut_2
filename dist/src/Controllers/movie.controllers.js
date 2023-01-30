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
import prisma from '../db/db.js';
import { MovieSchema } from '../Schemas/movieSchema.js';
export function insertMovie(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var newMovie, error, erros, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    newMovie = req.body;
                    error = MovieSchema.validate(newMovie, { abortEarly: false }).error;
                    if (error) {
                        erros = error.details.map(function (detail) { return detail.message; });
                        return [2 /*return*/, res.status(400).send({ mesage: erros })];
                    }
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, prisma.movies.create({
                            data: newMovie
                        })];
                case 2:
                    _a.sent();
                    res.sendStatus(201);
                    return [3 /*break*/, 4];
                case 3:
                    error_1 = _a.sent();
                    console.log(error_1);
                    res.sendStatus(500);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
export function listaMovies(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var query, movies, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    query = req.query;
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, prisma.movies.findMany()];
                case 2:
                    movies = _a.sent();
                    res.send(movies.map(function (movie) { return movie; }));
                    return [3 /*break*/, 4];
                case 3:
                    error_2 = _a.sent();
                    console.log(error_2);
                    res.sendStatus(500);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
export function atualizaMovie(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var id, movie, moviesAlready, updateMovie, error_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    id = Number(req.params.id);
                    movie = req.body;
                    return [4 /*yield*/, prisma.movies.findUnique({
                            where: {
                                id: id
                            }
                        })];
                case 1:
                    moviesAlready = _a.sent();
                    if (!moviesAlready) {
                        return [2 /*return*/, res.status(401).send({ message: 'usuario n existe' })];
                    }
                    _a.label = 2;
                case 2:
                    _a.trys.push([2, 4, , 5]);
                    return [4 /*yield*/, prisma.movies.update({
                            where: {
                                id: id
                            },
                            data: {
                                name: movie.name,
                                image: movie.image,
                                directorId: movie.directorId,
                                studioId: movie.studioId,
                                genre: movie.genre,
                                score: movie.score
                            }
                        })];
                case 3:
                    updateMovie = _a.sent();
                    res.sendStatus(201);
                    return [3 /*break*/, 5];
                case 4:
                    error_3 = _a.sent();
                    console.log(error_3);
                    res.sendStatus(500);
                    return [3 /*break*/, 5];
                case 5: return [2 /*return*/];
            }
        });
    });
}
export function deletaMovie(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var id, moviesAlready, deleteUser, error_4;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    id = Number(req.params.id);
                    return [4 /*yield*/, prisma.movies.findUnique({
                            where: {
                                id: id
                            }
                        })];
                case 1:
                    moviesAlready = _a.sent();
                    if (!moviesAlready) {
                        return [2 /*return*/, res.status(401).send({ message: 'usuario n existe' })];
                    }
                    _a.label = 2;
                case 2:
                    _a.trys.push([2, 4, , 5]);
                    return [4 /*yield*/, prisma.movies["delete"]({
                            where: {
                                id: id
                            }
                        })];
                case 3:
                    deleteUser = _a.sent();
                    res.sendStatus(201);
                    return [3 /*break*/, 5];
                case 4:
                    error_4 = _a.sent();
                    console.log(error_4);
                    res.sendStatus(500);
                    return [3 /*break*/, 5];
                case 5: return [2 /*return*/];
            }
        });
    });
}
