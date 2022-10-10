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

  Object.keys(elementStyles).forEach(
    (key) => (element.style[key] = elementStyles[key])
  );

  Object.keys(elementAttributes).forEach((key) =>
    element.setAttribute(key, elementAttributes[key])
  );

  Object.keys(elementProps).forEach(
    (key) => (element[key] = elementProps[key])
  );
  Object.keys(elementEventHandlers).forEach((key) =>
    element.addEventListener(key, elementEventHandlers[key])
  );

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
