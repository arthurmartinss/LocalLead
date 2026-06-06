import { initSolucao } from './solucao.js';
import { initMenu } from './menu.js';
import { initFaq } from './faq.js';

initMenu();
initFaq();
initSolucao();

import { initContato } from './contato.js';

const form = document.querySelector('.contact-form');
if (form) initContato();
