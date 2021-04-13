import type { FunctionComponent } from 'react';
import React from 'react';
import { Icon } from './Icon';
import { Tooltip } from './Tooltip';

/**
 * renders a square button with an icon
 */
export const ActionIconButton: FunctionComponent<{
    action?: () => void;
    icon?: string;
    tooltip?: string;
    disabled?: boolean;
}> = ({ action, icon, tooltip, disabled }) => <button
    className='ui-button ui-action-icon-button'
    type='button'
    onClick={action}
    disabled={disabled}>
    {tooltip && <Tooltip text={tooltip} />}
    {icon && <Icon name={icon} />}
</button>;
