export const getUrlPaths = (url = window.location.pathname) => url.split('/').filter(Boolean);

export const getUrlSlug = (url = window.location.pathname, ofPage = '') =>
  !ofPage
    ? [url.split('/').filter(Boolean).pop()] // returns last page inside array
    : url.includes(ofPage)
    ? url.split(`/${ofPage}`).pop().split('/').filter(Boolean)
    : null; // url doesnt include page

export const getUrlBase = (url = window.location.pathname) => url.split('/').filter(Boolean).shift();