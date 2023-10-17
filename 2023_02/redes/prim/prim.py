import heapq
import random

n, m = input().split()  # ler varias linhas ao mesmo tempo
n = int(n)
m = int(m)

H = []

n_out = [[]*n for i in range(n)]

for j in range(m):              # ler arestas m
    a, b, c = input().split()     # ler aresta A -> B
    a = int(a)
    b = int(b)
    c = int(c)
    n_out[a].append((b, c))
    n_out[b].append((a, c))

raiz = random.randint(0, n - 1)
for (x, c) in n_out[raiz]:
    heapq.heappush(H, (c, raiz, x)) #  add ao heap um nó sempre marcado e um que não se sabe que está marcado

n_edges = 0
custo_tot = 0
marcados = [raiz]  # a raiz inicia marcada
arv_ger_min = []

while n_edges < n - 1:
    while True: #  verifica se as duas arestas desse loop estão marcadas
        (c, a, b) = heapq.heappop(H)
        if b not in marcados: #  se não estiver marcado pode seguir
            break
    marcados.append(b)
    print(a, b)
    print(marcados)
    custo_tot += c
    arv_ger_min.append((a, b))
    n_edges += 1
    for (x, c) in n_out[b]:
        if x not in marcados: #  aumenta o numero de arestas candidatas
            heapq.heappush(H, (c, b, x))

print(custo_tot)
print(arv_ger_min)
