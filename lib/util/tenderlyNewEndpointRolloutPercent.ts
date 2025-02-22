import { ChainId } from '@uniswap/sdk-core'

export const TENDERLY_NEW_ENDPOINT_ROLLOUT_PERCENT: { [chain in ChainId]: number } = {
  [ChainId.MAINNET]: 100,
  [ChainId.GOERLI]: 0,
  [ChainId.SEPOLIA]: 0,
  [ChainId.OPTIMISM]: 0,
  [ChainId.OPTIMISM_GOERLI]: 0,
  [ChainId.OPTIMISM_SEPOLIA]: 0,
  [ChainId.ARBITRUM_ONE]: 0,
  [ChainId.ARBITRUM_GOERLI]: 0,
  [ChainId.ARBITRUM_SEPOLIA]: 0,
  [ChainId.POLYGON]: 0,
  [ChainId.POLYGON_MUMBAI]: 0,
  [ChainId.CELO]: 0,
  [ChainId.CELO_ALFAJORES]: 0,
  [ChainId.GNOSIS]: 0,
  [ChainId.MOONBEAM]: 0,
  [ChainId.BNB]: 0,
  [ChainId.AVALANCHE]: 0,
  [ChainId.BASE_GOERLI]: 0,
  [ChainId.BASE]: 100,
  [ChainId.ZORA]: 0,
  [ChainId.ZORA_SEPOLIA]: 0,
  [ChainId.ROOTSTOCK]: 0,
  [ChainId.BLAST]: 0,
  [ChainId.ZKSYNC]: 0,
  [ChainId.WORLDCHAIN]: 0,
  [ChainId.ASTROCHAIN_SEPOLIA]: 0,
}
