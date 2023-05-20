/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
          colors: {
            primaryColor:'#141A26',
            searchColor:'#080801',
            textColor: '#efefef',
            bgColor: 'rgba(128, 128, 128, 0.900)',
            Color: 'rgb(92,186,212)',
          },
          // fontFamily: {
          // redhat: ["Red Hat Display', sans-serif"],
          // },
  
          fontSize: {
  
          xxs:["clamp(0.6rem, 10vw, .76rem)"],

          xs:["clamp(0.8rem, 10vw, .9rem)"],

          sm:["clamp(1rem, 10vw, 1.1rem)"],
  
          base:["clamp(1.45rem, 10vw, 1.6rem)" ],
  
          lg:["clamp(1.4rem, 10vw, 2.1rem)" ],
  
          xl:["clamp(1.6rem, 10vw, 2.8rem)"],
    
          "2xl":["clamp(2rem, 10vw, 3rem)"],
  
          "3xl":["clamp(3rem, 10vw, 4rem)"],
  
          "4xl":["clamp(4rem, 10vw, 5rem)"],

          "5xl":["clamp(5rem, 10vw, 6rem)"],
          
      },

      gridTemplateColumns:{
        fluid: ["repeat(auto-fit, minmax(13rem, 1fr))"],

        fluid2: ["repeat(auto-fit, minmax(12rem, 1fr))"]

      },

      scale: {
        '102': '1.02',
      },

      fontWeight:{
        font_medium:'500',
        font_bold:'700',
        font_black: '900',
      },
      width:{

        'w94': "94%",
        'w95': "95%",
        'w90': "90%",
        'vh90': "90vh",
        'w85': "85%",
        'w80': "80%",
        'w75': "75%",
        'w10': "10%",
        'w6': "6%",
        'w26': "25.8rem",
        'w27': "27rem",


      },
      
      height:{

       'h90': "90vh",
       'h80': "80vh",
       'h85': "85vh",
       'h40': "40vh",
       'h10': "10vh",
       'h26': "26rem",
       'h30': "30rem",
       'h35': "35rem",


      },

      screens: {

          xs: "360px",
          ss: "500px",
          sss: "600px",
          sm: "768px",
          md: "1024px",
          lg: "1200px",
          xl: "1400px",

      },

      },

  plugins: [],
  },
};