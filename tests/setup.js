import { config } from '@vue/test-utils';


// Configure Vue Test Utils
config.global.plugins = [];

// Configure Element Plus component stubs
config.global.stubs = {
  'el-form': {
    template: '<form><slot /></form>'
  },
  'el-form-item': {
    template: '<div><slot /></div>'
  },
  'el-input': {
    template: `<div>
      <input
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
        :data-test="$attrs['data-test']" />
      <div v-if="$slots.append" class="append-container">
        <slot name="append"></slot>
      </div>
    </div>`,
    props: ['modelValue'],
    inheritAttrs: true
  },
  'el-button': {
    template: '<button type="button" @click="$emit(\'click\')"><slot /></button>'
  },
  'el-card': {
    template: '<div><slot /></div>'
  }
};

// Mock window.location for mock parameter
Object.defineProperty(window, 'location', {
  value: {
    search: '?mock=1'
  },
  writable: true
});

// Mock axios
jest.mock('axios', () => ({
  create: () => ({
    post: jest.fn(),
    get: jest.fn(),
    interceptors: {
      response: {
        use: jest.fn()
      }
    }
  }),
  post: jest.fn(),
  get: jest.fn()
}));

// Mock vue-router
jest.mock('vue-router', () => ({
  useRouter: () => ({
    push: jest.fn(),
    replace: jest.fn()
  }),
  useRoute: () => ({
    query: { mock: '1' }
  })
}));

// Mock element-plus
jest.mock('element-plus', () => ({
  ElMessage: {
    success: jest.fn(),
    error: jest.fn()
  }
}));
