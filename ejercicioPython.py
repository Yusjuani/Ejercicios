"Estructuras de control"

#Condicionales
my_string = "chao"
if my_string == "Hola":
    print ("my_string es 'hola'")
elif my_string == "chao":
    print("my_string es 'Chao'")
else: print("my_string no es 'hola' ni 'chao'")

#Iterativas
for i in range(11):
    print(i)
i = 0

while i <=10:
    print(i)
    i += 1

#manejo de excepciones
try:
    print(10/1)
except:
    print("Se ha producido un error")
finally: 
    print("ha finalizado el manejo de excepciones")


#Ejercicio
#crea un programa que imprima por consola todos los numeros comprendidos entre 10 y 55 incluidos , pares y que no son ni el 16 ni multiplos de 3.

for number in range(10,55):
    if number % 2 == 0 and number != 16 and number % 3 != 0:
     print(number)


 
#########* Escribe un programa que muestre por consola (con un print) los

######### * números de 1 a 100 (ambos incluidos y con un salto de línea entre
 
#########* cada impresión), sustituyendo los siguientes:
 
#########* - Múltiplos de 3 por la palabra "fizz".
 
#########* - Múltiplos de 5 por la palabra "buzz".
 
#########* - Múltiplos de 3 y de 5 a la vez por la palabra "fizzbuzz".

def print_number(text_1, text_2) -> int:
    count = 0
    for number in range(1,101):
        if number % 3 == 0 and number % 5 == 0:
            print(text_1+text_2)
        elif number % 3 == 0:
            print(text_1)
        elif number % 5 == 0:
            print(text_2)
        else:
            print(number)
            count +=1
    return count

print(print_number("fizz ", "buzz"))