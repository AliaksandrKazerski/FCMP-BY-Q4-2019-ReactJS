export function getOffset(activePage, limit) {
  if (activePage === 1) {
    return '0';
  }
  return `${activePage * limit - limit}`;
}
