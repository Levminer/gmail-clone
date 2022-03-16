module.exports = {
	content: ["./*.html"],
	theme: {
		extend: {
			inset: {
				"-30": "-1.875rem",
			},

			colors: {
				gray: {
					500: "#282828",
					600: "#1E1E1E",
					700: "#414141",
					800: "#474747",
					900: "#111111",
				},
				popup: {
					red: "#CC001B",
					green: "#28A443",
					blue: "#16A3DF",
					yellow: "#F5AB00",
					magenta: "#9B5094",
				},
				html: {
					gray: "#808080",
				},
			},

			borderRadius: {
				"2xl": "30px",
			},

			screens: {
				lg: "1400px",
				md: "200px",
			},

			stroke: (theme) => ({
				black: theme("colors.gray.900"),
			}),
		},
	},
	plugins: [],
}
