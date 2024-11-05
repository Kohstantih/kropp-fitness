export default {
  base: process.env.NODE_ENV === 'production' ? '/kropp-fitness/' : '/',
  resolve: {
    alias: {
      fonts: '/public/fonts',
      icons: '/public/icons',
      images: '/public/images',
    },
  },
};
