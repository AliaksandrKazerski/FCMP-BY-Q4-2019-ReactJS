export function getOffset(activePage, limit) {
  if (activePage === 1) {
    return '0';
  }
  return `${activePage * limit - limit}`;
}

export function getPageFromOffset(offset, limit) {
  if (offset === '0') {
    return 1;
  }
  return offset / limit + 1;
}
