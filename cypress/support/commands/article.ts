/* eslint-disable max-len */

import { Article } from '../../../src/entities/Article';

const defaultArticle = {
    title: 'TESTING ARTICLE',
    subtitle: 'Экономика',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeeWViZO1263mKT_rWPWRm_buBIDYirKXM5A&usqp=CAU',
    views: 1022,
    createdAt: '26.02.2022',
    userId: '1',
    type: ['ECONOMICS'],
    blocks: [],
};

export const createArticle = (article?: Article) =>
    cy
        .request({
            method: 'POST',
            url: 'http://localhost:8000/articles',
            headers: { Authorization: 'asdas' },
            body: article ?? defaultArticle,
        })
        .then((resp) => resp.body);

export const removeArticle = (articleId: string) =>
    cy.request({
        method: 'DELETE',
        url: `http://localhost:8000/articles/${articleId}`,
        headers: { Authorization: 'asdas' },
    });

declare global {
    namespace Cypress {
        interface Chainable {
            createArticle(article?: Article): Chainable<Article>;
            removeArticle(articleId: string): Chainable<void>;
        }
    }
}
