let nombreUsuario = "andrea";
let contrasena = "1234";
let sesionIniciada = false;
let intentosLogin = 0;

const precioFotocopia = 400;
const precioImpresion = 700;
const precioInternet = 2000;

let cantidadFotocopias = 0;
let cantidadImpresiones = 0;
let cantidadHorasInternet = 0;

let ventasFotocopias = 0;
let ventasImpresiones = 0;
let ventasInternet = 0;

let totalFotocopias = 0;
let totalImpresiones = 0;
let totalInternet = 0;

while (!sesionIniciada && intentosLogin < 3) {
  let usuarioIngresado = prompt("Usuario:");
  let contrasenaIngresada = prompt("Contraseña:");

  if (usuarioIngresado === nombreUsuario && contrasenaIngresada === contrasena) {
    sesionIniciada = true;
    console.log(`¡Bienvenido, ${nombreUsuario}!\n`);
  } else {
    intentosLogin++;
    console.log("Usuario o contraseña incorrectos. Por favor, inténtalo de nuevo.\n");
  }
}

if (!sesionIniciada) {
  console.logt("Excediste el máximo de intentos de inicio de sesión. Saliendo del programa.");
} else {
  let continuar = true;

  while (continuar) {
    let opcion = parseInt(prompt(
      "Menú del CiberCafe:\n" +
      "1. Fotocopias\n" +
      "2. Impresiones\n" +
      "3. Internet\n" +
      "4. Finalizar día\n" +
      "Ingresa tu opción (1-4):"
    ));

    switch (opcion) {
      case 1:
        console.log("\n*** Compra de Fotocopias ***");
        let cantidadFotocopiasIngresada = parseInt(prompt("Ingresa la cantidad de fotocopias:"));
        cantidadFotocopias += cantidadFotocopiasIngresada;
        totalFotocopias += cantidadFotocopiasIngresada;

        let respuestaEstudianteFotocopias = prompt("¿Eres estudiante? (responde sí o no)").toLowerCase();
        let esEstudianteFotocopias = respuestaEstudianteFotocopias === "sí" || respuestaEstudianteFotocopias === "si";
        let subtotalFotocopias = cantidadFotocopiasIngresada * precioFotocopia;
        let descuentoFotocopias = esEstudianteFotocopias ? subtotalFotocopias * 0.05 : 0; // 5% de descuento para estudiantes
        let totalConDescuentoFotocopias = subtotalFotocopias - descuentoFotocopias;
        ventasFotocopias += totalConDescuentoFotocopias;

        console.log('Subtotal: $' + subtotalFotocopias);
        if (esEstudianteFotocopias) {
          console.log('Descuento aplicado: $' + descuentoFotocopias);
          console.log('Total con descuento: $' + totalConDescuentoFotocopias);
        }
        console.log("");
        break;
      case 2:
        console.log("\n*** Compra de Impresiones ***");
        let cantidadImpresionesIngresada = parseInt(prompt("Ingresa la cantidad de impresiones:"));
        cantidadImpresiones += cantidadImpresionesIngresada;
        totalImpresiones += cantidadImpresionesIngresada;

        let respuestaEstudianteImpresiones = prompt("¿Eres estudiante? (responde sí o no)").toLowerCase();
        let esEstudianteImpresiones = respuestaEstudianteImpresiones === "sí" || respuestaEstudianteImpresiones === "si";
        let subtotalImpresiones = cantidadImpresionesIngresada * precioImpresion;
        let descuentoImpresiones = esEstudianteImpresiones ? subtotalImpresiones * 0.05 : 0; // 5% de descuento para estudiantes
        let totalConDescuentoImpresiones = subtotalImpresiones - descuentoImpresiones;
        ventasImpresiones += totalConDescuentoImpresiones;

        console.log('Subtotal: $' + subtotalImpresiones);
        if (esEstudianteImpresiones) {
          console.log('Descuento aplicado: $' + descuentoImpresiones);
          console.log('Total con descuento: $' + totalConDescuentoImpresiones);
        }
        console.log("");
        break;
      
        case 3:
        console.log("\n*** Compra de Internet ***");
        let cantidadHorasInternetIngresadas = parseInt(prompt("Ingresa la cantidad de horas de internet:"));
        cantidadHorasInternet += cantidadHorasInternetIngresadas;
        totalInternet += cantidadHorasInternetIngresadas;

        let respuestaEstudianteInternet = prompt("¿Eres estudiante? (responde sí o no)").toLowerCase();
        let esEstudianteInternet = respuestaEstudianteInternet === "sí" || respuestaEstudianteInternet === "si";
        let subtotalInternet = cantidadHorasInternetIngresadas * precioInternet;
        let descuentoInternet = esEstudianteInternet ? subtotalInternet * 0.05 : 0; // 5% de descuento para estudiantes
        let totalConDescuentoInternet = subtotalInternet - descuentoInternet;
        ventasInternet += totalConDescuentoInternet;

        console.log('Subtotal: $' + subtotalInternet);
        if (esEstudianteInternet) {
          console.log('Descuento aplicado: $' + descuentoInternet);
          console.log('Total con descuento: $' + totalConDescuentoInternet);
        }
        console.log("");
        break;


      case 4:
        continuar = false;
        break;
      default:
        console.log("Opcion invalida. Por favor, intantalo de nuevo.\n");
        break;
    }
  }

  let totalVentas = ventasFotocopias + ventasImpresiones + ventasInternet;
  let totalCantidadServicios = totalFotocopias + totalImpresiones + totalInternet;
  let promedioFotocopias = totalFotocopias === 0 ? 0 : ventasFotocopias / totalFotocopias;
  let promedioImpresiones = totalImpresiones === 0 ? 0 : ventasImpresiones / totalImpresiones;
  let promedioInternet = totalInternet === 0 ? 0 : ventasInternet / totalInternet;

  console.log("\n---- Resumen del Dia ----");
  console.log('Total de fotocopias:', cantidadFotocopias);
  console.log('Total de impresiones:', cantidadImpresiones);
  console.log('Total de horas de internet:', cantidadHorasInternet);
  console.log('Total de ventas:', totalVentas);
  console.log('Promedio de Fotocopias:', promedioFotocopias);
  console.log('Promedio de Impresiones:', promedioImpresiones);
  console.log('Promedio de Internet:', promedioInternet);
}
