var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import express from "express";
// import {fillTemplate, updateTableTags} from "./utils/fillTemplate";
import readFile from "./utils/fileReader.js";
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield readFile("views/layout.html");
        console.log(res);
    });
}
main();
const app = express();
const port = Number(process.env.PORT) || 3030;
// app.get('/', (req: Request, res: Response) => {
//   res.send('Hello World!');
// })
// app.listen(port, () => {
//   console.log(`Listening on port ${port}`);
// })
