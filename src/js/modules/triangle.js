const trianglePerimeter = edges => edges[0] + edges[1] + edges[2];

const triangleAreaByHeight = (base, height) => (base * height) / 2;

// Heron's formula
const triangleAreaByEdges = edges => {
  const a = edges[0],
    b = edges[1],
    c = edges[2];
  const p = (a + b + c) / 2;
  const area = Math.sqrt(p * (p - a) * (p - b) * (p - c));

  return area;
};

export { trianglePerimeter, triangleAreaByEdges, triangleAreaByHeight };
