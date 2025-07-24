/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        'xs': '1.0625rem',    // 17px (12px + 5px)
        'sm': '1.1875rem',    // 19px (14px + 5px)
        'base': '1.3125rem',  // 21px (16px + 5px)
        'lg': '1.4375rem',    // 23px (18px + 5px)
        'xl': '1.5625rem',    // 25px (20px + 5px)
        '2xl': '1.8125rem',   // 29px (24px + 5px)
        '3xl': '2.1875rem',   // 35px (30px + 5px)
        '4xl': '2.5625rem',   // 41px (36px + 5px)
        '5xl': '3.3125rem',   // 53px (48px + 5px)
        '6xl': '4.0625rem',   // 65px (60px + 5px)
        '7xl': '4.8125rem',   // 77px (72px + 5px)
        '8xl': '6.3125rem',   // 101px (96px + 5px)
        '9xl': '8.3125rem',   // 133px (128px + 5px)
      },
      colors: {
        // Updated softer, muted color palette
        champagneBeige: "#f8f1ea", // Softer, less yellow champagne beige
        blushPink: "#f0d9d4", // Softer, more muted blush pink
        softGold: "#d4bc9b", // Softer, more muted gold
        pureWhite: "#ffffff", // Pure White
        deepCharcoal: "#1c1c1c", // Deep Charcoal Black
        creamyNeutral: "#f9f5f2", // New creamy neutral color
        rosyTaupe: "#c7a99a", // New rosy taupe color
        softSage: "#d4dbd7", // New soft sage accent

        // Legacy colors maintained for backward compatibility
        gold: "#d4bc9b", // Updated to Soft Gold
        ivory: "#f8f1ea", // Updated to Champagne Beige
        charcoal: "#1c1c1c", // Updated to Deep Charcoal
        taupe: "#f0d9d4", // Updated to Blush Pink
        white: "#ffffff", // Updated to Pure White
        blush: "#f0d9d4", // Updated to Blush Pink

        background: "#f9f5f2", // Main background (creamy neutral)
        primaryText: "#1c1c1c", // Primary text color (deep charcoal)
        secondaryText: "#d4bc9b", // Secondary text color (soft gold)
        accentGold: "#d4bc9b", // Updated to Soft Gold
        whatsApp: "#25D366" // Keeping WhatsApp color for functionality
      },
      fontFamily: {
        heading: ['"Cormorant Garamond"', '"Playfair Display"', 'serif'],
        body: ['"Inter"', '"Lato"', '"Poppins"', 'sans-serif'],
        accent: ['"Playfair Display"', 'serif'],
        script: ['"Great Vibes"', 'cursive'],
        display: ['"Cormorant Garamond"', 'serif'],
        sans: ['"Inter"', '"Lato"', 'sans-serif'],
      },
      letterSpacing: {
        wider: '0.5px',
        elegant: '1px',
      },
      lineHeight: {
        relaxed: '1.75',
        spacious: '2',
      },
      borderRadius: {
        'aesthetic': '20px',
      },
      boxShadow: {
        'soft': '0 4px 12px rgba(0,0,0,0.08)',
        'glow': '0 0 15px rgba(198, 165, 128, 0.3)',
      },
      backgroundImage: {
        'beige-to-blush': 'linear-gradient(to right, #f8f1ea, #f0d9d4)',
        'blush-to-beige': 'linear-gradient(to right, #f0d9d4, #f8f1ea)',
        'cream-to-rose': 'linear-gradient(to right, #f9f5f2, #f0d9d4)',
        'rose-to-cream': 'linear-gradient(to right, #f0d9d4, #f9f5f2)',
        'gold-to-rose': 'linear-gradient(to right, #d4bc9b, #c7a99a)',
        'soft-texture': 'url("/textures/linen-texture.png")',
        'grain-overlay': 'url("/textures/grain-texture.png")',
        'light-grain': 'url("/textures/light-grain.png")',
      },
      backdropBlur: {
        'aesthetic': '10px',
      },
      animation: {
        fadeIn: 'fadeIn 0.5s ease-in-out',
        fadeInUp: 'fadeInUp 0.7s ease-out',
        fadeInLeft: 'fadeInLeft 0.7s ease-out',
        fadeInRight: 'fadeInRight 0.7s ease-out',
        fadeInSlow: 'fadeIn 1.2s ease-in-out',
        slideIn: 'slideIn 0.6s ease-out',
        float: 'float 3s ease-in-out infinite',
        shimmer: 'shimmer 2s linear infinite',
        pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        glow: 'glow 2s ease-in-out infinite alternate',
        goldGlow: 'goldGlow 2s ease-in-out infinite alternate',
        shine: 'shine 1.5s ease-in-out infinite',
        elegant: 'elegant 0.8s ease-out',
        softBounce: 'softBounce 2s infinite',
        underlineHover: 'underlineHover 0.3s ease-in-out',
        sparkle: 'sparkle 4s linear infinite',
        bokeh: 'bokeh 8s ease-in-out infinite',
        softZoom: 'softZoom 1s ease-out',
        gentleFade: 'gentleFade 1.5s ease-in-out',
        subtleSlideUp: 'subtleSlideUp 0.9s ease-out',
        headerFade: 'headerFade 1s ease-out',
        textReveal: 'textReveal 1.2s ease-out',
        borderFade: 'borderFade 1s ease-in-out',
        scaleIn: 'scaleIn 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        fadeInRight: {
          '0%': { opacity: '0', transform: 'translateX(30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideIn: {
          '0%': { transform: 'translateX(-20px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        pulse: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.7' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px rgba(212, 175, 55, 0.5)' },
          '100%': { boxShadow: '0 0 20px rgba(212, 175, 55, 0.8)' },
        },
        goldGlow: {
          '0%': { boxShadow: '0 0 5px rgba(212, 188, 155, 0.3)' },
          '100%': { boxShadow: '0 0 15px rgba(212, 188, 155, 0.6)' },
        },
        shine: {
          '0%': { backgroundPosition: '-100% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        elegant: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        softBounce: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' },
        },
        underlineHover: {
          '0%': { width: '0%' },
          '100%': { width: '100%' },
        },
        sparkle: {
          '0%': { transform: 'scale(0) rotate(0deg)', opacity: '0' },
          '50%': { transform: 'scale(1) rotate(180deg)', opacity: '0.8' },
          '100%': { transform: 'scale(0) rotate(360deg)', opacity: '0' },
        },
        bokeh: {
          '0%': { transform: 'translate(0, 0)', opacity: '0.3' },
          '25%': { transform: 'translate(10px, -10px)', opacity: '0.7' },
          '50%': { transform: 'translate(20px, 0)', opacity: '0.3' },
          '75%': { transform: 'translate(10px, 10px)', opacity: '0.7' },
          '100%': { transform: 'translate(0, 0)', opacity: '0.3' },
        },
        softZoom: {
          '0%': { opacity: '0', transform: 'scale(0.98)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        gentleFade: {
          '0%': { opacity: '0' },
          '30%': { opacity: '0.3' },
          '100%': { opacity: '1' },
        },
        subtleSlideUp: {
          '0%': { opacity: '0', transform: 'translateY(15px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        headerFade: {
          '0%': { opacity: '0', transform: 'translateY(-8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        textReveal: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '20%': { opacity: '0.2' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        borderFade: {
          '0%': { borderColor: 'transparent' },
          '100%': { borderColor: 'currentColor' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.9)', opacity: '0' },
          '80%': { transform: 'scale(1.01)' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
