import type { Meta, StoryObj } from "@storybook/react"
import { Button } from "flowbite-react"

const meta: Meta<typeof Button> = {
  title: "Button",
  component: Button,
  args: {
    color: "blue",
    size: 'lg',
  },
  argTypes: {
    color: {
      options: ['', 'blue', 'gray', 'dark', 'light', 'success', 'failure', 'warning', 'purple',],
      control: { type: "select" },
    },
    size: {
      options: ["sm", 'md', "lg", 'xl'],
      control: { type: "select" },
    },
    pill: {
      defaultValue: false,
      control: { type: "boolean" },
    },
    gradientMonochrome: {
      options: ['', 'info', 'success', 'cyan', 'teal', 'lime', 'failure', 'pink', 'purple',],
      control: { type: "select" },
    },
    gradientDuoTone: {
      options: ['', 'purpleToBlue', 'cyanToBlue', 'greenToBlue', 'purpleToPink', 'pinkToOrange', 'tealToLime', 'redToYellow',],
      control: { type: "select" },
    },
    outline: {
      defaultValue: false,
      control: { type: "boolean" },
    },
    disabled: {
      defaultValue: false,
      control: { type: "boolean" },
    },
    className: {
      defaultValue: "",
      control: { type: "text" },
    },
    isProcessing: {
      defaultValue: false,
      control: { type: "boolean" },
    },
  },
}

type Story = StoryObj<typeof Button>

export const Default: Story = {
  render: (args) => <Button {...args}>Button</Button>,
}

export default meta
