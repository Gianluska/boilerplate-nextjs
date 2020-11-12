import { Meta, Story } from '@storybook/react/types-6-0'
import Main from '.'

export default {
  title: 'Main',
  component: Main,
  args: {
    title: 'React do Gian ;D',
    description: 'React é muito delicinha',
    background: '#06092b'
  },
  argTypes: { background: { control: 'color' } }
} as Meta

export const Basic: Story = (args) => <Main {...args} />

export const Default: Story = (args) => <Main {...args} />

Default.args = {
  title: 'Title do Default',
  description: 'Description do Default',
  background: '#2F4633'
}
