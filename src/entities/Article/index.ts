import { getArticleDetailsData } from './model/selectors/articleDetails';
import {
    Article,
} from './model/types/article';
import { ArticleSortField, ArticleType, ArticleView } from './model/consts/articleConsts';
import { ArticleDetailsSchema } from './model/types/articleDetailsSchema';
import { ArticleDetails } from './ui/ArticleDetails/ArticleDetails';
import { ArticleSortSelector } from './ui/ArticleSortSelector/ArticleSortSelector';
import { ArticleTypeTabs } from './ui/ArticleTypeTabs/ArticleTypeTabs';
import { ArticleViewSelector } from './ui/ArticleViewSelector/ArticleViewSelector';

export {
    ArticleDetails,
    ArticleViewSelector,

};

export {
    ArticleSortField,
    ArticleType,
};

export type { Article, ArticleDetailsSchema };

export { ArticleView };
export { ArticleSortSelector };
export { ArticleTypeTabs };
export { getArticleDetailsData };
