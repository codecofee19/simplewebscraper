import fetch from 'node-fetch';
import { load } from 'cheerio';

const url = 'https://en.wikipedia.org/wiki/List_of_municipalities_in_Texas';

const response = await fetch(url);
const body = await response.text();

let $ = load(body);

let title = $('title');
console.log(title.text());