nomes = ["José", "Lucas", "Nádia", "Fernanda", "Cairo", "Joana"]


def maiorNome():
    maior = nomes[0]
    for nome in nomes:
        if len(nome) > len(maior):
            maior = nome
    return maior


maiorNome()
