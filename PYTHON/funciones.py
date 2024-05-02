#Funciones definidas por los usuarios
#Simple

def greet():
    print("hola")
greet()

#con retorno
def return_greet():
    return "hola, python"
print(return_greet())

#con argumento(parametros)
def arg_greet(name):
    print(f"hola, {name}")
    arg_greet("vero")

def args_greet(name, greet):
    print(f"{name}, {greet}")
    args_greet("hi", "vero")

def variable_key_arg_greet(**names):
    for key, value in names.items():
        print(f"hola, {value} ({key})!")

variable_key_arg_greet(
    lenguage="python",
    name="vero",
    alias="her",
    age=29

)


