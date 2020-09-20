import React from "react";
import { withKnobs, text, boolean, color } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import Button from './Button';

export default {
    title: 'Button',
    decorators: [withKnobs],
};

export const DefaultButton = () => {
    const hasOnClick = boolean('Has onClick', true);

    return (
        <Button
            onClick={hasOnClick ? action('clicked') : undefined}
            color={color('Custom color', '')}
            disabled={boolean('Disabled', false)}
        >
            {text('Label', 'I am a button')}
        </Button>
    );
};