import {
  triangleAreaByEdges,
  triangleAreaByHeight,
  trianglePerimeter,
} from './modules/triangle.js';
import { squareArea, squarePerimeter } from './modules/square.js';
import { circleArea, circlePerimeter } from './modules/circle.js';

const getFormObject = form => Object.fromEntries(new FormData(form).entries());

const getSides = data => [
  parseFloat(data['side1']),
  parseFloat(data['side2']),
  parseFloat(data['side3']),
];

const clearForm = e => e.target.closest('form').reset();

const calcTriangleArea = e => {
  const form = e.target.closest('form');
  const data = getFormObject(form);
  const result = document.querySelector('#triangle_area_result');

  if (data['height'] && data['base']) {
    const height = parseFloat(data['height']);
    const base = parseFloat(data['base']);

    result.innerHTML = triangleAreaByHeight(base, height);
  } else if (data['side1'] && data['side2'] && data['side3']) {
    result.innerHTML = triangleAreaByEdges(getSides(data));
  }
};

const calcTrianglePerimeter = e => {
  const form = e.target.closest('form');
  const data = getFormObject(form);
  const result = document.querySelector('#triangle_perimeter_result');

  if (data['side1'] && data['side2'] && data['side3']) {
    result.innerHTML = trianglePerimeter(getSides(data));
  }
};

window.addEventListener('load', () => {
  // triangle
  document
    .querySelector('#bttn_triangle_area')
    .addEventListener('click', calcTriangleArea);

  document
    .querySelector('#bttn_triangle_perimeter')
    .addEventListener('click', calcTrianglePerimeter);

  document
    .querySelector('#bttn_triangle_clear')
    .addEventListener('click', clearForm);
});
