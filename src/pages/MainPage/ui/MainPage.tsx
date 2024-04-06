import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ListBox } from 'shared/ui/ListBox/ListBox';
import { HStack } from 'shared/ui/Stack';
import { Page } from 'widgets/Page/Page';

const MainPage = () => {
    const { t } = useTranslation();

    const [value, setValue] = useState('');

    const onChange = (val: string) => {
        setValue(val);
    };

    return (
        <Page>
            {t('Главная страница')}
            <div>sdfsdf</div>
            <HStack>
                <div>fsdfsd</div>
                <ListBox
                    defaultValue="Выберите значение"
                    onChange={(value: string) => {}}
                    value={undefined}
                    items={
                        [
                            { value: '1', content: '123' },
                            { value: '12', content: 'asda', disabled: true },
                            { value: '13', content: '1asdasd23' },
                        ]
                    }
                />
            </HStack>
            <div>dfhhdfgh</div>
            <div>dfhhdfgh</div>
            <div>dfhhdfgh</div>
        </Page>
    );
};

export default MainPage;
