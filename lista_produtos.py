lista_produtos = ['máscaras faciais', 'batons', 'esmaltes', 'perfumes', 'loções', 'xampus', 'sabonetes', 'delineadores'] 

# Imprimir cada um dos ítens da lista
for i in range(len(lista_produtos)):
  print(lista_produtos[i])


# Concatenar os ítens da lista com a frase "Temos [produto] à venda!"
for i in range(len(lista_produtos)):
  print('Temos ' + lista_produtos[i] + ' à venda!')