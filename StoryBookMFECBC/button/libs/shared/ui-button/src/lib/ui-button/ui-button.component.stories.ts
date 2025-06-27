// import type { Meta, StoryObj } from '@storybook/angular';
// import { UiButtonComponent } from './ui-button.component';
// import { within } from '@storybook/testing-library';
// import { expect } from '@storybook/jest';
// import { ButtonConfig } from '../button.config';

// const meta: Meta<UiButtonComponent> = {
//   component: UiButtonComponent,
//   title: 'UiButtonComponent',
//   argTypes : {
//     config : {
//       label : {control : 'text'},
//       disabled :{control : 'boolean'} ,
//     }
//   }
// };

// export default meta;

// type Story = StoryObj<UiButtonComponent>;

// export const Primary: Story = {
//   args: {
//     config: {
//       label: 'Primary Button',
//       style: 'btn-primary',
//       disabled: false,
//       onClick: () => alert('Primary Button Clicked!'),
//     } as ButtonConfig,
//   },
// };

// export const Heading: Story = {
//   args: {
//     config: {
//       label: 'Heading Button',
//       style: 'btn-heading',
//       disabled: false,
//       onClick: () => alert('Heading Button Clicked!'),
//     } as ButtonConfig,
//   },
//   play: async ({ canvasElement }) => {
//     const canvas = within(canvasElement);
//     expect(canvas.getByText(/heading button/i)).toBeTruthy();
//   },
// };



import type { Meta, StoryObj } from '@storybook/angular';
import { UiButtonComponent } from './ui-button.component';
import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<UiButtonComponent> = {
  component: UiButtonComponent,
  title: 'UiButtonComponent',
};
export default meta;
type Story = StoryObj<UiButtonComponent>;

export const Primary: Story = {
  args: {
    text: 'Click me!',
    padding: 10,
    disabled: true,
  },
};

export const Heading: Story = {
  args: {
    text: 'Click me!',
    padding: 10,
    disabled: true,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/my-button works!/gi)).toBeTruthy();
  },
};