import type { Meta, StoryObj } from '@storybook/angular';
 
import { UiToastrComponent } from 'ui-toastr';
 
const meta: Meta<typeof UiToastrComponent> = {
  component: UiToastrComponent,
};
 
export default meta;
type Story = StoryObj<typeof UiToastrComponent>;
 
export const Primary: Story = {
  args: {
    
  },
};