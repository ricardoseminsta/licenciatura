import sys

# Define o número de roteadores na rede
num_roteadores = 5

# Cria uma matriz de distâncias inicializada com infinito (representando a ausência de conexão)
infinito = float("inf")
distancias = [[infinito if i != j else 0 for j in range(num_roteadores)] for i in range(num_roteadores)]

# Define o custo de salto de 1 entre roteadores conectados
conexoes = {
    ('A', 'B'): 1,
    ('A', 'D'): 1,
    ('B', 'A'): 1,
    ('B', 'C'): 1,
    ('B', 'E'): 1,
    ('C', 'B'): 1,
    ('C', 'E'): 1,
    ('D', 'A'): 1,
    ('D', 'E'): 1,
    ('E', 'B'): 1,
    ('E', 'C'): 1,
    ('E', 'D'): 1,
}

# Inicializa as distâncias diretas entre roteadores
for (router1, router2), cost in conexoes.items():
    index1 = ord(router1) - ord('A')
    index2 = ord(router2) - ord('A')
    distancias[index1][index2] = cost
    distancias[index2][index1] = cost

# Função para imprimir a tabela de roteamento
def imprimir_tabela(distancias):
    for i in range(num_roteadores):
        print(f"Roteador {chr(i + ord('A'))}:")
        for j in range(num_roteadores):
            print(f"Para Roteador {chr(j + ord('A'))}, Distância = {distancias[i][j]}")
        print("")

# Algoritmo de vetor de distância
def vetor_distancia(distancias):
    for k in range(num_roteadores):
        for i in range(num_roteadores):
            for j in range(num_roteadores):
                if distancias[i][k] + distancias[k][j] < distancias[i][j]:
                    distancias[i][j] = distancias[i][k] + distancias[k][j]

# Executa o algoritmo de vetor de distância
vetor_distancia(distancias)

# Imprime a tabela de roteamento final
imprimir_tabela(distancias)
