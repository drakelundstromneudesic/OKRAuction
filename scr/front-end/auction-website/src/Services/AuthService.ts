export const getAuthToken = () : string | undefined => ( 
    JSON.parse(localStorage.getItem('okta-token-storage') || '{}')?.accessToken?.value
)