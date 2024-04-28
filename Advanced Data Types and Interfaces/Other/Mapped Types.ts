type Optional<T> = { [K in keyof T]?: T[K]};
type partialPoint = Optional<Point>;
type Point = number | number[];