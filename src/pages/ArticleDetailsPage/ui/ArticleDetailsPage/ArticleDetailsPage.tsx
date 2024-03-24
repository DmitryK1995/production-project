import { useNavigate, useParams } from 'react-router-dom';
import { memo, useCallback } from 'react';

import { classNames } from 'shared/lib/classNames/classNames';

import { useTranslation } from 'react-i18next';
import { ArticleDetails } from 'entities/Article';
import {
    Text, TextSize,
} from 'shared/ui/Text/Text';
import { CommentList } from 'entities/Comment';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useDispatch, useSelector } from 'react-redux';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { AddCommentForm } from 'features/addCommentForm';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { Page } from 'widgets/Page/Page';
import { ArticleList } from 'entities/Article/ui/ArticleList/ArticleList';
import { getArticleRecommendations }
    from '../../../ArticleDetailsPage/model/slices/articleDetailsPageRecommendationsSlice';
import { getArticleRecommendationsIsLoading } from '../../../ArticleDetailsPage/model/selectors/recommendations';
import { addCommentForArticle }
    from '../../../ArticleDetailsPage/model/services/addCommentForArticle/addCommentForArticle';
import { getArticleCommentsIsLoading } from '../../../ArticleDetailsPage/model/selectors/comments';
import { articleDetailsCommentsReducer, getArticleComments }
    from '../../../ArticleDetailsPage/model/slices/ArticleDetailsCommentsSlice';
import { fetchArticleRecommendations }
    from '../../../ArticleDetailsPage/model/services/fetchArticleRecommendations/fetchArticleRecommendations';
import { articleDetailsPageReducer } from '../../../ArticleDetailsPage/model/slices';
import { fetchCommentsByArticleId }
    from '../../../ArticleDetailsPage/model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import cls from './ArticleDetailsPage.module.scss';
import { ArticleDetailsPageHeader } from '../ArticleDetailsPageHeader/ArticleDetailsPageHeader';

interface ArticleDetailsPageProps {
    className?: string;
}

const reducers: ReducersList = {
    articleDetailsPage: articleDetailsPageReducer,
};

const ArticleDetailsPage = ({ className }:ArticleDetailsPageProps) => {
    const { t } = useTranslation('article-details');

    const { id } = useParams<{id: string}>();

    const dispatch = useDispatch();

    const comments = useSelector(getArticleComments.selectAll);
    const recommendations = useSelector(getArticleRecommendations.selectAll);
    const recommendationsIsLoading = useSelector(getArticleRecommendationsIsLoading);
    const commentsIsLoading = useSelector(getArticleCommentsIsLoading);

    const onSendComment = useCallback((text: string) => {
        dispatch(addCommentForArticle(text));
    }, [dispatch]);

    useInitialEffect(() => {
        dispatch(fetchCommentsByArticleId(id));
        dispatch(fetchArticleRecommendations());
    });

    if (!id) {
        return (
            <Page className={classNames(cls.ArticleDetailsPage, {}, [className])}>
                {t('Статья не найдена')}
            </Page>
        );
    }

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <Page className={classNames(cls.ArticleDetailsPage, {}, [className])}>
                <ArticleDetailsPageHeader />
                <ArticleDetails id={id} />
                <Text size={TextSize.L} className={cls.commentTitle} title={t('Рекомендуем')} />
                <ArticleList
                    articles={recommendations}
                    isLoading={recommendationsIsLoading}
                    className={cls.recommendations}
                    target="_black"
                />
                <Text size={TextSize.L} className={cls.commentTitle} title={t('Комментарии')} />
                <AddCommentForm onSendComment={onSendComment} />
                <CommentList
                    isLoading={commentsIsLoading}
                    comments={comments}
                />
            </Page>
        </DynamicModuleLoader>
    );
};

export default memo(ArticleDetailsPage);
