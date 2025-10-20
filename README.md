JavaScript (Paradigma Orientado a Objetos basado en prototipos)

1. Generalización simbólica:
Reglas escritas del lenguaje que permiten aplicar el enfoque orientado a objetos:

Uso de objetos como base de toda la estructura del programa.

Creación de nuevos objetos mediante prototipos y el uso de Object.create() o funciones constructoras.

Posibilidad de herencia prototípica, donde un objeto puede heredar propiedades y métodos de otro sin necesidad de clases.

Implementación de encapsulamiento a través de closures o propiedades privadas (#atributo).

Uso de this para referirse al objeto actual dentro de métodos.

Desde ES6, posibilidad de usar la sintaxis class y extends como una abstracción del sistema de prototipos, pero internamente sigue funcionando por herencia prototípica.



2. Creencias de los profesionales:
Características que los desarrolladores consideran ventajas del modelo basado en prototipos:

Flexibilidad y dinamismo: los objetos pueden modificarse en tiempo de ejecución (agregar o eliminar métodos y propiedades).

Simplicidad conceptual: no hay una jerarquía rígida de clases; todo se basa en objetos que pueden servir de modelo para otros.

Reutilización directa: es fácil clonar o extender comportamientos sin necesidad de definir clases nuevas.

Menor complejidad inicial: resulta más intuitivo para quienes vienen de entornos dinámicos o de scripting.

Compatibilidad con múltiples paradigmas: JavaScript permite mezclar orientación a objetos, programación funcional y estructurada en un mismo entorno.
