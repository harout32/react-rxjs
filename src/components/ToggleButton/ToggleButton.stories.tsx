import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import {
  ToggleButton,
  ToggleButtonProps
} from './ToggleButton';

export default {
  title: 'Example/ToggleButton',
  component: ToggleButton,
} as Meta;

const Template: Story<ToggleButtonProps> = (args) => <ToggleButton {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  onChange: () => { },
  checked: true,
};

