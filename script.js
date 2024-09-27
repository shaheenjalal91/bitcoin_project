const symbol = 'ethusdt';
const interval = '1m'; 
const wsUrl = `wss://stream.binance.com:9443/ws/${symbol}@kline_${interval}`;
const ws = new WebSocket(wsUrl);
const chartContainer = document.querySelector('.chart-container'); 
ws.onmessage = (event) => {
    const data = JSON.parse(event.data);
    const candlestick = data.k; 
    const open = candlestick.o;
    const high = candlestick.h;
    const low = candlestick.l;
    const close = candlestick.c;
    const volume = candlestick.v;
    chartContainer.innerText = `
        Open: ${open}, 
        High: ${high}, 
        Low: ${low}, 
        Close: ${close}, 
        Volume: ${volume}
    `;
};
