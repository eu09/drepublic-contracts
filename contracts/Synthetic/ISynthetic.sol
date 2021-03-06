// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

/**
 * @dev Interface of the NFT Synthetic.
 */
interface ISynthetic {

    function tokenTexts(uint256 tokenId) external view returns (string[] calldata);

    function tokenAttributes(uint256 tokenId) external view returns (string memory);

    //    function setSyntheticAttr(uint256 tokenId) external;
}