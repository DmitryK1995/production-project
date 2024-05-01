import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import avatar from '@/shared/assets/tests/storybook.png';
import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import { ProfileCard } from './ProfileCard';

export default {
    title: 'entities/ProfileCard',
    component: ProfileCard,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ProfileCard>;

const Template: ComponentStory<typeof ProfileCard> = (args) => <ProfileCard {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    data: {
        username: 'admin',
        age: 22,
        country: Country.Ukraine,
        lastname: 'main',
        first: 'sdf',
        city: 'ddf',
        currency: Currency.USD,
        avatar,
    },
};

export const WithError = Template.bind({});
WithError.args = {
    error: 'true',

};

export const Loading = Template.bind({});
Loading.args = {
    isLoading: true,
};
