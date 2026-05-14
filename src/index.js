import express from 'express';
import morgan from 'morgan';
import { engine } from 'express-handlebars';
import route from './routes/index.route.js';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
const port = 3000;

//get directory name for static
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


// static
app.use(express.static(path.join(__dirname, 'public')));
app.use('/dist', express.static(path.join(__dirname, '../dist')));

// console.log('--------------------------');
// console.log('directory path', __dirname);
// console.log('public path', (path.join(__dirname, 'public')));
// console.log('dist path', (path.join(__dirname, '../dist')));
// console.log('--------------------------');


//http logger
app.use(morgan("combined"));

//template engine
app.engine('.hbs', engine({ extname: '.hbs' }));
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'resource/views'));


route(app);

app.listen(port, () => { console.log(`http://localhost:${port}`) });
