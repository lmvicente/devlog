export function slugify(id: string) {
  return id.replaceAll("/", "-");
}