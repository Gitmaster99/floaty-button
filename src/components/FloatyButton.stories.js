import FloatyButton from './FloatyButton.vue';

export default {
  title: 'FloatyButton',
  component: FloatyButton,
  argTypes: {
    color: { control: 'color' },
    position: { control: { type: 'String', options: ['bl', 'tl', 'br', 'bl'] } },
    left: { control: {type: 'Boolean', options: [true, false] } },
    right: { control: {type: 'Boolean', options: [true, false] } },
    top: { control: {type: 'Boolean', options: [true, false] } },
    bottom: { control: {type: 'Boolean', options: [true, false] } },

  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { FloatyButton },
  template: '<v-btn @onClick="click" v-bind="$props" />',
});

export const floatyButton = Template.bind({});
floatyButton.args = {
  primary: true,
  label: 'Button1',
};

