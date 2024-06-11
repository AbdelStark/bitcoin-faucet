const config = {
  backend: {
    url:
      process.env.FAUCET_BACKEND_URL ||
      "https://catnet-faucet.btcwild.life/api",
  },
};

export default config;
