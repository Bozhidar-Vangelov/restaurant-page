export const createElement = function ({
  type,
  styles,
  attributes,
  props,
  eventHandlers,
  appendTo,
}) {
  const elementType = type || 'div';
  const elementStyles = styles || {};
  const elementAttributes = attributes || {};
  const elementProps = props || {};
  const elementEventHandlers = eventHandlers || {};
  const elementAppendTo = appendTo || 'body';

  console.log(attributes);

  const element = document.createElement(elementType);

  for (let key in elementStyles) {
    element.style[key] = elementStyles[key];
  }

  for (let key in elementAttributes) {
    element.setAttribute(key, elementAttributes[key]);
  }
  for (let key in elementProps) {
    element[key] = elementProps[key];
  }
  for (let key in elementEventHandlers) {
    element.addEventListener(key, elementEventHandlers[key]);
  }

  elementAppendTo.append(element);

  return element;
};

export const navButtonsText = ['Home', 'Menu', 'Contacts'];

export const daysOfWeek = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
];
