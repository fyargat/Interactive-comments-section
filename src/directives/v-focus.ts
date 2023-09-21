export const focusDirective = {
  // Привязка директивы к элементу (привязываем обработчик при привязке директивы)
  mounted(el: HTMLElement) {
    // Устанавливаем фокус на элементе
    el.focus();
  },
};
