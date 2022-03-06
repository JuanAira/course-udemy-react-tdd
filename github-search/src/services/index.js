const API_BASE = 'https://api.github.com';

const baseUrl =
  process.env.NODE_ENV === 'test' ? '' : API_BASE

export const getRepos = ({q, rowsPerPage, currentPage}) =>
  fetch(
    `${baseUrl}/search/repositories?q=${q}&page=${currentPage}&per_page=${rowsPerPage}`,
  )

export default {
  getRepos,
}
