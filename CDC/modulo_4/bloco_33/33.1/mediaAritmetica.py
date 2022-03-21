lista = [2, 3, 3, 5, 7, 10]


def mediaAritimetica():
    soma = 0
    for i in lista:
        soma += i
    return soma / len(lista)


mediaAritimetica()
