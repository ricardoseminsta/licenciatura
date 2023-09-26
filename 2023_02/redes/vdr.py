class Roteador:
    def __init__(self, nome):
        self.nome = nome
        self.tabela_rotas = {}  # Tabela de roteamento inicialmente vazia

    def adicionar_rota(self, destino, custo, proximo_salto):
        self.tabela_rotas[destino] = (custo, proximo_salto)

    def atualizar_rota(self, destino, novo_custo, novo_proximo_salto):
        if destino in self.tabela_rotas:
            custo_atual, proximo_salto_atual = self.tabela_rotas[destino]
            if novo_custo < custo_atual:
                self.tabela_rotas[destino] = (novo_custo, novo_proximo_salto)

    def imprimir_tabela_rotas(self):
        print(f"Tabela de Roteamento do Roteador {self.nome}:")
        for destino, (custo, proximo_salto) in self.tabela_rotas.items():
            print(f"Destino: {destino}, Custo: {custo}, Próximo Salto: {proximo_salto}")

# Exemplo de uso
roteador_A = Roteador("A")
roteador_A.adicionar_rota("B", 1, "B")
roteador_A.adicionar_rota("C", 3, "C")
roteador_A.adicionar_rota("D", 3, "D")

roteador_B = Roteador("B")
roteador_B.adicionar_rota("A", 1, "A")
roteador_B.adicionar_rota("C", 2, "C")

roteador_C = Roteador("C")
roteador_C.adicionar_rota("A", 3, "A")
roteador_C.adicionar_rota("B", 2, "B")

# Simulação de atualização de rota
roteador_A.atualizar_rota("C", 2, "B")

# Imprimir tabelas de roteamento
roteador_A.imprimir_tabela_rotas()
roteador_B.imprimir_tabela_rotas()
roteador_C.imprimir_tabela_rotas()