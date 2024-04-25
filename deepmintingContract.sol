// SPDX-License-Identifier: MIT
// Compatible with OpenZeppelin Contracts ^5.0.0
pragma solidity ^0.8.20;

//contracts directly from OpenZeppelin
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";


contract DeepMinting is ERC721, ERC721Enumerable, ERC721URIStorage, Ownable {

   uint256 private _nextTokenId; //a variable to keep track of the next token id that will be minted

    //initiallizes the owner of the contract: Deep Patel
   constructor(address initialOwner)
       ERC721("DeepMinting", "DM")
       Ownable(initialOwner)
   {}


   //this function mints a new NFT, with a given address and image url
   //the address provided will be the owner and the url will be the NFT they minted
   function safeMint(address to, string memory name, string memory uri) public onlyOwner {
        uint256 tokenId = _nextTokenId++; //increment for the next NFT that will be minted
        _safeMint(to, tokenId); //mints a new NFT token to the address
        _setTokenURI(tokenId, uri); //sets the NFT as the given image //must be a valid URI in order for the image to show
        _setTokenName(tokenId, name);
   }

   // Function to get NFTs owned by a specific address
    function getOwnedTokens(address owner) public view returns (uint256[] memory) {
        uint256 balance = balanceOf(owner);
        uint256[] memory ownedTokens = new uint256[](balance);
        for (uint256 i = 0; i < balance; i++) {
            ownedTokens[i] = tokenOfOwnerByIndex(owner, i);
        }
        return ownedTokens;
    }

    // gives the token a name
    function _setTokenName(uint256 tokenId, string memory name) internal {
        _tokenNames[tokenId] = name;
    }

    mapping(uint256 => string) private _tokenNames;

    //pulls name of the nft
    function tokenName(uint256 tokenId) public view returns (string memory) {
        return _tokenNames[tokenId];
    }

   // The following functions are overrides required by Solidity.
   function _update(address to, uint256 tokenId, address auth)
       internal
       override(ERC721, ERC721Enumerable)
       returns (address)
   {
       return super._update(to, tokenId, auth);
   }


   function _increaseBalance(address account, uint128 value)
       internal
       override(ERC721, ERC721Enumerable)
   {
       super._increaseBalance(account, value);
   }


   function tokenURI(uint256 tokenId)
       public
       view
       override(ERC721, ERC721URIStorage)
       returns (string memory)
   {
       return super.tokenURI(tokenId);
   }


   function supportsInterface(bytes4 interfaceId)
       public
       view
       override(ERC721, ERC721Enumerable, ERC721URIStorage)
       returns (bool)
   {
       return super.supportsInterface(interfaceId);
   }
}