export type Page <T> = {
  results: T[],
  pages: number
}
export const Paged = <T> ({results, pages}: Page<T>) => ({
  results,
  pages
});
