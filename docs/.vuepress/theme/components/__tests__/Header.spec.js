import { shallowMount } from '@vue/test-utils'
import Header from "@/theme/components/Header"

describe('Header', () => {
  test('render successfully', () => {
    const wrapper = shallowMount(Header, {
      mocks: {
        $site: {
          themeConfig: {
            search: true
          }
        }
      }
    })
    expect(wrapper.element).toMatchSnapshot()
  })
})

