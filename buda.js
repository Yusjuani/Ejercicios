const axios = require("axios");
const moment = require("moment");

async function obtenerTransaccionesBlackBuda(marketId, startTime, endTime) {
  const timestampInicio = moment(startTime).valueOf();
  const timestampFin = moment(endTime).valueOf();

  try {
    const respuesta = await axios
      .get(`https://www.buda.com/api/v2/markets/${marketId}/trades`, {
        params: {
          timestamp: timestampFin,
        },
      })
      .then((response) => {
        const { data } = response;
        const { trades } = data;

        let suma = 0;
        trades.entries
          .filter((l) => {
            const fechaLimite = new Date(timestampInicio);
            const fechaTrans = new Date(parseInt(l[0]));

            return fechaTrans > fechaLimite;
          })
          .forEach((element) => {
            suma += element[1] * element[2];
          });
        return suma.toFixed(2);
      });
    return respuesta;
  } catch (error) {
    console.error("Error al obtener datos de transacciones:", error);
    throw error;
  }
}

async function main() {
  const marketId = "btc-clp";
  const startTime = "2024-03-01T09:00:00-03:00";
  const endTime = "2024-03-01T10:00:00-03:00";
  const startTime2 = "2023-03-01T09:00:00-03:00";
  const endTime2 = "2023-03-01T10:00:00-03:00";
  const año2024 = await obtenerTransaccionesBlackBuda(
    marketId,
    startTime,
    endTime
  );
  const año2023 = await obtenerTransaccionesBlackBuda(
    marketId,
    startTime2,
    endTime2
  );
  console.log("año 2024 " + año2024);
  console.log("año 2023 " + año2023);
}

main();
