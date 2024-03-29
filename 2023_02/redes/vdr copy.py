tabela_geral = []

class Roteador:
    def __init__(self, nome):
        self.nome = nome.upper()
        self.tabela_rotas = {self.nome: (0, f"{self.nome}-{self.nome}")}  # Tabela de roteamento inicialmente vazia

    def adicionar_rota(self, destino, custo):
        destino = destino.upper()
        if destino != self.nome:
            self.tabela_rotas[destino] = (custo, f"{self.nome}-{destino}")
            tabela_geral.append(self.tabela_rotas[destino])
        else:
            print(f"O Roteador {self.nome} não pode adicionar uma rota para sí mesmo")

    def atualizar_rota(self):
        vizinhos = self.tabela_rotas
        vizinhos = list(vizinhos.keys())
        todos = []
        i = 0

        print(vizinhos)
        for rota in tabela_geral:
            roteadores = rota[1]
            roteadores = roteadores.split("-", 1)
            todos.append(roteadores[1])
        print(todos)

        for i in range(0, len(vizinhos)):
            for j in range(0, len(todos)):
                if vizinhos[i] == todos[j]:
                    print()

    def imprimir_tabela_rotas(self):
        print(f"\nTabela de Roteamento do Roteador {self.nome}:")
        for destino, (custo, rota) in self.tabela_rotas.items():
            print(f"Destino: {destino}, Custo: {custo}, Rota: {rota}")


if __name__ == "__main__":

    # Exemplo de uso
    roteador_A = Roteador("A")
    roteador_A.adicionar_rota("a", 1)
    roteador_A.adicionar_rota("B", 1)
    roteador_A.adicionar_rota("C", 1)
    roteador_A.adicionar_rota("D", 1)

    roteador_B = Roteador("B")
    roteador_B.adicionar_rota("A", 1)
    roteador_B.adicionar_rota("b", 1)
    roteador_B.adicionar_rota("C", 1)

    roteador_C = Roteador("C")
    roteador_C.adicionar_rota("A", 1)
    roteador_C.adicionar_rota("B", 1)

    # Simulação de atualização de rota
    # roteador_A.atualizar_rota("C", 2)

    # Imprimir tabelas de roteamento
    roteador_A.imprimir_tabela_rotas()
    # roteador_B.imprimir_tabela_rotas()
    # roteador_C.imprimir_tabela_rotas()
    roteador_A.atualizar_rota()
