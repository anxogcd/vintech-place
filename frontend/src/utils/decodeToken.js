function decodeToken(token) {
  if (!token) {
    return undefined;
  }
  const tokenPieces = token.split(".");
  const tokenBase64 = tokenPieces[1];
  const decodedToken = atob(tokenBase64);

  return JSON.parse(decodedToken);
}

export default decodeToken;
