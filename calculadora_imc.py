def calculadora(num1, num2, operacao):
    if operacao == 1:
        resultado = num1 + num2
        return resultado
    elif operacao == 2:
        resultado = num1 - num2
        return resultado
    elif operacao == 3:
        resultado = num1 * num2
        return resultado
    elif operacao == 4:
        if num2 != 0:  # Verifica se o segundo número não é zero para evitar divisão por zero
            resultado = num1 / num2
            return resultado
        else:
            return "Erro: Divisão por zero!"
    else:
        return "Operação inválida!"

# Exemplo de uso:
num1 = float(input("Digite o primeiro número: "))
num2 = float(input("Digite o segundo número: "))
operacao = int(input("Escolha a operação (1:Soma, 2:Subtração, 3:Multiplicação, 4:Divisão): "))

resultado = calculadora(num1, num2, operacao)
print("Resultado:", resultado)
