import socket
HOST = "localhost"
PORT = 3000

server_socket = socket.socket()
server_socket.bind((HOST, PORT))
server_socket.listen()
print(f"Server listening on {HOST}:{PORT}") 
while True:
    #wait for new connection acceptance
    conn , addr = server_socket.accept()
    