const config = {
  backend: {
    url:
      process.env.FAUCET_BACKEND_URL ||
      "http://catnet-faucet.btcwild.life:8123",
  },
};

export default config;
