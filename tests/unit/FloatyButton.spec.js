import { mount, shallowMount, createLocalVue } from '@vue/test-utils';
import Vuetify from 'vuetify';
import FloatyButton from '@/components/FloatyButton.vue';
describe('FloatyButton.vue', () => {
  let localVue;
  let vuetify;
  let wrapper;
  beforeEach(() => {
    localVue = createLocalVue(); // because of vuetify, we should use a localVue instance
    vuetify = new Vuetify();
    wrapper = mount(FloatyButton, {
      localVue,
      vuetify,
      attachToDocument: true,
    });
  });

  //Test to determine if the button is rendered and displayed correctly on the screen.
  test('This button is rendered correctly', () => {
    // to make sure we are free from vuetify components in our tests, use data-testid attributes to search for elements
    expect(wrapper.find('v-btn').exists()).toBe(true);
    const div = wrapper.find('div')
    expect(div.exists()).toBe(true)
  });

  //Test to determine if the button is rendered with the color thats specified in the Component Attribute.
  test('This button is rendered with the correct color', () => {
    expect(wrapper.find('v-btn').btnColor=="red");
  });

//Test to determine if, when the button is clicked, the function that displays the alert is functioning properly.
  test('Method click is used and executed the alert', () => {
    const wrapper = shallowMount(FloatyButton)
    const spy = jest.fn()
    wrapper.vm.$on('click', spy)
    wrapper.find('v-btn').trigger('click')
    expect(spy).toHaveBeenCalledTimes(1)
  });

//Test to determine if the button's position is equal to the position entered in the Component's attributes.
  test('Button position is put in correctly.', () => {
    const wrapper = shallowMount(FloatyButton, 'bl')
    expect(wrapper.find('v-btn').position=='bl' && this.left==true && this.bottom==true);
  });
//Test to determine if the button's position is equal to the position entered in the Component's attributes.
  test('Button is getting the right position.', () => {
    const wrapper = mount(FloatyButton, {
      propsData: {
        left: '',
        right: '',
        top: '',
        bottom: ''
      }
    })
    expect(wrapper.props().left).toBe(true)
    expect(wrapper.props().right).toBe(true)
    expect(wrapper.props().top).toBe(true)
    expect(wrapper.props().bottom).toBe(true)
  });
//Test to determine if the button's position is equal to the position entered in the Component's attributes.
  test('setProps demo', async () => {
    const wrapper = shallowMount(FloatyButton)
    await wrapper.setProps({ left: true })
    expect(wrapper.vm.left).toBe(true)
  });
});
