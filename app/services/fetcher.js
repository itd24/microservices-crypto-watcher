import CoinGecko from 'coingecko-api';

const CoinGeckoClient = new CoinGecko();

export default {
    client: () => {
        return CoinGeckoClient;
    },
    data: async () => {
        let coinsToWatch = ['bitcoin','ethereum','litecoin'];
        let response = await CoinGeckoClient.coins.markets();
        if(!!response && response.code == 200 && response.data.length > 0){
            return response.data.filter( coin => coinsToWatch.includes(coin.id) );
        }
        else{
            return [];
        }
    }
}