Funciones Callback: es la capacidad de pasar una funcion como argumento a otra funcion, que luego se invoca dentro de la funcion. 
Hay metodos de orden superior porque toman los callbacks como argumentos: 
  For each: es un bucle for integrado en cada Array. Toma un callback como su unico argumento, e itera sobra cada elemento de la matriz y llama al callback en el. El callback puede tomar dos argumentos, el primero es el elemento en si, el segundo es opcional, que es el indice del elemento. 
  reduce: Ejecutara un bucle en nuestra matriz con la intencion de reducir cada elemento en un elemento que devuelve. Tiene un acumulador y un elemento. el callback debe contener siempre una declaracion de devolucion.
  map: se usa cuando queremos cambiar cada elemento de una matriz de la misma, manera. Map toma una devolucion de llamada como unico argumento. Tiene el elemento, el indice de argumento como opcionales. A diferencia de reduce devolvera la matriz. 
  
  
  
 
