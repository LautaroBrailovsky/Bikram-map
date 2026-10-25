

// 1.- Dado el array numbers cuyo valor sea [4, 5, 6, 7, 8, 9, 10],
      
      // crea una función elevados que sea el resultado de elevar cada número a si mismo.

      const numbers = [4, 5, 6, 7, 8, 9, 10];

      function elevados() {
        const resultado = numbers.map((numero) => {
          return Math.pow(numero, numero); // También se podría usar numero ** numero
        });

        return resultado;
      }

      // 2.- Dado el array foodList, generar un segundo array (result2) que consiga generar de salida el resultado esperado.

      const foodList = ["Pizza", "Ramen", "Paella", "Entrecot"];

      const result2 = foodList.map((comida) => {
        if (comida === "Pizza") {
          return "Como soy de Italia, amo comer Pizza";
        } else if (comida === "Ramen") {
          return "Como soy de Japón, amo comer Ramen";
        } else if (comida === "Paella") {
          return "Como soy de Valencia, amo comer Paella";
        } else {
          return "Aunque no como carne, el Entrecot es sabroso";
        }
      });

      // 3.- Dado el array staff, crear un segundo array (result3) que forme frases como en el ejemplo.

      const staff = [
        {
          name: "Pepe",
          role: "The Boss",
          hobbies: ["leer", "ver pelis"],
        },
        {
          name: "Ana",
          role: "becaria",
          hobbies: ["nadar", "bailar"],
        },
        {
          name: "Luis",
          role: "programador",
          hobbies: ["dormir", "comprar"],
        },
        {
          name: "Carlos",
          role: "secretario",
          hobbies: ["futbol", "queso"],
        },
      ];

      const result3 = staff.map((persona) => {
        return `${persona.name} es ${persona.role} y le gusta ${persona.hobbies[0]} y ${persona.hobbies[1]}`;
      });


      // 4.- Crea un segundo array result4 a partir del array numbers2 que devuelva solo los impares.

      const numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

      const result4 = numbers2.filter((numero) => {
       
        
        if (numero % 2 !== 0) {
          return true;
        } else {
          return false;
        }
      });

      // 5.- Dado el array foodList2, genera un segundo array result5 que filtre los platos veganos y saque una sentencia.

      const foodList2 = [
        {
          name: "Tempeh",
          isVeggie: true,
        },
        {
          name: "Cheesbacon burguer",
          isVeggie: false,
        },
        {
          name: "Tofu burguer",
          isVeggie: true,
        },
        {
          name: "Entrecot",
          isVeggie: false,
        },
      ];

      const platosVeganos = foodList2.filter((plato) => {
        return plato.isVeggie === true;
      });

      const result5 = platosVeganos.map((plato) => {
        if (plato.name === "Tempeh") {
          return `Que rico ${plato.name} me voy a comer!`;
        } else {
          return `Que rica ${plato.name} me voy a comer!`;
        }
      });

      // 6.- Dado el array inventory, devolver un array (result6) con los nombres de los elementos que valgan más de 300 euros.

      const inventory = [
        {
          name: "Mobile phone",
          price: 199,
        },
        {
          name: "TV Samsung",
          price: 459,
        },
        {
          name: "Viaje a Cancún",
          price: 600,
        },
        {
          name: "Mascarilla",
          price: 1,
        },
      ];

      const caros = inventory.filter((item) => {
        return item.price > 300;
      });

      const result6 = caros.map((item) => {
        return item.name;
      });


      // 7.- Dado el siguiente array numeros [39, 2, 4, 25, 62], obten la multiplicación de todos los elementos del array.

      const numeros3 = [39, 2, 4, 25, 62]; 

      const result7 = numeros3.reduce((acumulador, numeroActual) => {
        return acumulador * numeroActual;
      }, 1); 

      // 8.- Concatena todos los elementos del array con reduce para que devuelva una sola frase.

      const sentenceElements = [
        "tabitha",
        "es",
        "la",
        "reencarnacion",
        "de",
        "miranda",
        "flipa",
        "con",
        "el",
        "Dato",      
      ];

      const result8 = sentenceElements.reduce((acumulador, palabra) => {
        return acumulador + " " + palabra;
      });

      // 9.- Obtener el monto total de los elementos que pertenecen a category "code" en el siguiente array.

      const books = [
        {
          name: " JS for dummies",
          author: "Emily A. Vander Veer",
          price: 20,
          category: "code",
        },
        {
          name: "Don Quijote de la Mancha",
          author: "Cervantes",
          price: 14,
          category: "novel",
        },
        {
          name: "Juego de tronos",
          author: "George R. Martin",
          price: 32,
          category: "Fantasy",
        },
        {
          name: "javascript the good parts",
          author: "Douglas Crockford",
          price: 40,
          category: "code",
        },
      ];

     
      const librosCode = books.filter((libro) => {
        return libro.category === "code";
      });

      
      const result9 = librosCode.reduce((total, libro) => {
        return total + libro.price;
      }, 0);

      console.log("Ejercicio 1 (elevados):", elevados());

      console.log("Ejercicio 2 (result2):", result2);
      console.log("Ejercicio 3 (result3):", result3);
      console.log("Ejercicio 4 (result4):", result4);
      console.log("Ejercicio 5 (result5):", result5);
      console.log("Ejercicio 6 (result6):", result6);
      console.log("Ejercicio 7 (result7):", result7);
      console.log("Ejercicio 8 (result8):", result8);
      console.log("Ejercicio 9 (result9):", result9);
