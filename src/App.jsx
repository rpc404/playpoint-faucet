import React from "react";
import "./style.css";

export default function App() {
  return (
    <div className="app__container">
      <div className="landing__container">
        <div className="title">
          <img
            src="https://ik.imagekit.io/domsan/Logo_0vBSw9piY.webp?…-version=javascript-1.4.3&updatedAt=1662803005580"
            alt=""
            loading="lazy"
          />
          <h1>Playpoint Faucet</h1>
        </div>

        <div className="navLinks">
          <div>Explore Marketplaces</div>
          <div>List PPTT</div>
          <div>Whitepaper</div>
          <div>Community</div>
        </div>

        <p className="faucetDescription__container">
          The team over at <a href="">v1.playpoint.ai</a> got tired of having to
          scrounge for testnet tokens, so we created a Sepolia-Chain Faucet
          testnet network as we support the merge.
        </p>
        <img
          src="https://ethereum.org/static/a2122b00761e964ee0084399f5e2da3c/3d109/oldship.webp"
          alt=""
          className="bannerImage"
        />

        <div className="faucet__container">
        <label htmlFor="">Tweet URL <a href="">Tweet Now</a></label>
        <input
            type="text"
            placeholder="Your tweet URL..."
          />
          <p>
            Note: You'll need to have some <span>ETH</span> in your wallet to pay for
            the gas fees.
          </p>
          <label htmlFor="">Wallet Address</label>
          <input
            type="text"
            disabled
            placeholder="0x0000000000000000000000000000000000000000"
          />
          <p>
            Connect your wallet! We only support <span>MetaMask</span> wallet.
            <br />
            We'll send you <span>5,00,000 PPTT</span> tokens for test purposes.
            Note: You can only <span>claim once</span> per address.
            <br />
          </p>
          <button>Connect Wallet</button>
        </div>

        <div className="footer__container">
          2022 Playpoint. Made with ❤️ in collaboration with{" "}
          <a href="">The Boring School</a> & <a href="">CodewithSudeep</a>.
        </div>
      </div>
    </div>
  );
}
