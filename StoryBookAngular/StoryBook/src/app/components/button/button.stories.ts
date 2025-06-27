import { Meta, StoryObj } from '@storybook/angular';
import { ButtonComponent } from './button.component';
import { ButtonConfig } from './button.component';

export default {
  title: 'UI/Config Button',
  component: ButtonComponent,
  argTypes: {
    // Customizing controls if needed
    label: { control: 'text' },
    style: { control: 'text' },
    disabled: { control: 'boolean' },
    onClick: { action: 'clicked' },
  },
} as Meta<ButtonComponent>;

type Story = StoryObj<ButtonComponent>;

export const Primary: Story = {
  args: {
    config: {
      label: 'Primary Button',
      style: 'btn-primary',
      disabled: false,
      onClick: () => alert('Primary Button Clicked!'),
    } as ButtonConfig,
  },
};

export const Secondary: Story = {
  args: {
    config: {
      label: 'Secondary Button',
      style: 'btn-secondary',
      disabled: false,
    } as ButtonConfig,
  },
};

export const Danger: Story = {
  args: {
    config: {
      label: 'Danger Button',
      style: 'btn-danger',
      disabled: false,
      onClick: () => alert('Danger Button Clicked!'),
    } as ButtonConfig,
  },
};

export const Disabled: Story = {
  args: {
    config: {
      label: 'Disabled Button',
      style: 'btn-secondary',
      disabled: true,
    } as ButtonConfig,
  },
};