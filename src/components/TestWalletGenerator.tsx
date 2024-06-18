// src/components/TestWalletGenerator.tsx
import { useState } from "react";
import * as bitcoinjs from "bitcoinjs-lib";
import * as ecc from "tiny-secp256k1";
import ECPairFactory from "ecpair";

const ECPair = ECPairFactory(ecc);

const CATNET_NETWORK = bitcoinjs.networks.testnet;

const TestWalletGenerator = () => {
  const [wallet, setWallet] = useState({
    publicKey: "",
    privateKey: "",
    address: "",
  });

  const generateWallet = () => {
    const keypair = ECPair.makeRandom({ network: CATNET_NETWORK });
    const { address } = bitcoinjs.payments.p2wpkh({
      pubkey: keypair.publicKey,
      network: CATNET_NETWORK,
    });
    const publicKey = keypair.publicKey.toString("hex");
    const privateKey = keypair.privateKey ? keypair.privateKey.toString("hex") : "";

    if (address) {
      setWallet({ publicKey, privateKey, address });
    } else {
      console.error('Failed to generate address');
    }
  };

  return (
    <div>
      <button onClick={generateWallet}>
        I am lazy, just create me a test wallet.
      </button>
      {wallet.address && (
        <div>
          <p><strong>Public Key:</strong> {wallet.publicKey}</p>
          <p><strong>Private Key:</strong> {wallet.privateKey}</p>
          <p><strong>Address:</strong> {wallet.address}</p>
          <p className="warning">
            Do not use these for any non-test environment! They are generated locally on your browser but they are not secure and might incur losses if used on a mainnet environment.
          </p>
        </div>
      )}
    </div>
  );
};

export default TestWalletGenerator;