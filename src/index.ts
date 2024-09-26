class WebSocketClient {
    private socket: WebSocket;
    private url: string;

    constructor(url: string) {
        this.url = url;
        this.socket = new WebSocket(this.url);
        this.initWebSocket();
    }

    private initWebSocket(): void {
        this.socket.onopen = () => {
            console.log('WebSocket connection established');
        };

        this.socket.onmessage = (event: MessageEvent) => {
            this.handleMessage(event.data);
        };

        this.socket.onclose = (event: CloseEvent) => {
            console.log(`WebSocket connection closed: ${event.code}`);
            setTimeout(() => this.reconnect(), 3000); 
        };

        this.socket.onerror = (error: Event) => {
            console.error('WebSocket error:', error);
        };
    }

    private reconnect(): void {
        this.socket = new WebSocket(this.url);
        this.initWebSocket();
    }

    private handleMessage(message: string): void {
        const data = JSON.parse(message);
        console.log('Message received:', data);
        // Incoming message
    }

    public sendMessage(data: any): void {
        const message = JSON.stringify(data);
        if (this.socket.readyState === WebSocket.OPEN) {
            this.socket.send(message);
        } else {
            console.warn('WebSocket is not open, retrying...');
        }
    }

    public closeConnection(): void {
        this.socket.close();
    }
}
