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
  const elementAppendTo = appendTo || document.body;

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

export const createContainers = (pageContent, containersData) => {
  const containers = containersData.map((data) => {
    const contentContainer = createElement({
      type: 'div',
      attributes: { class: 'content-container' },
      appendTo: pageContent,
    });

    const contentHeadingContainer = createElement({
      type: 'div',
      attributes: { class: 'content-heading-container' },
      appendTo: contentContainer,
    });

    createElement({
      type: 'i',
      attributes: { class: data.iconClass },
      appendTo: contentHeadingContainer,
    });

    createElement({
      type: 'h2',
      props: { textContent: data.textContent },

      attributes: { class: 'content-heading' },
      appendTo: contentHeadingContainer,
    });

    return contentContainer;
  });

  return containers;
};
