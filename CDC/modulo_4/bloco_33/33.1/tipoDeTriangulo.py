def tipoDeTriangulo(a, b, c):
    if a == b and b == c:
        return "Equilatero"
    elif a != b and b != c and a != c:
        return "Escaleno"
    else:
        return "Isosceles"
