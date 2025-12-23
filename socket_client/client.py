import socket
print("Client is starting...")
HOST = "localhost"
PORT = 3000
client_socket = socket.socket()
client_socket.connect((HOST, PORT))
print(f"Connected to server at {HOST}:{PORT}")


client_socket.sendall(b"Hello, Server!")


response_from_server = client_socket.recv(2048)
print("Response from server:", response_from_server)

