
  import { defineConfig } from 'vite';
  import react from '@vitejs/plugin-react-swc';
  import path from 'path';

  export default defineConfig({
    plugins: [react()],
    resolve: {
      extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
      alias: {
        'vaul@1.1.2': 'vaul',
        'sonner@2.0.3': 'sonner',
        'recharts@2.15.2': 'recharts',
        'react-resizable-panels@2.1.7': 'react-resizable-panels',
        'react-hook-form@7.55.0': 'react-hook-form',
        'react-day-picker@8.10.1': 'react-day-picker',
        'next-themes@0.4.6': 'next-themes',
        'lucide-react@0.487.0': 'lucide-react',
        'input-otp@1.4.2': 'input-otp',
        'figma:asset/e5ea3ee51df71932950750bedc5f36be075fc84e.png': path.resolve(__dirname, './src/assets/e5ea3ee51df71932950750bedc5f36be075fc84e.png'),
        'figma:asset/e5ddc2e1f568b71da3a9f5267611fbdd44e6ddef.png': path.resolve(__dirname, './src/assets/e5ddc2e1f568b71da3a9f5267611fbdd44e6ddef.png'),
        'figma:asset/ce1e711710eac0b7440a68ba115e78614269c050.png': path.resolve(__dirname, './src/assets/ce1e711710eac0b7440a68ba115e78614269c050.png'),
        'figma:asset/c78f50749baacae6135ece7238683ff93f4df028.png': path.resolve(__dirname, './src/assets/c78f50749baacae6135ece7238683ff93f4df028.png'),
        'figma:asset/a1b61531356be3491695e077958b10f5a615c4b8.png': path.resolve(__dirname, './src/assets/a1b61531356be3491695e077958b10f5a615c4b8.png'),
        'figma:asset/9e2dd313be55c7ba9c93fedfa68209361f708168.png': path.resolve(__dirname, './src/assets/9e2dd313be55c7ba9c93fedfa68209361f708168.png'),
        'figma:asset/8bf368da1fdcfe53953f05698442e0a99577f3e5.png': path.resolve(__dirname, './src/assets/8bf368da1fdcfe53953f05698442e0a99577f3e5.png'),
        'figma:asset/8aa6508c3d3ec9554057bec1d5f34a701809157a.png': path.resolve(__dirname, './src/assets/8aa6508c3d3ec9554057bec1d5f34a701809157a.png'),
        'figma:asset/7a2752457eae20e59808d72b21ed53c3ec485d64.png': path.resolve(__dirname, './src/assets/7a2752457eae20e59808d72b21ed53c3ec485d64.png'),
        'figma:asset/7166cc1fd85092987888c984c630d6d9a1742d58.png': path.resolve(__dirname, './src/assets/7166cc1fd85092987888c984c630d6d9a1742d58.png'),
        'figma:asset/5b6a581430eb1e05becc5c2dff6f385b5acb4cf2.png': path.resolve(__dirname, './src/assets/5b6a581430eb1e05becc5c2dff6f385b5acb4cf2.png'),
        'embla-carousel-react@8.6.0': 'embla-carousel-react',
        'cmdk@1.1.1': 'cmdk',
        'class-variance-authority@0.7.1': 'class-variance-authority',
        '@radix-ui/react-tooltip@1.1.8': '@radix-ui/react-tooltip',
        '@radix-ui/react-toggle@1.1.2': '@radix-ui/react-toggle',
        '@radix-ui/react-toggle-group@1.1.2': '@radix-ui/react-toggle-group',
        '@radix-ui/react-tabs@1.1.3': '@radix-ui/react-tabs',
        '@radix-ui/react-switch@1.1.3': '@radix-ui/react-switch',
        '@radix-ui/react-slot@1.1.2': '@radix-ui/react-slot',
        '@radix-ui/react-slider@1.2.3': '@radix-ui/react-slider',
        '@radix-ui/react-separator@1.1.2': '@radix-ui/react-separator',
        '@radix-ui/react-select@2.1.6': '@radix-ui/react-select',
        '@radix-ui/react-scroll-area@1.2.3': '@radix-ui/react-scroll-area',
        '@radix-ui/react-radio-group@1.2.3': '@radix-ui/react-radio-group',
        '@radix-ui/react-progress@1.1.2': '@radix-ui/react-progress',
        '@radix-ui/react-popover@1.1.6': '@radix-ui/react-popover',
        '@radix-ui/react-navigation-menu@1.2.5': '@radix-ui/react-navigation-menu',
        '@radix-ui/react-menubar@1.1.6': '@radix-ui/react-menubar',
        '@radix-ui/react-label@2.1.2': '@radix-ui/react-label',
        '@radix-ui/react-hover-card@1.1.6': '@radix-ui/react-hover-card',
        '@radix-ui/react-dropdown-menu@2.1.6': '@radix-ui/react-dropdown-menu',
        '@radix-ui/react-dialog@1.1.6': '@radix-ui/react-dialog',
        '@radix-ui/react-context-menu@2.2.6': '@radix-ui/react-context-menu',
        '@radix-ui/react-collapsible@1.1.3': '@radix-ui/react-collapsible',
        '@radix-ui/react-checkbox@1.1.4': '@radix-ui/react-checkbox',
        '@radix-ui/react-avatar@1.1.3': '@radix-ui/react-avatar',
        '@radix-ui/react-aspect-ratio@1.1.2': '@radix-ui/react-aspect-ratio',
        '@radix-ui/react-alert-dialog@1.1.6': '@radix-ui/react-alert-dialog',
        '@radix-ui/react-accordion@1.2.3': '@radix-ui/react-accordion',
        '@': path.resolve(__dirname, './src'),
      },
    },
    build: {
      target: 'esnext',
      outDir: 'dist',
      assetsDir: 'assets',
      rollupOptions: {
        output: {
          manualChunks: undefined
        }
      }
    },
    server: {
      port: 3000,
      open: true,
    },
    base: '/nua-atelier/'
  });