import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Article, ArticleView } from '../../model/types/article';
import { ArticleListItem } from './ArticleListItem';

export default {
    title: 'entities/Article/ArticleListItem',
    component: ArticleListItem,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticleListItem>;

const article = {
    id: '1',
    title: 'Javascript news',
    subtitle: 'Что нового в JS за 2022?',
    img: 'https://www.ankitweblogic.com/javascript/js_img/javascript.png',
    views: 1022,
    createdAt: '26.02.2024',
    user: {
        id: '1',
        username: 'admin',
        avatar: 'https://zight.com/wp-content/uploads/2020/05/Best-Programmer-Productivity-Tools.jpg',
    },
    type: [
        'IT',
    ],
    blocks: [
        {
            id: '1',
            type: 'TEXT',
            title: 'Заголовок этого блока',
            paragraphs: [
                'Программа, которую по традиции называют «Hello, world!», очень проста. Она выводит куда-либо фразу «Hello, world!», или другую подобную, средствами некоего языка',
                'JavaScript — это язык, программы на котором можно выполнять в разных средах. В нашем случае речь идёт о браузерах и о серверной платформе Node.js.',
                'Если до сих пор вы не написали ни строчки кода на JS и читаете этот текст в браузере, на настольном компьютере, это значит, что вы буквально в считанных секундах от своей первой JavaScript-программы.',
            ],
        },
        {
            id: '4',
            type: 'CODE',
            code: "<!DOCTYPE html>\n<html>\n<body>\n<p id='hello'></p>\n<script>\ndocument.getElementById('hello').innerHTML = 'Hello, world!'; \n</script>\n</body>\n</html>",
        },
        {
            id: '5',
            type: 'TEXT',
            title: 'Заголовок этого блока',
            paragraphs: [
                'Если всё сделано правильно — под этой строчкой появится текст Hello, world!. На всё остальное пока не обращайте внимания.',
            ],
        },
        {
            id: '2',
            type: 'IMAGE',
            src: 'https://www.thoughtco.com/thmb/094YF3bQBiuV_13n92GFQZWkM7k=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/JavaScript-58acbb8a3df78c345bad32c2.jpg',
            title: 'Рисунок 1 - скриншот сайта',
        },
        {
            id: '7',
            type: 'TEXT',
            title: 'Заголовок этого блока',
            paragraphs: [
                'JavaScript — это язык, программы на котором можно выполнять в разных средах. В нашем случае речь идёт о браузерах и о серверной платформе Node.js.',
                'Если до сих пор вы не написали ни строчки кода на JS и читаете этот текст в браузере, на настольном компьютере, это значит, что вы буквально в считанных секундах от своей первой JavaScript-программы.',
            ],
        },
        {
            id: '8',
            type: 'IMAGE',
            src: 'https://img.freepik.com/free-vector/laptop-with-program-code-isometric-icon-software-development-programming-applications-dark-neon_39422-971.jpg?size=626&ext=jpg&ga=GA1.1.1395880969.1709164800&semt=sph',
            title: 'Рисунок 1 - скриншот сайта',
        },
        {
            id: '9',
            type: 'TEXT',
            title: 'Заголовок этого блока',
            paragraphs: [
                'JavaScript — это язык, программы на котором можно выполнять в разных средах. В нашем случае речь идёт о браузерах и о серверной платформе Node.js.',
            ],
        },
    ],
} as Article;

const Template: ComponentStory<typeof ArticleListItem> = (args) => <ArticleListItem {...args} />;

export const Big = Template.bind({});
Big.args = {
    view: ArticleView.BIG,
    article,
};

export const Small = Template.bind({});
Small.args = {
    view: ArticleView.SMALL,
    article,
};
