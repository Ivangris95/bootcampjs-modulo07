import { vi } from "vitest";
import {
  calcularMensajeAlPlantarse,
  gestionarMensajePartida,
  generarNumeroCarta,
  obtenerPuntosCarta,
} from "./motor";
import { partida } from "./modelo";

describe("obtenerPuntosCarta", () => {
  it("Deberia devolver la puntuacion de la carta si es inferior o igual a 7", () => {
    //Arrage
    const carta: number = 5;
    const resultadoEsperado: number = 5;
    // vi.spyOn(partida, "numeroAleatorio", "get").mockReturnValue(9);
    //Act
    const resultado: number = obtenerPuntosCarta(carta);
    //Assert
    expect(resultado).toBe(resultadoEsperado);
  });
  it("Si la puntuacion de la carta es mayor a 7 deberia devolver una nueva puntuación de 0.5", () => {
    //Arrage
    const carta: number = 9;
    const resultadoEsperado: number = 0.5;
    // vi.spyOn(partida, "numeroAleatorio", "get").mockReturnValue(9);
    //Act
    const resultado: number = obtenerPuntosCarta(carta);
    //Assert
    expect(resultado).toBe(resultadoEsperado);
  });
});

describe("generarNumeroCarta", () => {
  it("Deberia devolver la suma de un número aleatorio más dos siempre que el número aleatorio sea mayor que 7", () => {
    //Arrage
    const resultadoEsperado: number = 11;
    vi.spyOn(partida, "numeroAleatorio", "get").mockReturnValue(9);
    //Act
    const resultado: number = generarNumeroCarta();
    //Assert
    expect(resultado).toBe(resultadoEsperado);
  });
  it("Deberia devolver un numero aleatorio inferio o igual a 7", () => {
    //Arrage
    const resultadoEsperado: number = 1;
    vi.spyOn(partida, "numeroAleatorio", "get").mockReturnValue(1);
    //Act
    const resultado: number = generarNumeroCarta();
    //Assert
    expect(resultado).toBe(resultadoEsperado);
  });
});

describe("gestionarMensajePartida", () => {
  it("Deberia devolver un: LO HAS CLAVADO, si el valor es igual a 7.5", () => {
    //Arrage

    const resultadoEsperado: string = "¡¡ Lo has clavado !! Enhorabuenea 🎖️ ";
    const puntuacion = 7.5;
    vi.spyOn(partida, "numeroParaGanar", "get").mockReturnValue(7.5);

    //Act

    const resultado = gestionarMensajePartida(puntuacion);

    //Assert

    expect(resultado).toBe(resultadoEsperado);
  });
  it("Deberia devolver un: GAME OVER 💀. Intentalo otra vez, si el valor es superior a 7.5", () => {
    //Arrage
    const puntuacion = 8;
    const resultadoEsperado: string = "GAME OVER 💀. Intentalo otra vez.";
    vi.spyOn(partida, "numeroParaGanar", "get").mockReturnValue(7.5);

    //Act

    const resultado = gestionarMensajePartida(puntuacion);

    //Assert

    expect(resultado).toBe(resultadoEsperado);
  });
});

describe("calcularMensajeAlPlantarse", () => {
  it("Deberia devolver un: Has sido muy conservador 🐔 si el valor es inferior al plantarse de 4", () => {
    //Arrage
    const puntuacion = 2;
    const resultadoEsperado: string = "Has sido muy conservador 🐔";

    //Act

    const resultado = calcularMensajeAlPlantarse(puntuacion);

    //Assert

    expect(resultado).toBe(resultadoEsperado);
  });
  it("Deberia devolver un: Te ha entrado el cangelo 😰 si el valor si el valor es igual a 5", () => {
    //Arrage

    const puntuacion = 5;
    const resultadoEsperado: string = "Te ha entrado el cangelo 😰";

    //Act

    const resultado = calcularMensajeAlPlantarse(puntuacion);

    //Assert

    expect(resultado).toBe(resultadoEsperado);
  });
  it("Deberia devolver un: Casi, casi 👍 si el valor es superior a 5", () => {
    //Arrage

    const puntuacion = 6;
    const resultadoEsperado: string = "Casi, casi 👍";

    //Act

    const resultado = calcularMensajeAlPlantarse(puntuacion);

    //Assert

    expect(resultado).toBe(resultadoEsperado);
  });
});
