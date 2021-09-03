import {formatSwapTokenList, getLocalRPC} from './methods'
import {tokenListUrl, VERSION, USE_VERSION} from '../constant'

export const MOVR_MAIN_CHAINID = 1285
export const MOVR_MAINNET = getLocalRPC(MOVR_MAIN_CHAINID, 'https://rpc.moonriver.moonbeam.network')
export const MOVR_MAIN_EXPLORER = 'https://blockscout.moonriver.moonbeam.network'

export const tokenList = []
export const testTokenList = []

const symbol = 'MOVR'

const bridgeToken = {
  [VERSION.V1]: {
    bridgeInitToken: '',
    bridgeInitChain: '',
  },
  [VERSION.V5]: {
    bridgeInitToken: '',
    bridgeInitChain: '56',
    nativeToken: '',
    crossBridgeInitToken: '0x639a647fbe20b6c8ac19e48e2de44ea792c62c5c'
  },
}

export default {
  [MOVR_MAIN_CHAINID]: {
    tokenListUrl: tokenListUrl + MOVR_MAIN_CHAINID,
    tokenList: formatSwapTokenList(symbol, tokenList),
    ...bridgeToken[USE_VERSION],
    swapRouterToken: '',
    swapInitToken: '',
    multicalToken: '0x2c78f1b70ccf63cdee49f9233e9faa99d43aa07e',
    v1FactoryToken: '',
    v2FactoryToken: '',
    timelock: '',
    nodeRpc: MOVR_MAINNET,
    chainID: MOVR_MAIN_CHAINID,
    lookHash: MOVR_MAIN_EXPLORER + '/tx/',
    lookAddr: MOVR_MAIN_EXPLORER + '/address/',
    lookBlock: MOVR_MAIN_EXPLORER + '/block/',
    explorer: MOVR_MAIN_EXPLORER,
    symbol: symbol,
    name: 'Moonriver',
    networkName: 'MOVR mainnet',
    type: 'main',
    label: MOVR_MAIN_CHAINID,
    isSwitch: 1,
    underlying: [],
    suffix: 'MOVR',
    anyToken: ''
  },
}