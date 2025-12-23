import socket
import threading
HOST = "localhost"
PORT = 3000
def connect_a_client(conn,addr):
    print(f"New connection from {addr}")
    while True:
        data = conn.recv(2048)
        if not data:
            break
        print(f"Received from client : ", data)
        conn.sendall(b"server has recieved your data")  # Echo back the received data
    conn.close()
    print(f"Connection from {addr} closed")
server_socket = socket.socket()
server_socket.bind((HOST, PORT))
server_socket.listen()
print(f"Server listening on {HOST}:{PORT}") 
while True:
    #wait for new connection acceptance
    conn , addr = server_socket.accept()
    t = threading.Thread(target=connect_a_client,args=(conn,addr))
    t.start()