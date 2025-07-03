import '@testing-library/jest-dom'

// Mock do Next.js router
// jest.mock('next/navigation', () => ({
//   useRouter() {
//     return {
//       push: jest.fn(),
//       replace: jest.fn(),
//       prefetch: jest.fn(),
//       back: jest.fn(),
//       forward: jest.fn(),
//       refresh: jest.fn(),
//     }
//   },
//   useSearchParams() {
//     return new URLSearchParams()
//   },
//   usePathname() {
//     return ''
//   },
// }))

// // Mock do Material UI theme
// jest.mock('@mui/material/styles', () => ({
//   ...jest.requireActual('@mui/material/styles'),
//   useTheme: () => ({
//     palette: {
//       mode: 'light',
//       primary: { main: '#1976d2' },
//       secondary: { main: '#dc004e' },
//       error: { main: '#f44336' },
//       warning: { main: '#ff9800' },
//       info: { main: '#2196f3' },
//       success: { main: '#4caf50' },
//     },
//     spacing: (factor) => `${8 * factor}px`,
//     breakpoints: {
//       up: jest.fn(),
//       down: jest.fn(),
//       between: jest.fn(),
//       only: jest.fn(),
//     },
//   }),
// }))

// // Configuração global para testes
// global.ResizeObserver = jest.fn().mockImplementation(() => ({
//   observe: jest.fn(),
//   unobserve: jest.fn(),
//   disconnect: jest.fn(),
// }))

// // Mock do window.matchMedia
// Object.defineProperty(window, 'matchMedia', {
//   writable: true,
//   value: jest.fn().mockImplementation(query => ({
//     matches: false,
//     media: query,
//     onchange: null,
//     addListener: jest.fn(), // deprecated
//     removeListener: jest.fn(), // deprecated
//     addEventListener: jest.fn(),
//     removeEventListener: jest.fn(),
//     dispatchEvent: jest.fn(),
//   })),
// }) 