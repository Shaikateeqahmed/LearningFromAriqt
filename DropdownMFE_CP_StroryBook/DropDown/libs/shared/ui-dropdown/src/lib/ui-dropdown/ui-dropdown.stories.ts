import type { Meta, StoryObj } from '@storybook/angular';
import { UiDropdownComponent } from './ui-dropdown.component';
import { UiDropdownButtonComponent } from '../ui-dropdown-button/ui-dropdown-button.component';
import { UiDropdownListComponent } from '../ui-dropdown-list/ui-dropdown-list.component';
import { moduleMetadata } from '@storybook/angular';

const meta: Meta<UiDropdownComponent> = {
  title: 'UI/Dropdown',
  component: UiDropdownComponent,
  decorators: [
    moduleMetadata({
      declarations: [UiDropdownButtonComponent, UiDropdownListComponent],
      imports: [],
    }),
  ],
};

export default meta;
type Story = StoryObj<UiDropdownComponent>;

export const Primary: Story = {
  args: {
    // Add any default props here if needed
  },
};