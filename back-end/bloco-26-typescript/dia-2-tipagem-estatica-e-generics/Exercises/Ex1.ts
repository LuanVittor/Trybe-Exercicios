enum colors {
  preta,
  branca,
  vermelha,
  prata,
}

interface Car {
  brand: string,
  color: colors;
  doors: number
}

class Car {
  constructor(brand: string, color: colors, doors: number) {
    this.brand = brand;
    this.color = color;
    this.doors = doors;
  }

  honk(): void {
    console.log('Buzina');
  }

  openTheDoor(door: number): void {
    console.log(`abrindo porta ${door}`);
  }

  speedUp(): void {
    console.log("Acelerando carro.");
  }

  speedDown(): void {
    console.log("Reduzindo a velocidade do carro.");
  }

  stop(): void {
    console.log("Parando carro.");
}
}