class Circle {
    constructor(radius: number, color: string = "red") {
        this.radius = radius;
        this.color = color;
    }
    getRadius(): number {
        return this.radius;
    }
    getColor(): string {
        return this.color;
    }

    setRadius(radius: number): void {
        this.radius = radius;
    }
    setColor(color: string): void {
        this.color = color;
    }

    getArea(): number {
        return Math.PI * Math.pow(this.radius, 2);
    }

    getCircumference(): number {
        return 2 * Math.PI * this.radius;
    }
}
