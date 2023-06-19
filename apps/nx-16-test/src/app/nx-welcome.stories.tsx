import type { Meta } from '@storybook/react';
import { NxWelcome } from './nx-welcome';
import { util } from '@nx-16-test/util'

const Story: Meta<typeof NxWelcome> = {
  component: NxWelcome,
  title: 'NxWelcome',
};
export default Story;

export const Primary = {
  args: {
    title: util(),
  },
};
