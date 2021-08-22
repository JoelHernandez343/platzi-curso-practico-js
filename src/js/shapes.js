const squarePerimeter = edge => edge * 4;
const squareArea = edge => edge * edge;

const trianglePerimeter = edges => edges[0] + edges[1] + edges[2];

export { squareArea, squarePerimeter, trianglePerimeter };
