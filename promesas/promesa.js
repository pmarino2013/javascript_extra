let isActive = false;

function activePromise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (isActive) {
        resolve("El sensor está activo");
      } else {
        reject("El sensor está apagado");
      }
    }, 2000);
  });
}

export default activePromise;
