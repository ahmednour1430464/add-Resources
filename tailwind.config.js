module.exports = {
    purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            boxShadow: {
                'focus': '0 2px 8px rgba(0,0,0,0.26);'
            },
            spacing: {
                '40': '40rem',
            },
            inset: {
                '10vh': '10vh',
                '20vh': '20vh',
                '30vh': '30vh',
                '40vh': '40vh',
                '50vh': '50vh',
                '60vh': '60vh',
                '70vh': '70vh',
                '80vh': '80vh',
                '90vh': '90vh',
                '10%': '10%',
                '15%': '15%',
                '20%': '20%',
                '25%': '25%',
                '30%': '30%',
                '40%': '40%',
                '50%': '50%',
                '60%': '60%',
                '70%': '70%',
                '80%': '80%',
                '90%': '90%',
                'calc': 'calc(50% - 20rem)'
            }
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}