# pruebaTecnica_BdeO

# Problema a Resolver

Usando una función AWS Lambda (hecha en Java o Node.js) la cual se debe exponer como Api REST a través del servicio AWS Api Gateway, resuelva el siguiente problema:

Hay **n** grupos de amigos y cada grupo es numerado de **1** a **n**. El **i<sup>th</sup>** grupo contiene **a<sub>i</sub>** personas.

Todos viven cerca de una parada de bus, y solo un bus funciona en esa ruta. El bus vacío llega a la parada y todos los grupos quieren viajar en ese bus.
Sin embargo, cada grupo de amigos no quiere separarse. Así que entran al bus solo si el bus puede llevar a todo el grupo.

Además, los grupos no quieren cambiar su posición relativa mientras viaja n. En otras palabras, el grupo 3 no puede viaja r en el bus, a menos que el grupo 1 y el grupo 2 ya haya **n** viajado, adicionalmente es necesario que todos estén sentados dentro del autobús en este momento, lo que quiere decir que un bus de capacidad x solo puede transportar **x** personas simultáneamente.

Encuentre todos los posibles tamaños de x del bus para que pueda transportar a todos los grupos, cumpliendo con las condiciones anteriores, y cada vez que el bus salga de la estación, no haya sillas vacías en el bus (es decir, el número tota l de personas presentes dentro del bus es igual a **x**).


## Ejemplo de un Request
    {
	    "groups": "1,2,1,1,1,2,1,3"
    }

## Ejemplo de un Response
    {
	    "sizes": "3,4,6,12"
    }



Para el ejemplo del request y response anterior, la lógica usada es la siguiente:

 - Se tiene como entrada los grupos **a<sub>1</sub> = 1, a<sub>2</sub> = 2, a<sub>3</sub> = 1, a<sub>4</sub> = 1, a<sub>5</sub> = 1, a<sub>6</sub> = 2, a<sub>7</sub> = 1, a<sub>8</sub> = 3**
 - Sí **x = 1**, En el primer viaje **a<sub>1</sub>** va en el bus, sin embargo, no puede hacer un segundo viaje, porque el grupo **a<sub>2</sub>** tiene 2 personas y el bus una capacidad para una. De acuerdo con lo anterior, el valor **x = 1** no puede hacer parte de la respuesta.
 - Sí **x = 2**, no será posible hacer el primer viaje, porque tendría que transportar a los grupos **a<sub>1</sub>** y **a<sub>2</sub>** como mínimo, y solo tiene capacidad para 2 personas, y si solo transporta al grupo **a<sub>1</sub>** entonces quedaría una silla vacía. De acuerdo con lo anterior, el valor **x = 2** no puede hacer parte de la respuesta.
 - Sí **x = 3**, el primer viaje sería con los grupos **a<sub>1 </sub>** y **a<sub>2</sub>**, el segundo viaje con **a<sub>3</sub>**, **a<sub>4</sub>** y **a<sub>5</sub>**, el tercer viaje con **a<sub>6</sub>** y **a<sub>7</sub>** y finalmente el cuarto viaje lo hace con el grupo **a<sub>8</sub>** . De acuerdo con esto, **x = 3** sí es una posible respuesta y debe ir como parte de la salida del servicio REST.
 - Sí **x = 4**, el primer viaje será con los grupos con **a<sub>1</sub>**, **a<sub>2</sub>** y **a<sub>3</sub>**, el segundo viaje será con **a<sub>4</sub>**, **a<sub>5</sub>** y **a<sub>6</sub>** , y finalmente el tercer viaje será con **a<sub>7</sub>** y **a<sub>8</sub>**. Por lo tanto **x = 4** también hace parte de la respuesta.
 - Así sucesivamente se deben evaluar las demás posibles opciones para **x**. Que en el ejemplo dado la respuesta debe ser 3,4,6,12 como posibles valores de **x**.
