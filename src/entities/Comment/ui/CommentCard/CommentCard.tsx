import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';

import {
    Text,
} from '@/shared/ui/Text';
import { Avatar } from '@/shared/ui/Avatar';
import { Skeleton } from '@/shared/ui/Skeleton';
import { AppLink } from '@/shared/ui/AppLink';
import { getRouteProfile } from '@/shared/const/router';
import { VStack } from '@/shared/ui/Stack';
import { Comment } from '../../index';
import cls from './CommentCard.module.scss';

interface CommentCardProps {
    className?: string;
    comment?: Comment;
    isLoading?: boolean;
}

export const CommentCard = memo(({
    className,
    comment,
    isLoading,
}:CommentCardProps) => {
    const { t } = useTranslation();

    if (isLoading) {
        return (
            <VStack gap="8" max className={classNames(cls.CommentCard, {}, [className, cls.loading])}>
                <div className={cls.header}>
                    <Skeleton width={30} height={30} border="50%" />
                    <Skeleton height={16} width={100} className={cls.username} />
                </div>
                <Skeleton className={cls.text} width="100%" height={50} />
            </VStack>
        );
    }

    if (!comment) return null;

    return (
        <VStack gap="8" max className={classNames(cls.CommentCard, {}, [className])}>
            <AppLink to={getRouteProfile(comment.user.id)} className={cls.header}>
                {comment.user.avatar ? <Avatar size={30} src={comment.user.avatar} /> : null}
                <Text className={cls.username} title={comment.user.username} />
            </AppLink>
            <Text className={cls.text} text={comment.text} />
        </VStack>
    );
});
