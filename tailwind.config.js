module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      backgroundImage: {
        "green-gradient":
          "linear-gradient(to bottom, #76BB64 0%, #76BB64 15%, #00A778 100%)",
        "admin-gradient":
          "linear-gradient(to bottom, #DB8F33 75%, #B86B16 100%)",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light", "dark", "garden"],
  },
};
