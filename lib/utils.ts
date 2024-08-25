import slugify from 'slugify';

function includesValue(
  items: string | string[] | undefined,
  values: string | string[] | undefined,
) {
  if (!items || !values) return false;
  if (typeof items === 'string') {
    if (typeof values === 'string') return items === toSlug(values);
    // os platform contains array of nested objects
    return values.some((val: any) => {
      return val.name.toLowerCase() === items.toLowerCase();
    });
  } else if (typeof items === 'object') {
    if (typeof values === 'string') return items.includes(toSlug(values));
    // os platform contains array of nested objects
    return items.some((item: string) => {
      return values.some((val: any) => {
        return val.name.toLowerCase() === item.toLowerCase();
      });
    });
  }
}

function toSlug(input: string) {
  return slugify(input || '', {
    lower: true,
  });
}

export { includesValue, toSlug };
