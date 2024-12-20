// Mock Element Plus components and icons
const ElementPlus = {
  install: () => {}
}

const IconComponents = {
  UploadFilled: {
    render: () => null
  }
}

// Mock Vue Router
const VueRouter = {
  useRouter: () => ({
    push: jest.fn(),
    currentRoute: {
      value: {
        query: {},
        fullPath: '/'
      }
    }
  })
}

// Mock Vuex Store
const Vuex = {
  useStore: () => ({
    state: {
      auth: {
        isAuthenticated: true,
        token: 'test-token'
      }
    }
  })
}

global.jest = jest
global.ElementPlus = ElementPlus
global.IconComponents = IconComponents
global.VueRouter = VueRouter
global.Vuex = Vuex
