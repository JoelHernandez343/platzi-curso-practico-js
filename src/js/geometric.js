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

const clearForm = (e, shape) => {
  e.target.closest('form').reset();
  document.querySelector(`#${shape}_area_result`).innerHTML = '';
  document.querySelector(`#${shape}_perimeter_result`).innerHTML = '';
};

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

const calcSquareArea = e => {
  const form = e.target.closest('form');
  const data = getFormObject(form);
  const result = document.querySelector('#square_area_result');

  if (data['side']) {
    result.innerHTML = squareArea(parseFloat(data['side']));
  }
};

const calcSquarePerimeter = e => {
  const form = e.target.closest('form');
  const data = getFormObject(form);
  const result = document.querySelector('#square_perimeter_result');

  if (data['side']) {
    result.innerHTML = squarePerimeter(parseFloat(data['side']));
  }
};

const calcCircleArea = e => {
  const form = e.target.closest('form');
  const data = getFormObject(form);
  const result = document.querySelector('#circle_area_result');

  if (data['radius']) {
    result.innerHTML = circleArea(parseFloat(data['radius']));
  }
};

const calcCirclePerimeter = e => {
  const form = e.target.closest('form');
  const data = getFormObject(form);
  const result = document.querySelector('#circle_perimeter_result');

  if (data['radius']) {
    result.innerHTML = circlePerimeter(parseFloat(data['radius']));
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
    .addEventListener('click', e => clearForm(e, 'triangle'));

  // square
  document
    .querySelector('#bttn_square_area')
    .addEventListener('click', calcSquareArea);

  document
    .querySelector('#bttn_square_perimeter')
    .addEventListener('click', calcSquarePerimeter);

  document
    .querySelector('#bttn_square_clear')
    .addEventListener('click', e => clearForm(e, 'square'));

  // circle
  document
    .querySelector('#bttn_circle_area')
    .addEventListener('click', calcCircleArea);

  document
    .querySelector('#bttn_circle_perimeter')
    .addEventListener('click', calcCirclePerimeter);

  document
    .querySelector('#bttn_circle_clear')
    .addEventListener('click', e => clearForm(e, 'circle'));
});
