import React from "react";
import { useNFTBalances } from "react-moralis";
import { useVerifyMetadata } from "../utils/useVerifyMetadata";

const NFTBlance = () => {
  const { data: NFTBalances } = useNFTBalances();
  const { verifyMetadata } = useVerifyMetadata();

  return (
    <div className="moralis">
      <p>{"If you have any NFT in your wallet, you can see NFT links, here"}</p>
      {NFTBalances?.result &&
        NFTBalances.result.map((nft, index) => {
          nft = verifyMetadata(nft);
          return <span>{nft?.image}</span>;
        })}
    </div>
  );
};

export default NFTBlance;
