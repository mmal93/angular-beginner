const getFirstItem = <T>(items: T[]): T | null => items.length > 0 ? items[0] : null;
export default getFirstItem
