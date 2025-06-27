import { moduleMetadata, Meta, StoryObj } from '@storybook/angular';
import { ConfigButtonComponent } from './config-button.component';
import { CommonModule } from '@angular/common';

export default {
  title: 'UI/Config Button',
  component: ConfigButtonComponent,
  decorators: [
    moduleMetadata({
      declarations: [ConfigButtonComponent],
      imports: [CommonModule],
    }),
  ],
  argTypes: {
    buttonType: {
      control: { type: 'radio' },
      options: ['primary', 'secondary', 'danger'],
    },
    disabled: { control: 'boolean' },
  },
} as Meta<ConfigButtonComponent>;

type Story = StoryObj<ConfigButtonComponent>;

export const Primary: Story = {
  args: {
    buttonType: 'primary',
    disabled: false,
  },
};

export const Secondary: Story = {
  args: {
    buttonType: 'secondary',
    disabled: false,
  },
};

export const Danger: Story = {
  args: {
    buttonType: 'danger',
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    buttonType: 'primary',
    disabled: true,
  },
};