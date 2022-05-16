export const changeDataTheme = (theme: string) => {
  switch (theme) {
    case 'light':
      document.documentElement.setAttribute('data-theme', 'light');
      break
    case 'dark':
      document.documentElement.setAttribute('data-theme', 'dark');
      break
    default:
      break
  }
}