import type { FC } from 'react';
import React from 'react';
import { Icon } from './Icon';
import { Tooltip } from './Tooltip';
import { classify } from '../utility';

/**
 * renders a square button with an icon
 */
export const ActionIconButton: FC<{
    action?: () => void;
    icon?: string;
    tooltip?: string;
    disabled?: boolean;
    display?: boolean;
}> = ({ action, icon, tooltip, disabled, display }) => <button
    className={
        classify(
            'ui-button ui-action-icon-button',
            { 'ui-is-hidden': Boolean(display) }
        )
    }
    type='button'
    onClick={action}
    disabled={disabled}>
    {tooltip && <Tooltip text={tooltip} />}
    {icon && <Icon name={icon} />}
</button>;
