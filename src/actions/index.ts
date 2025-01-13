import deployTokenAction from "./deployToken";
import balanceAction from "./balance";
import transferAction from "./transfer";
import deployCollectionAction from "./deployCollection";
import mintNFTAction from "./mintNFT";
import tradeAction from "./trade";
import requestFundsAction from "./requestFunds";
import resolveDomainAction from "./resolveDomain";
import getTokenDataAction from "./getTokenData";
import getTPSAction from "./getTPS";
import fetchPriceAction from "./fetchPrice";
import stakeWithJupAction from "./stakeWithJup";
import stakeWithSolayerAction from "./stakeWithSolayer";
import registerDomainAction from "./registerDomain";
import lendAssetAction from "./lendAsset";
import createGibworkTaskAction from "./createGibworkTask";
import resolveSolDomainAction from "./resolveSolDomain";
import pythFetchPriceAction from "./pythFetchPrice";
import getOwnedDomainsForTLDAction from "./getOwnedDomainsForTLD";
import getPrimaryDomainAction from "./getPrimaryDomain";
import getAllDomainsTLDsAction from "./getAllDomainsTLDs";
import getOwnedAllDomainsAction from "./getOwnedAllDomains";
import createImageAction from "./createImage";
import getMainAllDomainsDomainAction from "./getMainAllDomainsDomain";
import getAllRegisteredAllDomainsAction from "./getAllRegisteredAllDomains";
import raydiumCreateCpmmAction from "./raydiumCreateCpmm";
import raydiumCreateAmmV4Action from "./raydiumCreateAmmV4";
import createOrcaSingleSidedWhirlpoolAction from "./createOrcaSingleSidedWhirlpool";
import launchPumpfunTokenAction from "./launchPumpfunToken";
import getWalletAddressAction from "./getWalletAddress";
import flashOpenTradeAction from "./flashOpenTrade";
import flashCloseTradeAction from "./flashCloseTrade";
import createDriftVaultAction from "./drift/createVault";
import updateDriftVaultAction from "./drift/updateVault";
import depositIntoDriftVaultAction from "./drift/depositIntoVault";
import requestWithdrawalFromVaultAction from "./drift/requestWithdrawalFromVault";
import withdrawFromVaultAction from "./drift/withdrawFromVault";
import tradeDelegatedDriftVaultAction from "./drift/tradeDelegatedDriftVault";
import vaultInfoAction from "./drift/vaultInfo";
import createDriftUserAccountAction from "./drift/createDriftUserAccount";
import tradeDriftPerpAccountAction from "./drift/tradePerpAccount";
import doesUserHaveDriftAccountAction from "./drift/doesUserHaveDriftAccount";
import depositToDriftUserAccountAction from "./drift/depositToDriftUserAccount";
import withdrawFromDriftAccountAction from "./drift/withdrawFromDriftAccount";
import driftUserAccountInfoAction from "./drift/driftUserAccountInfo";

export const ACTIONS = {
  WALLET_ADDRESS_ACTION: getWalletAddressAction,
  DEPLOY_TOKEN_ACTION: deployTokenAction,
  BALANCE_ACTION: balanceAction,
  TRANSFER_ACTION: transferAction,
  DEPLOY_COLLECTION_ACTION: deployCollectionAction,
  MINT_NFT_ACTION: mintNFTAction,
  TRADE_ACTION: tradeAction,
  REQUEST_FUNDS_ACTION: requestFundsAction,
  RESOLVE_DOMAIN_ACTION: resolveDomainAction,
  GET_TOKEN_DATA_ACTION: getTokenDataAction,
  GET_TPS_ACTION: getTPSAction,
  FETCH_PRICE_ACTION: fetchPriceAction,
  STAKE_WITH_JUP_ACTION: stakeWithJupAction,
  STAKE_WITH_SOLAYER_ACTION: stakeWithSolayerAction,
  REGISTER_DOMAIN_ACTION: registerDomainAction,
  LEND_ASSET_ACTION: lendAssetAction,
  CREATE_GIBWORK_TASK_ACTION: createGibworkTaskAction,
  RESOLVE_SOL_DOMAIN_ACTION: resolveSolDomainAction,
  PYTH_FETCH_PRICE_ACTION: pythFetchPriceAction,
  GET_OWNED_DOMAINS_FOR_TLD_ACTION: getOwnedDomainsForTLDAction,
  GET_PRIMARY_DOMAIN_ACTION: getPrimaryDomainAction,
  GET_ALL_DOMAINS_TLDS_ACTION: getAllDomainsTLDsAction,
  GET_OWNED_ALL_DOMAINS_ACTION: getOwnedAllDomainsAction,
  CREATE_IMAGE_ACTION: createImageAction,
  GET_MAIN_ALL_DOMAINS_DOMAIN_ACTION: getMainAllDomainsDomainAction,
  GET_ALL_REGISTERED_ALL_DOMAINS_ACTION: getAllRegisteredAllDomainsAction,
  RAYDIUM_CREATE_CPMM_ACTION: raydiumCreateCpmmAction,
  RAYDIUM_CREATE_AMM_V4_ACTION: raydiumCreateAmmV4Action,
  CREATE_ORCA_SINGLE_SIDED_WHIRLPOOL_ACTION:
    createOrcaSingleSidedWhirlpoolAction,
  LAUNCH_PUMPFUN_TOKEN_ACTION: launchPumpfunTokenAction,
  FLASH_OPEN_TRADE_ACTION: flashOpenTradeAction,
  FLASH_CLOSE_TRADE_ACTION: flashCloseTradeAction,
  CREATE_DRIFT_VAULT_ACTION: createDriftVaultAction,
  UPDATE_DRIFT_VAULT_ACTION: updateDriftVaultAction,
  DEPOSIT_INTO_DRIFT_VAULT_ACTION: depositIntoDriftVaultAction,
  REQUEST_WITHDRAWAL_FROM_DRIFT_VAULT_ACTION: requestWithdrawalFromVaultAction,
  WITHDRAW_FROM_DRIFT_VAULT_ACTION: withdrawFromVaultAction,
  TRADE_DELEGATED_DRIFT_VAULT_ACTION: tradeDelegatedDriftVaultAction,
  DRIFT_VAULT_INFO_ACTION: vaultInfoAction,
  CREATE_DRIFT_USER_ACCOUNT_ACTION: createDriftUserAccountAction,
  TRADE_DRIFT_PERP_ACCOUNT_ACTION: tradeDriftPerpAccountAction,
  DOES_USER_HAVE_DRIFT_ACCOUNT_ACTION: doesUserHaveDriftAccountAction,
  DEPOSIT_TO_DRIFT_USER_ACCOUNT_ACTION: depositToDriftUserAccountAction,
  WITHDRAW_OR_BORROW_FROM_DRIFT_ACCOUNT_ACTION: withdrawFromDriftAccountAction,
  DRIFT_USER_ACCOUNT_INFO_ACTION: driftUserAccountInfoAction,
};

export type { Action, ActionExample, Handler } from "../types/action";
