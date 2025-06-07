const isGithubPages = process.env.GITHUB_PAGES === 'true';
const repoName = 'CasaVidaSite';

module.exports = {
  trailingSlash: true,
  assetPrefix: isGithubPages ? `/${repoName}/` : '',
  basePath: isGithubPages ? `/${repoName}` : '',
};
