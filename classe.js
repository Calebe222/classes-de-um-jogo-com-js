class Heroi:
    def __init__(self, nome, idade, tipo):
        self.nome = nome
        self.idade = idade
        self.tipo = tipo

    def atacar(self):
        if self.tipo == "mago":
            ataque = "usou magia"
        elif self.tipo == "guerreiro":
            ataque = "usou espada"
        elif self.tipo == "monge":
            ataque = "usou artes marciais"
        elif self.tipo == "ninja":
            ataque = "usou shuriken"
        else:
            ataque = "usou um ataque desconhecido"

        return f"O {self.tipo} atacou usando {ataque}"

# Exemplo de uso:
heroi1 = Heroi(nome="Gandalf", idade=1000, tipo="mago")
print(heroi1.atacar())  # Saída: "O mago atacou usando magia"
