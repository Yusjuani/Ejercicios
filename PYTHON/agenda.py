"""
 EJERCICIO:
 * - Muestra ejemplos de creación de todas las estructuras soportadas por defecto
 *   en tu lenguaje.
 * - Utiliza operaciones de inserción, borrado, actualización y ordenación.
 *
 * DIFICULTAD EXTRA (opcional):
 * Crea una agenda de contactos por terminal.
 * - Debes implementar funcionalidades de
 *   y eliminación de contactos.
 * - Cada contacto debe tener un nombre y un número de teléfono.
 * - El programa solicita en primer lugar cuál es la operación que se quiere realizar,
    y a continuación los datos necesarios para llevarla a cabo.
  - El programa no puede dejar introducir números de teléfono no númericos y con más
    de 11 dígitos (o el número de dígitos que quieras).
  - También se debe proponer una operación de finalización del programa.

 """

def my_agenda():
    agenda = {}

    def insert_contact():
        phone = input("introduce el teléfono del contacto: ")
        if phone.isdigit() and len(phone) > 0 and len(phone)<=11:
            agenda[name] = phone
        else:
            print("Debes introducir un número de teléfono con un máximo de 11 dígitos")

    while True:

        print("")
        print("1. Buscar contacto")
        print("2. Insertar contacto")
        print("3. Actualizar contacto")
        print("4. Eliminar contato")
        print("5. Salir")

        option = input("\nSelecciona una opcion: ")

        match option:
            case "1":
                name= input ("Introduce el nombre del contacto a buscar: ")
                if name in agenda:
                    print(
                        f"El numero de telefono de {name} es {agenda[name]}"
                    )
                else:
                    print(f"El contacto {name} no existe. ")
                
            case "2":
                name= input("Introduce el nombre del contacto: ")
                insert_contact()
            case "3":
                name = input("Introduce el nombre del contacto a actualizar: ")
                if name in agenda:
                    insert_contact()
                else: print(f" El contacto {name} no existe. ")
                
            case "4":
                name = input("Introduce el nombre del contacto a a eliminar: ")
                if name in agenda:
                    del agenda[name]
                else:
                    print(f"El contacto {name} no existe.")
            case "5":
                print("Saliendo de la agenda.")
                break
            case _:
                print("Opcion no válida. Elige una opción del 1 al 5.")

my_agenda()
